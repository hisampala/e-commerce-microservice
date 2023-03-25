
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Products
 * 
 */
export type Products = {
  id: string
  name: string
  sku: string
  bar_code: string
  amount: number
  cost: number
  price: number
  create_date: Date
  update_date: Date
  deleted_date: Date | null
  is_deleted: boolean
  user_create: string
  user_update: string
}

/**
 * Model StokProducts
 * 
 */
export type StokProducts = {
  id: string
  stock_code: string
  create_date: Date
  update_date: Date
  user_crate: string
  user_update: string
}

/**
 * Model StokProductsDetail
 * 
 */
export type StokProductsDetail = {
  id: string
  stokProductsId: string
  productsId: string
  amont_new_stock: number
  cost_new: number
  amont_old_stock: number
  cost_old: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.products.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.products.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<GlobalReject>;

  /**
   * `prisma.stokProducts`: Exposes CRUD operations for the **StokProducts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StokProducts
    * const stokProducts = await prisma.stokProducts.findMany()
    * ```
    */
  get stokProducts(): Prisma.StokProductsDelegate<GlobalReject>;

  /**
   * `prisma.stokProductsDetail`: Exposes CRUD operations for the **StokProductsDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StokProductsDetails
    * const stokProductsDetails = await prisma.stokProductsDetail.findMany()
    * ```
    */
  get stokProductsDetail(): Prisma.StokProductsDetailDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 4.8.0
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Products: 'Products',
    StokProducts: 'StokProducts',
    StokProductsDetail: 'StokProductsDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductsCountOutputType
   */


  export type ProductsCountOutputType = {
    StockDetail: number
  }

  export type ProductsCountOutputTypeSelect = {
    StockDetail?: boolean
  }

  export type ProductsCountOutputTypeGetPayload<S extends boolean | null | undefined | ProductsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProductsCountOutputTypeArgs)
    ? ProductsCountOutputType 
    : S extends { select: any } & (ProductsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProductsCountOutputType ? ProductsCountOutputType[P] : never
  } 
      : ProductsCountOutputType




  // Custom InputTypes

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     * 
    **/
    select?: ProductsCountOutputTypeSelect | null
  }



  /**
   * Count Type StokProductsCountOutputType
   */


  export type StokProductsCountOutputType = {
    Detail: number
  }

  export type StokProductsCountOutputTypeSelect = {
    Detail?: boolean
  }

  export type StokProductsCountOutputTypeGetPayload<S extends boolean | null | undefined | StokProductsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StokProductsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (StokProductsCountOutputTypeArgs)
    ? StokProductsCountOutputType 
    : S extends { select: any } & (StokProductsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof StokProductsCountOutputType ? StokProductsCountOutputType[P] : never
  } 
      : StokProductsCountOutputType




  // Custom InputTypes

  /**
   * StokProductsCountOutputType without action
   */
  export type StokProductsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the StokProductsCountOutputType
     * 
    **/
    select?: StokProductsCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Products
   */


  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    amount: number | null
    cost: number | null
    price: number | null
  }

  export type ProductsSumAggregateOutputType = {
    amount: number | null
    cost: number | null
    price: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    name: string | null
    sku: string | null
    bar_code: string | null
    amount: number | null
    cost: number | null
    price: number | null
    create_date: Date | null
    update_date: Date | null
    deleted_date: Date | null
    is_deleted: boolean | null
    user_create: string | null
    user_update: string | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sku: string | null
    bar_code: string | null
    amount: number | null
    cost: number | null
    price: number | null
    create_date: Date | null
    update_date: Date | null
    deleted_date: Date | null
    is_deleted: boolean | null
    user_create: string | null
    user_update: string | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    sku: number
    bar_code: number
    amount: number
    cost: number
    price: number
    create_date: number
    update_date: number
    deleted_date: number
    is_deleted: number
    user_create: number
    user_update: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    amount?: true
    cost?: true
    price?: true
  }

  export type ProductsSumAggregateInputType = {
    amount?: true
    cost?: true
    price?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    bar_code?: true
    amount?: true
    cost?: true
    price?: true
    create_date?: true
    update_date?: true
    deleted_date?: true
    is_deleted?: true
    user_create?: true
    user_update?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    bar_code?: true
    amount?: true
    cost?: true
    price?: true
    create_date?: true
    update_date?: true
    deleted_date?: true
    is_deleted?: true
    user_create?: true
    user_update?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    bar_code?: true
    amount?: true
    cost?: true
    price?: true
    create_date?: true
    update_date?: true
    deleted_date?: true
    is_deleted?: true
    user_create?: true
    user_update?: true
    _all?: true
  }

  export type ProductsAggregateArgs = {
    /**
     * Filter which Products to aggregate.
     * 
    **/
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs = {
    where?: ProductsWhereInput
    orderBy?: Enumerable<ProductsOrderByWithAggregationInput>
    by: Array<ProductsScalarFieldEnum>
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }


  export type ProductsGroupByOutputType = {
    id: string
    name: string
    sku: string
    bar_code: string
    amount: number
    cost: number
    price: number
    create_date: Date
    update_date: Date
    deleted_date: Date | null
    is_deleted: boolean
    user_create: string
    user_update: string
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect = {
    id?: boolean
    name?: boolean
    sku?: boolean
    bar_code?: boolean
    amount?: boolean
    cost?: boolean
    price?: boolean
    create_date?: boolean
    update_date?: boolean
    deleted_date?: boolean
    is_deleted?: boolean
    user_create?: boolean
    user_update?: boolean
    StockDetail?: boolean | ProductsStockDetailArgs
    _count?: boolean | ProductsCountOutputTypeArgs
  }


  export type ProductsInclude = {
    StockDetail?: boolean | ProductsStockDetailArgs
    _count?: boolean | ProductsCountOutputTypeArgs
  } 

  export type ProductsGetPayload<S extends boolean | null | undefined | ProductsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Products :
    S extends undefined ? never :
    S extends { include: any } & (ProductsArgs | ProductsFindManyArgs)
    ? Products  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'StockDetail' ? Array < StokProductsDetailGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProductsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProductsArgs | ProductsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'StockDetail' ? Array < StokProductsDetailGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProductsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Products ? Products[P] : never
  } 
      : Products


  type ProductsCountArgs = Merge<
    Omit<ProductsFindManyArgs, 'select' | 'include'> & {
      select?: ProductsCountAggregateInputType | true
    }
  >

  export interface ProductsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Products'> extends True ? Prisma__ProductsClient<ProductsGetPayload<T>> : Prisma__ProductsClient<ProductsGetPayload<T> | null, null>

    /**
     * Find one Products that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductsFindUniqueOrThrowArgs>
    ): Prisma__ProductsClient<ProductsGetPayload<T>>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Products'> extends True ? Prisma__ProductsClient<ProductsGetPayload<T>> : Prisma__ProductsClient<ProductsGetPayload<T> | null, null>

    /**
     * Find the first Products that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductsFindFirstOrThrowArgs>
    ): Prisma__ProductsClient<ProductsGetPayload<T>>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductsFindManyArgs>(
      args?: SelectSubset<T, ProductsFindManyArgs>
    ): PrismaPromise<Array<ProductsGetPayload<T>>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
    **/
    create<T extends ProductsCreateArgs>(
      args: SelectSubset<T, ProductsCreateArgs>
    ): Prisma__ProductsClient<ProductsGetPayload<T>>

    /**
     * Create many Products.
     *     @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const products = await prisma.products.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductsCreateManyArgs>(
      args?: SelectSubset<T, ProductsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
    **/
    delete<T extends ProductsDeleteArgs>(
      args: SelectSubset<T, ProductsDeleteArgs>
    ): Prisma__ProductsClient<ProductsGetPayload<T>>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductsUpdateArgs>(
      args: SelectSubset<T, ProductsUpdateArgs>
    ): Prisma__ProductsClient<ProductsGetPayload<T>>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductsDeleteManyArgs>(
      args?: SelectSubset<T, ProductsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductsUpdateManyArgs>(
      args: SelectSubset<T, ProductsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
    **/
    upsert<T extends ProductsUpsertArgs>(
      args: SelectSubset<T, ProductsUpsertArgs>
    ): Prisma__ProductsClient<ProductsGetPayload<T>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    StockDetail<T extends ProductsStockDetailArgs= {}>(args?: Subset<T, ProductsStockDetailArgs>): PrismaPromise<Array<StokProductsDetailGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Products base type for findUnique actions
   */
  export type ProductsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUnique
   */
  export interface ProductsFindUniqueArgs extends ProductsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where: ProductsWhereUniqueInput
  }


  /**
   * Products base type for findFirst actions
   */
  export type ProductsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     * 
    **/
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     * 
    **/
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }

  /**
   * Products findFirst
   */
  export interface ProductsFindFirstArgs extends ProductsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     * 
    **/
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     * 
    **/
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * Products findMany
   */
  export type ProductsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     * 
    **/
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * Products create
   */
  export type ProductsCreateArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * The data needed to create a Products.
     * 
    **/
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }


  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs = {
    /**
     * The data used to create many Products.
     * 
    **/
    data: Enumerable<ProductsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Products update
   */
  export type ProductsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * The data needed to update a Products.
     * 
    **/
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     * 
    **/
    where: ProductsWhereUniqueInput
  }


  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs = {
    /**
     * The data used to update Products.
     * 
    **/
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     * 
    **/
    where?: ProductsWhereInput
  }


  /**
   * Products upsert
   */
  export type ProductsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * The filter to search for the Products to update in case it exists.
     * 
    **/
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     * 
    **/
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }


  /**
   * Products delete
   */
  export type ProductsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * Filter which Products to delete.
     * 
    **/
    where: ProductsWhereUniqueInput
  }


  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs = {
    /**
     * Filter which Products to delete
     * 
    **/
    where?: ProductsWhereInput
  }


  /**
   * Products.StockDetail
   */
  export type ProductsStockDetailArgs = {
    /**
     * Select specific fields to fetch from the StokProductsDetail
     * 
    **/
    select?: StokProductsDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsDetailInclude | null
    where?: StokProductsDetailWhereInput
    orderBy?: Enumerable<StokProductsDetailOrderByWithRelationInput>
    cursor?: StokProductsDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StokProductsDetailScalarFieldEnum>
  }


  /**
   * Products without action
   */
  export type ProductsArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
  }



  /**
   * Model StokProducts
   */


  export type AggregateStokProducts = {
    _count: StokProductsCountAggregateOutputType | null
    _min: StokProductsMinAggregateOutputType | null
    _max: StokProductsMaxAggregateOutputType | null
  }

  export type StokProductsMinAggregateOutputType = {
    id: string | null
    stock_code: string | null
    create_date: Date | null
    update_date: Date | null
    user_crate: string | null
    user_update: string | null
  }

  export type StokProductsMaxAggregateOutputType = {
    id: string | null
    stock_code: string | null
    create_date: Date | null
    update_date: Date | null
    user_crate: string | null
    user_update: string | null
  }

  export type StokProductsCountAggregateOutputType = {
    id: number
    stock_code: number
    create_date: number
    update_date: number
    user_crate: number
    user_update: number
    _all: number
  }


  export type StokProductsMinAggregateInputType = {
    id?: true
    stock_code?: true
    create_date?: true
    update_date?: true
    user_crate?: true
    user_update?: true
  }

  export type StokProductsMaxAggregateInputType = {
    id?: true
    stock_code?: true
    create_date?: true
    update_date?: true
    user_crate?: true
    user_update?: true
  }

  export type StokProductsCountAggregateInputType = {
    id?: true
    stock_code?: true
    create_date?: true
    update_date?: true
    user_crate?: true
    user_update?: true
    _all?: true
  }

  export type StokProductsAggregateArgs = {
    /**
     * Filter which StokProducts to aggregate.
     * 
    **/
    where?: StokProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StokProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<StokProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StokProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StokProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StokProducts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StokProducts
    **/
    _count?: true | StokProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StokProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StokProductsMaxAggregateInputType
  }

  export type GetStokProductsAggregateType<T extends StokProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateStokProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStokProducts[P]>
      : GetScalarType<T[P], AggregateStokProducts[P]>
  }




  export type StokProductsGroupByArgs = {
    where?: StokProductsWhereInput
    orderBy?: Enumerable<StokProductsOrderByWithAggregationInput>
    by: Array<StokProductsScalarFieldEnum>
    having?: StokProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StokProductsCountAggregateInputType | true
    _min?: StokProductsMinAggregateInputType
    _max?: StokProductsMaxAggregateInputType
  }


  export type StokProductsGroupByOutputType = {
    id: string
    stock_code: string
    create_date: Date
    update_date: Date
    user_crate: string
    user_update: string
    _count: StokProductsCountAggregateOutputType | null
    _min: StokProductsMinAggregateOutputType | null
    _max: StokProductsMaxAggregateOutputType | null
  }

  type GetStokProductsGroupByPayload<T extends StokProductsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StokProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StokProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StokProductsGroupByOutputType[P]>
            : GetScalarType<T[P], StokProductsGroupByOutputType[P]>
        }
      >
    >


  export type StokProductsSelect = {
    id?: boolean
    stock_code?: boolean
    Detail?: boolean | StokProductsDetailArgs
    create_date?: boolean
    update_date?: boolean
    user_crate?: boolean
    user_update?: boolean
    _count?: boolean | StokProductsCountOutputTypeArgs
  }


  export type StokProductsInclude = {
    Detail?: boolean | StokProductsDetailArgs
    _count?: boolean | StokProductsCountOutputTypeArgs
  } 

  export type StokProductsGetPayload<S extends boolean | null | undefined | StokProductsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StokProducts :
    S extends undefined ? never :
    S extends { include: any } & (StokProductsArgs | StokProductsFindManyArgs)
    ? StokProducts  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Detail' ? Array < StokProductsDetailGetPayload<S['include'][P]>>  :
        P extends '_count' ? StokProductsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (StokProductsArgs | StokProductsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Detail' ? Array < StokProductsDetailGetPayload<S['select'][P]>>  :
        P extends '_count' ? StokProductsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof StokProducts ? StokProducts[P] : never
  } 
      : StokProducts


  type StokProductsCountArgs = Merge<
    Omit<StokProductsFindManyArgs, 'select' | 'include'> & {
      select?: StokProductsCountAggregateInputType | true
    }
  >

  export interface StokProductsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one StokProducts that matches the filter.
     * @param {StokProductsFindUniqueArgs} args - Arguments to find a StokProducts
     * @example
     * // Get one StokProducts
     * const stokProducts = await prisma.stokProducts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StokProductsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StokProductsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'StokProducts'> extends True ? Prisma__StokProductsClient<StokProductsGetPayload<T>> : Prisma__StokProductsClient<StokProductsGetPayload<T> | null, null>

    /**
     * Find one StokProducts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StokProductsFindUniqueOrThrowArgs} args - Arguments to find a StokProducts
     * @example
     * // Get one StokProducts
     * const stokProducts = await prisma.stokProducts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StokProductsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StokProductsFindUniqueOrThrowArgs>
    ): Prisma__StokProductsClient<StokProductsGetPayload<T>>

    /**
     * Find the first StokProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokProductsFindFirstArgs} args - Arguments to find a StokProducts
     * @example
     * // Get one StokProducts
     * const stokProducts = await prisma.stokProducts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StokProductsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StokProductsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'StokProducts'> extends True ? Prisma__StokProductsClient<StokProductsGetPayload<T>> : Prisma__StokProductsClient<StokProductsGetPayload<T> | null, null>

    /**
     * Find the first StokProducts that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokProductsFindFirstOrThrowArgs} args - Arguments to find a StokProducts
     * @example
     * // Get one StokProducts
     * const stokProducts = await prisma.stokProducts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StokProductsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StokProductsFindFirstOrThrowArgs>
    ): Prisma__StokProductsClient<StokProductsGetPayload<T>>

    /**
     * Find zero or more StokProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokProductsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StokProducts
     * const stokProducts = await prisma.stokProducts.findMany()
     * 
     * // Get first 10 StokProducts
     * const stokProducts = await prisma.stokProducts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stokProductsWithIdOnly = await prisma.stokProducts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StokProductsFindManyArgs>(
      args?: SelectSubset<T, StokProductsFindManyArgs>
    ): PrismaPromise<Array<StokProductsGetPayload<T>>>

    /**
     * Create a StokProducts.
     * @param {StokProductsCreateArgs} args - Arguments to create a StokProducts.
     * @example
     * // Create one StokProducts
     * const StokProducts = await prisma.stokProducts.create({
     *   data: {
     *     // ... data to create a StokProducts
     *   }
     * })
     * 
    **/
    create<T extends StokProductsCreateArgs>(
      args: SelectSubset<T, StokProductsCreateArgs>
    ): Prisma__StokProductsClient<StokProductsGetPayload<T>>

    /**
     * Create many StokProducts.
     *     @param {StokProductsCreateManyArgs} args - Arguments to create many StokProducts.
     *     @example
     *     // Create many StokProducts
     *     const stokProducts = await prisma.stokProducts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StokProductsCreateManyArgs>(
      args?: SelectSubset<T, StokProductsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a StokProducts.
     * @param {StokProductsDeleteArgs} args - Arguments to delete one StokProducts.
     * @example
     * // Delete one StokProducts
     * const StokProducts = await prisma.stokProducts.delete({
     *   where: {
     *     // ... filter to delete one StokProducts
     *   }
     * })
     * 
    **/
    delete<T extends StokProductsDeleteArgs>(
      args: SelectSubset<T, StokProductsDeleteArgs>
    ): Prisma__StokProductsClient<StokProductsGetPayload<T>>

    /**
     * Update one StokProducts.
     * @param {StokProductsUpdateArgs} args - Arguments to update one StokProducts.
     * @example
     * // Update one StokProducts
     * const stokProducts = await prisma.stokProducts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StokProductsUpdateArgs>(
      args: SelectSubset<T, StokProductsUpdateArgs>
    ): Prisma__StokProductsClient<StokProductsGetPayload<T>>

    /**
     * Delete zero or more StokProducts.
     * @param {StokProductsDeleteManyArgs} args - Arguments to filter StokProducts to delete.
     * @example
     * // Delete a few StokProducts
     * const { count } = await prisma.stokProducts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StokProductsDeleteManyArgs>(
      args?: SelectSubset<T, StokProductsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more StokProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StokProducts
     * const stokProducts = await prisma.stokProducts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StokProductsUpdateManyArgs>(
      args: SelectSubset<T, StokProductsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one StokProducts.
     * @param {StokProductsUpsertArgs} args - Arguments to update or create a StokProducts.
     * @example
     * // Update or create a StokProducts
     * const stokProducts = await prisma.stokProducts.upsert({
     *   create: {
     *     // ... data to create a StokProducts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StokProducts we want to update
     *   }
     * })
    **/
    upsert<T extends StokProductsUpsertArgs>(
      args: SelectSubset<T, StokProductsUpsertArgs>
    ): Prisma__StokProductsClient<StokProductsGetPayload<T>>

    /**
     * Count the number of StokProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokProductsCountArgs} args - Arguments to filter StokProducts to count.
     * @example
     * // Count the number of StokProducts
     * const count = await prisma.stokProducts.count({
     *   where: {
     *     // ... the filter for the StokProducts we want to count
     *   }
     * })
    **/
    count<T extends StokProductsCountArgs>(
      args?: Subset<T, StokProductsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StokProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StokProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StokProductsAggregateArgs>(args: Subset<T, StokProductsAggregateArgs>): PrismaPromise<GetStokProductsAggregateType<T>>

    /**
     * Group by StokProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokProductsGroupByArgs} args - Group by arguments.
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
      T extends StokProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StokProductsGroupByArgs['orderBy'] }
        : { orderBy?: StokProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StokProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStokProductsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for StokProducts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StokProductsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Detail<T extends StokProductsDetailArgs= {}>(args?: Subset<T, StokProductsDetailArgs>): PrismaPromise<Array<StokProductsDetailGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * StokProducts base type for findUnique actions
   */
  export type StokProductsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the StokProducts
     * 
    **/
    select?: StokProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsInclude | null
    /**
     * Filter, which StokProducts to fetch.
     * 
    **/
    where: StokProductsWhereUniqueInput
  }

  /**
   * StokProducts findUnique
   */
  export interface StokProductsFindUniqueArgs extends StokProductsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StokProducts findUniqueOrThrow
   */
  export type StokProductsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the StokProducts
     * 
    **/
    select?: StokProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsInclude | null
    /**
     * Filter, which StokProducts to fetch.
     * 
    **/
    where: StokProductsWhereUniqueInput
  }


  /**
   * StokProducts base type for findFirst actions
   */
  export type StokProductsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the StokProducts
     * 
    **/
    select?: StokProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsInclude | null
    /**
     * Filter, which StokProducts to fetch.
     * 
    **/
    where?: StokProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StokProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<StokProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StokProducts.
     * 
    **/
    cursor?: StokProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StokProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StokProducts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StokProducts.
     * 
    **/
    distinct?: Enumerable<StokProductsScalarFieldEnum>
  }

  /**
   * StokProducts findFirst
   */
  export interface StokProductsFindFirstArgs extends StokProductsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StokProducts findFirstOrThrow
   */
  export type StokProductsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the StokProducts
     * 
    **/
    select?: StokProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsInclude | null
    /**
     * Filter, which StokProducts to fetch.
     * 
    **/
    where?: StokProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StokProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<StokProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StokProducts.
     * 
    **/
    cursor?: StokProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StokProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StokProducts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StokProducts.
     * 
    **/
    distinct?: Enumerable<StokProductsScalarFieldEnum>
  }


  /**
   * StokProducts findMany
   */
  export type StokProductsFindManyArgs = {
    /**
     * Select specific fields to fetch from the StokProducts
     * 
    **/
    select?: StokProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsInclude | null
    /**
     * Filter, which StokProducts to fetch.
     * 
    **/
    where?: StokProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StokProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<StokProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StokProducts.
     * 
    **/
    cursor?: StokProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StokProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StokProducts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StokProductsScalarFieldEnum>
  }


  /**
   * StokProducts create
   */
  export type StokProductsCreateArgs = {
    /**
     * Select specific fields to fetch from the StokProducts
     * 
    **/
    select?: StokProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsInclude | null
    /**
     * The data needed to create a StokProducts.
     * 
    **/
    data: XOR<StokProductsCreateInput, StokProductsUncheckedCreateInput>
  }


  /**
   * StokProducts createMany
   */
  export type StokProductsCreateManyArgs = {
    /**
     * The data used to create many StokProducts.
     * 
    **/
    data: Enumerable<StokProductsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * StokProducts update
   */
  export type StokProductsUpdateArgs = {
    /**
     * Select specific fields to fetch from the StokProducts
     * 
    **/
    select?: StokProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsInclude | null
    /**
     * The data needed to update a StokProducts.
     * 
    **/
    data: XOR<StokProductsUpdateInput, StokProductsUncheckedUpdateInput>
    /**
     * Choose, which StokProducts to update.
     * 
    **/
    where: StokProductsWhereUniqueInput
  }


  /**
   * StokProducts updateMany
   */
  export type StokProductsUpdateManyArgs = {
    /**
     * The data used to update StokProducts.
     * 
    **/
    data: XOR<StokProductsUpdateManyMutationInput, StokProductsUncheckedUpdateManyInput>
    /**
     * Filter which StokProducts to update
     * 
    **/
    where?: StokProductsWhereInput
  }


  /**
   * StokProducts upsert
   */
  export type StokProductsUpsertArgs = {
    /**
     * Select specific fields to fetch from the StokProducts
     * 
    **/
    select?: StokProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsInclude | null
    /**
     * The filter to search for the StokProducts to update in case it exists.
     * 
    **/
    where: StokProductsWhereUniqueInput
    /**
     * In case the StokProducts found by the `where` argument doesn't exist, create a new StokProducts with this data.
     * 
    **/
    create: XOR<StokProductsCreateInput, StokProductsUncheckedCreateInput>
    /**
     * In case the StokProducts was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StokProductsUpdateInput, StokProductsUncheckedUpdateInput>
  }


  /**
   * StokProducts delete
   */
  export type StokProductsDeleteArgs = {
    /**
     * Select specific fields to fetch from the StokProducts
     * 
    **/
    select?: StokProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsInclude | null
    /**
     * Filter which StokProducts to delete.
     * 
    **/
    where: StokProductsWhereUniqueInput
  }


  /**
   * StokProducts deleteMany
   */
  export type StokProductsDeleteManyArgs = {
    /**
     * Filter which StokProducts to delete
     * 
    **/
    where?: StokProductsWhereInput
  }


  /**
   * StokProducts.Detail
   */
  export type StokProductsDetailArgs = {
    /**
     * Select specific fields to fetch from the StokProductsDetail
     * 
    **/
    select?: StokProductsDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsDetailInclude | null
    where?: StokProductsDetailWhereInput
    orderBy?: Enumerable<StokProductsDetailOrderByWithRelationInput>
    cursor?: StokProductsDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<StokProductsDetailScalarFieldEnum>
  }


  /**
   * StokProducts without action
   */
  export type StokProductsArgs = {
    /**
     * Select specific fields to fetch from the StokProducts
     * 
    **/
    select?: StokProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsInclude | null
  }



  /**
   * Model StokProductsDetail
   */


  export type AggregateStokProductsDetail = {
    _count: StokProductsDetailCountAggregateOutputType | null
    _avg: StokProductsDetailAvgAggregateOutputType | null
    _sum: StokProductsDetailSumAggregateOutputType | null
    _min: StokProductsDetailMinAggregateOutputType | null
    _max: StokProductsDetailMaxAggregateOutputType | null
  }

  export type StokProductsDetailAvgAggregateOutputType = {
    amont_new_stock: number | null
    cost_new: number | null
    amont_old_stock: number | null
    cost_old: number | null
  }

  export type StokProductsDetailSumAggregateOutputType = {
    amont_new_stock: number | null
    cost_new: number | null
    amont_old_stock: number | null
    cost_old: number | null
  }

  export type StokProductsDetailMinAggregateOutputType = {
    id: string | null
    stokProductsId: string | null
    productsId: string | null
    amont_new_stock: number | null
    cost_new: number | null
    amont_old_stock: number | null
    cost_old: number | null
  }

  export type StokProductsDetailMaxAggregateOutputType = {
    id: string | null
    stokProductsId: string | null
    productsId: string | null
    amont_new_stock: number | null
    cost_new: number | null
    amont_old_stock: number | null
    cost_old: number | null
  }

  export type StokProductsDetailCountAggregateOutputType = {
    id: number
    stokProductsId: number
    productsId: number
    amont_new_stock: number
    cost_new: number
    amont_old_stock: number
    cost_old: number
    _all: number
  }


  export type StokProductsDetailAvgAggregateInputType = {
    amont_new_stock?: true
    cost_new?: true
    amont_old_stock?: true
    cost_old?: true
  }

  export type StokProductsDetailSumAggregateInputType = {
    amont_new_stock?: true
    cost_new?: true
    amont_old_stock?: true
    cost_old?: true
  }

  export type StokProductsDetailMinAggregateInputType = {
    id?: true
    stokProductsId?: true
    productsId?: true
    amont_new_stock?: true
    cost_new?: true
    amont_old_stock?: true
    cost_old?: true
  }

  export type StokProductsDetailMaxAggregateInputType = {
    id?: true
    stokProductsId?: true
    productsId?: true
    amont_new_stock?: true
    cost_new?: true
    amont_old_stock?: true
    cost_old?: true
  }

  export type StokProductsDetailCountAggregateInputType = {
    id?: true
    stokProductsId?: true
    productsId?: true
    amont_new_stock?: true
    cost_new?: true
    amont_old_stock?: true
    cost_old?: true
    _all?: true
  }

  export type StokProductsDetailAggregateArgs = {
    /**
     * Filter which StokProductsDetail to aggregate.
     * 
    **/
    where?: StokProductsDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StokProductsDetails to fetch.
     * 
    **/
    orderBy?: Enumerable<StokProductsDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: StokProductsDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StokProductsDetails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StokProductsDetails.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StokProductsDetails
    **/
    _count?: true | StokProductsDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StokProductsDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StokProductsDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StokProductsDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StokProductsDetailMaxAggregateInputType
  }

  export type GetStokProductsDetailAggregateType<T extends StokProductsDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateStokProductsDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStokProductsDetail[P]>
      : GetScalarType<T[P], AggregateStokProductsDetail[P]>
  }




  export type StokProductsDetailGroupByArgs = {
    where?: StokProductsDetailWhereInput
    orderBy?: Enumerable<StokProductsDetailOrderByWithAggregationInput>
    by: Array<StokProductsDetailScalarFieldEnum>
    having?: StokProductsDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StokProductsDetailCountAggregateInputType | true
    _avg?: StokProductsDetailAvgAggregateInputType
    _sum?: StokProductsDetailSumAggregateInputType
    _min?: StokProductsDetailMinAggregateInputType
    _max?: StokProductsDetailMaxAggregateInputType
  }


  export type StokProductsDetailGroupByOutputType = {
    id: string
    stokProductsId: string
    productsId: string
    amont_new_stock: number
    cost_new: number
    amont_old_stock: number
    cost_old: number
    _count: StokProductsDetailCountAggregateOutputType | null
    _avg: StokProductsDetailAvgAggregateOutputType | null
    _sum: StokProductsDetailSumAggregateOutputType | null
    _min: StokProductsDetailMinAggregateOutputType | null
    _max: StokProductsDetailMaxAggregateOutputType | null
  }

  type GetStokProductsDetailGroupByPayload<T extends StokProductsDetailGroupByArgs> = PrismaPromise<
    Array<
      PickArray<StokProductsDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StokProductsDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StokProductsDetailGroupByOutputType[P]>
            : GetScalarType<T[P], StokProductsDetailGroupByOutputType[P]>
        }
      >
    >


  export type StokProductsDetailSelect = {
    id?: boolean
    StokProducts?: boolean | StokProductsArgs
    stokProductsId?: boolean
    Products?: boolean | ProductsArgs
    productsId?: boolean
    amont_new_stock?: boolean
    cost_new?: boolean
    amont_old_stock?: boolean
    cost_old?: boolean
  }


  export type StokProductsDetailInclude = {
    StokProducts?: boolean | StokProductsArgs
    Products?: boolean | ProductsArgs
  } 

  export type StokProductsDetailGetPayload<S extends boolean | null | undefined | StokProductsDetailArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? StokProductsDetail :
    S extends undefined ? never :
    S extends { include: any } & (StokProductsDetailArgs | StokProductsDetailFindManyArgs)
    ? StokProductsDetail  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'StokProducts' ? StokProductsGetPayload<S['include'][P]> :
        P extends 'Products' ? ProductsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (StokProductsDetailArgs | StokProductsDetailFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'StokProducts' ? StokProductsGetPayload<S['select'][P]> :
        P extends 'Products' ? ProductsGetPayload<S['select'][P]> :  P extends keyof StokProductsDetail ? StokProductsDetail[P] : never
  } 
      : StokProductsDetail


  type StokProductsDetailCountArgs = Merge<
    Omit<StokProductsDetailFindManyArgs, 'select' | 'include'> & {
      select?: StokProductsDetailCountAggregateInputType | true
    }
  >

  export interface StokProductsDetailDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one StokProductsDetail that matches the filter.
     * @param {StokProductsDetailFindUniqueArgs} args - Arguments to find a StokProductsDetail
     * @example
     * // Get one StokProductsDetail
     * const stokProductsDetail = await prisma.stokProductsDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StokProductsDetailFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, StokProductsDetailFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'StokProductsDetail'> extends True ? Prisma__StokProductsDetailClient<StokProductsDetailGetPayload<T>> : Prisma__StokProductsDetailClient<StokProductsDetailGetPayload<T> | null, null>

    /**
     * Find one StokProductsDetail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StokProductsDetailFindUniqueOrThrowArgs} args - Arguments to find a StokProductsDetail
     * @example
     * // Get one StokProductsDetail
     * const stokProductsDetail = await prisma.stokProductsDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StokProductsDetailFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, StokProductsDetailFindUniqueOrThrowArgs>
    ): Prisma__StokProductsDetailClient<StokProductsDetailGetPayload<T>>

    /**
     * Find the first StokProductsDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokProductsDetailFindFirstArgs} args - Arguments to find a StokProductsDetail
     * @example
     * // Get one StokProductsDetail
     * const stokProductsDetail = await prisma.stokProductsDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StokProductsDetailFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, StokProductsDetailFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'StokProductsDetail'> extends True ? Prisma__StokProductsDetailClient<StokProductsDetailGetPayload<T>> : Prisma__StokProductsDetailClient<StokProductsDetailGetPayload<T> | null, null>

    /**
     * Find the first StokProductsDetail that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokProductsDetailFindFirstOrThrowArgs} args - Arguments to find a StokProductsDetail
     * @example
     * // Get one StokProductsDetail
     * const stokProductsDetail = await prisma.stokProductsDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StokProductsDetailFindFirstOrThrowArgs>(
      args?: SelectSubset<T, StokProductsDetailFindFirstOrThrowArgs>
    ): Prisma__StokProductsDetailClient<StokProductsDetailGetPayload<T>>

    /**
     * Find zero or more StokProductsDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokProductsDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StokProductsDetails
     * const stokProductsDetails = await prisma.stokProductsDetail.findMany()
     * 
     * // Get first 10 StokProductsDetails
     * const stokProductsDetails = await prisma.stokProductsDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stokProductsDetailWithIdOnly = await prisma.stokProductsDetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StokProductsDetailFindManyArgs>(
      args?: SelectSubset<T, StokProductsDetailFindManyArgs>
    ): PrismaPromise<Array<StokProductsDetailGetPayload<T>>>

    /**
     * Create a StokProductsDetail.
     * @param {StokProductsDetailCreateArgs} args - Arguments to create a StokProductsDetail.
     * @example
     * // Create one StokProductsDetail
     * const StokProductsDetail = await prisma.stokProductsDetail.create({
     *   data: {
     *     // ... data to create a StokProductsDetail
     *   }
     * })
     * 
    **/
    create<T extends StokProductsDetailCreateArgs>(
      args: SelectSubset<T, StokProductsDetailCreateArgs>
    ): Prisma__StokProductsDetailClient<StokProductsDetailGetPayload<T>>

    /**
     * Create many StokProductsDetails.
     *     @param {StokProductsDetailCreateManyArgs} args - Arguments to create many StokProductsDetails.
     *     @example
     *     // Create many StokProductsDetails
     *     const stokProductsDetail = await prisma.stokProductsDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StokProductsDetailCreateManyArgs>(
      args?: SelectSubset<T, StokProductsDetailCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a StokProductsDetail.
     * @param {StokProductsDetailDeleteArgs} args - Arguments to delete one StokProductsDetail.
     * @example
     * // Delete one StokProductsDetail
     * const StokProductsDetail = await prisma.stokProductsDetail.delete({
     *   where: {
     *     // ... filter to delete one StokProductsDetail
     *   }
     * })
     * 
    **/
    delete<T extends StokProductsDetailDeleteArgs>(
      args: SelectSubset<T, StokProductsDetailDeleteArgs>
    ): Prisma__StokProductsDetailClient<StokProductsDetailGetPayload<T>>

    /**
     * Update one StokProductsDetail.
     * @param {StokProductsDetailUpdateArgs} args - Arguments to update one StokProductsDetail.
     * @example
     * // Update one StokProductsDetail
     * const stokProductsDetail = await prisma.stokProductsDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StokProductsDetailUpdateArgs>(
      args: SelectSubset<T, StokProductsDetailUpdateArgs>
    ): Prisma__StokProductsDetailClient<StokProductsDetailGetPayload<T>>

    /**
     * Delete zero or more StokProductsDetails.
     * @param {StokProductsDetailDeleteManyArgs} args - Arguments to filter StokProductsDetails to delete.
     * @example
     * // Delete a few StokProductsDetails
     * const { count } = await prisma.stokProductsDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StokProductsDetailDeleteManyArgs>(
      args?: SelectSubset<T, StokProductsDetailDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more StokProductsDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokProductsDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StokProductsDetails
     * const stokProductsDetail = await prisma.stokProductsDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StokProductsDetailUpdateManyArgs>(
      args: SelectSubset<T, StokProductsDetailUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one StokProductsDetail.
     * @param {StokProductsDetailUpsertArgs} args - Arguments to update or create a StokProductsDetail.
     * @example
     * // Update or create a StokProductsDetail
     * const stokProductsDetail = await prisma.stokProductsDetail.upsert({
     *   create: {
     *     // ... data to create a StokProductsDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StokProductsDetail we want to update
     *   }
     * })
    **/
    upsert<T extends StokProductsDetailUpsertArgs>(
      args: SelectSubset<T, StokProductsDetailUpsertArgs>
    ): Prisma__StokProductsDetailClient<StokProductsDetailGetPayload<T>>

    /**
     * Count the number of StokProductsDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokProductsDetailCountArgs} args - Arguments to filter StokProductsDetails to count.
     * @example
     * // Count the number of StokProductsDetails
     * const count = await prisma.stokProductsDetail.count({
     *   where: {
     *     // ... the filter for the StokProductsDetails we want to count
     *   }
     * })
    **/
    count<T extends StokProductsDetailCountArgs>(
      args?: Subset<T, StokProductsDetailCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StokProductsDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StokProductsDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokProductsDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StokProductsDetailAggregateArgs>(args: Subset<T, StokProductsDetailAggregateArgs>): PrismaPromise<GetStokProductsDetailAggregateType<T>>

    /**
     * Group by StokProductsDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokProductsDetailGroupByArgs} args - Group by arguments.
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
      T extends StokProductsDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StokProductsDetailGroupByArgs['orderBy'] }
        : { orderBy?: StokProductsDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StokProductsDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStokProductsDetailGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for StokProductsDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__StokProductsDetailClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    StokProducts<T extends StokProductsArgs= {}>(args?: Subset<T, StokProductsArgs>): Prisma__StokProductsClient<StokProductsGetPayload<T> | Null>;

    Products<T extends ProductsArgs= {}>(args?: Subset<T, ProductsArgs>): Prisma__ProductsClient<ProductsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * StokProductsDetail base type for findUnique actions
   */
  export type StokProductsDetailFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the StokProductsDetail
     * 
    **/
    select?: StokProductsDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsDetailInclude | null
    /**
     * Filter, which StokProductsDetail to fetch.
     * 
    **/
    where: StokProductsDetailWhereUniqueInput
  }

  /**
   * StokProductsDetail findUnique
   */
  export interface StokProductsDetailFindUniqueArgs extends StokProductsDetailFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StokProductsDetail findUniqueOrThrow
   */
  export type StokProductsDetailFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the StokProductsDetail
     * 
    **/
    select?: StokProductsDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsDetailInclude | null
    /**
     * Filter, which StokProductsDetail to fetch.
     * 
    **/
    where: StokProductsDetailWhereUniqueInput
  }


  /**
   * StokProductsDetail base type for findFirst actions
   */
  export type StokProductsDetailFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the StokProductsDetail
     * 
    **/
    select?: StokProductsDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsDetailInclude | null
    /**
     * Filter, which StokProductsDetail to fetch.
     * 
    **/
    where?: StokProductsDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StokProductsDetails to fetch.
     * 
    **/
    orderBy?: Enumerable<StokProductsDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StokProductsDetails.
     * 
    **/
    cursor?: StokProductsDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StokProductsDetails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StokProductsDetails.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StokProductsDetails.
     * 
    **/
    distinct?: Enumerable<StokProductsDetailScalarFieldEnum>
  }

  /**
   * StokProductsDetail findFirst
   */
  export interface StokProductsDetailFindFirstArgs extends StokProductsDetailFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * StokProductsDetail findFirstOrThrow
   */
  export type StokProductsDetailFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the StokProductsDetail
     * 
    **/
    select?: StokProductsDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsDetailInclude | null
    /**
     * Filter, which StokProductsDetail to fetch.
     * 
    **/
    where?: StokProductsDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StokProductsDetails to fetch.
     * 
    **/
    orderBy?: Enumerable<StokProductsDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StokProductsDetails.
     * 
    **/
    cursor?: StokProductsDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StokProductsDetails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StokProductsDetails.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StokProductsDetails.
     * 
    **/
    distinct?: Enumerable<StokProductsDetailScalarFieldEnum>
  }


  /**
   * StokProductsDetail findMany
   */
  export type StokProductsDetailFindManyArgs = {
    /**
     * Select specific fields to fetch from the StokProductsDetail
     * 
    **/
    select?: StokProductsDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsDetailInclude | null
    /**
     * Filter, which StokProductsDetails to fetch.
     * 
    **/
    where?: StokProductsDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StokProductsDetails to fetch.
     * 
    **/
    orderBy?: Enumerable<StokProductsDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StokProductsDetails.
     * 
    **/
    cursor?: StokProductsDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StokProductsDetails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StokProductsDetails.
     * 
    **/
    skip?: number
    distinct?: Enumerable<StokProductsDetailScalarFieldEnum>
  }


  /**
   * StokProductsDetail create
   */
  export type StokProductsDetailCreateArgs = {
    /**
     * Select specific fields to fetch from the StokProductsDetail
     * 
    **/
    select?: StokProductsDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsDetailInclude | null
    /**
     * The data needed to create a StokProductsDetail.
     * 
    **/
    data: XOR<StokProductsDetailCreateInput, StokProductsDetailUncheckedCreateInput>
  }


  /**
   * StokProductsDetail createMany
   */
  export type StokProductsDetailCreateManyArgs = {
    /**
     * The data used to create many StokProductsDetails.
     * 
    **/
    data: Enumerable<StokProductsDetailCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * StokProductsDetail update
   */
  export type StokProductsDetailUpdateArgs = {
    /**
     * Select specific fields to fetch from the StokProductsDetail
     * 
    **/
    select?: StokProductsDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsDetailInclude | null
    /**
     * The data needed to update a StokProductsDetail.
     * 
    **/
    data: XOR<StokProductsDetailUpdateInput, StokProductsDetailUncheckedUpdateInput>
    /**
     * Choose, which StokProductsDetail to update.
     * 
    **/
    where: StokProductsDetailWhereUniqueInput
  }


  /**
   * StokProductsDetail updateMany
   */
  export type StokProductsDetailUpdateManyArgs = {
    /**
     * The data used to update StokProductsDetails.
     * 
    **/
    data: XOR<StokProductsDetailUpdateManyMutationInput, StokProductsDetailUncheckedUpdateManyInput>
    /**
     * Filter which StokProductsDetails to update
     * 
    **/
    where?: StokProductsDetailWhereInput
  }


  /**
   * StokProductsDetail upsert
   */
  export type StokProductsDetailUpsertArgs = {
    /**
     * Select specific fields to fetch from the StokProductsDetail
     * 
    **/
    select?: StokProductsDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsDetailInclude | null
    /**
     * The filter to search for the StokProductsDetail to update in case it exists.
     * 
    **/
    where: StokProductsDetailWhereUniqueInput
    /**
     * In case the StokProductsDetail found by the `where` argument doesn't exist, create a new StokProductsDetail with this data.
     * 
    **/
    create: XOR<StokProductsDetailCreateInput, StokProductsDetailUncheckedCreateInput>
    /**
     * In case the StokProductsDetail was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<StokProductsDetailUpdateInput, StokProductsDetailUncheckedUpdateInput>
  }


  /**
   * StokProductsDetail delete
   */
  export type StokProductsDetailDeleteArgs = {
    /**
     * Select specific fields to fetch from the StokProductsDetail
     * 
    **/
    select?: StokProductsDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsDetailInclude | null
    /**
     * Filter which StokProductsDetail to delete.
     * 
    **/
    where: StokProductsDetailWhereUniqueInput
  }


  /**
   * StokProductsDetail deleteMany
   */
  export type StokProductsDetailDeleteManyArgs = {
    /**
     * Filter which StokProductsDetails to delete
     * 
    **/
    where?: StokProductsDetailWhereInput
  }


  /**
   * StokProductsDetail without action
   */
  export type StokProductsDetailArgs = {
    /**
     * Select specific fields to fetch from the StokProductsDetail
     * 
    **/
    select?: StokProductsDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: StokProductsDetailInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sku: 'sku',
    bar_code: 'bar_code',
    amount: 'amount',
    cost: 'cost',
    price: 'price',
    create_date: 'create_date',
    update_date: 'update_date',
    deleted_date: 'deleted_date',
    is_deleted: 'is_deleted',
    user_create: 'user_create',
    user_update: 'user_update'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StokProductsDetailScalarFieldEnum: {
    id: 'id',
    stokProductsId: 'stokProductsId',
    productsId: 'productsId',
    amont_new_stock: 'amont_new_stock',
    cost_new: 'cost_new',
    amont_old_stock: 'amont_old_stock',
    cost_old: 'cost_old'
  };

  export type StokProductsDetailScalarFieldEnum = (typeof StokProductsDetailScalarFieldEnum)[keyof typeof StokProductsDetailScalarFieldEnum]


  export const StokProductsScalarFieldEnum: {
    id: 'id',
    stock_code: 'stock_code',
    create_date: 'create_date',
    update_date: 'update_date',
    user_crate: 'user_crate',
    user_update: 'user_update'
  };

  export type StokProductsScalarFieldEnum = (typeof StokProductsScalarFieldEnum)[keyof typeof StokProductsScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type ProductsWhereInput = {
    AND?: Enumerable<ProductsWhereInput>
    OR?: Enumerable<ProductsWhereInput>
    NOT?: Enumerable<ProductsWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    sku?: StringFilter | string
    bar_code?: StringFilter | string
    amount?: IntFilter | number
    cost?: IntFilter | number
    price?: IntFilter | number
    create_date?: DateTimeFilter | Date | string
    update_date?: DateTimeFilter | Date | string
    deleted_date?: DateTimeNullableFilter | Date | string | null
    is_deleted?: BoolFilter | boolean
    user_create?: StringFilter | string
    user_update?: StringFilter | string
    StockDetail?: StokProductsDetailListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    bar_code?: SortOrder
    amount?: SortOrder
    cost?: SortOrder
    price?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    deleted_date?: SortOrder
    is_deleted?: SortOrder
    user_create?: SortOrder
    user_update?: SortOrder
    StockDetail?: StokProductsDetailOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = {
    id?: string
    name?: string
    sku?: string
    bar_code?: string
  }

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    bar_code?: SortOrder
    amount?: SortOrder
    cost?: SortOrder
    price?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    deleted_date?: SortOrder
    is_deleted?: SortOrder
    user_create?: SortOrder
    user_update?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    sku?: StringWithAggregatesFilter | string
    bar_code?: StringWithAggregatesFilter | string
    amount?: IntWithAggregatesFilter | number
    cost?: IntWithAggregatesFilter | number
    price?: IntWithAggregatesFilter | number
    create_date?: DateTimeWithAggregatesFilter | Date | string
    update_date?: DateTimeWithAggregatesFilter | Date | string
    deleted_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    is_deleted?: BoolWithAggregatesFilter | boolean
    user_create?: StringWithAggregatesFilter | string
    user_update?: StringWithAggregatesFilter | string
  }

  export type StokProductsWhereInput = {
    AND?: Enumerable<StokProductsWhereInput>
    OR?: Enumerable<StokProductsWhereInput>
    NOT?: Enumerable<StokProductsWhereInput>
    id?: StringFilter | string
    stock_code?: StringFilter | string
    Detail?: StokProductsDetailListRelationFilter
    create_date?: DateTimeFilter | Date | string
    update_date?: DateTimeFilter | Date | string
    user_crate?: StringFilter | string
    user_update?: StringFilter | string
  }

  export type StokProductsOrderByWithRelationInput = {
    id?: SortOrder
    stock_code?: SortOrder
    Detail?: StokProductsDetailOrderByRelationAggregateInput
    create_date?: SortOrder
    update_date?: SortOrder
    user_crate?: SortOrder
    user_update?: SortOrder
  }

  export type StokProductsWhereUniqueInput = {
    id?: string
    stock_code?: string
  }

  export type StokProductsOrderByWithAggregationInput = {
    id?: SortOrder
    stock_code?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    user_crate?: SortOrder
    user_update?: SortOrder
    _count?: StokProductsCountOrderByAggregateInput
    _max?: StokProductsMaxOrderByAggregateInput
    _min?: StokProductsMinOrderByAggregateInput
  }

  export type StokProductsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StokProductsScalarWhereWithAggregatesInput>
    OR?: Enumerable<StokProductsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StokProductsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    stock_code?: StringWithAggregatesFilter | string
    create_date?: DateTimeWithAggregatesFilter | Date | string
    update_date?: DateTimeWithAggregatesFilter | Date | string
    user_crate?: StringWithAggregatesFilter | string
    user_update?: StringWithAggregatesFilter | string
  }

  export type StokProductsDetailWhereInput = {
    AND?: Enumerable<StokProductsDetailWhereInput>
    OR?: Enumerable<StokProductsDetailWhereInput>
    NOT?: Enumerable<StokProductsDetailWhereInput>
    id?: StringFilter | string
    StokProducts?: XOR<StokProductsRelationFilter, StokProductsWhereInput>
    stokProductsId?: StringFilter | string
    Products?: XOR<ProductsRelationFilter, ProductsWhereInput>
    productsId?: StringFilter | string
    amont_new_stock?: IntFilter | number
    cost_new?: IntFilter | number
    amont_old_stock?: IntFilter | number
    cost_old?: IntFilter | number
  }

  export type StokProductsDetailOrderByWithRelationInput = {
    id?: SortOrder
    StokProducts?: StokProductsOrderByWithRelationInput
    stokProductsId?: SortOrder
    Products?: ProductsOrderByWithRelationInput
    productsId?: SortOrder
    amont_new_stock?: SortOrder
    cost_new?: SortOrder
    amont_old_stock?: SortOrder
    cost_old?: SortOrder
  }

  export type StokProductsDetailWhereUniqueInput = {
    id?: string
  }

  export type StokProductsDetailOrderByWithAggregationInput = {
    id?: SortOrder
    stokProductsId?: SortOrder
    productsId?: SortOrder
    amont_new_stock?: SortOrder
    cost_new?: SortOrder
    amont_old_stock?: SortOrder
    cost_old?: SortOrder
    _count?: StokProductsDetailCountOrderByAggregateInput
    _avg?: StokProductsDetailAvgOrderByAggregateInput
    _max?: StokProductsDetailMaxOrderByAggregateInput
    _min?: StokProductsDetailMinOrderByAggregateInput
    _sum?: StokProductsDetailSumOrderByAggregateInput
  }

  export type StokProductsDetailScalarWhereWithAggregatesInput = {
    AND?: Enumerable<StokProductsDetailScalarWhereWithAggregatesInput>
    OR?: Enumerable<StokProductsDetailScalarWhereWithAggregatesInput>
    NOT?: Enumerable<StokProductsDetailScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    stokProductsId?: StringWithAggregatesFilter | string
    productsId?: StringWithAggregatesFilter | string
    amont_new_stock?: IntWithAggregatesFilter | number
    cost_new?: IntWithAggregatesFilter | number
    amont_old_stock?: IntWithAggregatesFilter | number
    cost_old?: IntWithAggregatesFilter | number
  }

  export type ProductsCreateInput = {
    id?: string
    name: string
    sku: string
    bar_code: string
    amount?: number
    cost?: number
    price?: number
    create_date?: Date | string
    update_date?: Date | string
    deleted_date?: Date | string | null
    is_deleted?: boolean
    user_create: string
    user_update: string
    StockDetail?: StokProductsDetailCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateInput = {
    id?: string
    name: string
    sku: string
    bar_code: string
    amount?: number
    cost?: number
    price?: number
    create_date?: Date | string
    update_date?: Date | string
    deleted_date?: Date | string | null
    is_deleted?: boolean
    user_create: string
    user_update: string
    StockDetail?: StokProductsDetailUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    bar_code?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_create?: StringFieldUpdateOperationsInput | string
    user_update?: StringFieldUpdateOperationsInput | string
    StockDetail?: StokProductsDetailUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    bar_code?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_create?: StringFieldUpdateOperationsInput | string
    user_update?: StringFieldUpdateOperationsInput | string
    StockDetail?: StokProductsDetailUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsCreateManyInput = {
    id?: string
    name: string
    sku: string
    bar_code: string
    amount?: number
    cost?: number
    price?: number
    create_date?: Date | string
    update_date?: Date | string
    deleted_date?: Date | string | null
    is_deleted?: boolean
    user_create: string
    user_update: string
  }

  export type ProductsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    bar_code?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_create?: StringFieldUpdateOperationsInput | string
    user_update?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    bar_code?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_create?: StringFieldUpdateOperationsInput | string
    user_update?: StringFieldUpdateOperationsInput | string
  }

  export type StokProductsCreateInput = {
    id?: string
    stock_code: string
    Detail?: StokProductsDetailCreateNestedManyWithoutStokProductsInput
    create_date?: Date | string
    update_date?: Date | string
    user_crate: string
    user_update: string
  }

  export type StokProductsUncheckedCreateInput = {
    id?: string
    stock_code: string
    Detail?: StokProductsDetailUncheckedCreateNestedManyWithoutStokProductsInput
    create_date?: Date | string
    update_date?: Date | string
    user_crate: string
    user_update: string
  }

  export type StokProductsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock_code?: StringFieldUpdateOperationsInput | string
    Detail?: StokProductsDetailUpdateManyWithoutStokProductsNestedInput
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_crate?: StringFieldUpdateOperationsInput | string
    user_update?: StringFieldUpdateOperationsInput | string
  }

  export type StokProductsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock_code?: StringFieldUpdateOperationsInput | string
    Detail?: StokProductsDetailUncheckedUpdateManyWithoutStokProductsNestedInput
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_crate?: StringFieldUpdateOperationsInput | string
    user_update?: StringFieldUpdateOperationsInput | string
  }

  export type StokProductsCreateManyInput = {
    id?: string
    stock_code: string
    create_date?: Date | string
    update_date?: Date | string
    user_crate: string
    user_update: string
  }

  export type StokProductsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock_code?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_crate?: StringFieldUpdateOperationsInput | string
    user_update?: StringFieldUpdateOperationsInput | string
  }

  export type StokProductsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock_code?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_crate?: StringFieldUpdateOperationsInput | string
    user_update?: StringFieldUpdateOperationsInput | string
  }

  export type StokProductsDetailCreateInput = {
    id?: string
    StokProducts: StokProductsCreateNestedOneWithoutDetailInput
    Products: ProductsCreateNestedOneWithoutStockDetailInput
    amont_new_stock: number
    cost_new: number
    amont_old_stock: number
    cost_old: number
  }

  export type StokProductsDetailUncheckedCreateInput = {
    id?: string
    stokProductsId: string
    productsId: string
    amont_new_stock: number
    cost_new: number
    amont_old_stock: number
    cost_old: number
  }

  export type StokProductsDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    StokProducts?: StokProductsUpdateOneRequiredWithoutDetailNestedInput
    Products?: ProductsUpdateOneRequiredWithoutStockDetailNestedInput
    amont_new_stock?: IntFieldUpdateOperationsInput | number
    cost_new?: IntFieldUpdateOperationsInput | number
    amont_old_stock?: IntFieldUpdateOperationsInput | number
    cost_old?: IntFieldUpdateOperationsInput | number
  }

  export type StokProductsDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stokProductsId?: StringFieldUpdateOperationsInput | string
    productsId?: StringFieldUpdateOperationsInput | string
    amont_new_stock?: IntFieldUpdateOperationsInput | number
    cost_new?: IntFieldUpdateOperationsInput | number
    amont_old_stock?: IntFieldUpdateOperationsInput | number
    cost_old?: IntFieldUpdateOperationsInput | number
  }

  export type StokProductsDetailCreateManyInput = {
    id?: string
    stokProductsId: string
    productsId: string
    amont_new_stock: number
    cost_new: number
    amont_old_stock: number
    cost_old: number
  }

  export type StokProductsDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amont_new_stock?: IntFieldUpdateOperationsInput | number
    cost_new?: IntFieldUpdateOperationsInput | number
    amont_old_stock?: IntFieldUpdateOperationsInput | number
    cost_old?: IntFieldUpdateOperationsInput | number
  }

  export type StokProductsDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stokProductsId?: StringFieldUpdateOperationsInput | string
    productsId?: StringFieldUpdateOperationsInput | string
    amont_new_stock?: IntFieldUpdateOperationsInput | number
    cost_new?: IntFieldUpdateOperationsInput | number
    amont_old_stock?: IntFieldUpdateOperationsInput | number
    cost_old?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type StokProductsDetailListRelationFilter = {
    every?: StokProductsDetailWhereInput
    some?: StokProductsDetailWhereInput
    none?: StokProductsDetailWhereInput
  }

  export type StokProductsDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    bar_code?: SortOrder
    amount?: SortOrder
    cost?: SortOrder
    price?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    deleted_date?: SortOrder
    is_deleted?: SortOrder
    user_create?: SortOrder
    user_update?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    amount?: SortOrder
    cost?: SortOrder
    price?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    bar_code?: SortOrder
    amount?: SortOrder
    cost?: SortOrder
    price?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    deleted_date?: SortOrder
    is_deleted?: SortOrder
    user_create?: SortOrder
    user_update?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    bar_code?: SortOrder
    amount?: SortOrder
    cost?: SortOrder
    price?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    deleted_date?: SortOrder
    is_deleted?: SortOrder
    user_create?: SortOrder
    user_update?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    amount?: SortOrder
    cost?: SortOrder
    price?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StokProductsCountOrderByAggregateInput = {
    id?: SortOrder
    stock_code?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    user_crate?: SortOrder
    user_update?: SortOrder
  }

  export type StokProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    stock_code?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    user_crate?: SortOrder
    user_update?: SortOrder
  }

  export type StokProductsMinOrderByAggregateInput = {
    id?: SortOrder
    stock_code?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    user_crate?: SortOrder
    user_update?: SortOrder
  }

  export type StokProductsRelationFilter = {
    is?: StokProductsWhereInput
    isNot?: StokProductsWhereInput
  }

  export type ProductsRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type StokProductsDetailCountOrderByAggregateInput = {
    id?: SortOrder
    stokProductsId?: SortOrder
    productsId?: SortOrder
    amont_new_stock?: SortOrder
    cost_new?: SortOrder
    amont_old_stock?: SortOrder
    cost_old?: SortOrder
  }

  export type StokProductsDetailAvgOrderByAggregateInput = {
    amont_new_stock?: SortOrder
    cost_new?: SortOrder
    amont_old_stock?: SortOrder
    cost_old?: SortOrder
  }

  export type StokProductsDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    stokProductsId?: SortOrder
    productsId?: SortOrder
    amont_new_stock?: SortOrder
    cost_new?: SortOrder
    amont_old_stock?: SortOrder
    cost_old?: SortOrder
  }

  export type StokProductsDetailMinOrderByAggregateInput = {
    id?: SortOrder
    stokProductsId?: SortOrder
    productsId?: SortOrder
    amont_new_stock?: SortOrder
    cost_new?: SortOrder
    amont_old_stock?: SortOrder
    cost_old?: SortOrder
  }

  export type StokProductsDetailSumOrderByAggregateInput = {
    amont_new_stock?: SortOrder
    cost_new?: SortOrder
    amont_old_stock?: SortOrder
    cost_old?: SortOrder
  }

  export type StokProductsDetailCreateNestedManyWithoutProductsInput = {
    create?: XOR<Enumerable<StokProductsDetailCreateWithoutProductsInput>, Enumerable<StokProductsDetailUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<StokProductsDetailCreateOrConnectWithoutProductsInput>
    createMany?: StokProductsDetailCreateManyProductsInputEnvelope
    connect?: Enumerable<StokProductsDetailWhereUniqueInput>
  }

  export type StokProductsDetailUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<Enumerable<StokProductsDetailCreateWithoutProductsInput>, Enumerable<StokProductsDetailUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<StokProductsDetailCreateOrConnectWithoutProductsInput>
    createMany?: StokProductsDetailCreateManyProductsInputEnvelope
    connect?: Enumerable<StokProductsDetailWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StokProductsDetailUpdateManyWithoutProductsNestedInput = {
    create?: XOR<Enumerable<StokProductsDetailCreateWithoutProductsInput>, Enumerable<StokProductsDetailUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<StokProductsDetailCreateOrConnectWithoutProductsInput>
    upsert?: Enumerable<StokProductsDetailUpsertWithWhereUniqueWithoutProductsInput>
    createMany?: StokProductsDetailCreateManyProductsInputEnvelope
    set?: Enumerable<StokProductsDetailWhereUniqueInput>
    disconnect?: Enumerable<StokProductsDetailWhereUniqueInput>
    delete?: Enumerable<StokProductsDetailWhereUniqueInput>
    connect?: Enumerable<StokProductsDetailWhereUniqueInput>
    update?: Enumerable<StokProductsDetailUpdateWithWhereUniqueWithoutProductsInput>
    updateMany?: Enumerable<StokProductsDetailUpdateManyWithWhereWithoutProductsInput>
    deleteMany?: Enumerable<StokProductsDetailScalarWhereInput>
  }

  export type StokProductsDetailUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<Enumerable<StokProductsDetailCreateWithoutProductsInput>, Enumerable<StokProductsDetailUncheckedCreateWithoutProductsInput>>
    connectOrCreate?: Enumerable<StokProductsDetailCreateOrConnectWithoutProductsInput>
    upsert?: Enumerable<StokProductsDetailUpsertWithWhereUniqueWithoutProductsInput>
    createMany?: StokProductsDetailCreateManyProductsInputEnvelope
    set?: Enumerable<StokProductsDetailWhereUniqueInput>
    disconnect?: Enumerable<StokProductsDetailWhereUniqueInput>
    delete?: Enumerable<StokProductsDetailWhereUniqueInput>
    connect?: Enumerable<StokProductsDetailWhereUniqueInput>
    update?: Enumerable<StokProductsDetailUpdateWithWhereUniqueWithoutProductsInput>
    updateMany?: Enumerable<StokProductsDetailUpdateManyWithWhereWithoutProductsInput>
    deleteMany?: Enumerable<StokProductsDetailScalarWhereInput>
  }

  export type StokProductsDetailCreateNestedManyWithoutStokProductsInput = {
    create?: XOR<Enumerable<StokProductsDetailCreateWithoutStokProductsInput>, Enumerable<StokProductsDetailUncheckedCreateWithoutStokProductsInput>>
    connectOrCreate?: Enumerable<StokProductsDetailCreateOrConnectWithoutStokProductsInput>
    createMany?: StokProductsDetailCreateManyStokProductsInputEnvelope
    connect?: Enumerable<StokProductsDetailWhereUniqueInput>
  }

  export type StokProductsDetailUncheckedCreateNestedManyWithoutStokProductsInput = {
    create?: XOR<Enumerable<StokProductsDetailCreateWithoutStokProductsInput>, Enumerable<StokProductsDetailUncheckedCreateWithoutStokProductsInput>>
    connectOrCreate?: Enumerable<StokProductsDetailCreateOrConnectWithoutStokProductsInput>
    createMany?: StokProductsDetailCreateManyStokProductsInputEnvelope
    connect?: Enumerable<StokProductsDetailWhereUniqueInput>
  }

  export type StokProductsDetailUpdateManyWithoutStokProductsNestedInput = {
    create?: XOR<Enumerable<StokProductsDetailCreateWithoutStokProductsInput>, Enumerable<StokProductsDetailUncheckedCreateWithoutStokProductsInput>>
    connectOrCreate?: Enumerable<StokProductsDetailCreateOrConnectWithoutStokProductsInput>
    upsert?: Enumerable<StokProductsDetailUpsertWithWhereUniqueWithoutStokProductsInput>
    createMany?: StokProductsDetailCreateManyStokProductsInputEnvelope
    set?: Enumerable<StokProductsDetailWhereUniqueInput>
    disconnect?: Enumerable<StokProductsDetailWhereUniqueInput>
    delete?: Enumerable<StokProductsDetailWhereUniqueInput>
    connect?: Enumerable<StokProductsDetailWhereUniqueInput>
    update?: Enumerable<StokProductsDetailUpdateWithWhereUniqueWithoutStokProductsInput>
    updateMany?: Enumerable<StokProductsDetailUpdateManyWithWhereWithoutStokProductsInput>
    deleteMany?: Enumerable<StokProductsDetailScalarWhereInput>
  }

  export type StokProductsDetailUncheckedUpdateManyWithoutStokProductsNestedInput = {
    create?: XOR<Enumerable<StokProductsDetailCreateWithoutStokProductsInput>, Enumerable<StokProductsDetailUncheckedCreateWithoutStokProductsInput>>
    connectOrCreate?: Enumerable<StokProductsDetailCreateOrConnectWithoutStokProductsInput>
    upsert?: Enumerable<StokProductsDetailUpsertWithWhereUniqueWithoutStokProductsInput>
    createMany?: StokProductsDetailCreateManyStokProductsInputEnvelope
    set?: Enumerable<StokProductsDetailWhereUniqueInput>
    disconnect?: Enumerable<StokProductsDetailWhereUniqueInput>
    delete?: Enumerable<StokProductsDetailWhereUniqueInput>
    connect?: Enumerable<StokProductsDetailWhereUniqueInput>
    update?: Enumerable<StokProductsDetailUpdateWithWhereUniqueWithoutStokProductsInput>
    updateMany?: Enumerable<StokProductsDetailUpdateManyWithWhereWithoutStokProductsInput>
    deleteMany?: Enumerable<StokProductsDetailScalarWhereInput>
  }

  export type StokProductsCreateNestedOneWithoutDetailInput = {
    create?: XOR<StokProductsCreateWithoutDetailInput, StokProductsUncheckedCreateWithoutDetailInput>
    connectOrCreate?: StokProductsCreateOrConnectWithoutDetailInput
    connect?: StokProductsWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutStockDetailInput = {
    create?: XOR<ProductsCreateWithoutStockDetailInput, ProductsUncheckedCreateWithoutStockDetailInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutStockDetailInput
    connect?: ProductsWhereUniqueInput
  }

  export type StokProductsUpdateOneRequiredWithoutDetailNestedInput = {
    create?: XOR<StokProductsCreateWithoutDetailInput, StokProductsUncheckedCreateWithoutDetailInput>
    connectOrCreate?: StokProductsCreateOrConnectWithoutDetailInput
    upsert?: StokProductsUpsertWithoutDetailInput
    connect?: StokProductsWhereUniqueInput
    update?: XOR<StokProductsUpdateWithoutDetailInput, StokProductsUncheckedUpdateWithoutDetailInput>
  }

  export type ProductsUpdateOneRequiredWithoutStockDetailNestedInput = {
    create?: XOR<ProductsCreateWithoutStockDetailInput, ProductsUncheckedCreateWithoutStockDetailInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutStockDetailInput
    upsert?: ProductsUpsertWithoutStockDetailInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<ProductsUpdateWithoutStockDetailInput, ProductsUncheckedUpdateWithoutStockDetailInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type StokProductsDetailCreateWithoutProductsInput = {
    id?: string
    StokProducts: StokProductsCreateNestedOneWithoutDetailInput
    amont_new_stock: number
    cost_new: number
    amont_old_stock: number
    cost_old: number
  }

  export type StokProductsDetailUncheckedCreateWithoutProductsInput = {
    id?: string
    stokProductsId: string
    amont_new_stock: number
    cost_new: number
    amont_old_stock: number
    cost_old: number
  }

  export type StokProductsDetailCreateOrConnectWithoutProductsInput = {
    where: StokProductsDetailWhereUniqueInput
    create: XOR<StokProductsDetailCreateWithoutProductsInput, StokProductsDetailUncheckedCreateWithoutProductsInput>
  }

  export type StokProductsDetailCreateManyProductsInputEnvelope = {
    data: Enumerable<StokProductsDetailCreateManyProductsInput>
    skipDuplicates?: boolean
  }

  export type StokProductsDetailUpsertWithWhereUniqueWithoutProductsInput = {
    where: StokProductsDetailWhereUniqueInput
    update: XOR<StokProductsDetailUpdateWithoutProductsInput, StokProductsDetailUncheckedUpdateWithoutProductsInput>
    create: XOR<StokProductsDetailCreateWithoutProductsInput, StokProductsDetailUncheckedCreateWithoutProductsInput>
  }

  export type StokProductsDetailUpdateWithWhereUniqueWithoutProductsInput = {
    where: StokProductsDetailWhereUniqueInput
    data: XOR<StokProductsDetailUpdateWithoutProductsInput, StokProductsDetailUncheckedUpdateWithoutProductsInput>
  }

  export type StokProductsDetailUpdateManyWithWhereWithoutProductsInput = {
    where: StokProductsDetailScalarWhereInput
    data: XOR<StokProductsDetailUpdateManyMutationInput, StokProductsDetailUncheckedUpdateManyWithoutStockDetailInput>
  }

  export type StokProductsDetailScalarWhereInput = {
    AND?: Enumerable<StokProductsDetailScalarWhereInput>
    OR?: Enumerable<StokProductsDetailScalarWhereInput>
    NOT?: Enumerable<StokProductsDetailScalarWhereInput>
    id?: StringFilter | string
    stokProductsId?: StringFilter | string
    productsId?: StringFilter | string
    amont_new_stock?: IntFilter | number
    cost_new?: IntFilter | number
    amont_old_stock?: IntFilter | number
    cost_old?: IntFilter | number
  }

  export type StokProductsDetailCreateWithoutStokProductsInput = {
    id?: string
    Products: ProductsCreateNestedOneWithoutStockDetailInput
    amont_new_stock: number
    cost_new: number
    amont_old_stock: number
    cost_old: number
  }

  export type StokProductsDetailUncheckedCreateWithoutStokProductsInput = {
    id?: string
    productsId: string
    amont_new_stock: number
    cost_new: number
    amont_old_stock: number
    cost_old: number
  }

  export type StokProductsDetailCreateOrConnectWithoutStokProductsInput = {
    where: StokProductsDetailWhereUniqueInput
    create: XOR<StokProductsDetailCreateWithoutStokProductsInput, StokProductsDetailUncheckedCreateWithoutStokProductsInput>
  }

  export type StokProductsDetailCreateManyStokProductsInputEnvelope = {
    data: Enumerable<StokProductsDetailCreateManyStokProductsInput>
    skipDuplicates?: boolean
  }

  export type StokProductsDetailUpsertWithWhereUniqueWithoutStokProductsInput = {
    where: StokProductsDetailWhereUniqueInput
    update: XOR<StokProductsDetailUpdateWithoutStokProductsInput, StokProductsDetailUncheckedUpdateWithoutStokProductsInput>
    create: XOR<StokProductsDetailCreateWithoutStokProductsInput, StokProductsDetailUncheckedCreateWithoutStokProductsInput>
  }

  export type StokProductsDetailUpdateWithWhereUniqueWithoutStokProductsInput = {
    where: StokProductsDetailWhereUniqueInput
    data: XOR<StokProductsDetailUpdateWithoutStokProductsInput, StokProductsDetailUncheckedUpdateWithoutStokProductsInput>
  }

  export type StokProductsDetailUpdateManyWithWhereWithoutStokProductsInput = {
    where: StokProductsDetailScalarWhereInput
    data: XOR<StokProductsDetailUpdateManyMutationInput, StokProductsDetailUncheckedUpdateManyWithoutDetailInput>
  }

  export type StokProductsCreateWithoutDetailInput = {
    id?: string
    stock_code: string
    create_date?: Date | string
    update_date?: Date | string
    user_crate: string
    user_update: string
  }

  export type StokProductsUncheckedCreateWithoutDetailInput = {
    id?: string
    stock_code: string
    create_date?: Date | string
    update_date?: Date | string
    user_crate: string
    user_update: string
  }

  export type StokProductsCreateOrConnectWithoutDetailInput = {
    where: StokProductsWhereUniqueInput
    create: XOR<StokProductsCreateWithoutDetailInput, StokProductsUncheckedCreateWithoutDetailInput>
  }

  export type ProductsCreateWithoutStockDetailInput = {
    id?: string
    name: string
    sku: string
    bar_code: string
    amount?: number
    cost?: number
    price?: number
    create_date?: Date | string
    update_date?: Date | string
    deleted_date?: Date | string | null
    is_deleted?: boolean
    user_create: string
    user_update: string
  }

  export type ProductsUncheckedCreateWithoutStockDetailInput = {
    id?: string
    name: string
    sku: string
    bar_code: string
    amount?: number
    cost?: number
    price?: number
    create_date?: Date | string
    update_date?: Date | string
    deleted_date?: Date | string | null
    is_deleted?: boolean
    user_create: string
    user_update: string
  }

  export type ProductsCreateOrConnectWithoutStockDetailInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutStockDetailInput, ProductsUncheckedCreateWithoutStockDetailInput>
  }

  export type StokProductsUpsertWithoutDetailInput = {
    update: XOR<StokProductsUpdateWithoutDetailInput, StokProductsUncheckedUpdateWithoutDetailInput>
    create: XOR<StokProductsCreateWithoutDetailInput, StokProductsUncheckedCreateWithoutDetailInput>
  }

  export type StokProductsUpdateWithoutDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock_code?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_crate?: StringFieldUpdateOperationsInput | string
    user_update?: StringFieldUpdateOperationsInput | string
  }

  export type StokProductsUncheckedUpdateWithoutDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    stock_code?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    user_crate?: StringFieldUpdateOperationsInput | string
    user_update?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsUpsertWithoutStockDetailInput = {
    update: XOR<ProductsUpdateWithoutStockDetailInput, ProductsUncheckedUpdateWithoutStockDetailInput>
    create: XOR<ProductsCreateWithoutStockDetailInput, ProductsUncheckedCreateWithoutStockDetailInput>
  }

  export type ProductsUpdateWithoutStockDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    bar_code?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_create?: StringFieldUpdateOperationsInput | string
    user_update?: StringFieldUpdateOperationsInput | string
  }

  export type ProductsUncheckedUpdateWithoutStockDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    bar_code?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    deleted_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_create?: StringFieldUpdateOperationsInput | string
    user_update?: StringFieldUpdateOperationsInput | string
  }

  export type StokProductsDetailCreateManyProductsInput = {
    id?: string
    stokProductsId: string
    amont_new_stock: number
    cost_new: number
    amont_old_stock: number
    cost_old: number
  }

  export type StokProductsDetailUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    StokProducts?: StokProductsUpdateOneRequiredWithoutDetailNestedInput
    amont_new_stock?: IntFieldUpdateOperationsInput | number
    cost_new?: IntFieldUpdateOperationsInput | number
    amont_old_stock?: IntFieldUpdateOperationsInput | number
    cost_old?: IntFieldUpdateOperationsInput | number
  }

  export type StokProductsDetailUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    stokProductsId?: StringFieldUpdateOperationsInput | string
    amont_new_stock?: IntFieldUpdateOperationsInput | number
    cost_new?: IntFieldUpdateOperationsInput | number
    amont_old_stock?: IntFieldUpdateOperationsInput | number
    cost_old?: IntFieldUpdateOperationsInput | number
  }

  export type StokProductsDetailUncheckedUpdateManyWithoutStockDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    stokProductsId?: StringFieldUpdateOperationsInput | string
    amont_new_stock?: IntFieldUpdateOperationsInput | number
    cost_new?: IntFieldUpdateOperationsInput | number
    amont_old_stock?: IntFieldUpdateOperationsInput | number
    cost_old?: IntFieldUpdateOperationsInput | number
  }

  export type StokProductsDetailCreateManyStokProductsInput = {
    id?: string
    productsId: string
    amont_new_stock: number
    cost_new: number
    amont_old_stock: number
    cost_old: number
  }

  export type StokProductsDetailUpdateWithoutStokProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    Products?: ProductsUpdateOneRequiredWithoutStockDetailNestedInput
    amont_new_stock?: IntFieldUpdateOperationsInput | number
    cost_new?: IntFieldUpdateOperationsInput | number
    amont_old_stock?: IntFieldUpdateOperationsInput | number
    cost_old?: IntFieldUpdateOperationsInput | number
  }

  export type StokProductsDetailUncheckedUpdateWithoutStokProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    productsId?: StringFieldUpdateOperationsInput | string
    amont_new_stock?: IntFieldUpdateOperationsInput | number
    cost_new?: IntFieldUpdateOperationsInput | number
    amont_old_stock?: IntFieldUpdateOperationsInput | number
    cost_old?: IntFieldUpdateOperationsInput | number
  }

  export type StokProductsDetailUncheckedUpdateManyWithoutDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    productsId?: StringFieldUpdateOperationsInput | string
    amont_new_stock?: IntFieldUpdateOperationsInput | number
    cost_new?: IntFieldUpdateOperationsInput | number
    amont_old_stock?: IntFieldUpdateOperationsInput | number
    cost_old?: IntFieldUpdateOperationsInput | number
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