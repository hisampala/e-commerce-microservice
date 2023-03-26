
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
 * Model Orders
 * 
 */
export type Orders = {
  id: string
  paymant: PaymentStatus
  status: StatusOrders
  remark: string
  customerId: string
  create_date: Date
  update_date: Date
}

/**
 * Model OrderDetail
 * 
 */
export type OrderDetail = {
  id: string
  productId: string
  amount: number
  price: number
  cost: number | null
  orderId: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const PaymentStatus: {
  Cash: 'Cash',
  BaskTranfer: 'BaskTranfer',
  CreditCard: 'CreditCard'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const StatusOrders: {
  Draf: 'Draf',
  Completed: 'Completed',
  Cancle: 'Cancle',
  Refund: 'Refund'
};

export type StatusOrders = (typeof StatusOrders)[keyof typeof StatusOrders]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Orders
 * const orders = await prisma.orders.findMany()
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
   * // Fetch zero or more Orders
   * const orders = await prisma.orders.findMany()
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
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<GlobalReject>;

  /**
   * `prisma.orderDetail`: Exposes CRUD operations for the **OrderDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderDetails
    * const orderDetails = await prisma.orderDetail.findMany()
    * ```
    */
  get orderDetail(): Prisma.OrderDetailDelegate<GlobalReject>;
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
    Orders: 'Orders',
    OrderDetail: 'OrderDetail'
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
   * Count Type OrdersCountOutputType
   */


  export type OrdersCountOutputType = {
    OrderDetail: number
  }

  export type OrdersCountOutputTypeSelect = {
    OrderDetail?: boolean
  }

  export type OrdersCountOutputTypeGetPayload<S extends boolean | null | undefined | OrdersCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrdersCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (OrdersCountOutputTypeArgs)
    ? OrdersCountOutputType 
    : S extends { select: any } & (OrdersCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof OrdersCountOutputType ? OrdersCountOutputType[P] : never
  } 
      : OrdersCountOutputType




  // Custom InputTypes

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     * 
    **/
    select?: OrdersCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Orders
   */


  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    paymant: PaymentStatus | null
    status: StatusOrders | null
    remark: string | null
    customerId: string | null
    create_date: Date | null
    update_date: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    paymant: PaymentStatus | null
    status: StatusOrders | null
    remark: string | null
    customerId: string | null
    create_date: Date | null
    update_date: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    paymant: number
    status: number
    remark: number
    customerId: number
    create_date: number
    update_date: number
    _all: number
  }


  export type OrdersMinAggregateInputType = {
    id?: true
    paymant?: true
    status?: true
    remark?: true
    customerId?: true
    create_date?: true
    update_date?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    paymant?: true
    status?: true
    remark?: true
    customerId?: true
    create_date?: true
    update_date?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    paymant?: true
    status?: true
    remark?: true
    customerId?: true
    create_date?: true
    update_date?: true
    _all?: true
  }

  export type OrdersAggregateArgs = {
    /**
     * Filter which Orders to aggregate.
     * 
    **/
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs = {
    where?: OrdersWhereInput
    orderBy?: Enumerable<OrdersOrderByWithAggregationInput>
    by: Array<OrdersScalarFieldEnum>
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }


  export type OrdersGroupByOutputType = {
    id: string
    paymant: PaymentStatus
    status: StatusOrders
    remark: string
    customerId: string
    create_date: Date
    update_date: Date
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect = {
    id?: boolean
    paymant?: boolean
    status?: boolean
    remark?: boolean
    customerId?: boolean
    create_date?: boolean
    update_date?: boolean
    OrderDetail?: boolean | OrdersOrderDetailArgs
    _count?: boolean | OrdersCountOutputTypeArgs
  }


  export type OrdersInclude = {
    OrderDetail?: boolean | OrdersOrderDetailArgs
    _count?: boolean | OrdersCountOutputTypeArgs
  } 

  export type OrdersGetPayload<S extends boolean | null | undefined | OrdersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Orders :
    S extends undefined ? never :
    S extends { include: any } & (OrdersArgs | OrdersFindManyArgs)
    ? Orders  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'OrderDetail' ? Array < OrderDetailGetPayload<S['include'][P]>>  :
        P extends '_count' ? OrdersCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (OrdersArgs | OrdersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'OrderDetail' ? Array < OrderDetailGetPayload<S['select'][P]>>  :
        P extends '_count' ? OrdersCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Orders ? Orders[P] : never
  } 
      : Orders


  type OrdersCountArgs = Merge<
    Omit<OrdersFindManyArgs, 'select' | 'include'> & {
      select?: OrdersCountAggregateInputType | true
    }
  >

  export interface OrdersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrdersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrdersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Orders'> extends True ? Prisma__OrdersClient<OrdersGetPayload<T>> : Prisma__OrdersClient<OrdersGetPayload<T> | null, null>

    /**
     * Find one Orders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrdersFindUniqueOrThrowArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrdersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrdersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Orders'> extends True ? Prisma__OrdersClient<OrdersGetPayload<T>> : Prisma__OrdersClient<OrdersGetPayload<T> | null, null>

    /**
     * Find the first Orders that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrdersFindFirstOrThrowArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrdersFindManyArgs>(
      args?: SelectSubset<T, OrdersFindManyArgs>
    ): PrismaPromise<Array<OrdersGetPayload<T>>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
    **/
    create<T extends OrdersCreateArgs>(
      args: SelectSubset<T, OrdersCreateArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Create many Orders.
     *     @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const orders = await prisma.orders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrdersCreateManyArgs>(
      args?: SelectSubset<T, OrdersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
    **/
    delete<T extends OrdersDeleteArgs>(
      args: SelectSubset<T, OrdersDeleteArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrdersUpdateArgs>(
      args: SelectSubset<T, OrdersUpdateArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrdersDeleteManyArgs>(
      args?: SelectSubset<T, OrdersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrdersUpdateManyArgs>(
      args: SelectSubset<T, OrdersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
    **/
    upsert<T extends OrdersUpsertArgs>(
      args: SelectSubset<T, OrdersUpsertArgs>
    ): Prisma__OrdersClient<OrdersGetPayload<T>>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrdersClient<T, Null = never> implements PrismaPromise<T> {
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

    OrderDetail<T extends OrdersOrderDetailArgs= {}>(args?: Subset<T, OrdersOrderDetailArgs>): PrismaPromise<Array<OrderDetailGetPayload<T>>| Null>;

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
   * Orders base type for findUnique actions
   */
  export type OrdersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUnique
   */
  export interface OrdersFindUniqueArgs extends OrdersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders base type for findFirst actions
   */
  export type OrdersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     * 
    **/
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     * 
    **/
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }

  /**
   * Orders findFirst
   */
  export interface OrdersFindFirstArgs extends OrdersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     * 
    **/
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     * 
    **/
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * Filter, which Orders to fetch.
     * 
    **/
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     * 
    **/
    orderBy?: Enumerable<OrdersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     * 
    **/
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrdersScalarFieldEnum>
  }


  /**
   * Orders create
   */
  export type OrdersCreateArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * The data needed to create a Orders.
     * 
    **/
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }


  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs = {
    /**
     * The data used to create many Orders.
     * 
    **/
    data: Enumerable<OrdersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Orders update
   */
  export type OrdersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * The data needed to update a Orders.
     * 
    **/
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     * 
    **/
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs = {
    /**
     * The data used to update Orders.
     * 
    **/
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     * 
    **/
    where?: OrdersWhereInput
  }


  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * The filter to search for the Orders to update in case it exists.
     * 
    **/
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     * 
    **/
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }


  /**
   * Orders delete
   */
  export type OrdersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
    /**
     * Filter which Orders to delete.
     * 
    **/
    where: OrdersWhereUniqueInput
  }


  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs = {
    /**
     * Filter which Orders to delete
     * 
    **/
    where?: OrdersWhereInput
  }


  /**
   * Orders.OrderDetail
   */
  export type OrdersOrderDetailArgs = {
    /**
     * Select specific fields to fetch from the OrderDetail
     * 
    **/
    select?: OrderDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderDetailInclude | null
    where?: OrderDetailWhereInput
    orderBy?: Enumerable<OrderDetailOrderByWithRelationInput>
    cursor?: OrderDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<OrderDetailScalarFieldEnum>
  }


  /**
   * Orders without action
   */
  export type OrdersArgs = {
    /**
     * Select specific fields to fetch from the Orders
     * 
    **/
    select?: OrdersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrdersInclude | null
  }



  /**
   * Model OrderDetail
   */


  export type AggregateOrderDetail = {
    _count: OrderDetailCountAggregateOutputType | null
    _avg: OrderDetailAvgAggregateOutputType | null
    _sum: OrderDetailSumAggregateOutputType | null
    _min: OrderDetailMinAggregateOutputType | null
    _max: OrderDetailMaxAggregateOutputType | null
  }

  export type OrderDetailAvgAggregateOutputType = {
    amount: number | null
    price: number | null
    cost: number | null
  }

  export type OrderDetailSumAggregateOutputType = {
    amount: number | null
    price: number | null
    cost: number | null
  }

  export type OrderDetailMinAggregateOutputType = {
    id: string | null
    productId: string | null
    amount: number | null
    price: number | null
    cost: number | null
    orderId: string | null
  }

  export type OrderDetailMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    amount: number | null
    price: number | null
    cost: number | null
    orderId: string | null
  }

  export type OrderDetailCountAggregateOutputType = {
    id: number
    productId: number
    amount: number
    price: number
    cost: number
    orderId: number
    _all: number
  }


  export type OrderDetailAvgAggregateInputType = {
    amount?: true
    price?: true
    cost?: true
  }

  export type OrderDetailSumAggregateInputType = {
    amount?: true
    price?: true
    cost?: true
  }

  export type OrderDetailMinAggregateInputType = {
    id?: true
    productId?: true
    amount?: true
    price?: true
    cost?: true
    orderId?: true
  }

  export type OrderDetailMaxAggregateInputType = {
    id?: true
    productId?: true
    amount?: true
    price?: true
    cost?: true
    orderId?: true
  }

  export type OrderDetailCountAggregateInputType = {
    id?: true
    productId?: true
    amount?: true
    price?: true
    cost?: true
    orderId?: true
    _all?: true
  }

  export type OrderDetailAggregateArgs = {
    /**
     * Filter which OrderDetail to aggregate.
     * 
    **/
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderDetails
    **/
    _count?: true | OrderDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderDetailMaxAggregateInputType
  }

  export type GetOrderDetailAggregateType<T extends OrderDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderDetail[P]>
      : GetScalarType<T[P], AggregateOrderDetail[P]>
  }




  export type OrderDetailGroupByArgs = {
    where?: OrderDetailWhereInput
    orderBy?: Enumerable<OrderDetailOrderByWithAggregationInput>
    by: Array<OrderDetailScalarFieldEnum>
    having?: OrderDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderDetailCountAggregateInputType | true
    _avg?: OrderDetailAvgAggregateInputType
    _sum?: OrderDetailSumAggregateInputType
    _min?: OrderDetailMinAggregateInputType
    _max?: OrderDetailMaxAggregateInputType
  }


  export type OrderDetailGroupByOutputType = {
    id: string
    productId: string
    amount: number
    price: number
    cost: number | null
    orderId: string
    _count: OrderDetailCountAggregateOutputType | null
    _avg: OrderDetailAvgAggregateOutputType | null
    _sum: OrderDetailSumAggregateOutputType | null
    _min: OrderDetailMinAggregateOutputType | null
    _max: OrderDetailMaxAggregateOutputType | null
  }

  type GetOrderDetailGroupByPayload<T extends OrderDetailGroupByArgs> = PrismaPromise<
    Array<
      PickArray<OrderDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderDetailGroupByOutputType[P]>
            : GetScalarType<T[P], OrderDetailGroupByOutputType[P]>
        }
      >
    >


  export type OrderDetailSelect = {
    id?: boolean
    productId?: boolean
    amount?: boolean
    price?: boolean
    cost?: boolean
    orderId?: boolean
    Order?: boolean | OrdersArgs
  }


  export type OrderDetailInclude = {
    Order?: boolean | OrdersArgs
  } 

  export type OrderDetailGetPayload<S extends boolean | null | undefined | OrderDetailArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? OrderDetail :
    S extends undefined ? never :
    S extends { include: any } & (OrderDetailArgs | OrderDetailFindManyArgs)
    ? OrderDetail  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Order' ? OrdersGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (OrderDetailArgs | OrderDetailFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Order' ? OrdersGetPayload<S['select'][P]> :  P extends keyof OrderDetail ? OrderDetail[P] : never
  } 
      : OrderDetail


  type OrderDetailCountArgs = Merge<
    Omit<OrderDetailFindManyArgs, 'select' | 'include'> & {
      select?: OrderDetailCountAggregateInputType | true
    }
  >

  export interface OrderDetailDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one OrderDetail that matches the filter.
     * @param {OrderDetailFindUniqueArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderDetailFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, OrderDetailFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'OrderDetail'> extends True ? Prisma__OrderDetailClient<OrderDetailGetPayload<T>> : Prisma__OrderDetailClient<OrderDetailGetPayload<T> | null, null>

    /**
     * Find one OrderDetail that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderDetailFindUniqueOrThrowArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderDetailFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, OrderDetailFindUniqueOrThrowArgs>
    ): Prisma__OrderDetailClient<OrderDetailGetPayload<T>>

    /**
     * Find the first OrderDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindFirstArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderDetailFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, OrderDetailFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'OrderDetail'> extends True ? Prisma__OrderDetailClient<OrderDetailGetPayload<T>> : Prisma__OrderDetailClient<OrderDetailGetPayload<T> | null, null>

    /**
     * Find the first OrderDetail that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindFirstOrThrowArgs} args - Arguments to find a OrderDetail
     * @example
     * // Get one OrderDetail
     * const orderDetail = await prisma.orderDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderDetailFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderDetailFindFirstOrThrowArgs>
    ): Prisma__OrderDetailClient<OrderDetailGetPayload<T>>

    /**
     * Find zero or more OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderDetails
     * const orderDetails = await prisma.orderDetail.findMany()
     * 
     * // Get first 10 OrderDetails
     * const orderDetails = await prisma.orderDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderDetailWithIdOnly = await prisma.orderDetail.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderDetailFindManyArgs>(
      args?: SelectSubset<T, OrderDetailFindManyArgs>
    ): PrismaPromise<Array<OrderDetailGetPayload<T>>>

    /**
     * Create a OrderDetail.
     * @param {OrderDetailCreateArgs} args - Arguments to create a OrderDetail.
     * @example
     * // Create one OrderDetail
     * const OrderDetail = await prisma.orderDetail.create({
     *   data: {
     *     // ... data to create a OrderDetail
     *   }
     * })
     * 
    **/
    create<T extends OrderDetailCreateArgs>(
      args: SelectSubset<T, OrderDetailCreateArgs>
    ): Prisma__OrderDetailClient<OrderDetailGetPayload<T>>

    /**
     * Create many OrderDetails.
     *     @param {OrderDetailCreateManyArgs} args - Arguments to create many OrderDetails.
     *     @example
     *     // Create many OrderDetails
     *     const orderDetail = await prisma.orderDetail.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderDetailCreateManyArgs>(
      args?: SelectSubset<T, OrderDetailCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a OrderDetail.
     * @param {OrderDetailDeleteArgs} args - Arguments to delete one OrderDetail.
     * @example
     * // Delete one OrderDetail
     * const OrderDetail = await prisma.orderDetail.delete({
     *   where: {
     *     // ... filter to delete one OrderDetail
     *   }
     * })
     * 
    **/
    delete<T extends OrderDetailDeleteArgs>(
      args: SelectSubset<T, OrderDetailDeleteArgs>
    ): Prisma__OrderDetailClient<OrderDetailGetPayload<T>>

    /**
     * Update one OrderDetail.
     * @param {OrderDetailUpdateArgs} args - Arguments to update one OrderDetail.
     * @example
     * // Update one OrderDetail
     * const orderDetail = await prisma.orderDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderDetailUpdateArgs>(
      args: SelectSubset<T, OrderDetailUpdateArgs>
    ): Prisma__OrderDetailClient<OrderDetailGetPayload<T>>

    /**
     * Delete zero or more OrderDetails.
     * @param {OrderDetailDeleteManyArgs} args - Arguments to filter OrderDetails to delete.
     * @example
     * // Delete a few OrderDetails
     * const { count } = await prisma.orderDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDetailDeleteManyArgs>(
      args?: SelectSubset<T, OrderDetailDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderDetails
     * const orderDetail = await prisma.orderDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderDetailUpdateManyArgs>(
      args: SelectSubset<T, OrderDetailUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderDetail.
     * @param {OrderDetailUpsertArgs} args - Arguments to update or create a OrderDetail.
     * @example
     * // Update or create a OrderDetail
     * const orderDetail = await prisma.orderDetail.upsert({
     *   create: {
     *     // ... data to create a OrderDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderDetail we want to update
     *   }
     * })
    **/
    upsert<T extends OrderDetailUpsertArgs>(
      args: SelectSubset<T, OrderDetailUpsertArgs>
    ): Prisma__OrderDetailClient<OrderDetailGetPayload<T>>

    /**
     * Count the number of OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailCountArgs} args - Arguments to filter OrderDetails to count.
     * @example
     * // Count the number of OrderDetails
     * const count = await prisma.orderDetail.count({
     *   where: {
     *     // ... the filter for the OrderDetails we want to count
     *   }
     * })
    **/
    count<T extends OrderDetailCountArgs>(
      args?: Subset<T, OrderDetailCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderDetailAggregateArgs>(args: Subset<T, OrderDetailAggregateArgs>): PrismaPromise<GetOrderDetailAggregateType<T>>

    /**
     * Group by OrderDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailGroupByArgs} args - Group by arguments.
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
      T extends OrderDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderDetailGroupByArgs['orderBy'] }
        : { orderBy?: OrderDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderDetailGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__OrderDetailClient<T, Null = never> implements PrismaPromise<T> {
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

    Order<T extends OrdersArgs= {}>(args?: Subset<T, OrdersArgs>): Prisma__OrdersClient<OrdersGetPayload<T> | Null>;

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
   * OrderDetail base type for findUnique actions
   */
  export type OrderDetailFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the OrderDetail
     * 
    **/
    select?: OrderDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderDetailInclude | null
    /**
     * Filter, which OrderDetail to fetch.
     * 
    **/
    where: OrderDetailWhereUniqueInput
  }

  /**
   * OrderDetail findUnique
   */
  export interface OrderDetailFindUniqueArgs extends OrderDetailFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OrderDetail findUniqueOrThrow
   */
  export type OrderDetailFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OrderDetail
     * 
    **/
    select?: OrderDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderDetailInclude | null
    /**
     * Filter, which OrderDetail to fetch.
     * 
    **/
    where: OrderDetailWhereUniqueInput
  }


  /**
   * OrderDetail base type for findFirst actions
   */
  export type OrderDetailFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the OrderDetail
     * 
    **/
    select?: OrderDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderDetailInclude | null
    /**
     * Filter, which OrderDetail to fetch.
     * 
    **/
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     * 
    **/
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     * 
    **/
    distinct?: Enumerable<OrderDetailScalarFieldEnum>
  }

  /**
   * OrderDetail findFirst
   */
  export interface OrderDetailFindFirstArgs extends OrderDetailFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * OrderDetail findFirstOrThrow
   */
  export type OrderDetailFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the OrderDetail
     * 
    **/
    select?: OrderDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderDetailInclude | null
    /**
     * Filter, which OrderDetail to fetch.
     * 
    **/
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     * 
    **/
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     * 
    **/
    distinct?: Enumerable<OrderDetailScalarFieldEnum>
  }


  /**
   * OrderDetail findMany
   */
  export type OrderDetailFindManyArgs = {
    /**
     * Select specific fields to fetch from the OrderDetail
     * 
    **/
    select?: OrderDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderDetailInclude | null
    /**
     * Filter, which OrderDetails to fetch.
     * 
    **/
    where?: OrderDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     * 
    **/
    orderBy?: Enumerable<OrderDetailOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderDetails.
     * 
    **/
    cursor?: OrderDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     * 
    **/
    skip?: number
    distinct?: Enumerable<OrderDetailScalarFieldEnum>
  }


  /**
   * OrderDetail create
   */
  export type OrderDetailCreateArgs = {
    /**
     * Select specific fields to fetch from the OrderDetail
     * 
    **/
    select?: OrderDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderDetailInclude | null
    /**
     * The data needed to create a OrderDetail.
     * 
    **/
    data: XOR<OrderDetailCreateInput, OrderDetailUncheckedCreateInput>
  }


  /**
   * OrderDetail createMany
   */
  export type OrderDetailCreateManyArgs = {
    /**
     * The data used to create many OrderDetails.
     * 
    **/
    data: Enumerable<OrderDetailCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * OrderDetail update
   */
  export type OrderDetailUpdateArgs = {
    /**
     * Select specific fields to fetch from the OrderDetail
     * 
    **/
    select?: OrderDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderDetailInclude | null
    /**
     * The data needed to update a OrderDetail.
     * 
    **/
    data: XOR<OrderDetailUpdateInput, OrderDetailUncheckedUpdateInput>
    /**
     * Choose, which OrderDetail to update.
     * 
    **/
    where: OrderDetailWhereUniqueInput
  }


  /**
   * OrderDetail updateMany
   */
  export type OrderDetailUpdateManyArgs = {
    /**
     * The data used to update OrderDetails.
     * 
    **/
    data: XOR<OrderDetailUpdateManyMutationInput, OrderDetailUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     * 
    **/
    where?: OrderDetailWhereInput
  }


  /**
   * OrderDetail upsert
   */
  export type OrderDetailUpsertArgs = {
    /**
     * Select specific fields to fetch from the OrderDetail
     * 
    **/
    select?: OrderDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderDetailInclude | null
    /**
     * The filter to search for the OrderDetail to update in case it exists.
     * 
    **/
    where: OrderDetailWhereUniqueInput
    /**
     * In case the OrderDetail found by the `where` argument doesn't exist, create a new OrderDetail with this data.
     * 
    **/
    create: XOR<OrderDetailCreateInput, OrderDetailUncheckedCreateInput>
    /**
     * In case the OrderDetail was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<OrderDetailUpdateInput, OrderDetailUncheckedUpdateInput>
  }


  /**
   * OrderDetail delete
   */
  export type OrderDetailDeleteArgs = {
    /**
     * Select specific fields to fetch from the OrderDetail
     * 
    **/
    select?: OrderDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderDetailInclude | null
    /**
     * Filter which OrderDetail to delete.
     * 
    **/
    where: OrderDetailWhereUniqueInput
  }


  /**
   * OrderDetail deleteMany
   */
  export type OrderDetailDeleteManyArgs = {
    /**
     * Filter which OrderDetails to delete
     * 
    **/
    where?: OrderDetailWhereInput
  }


  /**
   * OrderDetail without action
   */
  export type OrderDetailArgs = {
    /**
     * Select specific fields to fetch from the OrderDetail
     * 
    **/
    select?: OrderDetailSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: OrderDetailInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const OrderDetailScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    amount: 'amount',
    price: 'price',
    cost: 'cost',
    orderId: 'orderId'
  };

  export type OrderDetailScalarFieldEnum = (typeof OrderDetailScalarFieldEnum)[keyof typeof OrderDetailScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    paymant: 'paymant',
    status: 'status',
    remark: 'remark',
    customerId: 'customerId',
    create_date: 'create_date',
    update_date: 'update_date'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


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


  export type OrdersWhereInput = {
    AND?: Enumerable<OrdersWhereInput>
    OR?: Enumerable<OrdersWhereInput>
    NOT?: Enumerable<OrdersWhereInput>
    id?: StringFilter | string
    paymant?: EnumPaymentStatusFilter | PaymentStatus
    status?: EnumStatusOrdersFilter | StatusOrders
    remark?: StringFilter | string
    customerId?: StringFilter | string
    create_date?: DateTimeFilter | Date | string
    update_date?: DateTimeFilter | Date | string
    OrderDetail?: OrderDetailListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    paymant?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    customerId?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    OrderDetail?: OrderDetailOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = {
    id?: string
  }

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    paymant?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    customerId?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrdersScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrdersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrdersScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    paymant?: EnumPaymentStatusWithAggregatesFilter | PaymentStatus
    status?: EnumStatusOrdersWithAggregatesFilter | StatusOrders
    remark?: StringWithAggregatesFilter | string
    customerId?: StringWithAggregatesFilter | string
    create_date?: DateTimeWithAggregatesFilter | Date | string
    update_date?: DateTimeWithAggregatesFilter | Date | string
  }

  export type OrderDetailWhereInput = {
    AND?: Enumerable<OrderDetailWhereInput>
    OR?: Enumerable<OrderDetailWhereInput>
    NOT?: Enumerable<OrderDetailWhereInput>
    id?: StringFilter | string
    productId?: StringFilter | string
    amount?: IntFilter | number
    price?: IntFilter | number
    cost?: IntNullableFilter | number | null
    orderId?: StringFilter | string
    Order?: XOR<OrdersRelationFilter, OrdersWhereInput>
  }

  export type OrderDetailOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    orderId?: SortOrder
    Order?: OrdersOrderByWithRelationInput
  }

  export type OrderDetailWhereUniqueInput = {
    id?: string
  }

  export type OrderDetailOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    orderId?: SortOrder
    _count?: OrderDetailCountOrderByAggregateInput
    _avg?: OrderDetailAvgOrderByAggregateInput
    _max?: OrderDetailMaxOrderByAggregateInput
    _min?: OrderDetailMinOrderByAggregateInput
    _sum?: OrderDetailSumOrderByAggregateInput
  }

  export type OrderDetailScalarWhereWithAggregatesInput = {
    AND?: Enumerable<OrderDetailScalarWhereWithAggregatesInput>
    OR?: Enumerable<OrderDetailScalarWhereWithAggregatesInput>
    NOT?: Enumerable<OrderDetailScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    productId?: StringWithAggregatesFilter | string
    amount?: IntWithAggregatesFilter | number
    price?: IntWithAggregatesFilter | number
    cost?: IntNullableWithAggregatesFilter | number | null
    orderId?: StringWithAggregatesFilter | string
  }

  export type OrdersCreateInput = {
    id?: string
    paymant: PaymentStatus
    status?: StatusOrders
    remark: string
    customerId: string
    create_date?: Date | string
    update_date?: Date | string
    OrderDetail?: OrderDetailCreateNestedManyWithoutOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: string
    paymant: PaymentStatus
    status?: StatusOrders
    remark: string
    customerId: string
    create_date?: Date | string
    update_date?: Date | string
    OrderDetail?: OrderDetailUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrdersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymant?: EnumPaymentStatusFieldUpdateOperationsInput | PaymentStatus
    status?: EnumStatusOrdersFieldUpdateOperationsInput | StatusOrders
    remark?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetail?: OrderDetailUpdateManyWithoutOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymant?: EnumPaymentStatusFieldUpdateOperationsInput | PaymentStatus
    status?: EnumStatusOrdersFieldUpdateOperationsInput | StatusOrders
    remark?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderDetail?: OrderDetailUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: string
    paymant: PaymentStatus
    status?: StatusOrders
    remark: string
    customerId: string
    create_date?: Date | string
    update_date?: Date | string
  }

  export type OrdersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymant?: EnumPaymentStatusFieldUpdateOperationsInput | PaymentStatus
    status?: EnumStatusOrdersFieldUpdateOperationsInput | StatusOrders
    remark?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymant?: EnumPaymentStatusFieldUpdateOperationsInput | PaymentStatus
    status?: EnumStatusOrdersFieldUpdateOperationsInput | StatusOrders
    remark?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailCreateInput = {
    id?: string
    productId: string
    amount: number
    price: number
    cost?: number | null
    Order: OrdersCreateNestedOneWithoutOrderDetailInput
  }

  export type OrderDetailUncheckedCreateInput = {
    id?: string
    productId: string
    amount: number
    price: number
    cost?: number | null
    orderId: string
  }

  export type OrderDetailUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    cost?: NullableIntFieldUpdateOperationsInput | number | null
    Order?: OrdersUpdateOneRequiredWithoutOrderDetailNestedInput
  }

  export type OrderDetailUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    cost?: NullableIntFieldUpdateOperationsInput | number | null
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderDetailCreateManyInput = {
    id?: string
    productId: string
    amount: number
    price: number
    cost?: number | null
    orderId: string
  }

  export type OrderDetailUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    cost?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderDetailUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    cost?: NullableIntFieldUpdateOperationsInput | number | null
    orderId?: StringFieldUpdateOperationsInput | string
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

  export type EnumPaymentStatusFilter = {
    equals?: PaymentStatus
    in?: Enumerable<PaymentStatus>
    notIn?: Enumerable<PaymentStatus>
    not?: NestedEnumPaymentStatusFilter | PaymentStatus
  }

  export type EnumStatusOrdersFilter = {
    equals?: StatusOrders
    in?: Enumerable<StatusOrders>
    notIn?: Enumerable<StatusOrders>
    not?: NestedEnumStatusOrdersFilter | StatusOrders
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

  export type OrderDetailListRelationFilter = {
    every?: OrderDetailWhereInput
    some?: OrderDetailWhereInput
    none?: OrderDetailWhereInput
  }

  export type OrderDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    paymant?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    customerId?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    paymant?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    customerId?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    paymant?: SortOrder
    status?: SortOrder
    remark?: SortOrder
    customerId?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
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

  export type EnumPaymentStatusWithAggregatesFilter = {
    equals?: PaymentStatus
    in?: Enumerable<PaymentStatus>
    notIn?: Enumerable<PaymentStatus>
    not?: NestedEnumPaymentStatusWithAggregatesFilter | PaymentStatus
    _count?: NestedIntFilter
    _min?: NestedEnumPaymentStatusFilter
    _max?: NestedEnumPaymentStatusFilter
  }

  export type EnumStatusOrdersWithAggregatesFilter = {
    equals?: StatusOrders
    in?: Enumerable<StatusOrders>
    notIn?: Enumerable<StatusOrders>
    not?: NestedEnumStatusOrdersWithAggregatesFilter | StatusOrders
    _count?: NestedIntFilter
    _min?: NestedEnumStatusOrdersFilter
    _max?: NestedEnumStatusOrdersFilter
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

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type OrdersRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type OrderDetailCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    orderId?: SortOrder
  }

  export type OrderDetailAvgOrderByAggregateInput = {
    amount?: SortOrder
    price?: SortOrder
    cost?: SortOrder
  }

  export type OrderDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    orderId?: SortOrder
  }

  export type OrderDetailMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    amount?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    orderId?: SortOrder
  }

  export type OrderDetailSumOrderByAggregateInput = {
    amount?: SortOrder
    price?: SortOrder
    cost?: SortOrder
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

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type OrderDetailCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<OrderDetailCreateWithoutOrderInput>, Enumerable<OrderDetailUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderDetailCreateOrConnectWithoutOrderInput>
    createMany?: OrderDetailCreateManyOrderInputEnvelope
    connect?: Enumerable<OrderDetailWhereUniqueInput>
  }

  export type OrderDetailUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<Enumerable<OrderDetailCreateWithoutOrderInput>, Enumerable<OrderDetailUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderDetailCreateOrConnectWithoutOrderInput>
    createMany?: OrderDetailCreateManyOrderInputEnvelope
    connect?: Enumerable<OrderDetailWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: PaymentStatus
  }

  export type EnumStatusOrdersFieldUpdateOperationsInput = {
    set?: StatusOrders
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderDetailUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<OrderDetailCreateWithoutOrderInput>, Enumerable<OrderDetailUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderDetailCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<OrderDetailUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: OrderDetailCreateManyOrderInputEnvelope
    set?: Enumerable<OrderDetailWhereUniqueInput>
    disconnect?: Enumerable<OrderDetailWhereUniqueInput>
    delete?: Enumerable<OrderDetailWhereUniqueInput>
    connect?: Enumerable<OrderDetailWhereUniqueInput>
    update?: Enumerable<OrderDetailUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<OrderDetailUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<OrderDetailScalarWhereInput>
  }

  export type OrderDetailUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<Enumerable<OrderDetailCreateWithoutOrderInput>, Enumerable<OrderDetailUncheckedCreateWithoutOrderInput>>
    connectOrCreate?: Enumerable<OrderDetailCreateOrConnectWithoutOrderInput>
    upsert?: Enumerable<OrderDetailUpsertWithWhereUniqueWithoutOrderInput>
    createMany?: OrderDetailCreateManyOrderInputEnvelope
    set?: Enumerable<OrderDetailWhereUniqueInput>
    disconnect?: Enumerable<OrderDetailWhereUniqueInput>
    delete?: Enumerable<OrderDetailWhereUniqueInput>
    connect?: Enumerable<OrderDetailWhereUniqueInput>
    update?: Enumerable<OrderDetailUpdateWithWhereUniqueWithoutOrderInput>
    updateMany?: Enumerable<OrderDetailUpdateManyWithWhereWithoutOrderInput>
    deleteMany?: Enumerable<OrderDetailScalarWhereInput>
  }

  export type OrdersCreateNestedOneWithoutOrderDetailInput = {
    create?: XOR<OrdersCreateWithoutOrderDetailInput, OrdersUncheckedCreateWithoutOrderDetailInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderDetailInput
    connect?: OrdersWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrdersUpdateOneRequiredWithoutOrderDetailNestedInput = {
    create?: XOR<OrdersCreateWithoutOrderDetailInput, OrdersUncheckedCreateWithoutOrderDetailInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutOrderDetailInput
    upsert?: OrdersUpsertWithoutOrderDetailInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<OrdersUpdateWithoutOrderDetailInput, OrdersUncheckedUpdateWithoutOrderDetailInput>
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

  export type NestedEnumPaymentStatusFilter = {
    equals?: PaymentStatus
    in?: Enumerable<PaymentStatus>
    notIn?: Enumerable<PaymentStatus>
    not?: NestedEnumPaymentStatusFilter | PaymentStatus
  }

  export type NestedEnumStatusOrdersFilter = {
    equals?: StatusOrders
    in?: Enumerable<StatusOrders>
    notIn?: Enumerable<StatusOrders>
    not?: NestedEnumStatusOrdersFilter | StatusOrders
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

  export type NestedEnumPaymentStatusWithAggregatesFilter = {
    equals?: PaymentStatus
    in?: Enumerable<PaymentStatus>
    notIn?: Enumerable<PaymentStatus>
    not?: NestedEnumPaymentStatusWithAggregatesFilter | PaymentStatus
    _count?: NestedIntFilter
    _min?: NestedEnumPaymentStatusFilter
    _max?: NestedEnumPaymentStatusFilter
  }

  export type NestedEnumStatusOrdersWithAggregatesFilter = {
    equals?: StatusOrders
    in?: Enumerable<StatusOrders>
    notIn?: Enumerable<StatusOrders>
    not?: NestedEnumStatusOrdersWithAggregatesFilter | StatusOrders
    _count?: NestedIntFilter
    _min?: NestedEnumStatusOrdersFilter
    _max?: NestedEnumStatusOrdersFilter
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

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type OrderDetailCreateWithoutOrderInput = {
    id?: string
    productId: string
    amount: number
    price: number
    cost?: number | null
  }

  export type OrderDetailUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: string
    amount: number
    price: number
    cost?: number | null
  }

  export type OrderDetailCreateOrConnectWithoutOrderInput = {
    where: OrderDetailWhereUniqueInput
    create: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailCreateManyOrderInputEnvelope = {
    data: Enumerable<OrderDetailCreateManyOrderInput>
    skipDuplicates?: boolean
  }

  export type OrderDetailUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailWhereUniqueInput
    update: XOR<OrderDetailUpdateWithoutOrderInput, OrderDetailUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderDetailCreateWithoutOrderInput, OrderDetailUncheckedCreateWithoutOrderInput>
  }

  export type OrderDetailUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderDetailWhereUniqueInput
    data: XOR<OrderDetailUpdateWithoutOrderInput, OrderDetailUncheckedUpdateWithoutOrderInput>
  }

  export type OrderDetailUpdateManyWithWhereWithoutOrderInput = {
    where: OrderDetailScalarWhereInput
    data: XOR<OrderDetailUpdateManyMutationInput, OrderDetailUncheckedUpdateManyWithoutOrderDetailInput>
  }

  export type OrderDetailScalarWhereInput = {
    AND?: Enumerable<OrderDetailScalarWhereInput>
    OR?: Enumerable<OrderDetailScalarWhereInput>
    NOT?: Enumerable<OrderDetailScalarWhereInput>
    id?: StringFilter | string
    productId?: StringFilter | string
    amount?: IntFilter | number
    price?: IntFilter | number
    cost?: IntNullableFilter | number | null
    orderId?: StringFilter | string
  }

  export type OrdersCreateWithoutOrderDetailInput = {
    id?: string
    paymant: PaymentStatus
    status?: StatusOrders
    remark: string
    customerId: string
    create_date?: Date | string
    update_date?: Date | string
  }

  export type OrdersUncheckedCreateWithoutOrderDetailInput = {
    id?: string
    paymant: PaymentStatus
    status?: StatusOrders
    remark: string
    customerId: string
    create_date?: Date | string
    update_date?: Date | string
  }

  export type OrdersCreateOrConnectWithoutOrderDetailInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutOrderDetailInput, OrdersUncheckedCreateWithoutOrderDetailInput>
  }

  export type OrdersUpsertWithoutOrderDetailInput = {
    update: XOR<OrdersUpdateWithoutOrderDetailInput, OrdersUncheckedUpdateWithoutOrderDetailInput>
    create: XOR<OrdersCreateWithoutOrderDetailInput, OrdersUncheckedCreateWithoutOrderDetailInput>
  }

  export type OrdersUpdateWithoutOrderDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymant?: EnumPaymentStatusFieldUpdateOperationsInput | PaymentStatus
    status?: EnumStatusOrdersFieldUpdateOperationsInput | StatusOrders
    remark?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateWithoutOrderDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    paymant?: EnumPaymentStatusFieldUpdateOperationsInput | PaymentStatus
    status?: EnumStatusOrdersFieldUpdateOperationsInput | StatusOrders
    remark?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    create_date?: DateTimeFieldUpdateOperationsInput | Date | string
    update_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailCreateManyOrderInput = {
    id?: string
    productId: string
    amount: number
    price: number
    cost?: number | null
  }

  export type OrderDetailUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    cost?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderDetailUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    cost?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OrderDetailUncheckedUpdateManyWithoutOrderDetailInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    cost?: NullableIntFieldUpdateOperationsInput | number | null
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