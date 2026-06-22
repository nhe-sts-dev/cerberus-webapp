"use client";

import { api } from "~/trpc/react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine
} from "recharts";
import { useState } from "react";

// 1. Define Types to cast the Prisma JSON objects
interface CurveData {
  fpr: number[]; tpr: number[]; 
  recall: number[]; precision: number[];
}

interface ModelMetrics {
  accuracy: number;
  precision: number;
  recall: number;
  f1: number;
  roc_auc: number;
  pr_auc: number;
  optimal_threshold: number;
  curve_data?: { roc: CurveData; pr: CurveData };
  confusion_matrix: { TN: number; FP: number; FN: number; TP: number };
}

export function ModelsClient() {
  const { data: models, isLoading } = api.models.getAllModels.useQuery();
  const [buildingIds, setBuildingIds] = useState<Set<string>>(new Set());

  if (isLoading) {
    return <div className="text-center text-gray-500 py-20">Loading models...</div>;
  }

  if (!models || models.length === 0) {
    return <div className="text-center text-gray-500 py-20">No models found in the registry.</div>;
  }

  const handleBuildEAP = async (modelId: string, tfliteUrl: string | null) => {
    if (!tfliteUrl) return alert("No TFLite weights URL available.");
    
    setBuildingIds(prev => new Set(prev).add(modelId));
    
    try {
      const res = await fetch('/api/models/trigger-build', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ modelId, tfliteUrl })
      });
      
      if (!res.ok) throw new Error("Failed to trigger build");
      alert("EAP Build triggered successfully! It will be available in ~2 minutes. Refresh the page later.");
    } catch {
      alert("Error triggering build.");
    } finally {
      setBuildingIds(prev => {
        const next = new Set(prev);
        next.delete(modelId);
        return next;
      });
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {models.map((model) => {
        // Cast the JSON fields
        const metrics = model.metrics as unknown as ModelMetrics;
        const hp = model.hyperparameters as Record<string, number | string>;
        const isBuilding = buildingIds.has(model.id);

        // Format chart data by zipping the arrays together
        const rocData = metrics?.curve_data?.roc?.fpr.map((fpr, i) => ({
          fpr,
          tpr: metrics.curve_data!.roc.tpr[i],
        })) ?? [];

        const prData = metrics?.curve_data?.pr?.recall.map((recall, i) => ({
          recall,
          precision: metrics.curve_data!.pr.precision[i],
        })) ?? [];

        return (
          <div key={model.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            
            {/* CARD HEADER */}
            <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  {model.name}
                  <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-semibold">
                    v{model.version}
                  </span>
                  <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full font-semibold">
                    {model.architecture}
                  </span>
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Trained on {model.createdAt.toLocaleDateString()}
                  {model.weightsUrl && (
                    <a href={model.weightsUrl} target="_blank" rel="noreferrer" className="ml-4 text-blue-500 hover:underline">
                      Download .tflite Weights
                    </a>
                  )}
                </p>
              </div>

              {/* THE NEW BUTTONS */}
              <div className="flex gap-3">
                {model.eapUrl ? (
                  <a href={model.eapUrl} target="_blank" rel="noreferrer" 
                     className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded-md font-medium transition">
                    ⬇ Download .EAP
                  </a>
                ) : (
                  <button 
                    onClick={() => handleBuildEAP(model.id, model.weightsUrl)}
                    disabled={isBuilding || !model.weightsUrl}
                    className="bg-gray-800 disabled:bg-gray-400 hover:bg-gray-900 text-white text-sm px-4 py-2 rounded-md font-medium transition"
                  >
                    {isBuilding ? "⏳ Compiling in Cloud..." : "⚙️ Compile to .EAP"}
                  </button>
                )}
              </div>

              <div>
                <span className="bg-gray-800 text-white text-xs px-3 py-1 rounded-md font-medium tracking-wide">
                  {model.status}
                </span>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* LEFT COLUMN: METRICS & PARAMS */}
              <div className="lg:col-span-1 flex flex-col gap-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Core Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <MetricBox label="Accuracy" value={metrics?.accuracy} />
                    <MetricBox label="F1 Score" value={metrics?.f1} />
                    <MetricBox label="Recall" value={metrics?.recall} highlight />
                    <MetricBox label="Precision" value={metrics?.precision} />
                    <MetricBox label="ROC AUC" value={metrics?.roc_auc} />
                    <MetricBox label="PR AUC" value={metrics?.pr_auc} />
                  </div>
                </div>

                {metrics?.optimal_threshold && (
                  <div className="bg-green-50 border border-green-100 p-4 rounded-lg">
                    <p className="text-xs text-green-600 font-bold uppercase mb-1">Optimal Decision Threshold</p>
                    <p className="text-2xl font-black text-green-700">{metrics.optimal_threshold.toFixed(3)}</p>
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Hyperparameters</h3>
                  <div className="flex flex-wrap gap-2">
                    {hp && Object.entries(hp).map(([key, val]) => (
                      <span key={key} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md border border-gray-200">
                        <span className="font-semibold text-gray-800">{key}:</span> {val}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: CHARTS */}
              <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* ROC CURVE */}
                <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm h-72">
                  <h3 className="text-sm font-bold text-gray-700 mb-4 text-center">ROC Curve</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={rocData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
                      <XAxis dataKey="fpr" type="number" domain={[0, 1]} tick={{fontSize: 12}} />
                      <YAxis domain={[0, 1]} tick={{fontSize: 12}} />
                      <Tooltip formatter={(val: unknown) => typeof val === "number" ? val.toFixed(3) : String(val)} />
                      <ReferenceLine segment={[{x:0, y:0}, {x:1, y:1}]} stroke="#cbd5e1" strokeDasharray="3 3" />
                      <Line type="monotone" dataKey="tpr" stroke="#3b82f6" strokeWidth={3} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* PR CURVE */}
                <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm h-72">
                  <h3 className="text-sm font-bold text-gray-700 mb-4 text-center">Precision-Recall Curve</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={prData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" opacity={0.5} />
                      <XAxis dataKey="recall" type="number" domain={[0, 1]} tick={{fontSize: 12}} />
                      <YAxis domain={[0, 1]} tick={{fontSize: 12}} />
                      <Tooltip formatter={(val: unknown) => typeof val === "number" ? val.toFixed(3) : String(val)} />
                      <Line type="monotone" dataKey="precision" stroke="#8b5cf6" strokeWidth={3} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Small helper component for the metric grid
function MetricBox({ label, value, highlight = false }: { label: string; value?: number; highlight?: boolean }) {
  if (value === undefined) return null;
  return (
    <div className={`p-3 rounded-lg border ${highlight ? 'bg-indigo-50 border-indigo-100' : 'bg-gray-50 border-gray-100'}`}>
      <p className={`text-xs font-semibold ${highlight ? 'text-indigo-500' : 'text-gray-500'}`}>{label}</p>
      <p className={`text-xl font-bold ${highlight ? 'text-indigo-700' : 'text-gray-900'}`}>
        {(value * 100).toFixed(1)}%
      </p>
    </div>
  );
}