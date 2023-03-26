
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Users
 * 
 */
export type Users = {
  id: string
  first_name: string
  last_name: string
  email: string
  password: string
  create_date: Date | null
  update_date: Date | null
  addressId: string | null
  deliveryAddressId: string | null
}

/**
 * Model Address
 * 
 */
export type Address = {
  id: string
  address: string
  subdistrict: string
  district: string
  province: string
  post_code: string
  create_date: Date | null
  update_date: Date | null
}

/**
 * Model DeliveryAddress
 * 
 */
export type DeliveryAddress = {
  id: string
  address: string
  subdistrict: string
  district: string
  province: string
  post_code: string
  create_date: Date | null
  update_date: Date | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<GlobalReject>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<GlobalReject>;

  /**
   * `prisma.deliveryAddress`: Exposes CRUD operations for the **DeliveryAddress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryAddresses
    * const deliveryAddresses = await prisma.deliveryAddress.findMany()
    * ```
    */
  get deliveryAddress(): Prisma.DeliveryAddressDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

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
   * Prisma Client JS version: 4.11.0
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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


  export const ModelName: {
    Users: 'Users',
    Address: 'Address',
    DeliveryAddress: 'DeliveryAddress'
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
   * Count Type AddressCountOutputType
   */


  export type AddressCountOutputType = {
    Users: number
  }

  export type AddressCountOutputTypeSelect = {
    Users?: boolean
  }

  export type AddressCountOutputTypeGetPayload<S extends boolean | null | undefined | AddressCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AddressCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AddressCountOutputTypeArgs)
    ? AddressCountOutputType 
    : S extends { select: any } & (AddressCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AddressCountOutputType ? AddressCountOutputType[P] : never
  } 
      : AddressCountOutputType




  // Custom InputTypes

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect | null
  }



  /**
   * Count Type DeliveryAddressCountOutputType
   */


  export type DeliveryAddressCountOutputType = {
    Users: number
  }

  export type DeliveryAddressCountOutputTypeSelect = {
    Users?: boolean
  }

  export type DeliveryAddressCountOutputTypeGetPayload<S extends boolean | null | undefined | DeliveryAddressCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DeliveryAddressCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DeliveryAddressCountOutputTypeArgs)
    ? DeliveryAddressCountOutputType 
    : S extends { select: any } & (DeliveryAddressCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DeliveryAddressCountOutputType ? DeliveryAddressCountOutputType[P] : never
  } 
      : DeliveryAddressCountOutputType




  // Custom InputTypes

  /**
   * DeliveryAddressCountOutputType without action
   */
  export type DeliveryAddressCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DeliveryAddressCountOutputType
     */
    select?: DeliveryAddressCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    create_date: Date | null
    update_date: Date | null
    addressId: string | null
    deliveryAddressId: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    create_date: Date | null
    update_date: Date | null
    addressId: string | null
    deliveryAddressId: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    first_name: number
    last_name: number
    email: number
    password: number
    create_date: number
    update_date: number
    addressId: number
    deliveryAddressId: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    create_date?: true
    update_date?: true
    addressId?: true
    deliveryAddressId?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    create_date?: true
    update_date?: true
    addressId?: true
    deliveryAddressId?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    create_date?: true
    update_date?: true
    addressId?: true
    deliveryAddressId?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs = {
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByWithAggregationInput>
    by: UsersScalarFieldEnum[]
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: string
    first_name: string
    last_name: string
    email: string
    password: string
    create_date: Date | null
    update_date: Date | null
    addressId: string | null
    deliveryAddressId: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect = {
    id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    create_date?: boolean
    update_date?: boolean
    addressId?: boolean
    deliveryAddressId?: boolean
    Address?: boolean | AddressArgs
    DeliveryAddress?: boolean | DeliveryAddressArgs
  }


  export type UsersInclude = {
    Address?: boolean | AddressArgs
    DeliveryAddress?: boolean | DeliveryAddressArgs
  }

  export type UsersGetPayload<S extends boolean | null | undefined | UsersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Users :
    S extends undefined ? never :
    S extends { include: any } & (UsersArgs | UsersFindManyArgs)
    ? Users  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Address' ? AddressGetPayload<S['include'][P]> | null :
        P extends 'DeliveryAddress' ? DeliveryAddressGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (UsersArgs | UsersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Address' ? AddressGetPayload<S['select'][P]> | null :
        P extends 'DeliveryAddress' ? DeliveryAddressGetPayload<S['select'][P]> | null :  P extends keyof Users ? Users[P] : never
  } 
      : Users


  type UsersCountArgs = 
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users'> extends True ? Prisma__UsersClient<UsersGetPayload<T>> : Prisma__UsersClient<UsersGetPayload<T> | null, null>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users'> extends True ? Prisma__UsersClient<UsersGetPayload<T>> : Prisma__UsersClient<UsersGetPayload<T> | null, null>

    /**
     * Find the first Users that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs>(
      args?: SelectSubset<T, UsersFindManyArgs>
    ): Prisma.PrismaPromise<Array<UsersGetPayload<T>>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs>(
      args: SelectSubset<T, UsersCreateArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs>(
      args?: SelectSubset<T, UsersCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs>(
      args: SelectSubset<T, UsersDeleteArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs>(
      args: SelectSubset<T, UsersUpdateArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs>(
      args?: SelectSubset<T, UsersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs>(
      args: SelectSubset<T, UsersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs>(
      args: SelectSubset<T, UsersUpsertArgs>
    ): Prisma__UsersClient<UsersGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Address<T extends AddressArgs= {}>(args?: Subset<T, AddressArgs>): Prisma__AddressClient<AddressGetPayload<T> | Null>;

    DeliveryAddress<T extends DeliveryAddressArgs= {}>(args?: Subset<T, DeliveryAddressArgs>): Prisma__DeliveryAddressClient<DeliveryAddressGetPayload<T> | Null>;

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
   * Users base type for findUnique actions
   */
  export type UsersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUnique
   */
  export interface UsersFindUniqueArgs extends UsersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users base type for findFirst actions
   */
  export type UsersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: Enumerable<UsersScalarFieldEnum>
  }

  /**
   * Users findFirst
   */
  export interface UsersFindFirstArgs extends UsersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users create
   */
  export type UsersCreateArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }


  /**
   * Users without action
   */
  export type UsersArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
  }



  /**
   * Model Address
   */


  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressMinAggregateOutputType = {
    id: string | null
    address: string | null
    subdistrict: string | null
    district: string | null
    province: string | null
    post_code: string | null
    create_date: Date | null
    update_date: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: string | null
    address: string | null
    subdistrict: string | null
    district: string | null
    province: string | null
    post_code: string | null
    create_date: Date | null
    update_date: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    address: number
    subdistrict: number
    district: number
    province: number
    post_code: number
    create_date: number
    update_date: number
    _all: number
  }


  export type AddressMinAggregateInputType = {
    id?: true
    address?: true
    subdistrict?: true
    district?: true
    province?: true
    post_code?: true
    create_date?: true
    update_date?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    address?: true
    subdistrict?: true
    district?: true
    province?: true
    post_code?: true
    create_date?: true
    update_date?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    address?: true
    subdistrict?: true
    district?: true
    province?: true
    post_code?: true
    create_date?: true
    update_date?: true
    _all?: true
  }

  export type AddressAggregateArgs = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs = {
    where?: AddressWhereInput
    orderBy?: Enumerable<AddressOrderByWithAggregationInput>
    by: AddressScalarFieldEnum[]
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }


  export type AddressGroupByOutputType = {
    id: string
    address: string
    subdistrict: string
    district: string
    province: string
    post_code: string
    create_date: Date | null
    update_date: Date | null
    _count: AddressCountAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect = {
    id?: boolean
    address?: boolean
    subdistrict?: boolean
    district?: boolean
    province?: boolean
    post_code?: boolean
    create_date?: boolean
    update_date?: boolean
    Users?: boolean | Address$UsersArgs
    _count?: boolean | AddressCountOutputTypeArgs
  }


  export type AddressInclude = {
    Users?: boolean | Address$UsersArgs
    _count?: boolean | AddressCountOutputTypeArgs
  }

  export type AddressGetPayload<S extends boolean | null | undefined | AddressArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Address :
    S extends undefined ? never :
    S extends { include: any } & (AddressArgs | AddressFindManyArgs)
    ? Address  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Users' ? Array < UsersGetPayload<S['include'][P]>>  :
        P extends '_count' ? AddressCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AddressArgs | AddressFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Users' ? Array < UsersGetPayload<S['select'][P]>>  :
        P extends '_count' ? AddressCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Address ? Address[P] : never
  } 
      : Address


  type AddressCountArgs = 
    Omit<AddressFindManyArgs, 'select' | 'include'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AddressFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AddressFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Address'> extends True ? Prisma__AddressClient<AddressGetPayload<T>> : Prisma__AddressClient<AddressGetPayload<T> | null, null>

    /**
     * Find one Address that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AddressFindUniqueOrThrowArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AddressFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AddressFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Address'> extends True ? Prisma__AddressClient<AddressGetPayload<T>> : Prisma__AddressClient<AddressGetPayload<T> | null, null>

    /**
     * Find the first Address that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AddressFindFirstOrThrowArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AddressFindManyArgs>(
      args?: SelectSubset<T, AddressFindManyArgs>
    ): Prisma.PrismaPromise<Array<AddressGetPayload<T>>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
    **/
    create<T extends AddressCreateArgs>(
      args: SelectSubset<T, AddressCreateArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Create many Addresses.
     *     @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     *     @example
     *     // Create many Addresses
     *     const address = await prisma.address.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AddressCreateManyArgs>(
      args?: SelectSubset<T, AddressCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
    **/
    delete<T extends AddressDeleteArgs>(
      args: SelectSubset<T, AddressDeleteArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AddressUpdateArgs>(
      args: SelectSubset<T, AddressUpdateArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AddressDeleteManyArgs>(
      args?: SelectSubset<T, AddressDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AddressUpdateManyArgs>(
      args: SelectSubset<T, AddressUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
    **/
    upsert<T extends AddressUpsertArgs>(
      args: SelectSubset<T, AddressUpsertArgs>
    ): Prisma__AddressClient<AddressGetPayload<T>>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AddressClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Users<T extends Address$UsersArgs= {}>(args?: Subset<T, Address$UsersArgs>): Prisma.PrismaPromise<Array<UsersGetPayload<T>>| Null>;

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
   * Address base type for findUnique actions
   */
  export type AddressFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUnique
   */
  export interface AddressFindUniqueArgs extends AddressFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address base type for findFirst actions
   */
  export type AddressFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: Enumerable<AddressScalarFieldEnum>
  }

  /**
   * Address findFirst
   */
  export interface AddressFindFirstArgs extends AddressFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * Address findMany
   */
  export type AddressFindManyArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * Address create
   */
  export type AddressCreateArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }


  /**
   * Address createMany
   */
  export type AddressCreateManyArgs = {
    /**
     * The data used to create many Addresses.
     */
    data: Enumerable<AddressCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Address update
   */
  export type AddressUpdateArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
  }


  /**
   * Address upsert
   */
  export type AddressUpsertArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }


  /**
   * Address delete
   */
  export type AddressDeleteArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
  }


  /**
   * Address.Users
   */
  export type Address$UsersArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Address without action
   */
  export type AddressArgs = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude | null
  }



  /**
   * Model DeliveryAddress
   */


  export type AggregateDeliveryAddress = {
    _count: DeliveryAddressCountAggregateOutputType | null
    _min: DeliveryAddressMinAggregateOutputType | null
    _max: DeliveryAddressMaxAggregateOutputType | null
  }

  export type DeliveryAddressMinAggregateOutputType = {
    id: string | null
    address: string | null
    subdistrict: string | null
    district: string | null
    province: string | null
    post_code: string | null
    create_date: Date | null
    update_date: Date | null
  }

  export type DeliveryAddressMaxAggregateOutputType = {
    id: string | null
    address: string | null
    subdistrict: string | null
    district: string | null
    province: string | null
    post_code: string | null
    create_date: Date | null
    update_date: Date | null
  }

  export type DeliveryAddressCountAggregateOutputType = {
    id: number
    address: number
    subdistrict: number
    district: number
    province: number
    post_code: number
    create_date: number
    update_date: number
    _all: number
  }


  export type DeliveryAddressMinAggregateInputType = {
    id?: true
    address?: true
    subdistrict?: true
    district?: true
    province?: true
    post_code?: true
    create_date?: true
    update_date?: true
  }

  export type DeliveryAddressMaxAggregateInputType = {
    id?: true
    address?: true
    subdistrict?: true
    district?: true
    province?: true
    post_code?: true
    create_date?: true
    update_date?: true
  }

  export type DeliveryAddressCountAggregateInputType = {
    id?: true
    address?: true
    subdistrict?: true
    district?: true
    province?: true
    post_code?: true
    create_date?: true
    update_date?: true
    _all?: true
  }

  export type DeliveryAddressAggregateArgs = {
    /**
     * Filter which DeliveryAddress to aggregate.
     */
    where?: DeliveryAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryAddresses to fetch.
     */
    orderBy?: Enumerable<DeliveryAddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryAddresses
    **/
    _count?: true | DeliveryAddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryAddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryAddressMaxAggregateInputType
  }

  export type GetDeliveryAddressAggregateType<T extends DeliveryAddressAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryAddress[P]>
      : GetScalarType<T[P], AggregateDeliveryAddress[P]>
  }




  export type DeliveryAddressGroupByArgs = {
    where?: DeliveryAddressWhereInput
    orderBy?: Enumerable<DeliveryAddressOrderByWithAggregationInput>
    by: DeliveryAddressScalarFieldEnum[]
    having?: DeliveryAddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryAddressCountAggregateInputType | true
    _min?: DeliveryAddressMinAggregateInputType
    _max?: DeliveryAddressMaxAggregateInputType
  }


  export type DeliveryAddressGroupByOutputType = {
    id: string
    address: string
    subdistrict: string
    district: string
    province: string
    post_code: string
    create_date: Date | null
    update_date: Date | null
    _count: DeliveryAddressCountAggregateOutputType | null
    _min: DeliveryAddressMinAggregateOutputType | null
    _max: DeliveryAddressMaxAggregateOutputType | null
  }

  type GetDeliveryAddressGroupByPayload<T extends DeliveryAddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DeliveryAddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryAddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryAddressGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryAddressGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryAddressSelect = {
    id?: boolean
    address?: boolean
    subdistrict?: boolean
    district?: boolean
    province?: boolean
    post_code?: boolean
    create_date?: boolean
    update_date?: boolean
    Users?: boolean | DeliveryAddress$UsersArgs
    _count?: boolean | DeliveryAddressCountOutputTypeArgs
  }


  export type DeliveryAddressInclude = {
    Users?: boolean | DeliveryAddress$UsersArgs
    _count?: boolean | DeliveryAddressCountOutputTypeArgs
  }

  export type DeliveryAddressGetPayload<S extends boolean | null | undefined | DeliveryAddressArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DeliveryAddress :
    S extends undefined ? never :
    S extends { include: any } & (DeliveryAddressArgs | DeliveryAddressFindManyArgs)
    ? DeliveryAddress  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Users' ? Array < UsersGetPayload<S['include'][P]>>  :
        P extends '_count' ? DeliveryAddressCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DeliveryAddressArgs | DeliveryAddressFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Users' ? Array < UsersGetPayload<S['select'][P]>>  :
        P extends '_count' ? DeliveryAddressCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof DeliveryAddress ? DeliveryAddress[P] : never
  } 
      : DeliveryAddress


  type DeliveryAddressCountArgs = 
    Omit<DeliveryAddressFindManyArgs, 'select' | 'include'> & {
      select?: DeliveryAddressCountAggregateInputType | true
    }

  export interface DeliveryAddressDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DeliveryAddress that matches the filter.
     * @param {DeliveryAddressFindUniqueArgs} args - Arguments to find a DeliveryAddress
     * @example
     * // Get one DeliveryAddress
     * const deliveryAddress = await prisma.deliveryAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DeliveryAddressFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DeliveryAddressFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DeliveryAddress'> extends True ? Prisma__DeliveryAddressClient<DeliveryAddressGetPayload<T>> : Prisma__DeliveryAddressClient<DeliveryAddressGetPayload<T> | null, null>

    /**
     * Find one DeliveryAddress that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DeliveryAddressFindUniqueOrThrowArgs} args - Arguments to find a DeliveryAddress
     * @example
     * // Get one DeliveryAddress
     * const deliveryAddress = await prisma.deliveryAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DeliveryAddressFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DeliveryAddressFindUniqueOrThrowArgs>
    ): Prisma__DeliveryAddressClient<DeliveryAddressGetPayload<T>>

    /**
     * Find the first DeliveryAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAddressFindFirstArgs} args - Arguments to find a DeliveryAddress
     * @example
     * // Get one DeliveryAddress
     * const deliveryAddress = await prisma.deliveryAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DeliveryAddressFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DeliveryAddressFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DeliveryAddress'> extends True ? Prisma__DeliveryAddressClient<DeliveryAddressGetPayload<T>> : Prisma__DeliveryAddressClient<DeliveryAddressGetPayload<T> | null, null>

    /**
     * Find the first DeliveryAddress that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAddressFindFirstOrThrowArgs} args - Arguments to find a DeliveryAddress
     * @example
     * // Get one DeliveryAddress
     * const deliveryAddress = await prisma.deliveryAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DeliveryAddressFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DeliveryAddressFindFirstOrThrowArgs>
    ): Prisma__DeliveryAddressClient<DeliveryAddressGetPayload<T>>

    /**
     * Find zero or more DeliveryAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryAddresses
     * const deliveryAddresses = await prisma.deliveryAddress.findMany()
     * 
     * // Get first 10 DeliveryAddresses
     * const deliveryAddresses = await prisma.deliveryAddress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryAddressWithIdOnly = await prisma.deliveryAddress.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DeliveryAddressFindManyArgs>(
      args?: SelectSubset<T, DeliveryAddressFindManyArgs>
    ): Prisma.PrismaPromise<Array<DeliveryAddressGetPayload<T>>>

    /**
     * Create a DeliveryAddress.
     * @param {DeliveryAddressCreateArgs} args - Arguments to create a DeliveryAddress.
     * @example
     * // Create one DeliveryAddress
     * const DeliveryAddress = await prisma.deliveryAddress.create({
     *   data: {
     *     // ... data to create a DeliveryAddress
     *   }
     * })
     * 
    **/
    create<T extends DeliveryAddressCreateArgs>(
      args: SelectSubset<T, DeliveryAddressCreateArgs>
    ): Prisma__DeliveryAddressClient<DeliveryAddressGetPayload<T>>

    /**
     * Create many DeliveryAddresses.
     *     @param {DeliveryAddressCreateManyArgs} args - Arguments to create many DeliveryAddresses.
     *     @example
     *     // Create many DeliveryAddresses
     *     const deliveryAddress = await prisma.deliveryAddress.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DeliveryAddressCreateManyArgs>(
      args?: SelectSubset<T, DeliveryAddressCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DeliveryAddress.
     * @param {DeliveryAddressDeleteArgs} args - Arguments to delete one DeliveryAddress.
     * @example
     * // Delete one DeliveryAddress
     * const DeliveryAddress = await prisma.deliveryAddress.delete({
     *   where: {
     *     // ... filter to delete one DeliveryAddress
     *   }
     * })
     * 
    **/
    delete<T extends DeliveryAddressDeleteArgs>(
      args: SelectSubset<T, DeliveryAddressDeleteArgs>
    ): Prisma__DeliveryAddressClient<DeliveryAddressGetPayload<T>>

    /**
     * Update one DeliveryAddress.
     * @param {DeliveryAddressUpdateArgs} args - Arguments to update one DeliveryAddress.
     * @example
     * // Update one DeliveryAddress
     * const deliveryAddress = await prisma.deliveryAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DeliveryAddressUpdateArgs>(
      args: SelectSubset<T, DeliveryAddressUpdateArgs>
    ): Prisma__DeliveryAddressClient<DeliveryAddressGetPayload<T>>

    /**
     * Delete zero or more DeliveryAddresses.
     * @param {DeliveryAddressDeleteManyArgs} args - Arguments to filter DeliveryAddresses to delete.
     * @example
     * // Delete a few DeliveryAddresses
     * const { count } = await prisma.deliveryAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DeliveryAddressDeleteManyArgs>(
      args?: SelectSubset<T, DeliveryAddressDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryAddresses
     * const deliveryAddress = await prisma.deliveryAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DeliveryAddressUpdateManyArgs>(
      args: SelectSubset<T, DeliveryAddressUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeliveryAddress.
     * @param {DeliveryAddressUpsertArgs} args - Arguments to update or create a DeliveryAddress.
     * @example
     * // Update or create a DeliveryAddress
     * const deliveryAddress = await prisma.deliveryAddress.upsert({
     *   create: {
     *     // ... data to create a DeliveryAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryAddress we want to update
     *   }
     * })
    **/
    upsert<T extends DeliveryAddressUpsertArgs>(
      args: SelectSubset<T, DeliveryAddressUpsertArgs>
    ): Prisma__DeliveryAddressClient<DeliveryAddressGetPayload<T>>

    /**
     * Count the number of DeliveryAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAddressCountArgs} args - Arguments to filter DeliveryAddresses to count.
     * @example
     * // Count the number of DeliveryAddresses
     * const count = await prisma.deliveryAddress.count({
     *   where: {
     *     // ... the filter for the DeliveryAddresses we want to count
     *   }
     * })
    **/
    count<T extends DeliveryAddressCountArgs>(
      args?: Subset<T, DeliveryAddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryAddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeliveryAddressAggregateArgs>(args: Subset<T, DeliveryAddressAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAddressAggregateType<T>>

    /**
     * Group by DeliveryAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAddressGroupByArgs} args - Group by arguments.
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
      T extends DeliveryAddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryAddressGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryAddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeliveryAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryAddress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DeliveryAddressClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Users<T extends DeliveryAddress$UsersArgs= {}>(args?: Subset<T, DeliveryAddress$UsersArgs>): Prisma.PrismaPromise<Array<UsersGetPayload<T>>| Null>;

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
   * DeliveryAddress base type for findUnique actions
   */
  export type DeliveryAddressFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DeliveryAddress
     */
    select?: DeliveryAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryAddressInclude | null
    /**
     * Filter, which DeliveryAddress to fetch.
     */
    where: DeliveryAddressWhereUniqueInput
  }

  /**
   * DeliveryAddress findUnique
   */
  export interface DeliveryAddressFindUniqueArgs extends DeliveryAddressFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DeliveryAddress findUniqueOrThrow
   */
  export type DeliveryAddressFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DeliveryAddress
     */
    select?: DeliveryAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryAddressInclude | null
    /**
     * Filter, which DeliveryAddress to fetch.
     */
    where: DeliveryAddressWhereUniqueInput
  }


  /**
   * DeliveryAddress base type for findFirst actions
   */
  export type DeliveryAddressFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DeliveryAddress
     */
    select?: DeliveryAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryAddressInclude | null
    /**
     * Filter, which DeliveryAddress to fetch.
     */
    where?: DeliveryAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryAddresses to fetch.
     */
    orderBy?: Enumerable<DeliveryAddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryAddresses.
     */
    cursor?: DeliveryAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryAddresses.
     */
    distinct?: Enumerable<DeliveryAddressScalarFieldEnum>
  }

  /**
   * DeliveryAddress findFirst
   */
  export interface DeliveryAddressFindFirstArgs extends DeliveryAddressFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DeliveryAddress findFirstOrThrow
   */
  export type DeliveryAddressFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DeliveryAddress
     */
    select?: DeliveryAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryAddressInclude | null
    /**
     * Filter, which DeliveryAddress to fetch.
     */
    where?: DeliveryAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryAddresses to fetch.
     */
    orderBy?: Enumerable<DeliveryAddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryAddresses.
     */
    cursor?: DeliveryAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryAddresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryAddresses.
     */
    distinct?: Enumerable<DeliveryAddressScalarFieldEnum>
  }


  /**
   * DeliveryAddress findMany
   */
  export type DeliveryAddressFindManyArgs = {
    /**
     * Select specific fields to fetch from the DeliveryAddress
     */
    select?: DeliveryAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryAddressInclude | null
    /**
     * Filter, which DeliveryAddresses to fetch.
     */
    where?: DeliveryAddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryAddresses to fetch.
     */
    orderBy?: Enumerable<DeliveryAddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryAddresses.
     */
    cursor?: DeliveryAddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryAddresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryAddresses.
     */
    skip?: number
    distinct?: Enumerable<DeliveryAddressScalarFieldEnum>
  }


  /**
   * DeliveryAddress create
   */
  export type DeliveryAddressCreateArgs = {
    /**
     * Select specific fields to fetch from the DeliveryAddress
     */
    select?: DeliveryAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryAddressInclude | null
    /**
     * The data needed to create a DeliveryAddress.
     */
    data: XOR<DeliveryAddressCreateInput, DeliveryAddressUncheckedCreateInput>
  }


  /**
   * DeliveryAddress createMany
   */
  export type DeliveryAddressCreateManyArgs = {
    /**
     * The data used to create many DeliveryAddresses.
     */
    data: Enumerable<DeliveryAddressCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DeliveryAddress update
   */
  export type DeliveryAddressUpdateArgs = {
    /**
     * Select specific fields to fetch from the DeliveryAddress
     */
    select?: DeliveryAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryAddressInclude | null
    /**
     * The data needed to update a DeliveryAddress.
     */
    data: XOR<DeliveryAddressUpdateInput, DeliveryAddressUncheckedUpdateInput>
    /**
     * Choose, which DeliveryAddress to update.
     */
    where: DeliveryAddressWhereUniqueInput
  }


  /**
   * DeliveryAddress updateMany
   */
  export type DeliveryAddressUpdateManyArgs = {
    /**
     * The data used to update DeliveryAddresses.
     */
    data: XOR<DeliveryAddressUpdateManyMutationInput, DeliveryAddressUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryAddresses to update
     */
    where?: DeliveryAddressWhereInput
  }


  /**
   * DeliveryAddress upsert
   */
  export type DeliveryAddressUpsertArgs = {
    /**
     * Select specific fields to fetch from the DeliveryAddress
     */
    select?: DeliveryAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryAddressInclude | null
    /**
     * The filter to search for the DeliveryAddress to update in case it exists.
     */
    where: DeliveryAddressWhereUniqueInput
    /**
     * In case the DeliveryAddress found by the `where` argument doesn't exist, create a new DeliveryAddress with this data.
     */
    create: XOR<DeliveryAddressCreateInput, DeliveryAddressUncheckedCreateInput>
    /**
     * In case the DeliveryAddress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryAddressUpdateInput, DeliveryAddressUncheckedUpdateInput>
  }


  /**
   * DeliveryAddress delete
   */
  export type DeliveryAddressDeleteArgs = {
    /**
     * Select specific fields to fetch from the DeliveryAddress
     */
    select?: DeliveryAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryAddressInclude | null
    /**
     * Filter which DeliveryAddress to delete.
     */
    where: DeliveryAddressWhereUniqueInput
  }


  /**
   * DeliveryAddress deleteMany
   */
  export type DeliveryAddressDeleteManyArgs = {
    /**
     * Filter which DeliveryAddresses to delete
     */
    where?: DeliveryAddressWhereInput
  }


  /**
   * DeliveryAddress.Users
   */
  export type DeliveryAddress$UsersArgs = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude | null
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByWithRelationInput>
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * DeliveryAddress without action
   */
  export type DeliveryAddressArgs = {
    /**
     * Select specific fields to fetch from the DeliveryAddress
     */
    select?: DeliveryAddressSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DeliveryAddressInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AddressScalarFieldEnum: {
    id: 'id',
    address: 'address',
    subdistrict: 'subdistrict',
    district: 'district',
    province: 'province',
    post_code: 'post_code',
    create_date: 'create_date',
    update_date: 'update_date'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const DeliveryAddressScalarFieldEnum: {
    id: 'id',
    address: 'address',
    subdistrict: 'subdistrict',
    district: 'district',
    province: 'province',
    post_code: 'post_code',
    create_date: 'create_date',
    update_date: 'update_date'
  };

  export type DeliveryAddressScalarFieldEnum = (typeof DeliveryAddressScalarFieldEnum)[keyof typeof DeliveryAddressScalarFieldEnum]


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


  export const UsersScalarFieldEnum: {
    id: 'id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    create_date: 'create_date',
    update_date: 'update_date',
    addressId: 'addressId',
    deliveryAddressId: 'deliveryAddressId'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    id?: StringFilter | string
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    create_date?: DateTimeNullableFilter | Date | string | null
    update_date?: DateTimeNullableFilter | Date | string | null
    addressId?: StringNullableFilter | string | null
    deliveryAddressId?: StringNullableFilter | string | null
    Address?: XOR<AddressRelationFilter, AddressWhereInput> | null
    DeliveryAddress?: XOR<DeliveryAddressRelationFilter, DeliveryAddressWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    addressId?: SortOrder
    deliveryAddressId?: SortOrder
    Address?: AddressOrderByWithRelationInput
    DeliveryAddress?: DeliveryAddressOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = {
    id?: string
    email?: string
  }

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    addressId?: SortOrder
    deliveryAddressId?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsersScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    first_name?: StringWithAggregatesFilter | string
    last_name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    create_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    update_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    addressId?: StringNullableWithAggregatesFilter | string | null
    deliveryAddressId?: StringNullableWithAggregatesFilter | string | null
  }

  export type AddressWhereInput = {
    AND?: Enumerable<AddressWhereInput>
    OR?: Enumerable<AddressWhereInput>
    NOT?: Enumerable<AddressWhereInput>
    id?: StringFilter | string
    address?: StringFilter | string
    subdistrict?: StringFilter | string
    district?: StringFilter | string
    province?: StringFilter | string
    post_code?: StringFilter | string
    create_date?: DateTimeNullableFilter | Date | string | null
    update_date?: DateTimeNullableFilter | Date | string | null
    Users?: UsersListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    post_code?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    Users?: UsersOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = {
    id?: string
  }

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    post_code?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AddressScalarWhereWithAggregatesInput>
    OR?: Enumerable<AddressScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AddressScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    subdistrict?: StringWithAggregatesFilter | string
    district?: StringWithAggregatesFilter | string
    province?: StringWithAggregatesFilter | string
    post_code?: StringWithAggregatesFilter | string
    create_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    update_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type DeliveryAddressWhereInput = {
    AND?: Enumerable<DeliveryAddressWhereInput>
    OR?: Enumerable<DeliveryAddressWhereInput>
    NOT?: Enumerable<DeliveryAddressWhereInput>
    id?: StringFilter | string
    address?: StringFilter | string
    subdistrict?: StringFilter | string
    district?: StringFilter | string
    province?: StringFilter | string
    post_code?: StringFilter | string
    create_date?: DateTimeNullableFilter | Date | string | null
    update_date?: DateTimeNullableFilter | Date | string | null
    Users?: UsersListRelationFilter
  }

  export type DeliveryAddressOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    post_code?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    Users?: UsersOrderByRelationAggregateInput
  }

  export type DeliveryAddressWhereUniqueInput = {
    id?: string
  }

  export type DeliveryAddressOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    post_code?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    _count?: DeliveryAddressCountOrderByAggregateInput
    _max?: DeliveryAddressMaxOrderByAggregateInput
    _min?: DeliveryAddressMinOrderByAggregateInput
  }

  export type DeliveryAddressScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DeliveryAddressScalarWhereWithAggregatesInput>
    OR?: Enumerable<DeliveryAddressScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DeliveryAddressScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    address?: StringWithAggregatesFilter | string
    subdistrict?: StringWithAggregatesFilter | string
    district?: StringWithAggregatesFilter | string
    province?: StringWithAggregatesFilter | string
    post_code?: StringWithAggregatesFilter | string
    create_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
    update_date?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type UsersCreateInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    create_date?: Date | string | null
    update_date?: Date | string | null
    Address?: AddressCreateNestedOneWithoutUsersInput
    DeliveryAddress?: DeliveryAddressCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    create_date?: Date | string | null
    update_date?: Date | string | null
    addressId?: string | null
    deliveryAddressId?: string | null
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUpdateOneWithoutUsersNestedInput
    DeliveryAddress?: DeliveryAddressUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersCreateManyInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    create_date?: Date | string | null
    update_date?: Date | string | null
    addressId?: string | null
    deliveryAddressId?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryAddressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddressCreateInput = {
    id?: string
    address: string
    subdistrict: string
    district: string
    province: string
    post_code: string
    create_date?: Date | string | null
    update_date?: Date | string | null
    Users?: UsersCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: string
    address: string
    subdistrict: string
    district: string
    province: string
    post_code: string
    create_date?: Date | string | null
    update_date?: Date | string | null
    Users?: UsersUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    post_code?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users?: UsersUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    post_code?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users?: UsersUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: string
    address: string
    subdistrict: string
    district: string
    province: string
    post_code: string
    create_date?: Date | string | null
    update_date?: Date | string | null
  }

  export type AddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    post_code?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    post_code?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveryAddressCreateInput = {
    id?: string
    address: string
    subdistrict: string
    district: string
    province: string
    post_code: string
    create_date?: Date | string | null
    update_date?: Date | string | null
    Users?: UsersCreateNestedManyWithoutDeliveryAddressInput
  }

  export type DeliveryAddressUncheckedCreateInput = {
    id?: string
    address: string
    subdistrict: string
    district: string
    province: string
    post_code: string
    create_date?: Date | string | null
    update_date?: Date | string | null
    Users?: UsersUncheckedCreateNestedManyWithoutDeliveryAddressInput
  }

  export type DeliveryAddressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    post_code?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users?: UsersUpdateManyWithoutDeliveryAddressNestedInput
  }

  export type DeliveryAddressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    post_code?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users?: UsersUncheckedUpdateManyWithoutDeliveryAddressNestedInput
  }

  export type DeliveryAddressCreateManyInput = {
    id?: string
    address: string
    subdistrict: string
    district: string
    province: string
    post_code: string
    create_date?: Date | string | null
    update_date?: Date | string | null
  }

  export type DeliveryAddressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    post_code?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveryAddressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    post_code?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type AddressRelationFilter = {
    is?: AddressWhereInput | null
    isNot?: AddressWhereInput | null
  }

  export type DeliveryAddressRelationFilter = {
    is?: DeliveryAddressWhereInput | null
    isNot?: DeliveryAddressWhereInput | null
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    addressId?: SortOrder
    deliveryAddressId?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    addressId?: SortOrder
    deliveryAddressId?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
    addressId?: SortOrder
    deliveryAddressId?: SortOrder
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

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    post_code?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    post_code?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    post_code?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type DeliveryAddressCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    post_code?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type DeliveryAddressMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    post_code?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type DeliveryAddressMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    subdistrict?: SortOrder
    district?: SortOrder
    province?: SortOrder
    post_code?: SortOrder
    create_date?: SortOrder
    update_date?: SortOrder
  }

  export type AddressCreateNestedOneWithoutUsersInput = {
    create?: XOR<AddressCreateWithoutUsersInput, AddressUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUsersInput
    connect?: AddressWhereUniqueInput
  }

  export type DeliveryAddressCreateNestedOneWithoutUsersInput = {
    create?: XOR<DeliveryAddressCreateWithoutUsersInput, DeliveryAddressUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DeliveryAddressCreateOrConnectWithoutUsersInput
    connect?: DeliveryAddressWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AddressUpdateOneWithoutUsersNestedInput = {
    create?: XOR<AddressCreateWithoutUsersInput, AddressUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AddressCreateOrConnectWithoutUsersInput
    upsert?: AddressUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: AddressWhereUniqueInput
    update?: XOR<AddressUpdateWithoutUsersInput, AddressUncheckedUpdateWithoutUsersInput>
  }

  export type DeliveryAddressUpdateOneWithoutUsersNestedInput = {
    create?: XOR<DeliveryAddressCreateWithoutUsersInput, DeliveryAddressUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DeliveryAddressCreateOrConnectWithoutUsersInput
    upsert?: DeliveryAddressUpsertWithoutUsersInput
    disconnect?: boolean
    delete?: boolean
    connect?: DeliveryAddressWhereUniqueInput
    update?: XOR<DeliveryAddressUpdateWithoutUsersInput, DeliveryAddressUncheckedUpdateWithoutUsersInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsersCreateNestedManyWithoutAddressInput = {
    create?: XOR<Enumerable<UsersCreateWithoutAddressInput>, Enumerable<UsersUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<UsersCreateOrConnectWithoutAddressInput>
    createMany?: UsersCreateManyAddressInputEnvelope
    connect?: Enumerable<UsersWhereUniqueInput>
  }

  export type UsersUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<Enumerable<UsersCreateWithoutAddressInput>, Enumerable<UsersUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<UsersCreateOrConnectWithoutAddressInput>
    createMany?: UsersCreateManyAddressInputEnvelope
    connect?: Enumerable<UsersWhereUniqueInput>
  }

  export type UsersUpdateManyWithoutAddressNestedInput = {
    create?: XOR<Enumerable<UsersCreateWithoutAddressInput>, Enumerable<UsersUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<UsersCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<UsersUpsertWithWhereUniqueWithoutAddressInput>
    createMany?: UsersCreateManyAddressInputEnvelope
    set?: Enumerable<UsersWhereUniqueInput>
    disconnect?: Enumerable<UsersWhereUniqueInput>
    delete?: Enumerable<UsersWhereUniqueInput>
    connect?: Enumerable<UsersWhereUniqueInput>
    update?: Enumerable<UsersUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<UsersUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<UsersScalarWhereInput>
  }

  export type UsersUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<Enumerable<UsersCreateWithoutAddressInput>, Enumerable<UsersUncheckedCreateWithoutAddressInput>>
    connectOrCreate?: Enumerable<UsersCreateOrConnectWithoutAddressInput>
    upsert?: Enumerable<UsersUpsertWithWhereUniqueWithoutAddressInput>
    createMany?: UsersCreateManyAddressInputEnvelope
    set?: Enumerable<UsersWhereUniqueInput>
    disconnect?: Enumerable<UsersWhereUniqueInput>
    delete?: Enumerable<UsersWhereUniqueInput>
    connect?: Enumerable<UsersWhereUniqueInput>
    update?: Enumerable<UsersUpdateWithWhereUniqueWithoutAddressInput>
    updateMany?: Enumerable<UsersUpdateManyWithWhereWithoutAddressInput>
    deleteMany?: Enumerable<UsersScalarWhereInput>
  }

  export type UsersCreateNestedManyWithoutDeliveryAddressInput = {
    create?: XOR<Enumerable<UsersCreateWithoutDeliveryAddressInput>, Enumerable<UsersUncheckedCreateWithoutDeliveryAddressInput>>
    connectOrCreate?: Enumerable<UsersCreateOrConnectWithoutDeliveryAddressInput>
    createMany?: UsersCreateManyDeliveryAddressInputEnvelope
    connect?: Enumerable<UsersWhereUniqueInput>
  }

  export type UsersUncheckedCreateNestedManyWithoutDeliveryAddressInput = {
    create?: XOR<Enumerable<UsersCreateWithoutDeliveryAddressInput>, Enumerable<UsersUncheckedCreateWithoutDeliveryAddressInput>>
    connectOrCreate?: Enumerable<UsersCreateOrConnectWithoutDeliveryAddressInput>
    createMany?: UsersCreateManyDeliveryAddressInputEnvelope
    connect?: Enumerable<UsersWhereUniqueInput>
  }

  export type UsersUpdateManyWithoutDeliveryAddressNestedInput = {
    create?: XOR<Enumerable<UsersCreateWithoutDeliveryAddressInput>, Enumerable<UsersUncheckedCreateWithoutDeliveryAddressInput>>
    connectOrCreate?: Enumerable<UsersCreateOrConnectWithoutDeliveryAddressInput>
    upsert?: Enumerable<UsersUpsertWithWhereUniqueWithoutDeliveryAddressInput>
    createMany?: UsersCreateManyDeliveryAddressInputEnvelope
    set?: Enumerable<UsersWhereUniqueInput>
    disconnect?: Enumerable<UsersWhereUniqueInput>
    delete?: Enumerable<UsersWhereUniqueInput>
    connect?: Enumerable<UsersWhereUniqueInput>
    update?: Enumerable<UsersUpdateWithWhereUniqueWithoutDeliveryAddressInput>
    updateMany?: Enumerable<UsersUpdateManyWithWhereWithoutDeliveryAddressInput>
    deleteMany?: Enumerable<UsersScalarWhereInput>
  }

  export type UsersUncheckedUpdateManyWithoutDeliveryAddressNestedInput = {
    create?: XOR<Enumerable<UsersCreateWithoutDeliveryAddressInput>, Enumerable<UsersUncheckedCreateWithoutDeliveryAddressInput>>
    connectOrCreate?: Enumerable<UsersCreateOrConnectWithoutDeliveryAddressInput>
    upsert?: Enumerable<UsersUpsertWithWhereUniqueWithoutDeliveryAddressInput>
    createMany?: UsersCreateManyDeliveryAddressInputEnvelope
    set?: Enumerable<UsersWhereUniqueInput>
    disconnect?: Enumerable<UsersWhereUniqueInput>
    delete?: Enumerable<UsersWhereUniqueInput>
    connect?: Enumerable<UsersWhereUniqueInput>
    update?: Enumerable<UsersUpdateWithWhereUniqueWithoutDeliveryAddressInput>
    updateMany?: Enumerable<UsersUpdateManyWithWhereWithoutDeliveryAddressInput>
    deleteMany?: Enumerable<UsersScalarWhereInput>
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

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
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

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type AddressCreateWithoutUsersInput = {
    id?: string
    address: string
    subdistrict: string
    district: string
    province: string
    post_code: string
    create_date?: Date | string | null
    update_date?: Date | string | null
  }

  export type AddressUncheckedCreateWithoutUsersInput = {
    id?: string
    address: string
    subdistrict: string
    district: string
    province: string
    post_code: string
    create_date?: Date | string | null
    update_date?: Date | string | null
  }

  export type AddressCreateOrConnectWithoutUsersInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUsersInput, AddressUncheckedCreateWithoutUsersInput>
  }

  export type DeliveryAddressCreateWithoutUsersInput = {
    id?: string
    address: string
    subdistrict: string
    district: string
    province: string
    post_code: string
    create_date?: Date | string | null
    update_date?: Date | string | null
  }

  export type DeliveryAddressUncheckedCreateWithoutUsersInput = {
    id?: string
    address: string
    subdistrict: string
    district: string
    province: string
    post_code: string
    create_date?: Date | string | null
    update_date?: Date | string | null
  }

  export type DeliveryAddressCreateOrConnectWithoutUsersInput = {
    where: DeliveryAddressWhereUniqueInput
    create: XOR<DeliveryAddressCreateWithoutUsersInput, DeliveryAddressUncheckedCreateWithoutUsersInput>
  }

  export type AddressUpsertWithoutUsersInput = {
    update: XOR<AddressUpdateWithoutUsersInput, AddressUncheckedUpdateWithoutUsersInput>
    create: XOR<AddressCreateWithoutUsersInput, AddressUncheckedCreateWithoutUsersInput>
  }

  export type AddressUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    post_code?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    post_code?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveryAddressUpsertWithoutUsersInput = {
    update: XOR<DeliveryAddressUpdateWithoutUsersInput, DeliveryAddressUncheckedUpdateWithoutUsersInput>
    create: XOR<DeliveryAddressCreateWithoutUsersInput, DeliveryAddressUncheckedCreateWithoutUsersInput>
  }

  export type DeliveryAddressUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    post_code?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveryAddressUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    subdistrict?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    post_code?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersCreateWithoutAddressInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    create_date?: Date | string | null
    update_date?: Date | string | null
    DeliveryAddress?: DeliveryAddressCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutAddressInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    create_date?: Date | string | null
    update_date?: Date | string | null
    deliveryAddressId?: string | null
  }

  export type UsersCreateOrConnectWithoutAddressInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAddressInput, UsersUncheckedCreateWithoutAddressInput>
  }

  export type UsersCreateManyAddressInputEnvelope = {
    data: Enumerable<UsersCreateManyAddressInput>
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutAddressInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutAddressInput, UsersUncheckedUpdateWithoutAddressInput>
    create: XOR<UsersCreateWithoutAddressInput, UsersUncheckedCreateWithoutAddressInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutAddressInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutAddressInput, UsersUncheckedUpdateWithoutAddressInput>
  }

  export type UsersUpdateManyWithWhereWithoutAddressInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutUsersInput>
  }

  export type UsersScalarWhereInput = {
    AND?: Enumerable<UsersScalarWhereInput>
    OR?: Enumerable<UsersScalarWhereInput>
    NOT?: Enumerable<UsersScalarWhereInput>
    id?: StringFilter | string
    first_name?: StringFilter | string
    last_name?: StringFilter | string
    email?: StringFilter | string
    password?: StringFilter | string
    create_date?: DateTimeNullableFilter | Date | string | null
    update_date?: DateTimeNullableFilter | Date | string | null
    addressId?: StringNullableFilter | string | null
    deliveryAddressId?: StringNullableFilter | string | null
  }

  export type UsersCreateWithoutDeliveryAddressInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    create_date?: Date | string | null
    update_date?: Date | string | null
    Address?: AddressCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutDeliveryAddressInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    create_date?: Date | string | null
    update_date?: Date | string | null
    addressId?: string | null
  }

  export type UsersCreateOrConnectWithoutDeliveryAddressInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutDeliveryAddressInput, UsersUncheckedCreateWithoutDeliveryAddressInput>
  }

  export type UsersCreateManyDeliveryAddressInputEnvelope = {
    data: Enumerable<UsersCreateManyDeliveryAddressInput>
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutDeliveryAddressInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutDeliveryAddressInput, UsersUncheckedUpdateWithoutDeliveryAddressInput>
    create: XOR<UsersCreateWithoutDeliveryAddressInput, UsersUncheckedCreateWithoutDeliveryAddressInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutDeliveryAddressInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutDeliveryAddressInput, UsersUncheckedUpdateWithoutDeliveryAddressInput>
  }

  export type UsersUpdateManyWithWhereWithoutDeliveryAddressInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutUsersInput>
  }

  export type UsersCreateManyAddressInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    create_date?: Date | string | null
    update_date?: Date | string | null
    deliveryAddressId?: string | null
  }

  export type UsersUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DeliveryAddress?: DeliveryAddressUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryAddressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveryAddressId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersCreateManyDeliveryAddressInput = {
    id?: string
    first_name: string
    last_name: string
    email: string
    password: string
    create_date?: Date | string | null
    update_date?: Date | string | null
    addressId?: string | null
  }

  export type UsersUpdateWithoutDeliveryAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Address?: AddressUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutDeliveryAddressInput = {
    id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    create_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    update_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addressId?: NullableStringFieldUpdateOperationsInput | string | null
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