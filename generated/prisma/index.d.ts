
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model BusImage
 * 
 */
export type BusImage = $Result.DefaultSelection<Prisma.$BusImagePayload>
/**
 * Model TransponderLog
 * 
 */
export type TransponderLog = $Result.DefaultSelection<Prisma.$TransponderLogPayload>
/**
 * Model InferenceLog
 * 
 */
export type InferenceLog = $Result.DefaultSelection<Prisma.$InferenceLogPayload>
/**
 * Model Dataset
 * 
 */
export type Dataset = $Result.DefaultSelection<Prisma.$DatasetPayload>
/**
 * Model DatasetImage
 * 
 */
export type DatasetImage = $Result.DefaultSelection<Prisma.$DatasetImagePayload>
/**
 * Model ModelRegistry
 * 
 */
export type ModelRegistry = $Result.DefaultSelection<Prisma.$ModelRegistryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LabelStatus: {
  DIRTY: 'DIRTY',
  CLEAN: 'CLEAN',
  UNCERTAIN: 'UNCERTAIN',
  UNLABELED: 'UNLABELED'
};

export type LabelStatus = (typeof LabelStatus)[keyof typeof LabelStatus]


export const Weather: {
  SUNNY: 'SUNNY',
  RAINY: 'RAINY',
  OVERCAST: 'OVERCAST',
  NIGHT: 'NIGHT'
};

export type Weather = (typeof Weather)[keyof typeof Weather]


export const Angle: {
  FRONT: 'FRONT',
  SIDE: 'SIDE',
  REAR: 'REAR'
};

export type Angle = (typeof Angle)[keyof typeof Angle]


export const ModelArchitecture: {
  MOBILENET_V2: 'MOBILENET_V2',
  MOBILENET_V3: 'MOBILENET_V3',
  RESNET_18: 'RESNET_18',
  YOLO_V8: 'YOLO_V8'
};

export type ModelArchitecture = (typeof ModelArchitecture)[keyof typeof ModelArchitecture]


export const ModelStatus: {
  EXPERIMENTAL: 'EXPERIMENTAL',
  STAGING: 'STAGING',
  PRODUCTION: 'PRODUCTION',
  DEPRECATED: 'DEPRECATED'
};

export type ModelStatus = (typeof ModelStatus)[keyof typeof ModelStatus]

}

export type LabelStatus = $Enums.LabelStatus

export const LabelStatus: typeof $Enums.LabelStatus

export type Weather = $Enums.Weather

export const Weather: typeof $Enums.Weather

export type Angle = $Enums.Angle

export const Angle: typeof $Enums.Angle

export type ModelArchitecture = $Enums.ModelArchitecture

export const ModelArchitecture: typeof $Enums.ModelArchitecture

export type ModelStatus = $Enums.ModelStatus

export const ModelStatus: typeof $Enums.ModelStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.busImage`: Exposes CRUD operations for the **BusImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusImages
    * const busImages = await prisma.busImage.findMany()
    * ```
    */
  get busImage(): Prisma.BusImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transponderLog`: Exposes CRUD operations for the **TransponderLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransponderLogs
    * const transponderLogs = await prisma.transponderLog.findMany()
    * ```
    */
  get transponderLog(): Prisma.TransponderLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inferenceLog`: Exposes CRUD operations for the **InferenceLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InferenceLogs
    * const inferenceLogs = await prisma.inferenceLog.findMany()
    * ```
    */
  get inferenceLog(): Prisma.InferenceLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataset`: Exposes CRUD operations for the **Dataset** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Datasets
    * const datasets = await prisma.dataset.findMany()
    * ```
    */
  get dataset(): Prisma.DatasetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.datasetImage`: Exposes CRUD operations for the **DatasetImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DatasetImages
    * const datasetImages = await prisma.datasetImage.findMany()
    * ```
    */
  get datasetImage(): Prisma.DatasetImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modelRegistry`: Exposes CRUD operations for the **ModelRegistry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModelRegistries
    * const modelRegistries = await prisma.modelRegistry.findMany()
    * ```
    */
  get modelRegistry(): Prisma.ModelRegistryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    BusImage: 'BusImage',
    TransponderLog: 'TransponderLog',
    InferenceLog: 'InferenceLog',
    Dataset: 'Dataset',
    DatasetImage: 'DatasetImage',
    ModelRegistry: 'ModelRegistry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "user" | "session" | "account" | "verification" | "busImage" | "transponderLog" | "inferenceLog" | "dataset" | "datasetImage" | "modelRegistry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      BusImage: {
        payload: Prisma.$BusImagePayload<ExtArgs>
        fields: Prisma.BusImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusImagePayload>
          }
          findFirst: {
            args: Prisma.BusImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusImagePayload>
          }
          findMany: {
            args: Prisma.BusImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusImagePayload>[]
          }
          create: {
            args: Prisma.BusImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusImagePayload>
          }
          createMany: {
            args: Prisma.BusImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusImagePayload>[]
          }
          delete: {
            args: Prisma.BusImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusImagePayload>
          }
          update: {
            args: Prisma.BusImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusImagePayload>
          }
          deleteMany: {
            args: Prisma.BusImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusImagePayload>[]
          }
          upsert: {
            args: Prisma.BusImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusImagePayload>
          }
          aggregate: {
            args: Prisma.BusImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusImage>
          }
          groupBy: {
            args: Prisma.BusImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusImageCountArgs<ExtArgs>
            result: $Utils.Optional<BusImageCountAggregateOutputType> | number
          }
        }
      }
      TransponderLog: {
        payload: Prisma.$TransponderLogPayload<ExtArgs>
        fields: Prisma.TransponderLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransponderLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransponderLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransponderLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransponderLogPayload>
          }
          findFirst: {
            args: Prisma.TransponderLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransponderLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransponderLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransponderLogPayload>
          }
          findMany: {
            args: Prisma.TransponderLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransponderLogPayload>[]
          }
          create: {
            args: Prisma.TransponderLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransponderLogPayload>
          }
          createMany: {
            args: Prisma.TransponderLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransponderLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransponderLogPayload>[]
          }
          delete: {
            args: Prisma.TransponderLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransponderLogPayload>
          }
          update: {
            args: Prisma.TransponderLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransponderLogPayload>
          }
          deleteMany: {
            args: Prisma.TransponderLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransponderLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransponderLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransponderLogPayload>[]
          }
          upsert: {
            args: Prisma.TransponderLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransponderLogPayload>
          }
          aggregate: {
            args: Prisma.TransponderLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransponderLog>
          }
          groupBy: {
            args: Prisma.TransponderLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransponderLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransponderLogCountArgs<ExtArgs>
            result: $Utils.Optional<TransponderLogCountAggregateOutputType> | number
          }
        }
      }
      InferenceLog: {
        payload: Prisma.$InferenceLogPayload<ExtArgs>
        fields: Prisma.InferenceLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InferenceLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InferenceLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceLogPayload>
          }
          findFirst: {
            args: Prisma.InferenceLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InferenceLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceLogPayload>
          }
          findMany: {
            args: Prisma.InferenceLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceLogPayload>[]
          }
          create: {
            args: Prisma.InferenceLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceLogPayload>
          }
          createMany: {
            args: Prisma.InferenceLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InferenceLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceLogPayload>[]
          }
          delete: {
            args: Prisma.InferenceLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceLogPayload>
          }
          update: {
            args: Prisma.InferenceLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceLogPayload>
          }
          deleteMany: {
            args: Prisma.InferenceLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InferenceLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InferenceLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceLogPayload>[]
          }
          upsert: {
            args: Prisma.InferenceLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InferenceLogPayload>
          }
          aggregate: {
            args: Prisma.InferenceLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInferenceLog>
          }
          groupBy: {
            args: Prisma.InferenceLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<InferenceLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.InferenceLogCountArgs<ExtArgs>
            result: $Utils.Optional<InferenceLogCountAggregateOutputType> | number
          }
        }
      }
      Dataset: {
        payload: Prisma.$DatasetPayload<ExtArgs>
        fields: Prisma.DatasetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatasetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatasetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          findFirst: {
            args: Prisma.DatasetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatasetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          findMany: {
            args: Prisma.DatasetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          create: {
            args: Prisma.DatasetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          createMany: {
            args: Prisma.DatasetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DatasetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          delete: {
            args: Prisma.DatasetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          update: {
            args: Prisma.DatasetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          deleteMany: {
            args: Prisma.DatasetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatasetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DatasetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>[]
          }
          upsert: {
            args: Prisma.DatasetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetPayload>
          }
          aggregate: {
            args: Prisma.DatasetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataset>
          }
          groupBy: {
            args: Prisma.DatasetGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatasetGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatasetCountArgs<ExtArgs>
            result: $Utils.Optional<DatasetCountAggregateOutputType> | number
          }
        }
      }
      DatasetImage: {
        payload: Prisma.$DatasetImagePayload<ExtArgs>
        fields: Prisma.DatasetImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DatasetImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DatasetImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetImagePayload>
          }
          findFirst: {
            args: Prisma.DatasetImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DatasetImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetImagePayload>
          }
          findMany: {
            args: Prisma.DatasetImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetImagePayload>[]
          }
          create: {
            args: Prisma.DatasetImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetImagePayload>
          }
          createMany: {
            args: Prisma.DatasetImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DatasetImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetImagePayload>[]
          }
          delete: {
            args: Prisma.DatasetImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetImagePayload>
          }
          update: {
            args: Prisma.DatasetImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetImagePayload>
          }
          deleteMany: {
            args: Prisma.DatasetImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DatasetImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DatasetImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetImagePayload>[]
          }
          upsert: {
            args: Prisma.DatasetImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DatasetImagePayload>
          }
          aggregate: {
            args: Prisma.DatasetImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDatasetImage>
          }
          groupBy: {
            args: Prisma.DatasetImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<DatasetImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.DatasetImageCountArgs<ExtArgs>
            result: $Utils.Optional<DatasetImageCountAggregateOutputType> | number
          }
        }
      }
      ModelRegistry: {
        payload: Prisma.$ModelRegistryPayload<ExtArgs>
        fields: Prisma.ModelRegistryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelRegistryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRegistryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelRegistryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRegistryPayload>
          }
          findFirst: {
            args: Prisma.ModelRegistryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRegistryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelRegistryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRegistryPayload>
          }
          findMany: {
            args: Prisma.ModelRegistryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRegistryPayload>[]
          }
          create: {
            args: Prisma.ModelRegistryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRegistryPayload>
          }
          createMany: {
            args: Prisma.ModelRegistryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelRegistryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRegistryPayload>[]
          }
          delete: {
            args: Prisma.ModelRegistryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRegistryPayload>
          }
          update: {
            args: Prisma.ModelRegistryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRegistryPayload>
          }
          deleteMany: {
            args: Prisma.ModelRegistryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelRegistryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelRegistryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRegistryPayload>[]
          }
          upsert: {
            args: Prisma.ModelRegistryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelRegistryPayload>
          }
          aggregate: {
            args: Prisma.ModelRegistryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModelRegistry>
          }
          groupBy: {
            args: Prisma.ModelRegistryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelRegistryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelRegistryCountArgs<ExtArgs>
            result: $Utils.Optional<ModelRegistryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    busImage?: BusImageOmit
    transponderLog?: TransponderLogOmit
    inferenceLog?: InferenceLogOmit
    dataset?: DatasetOmit
    datasetImage?: DatasetImageOmit
    modelRegistry?: ModelRegistryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    busImages: number
    sessions: number
    accounts: number
    posts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    busImages?: boolean | UserCountOutputTypeCountBusImagesArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBusImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusImageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Count Type BusImageCountOutputType
   */

  export type BusImageCountOutputType = {
    trainingData: number
    inferences: number
    transponderLogs: number
  }

  export type BusImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trainingData?: boolean | BusImageCountOutputTypeCountTrainingDataArgs
    inferences?: boolean | BusImageCountOutputTypeCountInferencesArgs
    transponderLogs?: boolean | BusImageCountOutputTypeCountTransponderLogsArgs
  }

  // Custom InputTypes
  /**
   * BusImageCountOutputType without action
   */
  export type BusImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusImageCountOutputType
     */
    select?: BusImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusImageCountOutputType without action
   */
  export type BusImageCountOutputTypeCountTrainingDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetImageWhereInput
  }

  /**
   * BusImageCountOutputType without action
   */
  export type BusImageCountOutputTypeCountInferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InferenceLogWhereInput
  }

  /**
   * BusImageCountOutputType without action
   */
  export type BusImageCountOutputTypeCountTransponderLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransponderLogWhereInput
  }


  /**
   * Count Type DatasetCountOutputType
   */

  export type DatasetCountOutputType = {
    images: number
    models: number
  }

  export type DatasetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | DatasetCountOutputTypeCountImagesArgs
    models?: boolean | DatasetCountOutputTypeCountModelsArgs
  }

  // Custom InputTypes
  /**
   * DatasetCountOutputType without action
   */
  export type DatasetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetCountOutputType
     */
    select?: DatasetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DatasetCountOutputType without action
   */
  export type DatasetCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetImageWhereInput
  }

  /**
   * DatasetCountOutputType without action
   */
  export type DatasetCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelRegistryWhereInput
  }


  /**
   * Count Type ModelRegistryCountOutputType
   */

  export type ModelRegistryCountOutputType = {
    inferences: number
  }

  export type ModelRegistryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inferences?: boolean | ModelRegistryCountOutputTypeCountInferencesArgs
  }

  // Custom InputTypes
  /**
   * ModelRegistryCountOutputType without action
   */
  export type ModelRegistryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRegistryCountOutputType
     */
    select?: ModelRegistryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelRegistryCountOutputType without action
   */
  export type ModelRegistryCountOutputTypeCountInferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InferenceLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly name: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly createdById: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    busImages?: boolean | User$busImagesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    busImages?: boolean | User$busImagesArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      busImages: Prisma.$BusImagePayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    busImages<T extends User$busImagesArgs<ExtArgs> = {}>(args?: Subset<T, User$busImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.busImages
   */
  export type User$busImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusImage
     */
    select?: BusImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusImage
     */
    omit?: BusImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusImageInclude<ExtArgs> | null
    where?: BusImageWhereInput
    orderBy?: BusImageOrderByWithRelationInput | BusImageOrderByWithRelationInput[]
    cursor?: BusImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusImageScalarFieldEnum | BusImageScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model BusImage
   */

  export type AggregateBusImage = {
    _count: BusImageCountAggregateOutputType | null
    _avg: BusImageAvgAggregateOutputType | null
    _sum: BusImageSumAggregateOutputType | null
    _min: BusImageMinAggregateOutputType | null
    _max: BusImageMaxAggregateOutputType | null
  }

  export type BusImageAvgAggregateOutputType = {
    confidence: number | null
  }

  export type BusImageSumAggregateOutputType = {
    confidence: number | null
  }

  export type BusImageMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    label: $Enums.LabelStatus | null
    confidence: number | null
    fleetNumber: string | null
    cameraId: string | null
    timeTaken: Date | null
    weatherCondition: $Enums.Weather | null
    cameraAngle: $Enums.Angle | null
    isVerified: boolean | null
    labeledById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusImageMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    label: $Enums.LabelStatus | null
    confidence: number | null
    fleetNumber: string | null
    cameraId: string | null
    timeTaken: Date | null
    weatherCondition: $Enums.Weather | null
    cameraAngle: $Enums.Angle | null
    isVerified: boolean | null
    labeledById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusImageCountAggregateOutputType = {
    id: number
    imageUrl: number
    label: number
    confidence: number
    fleetNumber: number
    cameraId: number
    timeTaken: number
    weatherCondition: number
    cameraAngle: number
    isVerified: number
    labeledById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusImageAvgAggregateInputType = {
    confidence?: true
  }

  export type BusImageSumAggregateInputType = {
    confidence?: true
  }

  export type BusImageMinAggregateInputType = {
    id?: true
    imageUrl?: true
    label?: true
    confidence?: true
    fleetNumber?: true
    cameraId?: true
    timeTaken?: true
    weatherCondition?: true
    cameraAngle?: true
    isVerified?: true
    labeledById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusImageMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    label?: true
    confidence?: true
    fleetNumber?: true
    cameraId?: true
    timeTaken?: true
    weatherCondition?: true
    cameraAngle?: true
    isVerified?: true
    labeledById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusImageCountAggregateInputType = {
    id?: true
    imageUrl?: true
    label?: true
    confidence?: true
    fleetNumber?: true
    cameraId?: true
    timeTaken?: true
    weatherCondition?: true
    cameraAngle?: true
    isVerified?: true
    labeledById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusImage to aggregate.
     */
    where?: BusImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusImages to fetch.
     */
    orderBy?: BusImageOrderByWithRelationInput | BusImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusImages
    **/
    _count?: true | BusImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusImageMaxAggregateInputType
  }

  export type GetBusImageAggregateType<T extends BusImageAggregateArgs> = {
        [P in keyof T & keyof AggregateBusImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusImage[P]>
      : GetScalarType<T[P], AggregateBusImage[P]>
  }




  export type BusImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusImageWhereInput
    orderBy?: BusImageOrderByWithAggregationInput | BusImageOrderByWithAggregationInput[]
    by: BusImageScalarFieldEnum[] | BusImageScalarFieldEnum
    having?: BusImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusImageCountAggregateInputType | true
    _avg?: BusImageAvgAggregateInputType
    _sum?: BusImageSumAggregateInputType
    _min?: BusImageMinAggregateInputType
    _max?: BusImageMaxAggregateInputType
  }

  export type BusImageGroupByOutputType = {
    id: string
    imageUrl: string
    label: $Enums.LabelStatus | null
    confidence: number | null
    fleetNumber: string | null
    cameraId: string | null
    timeTaken: Date | null
    weatherCondition: $Enums.Weather | null
    cameraAngle: $Enums.Angle | null
    isVerified: boolean
    labeledById: string | null
    createdAt: Date
    updatedAt: Date
    _count: BusImageCountAggregateOutputType | null
    _avg: BusImageAvgAggregateOutputType | null
    _sum: BusImageSumAggregateOutputType | null
    _min: BusImageMinAggregateOutputType | null
    _max: BusImageMaxAggregateOutputType | null
  }

  type GetBusImageGroupByPayload<T extends BusImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusImageGroupByOutputType[P]>
            : GetScalarType<T[P], BusImageGroupByOutputType[P]>
        }
      >
    >


  export type BusImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    label?: boolean
    confidence?: boolean
    fleetNumber?: boolean
    cameraId?: boolean
    timeTaken?: boolean
    weatherCondition?: boolean
    cameraAngle?: boolean
    isVerified?: boolean
    labeledById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    labeledBy?: boolean | BusImage$labeledByArgs<ExtArgs>
    trainingData?: boolean | BusImage$trainingDataArgs<ExtArgs>
    inferences?: boolean | BusImage$inferencesArgs<ExtArgs>
    transponderLogs?: boolean | BusImage$transponderLogsArgs<ExtArgs>
    _count?: boolean | BusImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["busImage"]>

  export type BusImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    label?: boolean
    confidence?: boolean
    fleetNumber?: boolean
    cameraId?: boolean
    timeTaken?: boolean
    weatherCondition?: boolean
    cameraAngle?: boolean
    isVerified?: boolean
    labeledById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    labeledBy?: boolean | BusImage$labeledByArgs<ExtArgs>
  }, ExtArgs["result"]["busImage"]>

  export type BusImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    label?: boolean
    confidence?: boolean
    fleetNumber?: boolean
    cameraId?: boolean
    timeTaken?: boolean
    weatherCondition?: boolean
    cameraAngle?: boolean
    isVerified?: boolean
    labeledById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    labeledBy?: boolean | BusImage$labeledByArgs<ExtArgs>
  }, ExtArgs["result"]["busImage"]>

  export type BusImageSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    label?: boolean
    confidence?: boolean
    fleetNumber?: boolean
    cameraId?: boolean
    timeTaken?: boolean
    weatherCondition?: boolean
    cameraAngle?: boolean
    isVerified?: boolean
    labeledById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "label" | "confidence" | "fleetNumber" | "cameraId" | "timeTaken" | "weatherCondition" | "cameraAngle" | "isVerified" | "labeledById" | "createdAt" | "updatedAt", ExtArgs["result"]["busImage"]>
  export type BusImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labeledBy?: boolean | BusImage$labeledByArgs<ExtArgs>
    trainingData?: boolean | BusImage$trainingDataArgs<ExtArgs>
    inferences?: boolean | BusImage$inferencesArgs<ExtArgs>
    transponderLogs?: boolean | BusImage$transponderLogsArgs<ExtArgs>
    _count?: boolean | BusImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labeledBy?: boolean | BusImage$labeledByArgs<ExtArgs>
  }
  export type BusImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    labeledBy?: boolean | BusImage$labeledByArgs<ExtArgs>
  }

  export type $BusImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BusImage"
    objects: {
      labeledBy: Prisma.$UserPayload<ExtArgs> | null
      trainingData: Prisma.$DatasetImagePayload<ExtArgs>[]
      inferences: Prisma.$InferenceLogPayload<ExtArgs>[]
      transponderLogs: Prisma.$TransponderLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      label: $Enums.LabelStatus | null
      confidence: number | null
      fleetNumber: string | null
      cameraId: string | null
      timeTaken: Date | null
      weatherCondition: $Enums.Weather | null
      cameraAngle: $Enums.Angle | null
      isVerified: boolean
      labeledById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["busImage"]>
    composites: {}
  }

  type BusImageGetPayload<S extends boolean | null | undefined | BusImageDefaultArgs> = $Result.GetResult<Prisma.$BusImagePayload, S>

  type BusImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusImageCountAggregateInputType | true
    }

  export interface BusImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusImage'], meta: { name: 'BusImage' } }
    /**
     * Find zero or one BusImage that matches the filter.
     * @param {BusImageFindUniqueArgs} args - Arguments to find a BusImage
     * @example
     * // Get one BusImage
     * const busImage = await prisma.busImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusImageFindUniqueArgs>(args: SelectSubset<T, BusImageFindUniqueArgs<ExtArgs>>): Prisma__BusImageClient<$Result.GetResult<Prisma.$BusImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BusImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusImageFindUniqueOrThrowArgs} args - Arguments to find a BusImage
     * @example
     * // Get one BusImage
     * const busImage = await prisma.busImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusImageFindUniqueOrThrowArgs>(args: SelectSubset<T, BusImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusImageClient<$Result.GetResult<Prisma.$BusImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusImageFindFirstArgs} args - Arguments to find a BusImage
     * @example
     * // Get one BusImage
     * const busImage = await prisma.busImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusImageFindFirstArgs>(args?: SelectSubset<T, BusImageFindFirstArgs<ExtArgs>>): Prisma__BusImageClient<$Result.GetResult<Prisma.$BusImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BusImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusImageFindFirstOrThrowArgs} args - Arguments to find a BusImage
     * @example
     * // Get one BusImage
     * const busImage = await prisma.busImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusImageFindFirstOrThrowArgs>(args?: SelectSubset<T, BusImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusImageClient<$Result.GetResult<Prisma.$BusImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BusImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusImages
     * const busImages = await prisma.busImage.findMany()
     * 
     * // Get first 10 BusImages
     * const busImages = await prisma.busImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const busImageWithIdOnly = await prisma.busImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusImageFindManyArgs>(args?: SelectSubset<T, BusImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BusImage.
     * @param {BusImageCreateArgs} args - Arguments to create a BusImage.
     * @example
     * // Create one BusImage
     * const BusImage = await prisma.busImage.create({
     *   data: {
     *     // ... data to create a BusImage
     *   }
     * })
     * 
     */
    create<T extends BusImageCreateArgs>(args: SelectSubset<T, BusImageCreateArgs<ExtArgs>>): Prisma__BusImageClient<$Result.GetResult<Prisma.$BusImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BusImages.
     * @param {BusImageCreateManyArgs} args - Arguments to create many BusImages.
     * @example
     * // Create many BusImages
     * const busImage = await prisma.busImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusImageCreateManyArgs>(args?: SelectSubset<T, BusImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BusImages and returns the data saved in the database.
     * @param {BusImageCreateManyAndReturnArgs} args - Arguments to create many BusImages.
     * @example
     * // Create many BusImages
     * const busImage = await prisma.busImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BusImages and only return the `id`
     * const busImageWithIdOnly = await prisma.busImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusImageCreateManyAndReturnArgs>(args?: SelectSubset<T, BusImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BusImage.
     * @param {BusImageDeleteArgs} args - Arguments to delete one BusImage.
     * @example
     * // Delete one BusImage
     * const BusImage = await prisma.busImage.delete({
     *   where: {
     *     // ... filter to delete one BusImage
     *   }
     * })
     * 
     */
    delete<T extends BusImageDeleteArgs>(args: SelectSubset<T, BusImageDeleteArgs<ExtArgs>>): Prisma__BusImageClient<$Result.GetResult<Prisma.$BusImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BusImage.
     * @param {BusImageUpdateArgs} args - Arguments to update one BusImage.
     * @example
     * // Update one BusImage
     * const busImage = await prisma.busImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusImageUpdateArgs>(args: SelectSubset<T, BusImageUpdateArgs<ExtArgs>>): Prisma__BusImageClient<$Result.GetResult<Prisma.$BusImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BusImages.
     * @param {BusImageDeleteManyArgs} args - Arguments to filter BusImages to delete.
     * @example
     * // Delete a few BusImages
     * const { count } = await prisma.busImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusImageDeleteManyArgs>(args?: SelectSubset<T, BusImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusImages
     * const busImage = await prisma.busImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusImageUpdateManyArgs>(args: SelectSubset<T, BusImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusImages and returns the data updated in the database.
     * @param {BusImageUpdateManyAndReturnArgs} args - Arguments to update many BusImages.
     * @example
     * // Update many BusImages
     * const busImage = await prisma.busImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BusImages and only return the `id`
     * const busImageWithIdOnly = await prisma.busImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusImageUpdateManyAndReturnArgs>(args: SelectSubset<T, BusImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BusImage.
     * @param {BusImageUpsertArgs} args - Arguments to update or create a BusImage.
     * @example
     * // Update or create a BusImage
     * const busImage = await prisma.busImage.upsert({
     *   create: {
     *     // ... data to create a BusImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusImage we want to update
     *   }
     * })
     */
    upsert<T extends BusImageUpsertArgs>(args: SelectSubset<T, BusImageUpsertArgs<ExtArgs>>): Prisma__BusImageClient<$Result.GetResult<Prisma.$BusImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BusImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusImageCountArgs} args - Arguments to filter BusImages to count.
     * @example
     * // Count the number of BusImages
     * const count = await prisma.busImage.count({
     *   where: {
     *     // ... the filter for the BusImages we want to count
     *   }
     * })
    **/
    count<T extends BusImageCountArgs>(
      args?: Subset<T, BusImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusImageAggregateArgs>(args: Subset<T, BusImageAggregateArgs>): Prisma.PrismaPromise<GetBusImageAggregateType<T>>

    /**
     * Group by BusImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusImageGroupByArgs['orderBy'] }
        : { orderBy?: BusImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusImage model
   */
  readonly fields: BusImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    labeledBy<T extends BusImage$labeledByArgs<ExtArgs> = {}>(args?: Subset<T, BusImage$labeledByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trainingData<T extends BusImage$trainingDataArgs<ExtArgs> = {}>(args?: Subset<T, BusImage$trainingDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inferences<T extends BusImage$inferencesArgs<ExtArgs> = {}>(args?: Subset<T, BusImage$inferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InferenceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transponderLogs<T extends BusImage$transponderLogsArgs<ExtArgs> = {}>(args?: Subset<T, BusImage$transponderLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransponderLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BusImage model
   */
  interface BusImageFieldRefs {
    readonly id: FieldRef<"BusImage", 'String'>
    readonly imageUrl: FieldRef<"BusImage", 'String'>
    readonly label: FieldRef<"BusImage", 'LabelStatus'>
    readonly confidence: FieldRef<"BusImage", 'Int'>
    readonly fleetNumber: FieldRef<"BusImage", 'String'>
    readonly cameraId: FieldRef<"BusImage", 'String'>
    readonly timeTaken: FieldRef<"BusImage", 'DateTime'>
    readonly weatherCondition: FieldRef<"BusImage", 'Weather'>
    readonly cameraAngle: FieldRef<"BusImage", 'Angle'>
    readonly isVerified: FieldRef<"BusImage", 'Boolean'>
    readonly labeledById: FieldRef<"BusImage", 'String'>
    readonly createdAt: FieldRef<"BusImage", 'DateTime'>
    readonly updatedAt: FieldRef<"BusImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BusImage findUnique
   */
  export type BusImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusImage
     */
    select?: BusImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusImage
     */
    omit?: BusImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusImageInclude<ExtArgs> | null
    /**
     * Filter, which BusImage to fetch.
     */
    where: BusImageWhereUniqueInput
  }

  /**
   * BusImage findUniqueOrThrow
   */
  export type BusImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusImage
     */
    select?: BusImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusImage
     */
    omit?: BusImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusImageInclude<ExtArgs> | null
    /**
     * Filter, which BusImage to fetch.
     */
    where: BusImageWhereUniqueInput
  }

  /**
   * BusImage findFirst
   */
  export type BusImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusImage
     */
    select?: BusImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusImage
     */
    omit?: BusImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusImageInclude<ExtArgs> | null
    /**
     * Filter, which BusImage to fetch.
     */
    where?: BusImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusImages to fetch.
     */
    orderBy?: BusImageOrderByWithRelationInput | BusImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusImages.
     */
    cursor?: BusImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusImages.
     */
    distinct?: BusImageScalarFieldEnum | BusImageScalarFieldEnum[]
  }

  /**
   * BusImage findFirstOrThrow
   */
  export type BusImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusImage
     */
    select?: BusImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusImage
     */
    omit?: BusImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusImageInclude<ExtArgs> | null
    /**
     * Filter, which BusImage to fetch.
     */
    where?: BusImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusImages to fetch.
     */
    orderBy?: BusImageOrderByWithRelationInput | BusImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusImages.
     */
    cursor?: BusImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusImages.
     */
    distinct?: BusImageScalarFieldEnum | BusImageScalarFieldEnum[]
  }

  /**
   * BusImage findMany
   */
  export type BusImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusImage
     */
    select?: BusImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusImage
     */
    omit?: BusImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusImageInclude<ExtArgs> | null
    /**
     * Filter, which BusImages to fetch.
     */
    where?: BusImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusImages to fetch.
     */
    orderBy?: BusImageOrderByWithRelationInput | BusImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusImages.
     */
    cursor?: BusImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusImages.
     */
    skip?: number
    distinct?: BusImageScalarFieldEnum | BusImageScalarFieldEnum[]
  }

  /**
   * BusImage create
   */
  export type BusImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusImage
     */
    select?: BusImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusImage
     */
    omit?: BusImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusImageInclude<ExtArgs> | null
    /**
     * The data needed to create a BusImage.
     */
    data: XOR<BusImageCreateInput, BusImageUncheckedCreateInput>
  }

  /**
   * BusImage createMany
   */
  export type BusImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusImages.
     */
    data: BusImageCreateManyInput | BusImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BusImage createManyAndReturn
   */
  export type BusImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusImage
     */
    select?: BusImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusImage
     */
    omit?: BusImageOmit<ExtArgs> | null
    /**
     * The data used to create many BusImages.
     */
    data: BusImageCreateManyInput | BusImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusImage update
   */
  export type BusImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusImage
     */
    select?: BusImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusImage
     */
    omit?: BusImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusImageInclude<ExtArgs> | null
    /**
     * The data needed to update a BusImage.
     */
    data: XOR<BusImageUpdateInput, BusImageUncheckedUpdateInput>
    /**
     * Choose, which BusImage to update.
     */
    where: BusImageWhereUniqueInput
  }

  /**
   * BusImage updateMany
   */
  export type BusImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusImages.
     */
    data: XOR<BusImageUpdateManyMutationInput, BusImageUncheckedUpdateManyInput>
    /**
     * Filter which BusImages to update
     */
    where?: BusImageWhereInput
    /**
     * Limit how many BusImages to update.
     */
    limit?: number
  }

  /**
   * BusImage updateManyAndReturn
   */
  export type BusImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusImage
     */
    select?: BusImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BusImage
     */
    omit?: BusImageOmit<ExtArgs> | null
    /**
     * The data used to update BusImages.
     */
    data: XOR<BusImageUpdateManyMutationInput, BusImageUncheckedUpdateManyInput>
    /**
     * Filter which BusImages to update
     */
    where?: BusImageWhereInput
    /**
     * Limit how many BusImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BusImage upsert
   */
  export type BusImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusImage
     */
    select?: BusImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusImage
     */
    omit?: BusImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusImageInclude<ExtArgs> | null
    /**
     * The filter to search for the BusImage to update in case it exists.
     */
    where: BusImageWhereUniqueInput
    /**
     * In case the BusImage found by the `where` argument doesn't exist, create a new BusImage with this data.
     */
    create: XOR<BusImageCreateInput, BusImageUncheckedCreateInput>
    /**
     * In case the BusImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusImageUpdateInput, BusImageUncheckedUpdateInput>
  }

  /**
   * BusImage delete
   */
  export type BusImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusImage
     */
    select?: BusImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusImage
     */
    omit?: BusImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusImageInclude<ExtArgs> | null
    /**
     * Filter which BusImage to delete.
     */
    where: BusImageWhereUniqueInput
  }

  /**
   * BusImage deleteMany
   */
  export type BusImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusImages to delete
     */
    where?: BusImageWhereInput
    /**
     * Limit how many BusImages to delete.
     */
    limit?: number
  }

  /**
   * BusImage.labeledBy
   */
  export type BusImage$labeledByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * BusImage.trainingData
   */
  export type BusImage$trainingDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetImage
     */
    select?: DatasetImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetImage
     */
    omit?: DatasetImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetImageInclude<ExtArgs> | null
    where?: DatasetImageWhereInput
    orderBy?: DatasetImageOrderByWithRelationInput | DatasetImageOrderByWithRelationInput[]
    cursor?: DatasetImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatasetImageScalarFieldEnum | DatasetImageScalarFieldEnum[]
  }

  /**
   * BusImage.inferences
   */
  export type BusImage$inferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceLog
     */
    select?: InferenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceLog
     */
    omit?: InferenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceLogInclude<ExtArgs> | null
    where?: InferenceLogWhereInput
    orderBy?: InferenceLogOrderByWithRelationInput | InferenceLogOrderByWithRelationInput[]
    cursor?: InferenceLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InferenceLogScalarFieldEnum | InferenceLogScalarFieldEnum[]
  }

  /**
   * BusImage.transponderLogs
   */
  export type BusImage$transponderLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransponderLog
     */
    select?: TransponderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransponderLog
     */
    omit?: TransponderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransponderLogInclude<ExtArgs> | null
    where?: TransponderLogWhereInput
    orderBy?: TransponderLogOrderByWithRelationInput | TransponderLogOrderByWithRelationInput[]
    cursor?: TransponderLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransponderLogScalarFieldEnum | TransponderLogScalarFieldEnum[]
  }

  /**
   * BusImage without action
   */
  export type BusImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusImage
     */
    select?: BusImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusImage
     */
    omit?: BusImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusImageInclude<ExtArgs> | null
  }


  /**
   * Model TransponderLog
   */

  export type AggregateTransponderLog = {
    _count: TransponderLogCountAggregateOutputType | null
    _min: TransponderLogMinAggregateOutputType | null
    _max: TransponderLogMaxAggregateOutputType | null
  }

  export type TransponderLogMinAggregateOutputType = {
    id: string | null
    fleetNumber: string | null
    gateId: string | null
    timestamp: Date | null
    matchedImageId: string | null
    createdAt: Date | null
  }

  export type TransponderLogMaxAggregateOutputType = {
    id: string | null
    fleetNumber: string | null
    gateId: string | null
    timestamp: Date | null
    matchedImageId: string | null
    createdAt: Date | null
  }

  export type TransponderLogCountAggregateOutputType = {
    id: number
    fleetNumber: number
    gateId: number
    timestamp: number
    matchedImageId: number
    createdAt: number
    _all: number
  }


  export type TransponderLogMinAggregateInputType = {
    id?: true
    fleetNumber?: true
    gateId?: true
    timestamp?: true
    matchedImageId?: true
    createdAt?: true
  }

  export type TransponderLogMaxAggregateInputType = {
    id?: true
    fleetNumber?: true
    gateId?: true
    timestamp?: true
    matchedImageId?: true
    createdAt?: true
  }

  export type TransponderLogCountAggregateInputType = {
    id?: true
    fleetNumber?: true
    gateId?: true
    timestamp?: true
    matchedImageId?: true
    createdAt?: true
    _all?: true
  }

  export type TransponderLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransponderLog to aggregate.
     */
    where?: TransponderLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransponderLogs to fetch.
     */
    orderBy?: TransponderLogOrderByWithRelationInput | TransponderLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransponderLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransponderLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransponderLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransponderLogs
    **/
    _count?: true | TransponderLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransponderLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransponderLogMaxAggregateInputType
  }

  export type GetTransponderLogAggregateType<T extends TransponderLogAggregateArgs> = {
        [P in keyof T & keyof AggregateTransponderLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransponderLog[P]>
      : GetScalarType<T[P], AggregateTransponderLog[P]>
  }




  export type TransponderLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransponderLogWhereInput
    orderBy?: TransponderLogOrderByWithAggregationInput | TransponderLogOrderByWithAggregationInput[]
    by: TransponderLogScalarFieldEnum[] | TransponderLogScalarFieldEnum
    having?: TransponderLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransponderLogCountAggregateInputType | true
    _min?: TransponderLogMinAggregateInputType
    _max?: TransponderLogMaxAggregateInputType
  }

  export type TransponderLogGroupByOutputType = {
    id: string
    fleetNumber: string
    gateId: string | null
    timestamp: Date
    matchedImageId: string | null
    createdAt: Date
    _count: TransponderLogCountAggregateOutputType | null
    _min: TransponderLogMinAggregateOutputType | null
    _max: TransponderLogMaxAggregateOutputType | null
  }

  type GetTransponderLogGroupByPayload<T extends TransponderLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransponderLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransponderLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransponderLogGroupByOutputType[P]>
            : GetScalarType<T[P], TransponderLogGroupByOutputType[P]>
        }
      >
    >


  export type TransponderLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fleetNumber?: boolean
    gateId?: boolean
    timestamp?: boolean
    matchedImageId?: boolean
    createdAt?: boolean
    matchedImage?: boolean | TransponderLog$matchedImageArgs<ExtArgs>
  }, ExtArgs["result"]["transponderLog"]>

  export type TransponderLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fleetNumber?: boolean
    gateId?: boolean
    timestamp?: boolean
    matchedImageId?: boolean
    createdAt?: boolean
    matchedImage?: boolean | TransponderLog$matchedImageArgs<ExtArgs>
  }, ExtArgs["result"]["transponderLog"]>

  export type TransponderLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fleetNumber?: boolean
    gateId?: boolean
    timestamp?: boolean
    matchedImageId?: boolean
    createdAt?: boolean
    matchedImage?: boolean | TransponderLog$matchedImageArgs<ExtArgs>
  }, ExtArgs["result"]["transponderLog"]>

  export type TransponderLogSelectScalar = {
    id?: boolean
    fleetNumber?: boolean
    gateId?: boolean
    timestamp?: boolean
    matchedImageId?: boolean
    createdAt?: boolean
  }

  export type TransponderLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fleetNumber" | "gateId" | "timestamp" | "matchedImageId" | "createdAt", ExtArgs["result"]["transponderLog"]>
  export type TransponderLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchedImage?: boolean | TransponderLog$matchedImageArgs<ExtArgs>
  }
  export type TransponderLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchedImage?: boolean | TransponderLog$matchedImageArgs<ExtArgs>
  }
  export type TransponderLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchedImage?: boolean | TransponderLog$matchedImageArgs<ExtArgs>
  }

  export type $TransponderLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransponderLog"
    objects: {
      matchedImage: Prisma.$BusImagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fleetNumber: string
      gateId: string | null
      timestamp: Date
      matchedImageId: string | null
      createdAt: Date
    }, ExtArgs["result"]["transponderLog"]>
    composites: {}
  }

  type TransponderLogGetPayload<S extends boolean | null | undefined | TransponderLogDefaultArgs> = $Result.GetResult<Prisma.$TransponderLogPayload, S>

  type TransponderLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransponderLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransponderLogCountAggregateInputType | true
    }

  export interface TransponderLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransponderLog'], meta: { name: 'TransponderLog' } }
    /**
     * Find zero or one TransponderLog that matches the filter.
     * @param {TransponderLogFindUniqueArgs} args - Arguments to find a TransponderLog
     * @example
     * // Get one TransponderLog
     * const transponderLog = await prisma.transponderLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransponderLogFindUniqueArgs>(args: SelectSubset<T, TransponderLogFindUniqueArgs<ExtArgs>>): Prisma__TransponderLogClient<$Result.GetResult<Prisma.$TransponderLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransponderLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransponderLogFindUniqueOrThrowArgs} args - Arguments to find a TransponderLog
     * @example
     * // Get one TransponderLog
     * const transponderLog = await prisma.transponderLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransponderLogFindUniqueOrThrowArgs>(args: SelectSubset<T, TransponderLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransponderLogClient<$Result.GetResult<Prisma.$TransponderLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransponderLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransponderLogFindFirstArgs} args - Arguments to find a TransponderLog
     * @example
     * // Get one TransponderLog
     * const transponderLog = await prisma.transponderLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransponderLogFindFirstArgs>(args?: SelectSubset<T, TransponderLogFindFirstArgs<ExtArgs>>): Prisma__TransponderLogClient<$Result.GetResult<Prisma.$TransponderLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransponderLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransponderLogFindFirstOrThrowArgs} args - Arguments to find a TransponderLog
     * @example
     * // Get one TransponderLog
     * const transponderLog = await prisma.transponderLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransponderLogFindFirstOrThrowArgs>(args?: SelectSubset<T, TransponderLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransponderLogClient<$Result.GetResult<Prisma.$TransponderLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransponderLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransponderLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransponderLogs
     * const transponderLogs = await prisma.transponderLog.findMany()
     * 
     * // Get first 10 TransponderLogs
     * const transponderLogs = await prisma.transponderLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transponderLogWithIdOnly = await prisma.transponderLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransponderLogFindManyArgs>(args?: SelectSubset<T, TransponderLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransponderLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransponderLog.
     * @param {TransponderLogCreateArgs} args - Arguments to create a TransponderLog.
     * @example
     * // Create one TransponderLog
     * const TransponderLog = await prisma.transponderLog.create({
     *   data: {
     *     // ... data to create a TransponderLog
     *   }
     * })
     * 
     */
    create<T extends TransponderLogCreateArgs>(args: SelectSubset<T, TransponderLogCreateArgs<ExtArgs>>): Prisma__TransponderLogClient<$Result.GetResult<Prisma.$TransponderLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransponderLogs.
     * @param {TransponderLogCreateManyArgs} args - Arguments to create many TransponderLogs.
     * @example
     * // Create many TransponderLogs
     * const transponderLog = await prisma.transponderLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransponderLogCreateManyArgs>(args?: SelectSubset<T, TransponderLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransponderLogs and returns the data saved in the database.
     * @param {TransponderLogCreateManyAndReturnArgs} args - Arguments to create many TransponderLogs.
     * @example
     * // Create many TransponderLogs
     * const transponderLog = await prisma.transponderLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransponderLogs and only return the `id`
     * const transponderLogWithIdOnly = await prisma.transponderLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransponderLogCreateManyAndReturnArgs>(args?: SelectSubset<T, TransponderLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransponderLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransponderLog.
     * @param {TransponderLogDeleteArgs} args - Arguments to delete one TransponderLog.
     * @example
     * // Delete one TransponderLog
     * const TransponderLog = await prisma.transponderLog.delete({
     *   where: {
     *     // ... filter to delete one TransponderLog
     *   }
     * })
     * 
     */
    delete<T extends TransponderLogDeleteArgs>(args: SelectSubset<T, TransponderLogDeleteArgs<ExtArgs>>): Prisma__TransponderLogClient<$Result.GetResult<Prisma.$TransponderLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransponderLog.
     * @param {TransponderLogUpdateArgs} args - Arguments to update one TransponderLog.
     * @example
     * // Update one TransponderLog
     * const transponderLog = await prisma.transponderLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransponderLogUpdateArgs>(args: SelectSubset<T, TransponderLogUpdateArgs<ExtArgs>>): Prisma__TransponderLogClient<$Result.GetResult<Prisma.$TransponderLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransponderLogs.
     * @param {TransponderLogDeleteManyArgs} args - Arguments to filter TransponderLogs to delete.
     * @example
     * // Delete a few TransponderLogs
     * const { count } = await prisma.transponderLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransponderLogDeleteManyArgs>(args?: SelectSubset<T, TransponderLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransponderLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransponderLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransponderLogs
     * const transponderLog = await prisma.transponderLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransponderLogUpdateManyArgs>(args: SelectSubset<T, TransponderLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransponderLogs and returns the data updated in the database.
     * @param {TransponderLogUpdateManyAndReturnArgs} args - Arguments to update many TransponderLogs.
     * @example
     * // Update many TransponderLogs
     * const transponderLog = await prisma.transponderLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransponderLogs and only return the `id`
     * const transponderLogWithIdOnly = await prisma.transponderLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransponderLogUpdateManyAndReturnArgs>(args: SelectSubset<T, TransponderLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransponderLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransponderLog.
     * @param {TransponderLogUpsertArgs} args - Arguments to update or create a TransponderLog.
     * @example
     * // Update or create a TransponderLog
     * const transponderLog = await prisma.transponderLog.upsert({
     *   create: {
     *     // ... data to create a TransponderLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransponderLog we want to update
     *   }
     * })
     */
    upsert<T extends TransponderLogUpsertArgs>(args: SelectSubset<T, TransponderLogUpsertArgs<ExtArgs>>): Prisma__TransponderLogClient<$Result.GetResult<Prisma.$TransponderLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransponderLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransponderLogCountArgs} args - Arguments to filter TransponderLogs to count.
     * @example
     * // Count the number of TransponderLogs
     * const count = await prisma.transponderLog.count({
     *   where: {
     *     // ... the filter for the TransponderLogs we want to count
     *   }
     * })
    **/
    count<T extends TransponderLogCountArgs>(
      args?: Subset<T, TransponderLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransponderLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransponderLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransponderLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransponderLogAggregateArgs>(args: Subset<T, TransponderLogAggregateArgs>): Prisma.PrismaPromise<GetTransponderLogAggregateType<T>>

    /**
     * Group by TransponderLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransponderLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransponderLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransponderLogGroupByArgs['orderBy'] }
        : { orderBy?: TransponderLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransponderLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransponderLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransponderLog model
   */
  readonly fields: TransponderLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransponderLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransponderLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matchedImage<T extends TransponderLog$matchedImageArgs<ExtArgs> = {}>(args?: Subset<T, TransponderLog$matchedImageArgs<ExtArgs>>): Prisma__BusImageClient<$Result.GetResult<Prisma.$BusImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransponderLog model
   */
  interface TransponderLogFieldRefs {
    readonly id: FieldRef<"TransponderLog", 'String'>
    readonly fleetNumber: FieldRef<"TransponderLog", 'String'>
    readonly gateId: FieldRef<"TransponderLog", 'String'>
    readonly timestamp: FieldRef<"TransponderLog", 'DateTime'>
    readonly matchedImageId: FieldRef<"TransponderLog", 'String'>
    readonly createdAt: FieldRef<"TransponderLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TransponderLog findUnique
   */
  export type TransponderLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransponderLog
     */
    select?: TransponderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransponderLog
     */
    omit?: TransponderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransponderLogInclude<ExtArgs> | null
    /**
     * Filter, which TransponderLog to fetch.
     */
    where: TransponderLogWhereUniqueInput
  }

  /**
   * TransponderLog findUniqueOrThrow
   */
  export type TransponderLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransponderLog
     */
    select?: TransponderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransponderLog
     */
    omit?: TransponderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransponderLogInclude<ExtArgs> | null
    /**
     * Filter, which TransponderLog to fetch.
     */
    where: TransponderLogWhereUniqueInput
  }

  /**
   * TransponderLog findFirst
   */
  export type TransponderLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransponderLog
     */
    select?: TransponderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransponderLog
     */
    omit?: TransponderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransponderLogInclude<ExtArgs> | null
    /**
     * Filter, which TransponderLog to fetch.
     */
    where?: TransponderLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransponderLogs to fetch.
     */
    orderBy?: TransponderLogOrderByWithRelationInput | TransponderLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransponderLogs.
     */
    cursor?: TransponderLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransponderLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransponderLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransponderLogs.
     */
    distinct?: TransponderLogScalarFieldEnum | TransponderLogScalarFieldEnum[]
  }

  /**
   * TransponderLog findFirstOrThrow
   */
  export type TransponderLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransponderLog
     */
    select?: TransponderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransponderLog
     */
    omit?: TransponderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransponderLogInclude<ExtArgs> | null
    /**
     * Filter, which TransponderLog to fetch.
     */
    where?: TransponderLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransponderLogs to fetch.
     */
    orderBy?: TransponderLogOrderByWithRelationInput | TransponderLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransponderLogs.
     */
    cursor?: TransponderLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransponderLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransponderLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransponderLogs.
     */
    distinct?: TransponderLogScalarFieldEnum | TransponderLogScalarFieldEnum[]
  }

  /**
   * TransponderLog findMany
   */
  export type TransponderLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransponderLog
     */
    select?: TransponderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransponderLog
     */
    omit?: TransponderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransponderLogInclude<ExtArgs> | null
    /**
     * Filter, which TransponderLogs to fetch.
     */
    where?: TransponderLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransponderLogs to fetch.
     */
    orderBy?: TransponderLogOrderByWithRelationInput | TransponderLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransponderLogs.
     */
    cursor?: TransponderLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransponderLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransponderLogs.
     */
    skip?: number
    distinct?: TransponderLogScalarFieldEnum | TransponderLogScalarFieldEnum[]
  }

  /**
   * TransponderLog create
   */
  export type TransponderLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransponderLog
     */
    select?: TransponderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransponderLog
     */
    omit?: TransponderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransponderLogInclude<ExtArgs> | null
    /**
     * The data needed to create a TransponderLog.
     */
    data: XOR<TransponderLogCreateInput, TransponderLogUncheckedCreateInput>
  }

  /**
   * TransponderLog createMany
   */
  export type TransponderLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransponderLogs.
     */
    data: TransponderLogCreateManyInput | TransponderLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransponderLog createManyAndReturn
   */
  export type TransponderLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransponderLog
     */
    select?: TransponderLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransponderLog
     */
    omit?: TransponderLogOmit<ExtArgs> | null
    /**
     * The data used to create many TransponderLogs.
     */
    data: TransponderLogCreateManyInput | TransponderLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransponderLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransponderLog update
   */
  export type TransponderLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransponderLog
     */
    select?: TransponderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransponderLog
     */
    omit?: TransponderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransponderLogInclude<ExtArgs> | null
    /**
     * The data needed to update a TransponderLog.
     */
    data: XOR<TransponderLogUpdateInput, TransponderLogUncheckedUpdateInput>
    /**
     * Choose, which TransponderLog to update.
     */
    where: TransponderLogWhereUniqueInput
  }

  /**
   * TransponderLog updateMany
   */
  export type TransponderLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransponderLogs.
     */
    data: XOR<TransponderLogUpdateManyMutationInput, TransponderLogUncheckedUpdateManyInput>
    /**
     * Filter which TransponderLogs to update
     */
    where?: TransponderLogWhereInput
    /**
     * Limit how many TransponderLogs to update.
     */
    limit?: number
  }

  /**
   * TransponderLog updateManyAndReturn
   */
  export type TransponderLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransponderLog
     */
    select?: TransponderLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransponderLog
     */
    omit?: TransponderLogOmit<ExtArgs> | null
    /**
     * The data used to update TransponderLogs.
     */
    data: XOR<TransponderLogUpdateManyMutationInput, TransponderLogUncheckedUpdateManyInput>
    /**
     * Filter which TransponderLogs to update
     */
    where?: TransponderLogWhereInput
    /**
     * Limit how many TransponderLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransponderLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransponderLog upsert
   */
  export type TransponderLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransponderLog
     */
    select?: TransponderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransponderLog
     */
    omit?: TransponderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransponderLogInclude<ExtArgs> | null
    /**
     * The filter to search for the TransponderLog to update in case it exists.
     */
    where: TransponderLogWhereUniqueInput
    /**
     * In case the TransponderLog found by the `where` argument doesn't exist, create a new TransponderLog with this data.
     */
    create: XOR<TransponderLogCreateInput, TransponderLogUncheckedCreateInput>
    /**
     * In case the TransponderLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransponderLogUpdateInput, TransponderLogUncheckedUpdateInput>
  }

  /**
   * TransponderLog delete
   */
  export type TransponderLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransponderLog
     */
    select?: TransponderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransponderLog
     */
    omit?: TransponderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransponderLogInclude<ExtArgs> | null
    /**
     * Filter which TransponderLog to delete.
     */
    where: TransponderLogWhereUniqueInput
  }

  /**
   * TransponderLog deleteMany
   */
  export type TransponderLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransponderLogs to delete
     */
    where?: TransponderLogWhereInput
    /**
     * Limit how many TransponderLogs to delete.
     */
    limit?: number
  }

  /**
   * TransponderLog.matchedImage
   */
  export type TransponderLog$matchedImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusImage
     */
    select?: BusImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BusImage
     */
    omit?: BusImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusImageInclude<ExtArgs> | null
    where?: BusImageWhereInput
  }

  /**
   * TransponderLog without action
   */
  export type TransponderLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransponderLog
     */
    select?: TransponderLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransponderLog
     */
    omit?: TransponderLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransponderLogInclude<ExtArgs> | null
  }


  /**
   * Model InferenceLog
   */

  export type AggregateInferenceLog = {
    _count: InferenceLogCountAggregateOutputType | null
    _avg: InferenceLogAvgAggregateOutputType | null
    _sum: InferenceLogSumAggregateOutputType | null
    _min: InferenceLogMinAggregateOutputType | null
    _max: InferenceLogMaxAggregateOutputType | null
  }

  export type InferenceLogAvgAggregateOutputType = {
    confidence: number | null
  }

  export type InferenceLogSumAggregateOutputType = {
    confidence: number | null
  }

  export type InferenceLogMinAggregateOutputType = {
    id: string | null
    predictedLabel: $Enums.LabelStatus | null
    confidence: number | null
    imageId: string | null
    modelId: string | null
    createdAt: Date | null
  }

  export type InferenceLogMaxAggregateOutputType = {
    id: string | null
    predictedLabel: $Enums.LabelStatus | null
    confidence: number | null
    imageId: string | null
    modelId: string | null
    createdAt: Date | null
  }

  export type InferenceLogCountAggregateOutputType = {
    id: number
    predictedLabel: number
    confidence: number
    imageId: number
    modelId: number
    createdAt: number
    _all: number
  }


  export type InferenceLogAvgAggregateInputType = {
    confidence?: true
  }

  export type InferenceLogSumAggregateInputType = {
    confidence?: true
  }

  export type InferenceLogMinAggregateInputType = {
    id?: true
    predictedLabel?: true
    confidence?: true
    imageId?: true
    modelId?: true
    createdAt?: true
  }

  export type InferenceLogMaxAggregateInputType = {
    id?: true
    predictedLabel?: true
    confidence?: true
    imageId?: true
    modelId?: true
    createdAt?: true
  }

  export type InferenceLogCountAggregateInputType = {
    id?: true
    predictedLabel?: true
    confidence?: true
    imageId?: true
    modelId?: true
    createdAt?: true
    _all?: true
  }

  export type InferenceLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InferenceLog to aggregate.
     */
    where?: InferenceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InferenceLogs to fetch.
     */
    orderBy?: InferenceLogOrderByWithRelationInput | InferenceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InferenceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InferenceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InferenceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InferenceLogs
    **/
    _count?: true | InferenceLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InferenceLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InferenceLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InferenceLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InferenceLogMaxAggregateInputType
  }

  export type GetInferenceLogAggregateType<T extends InferenceLogAggregateArgs> = {
        [P in keyof T & keyof AggregateInferenceLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInferenceLog[P]>
      : GetScalarType<T[P], AggregateInferenceLog[P]>
  }




  export type InferenceLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InferenceLogWhereInput
    orderBy?: InferenceLogOrderByWithAggregationInput | InferenceLogOrderByWithAggregationInput[]
    by: InferenceLogScalarFieldEnum[] | InferenceLogScalarFieldEnum
    having?: InferenceLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InferenceLogCountAggregateInputType | true
    _avg?: InferenceLogAvgAggregateInputType
    _sum?: InferenceLogSumAggregateInputType
    _min?: InferenceLogMinAggregateInputType
    _max?: InferenceLogMaxAggregateInputType
  }

  export type InferenceLogGroupByOutputType = {
    id: string
    predictedLabel: $Enums.LabelStatus
    confidence: number
    imageId: string
    modelId: string
    createdAt: Date
    _count: InferenceLogCountAggregateOutputType | null
    _avg: InferenceLogAvgAggregateOutputType | null
    _sum: InferenceLogSumAggregateOutputType | null
    _min: InferenceLogMinAggregateOutputType | null
    _max: InferenceLogMaxAggregateOutputType | null
  }

  type GetInferenceLogGroupByPayload<T extends InferenceLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InferenceLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InferenceLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InferenceLogGroupByOutputType[P]>
            : GetScalarType<T[P], InferenceLogGroupByOutputType[P]>
        }
      >
    >


  export type InferenceLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    predictedLabel?: boolean
    confidence?: boolean
    imageId?: boolean
    modelId?: boolean
    createdAt?: boolean
    image?: boolean | BusImageDefaultArgs<ExtArgs>
    model?: boolean | ModelRegistryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inferenceLog"]>

  export type InferenceLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    predictedLabel?: boolean
    confidence?: boolean
    imageId?: boolean
    modelId?: boolean
    createdAt?: boolean
    image?: boolean | BusImageDefaultArgs<ExtArgs>
    model?: boolean | ModelRegistryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inferenceLog"]>

  export type InferenceLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    predictedLabel?: boolean
    confidence?: boolean
    imageId?: boolean
    modelId?: boolean
    createdAt?: boolean
    image?: boolean | BusImageDefaultArgs<ExtArgs>
    model?: boolean | ModelRegistryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inferenceLog"]>

  export type InferenceLogSelectScalar = {
    id?: boolean
    predictedLabel?: boolean
    confidence?: boolean
    imageId?: boolean
    modelId?: boolean
    createdAt?: boolean
  }

  export type InferenceLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "predictedLabel" | "confidence" | "imageId" | "modelId" | "createdAt", ExtArgs["result"]["inferenceLog"]>
  export type InferenceLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | BusImageDefaultArgs<ExtArgs>
    model?: boolean | ModelRegistryDefaultArgs<ExtArgs>
  }
  export type InferenceLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | BusImageDefaultArgs<ExtArgs>
    model?: boolean | ModelRegistryDefaultArgs<ExtArgs>
  }
  export type InferenceLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | BusImageDefaultArgs<ExtArgs>
    model?: boolean | ModelRegistryDefaultArgs<ExtArgs>
  }

  export type $InferenceLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InferenceLog"
    objects: {
      image: Prisma.$BusImagePayload<ExtArgs>
      model: Prisma.$ModelRegistryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      predictedLabel: $Enums.LabelStatus
      confidence: number
      imageId: string
      modelId: string
      createdAt: Date
    }, ExtArgs["result"]["inferenceLog"]>
    composites: {}
  }

  type InferenceLogGetPayload<S extends boolean | null | undefined | InferenceLogDefaultArgs> = $Result.GetResult<Prisma.$InferenceLogPayload, S>

  type InferenceLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InferenceLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InferenceLogCountAggregateInputType | true
    }

  export interface InferenceLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InferenceLog'], meta: { name: 'InferenceLog' } }
    /**
     * Find zero or one InferenceLog that matches the filter.
     * @param {InferenceLogFindUniqueArgs} args - Arguments to find a InferenceLog
     * @example
     * // Get one InferenceLog
     * const inferenceLog = await prisma.inferenceLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InferenceLogFindUniqueArgs>(args: SelectSubset<T, InferenceLogFindUniqueArgs<ExtArgs>>): Prisma__InferenceLogClient<$Result.GetResult<Prisma.$InferenceLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InferenceLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InferenceLogFindUniqueOrThrowArgs} args - Arguments to find a InferenceLog
     * @example
     * // Get one InferenceLog
     * const inferenceLog = await prisma.inferenceLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InferenceLogFindUniqueOrThrowArgs>(args: SelectSubset<T, InferenceLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InferenceLogClient<$Result.GetResult<Prisma.$InferenceLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InferenceLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InferenceLogFindFirstArgs} args - Arguments to find a InferenceLog
     * @example
     * // Get one InferenceLog
     * const inferenceLog = await prisma.inferenceLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InferenceLogFindFirstArgs>(args?: SelectSubset<T, InferenceLogFindFirstArgs<ExtArgs>>): Prisma__InferenceLogClient<$Result.GetResult<Prisma.$InferenceLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InferenceLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InferenceLogFindFirstOrThrowArgs} args - Arguments to find a InferenceLog
     * @example
     * // Get one InferenceLog
     * const inferenceLog = await prisma.inferenceLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InferenceLogFindFirstOrThrowArgs>(args?: SelectSubset<T, InferenceLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__InferenceLogClient<$Result.GetResult<Prisma.$InferenceLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InferenceLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InferenceLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InferenceLogs
     * const inferenceLogs = await prisma.inferenceLog.findMany()
     * 
     * // Get first 10 InferenceLogs
     * const inferenceLogs = await prisma.inferenceLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inferenceLogWithIdOnly = await prisma.inferenceLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InferenceLogFindManyArgs>(args?: SelectSubset<T, InferenceLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InferenceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InferenceLog.
     * @param {InferenceLogCreateArgs} args - Arguments to create a InferenceLog.
     * @example
     * // Create one InferenceLog
     * const InferenceLog = await prisma.inferenceLog.create({
     *   data: {
     *     // ... data to create a InferenceLog
     *   }
     * })
     * 
     */
    create<T extends InferenceLogCreateArgs>(args: SelectSubset<T, InferenceLogCreateArgs<ExtArgs>>): Prisma__InferenceLogClient<$Result.GetResult<Prisma.$InferenceLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InferenceLogs.
     * @param {InferenceLogCreateManyArgs} args - Arguments to create many InferenceLogs.
     * @example
     * // Create many InferenceLogs
     * const inferenceLog = await prisma.inferenceLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InferenceLogCreateManyArgs>(args?: SelectSubset<T, InferenceLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InferenceLogs and returns the data saved in the database.
     * @param {InferenceLogCreateManyAndReturnArgs} args - Arguments to create many InferenceLogs.
     * @example
     * // Create many InferenceLogs
     * const inferenceLog = await prisma.inferenceLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InferenceLogs and only return the `id`
     * const inferenceLogWithIdOnly = await prisma.inferenceLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InferenceLogCreateManyAndReturnArgs>(args?: SelectSubset<T, InferenceLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InferenceLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InferenceLog.
     * @param {InferenceLogDeleteArgs} args - Arguments to delete one InferenceLog.
     * @example
     * // Delete one InferenceLog
     * const InferenceLog = await prisma.inferenceLog.delete({
     *   where: {
     *     // ... filter to delete one InferenceLog
     *   }
     * })
     * 
     */
    delete<T extends InferenceLogDeleteArgs>(args: SelectSubset<T, InferenceLogDeleteArgs<ExtArgs>>): Prisma__InferenceLogClient<$Result.GetResult<Prisma.$InferenceLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InferenceLog.
     * @param {InferenceLogUpdateArgs} args - Arguments to update one InferenceLog.
     * @example
     * // Update one InferenceLog
     * const inferenceLog = await prisma.inferenceLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InferenceLogUpdateArgs>(args: SelectSubset<T, InferenceLogUpdateArgs<ExtArgs>>): Prisma__InferenceLogClient<$Result.GetResult<Prisma.$InferenceLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InferenceLogs.
     * @param {InferenceLogDeleteManyArgs} args - Arguments to filter InferenceLogs to delete.
     * @example
     * // Delete a few InferenceLogs
     * const { count } = await prisma.inferenceLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InferenceLogDeleteManyArgs>(args?: SelectSubset<T, InferenceLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InferenceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InferenceLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InferenceLogs
     * const inferenceLog = await prisma.inferenceLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InferenceLogUpdateManyArgs>(args: SelectSubset<T, InferenceLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InferenceLogs and returns the data updated in the database.
     * @param {InferenceLogUpdateManyAndReturnArgs} args - Arguments to update many InferenceLogs.
     * @example
     * // Update many InferenceLogs
     * const inferenceLog = await prisma.inferenceLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InferenceLogs and only return the `id`
     * const inferenceLogWithIdOnly = await prisma.inferenceLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InferenceLogUpdateManyAndReturnArgs>(args: SelectSubset<T, InferenceLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InferenceLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InferenceLog.
     * @param {InferenceLogUpsertArgs} args - Arguments to update or create a InferenceLog.
     * @example
     * // Update or create a InferenceLog
     * const inferenceLog = await prisma.inferenceLog.upsert({
     *   create: {
     *     // ... data to create a InferenceLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InferenceLog we want to update
     *   }
     * })
     */
    upsert<T extends InferenceLogUpsertArgs>(args: SelectSubset<T, InferenceLogUpsertArgs<ExtArgs>>): Prisma__InferenceLogClient<$Result.GetResult<Prisma.$InferenceLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InferenceLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InferenceLogCountArgs} args - Arguments to filter InferenceLogs to count.
     * @example
     * // Count the number of InferenceLogs
     * const count = await prisma.inferenceLog.count({
     *   where: {
     *     // ... the filter for the InferenceLogs we want to count
     *   }
     * })
    **/
    count<T extends InferenceLogCountArgs>(
      args?: Subset<T, InferenceLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InferenceLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InferenceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InferenceLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InferenceLogAggregateArgs>(args: Subset<T, InferenceLogAggregateArgs>): Prisma.PrismaPromise<GetInferenceLogAggregateType<T>>

    /**
     * Group by InferenceLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InferenceLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InferenceLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InferenceLogGroupByArgs['orderBy'] }
        : { orderBy?: InferenceLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InferenceLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInferenceLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InferenceLog model
   */
  readonly fields: InferenceLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InferenceLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InferenceLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends BusImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusImageDefaultArgs<ExtArgs>>): Prisma__BusImageClient<$Result.GetResult<Prisma.$BusImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    model<T extends ModelRegistryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelRegistryDefaultArgs<ExtArgs>>): Prisma__ModelRegistryClient<$Result.GetResult<Prisma.$ModelRegistryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InferenceLog model
   */
  interface InferenceLogFieldRefs {
    readonly id: FieldRef<"InferenceLog", 'String'>
    readonly predictedLabel: FieldRef<"InferenceLog", 'LabelStatus'>
    readonly confidence: FieldRef<"InferenceLog", 'Int'>
    readonly imageId: FieldRef<"InferenceLog", 'String'>
    readonly modelId: FieldRef<"InferenceLog", 'String'>
    readonly createdAt: FieldRef<"InferenceLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InferenceLog findUnique
   */
  export type InferenceLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceLog
     */
    select?: InferenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceLog
     */
    omit?: InferenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceLogInclude<ExtArgs> | null
    /**
     * Filter, which InferenceLog to fetch.
     */
    where: InferenceLogWhereUniqueInput
  }

  /**
   * InferenceLog findUniqueOrThrow
   */
  export type InferenceLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceLog
     */
    select?: InferenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceLog
     */
    omit?: InferenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceLogInclude<ExtArgs> | null
    /**
     * Filter, which InferenceLog to fetch.
     */
    where: InferenceLogWhereUniqueInput
  }

  /**
   * InferenceLog findFirst
   */
  export type InferenceLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceLog
     */
    select?: InferenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceLog
     */
    omit?: InferenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceLogInclude<ExtArgs> | null
    /**
     * Filter, which InferenceLog to fetch.
     */
    where?: InferenceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InferenceLogs to fetch.
     */
    orderBy?: InferenceLogOrderByWithRelationInput | InferenceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InferenceLogs.
     */
    cursor?: InferenceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InferenceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InferenceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InferenceLogs.
     */
    distinct?: InferenceLogScalarFieldEnum | InferenceLogScalarFieldEnum[]
  }

  /**
   * InferenceLog findFirstOrThrow
   */
  export type InferenceLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceLog
     */
    select?: InferenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceLog
     */
    omit?: InferenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceLogInclude<ExtArgs> | null
    /**
     * Filter, which InferenceLog to fetch.
     */
    where?: InferenceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InferenceLogs to fetch.
     */
    orderBy?: InferenceLogOrderByWithRelationInput | InferenceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InferenceLogs.
     */
    cursor?: InferenceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InferenceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InferenceLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InferenceLogs.
     */
    distinct?: InferenceLogScalarFieldEnum | InferenceLogScalarFieldEnum[]
  }

  /**
   * InferenceLog findMany
   */
  export type InferenceLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceLog
     */
    select?: InferenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceLog
     */
    omit?: InferenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceLogInclude<ExtArgs> | null
    /**
     * Filter, which InferenceLogs to fetch.
     */
    where?: InferenceLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InferenceLogs to fetch.
     */
    orderBy?: InferenceLogOrderByWithRelationInput | InferenceLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InferenceLogs.
     */
    cursor?: InferenceLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InferenceLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InferenceLogs.
     */
    skip?: number
    distinct?: InferenceLogScalarFieldEnum | InferenceLogScalarFieldEnum[]
  }

  /**
   * InferenceLog create
   */
  export type InferenceLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceLog
     */
    select?: InferenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceLog
     */
    omit?: InferenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceLogInclude<ExtArgs> | null
    /**
     * The data needed to create a InferenceLog.
     */
    data: XOR<InferenceLogCreateInput, InferenceLogUncheckedCreateInput>
  }

  /**
   * InferenceLog createMany
   */
  export type InferenceLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InferenceLogs.
     */
    data: InferenceLogCreateManyInput | InferenceLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InferenceLog createManyAndReturn
   */
  export type InferenceLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceLog
     */
    select?: InferenceLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceLog
     */
    omit?: InferenceLogOmit<ExtArgs> | null
    /**
     * The data used to create many InferenceLogs.
     */
    data: InferenceLogCreateManyInput | InferenceLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InferenceLog update
   */
  export type InferenceLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceLog
     */
    select?: InferenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceLog
     */
    omit?: InferenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceLogInclude<ExtArgs> | null
    /**
     * The data needed to update a InferenceLog.
     */
    data: XOR<InferenceLogUpdateInput, InferenceLogUncheckedUpdateInput>
    /**
     * Choose, which InferenceLog to update.
     */
    where: InferenceLogWhereUniqueInput
  }

  /**
   * InferenceLog updateMany
   */
  export type InferenceLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InferenceLogs.
     */
    data: XOR<InferenceLogUpdateManyMutationInput, InferenceLogUncheckedUpdateManyInput>
    /**
     * Filter which InferenceLogs to update
     */
    where?: InferenceLogWhereInput
    /**
     * Limit how many InferenceLogs to update.
     */
    limit?: number
  }

  /**
   * InferenceLog updateManyAndReturn
   */
  export type InferenceLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceLog
     */
    select?: InferenceLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceLog
     */
    omit?: InferenceLogOmit<ExtArgs> | null
    /**
     * The data used to update InferenceLogs.
     */
    data: XOR<InferenceLogUpdateManyMutationInput, InferenceLogUncheckedUpdateManyInput>
    /**
     * Filter which InferenceLogs to update
     */
    where?: InferenceLogWhereInput
    /**
     * Limit how many InferenceLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InferenceLog upsert
   */
  export type InferenceLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceLog
     */
    select?: InferenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceLog
     */
    omit?: InferenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceLogInclude<ExtArgs> | null
    /**
     * The filter to search for the InferenceLog to update in case it exists.
     */
    where: InferenceLogWhereUniqueInput
    /**
     * In case the InferenceLog found by the `where` argument doesn't exist, create a new InferenceLog with this data.
     */
    create: XOR<InferenceLogCreateInput, InferenceLogUncheckedCreateInput>
    /**
     * In case the InferenceLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InferenceLogUpdateInput, InferenceLogUncheckedUpdateInput>
  }

  /**
   * InferenceLog delete
   */
  export type InferenceLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceLog
     */
    select?: InferenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceLog
     */
    omit?: InferenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceLogInclude<ExtArgs> | null
    /**
     * Filter which InferenceLog to delete.
     */
    where: InferenceLogWhereUniqueInput
  }

  /**
   * InferenceLog deleteMany
   */
  export type InferenceLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InferenceLogs to delete
     */
    where?: InferenceLogWhereInput
    /**
     * Limit how many InferenceLogs to delete.
     */
    limit?: number
  }

  /**
   * InferenceLog without action
   */
  export type InferenceLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceLog
     */
    select?: InferenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceLog
     */
    omit?: InferenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceLogInclude<ExtArgs> | null
  }


  /**
   * Model Dataset
   */

  export type AggregateDataset = {
    _count: DatasetCountAggregateOutputType | null
    _min: DatasetMinAggregateOutputType | null
    _max: DatasetMaxAggregateOutputType | null
  }

  export type DatasetMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type DatasetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
  }

  export type DatasetCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    _all: number
  }


  export type DatasetMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type DatasetMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
  }

  export type DatasetCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type DatasetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dataset to aggregate.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Datasets
    **/
    _count?: true | DatasetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatasetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatasetMaxAggregateInputType
  }

  export type GetDatasetAggregateType<T extends DatasetAggregateArgs> = {
        [P in keyof T & keyof AggregateDataset]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataset[P]>
      : GetScalarType<T[P], AggregateDataset[P]>
  }




  export type DatasetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetWhereInput
    orderBy?: DatasetOrderByWithAggregationInput | DatasetOrderByWithAggregationInput[]
    by: DatasetScalarFieldEnum[] | DatasetScalarFieldEnum
    having?: DatasetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatasetCountAggregateInputType | true
    _min?: DatasetMinAggregateInputType
    _max?: DatasetMaxAggregateInputType
  }

  export type DatasetGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    _count: DatasetCountAggregateOutputType | null
    _min: DatasetMinAggregateOutputType | null
    _max: DatasetMaxAggregateOutputType | null
  }

  type GetDatasetGroupByPayload<T extends DatasetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatasetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatasetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatasetGroupByOutputType[P]>
            : GetScalarType<T[P], DatasetGroupByOutputType[P]>
        }
      >
    >


  export type DatasetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    images?: boolean | Dataset$imagesArgs<ExtArgs>
    models?: boolean | Dataset$modelsArgs<ExtArgs>
    _count?: boolean | DatasetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["dataset"]>

  export type DatasetSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type DatasetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt", ExtArgs["result"]["dataset"]>
  export type DatasetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Dataset$imagesArgs<ExtArgs>
    models?: boolean | Dataset$modelsArgs<ExtArgs>
    _count?: boolean | DatasetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DatasetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DatasetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DatasetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dataset"
    objects: {
      images: Prisma.$DatasetImagePayload<ExtArgs>[]
      models: Prisma.$ModelRegistryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["dataset"]>
    composites: {}
  }

  type DatasetGetPayload<S extends boolean | null | undefined | DatasetDefaultArgs> = $Result.GetResult<Prisma.$DatasetPayload, S>

  type DatasetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatasetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatasetCountAggregateInputType | true
    }

  export interface DatasetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dataset'], meta: { name: 'Dataset' } }
    /**
     * Find zero or one Dataset that matches the filter.
     * @param {DatasetFindUniqueArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatasetFindUniqueArgs>(args: SelectSubset<T, DatasetFindUniqueArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dataset that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatasetFindUniqueOrThrowArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatasetFindUniqueOrThrowArgs>(args: SelectSubset<T, DatasetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dataset that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindFirstArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatasetFindFirstArgs>(args?: SelectSubset<T, DatasetFindFirstArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dataset that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindFirstOrThrowArgs} args - Arguments to find a Dataset
     * @example
     * // Get one Dataset
     * const dataset = await prisma.dataset.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatasetFindFirstOrThrowArgs>(args?: SelectSubset<T, DatasetFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Datasets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Datasets
     * const datasets = await prisma.dataset.findMany()
     * 
     * // Get first 10 Datasets
     * const datasets = await prisma.dataset.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const datasetWithIdOnly = await prisma.dataset.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DatasetFindManyArgs>(args?: SelectSubset<T, DatasetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dataset.
     * @param {DatasetCreateArgs} args - Arguments to create a Dataset.
     * @example
     * // Create one Dataset
     * const Dataset = await prisma.dataset.create({
     *   data: {
     *     // ... data to create a Dataset
     *   }
     * })
     * 
     */
    create<T extends DatasetCreateArgs>(args: SelectSubset<T, DatasetCreateArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Datasets.
     * @param {DatasetCreateManyArgs} args - Arguments to create many Datasets.
     * @example
     * // Create many Datasets
     * const dataset = await prisma.dataset.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatasetCreateManyArgs>(args?: SelectSubset<T, DatasetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Datasets and returns the data saved in the database.
     * @param {DatasetCreateManyAndReturnArgs} args - Arguments to create many Datasets.
     * @example
     * // Create many Datasets
     * const dataset = await prisma.dataset.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Datasets and only return the `id`
     * const datasetWithIdOnly = await prisma.dataset.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DatasetCreateManyAndReturnArgs>(args?: SelectSubset<T, DatasetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dataset.
     * @param {DatasetDeleteArgs} args - Arguments to delete one Dataset.
     * @example
     * // Delete one Dataset
     * const Dataset = await prisma.dataset.delete({
     *   where: {
     *     // ... filter to delete one Dataset
     *   }
     * })
     * 
     */
    delete<T extends DatasetDeleteArgs>(args: SelectSubset<T, DatasetDeleteArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dataset.
     * @param {DatasetUpdateArgs} args - Arguments to update one Dataset.
     * @example
     * // Update one Dataset
     * const dataset = await prisma.dataset.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatasetUpdateArgs>(args: SelectSubset<T, DatasetUpdateArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Datasets.
     * @param {DatasetDeleteManyArgs} args - Arguments to filter Datasets to delete.
     * @example
     * // Delete a few Datasets
     * const { count } = await prisma.dataset.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatasetDeleteManyArgs>(args?: SelectSubset<T, DatasetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Datasets
     * const dataset = await prisma.dataset.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatasetUpdateManyArgs>(args: SelectSubset<T, DatasetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Datasets and returns the data updated in the database.
     * @param {DatasetUpdateManyAndReturnArgs} args - Arguments to update many Datasets.
     * @example
     * // Update many Datasets
     * const dataset = await prisma.dataset.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Datasets and only return the `id`
     * const datasetWithIdOnly = await prisma.dataset.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DatasetUpdateManyAndReturnArgs>(args: SelectSubset<T, DatasetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dataset.
     * @param {DatasetUpsertArgs} args - Arguments to update or create a Dataset.
     * @example
     * // Update or create a Dataset
     * const dataset = await prisma.dataset.upsert({
     *   create: {
     *     // ... data to create a Dataset
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dataset we want to update
     *   }
     * })
     */
    upsert<T extends DatasetUpsertArgs>(args: SelectSubset<T, DatasetUpsertArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Datasets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetCountArgs} args - Arguments to filter Datasets to count.
     * @example
     * // Count the number of Datasets
     * const count = await prisma.dataset.count({
     *   where: {
     *     // ... the filter for the Datasets we want to count
     *   }
     * })
    **/
    count<T extends DatasetCountArgs>(
      args?: Subset<T, DatasetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatasetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatasetAggregateArgs>(args: Subset<T, DatasetAggregateArgs>): Prisma.PrismaPromise<GetDatasetAggregateType<T>>

    /**
     * Group by Dataset.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatasetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatasetGroupByArgs['orderBy'] }
        : { orderBy?: DatasetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatasetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatasetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dataset model
   */
  readonly fields: DatasetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dataset.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatasetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Dataset$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Dataset$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    models<T extends Dataset$modelsArgs<ExtArgs> = {}>(args?: Subset<T, Dataset$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelRegistryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dataset model
   */
  interface DatasetFieldRefs {
    readonly id: FieldRef<"Dataset", 'String'>
    readonly name: FieldRef<"Dataset", 'String'>
    readonly description: FieldRef<"Dataset", 'String'>
    readonly createdAt: FieldRef<"Dataset", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dataset findUnique
   */
  export type DatasetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset findUniqueOrThrow
   */
  export type DatasetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset findFirst
   */
  export type DatasetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datasets.
     */
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset findFirstOrThrow
   */
  export type DatasetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Dataset to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Datasets.
     */
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset findMany
   */
  export type DatasetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter, which Datasets to fetch.
     */
    where?: DatasetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Datasets to fetch.
     */
    orderBy?: DatasetOrderByWithRelationInput | DatasetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Datasets.
     */
    cursor?: DatasetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Datasets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Datasets.
     */
    skip?: number
    distinct?: DatasetScalarFieldEnum | DatasetScalarFieldEnum[]
  }

  /**
   * Dataset create
   */
  export type DatasetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * The data needed to create a Dataset.
     */
    data: XOR<DatasetCreateInput, DatasetUncheckedCreateInput>
  }

  /**
   * Dataset createMany
   */
  export type DatasetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Datasets.
     */
    data: DatasetCreateManyInput | DatasetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dataset createManyAndReturn
   */
  export type DatasetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * The data used to create many Datasets.
     */
    data: DatasetCreateManyInput | DatasetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dataset update
   */
  export type DatasetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * The data needed to update a Dataset.
     */
    data: XOR<DatasetUpdateInput, DatasetUncheckedUpdateInput>
    /**
     * Choose, which Dataset to update.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset updateMany
   */
  export type DatasetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Datasets.
     */
    data: XOR<DatasetUpdateManyMutationInput, DatasetUncheckedUpdateManyInput>
    /**
     * Filter which Datasets to update
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to update.
     */
    limit?: number
  }

  /**
   * Dataset updateManyAndReturn
   */
  export type DatasetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * The data used to update Datasets.
     */
    data: XOR<DatasetUpdateManyMutationInput, DatasetUncheckedUpdateManyInput>
    /**
     * Filter which Datasets to update
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to update.
     */
    limit?: number
  }

  /**
   * Dataset upsert
   */
  export type DatasetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * The filter to search for the Dataset to update in case it exists.
     */
    where: DatasetWhereUniqueInput
    /**
     * In case the Dataset found by the `where` argument doesn't exist, create a new Dataset with this data.
     */
    create: XOR<DatasetCreateInput, DatasetUncheckedCreateInput>
    /**
     * In case the Dataset was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatasetUpdateInput, DatasetUncheckedUpdateInput>
  }

  /**
   * Dataset delete
   */
  export type DatasetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    /**
     * Filter which Dataset to delete.
     */
    where: DatasetWhereUniqueInput
  }

  /**
   * Dataset deleteMany
   */
  export type DatasetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Datasets to delete
     */
    where?: DatasetWhereInput
    /**
     * Limit how many Datasets to delete.
     */
    limit?: number
  }

  /**
   * Dataset.images
   */
  export type Dataset$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetImage
     */
    select?: DatasetImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetImage
     */
    omit?: DatasetImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetImageInclude<ExtArgs> | null
    where?: DatasetImageWhereInput
    orderBy?: DatasetImageOrderByWithRelationInput | DatasetImageOrderByWithRelationInput[]
    cursor?: DatasetImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DatasetImageScalarFieldEnum | DatasetImageScalarFieldEnum[]
  }

  /**
   * Dataset.models
   */
  export type Dataset$modelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRegistry
     */
    select?: ModelRegistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRegistry
     */
    omit?: ModelRegistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRegistryInclude<ExtArgs> | null
    where?: ModelRegistryWhereInput
    orderBy?: ModelRegistryOrderByWithRelationInput | ModelRegistryOrderByWithRelationInput[]
    cursor?: ModelRegistryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelRegistryScalarFieldEnum | ModelRegistryScalarFieldEnum[]
  }

  /**
   * Dataset without action
   */
  export type DatasetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
  }


  /**
   * Model DatasetImage
   */

  export type AggregateDatasetImage = {
    _count: DatasetImageCountAggregateOutputType | null
    _min: DatasetImageMinAggregateOutputType | null
    _max: DatasetImageMaxAggregateOutputType | null
  }

  export type DatasetImageMinAggregateOutputType = {
    datasetId: string | null
    imageId: string | null
  }

  export type DatasetImageMaxAggregateOutputType = {
    datasetId: string | null
    imageId: string | null
  }

  export type DatasetImageCountAggregateOutputType = {
    datasetId: number
    imageId: number
    _all: number
  }


  export type DatasetImageMinAggregateInputType = {
    datasetId?: true
    imageId?: true
  }

  export type DatasetImageMaxAggregateInputType = {
    datasetId?: true
    imageId?: true
  }

  export type DatasetImageCountAggregateInputType = {
    datasetId?: true
    imageId?: true
    _all?: true
  }

  export type DatasetImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatasetImage to aggregate.
     */
    where?: DatasetImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatasetImages to fetch.
     */
    orderBy?: DatasetImageOrderByWithRelationInput | DatasetImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DatasetImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatasetImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatasetImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DatasetImages
    **/
    _count?: true | DatasetImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DatasetImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DatasetImageMaxAggregateInputType
  }

  export type GetDatasetImageAggregateType<T extends DatasetImageAggregateArgs> = {
        [P in keyof T & keyof AggregateDatasetImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDatasetImage[P]>
      : GetScalarType<T[P], AggregateDatasetImage[P]>
  }




  export type DatasetImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DatasetImageWhereInput
    orderBy?: DatasetImageOrderByWithAggregationInput | DatasetImageOrderByWithAggregationInput[]
    by: DatasetImageScalarFieldEnum[] | DatasetImageScalarFieldEnum
    having?: DatasetImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DatasetImageCountAggregateInputType | true
    _min?: DatasetImageMinAggregateInputType
    _max?: DatasetImageMaxAggregateInputType
  }

  export type DatasetImageGroupByOutputType = {
    datasetId: string
    imageId: string
    _count: DatasetImageCountAggregateOutputType | null
    _min: DatasetImageMinAggregateOutputType | null
    _max: DatasetImageMaxAggregateOutputType | null
  }

  type GetDatasetImageGroupByPayload<T extends DatasetImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DatasetImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DatasetImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DatasetImageGroupByOutputType[P]>
            : GetScalarType<T[P], DatasetImageGroupByOutputType[P]>
        }
      >
    >


  export type DatasetImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    datasetId?: boolean
    imageId?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    image?: boolean | BusImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datasetImage"]>

  export type DatasetImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    datasetId?: boolean
    imageId?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    image?: boolean | BusImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datasetImage"]>

  export type DatasetImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    datasetId?: boolean
    imageId?: boolean
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    image?: boolean | BusImageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["datasetImage"]>

  export type DatasetImageSelectScalar = {
    datasetId?: boolean
    imageId?: boolean
  }

  export type DatasetImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"datasetId" | "imageId", ExtArgs["result"]["datasetImage"]>
  export type DatasetImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    image?: boolean | BusImageDefaultArgs<ExtArgs>
  }
  export type DatasetImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    image?: boolean | BusImageDefaultArgs<ExtArgs>
  }
  export type DatasetImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | DatasetDefaultArgs<ExtArgs>
    image?: boolean | BusImageDefaultArgs<ExtArgs>
  }

  export type $DatasetImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DatasetImage"
    objects: {
      dataset: Prisma.$DatasetPayload<ExtArgs>
      image: Prisma.$BusImagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      datasetId: string
      imageId: string
    }, ExtArgs["result"]["datasetImage"]>
    composites: {}
  }

  type DatasetImageGetPayload<S extends boolean | null | undefined | DatasetImageDefaultArgs> = $Result.GetResult<Prisma.$DatasetImagePayload, S>

  type DatasetImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DatasetImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DatasetImageCountAggregateInputType | true
    }

  export interface DatasetImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DatasetImage'], meta: { name: 'DatasetImage' } }
    /**
     * Find zero or one DatasetImage that matches the filter.
     * @param {DatasetImageFindUniqueArgs} args - Arguments to find a DatasetImage
     * @example
     * // Get one DatasetImage
     * const datasetImage = await prisma.datasetImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DatasetImageFindUniqueArgs>(args: SelectSubset<T, DatasetImageFindUniqueArgs<ExtArgs>>): Prisma__DatasetImageClient<$Result.GetResult<Prisma.$DatasetImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DatasetImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DatasetImageFindUniqueOrThrowArgs} args - Arguments to find a DatasetImage
     * @example
     * // Get one DatasetImage
     * const datasetImage = await prisma.datasetImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DatasetImageFindUniqueOrThrowArgs>(args: SelectSubset<T, DatasetImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DatasetImageClient<$Result.GetResult<Prisma.$DatasetImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatasetImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetImageFindFirstArgs} args - Arguments to find a DatasetImage
     * @example
     * // Get one DatasetImage
     * const datasetImage = await prisma.datasetImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DatasetImageFindFirstArgs>(args?: SelectSubset<T, DatasetImageFindFirstArgs<ExtArgs>>): Prisma__DatasetImageClient<$Result.GetResult<Prisma.$DatasetImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DatasetImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetImageFindFirstOrThrowArgs} args - Arguments to find a DatasetImage
     * @example
     * // Get one DatasetImage
     * const datasetImage = await prisma.datasetImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DatasetImageFindFirstOrThrowArgs>(args?: SelectSubset<T, DatasetImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__DatasetImageClient<$Result.GetResult<Prisma.$DatasetImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DatasetImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DatasetImages
     * const datasetImages = await prisma.datasetImage.findMany()
     * 
     * // Get first 10 DatasetImages
     * const datasetImages = await prisma.datasetImage.findMany({ take: 10 })
     * 
     * // Only select the `datasetId`
     * const datasetImageWithDatasetIdOnly = await prisma.datasetImage.findMany({ select: { datasetId: true } })
     * 
     */
    findMany<T extends DatasetImageFindManyArgs>(args?: SelectSubset<T, DatasetImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DatasetImage.
     * @param {DatasetImageCreateArgs} args - Arguments to create a DatasetImage.
     * @example
     * // Create one DatasetImage
     * const DatasetImage = await prisma.datasetImage.create({
     *   data: {
     *     // ... data to create a DatasetImage
     *   }
     * })
     * 
     */
    create<T extends DatasetImageCreateArgs>(args: SelectSubset<T, DatasetImageCreateArgs<ExtArgs>>): Prisma__DatasetImageClient<$Result.GetResult<Prisma.$DatasetImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DatasetImages.
     * @param {DatasetImageCreateManyArgs} args - Arguments to create many DatasetImages.
     * @example
     * // Create many DatasetImages
     * const datasetImage = await prisma.datasetImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DatasetImageCreateManyArgs>(args?: SelectSubset<T, DatasetImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DatasetImages and returns the data saved in the database.
     * @param {DatasetImageCreateManyAndReturnArgs} args - Arguments to create many DatasetImages.
     * @example
     * // Create many DatasetImages
     * const datasetImage = await prisma.datasetImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DatasetImages and only return the `datasetId`
     * const datasetImageWithDatasetIdOnly = await prisma.datasetImage.createManyAndReturn({
     *   select: { datasetId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DatasetImageCreateManyAndReturnArgs>(args?: SelectSubset<T, DatasetImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DatasetImage.
     * @param {DatasetImageDeleteArgs} args - Arguments to delete one DatasetImage.
     * @example
     * // Delete one DatasetImage
     * const DatasetImage = await prisma.datasetImage.delete({
     *   where: {
     *     // ... filter to delete one DatasetImage
     *   }
     * })
     * 
     */
    delete<T extends DatasetImageDeleteArgs>(args: SelectSubset<T, DatasetImageDeleteArgs<ExtArgs>>): Prisma__DatasetImageClient<$Result.GetResult<Prisma.$DatasetImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DatasetImage.
     * @param {DatasetImageUpdateArgs} args - Arguments to update one DatasetImage.
     * @example
     * // Update one DatasetImage
     * const datasetImage = await prisma.datasetImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DatasetImageUpdateArgs>(args: SelectSubset<T, DatasetImageUpdateArgs<ExtArgs>>): Prisma__DatasetImageClient<$Result.GetResult<Prisma.$DatasetImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DatasetImages.
     * @param {DatasetImageDeleteManyArgs} args - Arguments to filter DatasetImages to delete.
     * @example
     * // Delete a few DatasetImages
     * const { count } = await prisma.datasetImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DatasetImageDeleteManyArgs>(args?: SelectSubset<T, DatasetImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatasetImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DatasetImages
     * const datasetImage = await prisma.datasetImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DatasetImageUpdateManyArgs>(args: SelectSubset<T, DatasetImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DatasetImages and returns the data updated in the database.
     * @param {DatasetImageUpdateManyAndReturnArgs} args - Arguments to update many DatasetImages.
     * @example
     * // Update many DatasetImages
     * const datasetImage = await prisma.datasetImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DatasetImages and only return the `datasetId`
     * const datasetImageWithDatasetIdOnly = await prisma.datasetImage.updateManyAndReturn({
     *   select: { datasetId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DatasetImageUpdateManyAndReturnArgs>(args: SelectSubset<T, DatasetImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DatasetImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DatasetImage.
     * @param {DatasetImageUpsertArgs} args - Arguments to update or create a DatasetImage.
     * @example
     * // Update or create a DatasetImage
     * const datasetImage = await prisma.datasetImage.upsert({
     *   create: {
     *     // ... data to create a DatasetImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DatasetImage we want to update
     *   }
     * })
     */
    upsert<T extends DatasetImageUpsertArgs>(args: SelectSubset<T, DatasetImageUpsertArgs<ExtArgs>>): Prisma__DatasetImageClient<$Result.GetResult<Prisma.$DatasetImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DatasetImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetImageCountArgs} args - Arguments to filter DatasetImages to count.
     * @example
     * // Count the number of DatasetImages
     * const count = await prisma.datasetImage.count({
     *   where: {
     *     // ... the filter for the DatasetImages we want to count
     *   }
     * })
    **/
    count<T extends DatasetImageCountArgs>(
      args?: Subset<T, DatasetImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DatasetImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DatasetImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DatasetImageAggregateArgs>(args: Subset<T, DatasetImageAggregateArgs>): Prisma.PrismaPromise<GetDatasetImageAggregateType<T>>

    /**
     * Group by DatasetImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DatasetImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DatasetImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DatasetImageGroupByArgs['orderBy'] }
        : { orderBy?: DatasetImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DatasetImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDatasetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DatasetImage model
   */
  readonly fields: DatasetImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DatasetImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DatasetImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataset<T extends DatasetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DatasetDefaultArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    image<T extends BusImageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusImageDefaultArgs<ExtArgs>>): Prisma__BusImageClient<$Result.GetResult<Prisma.$BusImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DatasetImage model
   */
  interface DatasetImageFieldRefs {
    readonly datasetId: FieldRef<"DatasetImage", 'String'>
    readonly imageId: FieldRef<"DatasetImage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DatasetImage findUnique
   */
  export type DatasetImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetImage
     */
    select?: DatasetImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetImage
     */
    omit?: DatasetImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetImageInclude<ExtArgs> | null
    /**
     * Filter, which DatasetImage to fetch.
     */
    where: DatasetImageWhereUniqueInput
  }

  /**
   * DatasetImage findUniqueOrThrow
   */
  export type DatasetImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetImage
     */
    select?: DatasetImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetImage
     */
    omit?: DatasetImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetImageInclude<ExtArgs> | null
    /**
     * Filter, which DatasetImage to fetch.
     */
    where: DatasetImageWhereUniqueInput
  }

  /**
   * DatasetImage findFirst
   */
  export type DatasetImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetImage
     */
    select?: DatasetImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetImage
     */
    omit?: DatasetImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetImageInclude<ExtArgs> | null
    /**
     * Filter, which DatasetImage to fetch.
     */
    where?: DatasetImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatasetImages to fetch.
     */
    orderBy?: DatasetImageOrderByWithRelationInput | DatasetImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatasetImages.
     */
    cursor?: DatasetImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatasetImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatasetImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatasetImages.
     */
    distinct?: DatasetImageScalarFieldEnum | DatasetImageScalarFieldEnum[]
  }

  /**
   * DatasetImage findFirstOrThrow
   */
  export type DatasetImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetImage
     */
    select?: DatasetImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetImage
     */
    omit?: DatasetImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetImageInclude<ExtArgs> | null
    /**
     * Filter, which DatasetImage to fetch.
     */
    where?: DatasetImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatasetImages to fetch.
     */
    orderBy?: DatasetImageOrderByWithRelationInput | DatasetImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DatasetImages.
     */
    cursor?: DatasetImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatasetImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatasetImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DatasetImages.
     */
    distinct?: DatasetImageScalarFieldEnum | DatasetImageScalarFieldEnum[]
  }

  /**
   * DatasetImage findMany
   */
  export type DatasetImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetImage
     */
    select?: DatasetImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetImage
     */
    omit?: DatasetImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetImageInclude<ExtArgs> | null
    /**
     * Filter, which DatasetImages to fetch.
     */
    where?: DatasetImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DatasetImages to fetch.
     */
    orderBy?: DatasetImageOrderByWithRelationInput | DatasetImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DatasetImages.
     */
    cursor?: DatasetImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DatasetImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DatasetImages.
     */
    skip?: number
    distinct?: DatasetImageScalarFieldEnum | DatasetImageScalarFieldEnum[]
  }

  /**
   * DatasetImage create
   */
  export type DatasetImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetImage
     */
    select?: DatasetImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetImage
     */
    omit?: DatasetImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetImageInclude<ExtArgs> | null
    /**
     * The data needed to create a DatasetImage.
     */
    data: XOR<DatasetImageCreateInput, DatasetImageUncheckedCreateInput>
  }

  /**
   * DatasetImage createMany
   */
  export type DatasetImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DatasetImages.
     */
    data: DatasetImageCreateManyInput | DatasetImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DatasetImage createManyAndReturn
   */
  export type DatasetImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetImage
     */
    select?: DatasetImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetImage
     */
    omit?: DatasetImageOmit<ExtArgs> | null
    /**
     * The data used to create many DatasetImages.
     */
    data: DatasetImageCreateManyInput | DatasetImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DatasetImage update
   */
  export type DatasetImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetImage
     */
    select?: DatasetImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetImage
     */
    omit?: DatasetImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetImageInclude<ExtArgs> | null
    /**
     * The data needed to update a DatasetImage.
     */
    data: XOR<DatasetImageUpdateInput, DatasetImageUncheckedUpdateInput>
    /**
     * Choose, which DatasetImage to update.
     */
    where: DatasetImageWhereUniqueInput
  }

  /**
   * DatasetImage updateMany
   */
  export type DatasetImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DatasetImages.
     */
    data: XOR<DatasetImageUpdateManyMutationInput, DatasetImageUncheckedUpdateManyInput>
    /**
     * Filter which DatasetImages to update
     */
    where?: DatasetImageWhereInput
    /**
     * Limit how many DatasetImages to update.
     */
    limit?: number
  }

  /**
   * DatasetImage updateManyAndReturn
   */
  export type DatasetImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetImage
     */
    select?: DatasetImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetImage
     */
    omit?: DatasetImageOmit<ExtArgs> | null
    /**
     * The data used to update DatasetImages.
     */
    data: XOR<DatasetImageUpdateManyMutationInput, DatasetImageUncheckedUpdateManyInput>
    /**
     * Filter which DatasetImages to update
     */
    where?: DatasetImageWhereInput
    /**
     * Limit how many DatasetImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DatasetImage upsert
   */
  export type DatasetImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetImage
     */
    select?: DatasetImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetImage
     */
    omit?: DatasetImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetImageInclude<ExtArgs> | null
    /**
     * The filter to search for the DatasetImage to update in case it exists.
     */
    where: DatasetImageWhereUniqueInput
    /**
     * In case the DatasetImage found by the `where` argument doesn't exist, create a new DatasetImage with this data.
     */
    create: XOR<DatasetImageCreateInput, DatasetImageUncheckedCreateInput>
    /**
     * In case the DatasetImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DatasetImageUpdateInput, DatasetImageUncheckedUpdateInput>
  }

  /**
   * DatasetImage delete
   */
  export type DatasetImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetImage
     */
    select?: DatasetImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetImage
     */
    omit?: DatasetImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetImageInclude<ExtArgs> | null
    /**
     * Filter which DatasetImage to delete.
     */
    where: DatasetImageWhereUniqueInput
  }

  /**
   * DatasetImage deleteMany
   */
  export type DatasetImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DatasetImages to delete
     */
    where?: DatasetImageWhereInput
    /**
     * Limit how many DatasetImages to delete.
     */
    limit?: number
  }

  /**
   * DatasetImage without action
   */
  export type DatasetImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DatasetImage
     */
    select?: DatasetImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DatasetImage
     */
    omit?: DatasetImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetImageInclude<ExtArgs> | null
  }


  /**
   * Model ModelRegistry
   */

  export type AggregateModelRegistry = {
    _count: ModelRegistryCountAggregateOutputType | null
    _min: ModelRegistryMinAggregateOutputType | null
    _max: ModelRegistryMaxAggregateOutputType | null
  }

  export type ModelRegistryMinAggregateOutputType = {
    id: string | null
    name: string | null
    version: string | null
    architecture: $Enums.ModelArchitecture | null
    status: $Enums.ModelStatus | null
    weightsUrl: string | null
    eapUrl: string | null
    datasetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelRegistryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    version: string | null
    architecture: $Enums.ModelArchitecture | null
    status: $Enums.ModelStatus | null
    weightsUrl: string | null
    eapUrl: string | null
    datasetId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelRegistryCountAggregateOutputType = {
    id: number
    name: number
    version: number
    architecture: number
    status: number
    weightsUrl: number
    eapUrl: number
    hyperparameters: number
    metrics: number
    datasetId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModelRegistryMinAggregateInputType = {
    id?: true
    name?: true
    version?: true
    architecture?: true
    status?: true
    weightsUrl?: true
    eapUrl?: true
    datasetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelRegistryMaxAggregateInputType = {
    id?: true
    name?: true
    version?: true
    architecture?: true
    status?: true
    weightsUrl?: true
    eapUrl?: true
    datasetId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModelRegistryCountAggregateInputType = {
    id?: true
    name?: true
    version?: true
    architecture?: true
    status?: true
    weightsUrl?: true
    eapUrl?: true
    hyperparameters?: true
    metrics?: true
    datasetId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModelRegistryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelRegistry to aggregate.
     */
    where?: ModelRegistryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelRegistries to fetch.
     */
    orderBy?: ModelRegistryOrderByWithRelationInput | ModelRegistryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelRegistryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelRegistries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelRegistries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModelRegistries
    **/
    _count?: true | ModelRegistryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelRegistryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelRegistryMaxAggregateInputType
  }

  export type GetModelRegistryAggregateType<T extends ModelRegistryAggregateArgs> = {
        [P in keyof T & keyof AggregateModelRegistry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelRegistry[P]>
      : GetScalarType<T[P], AggregateModelRegistry[P]>
  }




  export type ModelRegistryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelRegistryWhereInput
    orderBy?: ModelRegistryOrderByWithAggregationInput | ModelRegistryOrderByWithAggregationInput[]
    by: ModelRegistryScalarFieldEnum[] | ModelRegistryScalarFieldEnum
    having?: ModelRegistryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelRegistryCountAggregateInputType | true
    _min?: ModelRegistryMinAggregateInputType
    _max?: ModelRegistryMaxAggregateInputType
  }

  export type ModelRegistryGroupByOutputType = {
    id: string
    name: string
    version: string | null
    architecture: $Enums.ModelArchitecture
    status: $Enums.ModelStatus
    weightsUrl: string | null
    eapUrl: string | null
    hyperparameters: JsonValue | null
    metrics: JsonValue | null
    datasetId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ModelRegistryCountAggregateOutputType | null
    _min: ModelRegistryMinAggregateOutputType | null
    _max: ModelRegistryMaxAggregateOutputType | null
  }

  type GetModelRegistryGroupByPayload<T extends ModelRegistryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelRegistryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelRegistryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelRegistryGroupByOutputType[P]>
            : GetScalarType<T[P], ModelRegistryGroupByOutputType[P]>
        }
      >
    >


  export type ModelRegistrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    architecture?: boolean
    status?: boolean
    weightsUrl?: boolean
    eapUrl?: boolean
    hyperparameters?: boolean
    metrics?: boolean
    datasetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dataset?: boolean | ModelRegistry$datasetArgs<ExtArgs>
    inferences?: boolean | ModelRegistry$inferencesArgs<ExtArgs>
    _count?: boolean | ModelRegistryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["modelRegistry"]>

  export type ModelRegistrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    architecture?: boolean
    status?: boolean
    weightsUrl?: boolean
    eapUrl?: boolean
    hyperparameters?: boolean
    metrics?: boolean
    datasetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dataset?: boolean | ModelRegistry$datasetArgs<ExtArgs>
  }, ExtArgs["result"]["modelRegistry"]>

  export type ModelRegistrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    architecture?: boolean
    status?: boolean
    weightsUrl?: boolean
    eapUrl?: boolean
    hyperparameters?: boolean
    metrics?: boolean
    datasetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dataset?: boolean | ModelRegistry$datasetArgs<ExtArgs>
  }, ExtArgs["result"]["modelRegistry"]>

  export type ModelRegistrySelectScalar = {
    id?: boolean
    name?: boolean
    version?: boolean
    architecture?: boolean
    status?: boolean
    weightsUrl?: boolean
    eapUrl?: boolean
    hyperparameters?: boolean
    metrics?: boolean
    datasetId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModelRegistryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "version" | "architecture" | "status" | "weightsUrl" | "eapUrl" | "hyperparameters" | "metrics" | "datasetId" | "createdAt" | "updatedAt", ExtArgs["result"]["modelRegistry"]>
  export type ModelRegistryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | ModelRegistry$datasetArgs<ExtArgs>
    inferences?: boolean | ModelRegistry$inferencesArgs<ExtArgs>
    _count?: boolean | ModelRegistryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModelRegistryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | ModelRegistry$datasetArgs<ExtArgs>
  }
  export type ModelRegistryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataset?: boolean | ModelRegistry$datasetArgs<ExtArgs>
  }

  export type $ModelRegistryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModelRegistry"
    objects: {
      dataset: Prisma.$DatasetPayload<ExtArgs> | null
      inferences: Prisma.$InferenceLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      version: string | null
      architecture: $Enums.ModelArchitecture
      status: $Enums.ModelStatus
      weightsUrl: string | null
      eapUrl: string | null
      hyperparameters: Prisma.JsonValue | null
      metrics: Prisma.JsonValue | null
      datasetId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["modelRegistry"]>
    composites: {}
  }

  type ModelRegistryGetPayload<S extends boolean | null | undefined | ModelRegistryDefaultArgs> = $Result.GetResult<Prisma.$ModelRegistryPayload, S>

  type ModelRegistryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelRegistryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelRegistryCountAggregateInputType | true
    }

  export interface ModelRegistryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModelRegistry'], meta: { name: 'ModelRegistry' } }
    /**
     * Find zero or one ModelRegistry that matches the filter.
     * @param {ModelRegistryFindUniqueArgs} args - Arguments to find a ModelRegistry
     * @example
     * // Get one ModelRegistry
     * const modelRegistry = await prisma.modelRegistry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelRegistryFindUniqueArgs>(args: SelectSubset<T, ModelRegistryFindUniqueArgs<ExtArgs>>): Prisma__ModelRegistryClient<$Result.GetResult<Prisma.$ModelRegistryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModelRegistry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelRegistryFindUniqueOrThrowArgs} args - Arguments to find a ModelRegistry
     * @example
     * // Get one ModelRegistry
     * const modelRegistry = await prisma.modelRegistry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelRegistryFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelRegistryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelRegistryClient<$Result.GetResult<Prisma.$ModelRegistryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelRegistry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRegistryFindFirstArgs} args - Arguments to find a ModelRegistry
     * @example
     * // Get one ModelRegistry
     * const modelRegistry = await prisma.modelRegistry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelRegistryFindFirstArgs>(args?: SelectSubset<T, ModelRegistryFindFirstArgs<ExtArgs>>): Prisma__ModelRegistryClient<$Result.GetResult<Prisma.$ModelRegistryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelRegistry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRegistryFindFirstOrThrowArgs} args - Arguments to find a ModelRegistry
     * @example
     * // Get one ModelRegistry
     * const modelRegistry = await prisma.modelRegistry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelRegistryFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelRegistryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelRegistryClient<$Result.GetResult<Prisma.$ModelRegistryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModelRegistries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRegistryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModelRegistries
     * const modelRegistries = await prisma.modelRegistry.findMany()
     * 
     * // Get first 10 ModelRegistries
     * const modelRegistries = await prisma.modelRegistry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelRegistryWithIdOnly = await prisma.modelRegistry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelRegistryFindManyArgs>(args?: SelectSubset<T, ModelRegistryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelRegistryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModelRegistry.
     * @param {ModelRegistryCreateArgs} args - Arguments to create a ModelRegistry.
     * @example
     * // Create one ModelRegistry
     * const ModelRegistry = await prisma.modelRegistry.create({
     *   data: {
     *     // ... data to create a ModelRegistry
     *   }
     * })
     * 
     */
    create<T extends ModelRegistryCreateArgs>(args: SelectSubset<T, ModelRegistryCreateArgs<ExtArgs>>): Prisma__ModelRegistryClient<$Result.GetResult<Prisma.$ModelRegistryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModelRegistries.
     * @param {ModelRegistryCreateManyArgs} args - Arguments to create many ModelRegistries.
     * @example
     * // Create many ModelRegistries
     * const modelRegistry = await prisma.modelRegistry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelRegistryCreateManyArgs>(args?: SelectSubset<T, ModelRegistryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModelRegistries and returns the data saved in the database.
     * @param {ModelRegistryCreateManyAndReturnArgs} args - Arguments to create many ModelRegistries.
     * @example
     * // Create many ModelRegistries
     * const modelRegistry = await prisma.modelRegistry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModelRegistries and only return the `id`
     * const modelRegistryWithIdOnly = await prisma.modelRegistry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelRegistryCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelRegistryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelRegistryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModelRegistry.
     * @param {ModelRegistryDeleteArgs} args - Arguments to delete one ModelRegistry.
     * @example
     * // Delete one ModelRegistry
     * const ModelRegistry = await prisma.modelRegistry.delete({
     *   where: {
     *     // ... filter to delete one ModelRegistry
     *   }
     * })
     * 
     */
    delete<T extends ModelRegistryDeleteArgs>(args: SelectSubset<T, ModelRegistryDeleteArgs<ExtArgs>>): Prisma__ModelRegistryClient<$Result.GetResult<Prisma.$ModelRegistryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModelRegistry.
     * @param {ModelRegistryUpdateArgs} args - Arguments to update one ModelRegistry.
     * @example
     * // Update one ModelRegistry
     * const modelRegistry = await prisma.modelRegistry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelRegistryUpdateArgs>(args: SelectSubset<T, ModelRegistryUpdateArgs<ExtArgs>>): Prisma__ModelRegistryClient<$Result.GetResult<Prisma.$ModelRegistryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModelRegistries.
     * @param {ModelRegistryDeleteManyArgs} args - Arguments to filter ModelRegistries to delete.
     * @example
     * // Delete a few ModelRegistries
     * const { count } = await prisma.modelRegistry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelRegistryDeleteManyArgs>(args?: SelectSubset<T, ModelRegistryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelRegistries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRegistryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModelRegistries
     * const modelRegistry = await prisma.modelRegistry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelRegistryUpdateManyArgs>(args: SelectSubset<T, ModelRegistryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelRegistries and returns the data updated in the database.
     * @param {ModelRegistryUpdateManyAndReturnArgs} args - Arguments to update many ModelRegistries.
     * @example
     * // Update many ModelRegistries
     * const modelRegistry = await prisma.modelRegistry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModelRegistries and only return the `id`
     * const modelRegistryWithIdOnly = await prisma.modelRegistry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModelRegistryUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelRegistryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelRegistryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModelRegistry.
     * @param {ModelRegistryUpsertArgs} args - Arguments to update or create a ModelRegistry.
     * @example
     * // Update or create a ModelRegistry
     * const modelRegistry = await prisma.modelRegistry.upsert({
     *   create: {
     *     // ... data to create a ModelRegistry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModelRegistry we want to update
     *   }
     * })
     */
    upsert<T extends ModelRegistryUpsertArgs>(args: SelectSubset<T, ModelRegistryUpsertArgs<ExtArgs>>): Prisma__ModelRegistryClient<$Result.GetResult<Prisma.$ModelRegistryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModelRegistries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRegistryCountArgs} args - Arguments to filter ModelRegistries to count.
     * @example
     * // Count the number of ModelRegistries
     * const count = await prisma.modelRegistry.count({
     *   where: {
     *     // ... the filter for the ModelRegistries we want to count
     *   }
     * })
    **/
    count<T extends ModelRegistryCountArgs>(
      args?: Subset<T, ModelRegistryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelRegistryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModelRegistry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRegistryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModelRegistryAggregateArgs>(args: Subset<T, ModelRegistryAggregateArgs>): Prisma.PrismaPromise<GetModelRegistryAggregateType<T>>

    /**
     * Group by ModelRegistry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelRegistryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModelRegistryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelRegistryGroupByArgs['orderBy'] }
        : { orderBy?: ModelRegistryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModelRegistryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelRegistryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModelRegistry model
   */
  readonly fields: ModelRegistryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModelRegistry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelRegistryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataset<T extends ModelRegistry$datasetArgs<ExtArgs> = {}>(args?: Subset<T, ModelRegistry$datasetArgs<ExtArgs>>): Prisma__DatasetClient<$Result.GetResult<Prisma.$DatasetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    inferences<T extends ModelRegistry$inferencesArgs<ExtArgs> = {}>(args?: Subset<T, ModelRegistry$inferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InferenceLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModelRegistry model
   */
  interface ModelRegistryFieldRefs {
    readonly id: FieldRef<"ModelRegistry", 'String'>
    readonly name: FieldRef<"ModelRegistry", 'String'>
    readonly version: FieldRef<"ModelRegistry", 'String'>
    readonly architecture: FieldRef<"ModelRegistry", 'ModelArchitecture'>
    readonly status: FieldRef<"ModelRegistry", 'ModelStatus'>
    readonly weightsUrl: FieldRef<"ModelRegistry", 'String'>
    readonly eapUrl: FieldRef<"ModelRegistry", 'String'>
    readonly hyperparameters: FieldRef<"ModelRegistry", 'Json'>
    readonly metrics: FieldRef<"ModelRegistry", 'Json'>
    readonly datasetId: FieldRef<"ModelRegistry", 'String'>
    readonly createdAt: FieldRef<"ModelRegistry", 'DateTime'>
    readonly updatedAt: FieldRef<"ModelRegistry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModelRegistry findUnique
   */
  export type ModelRegistryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRegistry
     */
    select?: ModelRegistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRegistry
     */
    omit?: ModelRegistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRegistryInclude<ExtArgs> | null
    /**
     * Filter, which ModelRegistry to fetch.
     */
    where: ModelRegistryWhereUniqueInput
  }

  /**
   * ModelRegistry findUniqueOrThrow
   */
  export type ModelRegistryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRegistry
     */
    select?: ModelRegistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRegistry
     */
    omit?: ModelRegistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRegistryInclude<ExtArgs> | null
    /**
     * Filter, which ModelRegistry to fetch.
     */
    where: ModelRegistryWhereUniqueInput
  }

  /**
   * ModelRegistry findFirst
   */
  export type ModelRegistryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRegistry
     */
    select?: ModelRegistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRegistry
     */
    omit?: ModelRegistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRegistryInclude<ExtArgs> | null
    /**
     * Filter, which ModelRegistry to fetch.
     */
    where?: ModelRegistryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelRegistries to fetch.
     */
    orderBy?: ModelRegistryOrderByWithRelationInput | ModelRegistryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelRegistries.
     */
    cursor?: ModelRegistryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelRegistries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelRegistries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelRegistries.
     */
    distinct?: ModelRegistryScalarFieldEnum | ModelRegistryScalarFieldEnum[]
  }

  /**
   * ModelRegistry findFirstOrThrow
   */
  export type ModelRegistryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRegistry
     */
    select?: ModelRegistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRegistry
     */
    omit?: ModelRegistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRegistryInclude<ExtArgs> | null
    /**
     * Filter, which ModelRegistry to fetch.
     */
    where?: ModelRegistryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelRegistries to fetch.
     */
    orderBy?: ModelRegistryOrderByWithRelationInput | ModelRegistryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelRegistries.
     */
    cursor?: ModelRegistryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelRegistries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelRegistries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelRegistries.
     */
    distinct?: ModelRegistryScalarFieldEnum | ModelRegistryScalarFieldEnum[]
  }

  /**
   * ModelRegistry findMany
   */
  export type ModelRegistryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRegistry
     */
    select?: ModelRegistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRegistry
     */
    omit?: ModelRegistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRegistryInclude<ExtArgs> | null
    /**
     * Filter, which ModelRegistries to fetch.
     */
    where?: ModelRegistryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelRegistries to fetch.
     */
    orderBy?: ModelRegistryOrderByWithRelationInput | ModelRegistryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModelRegistries.
     */
    cursor?: ModelRegistryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelRegistries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelRegistries.
     */
    skip?: number
    distinct?: ModelRegistryScalarFieldEnum | ModelRegistryScalarFieldEnum[]
  }

  /**
   * ModelRegistry create
   */
  export type ModelRegistryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRegistry
     */
    select?: ModelRegistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRegistry
     */
    omit?: ModelRegistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRegistryInclude<ExtArgs> | null
    /**
     * The data needed to create a ModelRegistry.
     */
    data: XOR<ModelRegistryCreateInput, ModelRegistryUncheckedCreateInput>
  }

  /**
   * ModelRegistry createMany
   */
  export type ModelRegistryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModelRegistries.
     */
    data: ModelRegistryCreateManyInput | ModelRegistryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ModelRegistry createManyAndReturn
   */
  export type ModelRegistryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRegistry
     */
    select?: ModelRegistrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRegistry
     */
    omit?: ModelRegistryOmit<ExtArgs> | null
    /**
     * The data used to create many ModelRegistries.
     */
    data: ModelRegistryCreateManyInput | ModelRegistryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRegistryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModelRegistry update
   */
  export type ModelRegistryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRegistry
     */
    select?: ModelRegistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRegistry
     */
    omit?: ModelRegistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRegistryInclude<ExtArgs> | null
    /**
     * The data needed to update a ModelRegistry.
     */
    data: XOR<ModelRegistryUpdateInput, ModelRegistryUncheckedUpdateInput>
    /**
     * Choose, which ModelRegistry to update.
     */
    where: ModelRegistryWhereUniqueInput
  }

  /**
   * ModelRegistry updateMany
   */
  export type ModelRegistryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModelRegistries.
     */
    data: XOR<ModelRegistryUpdateManyMutationInput, ModelRegistryUncheckedUpdateManyInput>
    /**
     * Filter which ModelRegistries to update
     */
    where?: ModelRegistryWhereInput
    /**
     * Limit how many ModelRegistries to update.
     */
    limit?: number
  }

  /**
   * ModelRegistry updateManyAndReturn
   */
  export type ModelRegistryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRegistry
     */
    select?: ModelRegistrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRegistry
     */
    omit?: ModelRegistryOmit<ExtArgs> | null
    /**
     * The data used to update ModelRegistries.
     */
    data: XOR<ModelRegistryUpdateManyMutationInput, ModelRegistryUncheckedUpdateManyInput>
    /**
     * Filter which ModelRegistries to update
     */
    where?: ModelRegistryWhereInput
    /**
     * Limit how many ModelRegistries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRegistryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModelRegistry upsert
   */
  export type ModelRegistryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRegistry
     */
    select?: ModelRegistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRegistry
     */
    omit?: ModelRegistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRegistryInclude<ExtArgs> | null
    /**
     * The filter to search for the ModelRegistry to update in case it exists.
     */
    where: ModelRegistryWhereUniqueInput
    /**
     * In case the ModelRegistry found by the `where` argument doesn't exist, create a new ModelRegistry with this data.
     */
    create: XOR<ModelRegistryCreateInput, ModelRegistryUncheckedCreateInput>
    /**
     * In case the ModelRegistry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelRegistryUpdateInput, ModelRegistryUncheckedUpdateInput>
  }

  /**
   * ModelRegistry delete
   */
  export type ModelRegistryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRegistry
     */
    select?: ModelRegistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRegistry
     */
    omit?: ModelRegistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRegistryInclude<ExtArgs> | null
    /**
     * Filter which ModelRegistry to delete.
     */
    where: ModelRegistryWhereUniqueInput
  }

  /**
   * ModelRegistry deleteMany
   */
  export type ModelRegistryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelRegistries to delete
     */
    where?: ModelRegistryWhereInput
    /**
     * Limit how many ModelRegistries to delete.
     */
    limit?: number
  }

  /**
   * ModelRegistry.dataset
   */
  export type ModelRegistry$datasetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dataset
     */
    select?: DatasetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dataset
     */
    omit?: DatasetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DatasetInclude<ExtArgs> | null
    where?: DatasetWhereInput
  }

  /**
   * ModelRegistry.inferences
   */
  export type ModelRegistry$inferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InferenceLog
     */
    select?: InferenceLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InferenceLog
     */
    omit?: InferenceLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InferenceLogInclude<ExtArgs> | null
    where?: InferenceLogWhereInput
    orderBy?: InferenceLogOrderByWithRelationInput | InferenceLogOrderByWithRelationInput[]
    cursor?: InferenceLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InferenceLogScalarFieldEnum | InferenceLogScalarFieldEnum[]
  }

  /**
   * ModelRegistry without action
   */
  export type ModelRegistryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelRegistry
     */
    select?: ModelRegistrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelRegistry
     */
    omit?: ModelRegistryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelRegistryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const BusImageScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    label: 'label',
    confidence: 'confidence',
    fleetNumber: 'fleetNumber',
    cameraId: 'cameraId',
    timeTaken: 'timeTaken',
    weatherCondition: 'weatherCondition',
    cameraAngle: 'cameraAngle',
    isVerified: 'isVerified',
    labeledById: 'labeledById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusImageScalarFieldEnum = (typeof BusImageScalarFieldEnum)[keyof typeof BusImageScalarFieldEnum]


  export const TransponderLogScalarFieldEnum: {
    id: 'id',
    fleetNumber: 'fleetNumber',
    gateId: 'gateId',
    timestamp: 'timestamp',
    matchedImageId: 'matchedImageId',
    createdAt: 'createdAt'
  };

  export type TransponderLogScalarFieldEnum = (typeof TransponderLogScalarFieldEnum)[keyof typeof TransponderLogScalarFieldEnum]


  export const InferenceLogScalarFieldEnum: {
    id: 'id',
    predictedLabel: 'predictedLabel',
    confidence: 'confidence',
    imageId: 'imageId',
    modelId: 'modelId',
    createdAt: 'createdAt'
  };

  export type InferenceLogScalarFieldEnum = (typeof InferenceLogScalarFieldEnum)[keyof typeof InferenceLogScalarFieldEnum]


  export const DatasetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type DatasetScalarFieldEnum = (typeof DatasetScalarFieldEnum)[keyof typeof DatasetScalarFieldEnum]


  export const DatasetImageScalarFieldEnum: {
    datasetId: 'datasetId',
    imageId: 'imageId'
  };

  export type DatasetImageScalarFieldEnum = (typeof DatasetImageScalarFieldEnum)[keyof typeof DatasetImageScalarFieldEnum]


  export const ModelRegistryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    version: 'version',
    architecture: 'architecture',
    status: 'status',
    weightsUrl: 'weightsUrl',
    eapUrl: 'eapUrl',
    hyperparameters: 'hyperparameters',
    metrics: 'metrics',
    datasetId: 'datasetId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModelRegistryScalarFieldEnum = (typeof ModelRegistryScalarFieldEnum)[keyof typeof ModelRegistryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'LabelStatus'
   */
  export type EnumLabelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LabelStatus'>
    


  /**
   * Reference to a field of type 'LabelStatus[]'
   */
  export type ListEnumLabelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LabelStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Weather'
   */
  export type EnumWeatherFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Weather'>
    


  /**
   * Reference to a field of type 'Weather[]'
   */
  export type ListEnumWeatherFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Weather[]'>
    


  /**
   * Reference to a field of type 'Angle'
   */
  export type EnumAngleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Angle'>
    


  /**
   * Reference to a field of type 'Angle[]'
   */
  export type ListEnumAngleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Angle[]'>
    


  /**
   * Reference to a field of type 'ModelArchitecture'
   */
  export type EnumModelArchitectureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelArchitecture'>
    


  /**
   * Reference to a field of type 'ModelArchitecture[]'
   */
  export type ListEnumModelArchitectureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelArchitecture[]'>
    


  /**
   * Reference to a field of type 'ModelStatus'
   */
  export type EnumModelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelStatus'>
    


  /**
   * Reference to a field of type 'ModelStatus[]'
   */
  export type ListEnumModelStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModelStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    name?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    createdById?: StringWithAggregatesFilter<"Post"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    busImages?: BusImageListRelationFilter
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    posts?: PostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    busImages?: BusImageOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    busImages?: BusImageListRelationFilter
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    posts?: PostListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type BusImageWhereInput = {
    AND?: BusImageWhereInput | BusImageWhereInput[]
    OR?: BusImageWhereInput[]
    NOT?: BusImageWhereInput | BusImageWhereInput[]
    id?: StringFilter<"BusImage"> | string
    imageUrl?: StringFilter<"BusImage"> | string
    label?: EnumLabelStatusNullableFilter<"BusImage"> | $Enums.LabelStatus | null
    confidence?: IntNullableFilter<"BusImage"> | number | null
    fleetNumber?: StringNullableFilter<"BusImage"> | string | null
    cameraId?: StringNullableFilter<"BusImage"> | string | null
    timeTaken?: DateTimeNullableFilter<"BusImage"> | Date | string | null
    weatherCondition?: EnumWeatherNullableFilter<"BusImage"> | $Enums.Weather | null
    cameraAngle?: EnumAngleNullableFilter<"BusImage"> | $Enums.Angle | null
    isVerified?: BoolFilter<"BusImage"> | boolean
    labeledById?: StringNullableFilter<"BusImage"> | string | null
    createdAt?: DateTimeFilter<"BusImage"> | Date | string
    updatedAt?: DateTimeFilter<"BusImage"> | Date | string
    labeledBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    trainingData?: DatasetImageListRelationFilter
    inferences?: InferenceLogListRelationFilter
    transponderLogs?: TransponderLogListRelationFilter
  }

  export type BusImageOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    label?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    fleetNumber?: SortOrderInput | SortOrder
    cameraId?: SortOrderInput | SortOrder
    timeTaken?: SortOrderInput | SortOrder
    weatherCondition?: SortOrderInput | SortOrder
    cameraAngle?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    labeledById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    labeledBy?: UserOrderByWithRelationInput
    trainingData?: DatasetImageOrderByRelationAggregateInput
    inferences?: InferenceLogOrderByRelationAggregateInput
    transponderLogs?: TransponderLogOrderByRelationAggregateInput
  }

  export type BusImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BusImageWhereInput | BusImageWhereInput[]
    OR?: BusImageWhereInput[]
    NOT?: BusImageWhereInput | BusImageWhereInput[]
    imageUrl?: StringFilter<"BusImage"> | string
    label?: EnumLabelStatusNullableFilter<"BusImage"> | $Enums.LabelStatus | null
    confidence?: IntNullableFilter<"BusImage"> | number | null
    fleetNumber?: StringNullableFilter<"BusImage"> | string | null
    cameraId?: StringNullableFilter<"BusImage"> | string | null
    timeTaken?: DateTimeNullableFilter<"BusImage"> | Date | string | null
    weatherCondition?: EnumWeatherNullableFilter<"BusImage"> | $Enums.Weather | null
    cameraAngle?: EnumAngleNullableFilter<"BusImage"> | $Enums.Angle | null
    isVerified?: BoolFilter<"BusImage"> | boolean
    labeledById?: StringNullableFilter<"BusImage"> | string | null
    createdAt?: DateTimeFilter<"BusImage"> | Date | string
    updatedAt?: DateTimeFilter<"BusImage"> | Date | string
    labeledBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    trainingData?: DatasetImageListRelationFilter
    inferences?: InferenceLogListRelationFilter
    transponderLogs?: TransponderLogListRelationFilter
  }, "id">

  export type BusImageOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    label?: SortOrderInput | SortOrder
    confidence?: SortOrderInput | SortOrder
    fleetNumber?: SortOrderInput | SortOrder
    cameraId?: SortOrderInput | SortOrder
    timeTaken?: SortOrderInput | SortOrder
    weatherCondition?: SortOrderInput | SortOrder
    cameraAngle?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    labeledById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusImageCountOrderByAggregateInput
    _avg?: BusImageAvgOrderByAggregateInput
    _max?: BusImageMaxOrderByAggregateInput
    _min?: BusImageMinOrderByAggregateInput
    _sum?: BusImageSumOrderByAggregateInput
  }

  export type BusImageScalarWhereWithAggregatesInput = {
    AND?: BusImageScalarWhereWithAggregatesInput | BusImageScalarWhereWithAggregatesInput[]
    OR?: BusImageScalarWhereWithAggregatesInput[]
    NOT?: BusImageScalarWhereWithAggregatesInput | BusImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BusImage"> | string
    imageUrl?: StringWithAggregatesFilter<"BusImage"> | string
    label?: EnumLabelStatusNullableWithAggregatesFilter<"BusImage"> | $Enums.LabelStatus | null
    confidence?: IntNullableWithAggregatesFilter<"BusImage"> | number | null
    fleetNumber?: StringNullableWithAggregatesFilter<"BusImage"> | string | null
    cameraId?: StringNullableWithAggregatesFilter<"BusImage"> | string | null
    timeTaken?: DateTimeNullableWithAggregatesFilter<"BusImage"> | Date | string | null
    weatherCondition?: EnumWeatherNullableWithAggregatesFilter<"BusImage"> | $Enums.Weather | null
    cameraAngle?: EnumAngleNullableWithAggregatesFilter<"BusImage"> | $Enums.Angle | null
    isVerified?: BoolWithAggregatesFilter<"BusImage"> | boolean
    labeledById?: StringNullableWithAggregatesFilter<"BusImage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"BusImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusImage"> | Date | string
  }

  export type TransponderLogWhereInput = {
    AND?: TransponderLogWhereInput | TransponderLogWhereInput[]
    OR?: TransponderLogWhereInput[]
    NOT?: TransponderLogWhereInput | TransponderLogWhereInput[]
    id?: StringFilter<"TransponderLog"> | string
    fleetNumber?: StringFilter<"TransponderLog"> | string
    gateId?: StringNullableFilter<"TransponderLog"> | string | null
    timestamp?: DateTimeFilter<"TransponderLog"> | Date | string
    matchedImageId?: StringNullableFilter<"TransponderLog"> | string | null
    createdAt?: DateTimeFilter<"TransponderLog"> | Date | string
    matchedImage?: XOR<BusImageNullableScalarRelationFilter, BusImageWhereInput> | null
  }

  export type TransponderLogOrderByWithRelationInput = {
    id?: SortOrder
    fleetNumber?: SortOrder
    gateId?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    matchedImageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    matchedImage?: BusImageOrderByWithRelationInput
  }

  export type TransponderLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matchedImageId?: string
    AND?: TransponderLogWhereInput | TransponderLogWhereInput[]
    OR?: TransponderLogWhereInput[]
    NOT?: TransponderLogWhereInput | TransponderLogWhereInput[]
    fleetNumber?: StringFilter<"TransponderLog"> | string
    gateId?: StringNullableFilter<"TransponderLog"> | string | null
    timestamp?: DateTimeFilter<"TransponderLog"> | Date | string
    createdAt?: DateTimeFilter<"TransponderLog"> | Date | string
    matchedImage?: XOR<BusImageNullableScalarRelationFilter, BusImageWhereInput> | null
  }, "id" | "matchedImageId">

  export type TransponderLogOrderByWithAggregationInput = {
    id?: SortOrder
    fleetNumber?: SortOrder
    gateId?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    matchedImageId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TransponderLogCountOrderByAggregateInput
    _max?: TransponderLogMaxOrderByAggregateInput
    _min?: TransponderLogMinOrderByAggregateInput
  }

  export type TransponderLogScalarWhereWithAggregatesInput = {
    AND?: TransponderLogScalarWhereWithAggregatesInput | TransponderLogScalarWhereWithAggregatesInput[]
    OR?: TransponderLogScalarWhereWithAggregatesInput[]
    NOT?: TransponderLogScalarWhereWithAggregatesInput | TransponderLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransponderLog"> | string
    fleetNumber?: StringWithAggregatesFilter<"TransponderLog"> | string
    gateId?: StringNullableWithAggregatesFilter<"TransponderLog"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"TransponderLog"> | Date | string
    matchedImageId?: StringNullableWithAggregatesFilter<"TransponderLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TransponderLog"> | Date | string
  }

  export type InferenceLogWhereInput = {
    AND?: InferenceLogWhereInput | InferenceLogWhereInput[]
    OR?: InferenceLogWhereInput[]
    NOT?: InferenceLogWhereInput | InferenceLogWhereInput[]
    id?: StringFilter<"InferenceLog"> | string
    predictedLabel?: EnumLabelStatusFilter<"InferenceLog"> | $Enums.LabelStatus
    confidence?: IntFilter<"InferenceLog"> | number
    imageId?: StringFilter<"InferenceLog"> | string
    modelId?: StringFilter<"InferenceLog"> | string
    createdAt?: DateTimeFilter<"InferenceLog"> | Date | string
    image?: XOR<BusImageScalarRelationFilter, BusImageWhereInput>
    model?: XOR<ModelRegistryScalarRelationFilter, ModelRegistryWhereInput>
  }

  export type InferenceLogOrderByWithRelationInput = {
    id?: SortOrder
    predictedLabel?: SortOrder
    confidence?: SortOrder
    imageId?: SortOrder
    modelId?: SortOrder
    createdAt?: SortOrder
    image?: BusImageOrderByWithRelationInput
    model?: ModelRegistryOrderByWithRelationInput
  }

  export type InferenceLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InferenceLogWhereInput | InferenceLogWhereInput[]
    OR?: InferenceLogWhereInput[]
    NOT?: InferenceLogWhereInput | InferenceLogWhereInput[]
    predictedLabel?: EnumLabelStatusFilter<"InferenceLog"> | $Enums.LabelStatus
    confidence?: IntFilter<"InferenceLog"> | number
    imageId?: StringFilter<"InferenceLog"> | string
    modelId?: StringFilter<"InferenceLog"> | string
    createdAt?: DateTimeFilter<"InferenceLog"> | Date | string
    image?: XOR<BusImageScalarRelationFilter, BusImageWhereInput>
    model?: XOR<ModelRegistryScalarRelationFilter, ModelRegistryWhereInput>
  }, "id">

  export type InferenceLogOrderByWithAggregationInput = {
    id?: SortOrder
    predictedLabel?: SortOrder
    confidence?: SortOrder
    imageId?: SortOrder
    modelId?: SortOrder
    createdAt?: SortOrder
    _count?: InferenceLogCountOrderByAggregateInput
    _avg?: InferenceLogAvgOrderByAggregateInput
    _max?: InferenceLogMaxOrderByAggregateInput
    _min?: InferenceLogMinOrderByAggregateInput
    _sum?: InferenceLogSumOrderByAggregateInput
  }

  export type InferenceLogScalarWhereWithAggregatesInput = {
    AND?: InferenceLogScalarWhereWithAggregatesInput | InferenceLogScalarWhereWithAggregatesInput[]
    OR?: InferenceLogScalarWhereWithAggregatesInput[]
    NOT?: InferenceLogScalarWhereWithAggregatesInput | InferenceLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InferenceLog"> | string
    predictedLabel?: EnumLabelStatusWithAggregatesFilter<"InferenceLog"> | $Enums.LabelStatus
    confidence?: IntWithAggregatesFilter<"InferenceLog"> | number
    imageId?: StringWithAggregatesFilter<"InferenceLog"> | string
    modelId?: StringWithAggregatesFilter<"InferenceLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InferenceLog"> | Date | string
  }

  export type DatasetWhereInput = {
    AND?: DatasetWhereInput | DatasetWhereInput[]
    OR?: DatasetWhereInput[]
    NOT?: DatasetWhereInput | DatasetWhereInput[]
    id?: StringFilter<"Dataset"> | string
    name?: StringFilter<"Dataset"> | string
    description?: StringNullableFilter<"Dataset"> | string | null
    createdAt?: DateTimeFilter<"Dataset"> | Date | string
    images?: DatasetImageListRelationFilter
    models?: ModelRegistryListRelationFilter
  }

  export type DatasetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    images?: DatasetImageOrderByRelationAggregateInput
    models?: ModelRegistryOrderByRelationAggregateInput
  }

  export type DatasetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DatasetWhereInput | DatasetWhereInput[]
    OR?: DatasetWhereInput[]
    NOT?: DatasetWhereInput | DatasetWhereInput[]
    name?: StringFilter<"Dataset"> | string
    description?: StringNullableFilter<"Dataset"> | string | null
    createdAt?: DateTimeFilter<"Dataset"> | Date | string
    images?: DatasetImageListRelationFilter
    models?: ModelRegistryListRelationFilter
  }, "id">

  export type DatasetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: DatasetCountOrderByAggregateInput
    _max?: DatasetMaxOrderByAggregateInput
    _min?: DatasetMinOrderByAggregateInput
  }

  export type DatasetScalarWhereWithAggregatesInput = {
    AND?: DatasetScalarWhereWithAggregatesInput | DatasetScalarWhereWithAggregatesInput[]
    OR?: DatasetScalarWhereWithAggregatesInput[]
    NOT?: DatasetScalarWhereWithAggregatesInput | DatasetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dataset"> | string
    name?: StringWithAggregatesFilter<"Dataset"> | string
    description?: StringNullableWithAggregatesFilter<"Dataset"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dataset"> | Date | string
  }

  export type DatasetImageWhereInput = {
    AND?: DatasetImageWhereInput | DatasetImageWhereInput[]
    OR?: DatasetImageWhereInput[]
    NOT?: DatasetImageWhereInput | DatasetImageWhereInput[]
    datasetId?: StringFilter<"DatasetImage"> | string
    imageId?: StringFilter<"DatasetImage"> | string
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
    image?: XOR<BusImageScalarRelationFilter, BusImageWhereInput>
  }

  export type DatasetImageOrderByWithRelationInput = {
    datasetId?: SortOrder
    imageId?: SortOrder
    dataset?: DatasetOrderByWithRelationInput
    image?: BusImageOrderByWithRelationInput
  }

  export type DatasetImageWhereUniqueInput = Prisma.AtLeast<{
    datasetId_imageId?: DatasetImageDatasetIdImageIdCompoundUniqueInput
    AND?: DatasetImageWhereInput | DatasetImageWhereInput[]
    OR?: DatasetImageWhereInput[]
    NOT?: DatasetImageWhereInput | DatasetImageWhereInput[]
    datasetId?: StringFilter<"DatasetImage"> | string
    imageId?: StringFilter<"DatasetImage"> | string
    dataset?: XOR<DatasetScalarRelationFilter, DatasetWhereInput>
    image?: XOR<BusImageScalarRelationFilter, BusImageWhereInput>
  }, "datasetId_imageId">

  export type DatasetImageOrderByWithAggregationInput = {
    datasetId?: SortOrder
    imageId?: SortOrder
    _count?: DatasetImageCountOrderByAggregateInput
    _max?: DatasetImageMaxOrderByAggregateInput
    _min?: DatasetImageMinOrderByAggregateInput
  }

  export type DatasetImageScalarWhereWithAggregatesInput = {
    AND?: DatasetImageScalarWhereWithAggregatesInput | DatasetImageScalarWhereWithAggregatesInput[]
    OR?: DatasetImageScalarWhereWithAggregatesInput[]
    NOT?: DatasetImageScalarWhereWithAggregatesInput | DatasetImageScalarWhereWithAggregatesInput[]
    datasetId?: StringWithAggregatesFilter<"DatasetImage"> | string
    imageId?: StringWithAggregatesFilter<"DatasetImage"> | string
  }

  export type ModelRegistryWhereInput = {
    AND?: ModelRegistryWhereInput | ModelRegistryWhereInput[]
    OR?: ModelRegistryWhereInput[]
    NOT?: ModelRegistryWhereInput | ModelRegistryWhereInput[]
    id?: StringFilter<"ModelRegistry"> | string
    name?: StringFilter<"ModelRegistry"> | string
    version?: StringNullableFilter<"ModelRegistry"> | string | null
    architecture?: EnumModelArchitectureFilter<"ModelRegistry"> | $Enums.ModelArchitecture
    status?: EnumModelStatusFilter<"ModelRegistry"> | $Enums.ModelStatus
    weightsUrl?: StringNullableFilter<"ModelRegistry"> | string | null
    eapUrl?: StringNullableFilter<"ModelRegistry"> | string | null
    hyperparameters?: JsonNullableFilter<"ModelRegistry">
    metrics?: JsonNullableFilter<"ModelRegistry">
    datasetId?: StringNullableFilter<"ModelRegistry"> | string | null
    createdAt?: DateTimeFilter<"ModelRegistry"> | Date | string
    updatedAt?: DateTimeFilter<"ModelRegistry"> | Date | string
    dataset?: XOR<DatasetNullableScalarRelationFilter, DatasetWhereInput> | null
    inferences?: InferenceLogListRelationFilter
  }

  export type ModelRegistryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrderInput | SortOrder
    architecture?: SortOrder
    status?: SortOrder
    weightsUrl?: SortOrderInput | SortOrder
    eapUrl?: SortOrderInput | SortOrder
    hyperparameters?: SortOrderInput | SortOrder
    metrics?: SortOrderInput | SortOrder
    datasetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dataset?: DatasetOrderByWithRelationInput
    inferences?: InferenceLogOrderByRelationAggregateInput
  }

  export type ModelRegistryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_version?: ModelRegistryNameVersionCompoundUniqueInput
    AND?: ModelRegistryWhereInput | ModelRegistryWhereInput[]
    OR?: ModelRegistryWhereInput[]
    NOT?: ModelRegistryWhereInput | ModelRegistryWhereInput[]
    name?: StringFilter<"ModelRegistry"> | string
    version?: StringNullableFilter<"ModelRegistry"> | string | null
    architecture?: EnumModelArchitectureFilter<"ModelRegistry"> | $Enums.ModelArchitecture
    status?: EnumModelStatusFilter<"ModelRegistry"> | $Enums.ModelStatus
    weightsUrl?: StringNullableFilter<"ModelRegistry"> | string | null
    eapUrl?: StringNullableFilter<"ModelRegistry"> | string | null
    hyperparameters?: JsonNullableFilter<"ModelRegistry">
    metrics?: JsonNullableFilter<"ModelRegistry">
    datasetId?: StringNullableFilter<"ModelRegistry"> | string | null
    createdAt?: DateTimeFilter<"ModelRegistry"> | Date | string
    updatedAt?: DateTimeFilter<"ModelRegistry"> | Date | string
    dataset?: XOR<DatasetNullableScalarRelationFilter, DatasetWhereInput> | null
    inferences?: InferenceLogListRelationFilter
  }, "id" | "name_version">

  export type ModelRegistryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrderInput | SortOrder
    architecture?: SortOrder
    status?: SortOrder
    weightsUrl?: SortOrderInput | SortOrder
    eapUrl?: SortOrderInput | SortOrder
    hyperparameters?: SortOrderInput | SortOrder
    metrics?: SortOrderInput | SortOrder
    datasetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModelRegistryCountOrderByAggregateInput
    _max?: ModelRegistryMaxOrderByAggregateInput
    _min?: ModelRegistryMinOrderByAggregateInput
  }

  export type ModelRegistryScalarWhereWithAggregatesInput = {
    AND?: ModelRegistryScalarWhereWithAggregatesInput | ModelRegistryScalarWhereWithAggregatesInput[]
    OR?: ModelRegistryScalarWhereWithAggregatesInput[]
    NOT?: ModelRegistryScalarWhereWithAggregatesInput | ModelRegistryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ModelRegistry"> | string
    name?: StringWithAggregatesFilter<"ModelRegistry"> | string
    version?: StringNullableWithAggregatesFilter<"ModelRegistry"> | string | null
    architecture?: EnumModelArchitectureWithAggregatesFilter<"ModelRegistry"> | $Enums.ModelArchitecture
    status?: EnumModelStatusWithAggregatesFilter<"ModelRegistry"> | $Enums.ModelStatus
    weightsUrl?: StringNullableWithAggregatesFilter<"ModelRegistry"> | string | null
    eapUrl?: StringNullableWithAggregatesFilter<"ModelRegistry"> | string | null
    hyperparameters?: JsonNullableWithAggregatesFilter<"ModelRegistry">
    metrics?: JsonNullableWithAggregatesFilter<"ModelRegistry">
    datasetId?: StringNullableWithAggregatesFilter<"ModelRegistry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ModelRegistry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ModelRegistry"> | Date | string
  }

  export type PostCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busImages?: BusImageCreateNestedManyWithoutLabeledByInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busImages?: BusImageUncheckedCreateNestedManyWithoutLabeledByInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busImages?: BusImageUpdateManyWithoutLabeledByNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busImages?: BusImageUncheckedUpdateManyWithoutLabeledByNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusImageCreateInput = {
    id?: string
    imageUrl: string
    label?: $Enums.LabelStatus | null
    confidence?: number | null
    fleetNumber?: string | null
    cameraId?: string | null
    timeTaken?: Date | string | null
    weatherCondition?: $Enums.Weather | null
    cameraAngle?: $Enums.Angle | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    labeledBy?: UserCreateNestedOneWithoutBusImagesInput
    trainingData?: DatasetImageCreateNestedManyWithoutImageInput
    inferences?: InferenceLogCreateNestedManyWithoutImageInput
    transponderLogs?: TransponderLogCreateNestedManyWithoutMatchedImageInput
  }

  export type BusImageUncheckedCreateInput = {
    id?: string
    imageUrl: string
    label?: $Enums.LabelStatus | null
    confidence?: number | null
    fleetNumber?: string | null
    cameraId?: string | null
    timeTaken?: Date | string | null
    weatherCondition?: $Enums.Weather | null
    cameraAngle?: $Enums.Angle | null
    isVerified?: boolean
    labeledById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trainingData?: DatasetImageUncheckedCreateNestedManyWithoutImageInput
    inferences?: InferenceLogUncheckedCreateNestedManyWithoutImageInput
    transponderLogs?: TransponderLogUncheckedCreateNestedManyWithoutMatchedImageInput
  }

  export type BusImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    label?: NullableEnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus | null
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    fleetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    timeTaken?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weatherCondition?: NullableEnumWeatherFieldUpdateOperationsInput | $Enums.Weather | null
    cameraAngle?: NullableEnumAngleFieldUpdateOperationsInput | $Enums.Angle | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labeledBy?: UserUpdateOneWithoutBusImagesNestedInput
    trainingData?: DatasetImageUpdateManyWithoutImageNestedInput
    inferences?: InferenceLogUpdateManyWithoutImageNestedInput
    transponderLogs?: TransponderLogUpdateManyWithoutMatchedImageNestedInput
  }

  export type BusImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    label?: NullableEnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus | null
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    fleetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    timeTaken?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weatherCondition?: NullableEnumWeatherFieldUpdateOperationsInput | $Enums.Weather | null
    cameraAngle?: NullableEnumAngleFieldUpdateOperationsInput | $Enums.Angle | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    labeledById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingData?: DatasetImageUncheckedUpdateManyWithoutImageNestedInput
    inferences?: InferenceLogUncheckedUpdateManyWithoutImageNestedInput
    transponderLogs?: TransponderLogUncheckedUpdateManyWithoutMatchedImageNestedInput
  }

  export type BusImageCreateManyInput = {
    id?: string
    imageUrl: string
    label?: $Enums.LabelStatus | null
    confidence?: number | null
    fleetNumber?: string | null
    cameraId?: string | null
    timeTaken?: Date | string | null
    weatherCondition?: $Enums.Weather | null
    cameraAngle?: $Enums.Angle | null
    isVerified?: boolean
    labeledById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    label?: NullableEnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus | null
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    fleetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    timeTaken?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weatherCondition?: NullableEnumWeatherFieldUpdateOperationsInput | $Enums.Weather | null
    cameraAngle?: NullableEnumAngleFieldUpdateOperationsInput | $Enums.Angle | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    label?: NullableEnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus | null
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    fleetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    timeTaken?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weatherCondition?: NullableEnumWeatherFieldUpdateOperationsInput | $Enums.Weather | null
    cameraAngle?: NullableEnumAngleFieldUpdateOperationsInput | $Enums.Angle | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    labeledById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransponderLogCreateInput = {
    id?: string
    fleetNumber: string
    gateId?: string | null
    timestamp: Date | string
    createdAt?: Date | string
    matchedImage?: BusImageCreateNestedOneWithoutTransponderLogsInput
  }

  export type TransponderLogUncheckedCreateInput = {
    id?: string
    fleetNumber: string
    gateId?: string | null
    timestamp: Date | string
    matchedImageId?: string | null
    createdAt?: Date | string
  }

  export type TransponderLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetNumber?: StringFieldUpdateOperationsInput | string
    gateId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchedImage?: BusImageUpdateOneWithoutTransponderLogsNestedInput
  }

  export type TransponderLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetNumber?: StringFieldUpdateOperationsInput | string
    gateId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    matchedImageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransponderLogCreateManyInput = {
    id?: string
    fleetNumber: string
    gateId?: string | null
    timestamp: Date | string
    matchedImageId?: string | null
    createdAt?: Date | string
  }

  export type TransponderLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetNumber?: StringFieldUpdateOperationsInput | string
    gateId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransponderLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetNumber?: StringFieldUpdateOperationsInput | string
    gateId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    matchedImageId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InferenceLogCreateInput = {
    id?: string
    predictedLabel: $Enums.LabelStatus
    confidence: number
    createdAt?: Date | string
    image: BusImageCreateNestedOneWithoutInferencesInput
    model: ModelRegistryCreateNestedOneWithoutInferencesInput
  }

  export type InferenceLogUncheckedCreateInput = {
    id?: string
    predictedLabel: $Enums.LabelStatus
    confidence: number
    imageId: string
    modelId: string
    createdAt?: Date | string
  }

  export type InferenceLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictedLabel?: EnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus
    confidence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: BusImageUpdateOneRequiredWithoutInferencesNestedInput
    model?: ModelRegistryUpdateOneRequiredWithoutInferencesNestedInput
  }

  export type InferenceLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictedLabel?: EnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus
    confidence?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InferenceLogCreateManyInput = {
    id?: string
    predictedLabel: $Enums.LabelStatus
    confidence: number
    imageId: string
    modelId: string
    createdAt?: Date | string
  }

  export type InferenceLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictedLabel?: EnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus
    confidence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InferenceLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictedLabel?: EnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus
    confidence?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    images?: DatasetImageCreateNestedManyWithoutDatasetInput
    models?: ModelRegistryCreateNestedManyWithoutDatasetInput
  }

  export type DatasetUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    images?: DatasetImageUncheckedCreateNestedManyWithoutDatasetInput
    models?: ModelRegistryUncheckedCreateNestedManyWithoutDatasetInput
  }

  export type DatasetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DatasetImageUpdateManyWithoutDatasetNestedInput
    models?: ModelRegistryUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DatasetImageUncheckedUpdateManyWithoutDatasetNestedInput
    models?: ModelRegistryUncheckedUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type DatasetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetImageCreateInput = {
    dataset: DatasetCreateNestedOneWithoutImagesInput
    image: BusImageCreateNestedOneWithoutTrainingDataInput
  }

  export type DatasetImageUncheckedCreateInput = {
    datasetId: string
    imageId: string
  }

  export type DatasetImageUpdateInput = {
    dataset?: DatasetUpdateOneRequiredWithoutImagesNestedInput
    image?: BusImageUpdateOneRequiredWithoutTrainingDataNestedInput
  }

  export type DatasetImageUncheckedUpdateInput = {
    datasetId?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
  }

  export type DatasetImageCreateManyInput = {
    datasetId: string
    imageId: string
  }

  export type DatasetImageUpdateManyMutationInput = {

  }

  export type DatasetImageUncheckedUpdateManyInput = {
    datasetId?: StringFieldUpdateOperationsInput | string
    imageId?: StringFieldUpdateOperationsInput | string
  }

  export type ModelRegistryCreateInput = {
    id?: string
    name: string
    version?: string | null
    architecture: $Enums.ModelArchitecture
    status?: $Enums.ModelStatus
    weightsUrl?: string | null
    eapUrl?: string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    dataset?: DatasetCreateNestedOneWithoutModelsInput
    inferences?: InferenceLogCreateNestedManyWithoutModelInput
  }

  export type ModelRegistryUncheckedCreateInput = {
    id?: string
    name: string
    version?: string | null
    architecture: $Enums.ModelArchitecture
    status?: $Enums.ModelStatus
    weightsUrl?: string | null
    eapUrl?: string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    datasetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inferences?: InferenceLogUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelRegistryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    architecture?: EnumModelArchitectureFieldUpdateOperationsInput | $Enums.ModelArchitecture
    status?: EnumModelStatusFieldUpdateOperationsInput | $Enums.ModelStatus
    weightsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataset?: DatasetUpdateOneWithoutModelsNestedInput
    inferences?: InferenceLogUpdateManyWithoutModelNestedInput
  }

  export type ModelRegistryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    architecture?: EnumModelArchitectureFieldUpdateOperationsInput | $Enums.ModelArchitecture
    status?: EnumModelStatusFieldUpdateOperationsInput | $Enums.ModelStatus
    weightsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inferences?: InferenceLogUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelRegistryCreateManyInput = {
    id?: string
    name: string
    version?: string | null
    architecture: $Enums.ModelArchitecture
    status?: $Enums.ModelStatus
    weightsUrl?: string | null
    eapUrl?: string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    datasetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelRegistryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    architecture?: EnumModelArchitectureFieldUpdateOperationsInput | $Enums.ModelArchitecture
    status?: EnumModelStatusFieldUpdateOperationsInput | $Enums.ModelStatus
    weightsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModelRegistryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    architecture?: EnumModelArchitectureFieldUpdateOperationsInput | $Enums.ModelArchitecture
    status?: EnumModelStatusFieldUpdateOperationsInput | $Enums.ModelStatus
    weightsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BusImageListRelationFilter = {
    every?: BusImageWhereInput
    some?: BusImageWhereInput
    none?: BusImageWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BusImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLabelStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LabelStatus | EnumLabelStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.LabelStatus[] | ListEnumLabelStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LabelStatus[] | ListEnumLabelStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLabelStatusNullableFilter<$PrismaModel> | $Enums.LabelStatus | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumWeatherNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Weather | EnumWeatherFieldRefInput<$PrismaModel> | null
    in?: $Enums.Weather[] | ListEnumWeatherFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Weather[] | ListEnumWeatherFieldRefInput<$PrismaModel> | null
    not?: NestedEnumWeatherNullableFilter<$PrismaModel> | $Enums.Weather | null
  }

  export type EnumAngleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Angle | EnumAngleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Angle[] | ListEnumAngleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Angle[] | ListEnumAngleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAngleNullableFilter<$PrismaModel> | $Enums.Angle | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DatasetImageListRelationFilter = {
    every?: DatasetImageWhereInput
    some?: DatasetImageWhereInput
    none?: DatasetImageWhereInput
  }

  export type InferenceLogListRelationFilter = {
    every?: InferenceLogWhereInput
    some?: InferenceLogWhereInput
    none?: InferenceLogWhereInput
  }

  export type TransponderLogListRelationFilter = {
    every?: TransponderLogWhereInput
    some?: TransponderLogWhereInput
    none?: TransponderLogWhereInput
  }

  export type DatasetImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InferenceLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransponderLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusImageCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    label?: SortOrder
    confidence?: SortOrder
    fleetNumber?: SortOrder
    cameraId?: SortOrder
    timeTaken?: SortOrder
    weatherCondition?: SortOrder
    cameraAngle?: SortOrder
    isVerified?: SortOrder
    labeledById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusImageAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type BusImageMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    label?: SortOrder
    confidence?: SortOrder
    fleetNumber?: SortOrder
    cameraId?: SortOrder
    timeTaken?: SortOrder
    weatherCondition?: SortOrder
    cameraAngle?: SortOrder
    isVerified?: SortOrder
    labeledById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusImageMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    label?: SortOrder
    confidence?: SortOrder
    fleetNumber?: SortOrder
    cameraId?: SortOrder
    timeTaken?: SortOrder
    weatherCondition?: SortOrder
    cameraAngle?: SortOrder
    isVerified?: SortOrder
    labeledById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusImageSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type EnumLabelStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LabelStatus | EnumLabelStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.LabelStatus[] | ListEnumLabelStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LabelStatus[] | ListEnumLabelStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLabelStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.LabelStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLabelStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumLabelStatusNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumWeatherNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Weather | EnumWeatherFieldRefInput<$PrismaModel> | null
    in?: $Enums.Weather[] | ListEnumWeatherFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Weather[] | ListEnumWeatherFieldRefInput<$PrismaModel> | null
    not?: NestedEnumWeatherNullableWithAggregatesFilter<$PrismaModel> | $Enums.Weather | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumWeatherNullableFilter<$PrismaModel>
    _max?: NestedEnumWeatherNullableFilter<$PrismaModel>
  }

  export type EnumAngleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Angle | EnumAngleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Angle[] | ListEnumAngleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Angle[] | ListEnumAngleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAngleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Angle | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAngleNullableFilter<$PrismaModel>
    _max?: NestedEnumAngleNullableFilter<$PrismaModel>
  }

  export type BusImageNullableScalarRelationFilter = {
    is?: BusImageWhereInput | null
    isNot?: BusImageWhereInput | null
  }

  export type TransponderLogCountOrderByAggregateInput = {
    id?: SortOrder
    fleetNumber?: SortOrder
    gateId?: SortOrder
    timestamp?: SortOrder
    matchedImageId?: SortOrder
    createdAt?: SortOrder
  }

  export type TransponderLogMaxOrderByAggregateInput = {
    id?: SortOrder
    fleetNumber?: SortOrder
    gateId?: SortOrder
    timestamp?: SortOrder
    matchedImageId?: SortOrder
    createdAt?: SortOrder
  }

  export type TransponderLogMinOrderByAggregateInput = {
    id?: SortOrder
    fleetNumber?: SortOrder
    gateId?: SortOrder
    timestamp?: SortOrder
    matchedImageId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumLabelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LabelStatus | EnumLabelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabelStatus[] | ListEnumLabelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabelStatus[] | ListEnumLabelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabelStatusFilter<$PrismaModel> | $Enums.LabelStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BusImageScalarRelationFilter = {
    is?: BusImageWhereInput
    isNot?: BusImageWhereInput
  }

  export type ModelRegistryScalarRelationFilter = {
    is?: ModelRegistryWhereInput
    isNot?: ModelRegistryWhereInput
  }

  export type InferenceLogCountOrderByAggregateInput = {
    id?: SortOrder
    predictedLabel?: SortOrder
    confidence?: SortOrder
    imageId?: SortOrder
    modelId?: SortOrder
    createdAt?: SortOrder
  }

  export type InferenceLogAvgOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type InferenceLogMaxOrderByAggregateInput = {
    id?: SortOrder
    predictedLabel?: SortOrder
    confidence?: SortOrder
    imageId?: SortOrder
    modelId?: SortOrder
    createdAt?: SortOrder
  }

  export type InferenceLogMinOrderByAggregateInput = {
    id?: SortOrder
    predictedLabel?: SortOrder
    confidence?: SortOrder
    imageId?: SortOrder
    modelId?: SortOrder
    createdAt?: SortOrder
  }

  export type InferenceLogSumOrderByAggregateInput = {
    confidence?: SortOrder
  }

  export type EnumLabelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LabelStatus | EnumLabelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabelStatus[] | ListEnumLabelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabelStatus[] | ListEnumLabelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabelStatusWithAggregatesFilter<$PrismaModel> | $Enums.LabelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLabelStatusFilter<$PrismaModel>
    _max?: NestedEnumLabelStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ModelRegistryListRelationFilter = {
    every?: ModelRegistryWhereInput
    some?: ModelRegistryWhereInput
    none?: ModelRegistryWhereInput
  }

  export type ModelRegistryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DatasetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type DatasetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type DatasetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type DatasetScalarRelationFilter = {
    is?: DatasetWhereInput
    isNot?: DatasetWhereInput
  }

  export type DatasetImageDatasetIdImageIdCompoundUniqueInput = {
    datasetId: string
    imageId: string
  }

  export type DatasetImageCountOrderByAggregateInput = {
    datasetId?: SortOrder
    imageId?: SortOrder
  }

  export type DatasetImageMaxOrderByAggregateInput = {
    datasetId?: SortOrder
    imageId?: SortOrder
  }

  export type DatasetImageMinOrderByAggregateInput = {
    datasetId?: SortOrder
    imageId?: SortOrder
  }

  export type EnumModelArchitectureFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelArchitecture | EnumModelArchitectureFieldRefInput<$PrismaModel>
    in?: $Enums.ModelArchitecture[] | ListEnumModelArchitectureFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelArchitecture[] | ListEnumModelArchitectureFieldRefInput<$PrismaModel>
    not?: NestedEnumModelArchitectureFilter<$PrismaModel> | $Enums.ModelArchitecture
  }

  export type EnumModelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelStatus | EnumModelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModelStatus[] | ListEnumModelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelStatus[] | ListEnumModelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModelStatusFilter<$PrismaModel> | $Enums.ModelStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DatasetNullableScalarRelationFilter = {
    is?: DatasetWhereInput | null
    isNot?: DatasetWhereInput | null
  }

  export type ModelRegistryNameVersionCompoundUniqueInput = {
    name: string
    version: string
  }

  export type ModelRegistryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    architecture?: SortOrder
    status?: SortOrder
    weightsUrl?: SortOrder
    eapUrl?: SortOrder
    hyperparameters?: SortOrder
    metrics?: SortOrder
    datasetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelRegistryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    architecture?: SortOrder
    status?: SortOrder
    weightsUrl?: SortOrder
    eapUrl?: SortOrder
    datasetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModelRegistryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    architecture?: SortOrder
    status?: SortOrder
    weightsUrl?: SortOrder
    eapUrl?: SortOrder
    datasetId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumModelArchitectureWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelArchitecture | EnumModelArchitectureFieldRefInput<$PrismaModel>
    in?: $Enums.ModelArchitecture[] | ListEnumModelArchitectureFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelArchitecture[] | ListEnumModelArchitectureFieldRefInput<$PrismaModel>
    not?: NestedEnumModelArchitectureWithAggregatesFilter<$PrismaModel> | $Enums.ModelArchitecture
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelArchitectureFilter<$PrismaModel>
    _max?: NestedEnumModelArchitectureFilter<$PrismaModel>
  }

  export type EnumModelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelStatus | EnumModelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModelStatus[] | ListEnumModelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelStatus[] | ListEnumModelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModelStatusWithAggregatesFilter<$PrismaModel> | $Enums.ModelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelStatusFilter<$PrismaModel>
    _max?: NestedEnumModelStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type BusImageCreateNestedManyWithoutLabeledByInput = {
    create?: XOR<BusImageCreateWithoutLabeledByInput, BusImageUncheckedCreateWithoutLabeledByInput> | BusImageCreateWithoutLabeledByInput[] | BusImageUncheckedCreateWithoutLabeledByInput[]
    connectOrCreate?: BusImageCreateOrConnectWithoutLabeledByInput | BusImageCreateOrConnectWithoutLabeledByInput[]
    createMany?: BusImageCreateManyLabeledByInputEnvelope
    connect?: BusImageWhereUniqueInput | BusImageWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type BusImageUncheckedCreateNestedManyWithoutLabeledByInput = {
    create?: XOR<BusImageCreateWithoutLabeledByInput, BusImageUncheckedCreateWithoutLabeledByInput> | BusImageCreateWithoutLabeledByInput[] | BusImageUncheckedCreateWithoutLabeledByInput[]
    connectOrCreate?: BusImageCreateOrConnectWithoutLabeledByInput | BusImageCreateOrConnectWithoutLabeledByInput[]
    createMany?: BusImageCreateManyLabeledByInputEnvelope
    connect?: BusImageWhereUniqueInput | BusImageWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BusImageUpdateManyWithoutLabeledByNestedInput = {
    create?: XOR<BusImageCreateWithoutLabeledByInput, BusImageUncheckedCreateWithoutLabeledByInput> | BusImageCreateWithoutLabeledByInput[] | BusImageUncheckedCreateWithoutLabeledByInput[]
    connectOrCreate?: BusImageCreateOrConnectWithoutLabeledByInput | BusImageCreateOrConnectWithoutLabeledByInput[]
    upsert?: BusImageUpsertWithWhereUniqueWithoutLabeledByInput | BusImageUpsertWithWhereUniqueWithoutLabeledByInput[]
    createMany?: BusImageCreateManyLabeledByInputEnvelope
    set?: BusImageWhereUniqueInput | BusImageWhereUniqueInput[]
    disconnect?: BusImageWhereUniqueInput | BusImageWhereUniqueInput[]
    delete?: BusImageWhereUniqueInput | BusImageWhereUniqueInput[]
    connect?: BusImageWhereUniqueInput | BusImageWhereUniqueInput[]
    update?: BusImageUpdateWithWhereUniqueWithoutLabeledByInput | BusImageUpdateWithWhereUniqueWithoutLabeledByInput[]
    updateMany?: BusImageUpdateManyWithWhereWithoutLabeledByInput | BusImageUpdateManyWithWhereWithoutLabeledByInput[]
    deleteMany?: BusImageScalarWhereInput | BusImageScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type BusImageUncheckedUpdateManyWithoutLabeledByNestedInput = {
    create?: XOR<BusImageCreateWithoutLabeledByInput, BusImageUncheckedCreateWithoutLabeledByInput> | BusImageCreateWithoutLabeledByInput[] | BusImageUncheckedCreateWithoutLabeledByInput[]
    connectOrCreate?: BusImageCreateOrConnectWithoutLabeledByInput | BusImageCreateOrConnectWithoutLabeledByInput[]
    upsert?: BusImageUpsertWithWhereUniqueWithoutLabeledByInput | BusImageUpsertWithWhereUniqueWithoutLabeledByInput[]
    createMany?: BusImageCreateManyLabeledByInputEnvelope
    set?: BusImageWhereUniqueInput | BusImageWhereUniqueInput[]
    disconnect?: BusImageWhereUniqueInput | BusImageWhereUniqueInput[]
    delete?: BusImageWhereUniqueInput | BusImageWhereUniqueInput[]
    connect?: BusImageWhereUniqueInput | BusImageWhereUniqueInput[]
    update?: BusImageUpdateWithWhereUniqueWithoutLabeledByInput | BusImageUpdateWithWhereUniqueWithoutLabeledByInput[]
    updateMany?: BusImageUpdateManyWithWhereWithoutLabeledByInput | BusImageUpdateManyWithWhereWithoutLabeledByInput[]
    deleteMany?: BusImageScalarWhereInput | BusImageScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutBusImagesInput = {
    create?: XOR<UserCreateWithoutBusImagesInput, UserUncheckedCreateWithoutBusImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusImagesInput
    connect?: UserWhereUniqueInput
  }

  export type DatasetImageCreateNestedManyWithoutImageInput = {
    create?: XOR<DatasetImageCreateWithoutImageInput, DatasetImageUncheckedCreateWithoutImageInput> | DatasetImageCreateWithoutImageInput[] | DatasetImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: DatasetImageCreateOrConnectWithoutImageInput | DatasetImageCreateOrConnectWithoutImageInput[]
    createMany?: DatasetImageCreateManyImageInputEnvelope
    connect?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
  }

  export type InferenceLogCreateNestedManyWithoutImageInput = {
    create?: XOR<InferenceLogCreateWithoutImageInput, InferenceLogUncheckedCreateWithoutImageInput> | InferenceLogCreateWithoutImageInput[] | InferenceLogUncheckedCreateWithoutImageInput[]
    connectOrCreate?: InferenceLogCreateOrConnectWithoutImageInput | InferenceLogCreateOrConnectWithoutImageInput[]
    createMany?: InferenceLogCreateManyImageInputEnvelope
    connect?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
  }

  export type TransponderLogCreateNestedManyWithoutMatchedImageInput = {
    create?: XOR<TransponderLogCreateWithoutMatchedImageInput, TransponderLogUncheckedCreateWithoutMatchedImageInput> | TransponderLogCreateWithoutMatchedImageInput[] | TransponderLogUncheckedCreateWithoutMatchedImageInput[]
    connectOrCreate?: TransponderLogCreateOrConnectWithoutMatchedImageInput | TransponderLogCreateOrConnectWithoutMatchedImageInput[]
    createMany?: TransponderLogCreateManyMatchedImageInputEnvelope
    connect?: TransponderLogWhereUniqueInput | TransponderLogWhereUniqueInput[]
  }

  export type DatasetImageUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<DatasetImageCreateWithoutImageInput, DatasetImageUncheckedCreateWithoutImageInput> | DatasetImageCreateWithoutImageInput[] | DatasetImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: DatasetImageCreateOrConnectWithoutImageInput | DatasetImageCreateOrConnectWithoutImageInput[]
    createMany?: DatasetImageCreateManyImageInputEnvelope
    connect?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
  }

  export type InferenceLogUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<InferenceLogCreateWithoutImageInput, InferenceLogUncheckedCreateWithoutImageInput> | InferenceLogCreateWithoutImageInput[] | InferenceLogUncheckedCreateWithoutImageInput[]
    connectOrCreate?: InferenceLogCreateOrConnectWithoutImageInput | InferenceLogCreateOrConnectWithoutImageInput[]
    createMany?: InferenceLogCreateManyImageInputEnvelope
    connect?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
  }

  export type TransponderLogUncheckedCreateNestedManyWithoutMatchedImageInput = {
    create?: XOR<TransponderLogCreateWithoutMatchedImageInput, TransponderLogUncheckedCreateWithoutMatchedImageInput> | TransponderLogCreateWithoutMatchedImageInput[] | TransponderLogUncheckedCreateWithoutMatchedImageInput[]
    connectOrCreate?: TransponderLogCreateOrConnectWithoutMatchedImageInput | TransponderLogCreateOrConnectWithoutMatchedImageInput[]
    createMany?: TransponderLogCreateManyMatchedImageInputEnvelope
    connect?: TransponderLogWhereUniqueInput | TransponderLogWhereUniqueInput[]
  }

  export type NullableEnumLabelStatusFieldUpdateOperationsInput = {
    set?: $Enums.LabelStatus | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumWeatherFieldUpdateOperationsInput = {
    set?: $Enums.Weather | null
  }

  export type NullableEnumAngleFieldUpdateOperationsInput = {
    set?: $Enums.Angle | null
  }

  export type UserUpdateOneWithoutBusImagesNestedInput = {
    create?: XOR<UserCreateWithoutBusImagesInput, UserUncheckedCreateWithoutBusImagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBusImagesInput
    upsert?: UserUpsertWithoutBusImagesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBusImagesInput, UserUpdateWithoutBusImagesInput>, UserUncheckedUpdateWithoutBusImagesInput>
  }

  export type DatasetImageUpdateManyWithoutImageNestedInput = {
    create?: XOR<DatasetImageCreateWithoutImageInput, DatasetImageUncheckedCreateWithoutImageInput> | DatasetImageCreateWithoutImageInput[] | DatasetImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: DatasetImageCreateOrConnectWithoutImageInput | DatasetImageCreateOrConnectWithoutImageInput[]
    upsert?: DatasetImageUpsertWithWhereUniqueWithoutImageInput | DatasetImageUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: DatasetImageCreateManyImageInputEnvelope
    set?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
    disconnect?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
    delete?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
    connect?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
    update?: DatasetImageUpdateWithWhereUniqueWithoutImageInput | DatasetImageUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: DatasetImageUpdateManyWithWhereWithoutImageInput | DatasetImageUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: DatasetImageScalarWhereInput | DatasetImageScalarWhereInput[]
  }

  export type InferenceLogUpdateManyWithoutImageNestedInput = {
    create?: XOR<InferenceLogCreateWithoutImageInput, InferenceLogUncheckedCreateWithoutImageInput> | InferenceLogCreateWithoutImageInput[] | InferenceLogUncheckedCreateWithoutImageInput[]
    connectOrCreate?: InferenceLogCreateOrConnectWithoutImageInput | InferenceLogCreateOrConnectWithoutImageInput[]
    upsert?: InferenceLogUpsertWithWhereUniqueWithoutImageInput | InferenceLogUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: InferenceLogCreateManyImageInputEnvelope
    set?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
    disconnect?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
    delete?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
    connect?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
    update?: InferenceLogUpdateWithWhereUniqueWithoutImageInput | InferenceLogUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: InferenceLogUpdateManyWithWhereWithoutImageInput | InferenceLogUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: InferenceLogScalarWhereInput | InferenceLogScalarWhereInput[]
  }

  export type TransponderLogUpdateManyWithoutMatchedImageNestedInput = {
    create?: XOR<TransponderLogCreateWithoutMatchedImageInput, TransponderLogUncheckedCreateWithoutMatchedImageInput> | TransponderLogCreateWithoutMatchedImageInput[] | TransponderLogUncheckedCreateWithoutMatchedImageInput[]
    connectOrCreate?: TransponderLogCreateOrConnectWithoutMatchedImageInput | TransponderLogCreateOrConnectWithoutMatchedImageInput[]
    upsert?: TransponderLogUpsertWithWhereUniqueWithoutMatchedImageInput | TransponderLogUpsertWithWhereUniqueWithoutMatchedImageInput[]
    createMany?: TransponderLogCreateManyMatchedImageInputEnvelope
    set?: TransponderLogWhereUniqueInput | TransponderLogWhereUniqueInput[]
    disconnect?: TransponderLogWhereUniqueInput | TransponderLogWhereUniqueInput[]
    delete?: TransponderLogWhereUniqueInput | TransponderLogWhereUniqueInput[]
    connect?: TransponderLogWhereUniqueInput | TransponderLogWhereUniqueInput[]
    update?: TransponderLogUpdateWithWhereUniqueWithoutMatchedImageInput | TransponderLogUpdateWithWhereUniqueWithoutMatchedImageInput[]
    updateMany?: TransponderLogUpdateManyWithWhereWithoutMatchedImageInput | TransponderLogUpdateManyWithWhereWithoutMatchedImageInput[]
    deleteMany?: TransponderLogScalarWhereInput | TransponderLogScalarWhereInput[]
  }

  export type DatasetImageUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<DatasetImageCreateWithoutImageInput, DatasetImageUncheckedCreateWithoutImageInput> | DatasetImageCreateWithoutImageInput[] | DatasetImageUncheckedCreateWithoutImageInput[]
    connectOrCreate?: DatasetImageCreateOrConnectWithoutImageInput | DatasetImageCreateOrConnectWithoutImageInput[]
    upsert?: DatasetImageUpsertWithWhereUniqueWithoutImageInput | DatasetImageUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: DatasetImageCreateManyImageInputEnvelope
    set?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
    disconnect?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
    delete?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
    connect?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
    update?: DatasetImageUpdateWithWhereUniqueWithoutImageInput | DatasetImageUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: DatasetImageUpdateManyWithWhereWithoutImageInput | DatasetImageUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: DatasetImageScalarWhereInput | DatasetImageScalarWhereInput[]
  }

  export type InferenceLogUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<InferenceLogCreateWithoutImageInput, InferenceLogUncheckedCreateWithoutImageInput> | InferenceLogCreateWithoutImageInput[] | InferenceLogUncheckedCreateWithoutImageInput[]
    connectOrCreate?: InferenceLogCreateOrConnectWithoutImageInput | InferenceLogCreateOrConnectWithoutImageInput[]
    upsert?: InferenceLogUpsertWithWhereUniqueWithoutImageInput | InferenceLogUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: InferenceLogCreateManyImageInputEnvelope
    set?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
    disconnect?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
    delete?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
    connect?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
    update?: InferenceLogUpdateWithWhereUniqueWithoutImageInput | InferenceLogUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: InferenceLogUpdateManyWithWhereWithoutImageInput | InferenceLogUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: InferenceLogScalarWhereInput | InferenceLogScalarWhereInput[]
  }

  export type TransponderLogUncheckedUpdateManyWithoutMatchedImageNestedInput = {
    create?: XOR<TransponderLogCreateWithoutMatchedImageInput, TransponderLogUncheckedCreateWithoutMatchedImageInput> | TransponderLogCreateWithoutMatchedImageInput[] | TransponderLogUncheckedCreateWithoutMatchedImageInput[]
    connectOrCreate?: TransponderLogCreateOrConnectWithoutMatchedImageInput | TransponderLogCreateOrConnectWithoutMatchedImageInput[]
    upsert?: TransponderLogUpsertWithWhereUniqueWithoutMatchedImageInput | TransponderLogUpsertWithWhereUniqueWithoutMatchedImageInput[]
    createMany?: TransponderLogCreateManyMatchedImageInputEnvelope
    set?: TransponderLogWhereUniqueInput | TransponderLogWhereUniqueInput[]
    disconnect?: TransponderLogWhereUniqueInput | TransponderLogWhereUniqueInput[]
    delete?: TransponderLogWhereUniqueInput | TransponderLogWhereUniqueInput[]
    connect?: TransponderLogWhereUniqueInput | TransponderLogWhereUniqueInput[]
    update?: TransponderLogUpdateWithWhereUniqueWithoutMatchedImageInput | TransponderLogUpdateWithWhereUniqueWithoutMatchedImageInput[]
    updateMany?: TransponderLogUpdateManyWithWhereWithoutMatchedImageInput | TransponderLogUpdateManyWithWhereWithoutMatchedImageInput[]
    deleteMany?: TransponderLogScalarWhereInput | TransponderLogScalarWhereInput[]
  }

  export type BusImageCreateNestedOneWithoutTransponderLogsInput = {
    create?: XOR<BusImageCreateWithoutTransponderLogsInput, BusImageUncheckedCreateWithoutTransponderLogsInput>
    connectOrCreate?: BusImageCreateOrConnectWithoutTransponderLogsInput
    connect?: BusImageWhereUniqueInput
  }

  export type BusImageUpdateOneWithoutTransponderLogsNestedInput = {
    create?: XOR<BusImageCreateWithoutTransponderLogsInput, BusImageUncheckedCreateWithoutTransponderLogsInput>
    connectOrCreate?: BusImageCreateOrConnectWithoutTransponderLogsInput
    upsert?: BusImageUpsertWithoutTransponderLogsInput
    disconnect?: BusImageWhereInput | boolean
    delete?: BusImageWhereInput | boolean
    connect?: BusImageWhereUniqueInput
    update?: XOR<XOR<BusImageUpdateToOneWithWhereWithoutTransponderLogsInput, BusImageUpdateWithoutTransponderLogsInput>, BusImageUncheckedUpdateWithoutTransponderLogsInput>
  }

  export type BusImageCreateNestedOneWithoutInferencesInput = {
    create?: XOR<BusImageCreateWithoutInferencesInput, BusImageUncheckedCreateWithoutInferencesInput>
    connectOrCreate?: BusImageCreateOrConnectWithoutInferencesInput
    connect?: BusImageWhereUniqueInput
  }

  export type ModelRegistryCreateNestedOneWithoutInferencesInput = {
    create?: XOR<ModelRegistryCreateWithoutInferencesInput, ModelRegistryUncheckedCreateWithoutInferencesInput>
    connectOrCreate?: ModelRegistryCreateOrConnectWithoutInferencesInput
    connect?: ModelRegistryWhereUniqueInput
  }

  export type EnumLabelStatusFieldUpdateOperationsInput = {
    set?: $Enums.LabelStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusImageUpdateOneRequiredWithoutInferencesNestedInput = {
    create?: XOR<BusImageCreateWithoutInferencesInput, BusImageUncheckedCreateWithoutInferencesInput>
    connectOrCreate?: BusImageCreateOrConnectWithoutInferencesInput
    upsert?: BusImageUpsertWithoutInferencesInput
    connect?: BusImageWhereUniqueInput
    update?: XOR<XOR<BusImageUpdateToOneWithWhereWithoutInferencesInput, BusImageUpdateWithoutInferencesInput>, BusImageUncheckedUpdateWithoutInferencesInput>
  }

  export type ModelRegistryUpdateOneRequiredWithoutInferencesNestedInput = {
    create?: XOR<ModelRegistryCreateWithoutInferencesInput, ModelRegistryUncheckedCreateWithoutInferencesInput>
    connectOrCreate?: ModelRegistryCreateOrConnectWithoutInferencesInput
    upsert?: ModelRegistryUpsertWithoutInferencesInput
    connect?: ModelRegistryWhereUniqueInput
    update?: XOR<XOR<ModelRegistryUpdateToOneWithWhereWithoutInferencesInput, ModelRegistryUpdateWithoutInferencesInput>, ModelRegistryUncheckedUpdateWithoutInferencesInput>
  }

  export type DatasetImageCreateNestedManyWithoutDatasetInput = {
    create?: XOR<DatasetImageCreateWithoutDatasetInput, DatasetImageUncheckedCreateWithoutDatasetInput> | DatasetImageCreateWithoutDatasetInput[] | DatasetImageUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: DatasetImageCreateOrConnectWithoutDatasetInput | DatasetImageCreateOrConnectWithoutDatasetInput[]
    createMany?: DatasetImageCreateManyDatasetInputEnvelope
    connect?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
  }

  export type ModelRegistryCreateNestedManyWithoutDatasetInput = {
    create?: XOR<ModelRegistryCreateWithoutDatasetInput, ModelRegistryUncheckedCreateWithoutDatasetInput> | ModelRegistryCreateWithoutDatasetInput[] | ModelRegistryUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: ModelRegistryCreateOrConnectWithoutDatasetInput | ModelRegistryCreateOrConnectWithoutDatasetInput[]
    createMany?: ModelRegistryCreateManyDatasetInputEnvelope
    connect?: ModelRegistryWhereUniqueInput | ModelRegistryWhereUniqueInput[]
  }

  export type DatasetImageUncheckedCreateNestedManyWithoutDatasetInput = {
    create?: XOR<DatasetImageCreateWithoutDatasetInput, DatasetImageUncheckedCreateWithoutDatasetInput> | DatasetImageCreateWithoutDatasetInput[] | DatasetImageUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: DatasetImageCreateOrConnectWithoutDatasetInput | DatasetImageCreateOrConnectWithoutDatasetInput[]
    createMany?: DatasetImageCreateManyDatasetInputEnvelope
    connect?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
  }

  export type ModelRegistryUncheckedCreateNestedManyWithoutDatasetInput = {
    create?: XOR<ModelRegistryCreateWithoutDatasetInput, ModelRegistryUncheckedCreateWithoutDatasetInput> | ModelRegistryCreateWithoutDatasetInput[] | ModelRegistryUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: ModelRegistryCreateOrConnectWithoutDatasetInput | ModelRegistryCreateOrConnectWithoutDatasetInput[]
    createMany?: ModelRegistryCreateManyDatasetInputEnvelope
    connect?: ModelRegistryWhereUniqueInput | ModelRegistryWhereUniqueInput[]
  }

  export type DatasetImageUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<DatasetImageCreateWithoutDatasetInput, DatasetImageUncheckedCreateWithoutDatasetInput> | DatasetImageCreateWithoutDatasetInput[] | DatasetImageUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: DatasetImageCreateOrConnectWithoutDatasetInput | DatasetImageCreateOrConnectWithoutDatasetInput[]
    upsert?: DatasetImageUpsertWithWhereUniqueWithoutDatasetInput | DatasetImageUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: DatasetImageCreateManyDatasetInputEnvelope
    set?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
    disconnect?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
    delete?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
    connect?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
    update?: DatasetImageUpdateWithWhereUniqueWithoutDatasetInput | DatasetImageUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: DatasetImageUpdateManyWithWhereWithoutDatasetInput | DatasetImageUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: DatasetImageScalarWhereInput | DatasetImageScalarWhereInput[]
  }

  export type ModelRegistryUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<ModelRegistryCreateWithoutDatasetInput, ModelRegistryUncheckedCreateWithoutDatasetInput> | ModelRegistryCreateWithoutDatasetInput[] | ModelRegistryUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: ModelRegistryCreateOrConnectWithoutDatasetInput | ModelRegistryCreateOrConnectWithoutDatasetInput[]
    upsert?: ModelRegistryUpsertWithWhereUniqueWithoutDatasetInput | ModelRegistryUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: ModelRegistryCreateManyDatasetInputEnvelope
    set?: ModelRegistryWhereUniqueInput | ModelRegistryWhereUniqueInput[]
    disconnect?: ModelRegistryWhereUniqueInput | ModelRegistryWhereUniqueInput[]
    delete?: ModelRegistryWhereUniqueInput | ModelRegistryWhereUniqueInput[]
    connect?: ModelRegistryWhereUniqueInput | ModelRegistryWhereUniqueInput[]
    update?: ModelRegistryUpdateWithWhereUniqueWithoutDatasetInput | ModelRegistryUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: ModelRegistryUpdateManyWithWhereWithoutDatasetInput | ModelRegistryUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: ModelRegistryScalarWhereInput | ModelRegistryScalarWhereInput[]
  }

  export type DatasetImageUncheckedUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<DatasetImageCreateWithoutDatasetInput, DatasetImageUncheckedCreateWithoutDatasetInput> | DatasetImageCreateWithoutDatasetInput[] | DatasetImageUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: DatasetImageCreateOrConnectWithoutDatasetInput | DatasetImageCreateOrConnectWithoutDatasetInput[]
    upsert?: DatasetImageUpsertWithWhereUniqueWithoutDatasetInput | DatasetImageUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: DatasetImageCreateManyDatasetInputEnvelope
    set?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
    disconnect?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
    delete?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
    connect?: DatasetImageWhereUniqueInput | DatasetImageWhereUniqueInput[]
    update?: DatasetImageUpdateWithWhereUniqueWithoutDatasetInput | DatasetImageUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: DatasetImageUpdateManyWithWhereWithoutDatasetInput | DatasetImageUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: DatasetImageScalarWhereInput | DatasetImageScalarWhereInput[]
  }

  export type ModelRegistryUncheckedUpdateManyWithoutDatasetNestedInput = {
    create?: XOR<ModelRegistryCreateWithoutDatasetInput, ModelRegistryUncheckedCreateWithoutDatasetInput> | ModelRegistryCreateWithoutDatasetInput[] | ModelRegistryUncheckedCreateWithoutDatasetInput[]
    connectOrCreate?: ModelRegistryCreateOrConnectWithoutDatasetInput | ModelRegistryCreateOrConnectWithoutDatasetInput[]
    upsert?: ModelRegistryUpsertWithWhereUniqueWithoutDatasetInput | ModelRegistryUpsertWithWhereUniqueWithoutDatasetInput[]
    createMany?: ModelRegistryCreateManyDatasetInputEnvelope
    set?: ModelRegistryWhereUniqueInput | ModelRegistryWhereUniqueInput[]
    disconnect?: ModelRegistryWhereUniqueInput | ModelRegistryWhereUniqueInput[]
    delete?: ModelRegistryWhereUniqueInput | ModelRegistryWhereUniqueInput[]
    connect?: ModelRegistryWhereUniqueInput | ModelRegistryWhereUniqueInput[]
    update?: ModelRegistryUpdateWithWhereUniqueWithoutDatasetInput | ModelRegistryUpdateWithWhereUniqueWithoutDatasetInput[]
    updateMany?: ModelRegistryUpdateManyWithWhereWithoutDatasetInput | ModelRegistryUpdateManyWithWhereWithoutDatasetInput[]
    deleteMany?: ModelRegistryScalarWhereInput | ModelRegistryScalarWhereInput[]
  }

  export type DatasetCreateNestedOneWithoutImagesInput = {
    create?: XOR<DatasetCreateWithoutImagesInput, DatasetUncheckedCreateWithoutImagesInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutImagesInput
    connect?: DatasetWhereUniqueInput
  }

  export type BusImageCreateNestedOneWithoutTrainingDataInput = {
    create?: XOR<BusImageCreateWithoutTrainingDataInput, BusImageUncheckedCreateWithoutTrainingDataInput>
    connectOrCreate?: BusImageCreateOrConnectWithoutTrainingDataInput
    connect?: BusImageWhereUniqueInput
  }

  export type DatasetUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<DatasetCreateWithoutImagesInput, DatasetUncheckedCreateWithoutImagesInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutImagesInput
    upsert?: DatasetUpsertWithoutImagesInput
    connect?: DatasetWhereUniqueInput
    update?: XOR<XOR<DatasetUpdateToOneWithWhereWithoutImagesInput, DatasetUpdateWithoutImagesInput>, DatasetUncheckedUpdateWithoutImagesInput>
  }

  export type BusImageUpdateOneRequiredWithoutTrainingDataNestedInput = {
    create?: XOR<BusImageCreateWithoutTrainingDataInput, BusImageUncheckedCreateWithoutTrainingDataInput>
    connectOrCreate?: BusImageCreateOrConnectWithoutTrainingDataInput
    upsert?: BusImageUpsertWithoutTrainingDataInput
    connect?: BusImageWhereUniqueInput
    update?: XOR<XOR<BusImageUpdateToOneWithWhereWithoutTrainingDataInput, BusImageUpdateWithoutTrainingDataInput>, BusImageUncheckedUpdateWithoutTrainingDataInput>
  }

  export type DatasetCreateNestedOneWithoutModelsInput = {
    create?: XOR<DatasetCreateWithoutModelsInput, DatasetUncheckedCreateWithoutModelsInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutModelsInput
    connect?: DatasetWhereUniqueInput
  }

  export type InferenceLogCreateNestedManyWithoutModelInput = {
    create?: XOR<InferenceLogCreateWithoutModelInput, InferenceLogUncheckedCreateWithoutModelInput> | InferenceLogCreateWithoutModelInput[] | InferenceLogUncheckedCreateWithoutModelInput[]
    connectOrCreate?: InferenceLogCreateOrConnectWithoutModelInput | InferenceLogCreateOrConnectWithoutModelInput[]
    createMany?: InferenceLogCreateManyModelInputEnvelope
    connect?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
  }

  export type InferenceLogUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<InferenceLogCreateWithoutModelInput, InferenceLogUncheckedCreateWithoutModelInput> | InferenceLogCreateWithoutModelInput[] | InferenceLogUncheckedCreateWithoutModelInput[]
    connectOrCreate?: InferenceLogCreateOrConnectWithoutModelInput | InferenceLogCreateOrConnectWithoutModelInput[]
    createMany?: InferenceLogCreateManyModelInputEnvelope
    connect?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
  }

  export type EnumModelArchitectureFieldUpdateOperationsInput = {
    set?: $Enums.ModelArchitecture
  }

  export type EnumModelStatusFieldUpdateOperationsInput = {
    set?: $Enums.ModelStatus
  }

  export type DatasetUpdateOneWithoutModelsNestedInput = {
    create?: XOR<DatasetCreateWithoutModelsInput, DatasetUncheckedCreateWithoutModelsInput>
    connectOrCreate?: DatasetCreateOrConnectWithoutModelsInput
    upsert?: DatasetUpsertWithoutModelsInput
    disconnect?: DatasetWhereInput | boolean
    delete?: DatasetWhereInput | boolean
    connect?: DatasetWhereUniqueInput
    update?: XOR<XOR<DatasetUpdateToOneWithWhereWithoutModelsInput, DatasetUpdateWithoutModelsInput>, DatasetUncheckedUpdateWithoutModelsInput>
  }

  export type InferenceLogUpdateManyWithoutModelNestedInput = {
    create?: XOR<InferenceLogCreateWithoutModelInput, InferenceLogUncheckedCreateWithoutModelInput> | InferenceLogCreateWithoutModelInput[] | InferenceLogUncheckedCreateWithoutModelInput[]
    connectOrCreate?: InferenceLogCreateOrConnectWithoutModelInput | InferenceLogCreateOrConnectWithoutModelInput[]
    upsert?: InferenceLogUpsertWithWhereUniqueWithoutModelInput | InferenceLogUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: InferenceLogCreateManyModelInputEnvelope
    set?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
    disconnect?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
    delete?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
    connect?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
    update?: InferenceLogUpdateWithWhereUniqueWithoutModelInput | InferenceLogUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: InferenceLogUpdateManyWithWhereWithoutModelInput | InferenceLogUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: InferenceLogScalarWhereInput | InferenceLogScalarWhereInput[]
  }

  export type InferenceLogUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<InferenceLogCreateWithoutModelInput, InferenceLogUncheckedCreateWithoutModelInput> | InferenceLogCreateWithoutModelInput[] | InferenceLogUncheckedCreateWithoutModelInput[]
    connectOrCreate?: InferenceLogCreateOrConnectWithoutModelInput | InferenceLogCreateOrConnectWithoutModelInput[]
    upsert?: InferenceLogUpsertWithWhereUniqueWithoutModelInput | InferenceLogUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: InferenceLogCreateManyModelInputEnvelope
    set?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
    disconnect?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
    delete?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
    connect?: InferenceLogWhereUniqueInput | InferenceLogWhereUniqueInput[]
    update?: InferenceLogUpdateWithWhereUniqueWithoutModelInput | InferenceLogUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: InferenceLogUpdateManyWithWhereWithoutModelInput | InferenceLogUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: InferenceLogScalarWhereInput | InferenceLogScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumLabelStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LabelStatus | EnumLabelStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.LabelStatus[] | ListEnumLabelStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LabelStatus[] | ListEnumLabelStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLabelStatusNullableFilter<$PrismaModel> | $Enums.LabelStatus | null
  }

  export type NestedEnumWeatherNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Weather | EnumWeatherFieldRefInput<$PrismaModel> | null
    in?: $Enums.Weather[] | ListEnumWeatherFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Weather[] | ListEnumWeatherFieldRefInput<$PrismaModel> | null
    not?: NestedEnumWeatherNullableFilter<$PrismaModel> | $Enums.Weather | null
  }

  export type NestedEnumAngleNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Angle | EnumAngleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Angle[] | ListEnumAngleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Angle[] | ListEnumAngleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAngleNullableFilter<$PrismaModel> | $Enums.Angle | null
  }

  export type NestedEnumLabelStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LabelStatus | EnumLabelStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.LabelStatus[] | ListEnumLabelStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LabelStatus[] | ListEnumLabelStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLabelStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.LabelStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLabelStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumLabelStatusNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumWeatherNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Weather | EnumWeatherFieldRefInput<$PrismaModel> | null
    in?: $Enums.Weather[] | ListEnumWeatherFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Weather[] | ListEnumWeatherFieldRefInput<$PrismaModel> | null
    not?: NestedEnumWeatherNullableWithAggregatesFilter<$PrismaModel> | $Enums.Weather | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumWeatherNullableFilter<$PrismaModel>
    _max?: NestedEnumWeatherNullableFilter<$PrismaModel>
  }

  export type NestedEnumAngleNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Angle | EnumAngleFieldRefInput<$PrismaModel> | null
    in?: $Enums.Angle[] | ListEnumAngleFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Angle[] | ListEnumAngleFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAngleNullableWithAggregatesFilter<$PrismaModel> | $Enums.Angle | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAngleNullableFilter<$PrismaModel>
    _max?: NestedEnumAngleNullableFilter<$PrismaModel>
  }

  export type NestedEnumLabelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LabelStatus | EnumLabelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabelStatus[] | ListEnumLabelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabelStatus[] | ListEnumLabelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabelStatusFilter<$PrismaModel> | $Enums.LabelStatus
  }

  export type NestedEnumLabelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LabelStatus | EnumLabelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LabelStatus[] | ListEnumLabelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LabelStatus[] | ListEnumLabelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLabelStatusWithAggregatesFilter<$PrismaModel> | $Enums.LabelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLabelStatusFilter<$PrismaModel>
    _max?: NestedEnumLabelStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumModelArchitectureFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelArchitecture | EnumModelArchitectureFieldRefInput<$PrismaModel>
    in?: $Enums.ModelArchitecture[] | ListEnumModelArchitectureFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelArchitecture[] | ListEnumModelArchitectureFieldRefInput<$PrismaModel>
    not?: NestedEnumModelArchitectureFilter<$PrismaModel> | $Enums.ModelArchitecture
  }

  export type NestedEnumModelStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelStatus | EnumModelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModelStatus[] | ListEnumModelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelStatus[] | ListEnumModelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModelStatusFilter<$PrismaModel> | $Enums.ModelStatus
  }

  export type NestedEnumModelArchitectureWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelArchitecture | EnumModelArchitectureFieldRefInput<$PrismaModel>
    in?: $Enums.ModelArchitecture[] | ListEnumModelArchitectureFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelArchitecture[] | ListEnumModelArchitectureFieldRefInput<$PrismaModel>
    not?: NestedEnumModelArchitectureWithAggregatesFilter<$PrismaModel> | $Enums.ModelArchitecture
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelArchitectureFilter<$PrismaModel>
    _max?: NestedEnumModelArchitectureFilter<$PrismaModel>
  }

  export type NestedEnumModelStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModelStatus | EnumModelStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ModelStatus[] | ListEnumModelStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModelStatus[] | ListEnumModelStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumModelStatusWithAggregatesFilter<$PrismaModel> | $Enums.ModelStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModelStatusFilter<$PrismaModel>
    _max?: NestedEnumModelStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserCreateWithoutPostsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busImages?: BusImageCreateNestedManyWithoutLabeledByInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busImages?: BusImageUncheckedCreateNestedManyWithoutLabeledByInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busImages?: BusImageUpdateManyWithoutLabeledByNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busImages?: BusImageUncheckedUpdateManyWithoutLabeledByNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BusImageCreateWithoutLabeledByInput = {
    id?: string
    imageUrl: string
    label?: $Enums.LabelStatus | null
    confidence?: number | null
    fleetNumber?: string | null
    cameraId?: string | null
    timeTaken?: Date | string | null
    weatherCondition?: $Enums.Weather | null
    cameraAngle?: $Enums.Angle | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trainingData?: DatasetImageCreateNestedManyWithoutImageInput
    inferences?: InferenceLogCreateNestedManyWithoutImageInput
    transponderLogs?: TransponderLogCreateNestedManyWithoutMatchedImageInput
  }

  export type BusImageUncheckedCreateWithoutLabeledByInput = {
    id?: string
    imageUrl: string
    label?: $Enums.LabelStatus | null
    confidence?: number | null
    fleetNumber?: string | null
    cameraId?: string | null
    timeTaken?: Date | string | null
    weatherCondition?: $Enums.Weather | null
    cameraAngle?: $Enums.Angle | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    trainingData?: DatasetImageUncheckedCreateNestedManyWithoutImageInput
    inferences?: InferenceLogUncheckedCreateNestedManyWithoutImageInput
    transponderLogs?: TransponderLogUncheckedCreateNestedManyWithoutMatchedImageInput
  }

  export type BusImageCreateOrConnectWithoutLabeledByInput = {
    where: BusImageWhereUniqueInput
    create: XOR<BusImageCreateWithoutLabeledByInput, BusImageUncheckedCreateWithoutLabeledByInput>
  }

  export type BusImageCreateManyLabeledByInputEnvelope = {
    data: BusImageCreateManyLabeledByInput | BusImageCreateManyLabeledByInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostCreateManyCreatedByInputEnvelope = {
    data: PostCreateManyCreatedByInput | PostCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type BusImageUpsertWithWhereUniqueWithoutLabeledByInput = {
    where: BusImageWhereUniqueInput
    update: XOR<BusImageUpdateWithoutLabeledByInput, BusImageUncheckedUpdateWithoutLabeledByInput>
    create: XOR<BusImageCreateWithoutLabeledByInput, BusImageUncheckedCreateWithoutLabeledByInput>
  }

  export type BusImageUpdateWithWhereUniqueWithoutLabeledByInput = {
    where: BusImageWhereUniqueInput
    data: XOR<BusImageUpdateWithoutLabeledByInput, BusImageUncheckedUpdateWithoutLabeledByInput>
  }

  export type BusImageUpdateManyWithWhereWithoutLabeledByInput = {
    where: BusImageScalarWhereInput
    data: XOR<BusImageUpdateManyMutationInput, BusImageUncheckedUpdateManyWithoutLabeledByInput>
  }

  export type BusImageScalarWhereInput = {
    AND?: BusImageScalarWhereInput | BusImageScalarWhereInput[]
    OR?: BusImageScalarWhereInput[]
    NOT?: BusImageScalarWhereInput | BusImageScalarWhereInput[]
    id?: StringFilter<"BusImage"> | string
    imageUrl?: StringFilter<"BusImage"> | string
    label?: EnumLabelStatusNullableFilter<"BusImage"> | $Enums.LabelStatus | null
    confidence?: IntNullableFilter<"BusImage"> | number | null
    fleetNumber?: StringNullableFilter<"BusImage"> | string | null
    cameraId?: StringNullableFilter<"BusImage"> | string | null
    timeTaken?: DateTimeNullableFilter<"BusImage"> | Date | string | null
    weatherCondition?: EnumWeatherNullableFilter<"BusImage"> | $Enums.Weather | null
    cameraAngle?: EnumAngleNullableFilter<"BusImage"> | $Enums.Angle | null
    isVerified?: BoolFilter<"BusImage"> | boolean
    labeledById?: StringNullableFilter<"BusImage"> | string | null
    createdAt?: DateTimeFilter<"BusImage"> | Date | string
    updatedAt?: DateTimeFilter<"BusImage"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
  }

  export type PostUpdateManyWithWhereWithoutCreatedByInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busImages?: BusImageCreateNestedManyWithoutLabeledByInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busImages?: BusImageUncheckedCreateNestedManyWithoutLabeledByInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busImages?: BusImageUpdateManyWithoutLabeledByNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busImages?: BusImageUncheckedUpdateManyWithoutLabeledByNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busImages?: BusImageCreateNestedManyWithoutLabeledByInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    busImages?: BusImageUncheckedCreateNestedManyWithoutLabeledByInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busImages?: BusImageUpdateManyWithoutLabeledByNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    busImages?: BusImageUncheckedUpdateManyWithoutLabeledByNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutBusImagesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutBusImagesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutBusImagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBusImagesInput, UserUncheckedCreateWithoutBusImagesInput>
  }

  export type DatasetImageCreateWithoutImageInput = {
    dataset: DatasetCreateNestedOneWithoutImagesInput
  }

  export type DatasetImageUncheckedCreateWithoutImageInput = {
    datasetId: string
  }

  export type DatasetImageCreateOrConnectWithoutImageInput = {
    where: DatasetImageWhereUniqueInput
    create: XOR<DatasetImageCreateWithoutImageInput, DatasetImageUncheckedCreateWithoutImageInput>
  }

  export type DatasetImageCreateManyImageInputEnvelope = {
    data: DatasetImageCreateManyImageInput | DatasetImageCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type InferenceLogCreateWithoutImageInput = {
    id?: string
    predictedLabel: $Enums.LabelStatus
    confidence: number
    createdAt?: Date | string
    model: ModelRegistryCreateNestedOneWithoutInferencesInput
  }

  export type InferenceLogUncheckedCreateWithoutImageInput = {
    id?: string
    predictedLabel: $Enums.LabelStatus
    confidence: number
    modelId: string
    createdAt?: Date | string
  }

  export type InferenceLogCreateOrConnectWithoutImageInput = {
    where: InferenceLogWhereUniqueInput
    create: XOR<InferenceLogCreateWithoutImageInput, InferenceLogUncheckedCreateWithoutImageInput>
  }

  export type InferenceLogCreateManyImageInputEnvelope = {
    data: InferenceLogCreateManyImageInput | InferenceLogCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type TransponderLogCreateWithoutMatchedImageInput = {
    id?: string
    fleetNumber: string
    gateId?: string | null
    timestamp: Date | string
    createdAt?: Date | string
  }

  export type TransponderLogUncheckedCreateWithoutMatchedImageInput = {
    id?: string
    fleetNumber: string
    gateId?: string | null
    timestamp: Date | string
    createdAt?: Date | string
  }

  export type TransponderLogCreateOrConnectWithoutMatchedImageInput = {
    where: TransponderLogWhereUniqueInput
    create: XOR<TransponderLogCreateWithoutMatchedImageInput, TransponderLogUncheckedCreateWithoutMatchedImageInput>
  }

  export type TransponderLogCreateManyMatchedImageInputEnvelope = {
    data: TransponderLogCreateManyMatchedImageInput | TransponderLogCreateManyMatchedImageInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBusImagesInput = {
    update: XOR<UserUpdateWithoutBusImagesInput, UserUncheckedUpdateWithoutBusImagesInput>
    create: XOR<UserCreateWithoutBusImagesInput, UserUncheckedCreateWithoutBusImagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBusImagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBusImagesInput, UserUncheckedUpdateWithoutBusImagesInput>
  }

  export type UserUpdateWithoutBusImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBusImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type DatasetImageUpsertWithWhereUniqueWithoutImageInput = {
    where: DatasetImageWhereUniqueInput
    update: XOR<DatasetImageUpdateWithoutImageInput, DatasetImageUncheckedUpdateWithoutImageInput>
    create: XOR<DatasetImageCreateWithoutImageInput, DatasetImageUncheckedCreateWithoutImageInput>
  }

  export type DatasetImageUpdateWithWhereUniqueWithoutImageInput = {
    where: DatasetImageWhereUniqueInput
    data: XOR<DatasetImageUpdateWithoutImageInput, DatasetImageUncheckedUpdateWithoutImageInput>
  }

  export type DatasetImageUpdateManyWithWhereWithoutImageInput = {
    where: DatasetImageScalarWhereInput
    data: XOR<DatasetImageUpdateManyMutationInput, DatasetImageUncheckedUpdateManyWithoutImageInput>
  }

  export type DatasetImageScalarWhereInput = {
    AND?: DatasetImageScalarWhereInput | DatasetImageScalarWhereInput[]
    OR?: DatasetImageScalarWhereInput[]
    NOT?: DatasetImageScalarWhereInput | DatasetImageScalarWhereInput[]
    datasetId?: StringFilter<"DatasetImage"> | string
    imageId?: StringFilter<"DatasetImage"> | string
  }

  export type InferenceLogUpsertWithWhereUniqueWithoutImageInput = {
    where: InferenceLogWhereUniqueInput
    update: XOR<InferenceLogUpdateWithoutImageInput, InferenceLogUncheckedUpdateWithoutImageInput>
    create: XOR<InferenceLogCreateWithoutImageInput, InferenceLogUncheckedCreateWithoutImageInput>
  }

  export type InferenceLogUpdateWithWhereUniqueWithoutImageInput = {
    where: InferenceLogWhereUniqueInput
    data: XOR<InferenceLogUpdateWithoutImageInput, InferenceLogUncheckedUpdateWithoutImageInput>
  }

  export type InferenceLogUpdateManyWithWhereWithoutImageInput = {
    where: InferenceLogScalarWhereInput
    data: XOR<InferenceLogUpdateManyMutationInput, InferenceLogUncheckedUpdateManyWithoutImageInput>
  }

  export type InferenceLogScalarWhereInput = {
    AND?: InferenceLogScalarWhereInput | InferenceLogScalarWhereInput[]
    OR?: InferenceLogScalarWhereInput[]
    NOT?: InferenceLogScalarWhereInput | InferenceLogScalarWhereInput[]
    id?: StringFilter<"InferenceLog"> | string
    predictedLabel?: EnumLabelStatusFilter<"InferenceLog"> | $Enums.LabelStatus
    confidence?: IntFilter<"InferenceLog"> | number
    imageId?: StringFilter<"InferenceLog"> | string
    modelId?: StringFilter<"InferenceLog"> | string
    createdAt?: DateTimeFilter<"InferenceLog"> | Date | string
  }

  export type TransponderLogUpsertWithWhereUniqueWithoutMatchedImageInput = {
    where: TransponderLogWhereUniqueInput
    update: XOR<TransponderLogUpdateWithoutMatchedImageInput, TransponderLogUncheckedUpdateWithoutMatchedImageInput>
    create: XOR<TransponderLogCreateWithoutMatchedImageInput, TransponderLogUncheckedCreateWithoutMatchedImageInput>
  }

  export type TransponderLogUpdateWithWhereUniqueWithoutMatchedImageInput = {
    where: TransponderLogWhereUniqueInput
    data: XOR<TransponderLogUpdateWithoutMatchedImageInput, TransponderLogUncheckedUpdateWithoutMatchedImageInput>
  }

  export type TransponderLogUpdateManyWithWhereWithoutMatchedImageInput = {
    where: TransponderLogScalarWhereInput
    data: XOR<TransponderLogUpdateManyMutationInput, TransponderLogUncheckedUpdateManyWithoutMatchedImageInput>
  }

  export type TransponderLogScalarWhereInput = {
    AND?: TransponderLogScalarWhereInput | TransponderLogScalarWhereInput[]
    OR?: TransponderLogScalarWhereInput[]
    NOT?: TransponderLogScalarWhereInput | TransponderLogScalarWhereInput[]
    id?: StringFilter<"TransponderLog"> | string
    fleetNumber?: StringFilter<"TransponderLog"> | string
    gateId?: StringNullableFilter<"TransponderLog"> | string | null
    timestamp?: DateTimeFilter<"TransponderLog"> | Date | string
    matchedImageId?: StringNullableFilter<"TransponderLog"> | string | null
    createdAt?: DateTimeFilter<"TransponderLog"> | Date | string
  }

  export type BusImageCreateWithoutTransponderLogsInput = {
    id?: string
    imageUrl: string
    label?: $Enums.LabelStatus | null
    confidence?: number | null
    fleetNumber?: string | null
    cameraId?: string | null
    timeTaken?: Date | string | null
    weatherCondition?: $Enums.Weather | null
    cameraAngle?: $Enums.Angle | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    labeledBy?: UserCreateNestedOneWithoutBusImagesInput
    trainingData?: DatasetImageCreateNestedManyWithoutImageInput
    inferences?: InferenceLogCreateNestedManyWithoutImageInput
  }

  export type BusImageUncheckedCreateWithoutTransponderLogsInput = {
    id?: string
    imageUrl: string
    label?: $Enums.LabelStatus | null
    confidence?: number | null
    fleetNumber?: string | null
    cameraId?: string | null
    timeTaken?: Date | string | null
    weatherCondition?: $Enums.Weather | null
    cameraAngle?: $Enums.Angle | null
    isVerified?: boolean
    labeledById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trainingData?: DatasetImageUncheckedCreateNestedManyWithoutImageInput
    inferences?: InferenceLogUncheckedCreateNestedManyWithoutImageInput
  }

  export type BusImageCreateOrConnectWithoutTransponderLogsInput = {
    where: BusImageWhereUniqueInput
    create: XOR<BusImageCreateWithoutTransponderLogsInput, BusImageUncheckedCreateWithoutTransponderLogsInput>
  }

  export type BusImageUpsertWithoutTransponderLogsInput = {
    update: XOR<BusImageUpdateWithoutTransponderLogsInput, BusImageUncheckedUpdateWithoutTransponderLogsInput>
    create: XOR<BusImageCreateWithoutTransponderLogsInput, BusImageUncheckedCreateWithoutTransponderLogsInput>
    where?: BusImageWhereInput
  }

  export type BusImageUpdateToOneWithWhereWithoutTransponderLogsInput = {
    where?: BusImageWhereInput
    data: XOR<BusImageUpdateWithoutTransponderLogsInput, BusImageUncheckedUpdateWithoutTransponderLogsInput>
  }

  export type BusImageUpdateWithoutTransponderLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    label?: NullableEnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus | null
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    fleetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    timeTaken?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weatherCondition?: NullableEnumWeatherFieldUpdateOperationsInput | $Enums.Weather | null
    cameraAngle?: NullableEnumAngleFieldUpdateOperationsInput | $Enums.Angle | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labeledBy?: UserUpdateOneWithoutBusImagesNestedInput
    trainingData?: DatasetImageUpdateManyWithoutImageNestedInput
    inferences?: InferenceLogUpdateManyWithoutImageNestedInput
  }

  export type BusImageUncheckedUpdateWithoutTransponderLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    label?: NullableEnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus | null
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    fleetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    timeTaken?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weatherCondition?: NullableEnumWeatherFieldUpdateOperationsInput | $Enums.Weather | null
    cameraAngle?: NullableEnumAngleFieldUpdateOperationsInput | $Enums.Angle | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    labeledById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingData?: DatasetImageUncheckedUpdateManyWithoutImageNestedInput
    inferences?: InferenceLogUncheckedUpdateManyWithoutImageNestedInput
  }

  export type BusImageCreateWithoutInferencesInput = {
    id?: string
    imageUrl: string
    label?: $Enums.LabelStatus | null
    confidence?: number | null
    fleetNumber?: string | null
    cameraId?: string | null
    timeTaken?: Date | string | null
    weatherCondition?: $Enums.Weather | null
    cameraAngle?: $Enums.Angle | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    labeledBy?: UserCreateNestedOneWithoutBusImagesInput
    trainingData?: DatasetImageCreateNestedManyWithoutImageInput
    transponderLogs?: TransponderLogCreateNestedManyWithoutMatchedImageInput
  }

  export type BusImageUncheckedCreateWithoutInferencesInput = {
    id?: string
    imageUrl: string
    label?: $Enums.LabelStatus | null
    confidence?: number | null
    fleetNumber?: string | null
    cameraId?: string | null
    timeTaken?: Date | string | null
    weatherCondition?: $Enums.Weather | null
    cameraAngle?: $Enums.Angle | null
    isVerified?: boolean
    labeledById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trainingData?: DatasetImageUncheckedCreateNestedManyWithoutImageInput
    transponderLogs?: TransponderLogUncheckedCreateNestedManyWithoutMatchedImageInput
  }

  export type BusImageCreateOrConnectWithoutInferencesInput = {
    where: BusImageWhereUniqueInput
    create: XOR<BusImageCreateWithoutInferencesInput, BusImageUncheckedCreateWithoutInferencesInput>
  }

  export type ModelRegistryCreateWithoutInferencesInput = {
    id?: string
    name: string
    version?: string | null
    architecture: $Enums.ModelArchitecture
    status?: $Enums.ModelStatus
    weightsUrl?: string | null
    eapUrl?: string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    dataset?: DatasetCreateNestedOneWithoutModelsInput
  }

  export type ModelRegistryUncheckedCreateWithoutInferencesInput = {
    id?: string
    name: string
    version?: string | null
    architecture: $Enums.ModelArchitecture
    status?: $Enums.ModelStatus
    weightsUrl?: string | null
    eapUrl?: string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    datasetId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModelRegistryCreateOrConnectWithoutInferencesInput = {
    where: ModelRegistryWhereUniqueInput
    create: XOR<ModelRegistryCreateWithoutInferencesInput, ModelRegistryUncheckedCreateWithoutInferencesInput>
  }

  export type BusImageUpsertWithoutInferencesInput = {
    update: XOR<BusImageUpdateWithoutInferencesInput, BusImageUncheckedUpdateWithoutInferencesInput>
    create: XOR<BusImageCreateWithoutInferencesInput, BusImageUncheckedCreateWithoutInferencesInput>
    where?: BusImageWhereInput
  }

  export type BusImageUpdateToOneWithWhereWithoutInferencesInput = {
    where?: BusImageWhereInput
    data: XOR<BusImageUpdateWithoutInferencesInput, BusImageUncheckedUpdateWithoutInferencesInput>
  }

  export type BusImageUpdateWithoutInferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    label?: NullableEnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus | null
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    fleetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    timeTaken?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weatherCondition?: NullableEnumWeatherFieldUpdateOperationsInput | $Enums.Weather | null
    cameraAngle?: NullableEnumAngleFieldUpdateOperationsInput | $Enums.Angle | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labeledBy?: UserUpdateOneWithoutBusImagesNestedInput
    trainingData?: DatasetImageUpdateManyWithoutImageNestedInput
    transponderLogs?: TransponderLogUpdateManyWithoutMatchedImageNestedInput
  }

  export type BusImageUncheckedUpdateWithoutInferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    label?: NullableEnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus | null
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    fleetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    timeTaken?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weatherCondition?: NullableEnumWeatherFieldUpdateOperationsInput | $Enums.Weather | null
    cameraAngle?: NullableEnumAngleFieldUpdateOperationsInput | $Enums.Angle | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    labeledById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingData?: DatasetImageUncheckedUpdateManyWithoutImageNestedInput
    transponderLogs?: TransponderLogUncheckedUpdateManyWithoutMatchedImageNestedInput
  }

  export type ModelRegistryUpsertWithoutInferencesInput = {
    update: XOR<ModelRegistryUpdateWithoutInferencesInput, ModelRegistryUncheckedUpdateWithoutInferencesInput>
    create: XOR<ModelRegistryCreateWithoutInferencesInput, ModelRegistryUncheckedCreateWithoutInferencesInput>
    where?: ModelRegistryWhereInput
  }

  export type ModelRegistryUpdateToOneWithWhereWithoutInferencesInput = {
    where?: ModelRegistryWhereInput
    data: XOR<ModelRegistryUpdateWithoutInferencesInput, ModelRegistryUncheckedUpdateWithoutInferencesInput>
  }

  export type ModelRegistryUpdateWithoutInferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    architecture?: EnumModelArchitectureFieldUpdateOperationsInput | $Enums.ModelArchitecture
    status?: EnumModelStatusFieldUpdateOperationsInput | $Enums.ModelStatus
    weightsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataset?: DatasetUpdateOneWithoutModelsNestedInput
  }

  export type ModelRegistryUncheckedUpdateWithoutInferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    architecture?: EnumModelArchitectureFieldUpdateOperationsInput | $Enums.ModelArchitecture
    status?: EnumModelStatusFieldUpdateOperationsInput | $Enums.ModelStatus
    weightsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    datasetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetImageCreateWithoutDatasetInput = {
    image: BusImageCreateNestedOneWithoutTrainingDataInput
  }

  export type DatasetImageUncheckedCreateWithoutDatasetInput = {
    imageId: string
  }

  export type DatasetImageCreateOrConnectWithoutDatasetInput = {
    where: DatasetImageWhereUniqueInput
    create: XOR<DatasetImageCreateWithoutDatasetInput, DatasetImageUncheckedCreateWithoutDatasetInput>
  }

  export type DatasetImageCreateManyDatasetInputEnvelope = {
    data: DatasetImageCreateManyDatasetInput | DatasetImageCreateManyDatasetInput[]
    skipDuplicates?: boolean
  }

  export type ModelRegistryCreateWithoutDatasetInput = {
    id?: string
    name: string
    version?: string | null
    architecture: $Enums.ModelArchitecture
    status?: $Enums.ModelStatus
    weightsUrl?: string | null
    eapUrl?: string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    inferences?: InferenceLogCreateNestedManyWithoutModelInput
  }

  export type ModelRegistryUncheckedCreateWithoutDatasetInput = {
    id?: string
    name: string
    version?: string | null
    architecture: $Enums.ModelArchitecture
    status?: $Enums.ModelStatus
    weightsUrl?: string | null
    eapUrl?: string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    inferences?: InferenceLogUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelRegistryCreateOrConnectWithoutDatasetInput = {
    where: ModelRegistryWhereUniqueInput
    create: XOR<ModelRegistryCreateWithoutDatasetInput, ModelRegistryUncheckedCreateWithoutDatasetInput>
  }

  export type ModelRegistryCreateManyDatasetInputEnvelope = {
    data: ModelRegistryCreateManyDatasetInput | ModelRegistryCreateManyDatasetInput[]
    skipDuplicates?: boolean
  }

  export type DatasetImageUpsertWithWhereUniqueWithoutDatasetInput = {
    where: DatasetImageWhereUniqueInput
    update: XOR<DatasetImageUpdateWithoutDatasetInput, DatasetImageUncheckedUpdateWithoutDatasetInput>
    create: XOR<DatasetImageCreateWithoutDatasetInput, DatasetImageUncheckedCreateWithoutDatasetInput>
  }

  export type DatasetImageUpdateWithWhereUniqueWithoutDatasetInput = {
    where: DatasetImageWhereUniqueInput
    data: XOR<DatasetImageUpdateWithoutDatasetInput, DatasetImageUncheckedUpdateWithoutDatasetInput>
  }

  export type DatasetImageUpdateManyWithWhereWithoutDatasetInput = {
    where: DatasetImageScalarWhereInput
    data: XOR<DatasetImageUpdateManyMutationInput, DatasetImageUncheckedUpdateManyWithoutDatasetInput>
  }

  export type ModelRegistryUpsertWithWhereUniqueWithoutDatasetInput = {
    where: ModelRegistryWhereUniqueInput
    update: XOR<ModelRegistryUpdateWithoutDatasetInput, ModelRegistryUncheckedUpdateWithoutDatasetInput>
    create: XOR<ModelRegistryCreateWithoutDatasetInput, ModelRegistryUncheckedCreateWithoutDatasetInput>
  }

  export type ModelRegistryUpdateWithWhereUniqueWithoutDatasetInput = {
    where: ModelRegistryWhereUniqueInput
    data: XOR<ModelRegistryUpdateWithoutDatasetInput, ModelRegistryUncheckedUpdateWithoutDatasetInput>
  }

  export type ModelRegistryUpdateManyWithWhereWithoutDatasetInput = {
    where: ModelRegistryScalarWhereInput
    data: XOR<ModelRegistryUpdateManyMutationInput, ModelRegistryUncheckedUpdateManyWithoutDatasetInput>
  }

  export type ModelRegistryScalarWhereInput = {
    AND?: ModelRegistryScalarWhereInput | ModelRegistryScalarWhereInput[]
    OR?: ModelRegistryScalarWhereInput[]
    NOT?: ModelRegistryScalarWhereInput | ModelRegistryScalarWhereInput[]
    id?: StringFilter<"ModelRegistry"> | string
    name?: StringFilter<"ModelRegistry"> | string
    version?: StringNullableFilter<"ModelRegistry"> | string | null
    architecture?: EnumModelArchitectureFilter<"ModelRegistry"> | $Enums.ModelArchitecture
    status?: EnumModelStatusFilter<"ModelRegistry"> | $Enums.ModelStatus
    weightsUrl?: StringNullableFilter<"ModelRegistry"> | string | null
    eapUrl?: StringNullableFilter<"ModelRegistry"> | string | null
    hyperparameters?: JsonNullableFilter<"ModelRegistry">
    metrics?: JsonNullableFilter<"ModelRegistry">
    datasetId?: StringNullableFilter<"ModelRegistry"> | string | null
    createdAt?: DateTimeFilter<"ModelRegistry"> | Date | string
    updatedAt?: DateTimeFilter<"ModelRegistry"> | Date | string
  }

  export type DatasetCreateWithoutImagesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    models?: ModelRegistryCreateNestedManyWithoutDatasetInput
  }

  export type DatasetUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    models?: ModelRegistryUncheckedCreateNestedManyWithoutDatasetInput
  }

  export type DatasetCreateOrConnectWithoutImagesInput = {
    where: DatasetWhereUniqueInput
    create: XOR<DatasetCreateWithoutImagesInput, DatasetUncheckedCreateWithoutImagesInput>
  }

  export type BusImageCreateWithoutTrainingDataInput = {
    id?: string
    imageUrl: string
    label?: $Enums.LabelStatus | null
    confidence?: number | null
    fleetNumber?: string | null
    cameraId?: string | null
    timeTaken?: Date | string | null
    weatherCondition?: $Enums.Weather | null
    cameraAngle?: $Enums.Angle | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    labeledBy?: UserCreateNestedOneWithoutBusImagesInput
    inferences?: InferenceLogCreateNestedManyWithoutImageInput
    transponderLogs?: TransponderLogCreateNestedManyWithoutMatchedImageInput
  }

  export type BusImageUncheckedCreateWithoutTrainingDataInput = {
    id?: string
    imageUrl: string
    label?: $Enums.LabelStatus | null
    confidence?: number | null
    fleetNumber?: string | null
    cameraId?: string | null
    timeTaken?: Date | string | null
    weatherCondition?: $Enums.Weather | null
    cameraAngle?: $Enums.Angle | null
    isVerified?: boolean
    labeledById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inferences?: InferenceLogUncheckedCreateNestedManyWithoutImageInput
    transponderLogs?: TransponderLogUncheckedCreateNestedManyWithoutMatchedImageInput
  }

  export type BusImageCreateOrConnectWithoutTrainingDataInput = {
    where: BusImageWhereUniqueInput
    create: XOR<BusImageCreateWithoutTrainingDataInput, BusImageUncheckedCreateWithoutTrainingDataInput>
  }

  export type DatasetUpsertWithoutImagesInput = {
    update: XOR<DatasetUpdateWithoutImagesInput, DatasetUncheckedUpdateWithoutImagesInput>
    create: XOR<DatasetCreateWithoutImagesInput, DatasetUncheckedCreateWithoutImagesInput>
    where?: DatasetWhereInput
  }

  export type DatasetUpdateToOneWithWhereWithoutImagesInput = {
    where?: DatasetWhereInput
    data: XOR<DatasetUpdateWithoutImagesInput, DatasetUncheckedUpdateWithoutImagesInput>
  }

  export type DatasetUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelRegistryUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    models?: ModelRegistryUncheckedUpdateManyWithoutDatasetNestedInput
  }

  export type BusImageUpsertWithoutTrainingDataInput = {
    update: XOR<BusImageUpdateWithoutTrainingDataInput, BusImageUncheckedUpdateWithoutTrainingDataInput>
    create: XOR<BusImageCreateWithoutTrainingDataInput, BusImageUncheckedCreateWithoutTrainingDataInput>
    where?: BusImageWhereInput
  }

  export type BusImageUpdateToOneWithWhereWithoutTrainingDataInput = {
    where?: BusImageWhereInput
    data: XOR<BusImageUpdateWithoutTrainingDataInput, BusImageUncheckedUpdateWithoutTrainingDataInput>
  }

  export type BusImageUpdateWithoutTrainingDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    label?: NullableEnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus | null
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    fleetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    timeTaken?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weatherCondition?: NullableEnumWeatherFieldUpdateOperationsInput | $Enums.Weather | null
    cameraAngle?: NullableEnumAngleFieldUpdateOperationsInput | $Enums.Angle | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    labeledBy?: UserUpdateOneWithoutBusImagesNestedInput
    inferences?: InferenceLogUpdateManyWithoutImageNestedInput
    transponderLogs?: TransponderLogUpdateManyWithoutMatchedImageNestedInput
  }

  export type BusImageUncheckedUpdateWithoutTrainingDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    label?: NullableEnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus | null
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    fleetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    timeTaken?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weatherCondition?: NullableEnumWeatherFieldUpdateOperationsInput | $Enums.Weather | null
    cameraAngle?: NullableEnumAngleFieldUpdateOperationsInput | $Enums.Angle | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    labeledById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inferences?: InferenceLogUncheckedUpdateManyWithoutImageNestedInput
    transponderLogs?: TransponderLogUncheckedUpdateManyWithoutMatchedImageNestedInput
  }

  export type DatasetCreateWithoutModelsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    images?: DatasetImageCreateNestedManyWithoutDatasetInput
  }

  export type DatasetUncheckedCreateWithoutModelsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    images?: DatasetImageUncheckedCreateNestedManyWithoutDatasetInput
  }

  export type DatasetCreateOrConnectWithoutModelsInput = {
    where: DatasetWhereUniqueInput
    create: XOR<DatasetCreateWithoutModelsInput, DatasetUncheckedCreateWithoutModelsInput>
  }

  export type InferenceLogCreateWithoutModelInput = {
    id?: string
    predictedLabel: $Enums.LabelStatus
    confidence: number
    createdAt?: Date | string
    image: BusImageCreateNestedOneWithoutInferencesInput
  }

  export type InferenceLogUncheckedCreateWithoutModelInput = {
    id?: string
    predictedLabel: $Enums.LabelStatus
    confidence: number
    imageId: string
    createdAt?: Date | string
  }

  export type InferenceLogCreateOrConnectWithoutModelInput = {
    where: InferenceLogWhereUniqueInput
    create: XOR<InferenceLogCreateWithoutModelInput, InferenceLogUncheckedCreateWithoutModelInput>
  }

  export type InferenceLogCreateManyModelInputEnvelope = {
    data: InferenceLogCreateManyModelInput | InferenceLogCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type DatasetUpsertWithoutModelsInput = {
    update: XOR<DatasetUpdateWithoutModelsInput, DatasetUncheckedUpdateWithoutModelsInput>
    create: XOR<DatasetCreateWithoutModelsInput, DatasetUncheckedCreateWithoutModelsInput>
    where?: DatasetWhereInput
  }

  export type DatasetUpdateToOneWithWhereWithoutModelsInput = {
    where?: DatasetWhereInput
    data: XOR<DatasetUpdateWithoutModelsInput, DatasetUncheckedUpdateWithoutModelsInput>
  }

  export type DatasetUpdateWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DatasetImageUpdateManyWithoutDatasetNestedInput
  }

  export type DatasetUncheckedUpdateWithoutModelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    images?: DatasetImageUncheckedUpdateManyWithoutDatasetNestedInput
  }

  export type InferenceLogUpsertWithWhereUniqueWithoutModelInput = {
    where: InferenceLogWhereUniqueInput
    update: XOR<InferenceLogUpdateWithoutModelInput, InferenceLogUncheckedUpdateWithoutModelInput>
    create: XOR<InferenceLogCreateWithoutModelInput, InferenceLogUncheckedCreateWithoutModelInput>
  }

  export type InferenceLogUpdateWithWhereUniqueWithoutModelInput = {
    where: InferenceLogWhereUniqueInput
    data: XOR<InferenceLogUpdateWithoutModelInput, InferenceLogUncheckedUpdateWithoutModelInput>
  }

  export type InferenceLogUpdateManyWithWhereWithoutModelInput = {
    where: InferenceLogScalarWhereInput
    data: XOR<InferenceLogUpdateManyMutationInput, InferenceLogUncheckedUpdateManyWithoutModelInput>
  }

  export type BusImageCreateManyLabeledByInput = {
    id?: string
    imageUrl: string
    label?: $Enums.LabelStatus | null
    confidence?: number | null
    fleetNumber?: string | null
    cameraId?: string | null
    timeTaken?: Date | string | null
    weatherCondition?: $Enums.Weather | null
    cameraAngle?: $Enums.Angle | null
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusImageUpdateWithoutLabeledByInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    label?: NullableEnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus | null
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    fleetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    timeTaken?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weatherCondition?: NullableEnumWeatherFieldUpdateOperationsInput | $Enums.Weather | null
    cameraAngle?: NullableEnumAngleFieldUpdateOperationsInput | $Enums.Angle | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingData?: DatasetImageUpdateManyWithoutImageNestedInput
    inferences?: InferenceLogUpdateManyWithoutImageNestedInput
    transponderLogs?: TransponderLogUpdateManyWithoutMatchedImageNestedInput
  }

  export type BusImageUncheckedUpdateWithoutLabeledByInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    label?: NullableEnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus | null
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    fleetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    timeTaken?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weatherCondition?: NullableEnumWeatherFieldUpdateOperationsInput | $Enums.Weather | null
    cameraAngle?: NullableEnumAngleFieldUpdateOperationsInput | $Enums.Angle | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trainingData?: DatasetImageUncheckedUpdateManyWithoutImageNestedInput
    inferences?: InferenceLogUncheckedUpdateManyWithoutImageNestedInput
    transponderLogs?: TransponderLogUncheckedUpdateManyWithoutMatchedImageNestedInput
  }

  export type BusImageUncheckedUpdateManyWithoutLabeledByInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    label?: NullableEnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus | null
    confidence?: NullableIntFieldUpdateOperationsInput | number | null
    fleetNumber?: NullableStringFieldUpdateOperationsInput | string | null
    cameraId?: NullableStringFieldUpdateOperationsInput | string | null
    timeTaken?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    weatherCondition?: NullableEnumWeatherFieldUpdateOperationsInput | $Enums.Weather | null
    cameraAngle?: NullableEnumAngleFieldUpdateOperationsInput | $Enums.Angle | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetImageCreateManyImageInput = {
    datasetId: string
  }

  export type InferenceLogCreateManyImageInput = {
    id?: string
    predictedLabel: $Enums.LabelStatus
    confidence: number
    modelId: string
    createdAt?: Date | string
  }

  export type TransponderLogCreateManyMatchedImageInput = {
    id?: string
    fleetNumber: string
    gateId?: string | null
    timestamp: Date | string
    createdAt?: Date | string
  }

  export type DatasetImageUpdateWithoutImageInput = {
    dataset?: DatasetUpdateOneRequiredWithoutImagesNestedInput
  }

  export type DatasetImageUncheckedUpdateWithoutImageInput = {
    datasetId?: StringFieldUpdateOperationsInput | string
  }

  export type DatasetImageUncheckedUpdateManyWithoutImageInput = {
    datasetId?: StringFieldUpdateOperationsInput | string
  }

  export type InferenceLogUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictedLabel?: EnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus
    confidence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    model?: ModelRegistryUpdateOneRequiredWithoutInferencesNestedInput
  }

  export type InferenceLogUncheckedUpdateWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictedLabel?: EnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus
    confidence?: IntFieldUpdateOperationsInput | number
    modelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InferenceLogUncheckedUpdateManyWithoutImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictedLabel?: EnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus
    confidence?: IntFieldUpdateOperationsInput | number
    modelId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransponderLogUpdateWithoutMatchedImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetNumber?: StringFieldUpdateOperationsInput | string
    gateId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransponderLogUncheckedUpdateWithoutMatchedImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetNumber?: StringFieldUpdateOperationsInput | string
    gateId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransponderLogUncheckedUpdateManyWithoutMatchedImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    fleetNumber?: StringFieldUpdateOperationsInput | string
    gateId?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DatasetImageCreateManyDatasetInput = {
    imageId: string
  }

  export type ModelRegistryCreateManyDatasetInput = {
    id?: string
    name: string
    version?: string | null
    architecture: $Enums.ModelArchitecture
    status?: $Enums.ModelStatus
    weightsUrl?: string | null
    eapUrl?: string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DatasetImageUpdateWithoutDatasetInput = {
    image?: BusImageUpdateOneRequiredWithoutTrainingDataNestedInput
  }

  export type DatasetImageUncheckedUpdateWithoutDatasetInput = {
    imageId?: StringFieldUpdateOperationsInput | string
  }

  export type DatasetImageUncheckedUpdateManyWithoutDatasetInput = {
    imageId?: StringFieldUpdateOperationsInput | string
  }

  export type ModelRegistryUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    architecture?: EnumModelArchitectureFieldUpdateOperationsInput | $Enums.ModelArchitecture
    status?: EnumModelStatusFieldUpdateOperationsInput | $Enums.ModelStatus
    weightsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inferences?: InferenceLogUpdateManyWithoutModelNestedInput
  }

  export type ModelRegistryUncheckedUpdateWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    architecture?: EnumModelArchitectureFieldUpdateOperationsInput | $Enums.ModelArchitecture
    status?: EnumModelStatusFieldUpdateOperationsInput | $Enums.ModelStatus
    weightsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inferences?: InferenceLogUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelRegistryUncheckedUpdateManyWithoutDatasetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    architecture?: EnumModelArchitectureFieldUpdateOperationsInput | $Enums.ModelArchitecture
    status?: EnumModelStatusFieldUpdateOperationsInput | $Enums.ModelStatus
    weightsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    eapUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hyperparameters?: NullableJsonNullValueInput | InputJsonValue
    metrics?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InferenceLogCreateManyModelInput = {
    id?: string
    predictedLabel: $Enums.LabelStatus
    confidence: number
    imageId: string
    createdAt?: Date | string
  }

  export type InferenceLogUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictedLabel?: EnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus
    confidence?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: BusImageUpdateOneRequiredWithoutInferencesNestedInput
  }

  export type InferenceLogUncheckedUpdateWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictedLabel?: EnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus
    confidence?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InferenceLogUncheckedUpdateManyWithoutModelInput = {
    id?: StringFieldUpdateOperationsInput | string
    predictedLabel?: EnumLabelStatusFieldUpdateOperationsInput | $Enums.LabelStatus
    confidence?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}