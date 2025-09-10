
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
 * Model Antonym
 * 
 */
export type Antonym = $Result.DefaultSelection<Prisma.$AntonymPayload>
/**
 * Model Definition
 * 
 */
export type Definition = $Result.DefaultSelection<Prisma.$DefinitionPayload>
/**
 * Model License
 * 
 */
export type License = $Result.DefaultSelection<Prisma.$LicensePayload>
/**
 * Model Meaning
 * 
 */
export type Meaning = $Result.DefaultSelection<Prisma.$MeaningPayload>
/**
 * Model Phonetic
 * 
 */
export type Phonetic = $Result.DefaultSelection<Prisma.$PhoneticPayload>
/**
 * Model SourceUrl
 * 
 */
export type SourceUrl = $Result.DefaultSelection<Prisma.$SourceUrlPayload>
/**
 * Model Synonym
 * 
 */
export type Synonym = $Result.DefaultSelection<Prisma.$SynonymPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserWordHistory
 * 
 */
export type UserWordHistory = $Result.DefaultSelection<Prisma.$UserWordHistoryPayload>
/**
 * Model Word
 * 
 */
export type Word = $Result.DefaultSelection<Prisma.$WordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WordStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type WordStatus = (typeof WordStatus)[keyof typeof WordStatus]

}

export type WordStatus = $Enums.WordStatus

export const WordStatus: typeof $Enums.WordStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Antonyms
 * const antonyms = await prisma.antonym.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Antonyms
   * const antonyms = await prisma.antonym.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.antonym`: Exposes CRUD operations for the **Antonym** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Antonyms
    * const antonyms = await prisma.antonym.findMany()
    * ```
    */
  get antonym(): Prisma.AntonymDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.definition`: Exposes CRUD operations for the **Definition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Definitions
    * const definitions = await prisma.definition.findMany()
    * ```
    */
  get definition(): Prisma.DefinitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.license`: Exposes CRUD operations for the **License** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licenses
    * const licenses = await prisma.license.findMany()
    * ```
    */
  get license(): Prisma.LicenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meaning`: Exposes CRUD operations for the **Meaning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meanings
    * const meanings = await prisma.meaning.findMany()
    * ```
    */
  get meaning(): Prisma.MeaningDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phonetic`: Exposes CRUD operations for the **Phonetic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phonetics
    * const phonetics = await prisma.phonetic.findMany()
    * ```
    */
  get phonetic(): Prisma.PhoneticDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sourceUrl`: Exposes CRUD operations for the **SourceUrl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SourceUrls
    * const sourceUrls = await prisma.sourceUrl.findMany()
    * ```
    */
  get sourceUrl(): Prisma.SourceUrlDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.synonym`: Exposes CRUD operations for the **Synonym** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Synonyms
    * const synonyms = await prisma.synonym.findMany()
    * ```
    */
  get synonym(): Prisma.SynonymDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.userWordHistory`: Exposes CRUD operations for the **UserWordHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserWordHistories
    * const userWordHistories = await prisma.userWordHistory.findMany()
    * ```
    */
  get userWordHistory(): Prisma.UserWordHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.word`: Exposes CRUD operations for the **Word** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Words
    * const words = await prisma.word.findMany()
    * ```
    */
  get word(): Prisma.WordDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Antonym: 'Antonym',
    Definition: 'Definition',
    License: 'License',
    Meaning: 'Meaning',
    Phonetic: 'Phonetic',
    SourceUrl: 'SourceUrl',
    Synonym: 'Synonym',
    User: 'User',
    UserWordHistory: 'UserWordHistory',
    Word: 'Word'
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
      modelProps: "antonym" | "definition" | "license" | "meaning" | "phonetic" | "sourceUrl" | "synonym" | "user" | "userWordHistory" | "word"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Antonym: {
        payload: Prisma.$AntonymPayload<ExtArgs>
        fields: Prisma.AntonymFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AntonymFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AntonymPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AntonymFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AntonymPayload>
          }
          findFirst: {
            args: Prisma.AntonymFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AntonymPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AntonymFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AntonymPayload>
          }
          findMany: {
            args: Prisma.AntonymFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AntonymPayload>[]
          }
          create: {
            args: Prisma.AntonymCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AntonymPayload>
          }
          createMany: {
            args: Prisma.AntonymCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AntonymCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AntonymPayload>[]
          }
          delete: {
            args: Prisma.AntonymDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AntonymPayload>
          }
          update: {
            args: Prisma.AntonymUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AntonymPayload>
          }
          deleteMany: {
            args: Prisma.AntonymDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AntonymUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AntonymUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AntonymPayload>[]
          }
          upsert: {
            args: Prisma.AntonymUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AntonymPayload>
          }
          aggregate: {
            args: Prisma.AntonymAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAntonym>
          }
          groupBy: {
            args: Prisma.AntonymGroupByArgs<ExtArgs>
            result: $Utils.Optional<AntonymGroupByOutputType>[]
          }
          count: {
            args: Prisma.AntonymCountArgs<ExtArgs>
            result: $Utils.Optional<AntonymCountAggregateOutputType> | number
          }
        }
      }
      Definition: {
        payload: Prisma.$DefinitionPayload<ExtArgs>
        fields: Prisma.DefinitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DefinitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DefinitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>
          }
          findFirst: {
            args: Prisma.DefinitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DefinitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>
          }
          findMany: {
            args: Prisma.DefinitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>[]
          }
          create: {
            args: Prisma.DefinitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>
          }
          createMany: {
            args: Prisma.DefinitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DefinitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>[]
          }
          delete: {
            args: Prisma.DefinitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>
          }
          update: {
            args: Prisma.DefinitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>
          }
          deleteMany: {
            args: Prisma.DefinitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DefinitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DefinitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>[]
          }
          upsert: {
            args: Prisma.DefinitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DefinitionPayload>
          }
          aggregate: {
            args: Prisma.DefinitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDefinition>
          }
          groupBy: {
            args: Prisma.DefinitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DefinitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DefinitionCountArgs<ExtArgs>
            result: $Utils.Optional<DefinitionCountAggregateOutputType> | number
          }
        }
      }
      License: {
        payload: Prisma.$LicensePayload<ExtArgs>
        fields: Prisma.LicenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findFirst: {
            args: Prisma.LicenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findMany: {
            args: Prisma.LicenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          create: {
            args: Prisma.LicenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          createMany: {
            args: Prisma.LicenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          delete: {
            args: Prisma.LicenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          update: {
            args: Prisma.LicenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          deleteMany: {
            args: Prisma.LicenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LicenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          upsert: {
            args: Prisma.LicenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          aggregate: {
            args: Prisma.LicenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicense>
          }
          groupBy: {
            args: Prisma.LicenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseCountAggregateOutputType> | number
          }
        }
      }
      Meaning: {
        payload: Prisma.$MeaningPayload<ExtArgs>
        fields: Prisma.MeaningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeaningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeaningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeaningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeaningPayload>
          }
          findFirst: {
            args: Prisma.MeaningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeaningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeaningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeaningPayload>
          }
          findMany: {
            args: Prisma.MeaningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeaningPayload>[]
          }
          create: {
            args: Prisma.MeaningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeaningPayload>
          }
          createMany: {
            args: Prisma.MeaningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeaningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeaningPayload>[]
          }
          delete: {
            args: Prisma.MeaningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeaningPayload>
          }
          update: {
            args: Prisma.MeaningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeaningPayload>
          }
          deleteMany: {
            args: Prisma.MeaningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeaningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeaningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeaningPayload>[]
          }
          upsert: {
            args: Prisma.MeaningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeaningPayload>
          }
          aggregate: {
            args: Prisma.MeaningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeaning>
          }
          groupBy: {
            args: Prisma.MeaningGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeaningGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeaningCountArgs<ExtArgs>
            result: $Utils.Optional<MeaningCountAggregateOutputType> | number
          }
        }
      }
      Phonetic: {
        payload: Prisma.$PhoneticPayload<ExtArgs>
        fields: Prisma.PhoneticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhoneticFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhoneticFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneticPayload>
          }
          findFirst: {
            args: Prisma.PhoneticFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhoneticFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneticPayload>
          }
          findMany: {
            args: Prisma.PhoneticFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneticPayload>[]
          }
          create: {
            args: Prisma.PhoneticCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneticPayload>
          }
          createMany: {
            args: Prisma.PhoneticCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhoneticCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneticPayload>[]
          }
          delete: {
            args: Prisma.PhoneticDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneticPayload>
          }
          update: {
            args: Prisma.PhoneticUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneticPayload>
          }
          deleteMany: {
            args: Prisma.PhoneticDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhoneticUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhoneticUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneticPayload>[]
          }
          upsert: {
            args: Prisma.PhoneticUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhoneticPayload>
          }
          aggregate: {
            args: Prisma.PhoneticAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhonetic>
          }
          groupBy: {
            args: Prisma.PhoneticGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhoneticGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhoneticCountArgs<ExtArgs>
            result: $Utils.Optional<PhoneticCountAggregateOutputType> | number
          }
        }
      }
      SourceUrl: {
        payload: Prisma.$SourceUrlPayload<ExtArgs>
        fields: Prisma.SourceUrlFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceUrlFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUrlPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceUrlFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUrlPayload>
          }
          findFirst: {
            args: Prisma.SourceUrlFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUrlPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceUrlFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUrlPayload>
          }
          findMany: {
            args: Prisma.SourceUrlFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUrlPayload>[]
          }
          create: {
            args: Prisma.SourceUrlCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUrlPayload>
          }
          createMany: {
            args: Prisma.SourceUrlCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceUrlCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUrlPayload>[]
          }
          delete: {
            args: Prisma.SourceUrlDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUrlPayload>
          }
          update: {
            args: Prisma.SourceUrlUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUrlPayload>
          }
          deleteMany: {
            args: Prisma.SourceUrlDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceUrlUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourceUrlUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUrlPayload>[]
          }
          upsert: {
            args: Prisma.SourceUrlUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceUrlPayload>
          }
          aggregate: {
            args: Prisma.SourceUrlAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSourceUrl>
          }
          groupBy: {
            args: Prisma.SourceUrlGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceUrlGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceUrlCountArgs<ExtArgs>
            result: $Utils.Optional<SourceUrlCountAggregateOutputType> | number
          }
        }
      }
      Synonym: {
        payload: Prisma.$SynonymPayload<ExtArgs>
        fields: Prisma.SynonymFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SynonymFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynonymPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SynonymFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynonymPayload>
          }
          findFirst: {
            args: Prisma.SynonymFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynonymPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SynonymFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynonymPayload>
          }
          findMany: {
            args: Prisma.SynonymFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynonymPayload>[]
          }
          create: {
            args: Prisma.SynonymCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynonymPayload>
          }
          createMany: {
            args: Prisma.SynonymCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SynonymCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynonymPayload>[]
          }
          delete: {
            args: Prisma.SynonymDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynonymPayload>
          }
          update: {
            args: Prisma.SynonymUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynonymPayload>
          }
          deleteMany: {
            args: Prisma.SynonymDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SynonymUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SynonymUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynonymPayload>[]
          }
          upsert: {
            args: Prisma.SynonymUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SynonymPayload>
          }
          aggregate: {
            args: Prisma.SynonymAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSynonym>
          }
          groupBy: {
            args: Prisma.SynonymGroupByArgs<ExtArgs>
            result: $Utils.Optional<SynonymGroupByOutputType>[]
          }
          count: {
            args: Prisma.SynonymCountArgs<ExtArgs>
            result: $Utils.Optional<SynonymCountAggregateOutputType> | number
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
      UserWordHistory: {
        payload: Prisma.$UserWordHistoryPayload<ExtArgs>
        fields: Prisma.UserWordHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserWordHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserWordHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordHistoryPayload>
          }
          findFirst: {
            args: Prisma.UserWordHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserWordHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordHistoryPayload>
          }
          findMany: {
            args: Prisma.UserWordHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordHistoryPayload>[]
          }
          create: {
            args: Prisma.UserWordHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordHistoryPayload>
          }
          createMany: {
            args: Prisma.UserWordHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserWordHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordHistoryPayload>[]
          }
          delete: {
            args: Prisma.UserWordHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordHistoryPayload>
          }
          update: {
            args: Prisma.UserWordHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordHistoryPayload>
          }
          deleteMany: {
            args: Prisma.UserWordHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserWordHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserWordHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordHistoryPayload>[]
          }
          upsert: {
            args: Prisma.UserWordHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWordHistoryPayload>
          }
          aggregate: {
            args: Prisma.UserWordHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserWordHistory>
          }
          groupBy: {
            args: Prisma.UserWordHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserWordHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserWordHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<UserWordHistoryCountAggregateOutputType> | number
          }
        }
      }
      Word: {
        payload: Prisma.$WordPayload<ExtArgs>
        fields: Prisma.WordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findFirst: {
            args: Prisma.WordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          findMany: {
            args: Prisma.WordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          create: {
            args: Prisma.WordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          createMany: {
            args: Prisma.WordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          delete: {
            args: Prisma.WordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          update: {
            args: Prisma.WordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          deleteMany: {
            args: Prisma.WordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>[]
          }
          upsert: {
            args: Prisma.WordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WordPayload>
          }
          aggregate: {
            args: Prisma.WordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWord>
          }
          groupBy: {
            args: Prisma.WordGroupByArgs<ExtArgs>
            result: $Utils.Optional<WordGroupByOutputType>[]
          }
          count: {
            args: Prisma.WordCountArgs<ExtArgs>
            result: $Utils.Optional<WordCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    antonym?: AntonymOmit
    definition?: DefinitionOmit
    license?: LicenseOmit
    meaning?: MeaningOmit
    phonetic?: PhoneticOmit
    sourceUrl?: SourceUrlOmit
    synonym?: SynonymOmit
    user?: UserOmit
    userWordHistory?: UserWordHistoryOmit
    word?: WordOmit
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type LicenseCountOutputType
   */

  export type LicenseCountOutputType = {
    words: number
    phonetics: number
  }

  export type LicenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    words?: boolean | LicenseCountOutputTypeCountWordsArgs
    phonetics?: boolean | LicenseCountOutputTypeCountPhoneticsArgs
  }

  // Custom InputTypes
  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseCountOutputType
     */
    select?: LicenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeCountWordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
  }

  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeCountPhoneticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneticWhereInput
  }


  /**
   * Count Type MeaningCountOutputType
   */

  export type MeaningCountOutputType = {
    definitions: number
    synonyms: number
    antonyms: number
  }

  export type MeaningCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    definitions?: boolean | MeaningCountOutputTypeCountDefinitionsArgs
    synonyms?: boolean | MeaningCountOutputTypeCountSynonymsArgs
    antonyms?: boolean | MeaningCountOutputTypeCountAntonymsArgs
  }

  // Custom InputTypes
  /**
   * MeaningCountOutputType without action
   */
  export type MeaningCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeaningCountOutputType
     */
    select?: MeaningCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeaningCountOutputType without action
   */
  export type MeaningCountOutputTypeCountDefinitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DefinitionWhereInput
  }

  /**
   * MeaningCountOutputType without action
   */
  export type MeaningCountOutputTypeCountSynonymsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SynonymWhereInput
  }

  /**
   * MeaningCountOutputType without action
   */
  export type MeaningCountOutputTypeCountAntonymsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AntonymWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    history: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | UserCountOutputTypeCountHistoryArgs
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
  export type UserCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWordHistoryWhereInput
  }


  /**
   * Count Type WordCountOutputType
   */

  export type WordCountOutputType = {
    phonetics: number
    meanings: number
    sourceUrls: number
    history: number
  }

  export type WordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phonetics?: boolean | WordCountOutputTypeCountPhoneticsArgs
    meanings?: boolean | WordCountOutputTypeCountMeaningsArgs
    sourceUrls?: boolean | WordCountOutputTypeCountSourceUrlsArgs
    history?: boolean | WordCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WordCountOutputType
     */
    select?: WordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeCountPhoneticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneticWhereInput
  }

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeCountMeaningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeaningWhereInput
  }

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeCountSourceUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceUrlWhereInput
  }

  /**
   * WordCountOutputType without action
   */
  export type WordCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWordHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Antonym
   */

  export type AggregateAntonym = {
    _count: AntonymCountAggregateOutputType | null
    _min: AntonymMinAggregateOutputType | null
    _max: AntonymMaxAggregateOutputType | null
  }

  export type AntonymMinAggregateOutputType = {
    antonymId: string | null
    word: string | null
    meaningId: string | null
  }

  export type AntonymMaxAggregateOutputType = {
    antonymId: string | null
    word: string | null
    meaningId: string | null
  }

  export type AntonymCountAggregateOutputType = {
    antonymId: number
    word: number
    meaningId: number
    _all: number
  }


  export type AntonymMinAggregateInputType = {
    antonymId?: true
    word?: true
    meaningId?: true
  }

  export type AntonymMaxAggregateInputType = {
    antonymId?: true
    word?: true
    meaningId?: true
  }

  export type AntonymCountAggregateInputType = {
    antonymId?: true
    word?: true
    meaningId?: true
    _all?: true
  }

  export type AntonymAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Antonym to aggregate.
     */
    where?: AntonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Antonyms to fetch.
     */
    orderBy?: AntonymOrderByWithRelationInput | AntonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AntonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Antonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Antonyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Antonyms
    **/
    _count?: true | AntonymCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AntonymMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AntonymMaxAggregateInputType
  }

  export type GetAntonymAggregateType<T extends AntonymAggregateArgs> = {
        [P in keyof T & keyof AggregateAntonym]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAntonym[P]>
      : GetScalarType<T[P], AggregateAntonym[P]>
  }




  export type AntonymGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AntonymWhereInput
    orderBy?: AntonymOrderByWithAggregationInput | AntonymOrderByWithAggregationInput[]
    by: AntonymScalarFieldEnum[] | AntonymScalarFieldEnum
    having?: AntonymScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AntonymCountAggregateInputType | true
    _min?: AntonymMinAggregateInputType
    _max?: AntonymMaxAggregateInputType
  }

  export type AntonymGroupByOutputType = {
    antonymId: string
    word: string
    meaningId: string
    _count: AntonymCountAggregateOutputType | null
    _min: AntonymMinAggregateOutputType | null
    _max: AntonymMaxAggregateOutputType | null
  }

  type GetAntonymGroupByPayload<T extends AntonymGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AntonymGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AntonymGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AntonymGroupByOutputType[P]>
            : GetScalarType<T[P], AntonymGroupByOutputType[P]>
        }
      >
    >


  export type AntonymSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    antonymId?: boolean
    word?: boolean
    meaningId?: boolean
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["antonym"]>

  export type AntonymSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    antonymId?: boolean
    word?: boolean
    meaningId?: boolean
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["antonym"]>

  export type AntonymSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    antonymId?: boolean
    word?: boolean
    meaningId?: boolean
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["antonym"]>

  export type AntonymSelectScalar = {
    antonymId?: boolean
    word?: boolean
    meaningId?: boolean
  }

  export type AntonymOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"antonymId" | "word" | "meaningId", ExtArgs["result"]["antonym"]>
  export type AntonymInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }
  export type AntonymIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }
  export type AntonymIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }

  export type $AntonymPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Antonym"
    objects: {
      meaning: Prisma.$MeaningPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      antonymId: string
      word: string
      meaningId: string
    }, ExtArgs["result"]["antonym"]>
    composites: {}
  }

  type AntonymGetPayload<S extends boolean | null | undefined | AntonymDefaultArgs> = $Result.GetResult<Prisma.$AntonymPayload, S>

  type AntonymCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AntonymFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AntonymCountAggregateInputType | true
    }

  export interface AntonymDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Antonym'], meta: { name: 'Antonym' } }
    /**
     * Find zero or one Antonym that matches the filter.
     * @param {AntonymFindUniqueArgs} args - Arguments to find a Antonym
     * @example
     * // Get one Antonym
     * const antonym = await prisma.antonym.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AntonymFindUniqueArgs>(args: SelectSubset<T, AntonymFindUniqueArgs<ExtArgs>>): Prisma__AntonymClient<$Result.GetResult<Prisma.$AntonymPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Antonym that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AntonymFindUniqueOrThrowArgs} args - Arguments to find a Antonym
     * @example
     * // Get one Antonym
     * const antonym = await prisma.antonym.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AntonymFindUniqueOrThrowArgs>(args: SelectSubset<T, AntonymFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AntonymClient<$Result.GetResult<Prisma.$AntonymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Antonym that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AntonymFindFirstArgs} args - Arguments to find a Antonym
     * @example
     * // Get one Antonym
     * const antonym = await prisma.antonym.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AntonymFindFirstArgs>(args?: SelectSubset<T, AntonymFindFirstArgs<ExtArgs>>): Prisma__AntonymClient<$Result.GetResult<Prisma.$AntonymPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Antonym that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AntonymFindFirstOrThrowArgs} args - Arguments to find a Antonym
     * @example
     * // Get one Antonym
     * const antonym = await prisma.antonym.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AntonymFindFirstOrThrowArgs>(args?: SelectSubset<T, AntonymFindFirstOrThrowArgs<ExtArgs>>): Prisma__AntonymClient<$Result.GetResult<Prisma.$AntonymPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Antonyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AntonymFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Antonyms
     * const antonyms = await prisma.antonym.findMany()
     * 
     * // Get first 10 Antonyms
     * const antonyms = await prisma.antonym.findMany({ take: 10 })
     * 
     * // Only select the `antonymId`
     * const antonymWithAntonymIdOnly = await prisma.antonym.findMany({ select: { antonymId: true } })
     * 
     */
    findMany<T extends AntonymFindManyArgs>(args?: SelectSubset<T, AntonymFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AntonymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Antonym.
     * @param {AntonymCreateArgs} args - Arguments to create a Antonym.
     * @example
     * // Create one Antonym
     * const Antonym = await prisma.antonym.create({
     *   data: {
     *     // ... data to create a Antonym
     *   }
     * })
     * 
     */
    create<T extends AntonymCreateArgs>(args: SelectSubset<T, AntonymCreateArgs<ExtArgs>>): Prisma__AntonymClient<$Result.GetResult<Prisma.$AntonymPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Antonyms.
     * @param {AntonymCreateManyArgs} args - Arguments to create many Antonyms.
     * @example
     * // Create many Antonyms
     * const antonym = await prisma.antonym.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AntonymCreateManyArgs>(args?: SelectSubset<T, AntonymCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Antonyms and returns the data saved in the database.
     * @param {AntonymCreateManyAndReturnArgs} args - Arguments to create many Antonyms.
     * @example
     * // Create many Antonyms
     * const antonym = await prisma.antonym.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Antonyms and only return the `antonymId`
     * const antonymWithAntonymIdOnly = await prisma.antonym.createManyAndReturn({
     *   select: { antonymId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AntonymCreateManyAndReturnArgs>(args?: SelectSubset<T, AntonymCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AntonymPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Antonym.
     * @param {AntonymDeleteArgs} args - Arguments to delete one Antonym.
     * @example
     * // Delete one Antonym
     * const Antonym = await prisma.antonym.delete({
     *   where: {
     *     // ... filter to delete one Antonym
     *   }
     * })
     * 
     */
    delete<T extends AntonymDeleteArgs>(args: SelectSubset<T, AntonymDeleteArgs<ExtArgs>>): Prisma__AntonymClient<$Result.GetResult<Prisma.$AntonymPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Antonym.
     * @param {AntonymUpdateArgs} args - Arguments to update one Antonym.
     * @example
     * // Update one Antonym
     * const antonym = await prisma.antonym.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AntonymUpdateArgs>(args: SelectSubset<T, AntonymUpdateArgs<ExtArgs>>): Prisma__AntonymClient<$Result.GetResult<Prisma.$AntonymPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Antonyms.
     * @param {AntonymDeleteManyArgs} args - Arguments to filter Antonyms to delete.
     * @example
     * // Delete a few Antonyms
     * const { count } = await prisma.antonym.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AntonymDeleteManyArgs>(args?: SelectSubset<T, AntonymDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Antonyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AntonymUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Antonyms
     * const antonym = await prisma.antonym.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AntonymUpdateManyArgs>(args: SelectSubset<T, AntonymUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Antonyms and returns the data updated in the database.
     * @param {AntonymUpdateManyAndReturnArgs} args - Arguments to update many Antonyms.
     * @example
     * // Update many Antonyms
     * const antonym = await prisma.antonym.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Antonyms and only return the `antonymId`
     * const antonymWithAntonymIdOnly = await prisma.antonym.updateManyAndReturn({
     *   select: { antonymId: true },
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
    updateManyAndReturn<T extends AntonymUpdateManyAndReturnArgs>(args: SelectSubset<T, AntonymUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AntonymPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Antonym.
     * @param {AntonymUpsertArgs} args - Arguments to update or create a Antonym.
     * @example
     * // Update or create a Antonym
     * const antonym = await prisma.antonym.upsert({
     *   create: {
     *     // ... data to create a Antonym
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Antonym we want to update
     *   }
     * })
     */
    upsert<T extends AntonymUpsertArgs>(args: SelectSubset<T, AntonymUpsertArgs<ExtArgs>>): Prisma__AntonymClient<$Result.GetResult<Prisma.$AntonymPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Antonyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AntonymCountArgs} args - Arguments to filter Antonyms to count.
     * @example
     * // Count the number of Antonyms
     * const count = await prisma.antonym.count({
     *   where: {
     *     // ... the filter for the Antonyms we want to count
     *   }
     * })
    **/
    count<T extends AntonymCountArgs>(
      args?: Subset<T, AntonymCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AntonymCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Antonym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AntonymAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AntonymAggregateArgs>(args: Subset<T, AntonymAggregateArgs>): Prisma.PrismaPromise<GetAntonymAggregateType<T>>

    /**
     * Group by Antonym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AntonymGroupByArgs} args - Group by arguments.
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
      T extends AntonymGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AntonymGroupByArgs['orderBy'] }
        : { orderBy?: AntonymGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AntonymGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAntonymGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Antonym model
   */
  readonly fields: AntonymFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Antonym.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AntonymClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meaning<T extends MeaningDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeaningDefaultArgs<ExtArgs>>): Prisma__MeaningClient<$Result.GetResult<Prisma.$MeaningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Antonym model
   */
  interface AntonymFieldRefs {
    readonly antonymId: FieldRef<"Antonym", 'String'>
    readonly word: FieldRef<"Antonym", 'String'>
    readonly meaningId: FieldRef<"Antonym", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Antonym findUnique
   */
  export type AntonymFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Antonym
     */
    select?: AntonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Antonym
     */
    omit?: AntonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AntonymInclude<ExtArgs> | null
    /**
     * Filter, which Antonym to fetch.
     */
    where: AntonymWhereUniqueInput
  }

  /**
   * Antonym findUniqueOrThrow
   */
  export type AntonymFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Antonym
     */
    select?: AntonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Antonym
     */
    omit?: AntonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AntonymInclude<ExtArgs> | null
    /**
     * Filter, which Antonym to fetch.
     */
    where: AntonymWhereUniqueInput
  }

  /**
   * Antonym findFirst
   */
  export type AntonymFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Antonym
     */
    select?: AntonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Antonym
     */
    omit?: AntonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AntonymInclude<ExtArgs> | null
    /**
     * Filter, which Antonym to fetch.
     */
    where?: AntonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Antonyms to fetch.
     */
    orderBy?: AntonymOrderByWithRelationInput | AntonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Antonyms.
     */
    cursor?: AntonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Antonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Antonyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Antonyms.
     */
    distinct?: AntonymScalarFieldEnum | AntonymScalarFieldEnum[]
  }

  /**
   * Antonym findFirstOrThrow
   */
  export type AntonymFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Antonym
     */
    select?: AntonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Antonym
     */
    omit?: AntonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AntonymInclude<ExtArgs> | null
    /**
     * Filter, which Antonym to fetch.
     */
    where?: AntonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Antonyms to fetch.
     */
    orderBy?: AntonymOrderByWithRelationInput | AntonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Antonyms.
     */
    cursor?: AntonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Antonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Antonyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Antonyms.
     */
    distinct?: AntonymScalarFieldEnum | AntonymScalarFieldEnum[]
  }

  /**
   * Antonym findMany
   */
  export type AntonymFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Antonym
     */
    select?: AntonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Antonym
     */
    omit?: AntonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AntonymInclude<ExtArgs> | null
    /**
     * Filter, which Antonyms to fetch.
     */
    where?: AntonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Antonyms to fetch.
     */
    orderBy?: AntonymOrderByWithRelationInput | AntonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Antonyms.
     */
    cursor?: AntonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Antonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Antonyms.
     */
    skip?: number
    distinct?: AntonymScalarFieldEnum | AntonymScalarFieldEnum[]
  }

  /**
   * Antonym create
   */
  export type AntonymCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Antonym
     */
    select?: AntonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Antonym
     */
    omit?: AntonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AntonymInclude<ExtArgs> | null
    /**
     * The data needed to create a Antonym.
     */
    data: XOR<AntonymCreateInput, AntonymUncheckedCreateInput>
  }

  /**
   * Antonym createMany
   */
  export type AntonymCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Antonyms.
     */
    data: AntonymCreateManyInput | AntonymCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Antonym createManyAndReturn
   */
  export type AntonymCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Antonym
     */
    select?: AntonymSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Antonym
     */
    omit?: AntonymOmit<ExtArgs> | null
    /**
     * The data used to create many Antonyms.
     */
    data: AntonymCreateManyInput | AntonymCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AntonymIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Antonym update
   */
  export type AntonymUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Antonym
     */
    select?: AntonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Antonym
     */
    omit?: AntonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AntonymInclude<ExtArgs> | null
    /**
     * The data needed to update a Antonym.
     */
    data: XOR<AntonymUpdateInput, AntonymUncheckedUpdateInput>
    /**
     * Choose, which Antonym to update.
     */
    where: AntonymWhereUniqueInput
  }

  /**
   * Antonym updateMany
   */
  export type AntonymUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Antonyms.
     */
    data: XOR<AntonymUpdateManyMutationInput, AntonymUncheckedUpdateManyInput>
    /**
     * Filter which Antonyms to update
     */
    where?: AntonymWhereInput
    /**
     * Limit how many Antonyms to update.
     */
    limit?: number
  }

  /**
   * Antonym updateManyAndReturn
   */
  export type AntonymUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Antonym
     */
    select?: AntonymSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Antonym
     */
    omit?: AntonymOmit<ExtArgs> | null
    /**
     * The data used to update Antonyms.
     */
    data: XOR<AntonymUpdateManyMutationInput, AntonymUncheckedUpdateManyInput>
    /**
     * Filter which Antonyms to update
     */
    where?: AntonymWhereInput
    /**
     * Limit how many Antonyms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AntonymIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Antonym upsert
   */
  export type AntonymUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Antonym
     */
    select?: AntonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Antonym
     */
    omit?: AntonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AntonymInclude<ExtArgs> | null
    /**
     * The filter to search for the Antonym to update in case it exists.
     */
    where: AntonymWhereUniqueInput
    /**
     * In case the Antonym found by the `where` argument doesn't exist, create a new Antonym with this data.
     */
    create: XOR<AntonymCreateInput, AntonymUncheckedCreateInput>
    /**
     * In case the Antonym was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AntonymUpdateInput, AntonymUncheckedUpdateInput>
  }

  /**
   * Antonym delete
   */
  export type AntonymDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Antonym
     */
    select?: AntonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Antonym
     */
    omit?: AntonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AntonymInclude<ExtArgs> | null
    /**
     * Filter which Antonym to delete.
     */
    where: AntonymWhereUniqueInput
  }

  /**
   * Antonym deleteMany
   */
  export type AntonymDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Antonyms to delete
     */
    where?: AntonymWhereInput
    /**
     * Limit how many Antonyms to delete.
     */
    limit?: number
  }

  /**
   * Antonym without action
   */
  export type AntonymDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Antonym
     */
    select?: AntonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Antonym
     */
    omit?: AntonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AntonymInclude<ExtArgs> | null
  }


  /**
   * Model Definition
   */

  export type AggregateDefinition = {
    _count: DefinitionCountAggregateOutputType | null
    _min: DefinitionMinAggregateOutputType | null
    _max: DefinitionMaxAggregateOutputType | null
  }

  export type DefinitionMinAggregateOutputType = {
    definitionId: string | null
    definition: string | null
    example: string | null
    meaningId: string | null
  }

  export type DefinitionMaxAggregateOutputType = {
    definitionId: string | null
    definition: string | null
    example: string | null
    meaningId: string | null
  }

  export type DefinitionCountAggregateOutputType = {
    definitionId: number
    definition: number
    example: number
    meaningId: number
    _all: number
  }


  export type DefinitionMinAggregateInputType = {
    definitionId?: true
    definition?: true
    example?: true
    meaningId?: true
  }

  export type DefinitionMaxAggregateInputType = {
    definitionId?: true
    definition?: true
    example?: true
    meaningId?: true
  }

  export type DefinitionCountAggregateInputType = {
    definitionId?: true
    definition?: true
    example?: true
    meaningId?: true
    _all?: true
  }

  export type DefinitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Definition to aggregate.
     */
    where?: DefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Definitions to fetch.
     */
    orderBy?: DefinitionOrderByWithRelationInput | DefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Definitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Definitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Definitions
    **/
    _count?: true | DefinitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DefinitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DefinitionMaxAggregateInputType
  }

  export type GetDefinitionAggregateType<T extends DefinitionAggregateArgs> = {
        [P in keyof T & keyof AggregateDefinition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDefinition[P]>
      : GetScalarType<T[P], AggregateDefinition[P]>
  }




  export type DefinitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DefinitionWhereInput
    orderBy?: DefinitionOrderByWithAggregationInput | DefinitionOrderByWithAggregationInput[]
    by: DefinitionScalarFieldEnum[] | DefinitionScalarFieldEnum
    having?: DefinitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DefinitionCountAggregateInputType | true
    _min?: DefinitionMinAggregateInputType
    _max?: DefinitionMaxAggregateInputType
  }

  export type DefinitionGroupByOutputType = {
    definitionId: string
    definition: string
    example: string | null
    meaningId: string
    _count: DefinitionCountAggregateOutputType | null
    _min: DefinitionMinAggregateOutputType | null
    _max: DefinitionMaxAggregateOutputType | null
  }

  type GetDefinitionGroupByPayload<T extends DefinitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DefinitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DefinitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DefinitionGroupByOutputType[P]>
            : GetScalarType<T[P], DefinitionGroupByOutputType[P]>
        }
      >
    >


  export type DefinitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    definitionId?: boolean
    definition?: boolean
    example?: boolean
    meaningId?: boolean
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["definition"]>

  export type DefinitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    definitionId?: boolean
    definition?: boolean
    example?: boolean
    meaningId?: boolean
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["definition"]>

  export type DefinitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    definitionId?: boolean
    definition?: boolean
    example?: boolean
    meaningId?: boolean
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["definition"]>

  export type DefinitionSelectScalar = {
    definitionId?: boolean
    definition?: boolean
    example?: boolean
    meaningId?: boolean
  }

  export type DefinitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"definitionId" | "definition" | "example" | "meaningId", ExtArgs["result"]["definition"]>
  export type DefinitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }
  export type DefinitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }
  export type DefinitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }

  export type $DefinitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Definition"
    objects: {
      meaning: Prisma.$MeaningPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      definitionId: string
      definition: string
      example: string | null
      meaningId: string
    }, ExtArgs["result"]["definition"]>
    composites: {}
  }

  type DefinitionGetPayload<S extends boolean | null | undefined | DefinitionDefaultArgs> = $Result.GetResult<Prisma.$DefinitionPayload, S>

  type DefinitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DefinitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DefinitionCountAggregateInputType | true
    }

  export interface DefinitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Definition'], meta: { name: 'Definition' } }
    /**
     * Find zero or one Definition that matches the filter.
     * @param {DefinitionFindUniqueArgs} args - Arguments to find a Definition
     * @example
     * // Get one Definition
     * const definition = await prisma.definition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DefinitionFindUniqueArgs>(args: SelectSubset<T, DefinitionFindUniqueArgs<ExtArgs>>): Prisma__DefinitionClient<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Definition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DefinitionFindUniqueOrThrowArgs} args - Arguments to find a Definition
     * @example
     * // Get one Definition
     * const definition = await prisma.definition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DefinitionFindUniqueOrThrowArgs>(args: SelectSubset<T, DefinitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DefinitionClient<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Definition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefinitionFindFirstArgs} args - Arguments to find a Definition
     * @example
     * // Get one Definition
     * const definition = await prisma.definition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DefinitionFindFirstArgs>(args?: SelectSubset<T, DefinitionFindFirstArgs<ExtArgs>>): Prisma__DefinitionClient<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Definition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefinitionFindFirstOrThrowArgs} args - Arguments to find a Definition
     * @example
     * // Get one Definition
     * const definition = await prisma.definition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DefinitionFindFirstOrThrowArgs>(args?: SelectSubset<T, DefinitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DefinitionClient<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Definitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefinitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Definitions
     * const definitions = await prisma.definition.findMany()
     * 
     * // Get first 10 Definitions
     * const definitions = await prisma.definition.findMany({ take: 10 })
     * 
     * // Only select the `definitionId`
     * const definitionWithDefinitionIdOnly = await prisma.definition.findMany({ select: { definitionId: true } })
     * 
     */
    findMany<T extends DefinitionFindManyArgs>(args?: SelectSubset<T, DefinitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Definition.
     * @param {DefinitionCreateArgs} args - Arguments to create a Definition.
     * @example
     * // Create one Definition
     * const Definition = await prisma.definition.create({
     *   data: {
     *     // ... data to create a Definition
     *   }
     * })
     * 
     */
    create<T extends DefinitionCreateArgs>(args: SelectSubset<T, DefinitionCreateArgs<ExtArgs>>): Prisma__DefinitionClient<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Definitions.
     * @param {DefinitionCreateManyArgs} args - Arguments to create many Definitions.
     * @example
     * // Create many Definitions
     * const definition = await prisma.definition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DefinitionCreateManyArgs>(args?: SelectSubset<T, DefinitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Definitions and returns the data saved in the database.
     * @param {DefinitionCreateManyAndReturnArgs} args - Arguments to create many Definitions.
     * @example
     * // Create many Definitions
     * const definition = await prisma.definition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Definitions and only return the `definitionId`
     * const definitionWithDefinitionIdOnly = await prisma.definition.createManyAndReturn({
     *   select: { definitionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DefinitionCreateManyAndReturnArgs>(args?: SelectSubset<T, DefinitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Definition.
     * @param {DefinitionDeleteArgs} args - Arguments to delete one Definition.
     * @example
     * // Delete one Definition
     * const Definition = await prisma.definition.delete({
     *   where: {
     *     // ... filter to delete one Definition
     *   }
     * })
     * 
     */
    delete<T extends DefinitionDeleteArgs>(args: SelectSubset<T, DefinitionDeleteArgs<ExtArgs>>): Prisma__DefinitionClient<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Definition.
     * @param {DefinitionUpdateArgs} args - Arguments to update one Definition.
     * @example
     * // Update one Definition
     * const definition = await prisma.definition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DefinitionUpdateArgs>(args: SelectSubset<T, DefinitionUpdateArgs<ExtArgs>>): Prisma__DefinitionClient<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Definitions.
     * @param {DefinitionDeleteManyArgs} args - Arguments to filter Definitions to delete.
     * @example
     * // Delete a few Definitions
     * const { count } = await prisma.definition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DefinitionDeleteManyArgs>(args?: SelectSubset<T, DefinitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Definitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefinitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Definitions
     * const definition = await prisma.definition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DefinitionUpdateManyArgs>(args: SelectSubset<T, DefinitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Definitions and returns the data updated in the database.
     * @param {DefinitionUpdateManyAndReturnArgs} args - Arguments to update many Definitions.
     * @example
     * // Update many Definitions
     * const definition = await prisma.definition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Definitions and only return the `definitionId`
     * const definitionWithDefinitionIdOnly = await prisma.definition.updateManyAndReturn({
     *   select: { definitionId: true },
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
    updateManyAndReturn<T extends DefinitionUpdateManyAndReturnArgs>(args: SelectSubset<T, DefinitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Definition.
     * @param {DefinitionUpsertArgs} args - Arguments to update or create a Definition.
     * @example
     * // Update or create a Definition
     * const definition = await prisma.definition.upsert({
     *   create: {
     *     // ... data to create a Definition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Definition we want to update
     *   }
     * })
     */
    upsert<T extends DefinitionUpsertArgs>(args: SelectSubset<T, DefinitionUpsertArgs<ExtArgs>>): Prisma__DefinitionClient<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Definitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefinitionCountArgs} args - Arguments to filter Definitions to count.
     * @example
     * // Count the number of Definitions
     * const count = await prisma.definition.count({
     *   where: {
     *     // ... the filter for the Definitions we want to count
     *   }
     * })
    **/
    count<T extends DefinitionCountArgs>(
      args?: Subset<T, DefinitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DefinitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Definition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefinitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DefinitionAggregateArgs>(args: Subset<T, DefinitionAggregateArgs>): Prisma.PrismaPromise<GetDefinitionAggregateType<T>>

    /**
     * Group by Definition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DefinitionGroupByArgs} args - Group by arguments.
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
      T extends DefinitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DefinitionGroupByArgs['orderBy'] }
        : { orderBy?: DefinitionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DefinitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDefinitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Definition model
   */
  readonly fields: DefinitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Definition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DefinitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meaning<T extends MeaningDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeaningDefaultArgs<ExtArgs>>): Prisma__MeaningClient<$Result.GetResult<Prisma.$MeaningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Definition model
   */
  interface DefinitionFieldRefs {
    readonly definitionId: FieldRef<"Definition", 'String'>
    readonly definition: FieldRef<"Definition", 'String'>
    readonly example: FieldRef<"Definition", 'String'>
    readonly meaningId: FieldRef<"Definition", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Definition findUnique
   */
  export type DefinitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * Filter, which Definition to fetch.
     */
    where: DefinitionWhereUniqueInput
  }

  /**
   * Definition findUniqueOrThrow
   */
  export type DefinitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * Filter, which Definition to fetch.
     */
    where: DefinitionWhereUniqueInput
  }

  /**
   * Definition findFirst
   */
  export type DefinitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * Filter, which Definition to fetch.
     */
    where?: DefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Definitions to fetch.
     */
    orderBy?: DefinitionOrderByWithRelationInput | DefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Definitions.
     */
    cursor?: DefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Definitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Definitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Definitions.
     */
    distinct?: DefinitionScalarFieldEnum | DefinitionScalarFieldEnum[]
  }

  /**
   * Definition findFirstOrThrow
   */
  export type DefinitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * Filter, which Definition to fetch.
     */
    where?: DefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Definitions to fetch.
     */
    orderBy?: DefinitionOrderByWithRelationInput | DefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Definitions.
     */
    cursor?: DefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Definitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Definitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Definitions.
     */
    distinct?: DefinitionScalarFieldEnum | DefinitionScalarFieldEnum[]
  }

  /**
   * Definition findMany
   */
  export type DefinitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * Filter, which Definitions to fetch.
     */
    where?: DefinitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Definitions to fetch.
     */
    orderBy?: DefinitionOrderByWithRelationInput | DefinitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Definitions.
     */
    cursor?: DefinitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Definitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Definitions.
     */
    skip?: number
    distinct?: DefinitionScalarFieldEnum | DefinitionScalarFieldEnum[]
  }

  /**
   * Definition create
   */
  export type DefinitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * The data needed to create a Definition.
     */
    data: XOR<DefinitionCreateInput, DefinitionUncheckedCreateInput>
  }

  /**
   * Definition createMany
   */
  export type DefinitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Definitions.
     */
    data: DefinitionCreateManyInput | DefinitionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Definition createManyAndReturn
   */
  export type DefinitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * The data used to create many Definitions.
     */
    data: DefinitionCreateManyInput | DefinitionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Definition update
   */
  export type DefinitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * The data needed to update a Definition.
     */
    data: XOR<DefinitionUpdateInput, DefinitionUncheckedUpdateInput>
    /**
     * Choose, which Definition to update.
     */
    where: DefinitionWhereUniqueInput
  }

  /**
   * Definition updateMany
   */
  export type DefinitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Definitions.
     */
    data: XOR<DefinitionUpdateManyMutationInput, DefinitionUncheckedUpdateManyInput>
    /**
     * Filter which Definitions to update
     */
    where?: DefinitionWhereInput
    /**
     * Limit how many Definitions to update.
     */
    limit?: number
  }

  /**
   * Definition updateManyAndReturn
   */
  export type DefinitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * The data used to update Definitions.
     */
    data: XOR<DefinitionUpdateManyMutationInput, DefinitionUncheckedUpdateManyInput>
    /**
     * Filter which Definitions to update
     */
    where?: DefinitionWhereInput
    /**
     * Limit how many Definitions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Definition upsert
   */
  export type DefinitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * The filter to search for the Definition to update in case it exists.
     */
    where: DefinitionWhereUniqueInput
    /**
     * In case the Definition found by the `where` argument doesn't exist, create a new Definition with this data.
     */
    create: XOR<DefinitionCreateInput, DefinitionUncheckedCreateInput>
    /**
     * In case the Definition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DefinitionUpdateInput, DefinitionUncheckedUpdateInput>
  }

  /**
   * Definition delete
   */
  export type DefinitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    /**
     * Filter which Definition to delete.
     */
    where: DefinitionWhereUniqueInput
  }

  /**
   * Definition deleteMany
   */
  export type DefinitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Definitions to delete
     */
    where?: DefinitionWhereInput
    /**
     * Limit how many Definitions to delete.
     */
    limit?: number
  }

  /**
   * Definition without action
   */
  export type DefinitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
  }


  /**
   * Model License
   */

  export type AggregateLicense = {
    _count: LicenseCountAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  export type LicenseMinAggregateOutputType = {
    licenseId: string | null
    name: string | null
    url: string | null
  }

  export type LicenseMaxAggregateOutputType = {
    licenseId: string | null
    name: string | null
    url: string | null
  }

  export type LicenseCountAggregateOutputType = {
    licenseId: number
    name: number
    url: number
    _all: number
  }


  export type LicenseMinAggregateInputType = {
    licenseId?: true
    name?: true
    url?: true
  }

  export type LicenseMaxAggregateInputType = {
    licenseId?: true
    name?: true
    url?: true
  }

  export type LicenseCountAggregateInputType = {
    licenseId?: true
    name?: true
    url?: true
    _all?: true
  }

  export type LicenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which License to aggregate.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Licenses
    **/
    _count?: true | LicenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseMaxAggregateInputType
  }

  export type GetLicenseAggregateType<T extends LicenseAggregateArgs> = {
        [P in keyof T & keyof AggregateLicense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicense[P]>
      : GetScalarType<T[P], AggregateLicense[P]>
  }




  export type LicenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithAggregationInput | LicenseOrderByWithAggregationInput[]
    by: LicenseScalarFieldEnum[] | LicenseScalarFieldEnum
    having?: LicenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseCountAggregateInputType | true
    _min?: LicenseMinAggregateInputType
    _max?: LicenseMaxAggregateInputType
  }

  export type LicenseGroupByOutputType = {
    licenseId: string
    name: string
    url: string
    _count: LicenseCountAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  type GetLicenseGroupByPayload<T extends LicenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseGroupByOutputType[P]>
        }
      >
    >


  export type LicenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    licenseId?: boolean
    name?: boolean
    url?: boolean
    words?: boolean | License$wordsArgs<ExtArgs>
    phonetics?: boolean | License$phoneticsArgs<ExtArgs>
    _count?: boolean | LicenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    licenseId?: boolean
    name?: boolean
    url?: boolean
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    licenseId?: boolean
    name?: boolean
    url?: boolean
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectScalar = {
    licenseId?: boolean
    name?: boolean
    url?: boolean
  }

  export type LicenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"licenseId" | "name" | "url", ExtArgs["result"]["license"]>
  export type LicenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    words?: boolean | License$wordsArgs<ExtArgs>
    phonetics?: boolean | License$phoneticsArgs<ExtArgs>
    _count?: boolean | LicenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LicenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LicenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LicensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "License"
    objects: {
      words: Prisma.$WordPayload<ExtArgs>[]
      phonetics: Prisma.$PhoneticPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      licenseId: string
      name: string
      url: string
    }, ExtArgs["result"]["license"]>
    composites: {}
  }

  type LicenseGetPayload<S extends boolean | null | undefined | LicenseDefaultArgs> = $Result.GetResult<Prisma.$LicensePayload, S>

  type LicenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenseCountAggregateInputType | true
    }

  export interface LicenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['License'], meta: { name: 'License' } }
    /**
     * Find zero or one License that matches the filter.
     * @param {LicenseFindUniqueArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseFindUniqueArgs>(args: SelectSubset<T, LicenseFindUniqueArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one License that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicenseFindUniqueOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseFindFirstArgs>(args?: SelectSubset<T, LicenseFindFirstArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Licenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licenses
     * const licenses = await prisma.license.findMany()
     * 
     * // Get first 10 Licenses
     * const licenses = await prisma.license.findMany({ take: 10 })
     * 
     * // Only select the `licenseId`
     * const licenseWithLicenseIdOnly = await prisma.license.findMany({ select: { licenseId: true } })
     * 
     */
    findMany<T extends LicenseFindManyArgs>(args?: SelectSubset<T, LicenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a License.
     * @param {LicenseCreateArgs} args - Arguments to create a License.
     * @example
     * // Create one License
     * const License = await prisma.license.create({
     *   data: {
     *     // ... data to create a License
     *   }
     * })
     * 
     */
    create<T extends LicenseCreateArgs>(args: SelectSubset<T, LicenseCreateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Licenses.
     * @param {LicenseCreateManyArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseCreateManyArgs>(args?: SelectSubset<T, LicenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Licenses and returns the data saved in the database.
     * @param {LicenseCreateManyAndReturnArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Licenses and only return the `licenseId`
     * const licenseWithLicenseIdOnly = await prisma.license.createManyAndReturn({
     *   select: { licenseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a License.
     * @param {LicenseDeleteArgs} args - Arguments to delete one License.
     * @example
     * // Delete one License
     * const License = await prisma.license.delete({
     *   where: {
     *     // ... filter to delete one License
     *   }
     * })
     * 
     */
    delete<T extends LicenseDeleteArgs>(args: SelectSubset<T, LicenseDeleteArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one License.
     * @param {LicenseUpdateArgs} args - Arguments to update one License.
     * @example
     * // Update one License
     * const license = await prisma.license.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseUpdateArgs>(args: SelectSubset<T, LicenseUpdateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Licenses.
     * @param {LicenseDeleteManyArgs} args - Arguments to filter Licenses to delete.
     * @example
     * // Delete a few Licenses
     * const { count } = await prisma.license.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseDeleteManyArgs>(args?: SelectSubset<T, LicenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseUpdateManyArgs>(args: SelectSubset<T, LicenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses and returns the data updated in the database.
     * @param {LicenseUpdateManyAndReturnArgs} args - Arguments to update many Licenses.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Licenses and only return the `licenseId`
     * const licenseWithLicenseIdOnly = await prisma.license.updateManyAndReturn({
     *   select: { licenseId: true },
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
    updateManyAndReturn<T extends LicenseUpdateManyAndReturnArgs>(args: SelectSubset<T, LicenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one License.
     * @param {LicenseUpsertArgs} args - Arguments to update or create a License.
     * @example
     * // Update or create a License
     * const license = await prisma.license.upsert({
     *   create: {
     *     // ... data to create a License
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the License we want to update
     *   }
     * })
     */
    upsert<T extends LicenseUpsertArgs>(args: SelectSubset<T, LicenseUpsertArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseCountArgs} args - Arguments to filter Licenses to count.
     * @example
     * // Count the number of Licenses
     * const count = await prisma.license.count({
     *   where: {
     *     // ... the filter for the Licenses we want to count
     *   }
     * })
    **/
    count<T extends LicenseCountArgs>(
      args?: Subset<T, LicenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LicenseAggregateArgs>(args: Subset<T, LicenseAggregateArgs>): Prisma.PrismaPromise<GetLicenseAggregateType<T>>

    /**
     * Group by License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseGroupByArgs} args - Group by arguments.
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
      T extends LicenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseGroupByArgs['orderBy'] }
        : { orderBy?: LicenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LicenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the License model
   */
  readonly fields: LicenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for License.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    words<T extends License$wordsArgs<ExtArgs> = {}>(args?: Subset<T, License$wordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    phonetics<T extends License$phoneticsArgs<ExtArgs> = {}>(args?: Subset<T, License$phoneticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the License model
   */
  interface LicenseFieldRefs {
    readonly licenseId: FieldRef<"License", 'String'>
    readonly name: FieldRef<"License", 'String'>
    readonly url: FieldRef<"License", 'String'>
  }
    

  // Custom InputTypes
  /**
   * License findUnique
   */
  export type LicenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findUniqueOrThrow
   */
  export type LicenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findFirst
   */
  export type LicenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findFirstOrThrow
   */
  export type LicenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findMany
   */
  export type LicenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which Licenses to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License create
   */
  export type LicenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to create a License.
     */
    data: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
  }

  /**
   * License createMany
   */
  export type LicenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * License createManyAndReturn
   */
  export type LicenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * License update
   */
  export type LicenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to update a License.
     */
    data: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
    /**
     * Choose, which License to update.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License updateMany
   */
  export type LicenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
  }

  /**
   * License updateManyAndReturn
   */
  export type LicenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
  }

  /**
   * License upsert
   */
  export type LicenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The filter to search for the License to update in case it exists.
     */
    where: LicenseWhereUniqueInput
    /**
     * In case the License found by the `where` argument doesn't exist, create a new License with this data.
     */
    create: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
    /**
     * In case the License was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
  }

  /**
   * License delete
   */
  export type LicenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter which License to delete.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License deleteMany
   */
  export type LicenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licenses to delete
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to delete.
     */
    limit?: number
  }

  /**
   * License.words
   */
  export type License$wordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    where?: WordWhereInput
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    cursor?: WordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * License.phonetics
   */
  export type License$phoneticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phonetic
     */
    select?: PhoneticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phonetic
     */
    omit?: PhoneticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneticInclude<ExtArgs> | null
    where?: PhoneticWhereInput
    orderBy?: PhoneticOrderByWithRelationInput | PhoneticOrderByWithRelationInput[]
    cursor?: PhoneticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhoneticScalarFieldEnum | PhoneticScalarFieldEnum[]
  }

  /**
   * License without action
   */
  export type LicenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
  }


  /**
   * Model Meaning
   */

  export type AggregateMeaning = {
    _count: MeaningCountAggregateOutputType | null
    _min: MeaningMinAggregateOutputType | null
    _max: MeaningMaxAggregateOutputType | null
  }

  export type MeaningMinAggregateOutputType = {
    meaningId: string | null
    partOfSpeech: string | null
    wordId: string | null
  }

  export type MeaningMaxAggregateOutputType = {
    meaningId: string | null
    partOfSpeech: string | null
    wordId: string | null
  }

  export type MeaningCountAggregateOutputType = {
    meaningId: number
    partOfSpeech: number
    wordId: number
    _all: number
  }


  export type MeaningMinAggregateInputType = {
    meaningId?: true
    partOfSpeech?: true
    wordId?: true
  }

  export type MeaningMaxAggregateInputType = {
    meaningId?: true
    partOfSpeech?: true
    wordId?: true
  }

  export type MeaningCountAggregateInputType = {
    meaningId?: true
    partOfSpeech?: true
    wordId?: true
    _all?: true
  }

  export type MeaningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meaning to aggregate.
     */
    where?: MeaningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meanings to fetch.
     */
    orderBy?: MeaningOrderByWithRelationInput | MeaningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeaningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meanings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meanings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meanings
    **/
    _count?: true | MeaningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeaningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeaningMaxAggregateInputType
  }

  export type GetMeaningAggregateType<T extends MeaningAggregateArgs> = {
        [P in keyof T & keyof AggregateMeaning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeaning[P]>
      : GetScalarType<T[P], AggregateMeaning[P]>
  }




  export type MeaningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeaningWhereInput
    orderBy?: MeaningOrderByWithAggregationInput | MeaningOrderByWithAggregationInput[]
    by: MeaningScalarFieldEnum[] | MeaningScalarFieldEnum
    having?: MeaningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeaningCountAggregateInputType | true
    _min?: MeaningMinAggregateInputType
    _max?: MeaningMaxAggregateInputType
  }

  export type MeaningGroupByOutputType = {
    meaningId: string
    partOfSpeech: string
    wordId: string
    _count: MeaningCountAggregateOutputType | null
    _min: MeaningMinAggregateOutputType | null
    _max: MeaningMaxAggregateOutputType | null
  }

  type GetMeaningGroupByPayload<T extends MeaningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeaningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeaningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeaningGroupByOutputType[P]>
            : GetScalarType<T[P], MeaningGroupByOutputType[P]>
        }
      >
    >


  export type MeaningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    meaningId?: boolean
    partOfSpeech?: boolean
    wordId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
    definitions?: boolean | Meaning$definitionsArgs<ExtArgs>
    synonyms?: boolean | Meaning$synonymsArgs<ExtArgs>
    antonyms?: boolean | Meaning$antonymsArgs<ExtArgs>
    _count?: boolean | MeaningCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meaning"]>

  export type MeaningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    meaningId?: boolean
    partOfSpeech?: boolean
    wordId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meaning"]>

  export type MeaningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    meaningId?: boolean
    partOfSpeech?: boolean
    wordId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meaning"]>

  export type MeaningSelectScalar = {
    meaningId?: boolean
    partOfSpeech?: boolean
    wordId?: boolean
  }

  export type MeaningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"meaningId" | "partOfSpeech" | "wordId", ExtArgs["result"]["meaning"]>
  export type MeaningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
    definitions?: boolean | Meaning$definitionsArgs<ExtArgs>
    synonyms?: boolean | Meaning$synonymsArgs<ExtArgs>
    antonyms?: boolean | Meaning$antonymsArgs<ExtArgs>
    _count?: boolean | MeaningCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MeaningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type MeaningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }

  export type $MeaningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meaning"
    objects: {
      word: Prisma.$WordPayload<ExtArgs>
      definitions: Prisma.$DefinitionPayload<ExtArgs>[]
      synonyms: Prisma.$SynonymPayload<ExtArgs>[]
      antonyms: Prisma.$AntonymPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      meaningId: string
      partOfSpeech: string
      wordId: string
    }, ExtArgs["result"]["meaning"]>
    composites: {}
  }

  type MeaningGetPayload<S extends boolean | null | undefined | MeaningDefaultArgs> = $Result.GetResult<Prisma.$MeaningPayload, S>

  type MeaningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeaningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeaningCountAggregateInputType | true
    }

  export interface MeaningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meaning'], meta: { name: 'Meaning' } }
    /**
     * Find zero or one Meaning that matches the filter.
     * @param {MeaningFindUniqueArgs} args - Arguments to find a Meaning
     * @example
     * // Get one Meaning
     * const meaning = await prisma.meaning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeaningFindUniqueArgs>(args: SelectSubset<T, MeaningFindUniqueArgs<ExtArgs>>): Prisma__MeaningClient<$Result.GetResult<Prisma.$MeaningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meaning that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeaningFindUniqueOrThrowArgs} args - Arguments to find a Meaning
     * @example
     * // Get one Meaning
     * const meaning = await prisma.meaning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeaningFindUniqueOrThrowArgs>(args: SelectSubset<T, MeaningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeaningClient<$Result.GetResult<Prisma.$MeaningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meaning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeaningFindFirstArgs} args - Arguments to find a Meaning
     * @example
     * // Get one Meaning
     * const meaning = await prisma.meaning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeaningFindFirstArgs>(args?: SelectSubset<T, MeaningFindFirstArgs<ExtArgs>>): Prisma__MeaningClient<$Result.GetResult<Prisma.$MeaningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meaning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeaningFindFirstOrThrowArgs} args - Arguments to find a Meaning
     * @example
     * // Get one Meaning
     * const meaning = await prisma.meaning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeaningFindFirstOrThrowArgs>(args?: SelectSubset<T, MeaningFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeaningClient<$Result.GetResult<Prisma.$MeaningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meanings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeaningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meanings
     * const meanings = await prisma.meaning.findMany()
     * 
     * // Get first 10 Meanings
     * const meanings = await prisma.meaning.findMany({ take: 10 })
     * 
     * // Only select the `meaningId`
     * const meaningWithMeaningIdOnly = await prisma.meaning.findMany({ select: { meaningId: true } })
     * 
     */
    findMany<T extends MeaningFindManyArgs>(args?: SelectSubset<T, MeaningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeaningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meaning.
     * @param {MeaningCreateArgs} args - Arguments to create a Meaning.
     * @example
     * // Create one Meaning
     * const Meaning = await prisma.meaning.create({
     *   data: {
     *     // ... data to create a Meaning
     *   }
     * })
     * 
     */
    create<T extends MeaningCreateArgs>(args: SelectSubset<T, MeaningCreateArgs<ExtArgs>>): Prisma__MeaningClient<$Result.GetResult<Prisma.$MeaningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meanings.
     * @param {MeaningCreateManyArgs} args - Arguments to create many Meanings.
     * @example
     * // Create many Meanings
     * const meaning = await prisma.meaning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeaningCreateManyArgs>(args?: SelectSubset<T, MeaningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meanings and returns the data saved in the database.
     * @param {MeaningCreateManyAndReturnArgs} args - Arguments to create many Meanings.
     * @example
     * // Create many Meanings
     * const meaning = await prisma.meaning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meanings and only return the `meaningId`
     * const meaningWithMeaningIdOnly = await prisma.meaning.createManyAndReturn({
     *   select: { meaningId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeaningCreateManyAndReturnArgs>(args?: SelectSubset<T, MeaningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeaningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meaning.
     * @param {MeaningDeleteArgs} args - Arguments to delete one Meaning.
     * @example
     * // Delete one Meaning
     * const Meaning = await prisma.meaning.delete({
     *   where: {
     *     // ... filter to delete one Meaning
     *   }
     * })
     * 
     */
    delete<T extends MeaningDeleteArgs>(args: SelectSubset<T, MeaningDeleteArgs<ExtArgs>>): Prisma__MeaningClient<$Result.GetResult<Prisma.$MeaningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meaning.
     * @param {MeaningUpdateArgs} args - Arguments to update one Meaning.
     * @example
     * // Update one Meaning
     * const meaning = await prisma.meaning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeaningUpdateArgs>(args: SelectSubset<T, MeaningUpdateArgs<ExtArgs>>): Prisma__MeaningClient<$Result.GetResult<Prisma.$MeaningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meanings.
     * @param {MeaningDeleteManyArgs} args - Arguments to filter Meanings to delete.
     * @example
     * // Delete a few Meanings
     * const { count } = await prisma.meaning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeaningDeleteManyArgs>(args?: SelectSubset<T, MeaningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meanings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeaningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meanings
     * const meaning = await prisma.meaning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeaningUpdateManyArgs>(args: SelectSubset<T, MeaningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meanings and returns the data updated in the database.
     * @param {MeaningUpdateManyAndReturnArgs} args - Arguments to update many Meanings.
     * @example
     * // Update many Meanings
     * const meaning = await prisma.meaning.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meanings and only return the `meaningId`
     * const meaningWithMeaningIdOnly = await prisma.meaning.updateManyAndReturn({
     *   select: { meaningId: true },
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
    updateManyAndReturn<T extends MeaningUpdateManyAndReturnArgs>(args: SelectSubset<T, MeaningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeaningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meaning.
     * @param {MeaningUpsertArgs} args - Arguments to update or create a Meaning.
     * @example
     * // Update or create a Meaning
     * const meaning = await prisma.meaning.upsert({
     *   create: {
     *     // ... data to create a Meaning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meaning we want to update
     *   }
     * })
     */
    upsert<T extends MeaningUpsertArgs>(args: SelectSubset<T, MeaningUpsertArgs<ExtArgs>>): Prisma__MeaningClient<$Result.GetResult<Prisma.$MeaningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meanings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeaningCountArgs} args - Arguments to filter Meanings to count.
     * @example
     * // Count the number of Meanings
     * const count = await prisma.meaning.count({
     *   where: {
     *     // ... the filter for the Meanings we want to count
     *   }
     * })
    **/
    count<T extends MeaningCountArgs>(
      args?: Subset<T, MeaningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeaningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meaning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeaningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MeaningAggregateArgs>(args: Subset<T, MeaningAggregateArgs>): Prisma.PrismaPromise<GetMeaningAggregateType<T>>

    /**
     * Group by Meaning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeaningGroupByArgs} args - Group by arguments.
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
      T extends MeaningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeaningGroupByArgs['orderBy'] }
        : { orderBy?: MeaningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MeaningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeaningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meaning model
   */
  readonly fields: MeaningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meaning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeaningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    word<T extends WordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordDefaultArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    definitions<T extends Meaning$definitionsArgs<ExtArgs> = {}>(args?: Subset<T, Meaning$definitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DefinitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    synonyms<T extends Meaning$synonymsArgs<ExtArgs> = {}>(args?: Subset<T, Meaning$synonymsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SynonymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    antonyms<T extends Meaning$antonymsArgs<ExtArgs> = {}>(args?: Subset<T, Meaning$antonymsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AntonymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Meaning model
   */
  interface MeaningFieldRefs {
    readonly meaningId: FieldRef<"Meaning", 'String'>
    readonly partOfSpeech: FieldRef<"Meaning", 'String'>
    readonly wordId: FieldRef<"Meaning", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Meaning findUnique
   */
  export type MeaningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meaning
     */
    select?: MeaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meaning
     */
    omit?: MeaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeaningInclude<ExtArgs> | null
    /**
     * Filter, which Meaning to fetch.
     */
    where: MeaningWhereUniqueInput
  }

  /**
   * Meaning findUniqueOrThrow
   */
  export type MeaningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meaning
     */
    select?: MeaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meaning
     */
    omit?: MeaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeaningInclude<ExtArgs> | null
    /**
     * Filter, which Meaning to fetch.
     */
    where: MeaningWhereUniqueInput
  }

  /**
   * Meaning findFirst
   */
  export type MeaningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meaning
     */
    select?: MeaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meaning
     */
    omit?: MeaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeaningInclude<ExtArgs> | null
    /**
     * Filter, which Meaning to fetch.
     */
    where?: MeaningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meanings to fetch.
     */
    orderBy?: MeaningOrderByWithRelationInput | MeaningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meanings.
     */
    cursor?: MeaningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meanings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meanings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meanings.
     */
    distinct?: MeaningScalarFieldEnum | MeaningScalarFieldEnum[]
  }

  /**
   * Meaning findFirstOrThrow
   */
  export type MeaningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meaning
     */
    select?: MeaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meaning
     */
    omit?: MeaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeaningInclude<ExtArgs> | null
    /**
     * Filter, which Meaning to fetch.
     */
    where?: MeaningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meanings to fetch.
     */
    orderBy?: MeaningOrderByWithRelationInput | MeaningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meanings.
     */
    cursor?: MeaningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meanings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meanings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meanings.
     */
    distinct?: MeaningScalarFieldEnum | MeaningScalarFieldEnum[]
  }

  /**
   * Meaning findMany
   */
  export type MeaningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meaning
     */
    select?: MeaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meaning
     */
    omit?: MeaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeaningInclude<ExtArgs> | null
    /**
     * Filter, which Meanings to fetch.
     */
    where?: MeaningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meanings to fetch.
     */
    orderBy?: MeaningOrderByWithRelationInput | MeaningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meanings.
     */
    cursor?: MeaningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meanings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meanings.
     */
    skip?: number
    distinct?: MeaningScalarFieldEnum | MeaningScalarFieldEnum[]
  }

  /**
   * Meaning create
   */
  export type MeaningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meaning
     */
    select?: MeaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meaning
     */
    omit?: MeaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeaningInclude<ExtArgs> | null
    /**
     * The data needed to create a Meaning.
     */
    data: XOR<MeaningCreateInput, MeaningUncheckedCreateInput>
  }

  /**
   * Meaning createMany
   */
  export type MeaningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meanings.
     */
    data: MeaningCreateManyInput | MeaningCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meaning createManyAndReturn
   */
  export type MeaningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meaning
     */
    select?: MeaningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meaning
     */
    omit?: MeaningOmit<ExtArgs> | null
    /**
     * The data used to create many Meanings.
     */
    data: MeaningCreateManyInput | MeaningCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeaningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meaning update
   */
  export type MeaningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meaning
     */
    select?: MeaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meaning
     */
    omit?: MeaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeaningInclude<ExtArgs> | null
    /**
     * The data needed to update a Meaning.
     */
    data: XOR<MeaningUpdateInput, MeaningUncheckedUpdateInput>
    /**
     * Choose, which Meaning to update.
     */
    where: MeaningWhereUniqueInput
  }

  /**
   * Meaning updateMany
   */
  export type MeaningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meanings.
     */
    data: XOR<MeaningUpdateManyMutationInput, MeaningUncheckedUpdateManyInput>
    /**
     * Filter which Meanings to update
     */
    where?: MeaningWhereInput
    /**
     * Limit how many Meanings to update.
     */
    limit?: number
  }

  /**
   * Meaning updateManyAndReturn
   */
  export type MeaningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meaning
     */
    select?: MeaningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meaning
     */
    omit?: MeaningOmit<ExtArgs> | null
    /**
     * The data used to update Meanings.
     */
    data: XOR<MeaningUpdateManyMutationInput, MeaningUncheckedUpdateManyInput>
    /**
     * Filter which Meanings to update
     */
    where?: MeaningWhereInput
    /**
     * Limit how many Meanings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeaningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meaning upsert
   */
  export type MeaningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meaning
     */
    select?: MeaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meaning
     */
    omit?: MeaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeaningInclude<ExtArgs> | null
    /**
     * The filter to search for the Meaning to update in case it exists.
     */
    where: MeaningWhereUniqueInput
    /**
     * In case the Meaning found by the `where` argument doesn't exist, create a new Meaning with this data.
     */
    create: XOR<MeaningCreateInput, MeaningUncheckedCreateInput>
    /**
     * In case the Meaning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeaningUpdateInput, MeaningUncheckedUpdateInput>
  }

  /**
   * Meaning delete
   */
  export type MeaningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meaning
     */
    select?: MeaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meaning
     */
    omit?: MeaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeaningInclude<ExtArgs> | null
    /**
     * Filter which Meaning to delete.
     */
    where: MeaningWhereUniqueInput
  }

  /**
   * Meaning deleteMany
   */
  export type MeaningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meanings to delete
     */
    where?: MeaningWhereInput
    /**
     * Limit how many Meanings to delete.
     */
    limit?: number
  }

  /**
   * Meaning.definitions
   */
  export type Meaning$definitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Definition
     */
    select?: DefinitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Definition
     */
    omit?: DefinitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DefinitionInclude<ExtArgs> | null
    where?: DefinitionWhereInput
    orderBy?: DefinitionOrderByWithRelationInput | DefinitionOrderByWithRelationInput[]
    cursor?: DefinitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DefinitionScalarFieldEnum | DefinitionScalarFieldEnum[]
  }

  /**
   * Meaning.synonyms
   */
  export type Meaning$synonymsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synonym
     */
    select?: SynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synonym
     */
    omit?: SynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynonymInclude<ExtArgs> | null
    where?: SynonymWhereInput
    orderBy?: SynonymOrderByWithRelationInput | SynonymOrderByWithRelationInput[]
    cursor?: SynonymWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SynonymScalarFieldEnum | SynonymScalarFieldEnum[]
  }

  /**
   * Meaning.antonyms
   */
  export type Meaning$antonymsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Antonym
     */
    select?: AntonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Antonym
     */
    omit?: AntonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AntonymInclude<ExtArgs> | null
    where?: AntonymWhereInput
    orderBy?: AntonymOrderByWithRelationInput | AntonymOrderByWithRelationInput[]
    cursor?: AntonymWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AntonymScalarFieldEnum | AntonymScalarFieldEnum[]
  }

  /**
   * Meaning without action
   */
  export type MeaningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meaning
     */
    select?: MeaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meaning
     */
    omit?: MeaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeaningInclude<ExtArgs> | null
  }


  /**
   * Model Phonetic
   */

  export type AggregatePhonetic = {
    _count: PhoneticCountAggregateOutputType | null
    _min: PhoneticMinAggregateOutputType | null
    _max: PhoneticMaxAggregateOutputType | null
  }

  export type PhoneticMinAggregateOutputType = {
    phoneticId: string | null
    text: string | null
    audio: string | null
    sourceUrl: string | null
    wordId: string | null
    licenseId: string | null
  }

  export type PhoneticMaxAggregateOutputType = {
    phoneticId: string | null
    text: string | null
    audio: string | null
    sourceUrl: string | null
    wordId: string | null
    licenseId: string | null
  }

  export type PhoneticCountAggregateOutputType = {
    phoneticId: number
    text: number
    audio: number
    sourceUrl: number
    wordId: number
    licenseId: number
    _all: number
  }


  export type PhoneticMinAggregateInputType = {
    phoneticId?: true
    text?: true
    audio?: true
    sourceUrl?: true
    wordId?: true
    licenseId?: true
  }

  export type PhoneticMaxAggregateInputType = {
    phoneticId?: true
    text?: true
    audio?: true
    sourceUrl?: true
    wordId?: true
    licenseId?: true
  }

  export type PhoneticCountAggregateInputType = {
    phoneticId?: true
    text?: true
    audio?: true
    sourceUrl?: true
    wordId?: true
    licenseId?: true
    _all?: true
  }

  export type PhoneticAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phonetic to aggregate.
     */
    where?: PhoneticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phonetics to fetch.
     */
    orderBy?: PhoneticOrderByWithRelationInput | PhoneticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhoneticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phonetics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phonetics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Phonetics
    **/
    _count?: true | PhoneticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhoneticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhoneticMaxAggregateInputType
  }

  export type GetPhoneticAggregateType<T extends PhoneticAggregateArgs> = {
        [P in keyof T & keyof AggregatePhonetic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhonetic[P]>
      : GetScalarType<T[P], AggregatePhonetic[P]>
  }




  export type PhoneticGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhoneticWhereInput
    orderBy?: PhoneticOrderByWithAggregationInput | PhoneticOrderByWithAggregationInput[]
    by: PhoneticScalarFieldEnum[] | PhoneticScalarFieldEnum
    having?: PhoneticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhoneticCountAggregateInputType | true
    _min?: PhoneticMinAggregateInputType
    _max?: PhoneticMaxAggregateInputType
  }

  export type PhoneticGroupByOutputType = {
    phoneticId: string
    text: string | null
    audio: string
    sourceUrl: string | null
    wordId: string
    licenseId: string | null
    _count: PhoneticCountAggregateOutputType | null
    _min: PhoneticMinAggregateOutputType | null
    _max: PhoneticMaxAggregateOutputType | null
  }

  type GetPhoneticGroupByPayload<T extends PhoneticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhoneticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhoneticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhoneticGroupByOutputType[P]>
            : GetScalarType<T[P], PhoneticGroupByOutputType[P]>
        }
      >
    >


  export type PhoneticSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    phoneticId?: boolean
    text?: boolean
    audio?: boolean
    sourceUrl?: boolean
    wordId?: boolean
    licenseId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
    license?: boolean | Phonetic$licenseArgs<ExtArgs>
  }, ExtArgs["result"]["phonetic"]>

  export type PhoneticSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    phoneticId?: boolean
    text?: boolean
    audio?: boolean
    sourceUrl?: boolean
    wordId?: boolean
    licenseId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
    license?: boolean | Phonetic$licenseArgs<ExtArgs>
  }, ExtArgs["result"]["phonetic"]>

  export type PhoneticSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    phoneticId?: boolean
    text?: boolean
    audio?: boolean
    sourceUrl?: boolean
    wordId?: boolean
    licenseId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
    license?: boolean | Phonetic$licenseArgs<ExtArgs>
  }, ExtArgs["result"]["phonetic"]>

  export type PhoneticSelectScalar = {
    phoneticId?: boolean
    text?: boolean
    audio?: boolean
    sourceUrl?: boolean
    wordId?: boolean
    licenseId?: boolean
  }

  export type PhoneticOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"phoneticId" | "text" | "audio" | "sourceUrl" | "wordId" | "licenseId", ExtArgs["result"]["phonetic"]>
  export type PhoneticInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
    license?: boolean | Phonetic$licenseArgs<ExtArgs>
  }
  export type PhoneticIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
    license?: boolean | Phonetic$licenseArgs<ExtArgs>
  }
  export type PhoneticIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
    license?: boolean | Phonetic$licenseArgs<ExtArgs>
  }

  export type $PhoneticPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Phonetic"
    objects: {
      word: Prisma.$WordPayload<ExtArgs>
      license: Prisma.$LicensePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      phoneticId: string
      text: string | null
      audio: string
      sourceUrl: string | null
      wordId: string
      licenseId: string | null
    }, ExtArgs["result"]["phonetic"]>
    composites: {}
  }

  type PhoneticGetPayload<S extends boolean | null | undefined | PhoneticDefaultArgs> = $Result.GetResult<Prisma.$PhoneticPayload, S>

  type PhoneticCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhoneticFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhoneticCountAggregateInputType | true
    }

  export interface PhoneticDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Phonetic'], meta: { name: 'Phonetic' } }
    /**
     * Find zero or one Phonetic that matches the filter.
     * @param {PhoneticFindUniqueArgs} args - Arguments to find a Phonetic
     * @example
     * // Get one Phonetic
     * const phonetic = await prisma.phonetic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhoneticFindUniqueArgs>(args: SelectSubset<T, PhoneticFindUniqueArgs<ExtArgs>>): Prisma__PhoneticClient<$Result.GetResult<Prisma.$PhoneticPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Phonetic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhoneticFindUniqueOrThrowArgs} args - Arguments to find a Phonetic
     * @example
     * // Get one Phonetic
     * const phonetic = await prisma.phonetic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhoneticFindUniqueOrThrowArgs>(args: SelectSubset<T, PhoneticFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhoneticClient<$Result.GetResult<Prisma.$PhoneticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phonetic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneticFindFirstArgs} args - Arguments to find a Phonetic
     * @example
     * // Get one Phonetic
     * const phonetic = await prisma.phonetic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhoneticFindFirstArgs>(args?: SelectSubset<T, PhoneticFindFirstArgs<ExtArgs>>): Prisma__PhoneticClient<$Result.GetResult<Prisma.$PhoneticPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phonetic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneticFindFirstOrThrowArgs} args - Arguments to find a Phonetic
     * @example
     * // Get one Phonetic
     * const phonetic = await prisma.phonetic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhoneticFindFirstOrThrowArgs>(args?: SelectSubset<T, PhoneticFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhoneticClient<$Result.GetResult<Prisma.$PhoneticPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Phonetics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneticFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phonetics
     * const phonetics = await prisma.phonetic.findMany()
     * 
     * // Get first 10 Phonetics
     * const phonetics = await prisma.phonetic.findMany({ take: 10 })
     * 
     * // Only select the `phoneticId`
     * const phoneticWithPhoneticIdOnly = await prisma.phonetic.findMany({ select: { phoneticId: true } })
     * 
     */
    findMany<T extends PhoneticFindManyArgs>(args?: SelectSubset<T, PhoneticFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Phonetic.
     * @param {PhoneticCreateArgs} args - Arguments to create a Phonetic.
     * @example
     * // Create one Phonetic
     * const Phonetic = await prisma.phonetic.create({
     *   data: {
     *     // ... data to create a Phonetic
     *   }
     * })
     * 
     */
    create<T extends PhoneticCreateArgs>(args: SelectSubset<T, PhoneticCreateArgs<ExtArgs>>): Prisma__PhoneticClient<$Result.GetResult<Prisma.$PhoneticPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Phonetics.
     * @param {PhoneticCreateManyArgs} args - Arguments to create many Phonetics.
     * @example
     * // Create many Phonetics
     * const phonetic = await prisma.phonetic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhoneticCreateManyArgs>(args?: SelectSubset<T, PhoneticCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Phonetics and returns the data saved in the database.
     * @param {PhoneticCreateManyAndReturnArgs} args - Arguments to create many Phonetics.
     * @example
     * // Create many Phonetics
     * const phonetic = await prisma.phonetic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Phonetics and only return the `phoneticId`
     * const phoneticWithPhoneticIdOnly = await prisma.phonetic.createManyAndReturn({
     *   select: { phoneticId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhoneticCreateManyAndReturnArgs>(args?: SelectSubset<T, PhoneticCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneticPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Phonetic.
     * @param {PhoneticDeleteArgs} args - Arguments to delete one Phonetic.
     * @example
     * // Delete one Phonetic
     * const Phonetic = await prisma.phonetic.delete({
     *   where: {
     *     // ... filter to delete one Phonetic
     *   }
     * })
     * 
     */
    delete<T extends PhoneticDeleteArgs>(args: SelectSubset<T, PhoneticDeleteArgs<ExtArgs>>): Prisma__PhoneticClient<$Result.GetResult<Prisma.$PhoneticPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Phonetic.
     * @param {PhoneticUpdateArgs} args - Arguments to update one Phonetic.
     * @example
     * // Update one Phonetic
     * const phonetic = await prisma.phonetic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhoneticUpdateArgs>(args: SelectSubset<T, PhoneticUpdateArgs<ExtArgs>>): Prisma__PhoneticClient<$Result.GetResult<Prisma.$PhoneticPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Phonetics.
     * @param {PhoneticDeleteManyArgs} args - Arguments to filter Phonetics to delete.
     * @example
     * // Delete a few Phonetics
     * const { count } = await prisma.phonetic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhoneticDeleteManyArgs>(args?: SelectSubset<T, PhoneticDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phonetics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phonetics
     * const phonetic = await prisma.phonetic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhoneticUpdateManyArgs>(args: SelectSubset<T, PhoneticUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phonetics and returns the data updated in the database.
     * @param {PhoneticUpdateManyAndReturnArgs} args - Arguments to update many Phonetics.
     * @example
     * // Update many Phonetics
     * const phonetic = await prisma.phonetic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Phonetics and only return the `phoneticId`
     * const phoneticWithPhoneticIdOnly = await prisma.phonetic.updateManyAndReturn({
     *   select: { phoneticId: true },
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
    updateManyAndReturn<T extends PhoneticUpdateManyAndReturnArgs>(args: SelectSubset<T, PhoneticUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneticPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Phonetic.
     * @param {PhoneticUpsertArgs} args - Arguments to update or create a Phonetic.
     * @example
     * // Update or create a Phonetic
     * const phonetic = await prisma.phonetic.upsert({
     *   create: {
     *     // ... data to create a Phonetic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phonetic we want to update
     *   }
     * })
     */
    upsert<T extends PhoneticUpsertArgs>(args: SelectSubset<T, PhoneticUpsertArgs<ExtArgs>>): Prisma__PhoneticClient<$Result.GetResult<Prisma.$PhoneticPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Phonetics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneticCountArgs} args - Arguments to filter Phonetics to count.
     * @example
     * // Count the number of Phonetics
     * const count = await prisma.phonetic.count({
     *   where: {
     *     // ... the filter for the Phonetics we want to count
     *   }
     * })
    **/
    count<T extends PhoneticCountArgs>(
      args?: Subset<T, PhoneticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhoneticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phonetic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PhoneticAggregateArgs>(args: Subset<T, PhoneticAggregateArgs>): Prisma.PrismaPromise<GetPhoneticAggregateType<T>>

    /**
     * Group by Phonetic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhoneticGroupByArgs} args - Group by arguments.
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
      T extends PhoneticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhoneticGroupByArgs['orderBy'] }
        : { orderBy?: PhoneticGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PhoneticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhoneticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Phonetic model
   */
  readonly fields: PhoneticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Phonetic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhoneticClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    word<T extends WordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordDefaultArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    license<T extends Phonetic$licenseArgs<ExtArgs> = {}>(args?: Subset<T, Phonetic$licenseArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Phonetic model
   */
  interface PhoneticFieldRefs {
    readonly phoneticId: FieldRef<"Phonetic", 'String'>
    readonly text: FieldRef<"Phonetic", 'String'>
    readonly audio: FieldRef<"Phonetic", 'String'>
    readonly sourceUrl: FieldRef<"Phonetic", 'String'>
    readonly wordId: FieldRef<"Phonetic", 'String'>
    readonly licenseId: FieldRef<"Phonetic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Phonetic findUnique
   */
  export type PhoneticFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phonetic
     */
    select?: PhoneticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phonetic
     */
    omit?: PhoneticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneticInclude<ExtArgs> | null
    /**
     * Filter, which Phonetic to fetch.
     */
    where: PhoneticWhereUniqueInput
  }

  /**
   * Phonetic findUniqueOrThrow
   */
  export type PhoneticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phonetic
     */
    select?: PhoneticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phonetic
     */
    omit?: PhoneticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneticInclude<ExtArgs> | null
    /**
     * Filter, which Phonetic to fetch.
     */
    where: PhoneticWhereUniqueInput
  }

  /**
   * Phonetic findFirst
   */
  export type PhoneticFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phonetic
     */
    select?: PhoneticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phonetic
     */
    omit?: PhoneticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneticInclude<ExtArgs> | null
    /**
     * Filter, which Phonetic to fetch.
     */
    where?: PhoneticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phonetics to fetch.
     */
    orderBy?: PhoneticOrderByWithRelationInput | PhoneticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phonetics.
     */
    cursor?: PhoneticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phonetics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phonetics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phonetics.
     */
    distinct?: PhoneticScalarFieldEnum | PhoneticScalarFieldEnum[]
  }

  /**
   * Phonetic findFirstOrThrow
   */
  export type PhoneticFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phonetic
     */
    select?: PhoneticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phonetic
     */
    omit?: PhoneticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneticInclude<ExtArgs> | null
    /**
     * Filter, which Phonetic to fetch.
     */
    where?: PhoneticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phonetics to fetch.
     */
    orderBy?: PhoneticOrderByWithRelationInput | PhoneticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Phonetics.
     */
    cursor?: PhoneticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phonetics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phonetics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Phonetics.
     */
    distinct?: PhoneticScalarFieldEnum | PhoneticScalarFieldEnum[]
  }

  /**
   * Phonetic findMany
   */
  export type PhoneticFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phonetic
     */
    select?: PhoneticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phonetic
     */
    omit?: PhoneticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneticInclude<ExtArgs> | null
    /**
     * Filter, which Phonetics to fetch.
     */
    where?: PhoneticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Phonetics to fetch.
     */
    orderBy?: PhoneticOrderByWithRelationInput | PhoneticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Phonetics.
     */
    cursor?: PhoneticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Phonetics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Phonetics.
     */
    skip?: number
    distinct?: PhoneticScalarFieldEnum | PhoneticScalarFieldEnum[]
  }

  /**
   * Phonetic create
   */
  export type PhoneticCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phonetic
     */
    select?: PhoneticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phonetic
     */
    omit?: PhoneticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneticInclude<ExtArgs> | null
    /**
     * The data needed to create a Phonetic.
     */
    data: XOR<PhoneticCreateInput, PhoneticUncheckedCreateInput>
  }

  /**
   * Phonetic createMany
   */
  export type PhoneticCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Phonetics.
     */
    data: PhoneticCreateManyInput | PhoneticCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Phonetic createManyAndReturn
   */
  export type PhoneticCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phonetic
     */
    select?: PhoneticSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Phonetic
     */
    omit?: PhoneticOmit<ExtArgs> | null
    /**
     * The data used to create many Phonetics.
     */
    data: PhoneticCreateManyInput | PhoneticCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneticIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Phonetic update
   */
  export type PhoneticUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phonetic
     */
    select?: PhoneticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phonetic
     */
    omit?: PhoneticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneticInclude<ExtArgs> | null
    /**
     * The data needed to update a Phonetic.
     */
    data: XOR<PhoneticUpdateInput, PhoneticUncheckedUpdateInput>
    /**
     * Choose, which Phonetic to update.
     */
    where: PhoneticWhereUniqueInput
  }

  /**
   * Phonetic updateMany
   */
  export type PhoneticUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Phonetics.
     */
    data: XOR<PhoneticUpdateManyMutationInput, PhoneticUncheckedUpdateManyInput>
    /**
     * Filter which Phonetics to update
     */
    where?: PhoneticWhereInput
    /**
     * Limit how many Phonetics to update.
     */
    limit?: number
  }

  /**
   * Phonetic updateManyAndReturn
   */
  export type PhoneticUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phonetic
     */
    select?: PhoneticSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Phonetic
     */
    omit?: PhoneticOmit<ExtArgs> | null
    /**
     * The data used to update Phonetics.
     */
    data: XOR<PhoneticUpdateManyMutationInput, PhoneticUncheckedUpdateManyInput>
    /**
     * Filter which Phonetics to update
     */
    where?: PhoneticWhereInput
    /**
     * Limit how many Phonetics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneticIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Phonetic upsert
   */
  export type PhoneticUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phonetic
     */
    select?: PhoneticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phonetic
     */
    omit?: PhoneticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneticInclude<ExtArgs> | null
    /**
     * The filter to search for the Phonetic to update in case it exists.
     */
    where: PhoneticWhereUniqueInput
    /**
     * In case the Phonetic found by the `where` argument doesn't exist, create a new Phonetic with this data.
     */
    create: XOR<PhoneticCreateInput, PhoneticUncheckedCreateInput>
    /**
     * In case the Phonetic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhoneticUpdateInput, PhoneticUncheckedUpdateInput>
  }

  /**
   * Phonetic delete
   */
  export type PhoneticDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phonetic
     */
    select?: PhoneticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phonetic
     */
    omit?: PhoneticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneticInclude<ExtArgs> | null
    /**
     * Filter which Phonetic to delete.
     */
    where: PhoneticWhereUniqueInput
  }

  /**
   * Phonetic deleteMany
   */
  export type PhoneticDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Phonetics to delete
     */
    where?: PhoneticWhereInput
    /**
     * Limit how many Phonetics to delete.
     */
    limit?: number
  }

  /**
   * Phonetic.license
   */
  export type Phonetic$licenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
  }

  /**
   * Phonetic without action
   */
  export type PhoneticDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phonetic
     */
    select?: PhoneticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phonetic
     */
    omit?: PhoneticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneticInclude<ExtArgs> | null
  }


  /**
   * Model SourceUrl
   */

  export type AggregateSourceUrl = {
    _count: SourceUrlCountAggregateOutputType | null
    _min: SourceUrlMinAggregateOutputType | null
    _max: SourceUrlMaxAggregateOutputType | null
  }

  export type SourceUrlMinAggregateOutputType = {
    sourceUrlId: string | null
    url: string | null
    wordId: string | null
  }

  export type SourceUrlMaxAggregateOutputType = {
    sourceUrlId: string | null
    url: string | null
    wordId: string | null
  }

  export type SourceUrlCountAggregateOutputType = {
    sourceUrlId: number
    url: number
    wordId: number
    _all: number
  }


  export type SourceUrlMinAggregateInputType = {
    sourceUrlId?: true
    url?: true
    wordId?: true
  }

  export type SourceUrlMaxAggregateInputType = {
    sourceUrlId?: true
    url?: true
    wordId?: true
  }

  export type SourceUrlCountAggregateInputType = {
    sourceUrlId?: true
    url?: true
    wordId?: true
    _all?: true
  }

  export type SourceUrlAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceUrl to aggregate.
     */
    where?: SourceUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceUrls to fetch.
     */
    orderBy?: SourceUrlOrderByWithRelationInput | SourceUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SourceUrls
    **/
    _count?: true | SourceUrlCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceUrlMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceUrlMaxAggregateInputType
  }

  export type GetSourceUrlAggregateType<T extends SourceUrlAggregateArgs> = {
        [P in keyof T & keyof AggregateSourceUrl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSourceUrl[P]>
      : GetScalarType<T[P], AggregateSourceUrl[P]>
  }




  export type SourceUrlGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceUrlWhereInput
    orderBy?: SourceUrlOrderByWithAggregationInput | SourceUrlOrderByWithAggregationInput[]
    by: SourceUrlScalarFieldEnum[] | SourceUrlScalarFieldEnum
    having?: SourceUrlScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceUrlCountAggregateInputType | true
    _min?: SourceUrlMinAggregateInputType
    _max?: SourceUrlMaxAggregateInputType
  }

  export type SourceUrlGroupByOutputType = {
    sourceUrlId: string
    url: string
    wordId: string
    _count: SourceUrlCountAggregateOutputType | null
    _min: SourceUrlMinAggregateOutputType | null
    _max: SourceUrlMaxAggregateOutputType | null
  }

  type GetSourceUrlGroupByPayload<T extends SourceUrlGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceUrlGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceUrlGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceUrlGroupByOutputType[P]>
            : GetScalarType<T[P], SourceUrlGroupByOutputType[P]>
        }
      >
    >


  export type SourceUrlSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sourceUrlId?: boolean
    url?: boolean
    wordId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceUrl"]>

  export type SourceUrlSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sourceUrlId?: boolean
    url?: boolean
    wordId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceUrl"]>

  export type SourceUrlSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    sourceUrlId?: boolean
    url?: boolean
    wordId?: boolean
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceUrl"]>

  export type SourceUrlSelectScalar = {
    sourceUrlId?: boolean
    url?: boolean
    wordId?: boolean
  }

  export type SourceUrlOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"sourceUrlId" | "url" | "wordId", ExtArgs["result"]["sourceUrl"]>
  export type SourceUrlInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type SourceUrlIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type SourceUrlIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    word?: boolean | WordDefaultArgs<ExtArgs>
  }

  export type $SourceUrlPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SourceUrl"
    objects: {
      word: Prisma.$WordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      sourceUrlId: string
      url: string
      wordId: string
    }, ExtArgs["result"]["sourceUrl"]>
    composites: {}
  }

  type SourceUrlGetPayload<S extends boolean | null | undefined | SourceUrlDefaultArgs> = $Result.GetResult<Prisma.$SourceUrlPayload, S>

  type SourceUrlCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceUrlFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceUrlCountAggregateInputType | true
    }

  export interface SourceUrlDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SourceUrl'], meta: { name: 'SourceUrl' } }
    /**
     * Find zero or one SourceUrl that matches the filter.
     * @param {SourceUrlFindUniqueArgs} args - Arguments to find a SourceUrl
     * @example
     * // Get one SourceUrl
     * const sourceUrl = await prisma.sourceUrl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceUrlFindUniqueArgs>(args: SelectSubset<T, SourceUrlFindUniqueArgs<ExtArgs>>): Prisma__SourceUrlClient<$Result.GetResult<Prisma.$SourceUrlPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SourceUrl that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceUrlFindUniqueOrThrowArgs} args - Arguments to find a SourceUrl
     * @example
     * // Get one SourceUrl
     * const sourceUrl = await prisma.sourceUrl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceUrlFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceUrlFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceUrlClient<$Result.GetResult<Prisma.$SourceUrlPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceUrl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUrlFindFirstArgs} args - Arguments to find a SourceUrl
     * @example
     * // Get one SourceUrl
     * const sourceUrl = await prisma.sourceUrl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceUrlFindFirstArgs>(args?: SelectSubset<T, SourceUrlFindFirstArgs<ExtArgs>>): Prisma__SourceUrlClient<$Result.GetResult<Prisma.$SourceUrlPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceUrl that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUrlFindFirstOrThrowArgs} args - Arguments to find a SourceUrl
     * @example
     * // Get one SourceUrl
     * const sourceUrl = await prisma.sourceUrl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceUrlFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceUrlFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceUrlClient<$Result.GetResult<Prisma.$SourceUrlPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SourceUrls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUrlFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SourceUrls
     * const sourceUrls = await prisma.sourceUrl.findMany()
     * 
     * // Get first 10 SourceUrls
     * const sourceUrls = await prisma.sourceUrl.findMany({ take: 10 })
     * 
     * // Only select the `sourceUrlId`
     * const sourceUrlWithSourceUrlIdOnly = await prisma.sourceUrl.findMany({ select: { sourceUrlId: true } })
     * 
     */
    findMany<T extends SourceUrlFindManyArgs>(args?: SelectSubset<T, SourceUrlFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceUrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SourceUrl.
     * @param {SourceUrlCreateArgs} args - Arguments to create a SourceUrl.
     * @example
     * // Create one SourceUrl
     * const SourceUrl = await prisma.sourceUrl.create({
     *   data: {
     *     // ... data to create a SourceUrl
     *   }
     * })
     * 
     */
    create<T extends SourceUrlCreateArgs>(args: SelectSubset<T, SourceUrlCreateArgs<ExtArgs>>): Prisma__SourceUrlClient<$Result.GetResult<Prisma.$SourceUrlPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SourceUrls.
     * @param {SourceUrlCreateManyArgs} args - Arguments to create many SourceUrls.
     * @example
     * // Create many SourceUrls
     * const sourceUrl = await prisma.sourceUrl.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceUrlCreateManyArgs>(args?: SelectSubset<T, SourceUrlCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SourceUrls and returns the data saved in the database.
     * @param {SourceUrlCreateManyAndReturnArgs} args - Arguments to create many SourceUrls.
     * @example
     * // Create many SourceUrls
     * const sourceUrl = await prisma.sourceUrl.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SourceUrls and only return the `sourceUrlId`
     * const sourceUrlWithSourceUrlIdOnly = await prisma.sourceUrl.createManyAndReturn({
     *   select: { sourceUrlId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceUrlCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceUrlCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceUrlPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SourceUrl.
     * @param {SourceUrlDeleteArgs} args - Arguments to delete one SourceUrl.
     * @example
     * // Delete one SourceUrl
     * const SourceUrl = await prisma.sourceUrl.delete({
     *   where: {
     *     // ... filter to delete one SourceUrl
     *   }
     * })
     * 
     */
    delete<T extends SourceUrlDeleteArgs>(args: SelectSubset<T, SourceUrlDeleteArgs<ExtArgs>>): Prisma__SourceUrlClient<$Result.GetResult<Prisma.$SourceUrlPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SourceUrl.
     * @param {SourceUrlUpdateArgs} args - Arguments to update one SourceUrl.
     * @example
     * // Update one SourceUrl
     * const sourceUrl = await prisma.sourceUrl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceUrlUpdateArgs>(args: SelectSubset<T, SourceUrlUpdateArgs<ExtArgs>>): Prisma__SourceUrlClient<$Result.GetResult<Prisma.$SourceUrlPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SourceUrls.
     * @param {SourceUrlDeleteManyArgs} args - Arguments to filter SourceUrls to delete.
     * @example
     * // Delete a few SourceUrls
     * const { count } = await prisma.sourceUrl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceUrlDeleteManyArgs>(args?: SelectSubset<T, SourceUrlDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUrlUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SourceUrls
     * const sourceUrl = await prisma.sourceUrl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceUrlUpdateManyArgs>(args: SelectSubset<T, SourceUrlUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceUrls and returns the data updated in the database.
     * @param {SourceUrlUpdateManyAndReturnArgs} args - Arguments to update many SourceUrls.
     * @example
     * // Update many SourceUrls
     * const sourceUrl = await prisma.sourceUrl.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SourceUrls and only return the `sourceUrlId`
     * const sourceUrlWithSourceUrlIdOnly = await prisma.sourceUrl.updateManyAndReturn({
     *   select: { sourceUrlId: true },
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
    updateManyAndReturn<T extends SourceUrlUpdateManyAndReturnArgs>(args: SelectSubset<T, SourceUrlUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceUrlPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SourceUrl.
     * @param {SourceUrlUpsertArgs} args - Arguments to update or create a SourceUrl.
     * @example
     * // Update or create a SourceUrl
     * const sourceUrl = await prisma.sourceUrl.upsert({
     *   create: {
     *     // ... data to create a SourceUrl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SourceUrl we want to update
     *   }
     * })
     */
    upsert<T extends SourceUrlUpsertArgs>(args: SelectSubset<T, SourceUrlUpsertArgs<ExtArgs>>): Prisma__SourceUrlClient<$Result.GetResult<Prisma.$SourceUrlPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SourceUrls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUrlCountArgs} args - Arguments to filter SourceUrls to count.
     * @example
     * // Count the number of SourceUrls
     * const count = await prisma.sourceUrl.count({
     *   where: {
     *     // ... the filter for the SourceUrls we want to count
     *   }
     * })
    **/
    count<T extends SourceUrlCountArgs>(
      args?: Subset<T, SourceUrlCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceUrlCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SourceUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUrlAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SourceUrlAggregateArgs>(args: Subset<T, SourceUrlAggregateArgs>): Prisma.PrismaPromise<GetSourceUrlAggregateType<T>>

    /**
     * Group by SourceUrl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUrlGroupByArgs} args - Group by arguments.
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
      T extends SourceUrlGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceUrlGroupByArgs['orderBy'] }
        : { orderBy?: SourceUrlGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SourceUrlGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceUrlGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SourceUrl model
   */
  readonly fields: SourceUrlFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SourceUrl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceUrlClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    word<T extends WordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordDefaultArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SourceUrl model
   */
  interface SourceUrlFieldRefs {
    readonly sourceUrlId: FieldRef<"SourceUrl", 'String'>
    readonly url: FieldRef<"SourceUrl", 'String'>
    readonly wordId: FieldRef<"SourceUrl", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SourceUrl findUnique
   */
  export type SourceUrlFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUrl
     */
    select?: SourceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUrl
     */
    omit?: SourceUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUrlInclude<ExtArgs> | null
    /**
     * Filter, which SourceUrl to fetch.
     */
    where: SourceUrlWhereUniqueInput
  }

  /**
   * SourceUrl findUniqueOrThrow
   */
  export type SourceUrlFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUrl
     */
    select?: SourceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUrl
     */
    omit?: SourceUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUrlInclude<ExtArgs> | null
    /**
     * Filter, which SourceUrl to fetch.
     */
    where: SourceUrlWhereUniqueInput
  }

  /**
   * SourceUrl findFirst
   */
  export type SourceUrlFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUrl
     */
    select?: SourceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUrl
     */
    omit?: SourceUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUrlInclude<ExtArgs> | null
    /**
     * Filter, which SourceUrl to fetch.
     */
    where?: SourceUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceUrls to fetch.
     */
    orderBy?: SourceUrlOrderByWithRelationInput | SourceUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceUrls.
     */
    cursor?: SourceUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceUrls.
     */
    distinct?: SourceUrlScalarFieldEnum | SourceUrlScalarFieldEnum[]
  }

  /**
   * SourceUrl findFirstOrThrow
   */
  export type SourceUrlFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUrl
     */
    select?: SourceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUrl
     */
    omit?: SourceUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUrlInclude<ExtArgs> | null
    /**
     * Filter, which SourceUrl to fetch.
     */
    where?: SourceUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceUrls to fetch.
     */
    orderBy?: SourceUrlOrderByWithRelationInput | SourceUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceUrls.
     */
    cursor?: SourceUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceUrls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceUrls.
     */
    distinct?: SourceUrlScalarFieldEnum | SourceUrlScalarFieldEnum[]
  }

  /**
   * SourceUrl findMany
   */
  export type SourceUrlFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUrl
     */
    select?: SourceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUrl
     */
    omit?: SourceUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUrlInclude<ExtArgs> | null
    /**
     * Filter, which SourceUrls to fetch.
     */
    where?: SourceUrlWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceUrls to fetch.
     */
    orderBy?: SourceUrlOrderByWithRelationInput | SourceUrlOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SourceUrls.
     */
    cursor?: SourceUrlWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceUrls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceUrls.
     */
    skip?: number
    distinct?: SourceUrlScalarFieldEnum | SourceUrlScalarFieldEnum[]
  }

  /**
   * SourceUrl create
   */
  export type SourceUrlCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUrl
     */
    select?: SourceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUrl
     */
    omit?: SourceUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUrlInclude<ExtArgs> | null
    /**
     * The data needed to create a SourceUrl.
     */
    data: XOR<SourceUrlCreateInput, SourceUrlUncheckedCreateInput>
  }

  /**
   * SourceUrl createMany
   */
  export type SourceUrlCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SourceUrls.
     */
    data: SourceUrlCreateManyInput | SourceUrlCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourceUrl createManyAndReturn
   */
  export type SourceUrlCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUrl
     */
    select?: SourceUrlSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUrl
     */
    omit?: SourceUrlOmit<ExtArgs> | null
    /**
     * The data used to create many SourceUrls.
     */
    data: SourceUrlCreateManyInput | SourceUrlCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUrlIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SourceUrl update
   */
  export type SourceUrlUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUrl
     */
    select?: SourceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUrl
     */
    omit?: SourceUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUrlInclude<ExtArgs> | null
    /**
     * The data needed to update a SourceUrl.
     */
    data: XOR<SourceUrlUpdateInput, SourceUrlUncheckedUpdateInput>
    /**
     * Choose, which SourceUrl to update.
     */
    where: SourceUrlWhereUniqueInput
  }

  /**
   * SourceUrl updateMany
   */
  export type SourceUrlUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SourceUrls.
     */
    data: XOR<SourceUrlUpdateManyMutationInput, SourceUrlUncheckedUpdateManyInput>
    /**
     * Filter which SourceUrls to update
     */
    where?: SourceUrlWhereInput
    /**
     * Limit how many SourceUrls to update.
     */
    limit?: number
  }

  /**
   * SourceUrl updateManyAndReturn
   */
  export type SourceUrlUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUrl
     */
    select?: SourceUrlSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUrl
     */
    omit?: SourceUrlOmit<ExtArgs> | null
    /**
     * The data used to update SourceUrls.
     */
    data: XOR<SourceUrlUpdateManyMutationInput, SourceUrlUncheckedUpdateManyInput>
    /**
     * Filter which SourceUrls to update
     */
    where?: SourceUrlWhereInput
    /**
     * Limit how many SourceUrls to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUrlIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SourceUrl upsert
   */
  export type SourceUrlUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUrl
     */
    select?: SourceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUrl
     */
    omit?: SourceUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUrlInclude<ExtArgs> | null
    /**
     * The filter to search for the SourceUrl to update in case it exists.
     */
    where: SourceUrlWhereUniqueInput
    /**
     * In case the SourceUrl found by the `where` argument doesn't exist, create a new SourceUrl with this data.
     */
    create: XOR<SourceUrlCreateInput, SourceUrlUncheckedCreateInput>
    /**
     * In case the SourceUrl was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceUrlUpdateInput, SourceUrlUncheckedUpdateInput>
  }

  /**
   * SourceUrl delete
   */
  export type SourceUrlDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUrl
     */
    select?: SourceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUrl
     */
    omit?: SourceUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUrlInclude<ExtArgs> | null
    /**
     * Filter which SourceUrl to delete.
     */
    where: SourceUrlWhereUniqueInput
  }

  /**
   * SourceUrl deleteMany
   */
  export type SourceUrlDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceUrls to delete
     */
    where?: SourceUrlWhereInput
    /**
     * Limit how many SourceUrls to delete.
     */
    limit?: number
  }

  /**
   * SourceUrl without action
   */
  export type SourceUrlDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUrl
     */
    select?: SourceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUrl
     */
    omit?: SourceUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUrlInclude<ExtArgs> | null
  }


  /**
   * Model Synonym
   */

  export type AggregateSynonym = {
    _count: SynonymCountAggregateOutputType | null
    _min: SynonymMinAggregateOutputType | null
    _max: SynonymMaxAggregateOutputType | null
  }

  export type SynonymMinAggregateOutputType = {
    synonymId: string | null
    word: string | null
    meaningId: string | null
  }

  export type SynonymMaxAggregateOutputType = {
    synonymId: string | null
    word: string | null
    meaningId: string | null
  }

  export type SynonymCountAggregateOutputType = {
    synonymId: number
    word: number
    meaningId: number
    _all: number
  }


  export type SynonymMinAggregateInputType = {
    synonymId?: true
    word?: true
    meaningId?: true
  }

  export type SynonymMaxAggregateInputType = {
    synonymId?: true
    word?: true
    meaningId?: true
  }

  export type SynonymCountAggregateInputType = {
    synonymId?: true
    word?: true
    meaningId?: true
    _all?: true
  }

  export type SynonymAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Synonym to aggregate.
     */
    where?: SynonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Synonyms to fetch.
     */
    orderBy?: SynonymOrderByWithRelationInput | SynonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SynonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Synonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Synonyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Synonyms
    **/
    _count?: true | SynonymCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SynonymMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SynonymMaxAggregateInputType
  }

  export type GetSynonymAggregateType<T extends SynonymAggregateArgs> = {
        [P in keyof T & keyof AggregateSynonym]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSynonym[P]>
      : GetScalarType<T[P], AggregateSynonym[P]>
  }




  export type SynonymGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SynonymWhereInput
    orderBy?: SynonymOrderByWithAggregationInput | SynonymOrderByWithAggregationInput[]
    by: SynonymScalarFieldEnum[] | SynonymScalarFieldEnum
    having?: SynonymScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SynonymCountAggregateInputType | true
    _min?: SynonymMinAggregateInputType
    _max?: SynonymMaxAggregateInputType
  }

  export type SynonymGroupByOutputType = {
    synonymId: string
    word: string
    meaningId: string
    _count: SynonymCountAggregateOutputType | null
    _min: SynonymMinAggregateOutputType | null
    _max: SynonymMaxAggregateOutputType | null
  }

  type GetSynonymGroupByPayload<T extends SynonymGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SynonymGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SynonymGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SynonymGroupByOutputType[P]>
            : GetScalarType<T[P], SynonymGroupByOutputType[P]>
        }
      >
    >


  export type SynonymSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    synonymId?: boolean
    word?: boolean
    meaningId?: boolean
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["synonym"]>

  export type SynonymSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    synonymId?: boolean
    word?: boolean
    meaningId?: boolean
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["synonym"]>

  export type SynonymSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    synonymId?: boolean
    word?: boolean
    meaningId?: boolean
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["synonym"]>

  export type SynonymSelectScalar = {
    synonymId?: boolean
    word?: boolean
    meaningId?: boolean
  }

  export type SynonymOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"synonymId" | "word" | "meaningId", ExtArgs["result"]["synonym"]>
  export type SynonymInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }
  export type SynonymIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }
  export type SynonymIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meaning?: boolean | MeaningDefaultArgs<ExtArgs>
  }

  export type $SynonymPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Synonym"
    objects: {
      meaning: Prisma.$MeaningPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      synonymId: string
      word: string
      meaningId: string
    }, ExtArgs["result"]["synonym"]>
    composites: {}
  }

  type SynonymGetPayload<S extends boolean | null | undefined | SynonymDefaultArgs> = $Result.GetResult<Prisma.$SynonymPayload, S>

  type SynonymCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SynonymFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SynonymCountAggregateInputType | true
    }

  export interface SynonymDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Synonym'], meta: { name: 'Synonym' } }
    /**
     * Find zero or one Synonym that matches the filter.
     * @param {SynonymFindUniqueArgs} args - Arguments to find a Synonym
     * @example
     * // Get one Synonym
     * const synonym = await prisma.synonym.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SynonymFindUniqueArgs>(args: SelectSubset<T, SynonymFindUniqueArgs<ExtArgs>>): Prisma__SynonymClient<$Result.GetResult<Prisma.$SynonymPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Synonym that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SynonymFindUniqueOrThrowArgs} args - Arguments to find a Synonym
     * @example
     * // Get one Synonym
     * const synonym = await prisma.synonym.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SynonymFindUniqueOrThrowArgs>(args: SelectSubset<T, SynonymFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SynonymClient<$Result.GetResult<Prisma.$SynonymPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Synonym that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SynonymFindFirstArgs} args - Arguments to find a Synonym
     * @example
     * // Get one Synonym
     * const synonym = await prisma.synonym.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SynonymFindFirstArgs>(args?: SelectSubset<T, SynonymFindFirstArgs<ExtArgs>>): Prisma__SynonymClient<$Result.GetResult<Prisma.$SynonymPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Synonym that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SynonymFindFirstOrThrowArgs} args - Arguments to find a Synonym
     * @example
     * // Get one Synonym
     * const synonym = await prisma.synonym.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SynonymFindFirstOrThrowArgs>(args?: SelectSubset<T, SynonymFindFirstOrThrowArgs<ExtArgs>>): Prisma__SynonymClient<$Result.GetResult<Prisma.$SynonymPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Synonyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SynonymFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Synonyms
     * const synonyms = await prisma.synonym.findMany()
     * 
     * // Get first 10 Synonyms
     * const synonyms = await prisma.synonym.findMany({ take: 10 })
     * 
     * // Only select the `synonymId`
     * const synonymWithSynonymIdOnly = await prisma.synonym.findMany({ select: { synonymId: true } })
     * 
     */
    findMany<T extends SynonymFindManyArgs>(args?: SelectSubset<T, SynonymFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SynonymPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Synonym.
     * @param {SynonymCreateArgs} args - Arguments to create a Synonym.
     * @example
     * // Create one Synonym
     * const Synonym = await prisma.synonym.create({
     *   data: {
     *     // ... data to create a Synonym
     *   }
     * })
     * 
     */
    create<T extends SynonymCreateArgs>(args: SelectSubset<T, SynonymCreateArgs<ExtArgs>>): Prisma__SynonymClient<$Result.GetResult<Prisma.$SynonymPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Synonyms.
     * @param {SynonymCreateManyArgs} args - Arguments to create many Synonyms.
     * @example
     * // Create many Synonyms
     * const synonym = await prisma.synonym.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SynonymCreateManyArgs>(args?: SelectSubset<T, SynonymCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Synonyms and returns the data saved in the database.
     * @param {SynonymCreateManyAndReturnArgs} args - Arguments to create many Synonyms.
     * @example
     * // Create many Synonyms
     * const synonym = await prisma.synonym.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Synonyms and only return the `synonymId`
     * const synonymWithSynonymIdOnly = await prisma.synonym.createManyAndReturn({
     *   select: { synonymId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SynonymCreateManyAndReturnArgs>(args?: SelectSubset<T, SynonymCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SynonymPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Synonym.
     * @param {SynonymDeleteArgs} args - Arguments to delete one Synonym.
     * @example
     * // Delete one Synonym
     * const Synonym = await prisma.synonym.delete({
     *   where: {
     *     // ... filter to delete one Synonym
     *   }
     * })
     * 
     */
    delete<T extends SynonymDeleteArgs>(args: SelectSubset<T, SynonymDeleteArgs<ExtArgs>>): Prisma__SynonymClient<$Result.GetResult<Prisma.$SynonymPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Synonym.
     * @param {SynonymUpdateArgs} args - Arguments to update one Synonym.
     * @example
     * // Update one Synonym
     * const synonym = await prisma.synonym.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SynonymUpdateArgs>(args: SelectSubset<T, SynonymUpdateArgs<ExtArgs>>): Prisma__SynonymClient<$Result.GetResult<Prisma.$SynonymPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Synonyms.
     * @param {SynonymDeleteManyArgs} args - Arguments to filter Synonyms to delete.
     * @example
     * // Delete a few Synonyms
     * const { count } = await prisma.synonym.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SynonymDeleteManyArgs>(args?: SelectSubset<T, SynonymDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Synonyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SynonymUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Synonyms
     * const synonym = await prisma.synonym.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SynonymUpdateManyArgs>(args: SelectSubset<T, SynonymUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Synonyms and returns the data updated in the database.
     * @param {SynonymUpdateManyAndReturnArgs} args - Arguments to update many Synonyms.
     * @example
     * // Update many Synonyms
     * const synonym = await prisma.synonym.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Synonyms and only return the `synonymId`
     * const synonymWithSynonymIdOnly = await prisma.synonym.updateManyAndReturn({
     *   select: { synonymId: true },
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
    updateManyAndReturn<T extends SynonymUpdateManyAndReturnArgs>(args: SelectSubset<T, SynonymUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SynonymPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Synonym.
     * @param {SynonymUpsertArgs} args - Arguments to update or create a Synonym.
     * @example
     * // Update or create a Synonym
     * const synonym = await prisma.synonym.upsert({
     *   create: {
     *     // ... data to create a Synonym
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Synonym we want to update
     *   }
     * })
     */
    upsert<T extends SynonymUpsertArgs>(args: SelectSubset<T, SynonymUpsertArgs<ExtArgs>>): Prisma__SynonymClient<$Result.GetResult<Prisma.$SynonymPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Synonyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SynonymCountArgs} args - Arguments to filter Synonyms to count.
     * @example
     * // Count the number of Synonyms
     * const count = await prisma.synonym.count({
     *   where: {
     *     // ... the filter for the Synonyms we want to count
     *   }
     * })
    **/
    count<T extends SynonymCountArgs>(
      args?: Subset<T, SynonymCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SynonymCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Synonym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SynonymAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SynonymAggregateArgs>(args: Subset<T, SynonymAggregateArgs>): Prisma.PrismaPromise<GetSynonymAggregateType<T>>

    /**
     * Group by Synonym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SynonymGroupByArgs} args - Group by arguments.
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
      T extends SynonymGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SynonymGroupByArgs['orderBy'] }
        : { orderBy?: SynonymGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SynonymGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSynonymGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Synonym model
   */
  readonly fields: SynonymFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Synonym.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SynonymClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meaning<T extends MeaningDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeaningDefaultArgs<ExtArgs>>): Prisma__MeaningClient<$Result.GetResult<Prisma.$MeaningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Synonym model
   */
  interface SynonymFieldRefs {
    readonly synonymId: FieldRef<"Synonym", 'String'>
    readonly word: FieldRef<"Synonym", 'String'>
    readonly meaningId: FieldRef<"Synonym", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Synonym findUnique
   */
  export type SynonymFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synonym
     */
    select?: SynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synonym
     */
    omit?: SynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynonymInclude<ExtArgs> | null
    /**
     * Filter, which Synonym to fetch.
     */
    where: SynonymWhereUniqueInput
  }

  /**
   * Synonym findUniqueOrThrow
   */
  export type SynonymFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synonym
     */
    select?: SynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synonym
     */
    omit?: SynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynonymInclude<ExtArgs> | null
    /**
     * Filter, which Synonym to fetch.
     */
    where: SynonymWhereUniqueInput
  }

  /**
   * Synonym findFirst
   */
  export type SynonymFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synonym
     */
    select?: SynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synonym
     */
    omit?: SynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynonymInclude<ExtArgs> | null
    /**
     * Filter, which Synonym to fetch.
     */
    where?: SynonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Synonyms to fetch.
     */
    orderBy?: SynonymOrderByWithRelationInput | SynonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Synonyms.
     */
    cursor?: SynonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Synonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Synonyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Synonyms.
     */
    distinct?: SynonymScalarFieldEnum | SynonymScalarFieldEnum[]
  }

  /**
   * Synonym findFirstOrThrow
   */
  export type SynonymFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synonym
     */
    select?: SynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synonym
     */
    omit?: SynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynonymInclude<ExtArgs> | null
    /**
     * Filter, which Synonym to fetch.
     */
    where?: SynonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Synonyms to fetch.
     */
    orderBy?: SynonymOrderByWithRelationInput | SynonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Synonyms.
     */
    cursor?: SynonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Synonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Synonyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Synonyms.
     */
    distinct?: SynonymScalarFieldEnum | SynonymScalarFieldEnum[]
  }

  /**
   * Synonym findMany
   */
  export type SynonymFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synonym
     */
    select?: SynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synonym
     */
    omit?: SynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynonymInclude<ExtArgs> | null
    /**
     * Filter, which Synonyms to fetch.
     */
    where?: SynonymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Synonyms to fetch.
     */
    orderBy?: SynonymOrderByWithRelationInput | SynonymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Synonyms.
     */
    cursor?: SynonymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Synonyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Synonyms.
     */
    skip?: number
    distinct?: SynonymScalarFieldEnum | SynonymScalarFieldEnum[]
  }

  /**
   * Synonym create
   */
  export type SynonymCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synonym
     */
    select?: SynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synonym
     */
    omit?: SynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynonymInclude<ExtArgs> | null
    /**
     * The data needed to create a Synonym.
     */
    data: XOR<SynonymCreateInput, SynonymUncheckedCreateInput>
  }

  /**
   * Synonym createMany
   */
  export type SynonymCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Synonyms.
     */
    data: SynonymCreateManyInput | SynonymCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Synonym createManyAndReturn
   */
  export type SynonymCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synonym
     */
    select?: SynonymSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Synonym
     */
    omit?: SynonymOmit<ExtArgs> | null
    /**
     * The data used to create many Synonyms.
     */
    data: SynonymCreateManyInput | SynonymCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynonymIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Synonym update
   */
  export type SynonymUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synonym
     */
    select?: SynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synonym
     */
    omit?: SynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynonymInclude<ExtArgs> | null
    /**
     * The data needed to update a Synonym.
     */
    data: XOR<SynonymUpdateInput, SynonymUncheckedUpdateInput>
    /**
     * Choose, which Synonym to update.
     */
    where: SynonymWhereUniqueInput
  }

  /**
   * Synonym updateMany
   */
  export type SynonymUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Synonyms.
     */
    data: XOR<SynonymUpdateManyMutationInput, SynonymUncheckedUpdateManyInput>
    /**
     * Filter which Synonyms to update
     */
    where?: SynonymWhereInput
    /**
     * Limit how many Synonyms to update.
     */
    limit?: number
  }

  /**
   * Synonym updateManyAndReturn
   */
  export type SynonymUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synonym
     */
    select?: SynonymSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Synonym
     */
    omit?: SynonymOmit<ExtArgs> | null
    /**
     * The data used to update Synonyms.
     */
    data: XOR<SynonymUpdateManyMutationInput, SynonymUncheckedUpdateManyInput>
    /**
     * Filter which Synonyms to update
     */
    where?: SynonymWhereInput
    /**
     * Limit how many Synonyms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynonymIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Synonym upsert
   */
  export type SynonymUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synonym
     */
    select?: SynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synonym
     */
    omit?: SynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynonymInclude<ExtArgs> | null
    /**
     * The filter to search for the Synonym to update in case it exists.
     */
    where: SynonymWhereUniqueInput
    /**
     * In case the Synonym found by the `where` argument doesn't exist, create a new Synonym with this data.
     */
    create: XOR<SynonymCreateInput, SynonymUncheckedCreateInput>
    /**
     * In case the Synonym was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SynonymUpdateInput, SynonymUncheckedUpdateInput>
  }

  /**
   * Synonym delete
   */
  export type SynonymDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synonym
     */
    select?: SynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synonym
     */
    omit?: SynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynonymInclude<ExtArgs> | null
    /**
     * Filter which Synonym to delete.
     */
    where: SynonymWhereUniqueInput
  }

  /**
   * Synonym deleteMany
   */
  export type SynonymDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Synonyms to delete
     */
    where?: SynonymWhereInput
    /**
     * Limit how many Synonyms to delete.
     */
    limit?: number
  }

  /**
   * Synonym without action
   */
  export type SynonymDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Synonym
     */
    select?: SynonymSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Synonym
     */
    omit?: SynonymOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SynonymInclude<ExtArgs> | null
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
    userId: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    email: number
    password: number
    firstName: number
    lastName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
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
    userId: string
    email: string
    password: string
    firstName: string
    lastName: string
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
    userId?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    history?: boolean | User$historyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "email" | "password" | "firstName" | "lastName" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | User$historyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      history: Prisma.$UserWordHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      email: string
      password: string
      firstName: string
      lastName: string
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
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
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
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
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
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
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
    history<T extends User$historyArgs<ExtArgs> = {}>(args?: Subset<T, User$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWordHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
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
   * User.history
   */
  export type User$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordHistory
     */
    select?: UserWordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordHistory
     */
    omit?: UserWordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordHistoryInclude<ExtArgs> | null
    where?: UserWordHistoryWhereInput
    orderBy?: UserWordHistoryOrderByWithRelationInput | UserWordHistoryOrderByWithRelationInput[]
    cursor?: UserWordHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWordHistoryScalarFieldEnum | UserWordHistoryScalarFieldEnum[]
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
   * Model UserWordHistory
   */

  export type AggregateUserWordHistory = {
    _count: UserWordHistoryCountAggregateOutputType | null
    _min: UserWordHistoryMinAggregateOutputType | null
    _max: UserWordHistoryMaxAggregateOutputType | null
  }

  export type UserWordHistoryMinAggregateOutputType = {
    userWordHistoryId: string | null
    userId: string | null
    wordId: string | null
    lastVisitedAt: Date | null
  }

  export type UserWordHistoryMaxAggregateOutputType = {
    userWordHistoryId: string | null
    userId: string | null
    wordId: string | null
    lastVisitedAt: Date | null
  }

  export type UserWordHistoryCountAggregateOutputType = {
    userWordHistoryId: number
    userId: number
    wordId: number
    lastVisitedAt: number
    _all: number
  }


  export type UserWordHistoryMinAggregateInputType = {
    userWordHistoryId?: true
    userId?: true
    wordId?: true
    lastVisitedAt?: true
  }

  export type UserWordHistoryMaxAggregateInputType = {
    userWordHistoryId?: true
    userId?: true
    wordId?: true
    lastVisitedAt?: true
  }

  export type UserWordHistoryCountAggregateInputType = {
    userWordHistoryId?: true
    userId?: true
    wordId?: true
    lastVisitedAt?: true
    _all?: true
  }

  export type UserWordHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWordHistory to aggregate.
     */
    where?: UserWordHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWordHistories to fetch.
     */
    orderBy?: UserWordHistoryOrderByWithRelationInput | UserWordHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWordHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWordHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWordHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserWordHistories
    **/
    _count?: true | UserWordHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserWordHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserWordHistoryMaxAggregateInputType
  }

  export type GetUserWordHistoryAggregateType<T extends UserWordHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateUserWordHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserWordHistory[P]>
      : GetScalarType<T[P], AggregateUserWordHistory[P]>
  }




  export type UserWordHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWordHistoryWhereInput
    orderBy?: UserWordHistoryOrderByWithAggregationInput | UserWordHistoryOrderByWithAggregationInput[]
    by: UserWordHistoryScalarFieldEnum[] | UserWordHistoryScalarFieldEnum
    having?: UserWordHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserWordHistoryCountAggregateInputType | true
    _min?: UserWordHistoryMinAggregateInputType
    _max?: UserWordHistoryMaxAggregateInputType
  }

  export type UserWordHistoryGroupByOutputType = {
    userWordHistoryId: string
    userId: string
    wordId: string
    lastVisitedAt: Date
    _count: UserWordHistoryCountAggregateOutputType | null
    _min: UserWordHistoryMinAggregateOutputType | null
    _max: UserWordHistoryMaxAggregateOutputType | null
  }

  type GetUserWordHistoryGroupByPayload<T extends UserWordHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserWordHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserWordHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserWordHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], UserWordHistoryGroupByOutputType[P]>
        }
      >
    >


  export type UserWordHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userWordHistoryId?: boolean
    userId?: boolean
    wordId?: boolean
    lastVisitedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWordHistory"]>

  export type UserWordHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userWordHistoryId?: boolean
    userId?: boolean
    wordId?: boolean
    lastVisitedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWordHistory"]>

  export type UserWordHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userWordHistoryId?: boolean
    userId?: boolean
    wordId?: boolean
    lastVisitedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWordHistory"]>

  export type UserWordHistorySelectScalar = {
    userWordHistoryId?: boolean
    userId?: boolean
    wordId?: boolean
    lastVisitedAt?: boolean
  }

  export type UserWordHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userWordHistoryId" | "userId" | "wordId" | "lastVisitedAt", ExtArgs["result"]["userWordHistory"]>
  export type UserWordHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type UserWordHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }
  export type UserWordHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    word?: boolean | WordDefaultArgs<ExtArgs>
  }

  export type $UserWordHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserWordHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      word: Prisma.$WordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userWordHistoryId: string
      userId: string
      wordId: string
      lastVisitedAt: Date
    }, ExtArgs["result"]["userWordHistory"]>
    composites: {}
  }

  type UserWordHistoryGetPayload<S extends boolean | null | undefined | UserWordHistoryDefaultArgs> = $Result.GetResult<Prisma.$UserWordHistoryPayload, S>

  type UserWordHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserWordHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserWordHistoryCountAggregateInputType | true
    }

  export interface UserWordHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserWordHistory'], meta: { name: 'UserWordHistory' } }
    /**
     * Find zero or one UserWordHistory that matches the filter.
     * @param {UserWordHistoryFindUniqueArgs} args - Arguments to find a UserWordHistory
     * @example
     * // Get one UserWordHistory
     * const userWordHistory = await prisma.userWordHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserWordHistoryFindUniqueArgs>(args: SelectSubset<T, UserWordHistoryFindUniqueArgs<ExtArgs>>): Prisma__UserWordHistoryClient<$Result.GetResult<Prisma.$UserWordHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserWordHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserWordHistoryFindUniqueOrThrowArgs} args - Arguments to find a UserWordHistory
     * @example
     * // Get one UserWordHistory
     * const userWordHistory = await prisma.userWordHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserWordHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, UserWordHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserWordHistoryClient<$Result.GetResult<Prisma.$UserWordHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWordHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWordHistoryFindFirstArgs} args - Arguments to find a UserWordHistory
     * @example
     * // Get one UserWordHistory
     * const userWordHistory = await prisma.userWordHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserWordHistoryFindFirstArgs>(args?: SelectSubset<T, UserWordHistoryFindFirstArgs<ExtArgs>>): Prisma__UserWordHistoryClient<$Result.GetResult<Prisma.$UserWordHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWordHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWordHistoryFindFirstOrThrowArgs} args - Arguments to find a UserWordHistory
     * @example
     * // Get one UserWordHistory
     * const userWordHistory = await prisma.userWordHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserWordHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, UserWordHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserWordHistoryClient<$Result.GetResult<Prisma.$UserWordHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserWordHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWordHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserWordHistories
     * const userWordHistories = await prisma.userWordHistory.findMany()
     * 
     * // Get first 10 UserWordHistories
     * const userWordHistories = await prisma.userWordHistory.findMany({ take: 10 })
     * 
     * // Only select the `userWordHistoryId`
     * const userWordHistoryWithUserWordHistoryIdOnly = await prisma.userWordHistory.findMany({ select: { userWordHistoryId: true } })
     * 
     */
    findMany<T extends UserWordHistoryFindManyArgs>(args?: SelectSubset<T, UserWordHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWordHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserWordHistory.
     * @param {UserWordHistoryCreateArgs} args - Arguments to create a UserWordHistory.
     * @example
     * // Create one UserWordHistory
     * const UserWordHistory = await prisma.userWordHistory.create({
     *   data: {
     *     // ... data to create a UserWordHistory
     *   }
     * })
     * 
     */
    create<T extends UserWordHistoryCreateArgs>(args: SelectSubset<T, UserWordHistoryCreateArgs<ExtArgs>>): Prisma__UserWordHistoryClient<$Result.GetResult<Prisma.$UserWordHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserWordHistories.
     * @param {UserWordHistoryCreateManyArgs} args - Arguments to create many UserWordHistories.
     * @example
     * // Create many UserWordHistories
     * const userWordHistory = await prisma.userWordHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserWordHistoryCreateManyArgs>(args?: SelectSubset<T, UserWordHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserWordHistories and returns the data saved in the database.
     * @param {UserWordHistoryCreateManyAndReturnArgs} args - Arguments to create many UserWordHistories.
     * @example
     * // Create many UserWordHistories
     * const userWordHistory = await prisma.userWordHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserWordHistories and only return the `userWordHistoryId`
     * const userWordHistoryWithUserWordHistoryIdOnly = await prisma.userWordHistory.createManyAndReturn({
     *   select: { userWordHistoryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserWordHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, UserWordHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWordHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserWordHistory.
     * @param {UserWordHistoryDeleteArgs} args - Arguments to delete one UserWordHistory.
     * @example
     * // Delete one UserWordHistory
     * const UserWordHistory = await prisma.userWordHistory.delete({
     *   where: {
     *     // ... filter to delete one UserWordHistory
     *   }
     * })
     * 
     */
    delete<T extends UserWordHistoryDeleteArgs>(args: SelectSubset<T, UserWordHistoryDeleteArgs<ExtArgs>>): Prisma__UserWordHistoryClient<$Result.GetResult<Prisma.$UserWordHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserWordHistory.
     * @param {UserWordHistoryUpdateArgs} args - Arguments to update one UserWordHistory.
     * @example
     * // Update one UserWordHistory
     * const userWordHistory = await prisma.userWordHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserWordHistoryUpdateArgs>(args: SelectSubset<T, UserWordHistoryUpdateArgs<ExtArgs>>): Prisma__UserWordHistoryClient<$Result.GetResult<Prisma.$UserWordHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserWordHistories.
     * @param {UserWordHistoryDeleteManyArgs} args - Arguments to filter UserWordHistories to delete.
     * @example
     * // Delete a few UserWordHistories
     * const { count } = await prisma.userWordHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserWordHistoryDeleteManyArgs>(args?: SelectSubset<T, UserWordHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWordHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWordHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserWordHistories
     * const userWordHistory = await prisma.userWordHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserWordHistoryUpdateManyArgs>(args: SelectSubset<T, UserWordHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWordHistories and returns the data updated in the database.
     * @param {UserWordHistoryUpdateManyAndReturnArgs} args - Arguments to update many UserWordHistories.
     * @example
     * // Update many UserWordHistories
     * const userWordHistory = await prisma.userWordHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserWordHistories and only return the `userWordHistoryId`
     * const userWordHistoryWithUserWordHistoryIdOnly = await prisma.userWordHistory.updateManyAndReturn({
     *   select: { userWordHistoryId: true },
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
    updateManyAndReturn<T extends UserWordHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, UserWordHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWordHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserWordHistory.
     * @param {UserWordHistoryUpsertArgs} args - Arguments to update or create a UserWordHistory.
     * @example
     * // Update or create a UserWordHistory
     * const userWordHistory = await prisma.userWordHistory.upsert({
     *   create: {
     *     // ... data to create a UserWordHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserWordHistory we want to update
     *   }
     * })
     */
    upsert<T extends UserWordHistoryUpsertArgs>(args: SelectSubset<T, UserWordHistoryUpsertArgs<ExtArgs>>): Prisma__UserWordHistoryClient<$Result.GetResult<Prisma.$UserWordHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserWordHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWordHistoryCountArgs} args - Arguments to filter UserWordHistories to count.
     * @example
     * // Count the number of UserWordHistories
     * const count = await prisma.userWordHistory.count({
     *   where: {
     *     // ... the filter for the UserWordHistories we want to count
     *   }
     * })
    **/
    count<T extends UserWordHistoryCountArgs>(
      args?: Subset<T, UserWordHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserWordHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserWordHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWordHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserWordHistoryAggregateArgs>(args: Subset<T, UserWordHistoryAggregateArgs>): Prisma.PrismaPromise<GetUserWordHistoryAggregateType<T>>

    /**
     * Group by UserWordHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWordHistoryGroupByArgs} args - Group by arguments.
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
      T extends UserWordHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserWordHistoryGroupByArgs['orderBy'] }
        : { orderBy?: UserWordHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserWordHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserWordHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserWordHistory model
   */
  readonly fields: UserWordHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserWordHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserWordHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    word<T extends WordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WordDefaultArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserWordHistory model
   */
  interface UserWordHistoryFieldRefs {
    readonly userWordHistoryId: FieldRef<"UserWordHistory", 'String'>
    readonly userId: FieldRef<"UserWordHistory", 'String'>
    readonly wordId: FieldRef<"UserWordHistory", 'String'>
    readonly lastVisitedAt: FieldRef<"UserWordHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserWordHistory findUnique
   */
  export type UserWordHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordHistory
     */
    select?: UserWordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordHistory
     */
    omit?: UserWordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserWordHistory to fetch.
     */
    where: UserWordHistoryWhereUniqueInput
  }

  /**
   * UserWordHistory findUniqueOrThrow
   */
  export type UserWordHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordHistory
     */
    select?: UserWordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordHistory
     */
    omit?: UserWordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserWordHistory to fetch.
     */
    where: UserWordHistoryWhereUniqueInput
  }

  /**
   * UserWordHistory findFirst
   */
  export type UserWordHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordHistory
     */
    select?: UserWordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordHistory
     */
    omit?: UserWordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserWordHistory to fetch.
     */
    where?: UserWordHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWordHistories to fetch.
     */
    orderBy?: UserWordHistoryOrderByWithRelationInput | UserWordHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWordHistories.
     */
    cursor?: UserWordHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWordHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWordHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWordHistories.
     */
    distinct?: UserWordHistoryScalarFieldEnum | UserWordHistoryScalarFieldEnum[]
  }

  /**
   * UserWordHistory findFirstOrThrow
   */
  export type UserWordHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordHistory
     */
    select?: UserWordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordHistory
     */
    omit?: UserWordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserWordHistory to fetch.
     */
    where?: UserWordHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWordHistories to fetch.
     */
    orderBy?: UserWordHistoryOrderByWithRelationInput | UserWordHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWordHistories.
     */
    cursor?: UserWordHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWordHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWordHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWordHistories.
     */
    distinct?: UserWordHistoryScalarFieldEnum | UserWordHistoryScalarFieldEnum[]
  }

  /**
   * UserWordHistory findMany
   */
  export type UserWordHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordHistory
     */
    select?: UserWordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordHistory
     */
    omit?: UserWordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordHistoryInclude<ExtArgs> | null
    /**
     * Filter, which UserWordHistories to fetch.
     */
    where?: UserWordHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWordHistories to fetch.
     */
    orderBy?: UserWordHistoryOrderByWithRelationInput | UserWordHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserWordHistories.
     */
    cursor?: UserWordHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWordHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWordHistories.
     */
    skip?: number
    distinct?: UserWordHistoryScalarFieldEnum | UserWordHistoryScalarFieldEnum[]
  }

  /**
   * UserWordHistory create
   */
  export type UserWordHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordHistory
     */
    select?: UserWordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordHistory
     */
    omit?: UserWordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a UserWordHistory.
     */
    data: XOR<UserWordHistoryCreateInput, UserWordHistoryUncheckedCreateInput>
  }

  /**
   * UserWordHistory createMany
   */
  export type UserWordHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserWordHistories.
     */
    data: UserWordHistoryCreateManyInput | UserWordHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserWordHistory createManyAndReturn
   */
  export type UserWordHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordHistory
     */
    select?: UserWordHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordHistory
     */
    omit?: UserWordHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many UserWordHistories.
     */
    data: UserWordHistoryCreateManyInput | UserWordHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWordHistory update
   */
  export type UserWordHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordHistory
     */
    select?: UserWordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordHistory
     */
    omit?: UserWordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a UserWordHistory.
     */
    data: XOR<UserWordHistoryUpdateInput, UserWordHistoryUncheckedUpdateInput>
    /**
     * Choose, which UserWordHistory to update.
     */
    where: UserWordHistoryWhereUniqueInput
  }

  /**
   * UserWordHistory updateMany
   */
  export type UserWordHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserWordHistories.
     */
    data: XOR<UserWordHistoryUpdateManyMutationInput, UserWordHistoryUncheckedUpdateManyInput>
    /**
     * Filter which UserWordHistories to update
     */
    where?: UserWordHistoryWhereInput
    /**
     * Limit how many UserWordHistories to update.
     */
    limit?: number
  }

  /**
   * UserWordHistory updateManyAndReturn
   */
  export type UserWordHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordHistory
     */
    select?: UserWordHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordHistory
     */
    omit?: UserWordHistoryOmit<ExtArgs> | null
    /**
     * The data used to update UserWordHistories.
     */
    data: XOR<UserWordHistoryUpdateManyMutationInput, UserWordHistoryUncheckedUpdateManyInput>
    /**
     * Filter which UserWordHistories to update
     */
    where?: UserWordHistoryWhereInput
    /**
     * Limit how many UserWordHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWordHistory upsert
   */
  export type UserWordHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordHistory
     */
    select?: UserWordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordHistory
     */
    omit?: UserWordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the UserWordHistory to update in case it exists.
     */
    where: UserWordHistoryWhereUniqueInput
    /**
     * In case the UserWordHistory found by the `where` argument doesn't exist, create a new UserWordHistory with this data.
     */
    create: XOR<UserWordHistoryCreateInput, UserWordHistoryUncheckedCreateInput>
    /**
     * In case the UserWordHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserWordHistoryUpdateInput, UserWordHistoryUncheckedUpdateInput>
  }

  /**
   * UserWordHistory delete
   */
  export type UserWordHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordHistory
     */
    select?: UserWordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordHistory
     */
    omit?: UserWordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordHistoryInclude<ExtArgs> | null
    /**
     * Filter which UserWordHistory to delete.
     */
    where: UserWordHistoryWhereUniqueInput
  }

  /**
   * UserWordHistory deleteMany
   */
  export type UserWordHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWordHistories to delete
     */
    where?: UserWordHistoryWhereInput
    /**
     * Limit how many UserWordHistories to delete.
     */
    limit?: number
  }

  /**
   * UserWordHistory without action
   */
  export type UserWordHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordHistory
     */
    select?: UserWordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordHistory
     */
    omit?: UserWordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Word
   */

  export type AggregateWord = {
    _count: WordCountAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  export type WordMinAggregateOutputType = {
    wordId: string | null
    word: string | null
    isFavorite: boolean | null
    licenseId: string | null
    status: $Enums.WordStatus | null
    createdAt: Date | null
  }

  export type WordMaxAggregateOutputType = {
    wordId: string | null
    word: string | null
    isFavorite: boolean | null
    licenseId: string | null
    status: $Enums.WordStatus | null
    createdAt: Date | null
  }

  export type WordCountAggregateOutputType = {
    wordId: number
    word: number
    isFavorite: number
    licenseId: number
    status: number
    createdAt: number
    _all: number
  }


  export type WordMinAggregateInputType = {
    wordId?: true
    word?: true
    isFavorite?: true
    licenseId?: true
    status?: true
    createdAt?: true
  }

  export type WordMaxAggregateInputType = {
    wordId?: true
    word?: true
    isFavorite?: true
    licenseId?: true
    status?: true
    createdAt?: true
  }

  export type WordCountAggregateInputType = {
    wordId?: true
    word?: true
    isFavorite?: true
    licenseId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type WordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Word to aggregate.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Words
    **/
    _count?: true | WordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WordMaxAggregateInputType
  }

  export type GetWordAggregateType<T extends WordAggregateArgs> = {
        [P in keyof T & keyof AggregateWord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWord[P]>
      : GetScalarType<T[P], AggregateWord[P]>
  }




  export type WordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WordWhereInput
    orderBy?: WordOrderByWithAggregationInput | WordOrderByWithAggregationInput[]
    by: WordScalarFieldEnum[] | WordScalarFieldEnum
    having?: WordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WordCountAggregateInputType | true
    _min?: WordMinAggregateInputType
    _max?: WordMaxAggregateInputType
  }

  export type WordGroupByOutputType = {
    wordId: string
    word: string
    isFavorite: boolean
    licenseId: string | null
    status: $Enums.WordStatus
    createdAt: Date
    _count: WordCountAggregateOutputType | null
    _min: WordMinAggregateOutputType | null
    _max: WordMaxAggregateOutputType | null
  }

  type GetWordGroupByPayload<T extends WordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WordGroupByOutputType[P]>
            : GetScalarType<T[P], WordGroupByOutputType[P]>
        }
      >
    >


  export type WordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wordId?: boolean
    word?: boolean
    isFavorite?: boolean
    licenseId?: boolean
    status?: boolean
    createdAt?: boolean
    phonetics?: boolean | Word$phoneticsArgs<ExtArgs>
    meanings?: boolean | Word$meaningsArgs<ExtArgs>
    license?: boolean | Word$licenseArgs<ExtArgs>
    sourceUrls?: boolean | Word$sourceUrlsArgs<ExtArgs>
    history?: boolean | Word$historyArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wordId?: boolean
    word?: boolean
    isFavorite?: boolean
    licenseId?: boolean
    status?: boolean
    createdAt?: boolean
    license?: boolean | Word$licenseArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    wordId?: boolean
    word?: boolean
    isFavorite?: boolean
    licenseId?: boolean
    status?: boolean
    createdAt?: boolean
    license?: boolean | Word$licenseArgs<ExtArgs>
  }, ExtArgs["result"]["word"]>

  export type WordSelectScalar = {
    wordId?: boolean
    word?: boolean
    isFavorite?: boolean
    licenseId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type WordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"wordId" | "word" | "isFavorite" | "licenseId" | "status" | "createdAt", ExtArgs["result"]["word"]>
  export type WordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phonetics?: boolean | Word$phoneticsArgs<ExtArgs>
    meanings?: boolean | Word$meaningsArgs<ExtArgs>
    license?: boolean | Word$licenseArgs<ExtArgs>
    sourceUrls?: boolean | Word$sourceUrlsArgs<ExtArgs>
    history?: boolean | Word$historyArgs<ExtArgs>
    _count?: boolean | WordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | Word$licenseArgs<ExtArgs>
  }
  export type WordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | Word$licenseArgs<ExtArgs>
  }

  export type $WordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Word"
    objects: {
      phonetics: Prisma.$PhoneticPayload<ExtArgs>[]
      meanings: Prisma.$MeaningPayload<ExtArgs>[]
      license: Prisma.$LicensePayload<ExtArgs> | null
      sourceUrls: Prisma.$SourceUrlPayload<ExtArgs>[]
      history: Prisma.$UserWordHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      wordId: string
      word: string
      isFavorite: boolean
      licenseId: string | null
      status: $Enums.WordStatus
      createdAt: Date
    }, ExtArgs["result"]["word"]>
    composites: {}
  }

  type WordGetPayload<S extends boolean | null | undefined | WordDefaultArgs> = $Result.GetResult<Prisma.$WordPayload, S>

  type WordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WordCountAggregateInputType | true
    }

  export interface WordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Word'], meta: { name: 'Word' } }
    /**
     * Find zero or one Word that matches the filter.
     * @param {WordFindUniqueArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WordFindUniqueArgs>(args: SelectSubset<T, WordFindUniqueArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Word that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WordFindUniqueOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WordFindUniqueOrThrowArgs>(args: SelectSubset<T, WordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Word that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WordFindFirstArgs>(args?: SelectSubset<T, WordFindFirstArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Word that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindFirstOrThrowArgs} args - Arguments to find a Word
     * @example
     * // Get one Word
     * const word = await prisma.word.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WordFindFirstOrThrowArgs>(args?: SelectSubset<T, WordFindFirstOrThrowArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Words that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Words
     * const words = await prisma.word.findMany()
     * 
     * // Get first 10 Words
     * const words = await prisma.word.findMany({ take: 10 })
     * 
     * // Only select the `wordId`
     * const wordWithWordIdOnly = await prisma.word.findMany({ select: { wordId: true } })
     * 
     */
    findMany<T extends WordFindManyArgs>(args?: SelectSubset<T, WordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Word.
     * @param {WordCreateArgs} args - Arguments to create a Word.
     * @example
     * // Create one Word
     * const Word = await prisma.word.create({
     *   data: {
     *     // ... data to create a Word
     *   }
     * })
     * 
     */
    create<T extends WordCreateArgs>(args: SelectSubset<T, WordCreateArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Words.
     * @param {WordCreateManyArgs} args - Arguments to create many Words.
     * @example
     * // Create many Words
     * const word = await prisma.word.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WordCreateManyArgs>(args?: SelectSubset<T, WordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Words and returns the data saved in the database.
     * @param {WordCreateManyAndReturnArgs} args - Arguments to create many Words.
     * @example
     * // Create many Words
     * const word = await prisma.word.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Words and only return the `wordId`
     * const wordWithWordIdOnly = await prisma.word.createManyAndReturn({
     *   select: { wordId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WordCreateManyAndReturnArgs>(args?: SelectSubset<T, WordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Word.
     * @param {WordDeleteArgs} args - Arguments to delete one Word.
     * @example
     * // Delete one Word
     * const Word = await prisma.word.delete({
     *   where: {
     *     // ... filter to delete one Word
     *   }
     * })
     * 
     */
    delete<T extends WordDeleteArgs>(args: SelectSubset<T, WordDeleteArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Word.
     * @param {WordUpdateArgs} args - Arguments to update one Word.
     * @example
     * // Update one Word
     * const word = await prisma.word.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WordUpdateArgs>(args: SelectSubset<T, WordUpdateArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Words.
     * @param {WordDeleteManyArgs} args - Arguments to filter Words to delete.
     * @example
     * // Delete a few Words
     * const { count } = await prisma.word.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WordDeleteManyArgs>(args?: SelectSubset<T, WordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WordUpdateManyArgs>(args: SelectSubset<T, WordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Words and returns the data updated in the database.
     * @param {WordUpdateManyAndReturnArgs} args - Arguments to update many Words.
     * @example
     * // Update many Words
     * const word = await prisma.word.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Words and only return the `wordId`
     * const wordWithWordIdOnly = await prisma.word.updateManyAndReturn({
     *   select: { wordId: true },
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
    updateManyAndReturn<T extends WordUpdateManyAndReturnArgs>(args: SelectSubset<T, WordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Word.
     * @param {WordUpsertArgs} args - Arguments to update or create a Word.
     * @example
     * // Update or create a Word
     * const word = await prisma.word.upsert({
     *   create: {
     *     // ... data to create a Word
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Word we want to update
     *   }
     * })
     */
    upsert<T extends WordUpsertArgs>(args: SelectSubset<T, WordUpsertArgs<ExtArgs>>): Prisma__WordClient<$Result.GetResult<Prisma.$WordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Words.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordCountArgs} args - Arguments to filter Words to count.
     * @example
     * // Count the number of Words
     * const count = await prisma.word.count({
     *   where: {
     *     // ... the filter for the Words we want to count
     *   }
     * })
    **/
    count<T extends WordCountArgs>(
      args?: Subset<T, WordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WordAggregateArgs>(args: Subset<T, WordAggregateArgs>): Prisma.PrismaPromise<GetWordAggregateType<T>>

    /**
     * Group by Word.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WordGroupByArgs} args - Group by arguments.
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
      T extends WordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WordGroupByArgs['orderBy'] }
        : { orderBy?: WordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Word model
   */
  readonly fields: WordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Word.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phonetics<T extends Word$phoneticsArgs<ExtArgs> = {}>(args?: Subset<T, Word$phoneticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhoneticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meanings<T extends Word$meaningsArgs<ExtArgs> = {}>(args?: Subset<T, Word$meaningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeaningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    license<T extends Word$licenseArgs<ExtArgs> = {}>(args?: Subset<T, Word$licenseArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sourceUrls<T extends Word$sourceUrlsArgs<ExtArgs> = {}>(args?: Subset<T, Word$sourceUrlsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceUrlPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends Word$historyArgs<ExtArgs> = {}>(args?: Subset<T, Word$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWordHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Word model
   */
  interface WordFieldRefs {
    readonly wordId: FieldRef<"Word", 'String'>
    readonly word: FieldRef<"Word", 'String'>
    readonly isFavorite: FieldRef<"Word", 'Boolean'>
    readonly licenseId: FieldRef<"Word", 'String'>
    readonly status: FieldRef<"Word", 'WordStatus'>
    readonly createdAt: FieldRef<"Word", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Word findUnique
   */
  export type WordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findUniqueOrThrow
   */
  export type WordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word findFirst
   */
  export type WordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word findFirstOrThrow
   */
  export type WordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Word to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Words.
     */
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word findMany
   */
  export type WordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter, which Words to fetch.
     */
    where?: WordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Words to fetch.
     */
    orderBy?: WordOrderByWithRelationInput | WordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Words.
     */
    cursor?: WordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Words from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Words.
     */
    skip?: number
    distinct?: WordScalarFieldEnum | WordScalarFieldEnum[]
  }

  /**
   * Word create
   */
  export type WordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to create a Word.
     */
    data: XOR<WordCreateInput, WordUncheckedCreateInput>
  }

  /**
   * Word createMany
   */
  export type WordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Word createManyAndReturn
   */
  export type WordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * The data used to create many Words.
     */
    data: WordCreateManyInput | WordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Word update
   */
  export type WordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The data needed to update a Word.
     */
    data: XOR<WordUpdateInput, WordUncheckedUpdateInput>
    /**
     * Choose, which Word to update.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word updateMany
   */
  export type WordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to update.
     */
    limit?: number
  }

  /**
   * Word updateManyAndReturn
   */
  export type WordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * The data used to update Words.
     */
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyInput>
    /**
     * Filter which Words to update
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Word upsert
   */
  export type WordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * The filter to search for the Word to update in case it exists.
     */
    where: WordWhereUniqueInput
    /**
     * In case the Word found by the `where` argument doesn't exist, create a new Word with this data.
     */
    create: XOR<WordCreateInput, WordUncheckedCreateInput>
    /**
     * In case the Word was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WordUpdateInput, WordUncheckedUpdateInput>
  }

  /**
   * Word delete
   */
  export type WordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
    /**
     * Filter which Word to delete.
     */
    where: WordWhereUniqueInput
  }

  /**
   * Word deleteMany
   */
  export type WordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Words to delete
     */
    where?: WordWhereInput
    /**
     * Limit how many Words to delete.
     */
    limit?: number
  }

  /**
   * Word.phonetics
   */
  export type Word$phoneticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Phonetic
     */
    select?: PhoneticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Phonetic
     */
    omit?: PhoneticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhoneticInclude<ExtArgs> | null
    where?: PhoneticWhereInput
    orderBy?: PhoneticOrderByWithRelationInput | PhoneticOrderByWithRelationInput[]
    cursor?: PhoneticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhoneticScalarFieldEnum | PhoneticScalarFieldEnum[]
  }

  /**
   * Word.meanings
   */
  export type Word$meaningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meaning
     */
    select?: MeaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meaning
     */
    omit?: MeaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeaningInclude<ExtArgs> | null
    where?: MeaningWhereInput
    orderBy?: MeaningOrderByWithRelationInput | MeaningOrderByWithRelationInput[]
    cursor?: MeaningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeaningScalarFieldEnum | MeaningScalarFieldEnum[]
  }

  /**
   * Word.license
   */
  export type Word$licenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
  }

  /**
   * Word.sourceUrls
   */
  export type Word$sourceUrlsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceUrl
     */
    select?: SourceUrlSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceUrl
     */
    omit?: SourceUrlOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceUrlInclude<ExtArgs> | null
    where?: SourceUrlWhereInput
    orderBy?: SourceUrlOrderByWithRelationInput | SourceUrlOrderByWithRelationInput[]
    cursor?: SourceUrlWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SourceUrlScalarFieldEnum | SourceUrlScalarFieldEnum[]
  }

  /**
   * Word.history
   */
  export type Word$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWordHistory
     */
    select?: UserWordHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWordHistory
     */
    omit?: UserWordHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWordHistoryInclude<ExtArgs> | null
    where?: UserWordHistoryWhereInput
    orderBy?: UserWordHistoryOrderByWithRelationInput | UserWordHistoryOrderByWithRelationInput[]
    cursor?: UserWordHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWordHistoryScalarFieldEnum | UserWordHistoryScalarFieldEnum[]
  }

  /**
   * Word without action
   */
  export type WordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Word
     */
    select?: WordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Word
     */
    omit?: WordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WordInclude<ExtArgs> | null
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


  export const AntonymScalarFieldEnum: {
    antonymId: 'antonymId',
    word: 'word',
    meaningId: 'meaningId'
  };

  export type AntonymScalarFieldEnum = (typeof AntonymScalarFieldEnum)[keyof typeof AntonymScalarFieldEnum]


  export const DefinitionScalarFieldEnum: {
    definitionId: 'definitionId',
    definition: 'definition',
    example: 'example',
    meaningId: 'meaningId'
  };

  export type DefinitionScalarFieldEnum = (typeof DefinitionScalarFieldEnum)[keyof typeof DefinitionScalarFieldEnum]


  export const LicenseScalarFieldEnum: {
    licenseId: 'licenseId',
    name: 'name',
    url: 'url'
  };

  export type LicenseScalarFieldEnum = (typeof LicenseScalarFieldEnum)[keyof typeof LicenseScalarFieldEnum]


  export const MeaningScalarFieldEnum: {
    meaningId: 'meaningId',
    partOfSpeech: 'partOfSpeech',
    wordId: 'wordId'
  };

  export type MeaningScalarFieldEnum = (typeof MeaningScalarFieldEnum)[keyof typeof MeaningScalarFieldEnum]


  export const PhoneticScalarFieldEnum: {
    phoneticId: 'phoneticId',
    text: 'text',
    audio: 'audio',
    sourceUrl: 'sourceUrl',
    wordId: 'wordId',
    licenseId: 'licenseId'
  };

  export type PhoneticScalarFieldEnum = (typeof PhoneticScalarFieldEnum)[keyof typeof PhoneticScalarFieldEnum]


  export const SourceUrlScalarFieldEnum: {
    sourceUrlId: 'sourceUrlId',
    url: 'url',
    wordId: 'wordId'
  };

  export type SourceUrlScalarFieldEnum = (typeof SourceUrlScalarFieldEnum)[keyof typeof SourceUrlScalarFieldEnum]


  export const SynonymScalarFieldEnum: {
    synonymId: 'synonymId',
    word: 'word',
    meaningId: 'meaningId'
  };

  export type SynonymScalarFieldEnum = (typeof SynonymScalarFieldEnum)[keyof typeof SynonymScalarFieldEnum]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserWordHistoryScalarFieldEnum: {
    userWordHistoryId: 'userWordHistoryId',
    userId: 'userId',
    wordId: 'wordId',
    lastVisitedAt: 'lastVisitedAt'
  };

  export type UserWordHistoryScalarFieldEnum = (typeof UserWordHistoryScalarFieldEnum)[keyof typeof UserWordHistoryScalarFieldEnum]


  export const WordScalarFieldEnum: {
    wordId: 'wordId',
    word: 'word',
    isFavorite: 'isFavorite',
    licenseId: 'licenseId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type WordScalarFieldEnum = (typeof WordScalarFieldEnum)[keyof typeof WordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'WordStatus'
   */
  export type EnumWordStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WordStatus'>
    


  /**
   * Reference to a field of type 'WordStatus[]'
   */
  export type ListEnumWordStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WordStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AntonymWhereInput = {
    AND?: AntonymWhereInput | AntonymWhereInput[]
    OR?: AntonymWhereInput[]
    NOT?: AntonymWhereInput | AntonymWhereInput[]
    antonymId?: StringFilter<"Antonym"> | string
    word?: StringFilter<"Antonym"> | string
    meaningId?: StringFilter<"Antonym"> | string
    meaning?: XOR<MeaningScalarRelationFilter, MeaningWhereInput>
  }

  export type AntonymOrderByWithRelationInput = {
    antonymId?: SortOrder
    word?: SortOrder
    meaningId?: SortOrder
    meaning?: MeaningOrderByWithRelationInput
  }

  export type AntonymWhereUniqueInput = Prisma.AtLeast<{
    antonymId?: string
    AND?: AntonymWhereInput | AntonymWhereInput[]
    OR?: AntonymWhereInput[]
    NOT?: AntonymWhereInput | AntonymWhereInput[]
    word?: StringFilter<"Antonym"> | string
    meaningId?: StringFilter<"Antonym"> | string
    meaning?: XOR<MeaningScalarRelationFilter, MeaningWhereInput>
  }, "antonymId">

  export type AntonymOrderByWithAggregationInput = {
    antonymId?: SortOrder
    word?: SortOrder
    meaningId?: SortOrder
    _count?: AntonymCountOrderByAggregateInput
    _max?: AntonymMaxOrderByAggregateInput
    _min?: AntonymMinOrderByAggregateInput
  }

  export type AntonymScalarWhereWithAggregatesInput = {
    AND?: AntonymScalarWhereWithAggregatesInput | AntonymScalarWhereWithAggregatesInput[]
    OR?: AntonymScalarWhereWithAggregatesInput[]
    NOT?: AntonymScalarWhereWithAggregatesInput | AntonymScalarWhereWithAggregatesInput[]
    antonymId?: StringWithAggregatesFilter<"Antonym"> | string
    word?: StringWithAggregatesFilter<"Antonym"> | string
    meaningId?: StringWithAggregatesFilter<"Antonym"> | string
  }

  export type DefinitionWhereInput = {
    AND?: DefinitionWhereInput | DefinitionWhereInput[]
    OR?: DefinitionWhereInput[]
    NOT?: DefinitionWhereInput | DefinitionWhereInput[]
    definitionId?: StringFilter<"Definition"> | string
    definition?: StringFilter<"Definition"> | string
    example?: StringNullableFilter<"Definition"> | string | null
    meaningId?: StringFilter<"Definition"> | string
    meaning?: XOR<MeaningScalarRelationFilter, MeaningWhereInput>
  }

  export type DefinitionOrderByWithRelationInput = {
    definitionId?: SortOrder
    definition?: SortOrder
    example?: SortOrderInput | SortOrder
    meaningId?: SortOrder
    meaning?: MeaningOrderByWithRelationInput
  }

  export type DefinitionWhereUniqueInput = Prisma.AtLeast<{
    definitionId?: string
    AND?: DefinitionWhereInput | DefinitionWhereInput[]
    OR?: DefinitionWhereInput[]
    NOT?: DefinitionWhereInput | DefinitionWhereInput[]
    definition?: StringFilter<"Definition"> | string
    example?: StringNullableFilter<"Definition"> | string | null
    meaningId?: StringFilter<"Definition"> | string
    meaning?: XOR<MeaningScalarRelationFilter, MeaningWhereInput>
  }, "definitionId">

  export type DefinitionOrderByWithAggregationInput = {
    definitionId?: SortOrder
    definition?: SortOrder
    example?: SortOrderInput | SortOrder
    meaningId?: SortOrder
    _count?: DefinitionCountOrderByAggregateInput
    _max?: DefinitionMaxOrderByAggregateInput
    _min?: DefinitionMinOrderByAggregateInput
  }

  export type DefinitionScalarWhereWithAggregatesInput = {
    AND?: DefinitionScalarWhereWithAggregatesInput | DefinitionScalarWhereWithAggregatesInput[]
    OR?: DefinitionScalarWhereWithAggregatesInput[]
    NOT?: DefinitionScalarWhereWithAggregatesInput | DefinitionScalarWhereWithAggregatesInput[]
    definitionId?: StringWithAggregatesFilter<"Definition"> | string
    definition?: StringWithAggregatesFilter<"Definition"> | string
    example?: StringNullableWithAggregatesFilter<"Definition"> | string | null
    meaningId?: StringWithAggregatesFilter<"Definition"> | string
  }

  export type LicenseWhereInput = {
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    licenseId?: StringFilter<"License"> | string
    name?: StringFilter<"License"> | string
    url?: StringFilter<"License"> | string
    words?: WordListRelationFilter
    phonetics?: PhoneticListRelationFilter
  }

  export type LicenseOrderByWithRelationInput = {
    licenseId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    words?: WordOrderByRelationAggregateInput
    phonetics?: PhoneticOrderByRelationAggregateInput
  }

  export type LicenseWhereUniqueInput = Prisma.AtLeast<{
    licenseId?: string
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    name?: StringFilter<"License"> | string
    url?: StringFilter<"License"> | string
    words?: WordListRelationFilter
    phonetics?: PhoneticListRelationFilter
  }, "licenseId">

  export type LicenseOrderByWithAggregationInput = {
    licenseId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    _count?: LicenseCountOrderByAggregateInput
    _max?: LicenseMaxOrderByAggregateInput
    _min?: LicenseMinOrderByAggregateInput
  }

  export type LicenseScalarWhereWithAggregatesInput = {
    AND?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    OR?: LicenseScalarWhereWithAggregatesInput[]
    NOT?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    licenseId?: StringWithAggregatesFilter<"License"> | string
    name?: StringWithAggregatesFilter<"License"> | string
    url?: StringWithAggregatesFilter<"License"> | string
  }

  export type MeaningWhereInput = {
    AND?: MeaningWhereInput | MeaningWhereInput[]
    OR?: MeaningWhereInput[]
    NOT?: MeaningWhereInput | MeaningWhereInput[]
    meaningId?: StringFilter<"Meaning"> | string
    partOfSpeech?: StringFilter<"Meaning"> | string
    wordId?: StringFilter<"Meaning"> | string
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
    definitions?: DefinitionListRelationFilter
    synonyms?: SynonymListRelationFilter
    antonyms?: AntonymListRelationFilter
  }

  export type MeaningOrderByWithRelationInput = {
    meaningId?: SortOrder
    partOfSpeech?: SortOrder
    wordId?: SortOrder
    word?: WordOrderByWithRelationInput
    definitions?: DefinitionOrderByRelationAggregateInput
    synonyms?: SynonymOrderByRelationAggregateInput
    antonyms?: AntonymOrderByRelationAggregateInput
  }

  export type MeaningWhereUniqueInput = Prisma.AtLeast<{
    meaningId?: string
    AND?: MeaningWhereInput | MeaningWhereInput[]
    OR?: MeaningWhereInput[]
    NOT?: MeaningWhereInput | MeaningWhereInput[]
    partOfSpeech?: StringFilter<"Meaning"> | string
    wordId?: StringFilter<"Meaning"> | string
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
    definitions?: DefinitionListRelationFilter
    synonyms?: SynonymListRelationFilter
    antonyms?: AntonymListRelationFilter
  }, "meaningId">

  export type MeaningOrderByWithAggregationInput = {
    meaningId?: SortOrder
    partOfSpeech?: SortOrder
    wordId?: SortOrder
    _count?: MeaningCountOrderByAggregateInput
    _max?: MeaningMaxOrderByAggregateInput
    _min?: MeaningMinOrderByAggregateInput
  }

  export type MeaningScalarWhereWithAggregatesInput = {
    AND?: MeaningScalarWhereWithAggregatesInput | MeaningScalarWhereWithAggregatesInput[]
    OR?: MeaningScalarWhereWithAggregatesInput[]
    NOT?: MeaningScalarWhereWithAggregatesInput | MeaningScalarWhereWithAggregatesInput[]
    meaningId?: StringWithAggregatesFilter<"Meaning"> | string
    partOfSpeech?: StringWithAggregatesFilter<"Meaning"> | string
    wordId?: StringWithAggregatesFilter<"Meaning"> | string
  }

  export type PhoneticWhereInput = {
    AND?: PhoneticWhereInput | PhoneticWhereInput[]
    OR?: PhoneticWhereInput[]
    NOT?: PhoneticWhereInput | PhoneticWhereInput[]
    phoneticId?: StringFilter<"Phonetic"> | string
    text?: StringNullableFilter<"Phonetic"> | string | null
    audio?: StringFilter<"Phonetic"> | string
    sourceUrl?: StringNullableFilter<"Phonetic"> | string | null
    wordId?: StringFilter<"Phonetic"> | string
    licenseId?: StringNullableFilter<"Phonetic"> | string | null
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
    license?: XOR<LicenseNullableScalarRelationFilter, LicenseWhereInput> | null
  }

  export type PhoneticOrderByWithRelationInput = {
    phoneticId?: SortOrder
    text?: SortOrderInput | SortOrder
    audio?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    wordId?: SortOrder
    licenseId?: SortOrderInput | SortOrder
    word?: WordOrderByWithRelationInput
    license?: LicenseOrderByWithRelationInput
  }

  export type PhoneticWhereUniqueInput = Prisma.AtLeast<{
    phoneticId?: string
    AND?: PhoneticWhereInput | PhoneticWhereInput[]
    OR?: PhoneticWhereInput[]
    NOT?: PhoneticWhereInput | PhoneticWhereInput[]
    text?: StringNullableFilter<"Phonetic"> | string | null
    audio?: StringFilter<"Phonetic"> | string
    sourceUrl?: StringNullableFilter<"Phonetic"> | string | null
    wordId?: StringFilter<"Phonetic"> | string
    licenseId?: StringNullableFilter<"Phonetic"> | string | null
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
    license?: XOR<LicenseNullableScalarRelationFilter, LicenseWhereInput> | null
  }, "phoneticId">

  export type PhoneticOrderByWithAggregationInput = {
    phoneticId?: SortOrder
    text?: SortOrderInput | SortOrder
    audio?: SortOrder
    sourceUrl?: SortOrderInput | SortOrder
    wordId?: SortOrder
    licenseId?: SortOrderInput | SortOrder
    _count?: PhoneticCountOrderByAggregateInput
    _max?: PhoneticMaxOrderByAggregateInput
    _min?: PhoneticMinOrderByAggregateInput
  }

  export type PhoneticScalarWhereWithAggregatesInput = {
    AND?: PhoneticScalarWhereWithAggregatesInput | PhoneticScalarWhereWithAggregatesInput[]
    OR?: PhoneticScalarWhereWithAggregatesInput[]
    NOT?: PhoneticScalarWhereWithAggregatesInput | PhoneticScalarWhereWithAggregatesInput[]
    phoneticId?: StringWithAggregatesFilter<"Phonetic"> | string
    text?: StringNullableWithAggregatesFilter<"Phonetic"> | string | null
    audio?: StringWithAggregatesFilter<"Phonetic"> | string
    sourceUrl?: StringNullableWithAggregatesFilter<"Phonetic"> | string | null
    wordId?: StringWithAggregatesFilter<"Phonetic"> | string
    licenseId?: StringNullableWithAggregatesFilter<"Phonetic"> | string | null
  }

  export type SourceUrlWhereInput = {
    AND?: SourceUrlWhereInput | SourceUrlWhereInput[]
    OR?: SourceUrlWhereInput[]
    NOT?: SourceUrlWhereInput | SourceUrlWhereInput[]
    sourceUrlId?: StringFilter<"SourceUrl"> | string
    url?: StringFilter<"SourceUrl"> | string
    wordId?: StringFilter<"SourceUrl"> | string
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
  }

  export type SourceUrlOrderByWithRelationInput = {
    sourceUrlId?: SortOrder
    url?: SortOrder
    wordId?: SortOrder
    word?: WordOrderByWithRelationInput
  }

  export type SourceUrlWhereUniqueInput = Prisma.AtLeast<{
    sourceUrlId?: string
    AND?: SourceUrlWhereInput | SourceUrlWhereInput[]
    OR?: SourceUrlWhereInput[]
    NOT?: SourceUrlWhereInput | SourceUrlWhereInput[]
    url?: StringFilter<"SourceUrl"> | string
    wordId?: StringFilter<"SourceUrl"> | string
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
  }, "sourceUrlId">

  export type SourceUrlOrderByWithAggregationInput = {
    sourceUrlId?: SortOrder
    url?: SortOrder
    wordId?: SortOrder
    _count?: SourceUrlCountOrderByAggregateInput
    _max?: SourceUrlMaxOrderByAggregateInput
    _min?: SourceUrlMinOrderByAggregateInput
  }

  export type SourceUrlScalarWhereWithAggregatesInput = {
    AND?: SourceUrlScalarWhereWithAggregatesInput | SourceUrlScalarWhereWithAggregatesInput[]
    OR?: SourceUrlScalarWhereWithAggregatesInput[]
    NOT?: SourceUrlScalarWhereWithAggregatesInput | SourceUrlScalarWhereWithAggregatesInput[]
    sourceUrlId?: StringWithAggregatesFilter<"SourceUrl"> | string
    url?: StringWithAggregatesFilter<"SourceUrl"> | string
    wordId?: StringWithAggregatesFilter<"SourceUrl"> | string
  }

  export type SynonymWhereInput = {
    AND?: SynonymWhereInput | SynonymWhereInput[]
    OR?: SynonymWhereInput[]
    NOT?: SynonymWhereInput | SynonymWhereInput[]
    synonymId?: StringFilter<"Synonym"> | string
    word?: StringFilter<"Synonym"> | string
    meaningId?: StringFilter<"Synonym"> | string
    meaning?: XOR<MeaningScalarRelationFilter, MeaningWhereInput>
  }

  export type SynonymOrderByWithRelationInput = {
    synonymId?: SortOrder
    word?: SortOrder
    meaningId?: SortOrder
    meaning?: MeaningOrderByWithRelationInput
  }

  export type SynonymWhereUniqueInput = Prisma.AtLeast<{
    synonymId?: string
    AND?: SynonymWhereInput | SynonymWhereInput[]
    OR?: SynonymWhereInput[]
    NOT?: SynonymWhereInput | SynonymWhereInput[]
    word?: StringFilter<"Synonym"> | string
    meaningId?: StringFilter<"Synonym"> | string
    meaning?: XOR<MeaningScalarRelationFilter, MeaningWhereInput>
  }, "synonymId">

  export type SynonymOrderByWithAggregationInput = {
    synonymId?: SortOrder
    word?: SortOrder
    meaningId?: SortOrder
    _count?: SynonymCountOrderByAggregateInput
    _max?: SynonymMaxOrderByAggregateInput
    _min?: SynonymMinOrderByAggregateInput
  }

  export type SynonymScalarWhereWithAggregatesInput = {
    AND?: SynonymScalarWhereWithAggregatesInput | SynonymScalarWhereWithAggregatesInput[]
    OR?: SynonymScalarWhereWithAggregatesInput[]
    NOT?: SynonymScalarWhereWithAggregatesInput | SynonymScalarWhereWithAggregatesInput[]
    synonymId?: StringWithAggregatesFilter<"Synonym"> | string
    word?: StringWithAggregatesFilter<"Synonym"> | string
    meaningId?: StringWithAggregatesFilter<"Synonym"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    history?: UserWordHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    history?: UserWordHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    history?: UserWordHistoryListRelationFilter
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
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
    userId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserWordHistoryWhereInput = {
    AND?: UserWordHistoryWhereInput | UserWordHistoryWhereInput[]
    OR?: UserWordHistoryWhereInput[]
    NOT?: UserWordHistoryWhereInput | UserWordHistoryWhereInput[]
    userWordHistoryId?: StringFilter<"UserWordHistory"> | string
    userId?: StringFilter<"UserWordHistory"> | string
    wordId?: StringFilter<"UserWordHistory"> | string
    lastVisitedAt?: DateTimeFilter<"UserWordHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
  }

  export type UserWordHistoryOrderByWithRelationInput = {
    userWordHistoryId?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    lastVisitedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    word?: WordOrderByWithRelationInput
  }

  export type UserWordHistoryWhereUniqueInput = Prisma.AtLeast<{
    userWordHistoryId?: string
    AND?: UserWordHistoryWhereInput | UserWordHistoryWhereInput[]
    OR?: UserWordHistoryWhereInput[]
    NOT?: UserWordHistoryWhereInput | UserWordHistoryWhereInput[]
    userId?: StringFilter<"UserWordHistory"> | string
    wordId?: StringFilter<"UserWordHistory"> | string
    lastVisitedAt?: DateTimeFilter<"UserWordHistory"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    word?: XOR<WordScalarRelationFilter, WordWhereInput>
  }, "userWordHistoryId">

  export type UserWordHistoryOrderByWithAggregationInput = {
    userWordHistoryId?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    lastVisitedAt?: SortOrder
    _count?: UserWordHistoryCountOrderByAggregateInput
    _max?: UserWordHistoryMaxOrderByAggregateInput
    _min?: UserWordHistoryMinOrderByAggregateInput
  }

  export type UserWordHistoryScalarWhereWithAggregatesInput = {
    AND?: UserWordHistoryScalarWhereWithAggregatesInput | UserWordHistoryScalarWhereWithAggregatesInput[]
    OR?: UserWordHistoryScalarWhereWithAggregatesInput[]
    NOT?: UserWordHistoryScalarWhereWithAggregatesInput | UserWordHistoryScalarWhereWithAggregatesInput[]
    userWordHistoryId?: StringWithAggregatesFilter<"UserWordHistory"> | string
    userId?: StringWithAggregatesFilter<"UserWordHistory"> | string
    wordId?: StringWithAggregatesFilter<"UserWordHistory"> | string
    lastVisitedAt?: DateTimeWithAggregatesFilter<"UserWordHistory"> | Date | string
  }

  export type WordWhereInput = {
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    wordId?: StringFilter<"Word"> | string
    word?: StringFilter<"Word"> | string
    isFavorite?: BoolFilter<"Word"> | boolean
    licenseId?: StringNullableFilter<"Word"> | string | null
    status?: EnumWordStatusFilter<"Word"> | $Enums.WordStatus
    createdAt?: DateTimeFilter<"Word"> | Date | string
    phonetics?: PhoneticListRelationFilter
    meanings?: MeaningListRelationFilter
    license?: XOR<LicenseNullableScalarRelationFilter, LicenseWhereInput> | null
    sourceUrls?: SourceUrlListRelationFilter
    history?: UserWordHistoryListRelationFilter
  }

  export type WordOrderByWithRelationInput = {
    wordId?: SortOrder
    word?: SortOrder
    isFavorite?: SortOrder
    licenseId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    phonetics?: PhoneticOrderByRelationAggregateInput
    meanings?: MeaningOrderByRelationAggregateInput
    license?: LicenseOrderByWithRelationInput
    sourceUrls?: SourceUrlOrderByRelationAggregateInput
    history?: UserWordHistoryOrderByRelationAggregateInput
  }

  export type WordWhereUniqueInput = Prisma.AtLeast<{
    wordId?: string
    word?: string
    AND?: WordWhereInput | WordWhereInput[]
    OR?: WordWhereInput[]
    NOT?: WordWhereInput | WordWhereInput[]
    isFavorite?: BoolFilter<"Word"> | boolean
    licenseId?: StringNullableFilter<"Word"> | string | null
    status?: EnumWordStatusFilter<"Word"> | $Enums.WordStatus
    createdAt?: DateTimeFilter<"Word"> | Date | string
    phonetics?: PhoneticListRelationFilter
    meanings?: MeaningListRelationFilter
    license?: XOR<LicenseNullableScalarRelationFilter, LicenseWhereInput> | null
    sourceUrls?: SourceUrlListRelationFilter
    history?: UserWordHistoryListRelationFilter
  }, "wordId" | "word">

  export type WordOrderByWithAggregationInput = {
    wordId?: SortOrder
    word?: SortOrder
    isFavorite?: SortOrder
    licenseId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: WordCountOrderByAggregateInput
    _max?: WordMaxOrderByAggregateInput
    _min?: WordMinOrderByAggregateInput
  }

  export type WordScalarWhereWithAggregatesInput = {
    AND?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    OR?: WordScalarWhereWithAggregatesInput[]
    NOT?: WordScalarWhereWithAggregatesInput | WordScalarWhereWithAggregatesInput[]
    wordId?: StringWithAggregatesFilter<"Word"> | string
    word?: StringWithAggregatesFilter<"Word"> | string
    isFavorite?: BoolWithAggregatesFilter<"Word"> | boolean
    licenseId?: StringNullableWithAggregatesFilter<"Word"> | string | null
    status?: EnumWordStatusWithAggregatesFilter<"Word"> | $Enums.WordStatus
    createdAt?: DateTimeWithAggregatesFilter<"Word"> | Date | string
  }

  export type AntonymCreateInput = {
    antonymId?: string
    word: string
    meaning: MeaningCreateNestedOneWithoutAntonymsInput
  }

  export type AntonymUncheckedCreateInput = {
    antonymId?: string
    word: string
    meaningId: string
  }

  export type AntonymUpdateInput = {
    antonymId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    meaning?: MeaningUpdateOneRequiredWithoutAntonymsNestedInput
  }

  export type AntonymUncheckedUpdateInput = {
    antonymId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    meaningId?: StringFieldUpdateOperationsInput | string
  }

  export type AntonymCreateManyInput = {
    antonymId?: string
    word: string
    meaningId: string
  }

  export type AntonymUpdateManyMutationInput = {
    antonymId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
  }

  export type AntonymUncheckedUpdateManyInput = {
    antonymId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    meaningId?: StringFieldUpdateOperationsInput | string
  }

  export type DefinitionCreateInput = {
    definitionId?: string
    definition: string
    example?: string | null
    meaning: MeaningCreateNestedOneWithoutDefinitionsInput
  }

  export type DefinitionUncheckedCreateInput = {
    definitionId?: string
    definition: string
    example?: string | null
    meaningId: string
  }

  export type DefinitionUpdateInput = {
    definitionId?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    meaning?: MeaningUpdateOneRequiredWithoutDefinitionsNestedInput
  }

  export type DefinitionUncheckedUpdateInput = {
    definitionId?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    meaningId?: StringFieldUpdateOperationsInput | string
  }

  export type DefinitionCreateManyInput = {
    definitionId?: string
    definition: string
    example?: string | null
    meaningId: string
  }

  export type DefinitionUpdateManyMutationInput = {
    definitionId?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DefinitionUncheckedUpdateManyInput = {
    definitionId?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
    meaningId?: StringFieldUpdateOperationsInput | string
  }

  export type LicenseCreateInput = {
    licenseId?: string
    name: string
    url: string
    words?: WordCreateNestedManyWithoutLicenseInput
    phonetics?: PhoneticCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateInput = {
    licenseId?: string
    name: string
    url: string
    words?: WordUncheckedCreateNestedManyWithoutLicenseInput
    phonetics?: PhoneticUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUpdateInput = {
    licenseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    words?: WordUpdateManyWithoutLicenseNestedInput
    phonetics?: PhoneticUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateInput = {
    licenseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    words?: WordUncheckedUpdateManyWithoutLicenseNestedInput
    phonetics?: PhoneticUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseCreateManyInput = {
    licenseId?: string
    name: string
    url: string
  }

  export type LicenseUpdateManyMutationInput = {
    licenseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type LicenseUncheckedUpdateManyInput = {
    licenseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type MeaningCreateInput = {
    meaningId?: string
    partOfSpeech: string
    word: WordCreateNestedOneWithoutMeaningsInput
    definitions?: DefinitionCreateNestedManyWithoutMeaningInput
    synonyms?: SynonymCreateNestedManyWithoutMeaningInput
    antonyms?: AntonymCreateNestedManyWithoutMeaningInput
  }

  export type MeaningUncheckedCreateInput = {
    meaningId?: string
    partOfSpeech: string
    wordId: string
    definitions?: DefinitionUncheckedCreateNestedManyWithoutMeaningInput
    synonyms?: SynonymUncheckedCreateNestedManyWithoutMeaningInput
    antonyms?: AntonymUncheckedCreateNestedManyWithoutMeaningInput
  }

  export type MeaningUpdateInput = {
    meaningId?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    word?: WordUpdateOneRequiredWithoutMeaningsNestedInput
    definitions?: DefinitionUpdateManyWithoutMeaningNestedInput
    synonyms?: SynonymUpdateManyWithoutMeaningNestedInput
    antonyms?: AntonymUpdateManyWithoutMeaningNestedInput
  }

  export type MeaningUncheckedUpdateInput = {
    meaningId?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    definitions?: DefinitionUncheckedUpdateManyWithoutMeaningNestedInput
    synonyms?: SynonymUncheckedUpdateManyWithoutMeaningNestedInput
    antonyms?: AntonymUncheckedUpdateManyWithoutMeaningNestedInput
  }

  export type MeaningCreateManyInput = {
    meaningId?: string
    partOfSpeech: string
    wordId: string
  }

  export type MeaningUpdateManyMutationInput = {
    meaningId?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
  }

  export type MeaningUncheckedUpdateManyInput = {
    meaningId?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
  }

  export type PhoneticCreateInput = {
    phoneticId?: string
    text?: string | null
    audio: string
    sourceUrl?: string | null
    word: WordCreateNestedOneWithoutPhoneticsInput
    license?: LicenseCreateNestedOneWithoutPhoneticsInput
  }

  export type PhoneticUncheckedCreateInput = {
    phoneticId?: string
    text?: string | null
    audio: string
    sourceUrl?: string | null
    wordId: string
    licenseId?: string | null
  }

  export type PhoneticUpdateInput = {
    phoneticId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    audio?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    word?: WordUpdateOneRequiredWithoutPhoneticsNestedInput
    license?: LicenseUpdateOneWithoutPhoneticsNestedInput
  }

  export type PhoneticUncheckedUpdateInput = {
    phoneticId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    audio?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    wordId?: StringFieldUpdateOperationsInput | string
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhoneticCreateManyInput = {
    phoneticId?: string
    text?: string | null
    audio: string
    sourceUrl?: string | null
    wordId: string
    licenseId?: string | null
  }

  export type PhoneticUpdateManyMutationInput = {
    phoneticId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    audio?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhoneticUncheckedUpdateManyInput = {
    phoneticId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    audio?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    wordId?: StringFieldUpdateOperationsInput | string
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SourceUrlCreateInput = {
    sourceUrlId?: string
    url: string
    word: WordCreateNestedOneWithoutSourceUrlsInput
  }

  export type SourceUrlUncheckedCreateInput = {
    sourceUrlId?: string
    url: string
    wordId: string
  }

  export type SourceUrlUpdateInput = {
    sourceUrlId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    word?: WordUpdateOneRequiredWithoutSourceUrlsNestedInput
  }

  export type SourceUrlUncheckedUpdateInput = {
    sourceUrlId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
  }

  export type SourceUrlCreateManyInput = {
    sourceUrlId?: string
    url: string
    wordId: string
  }

  export type SourceUrlUpdateManyMutationInput = {
    sourceUrlId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SourceUrlUncheckedUpdateManyInput = {
    sourceUrlId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
  }

  export type SynonymCreateInput = {
    synonymId?: string
    word: string
    meaning: MeaningCreateNestedOneWithoutSynonymsInput
  }

  export type SynonymUncheckedCreateInput = {
    synonymId?: string
    word: string
    meaningId: string
  }

  export type SynonymUpdateInput = {
    synonymId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    meaning?: MeaningUpdateOneRequiredWithoutSynonymsNestedInput
  }

  export type SynonymUncheckedUpdateInput = {
    synonymId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    meaningId?: StringFieldUpdateOperationsInput | string
  }

  export type SynonymCreateManyInput = {
    synonymId?: string
    word: string
    meaningId: string
  }

  export type SynonymUpdateManyMutationInput = {
    synonymId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
  }

  export type SynonymUncheckedUpdateManyInput = {
    synonymId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    meaningId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    userId?: string
    email: string
    password: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: UserWordHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    email: string
    password: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: UserWordHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: UserWordHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: UserWordHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    email: string
    password: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWordHistoryCreateInput = {
    userWordHistoryId?: string
    lastVisitedAt?: Date | string
    user: UserCreateNestedOneWithoutHistoryInput
    word: WordCreateNestedOneWithoutHistoryInput
  }

  export type UserWordHistoryUncheckedCreateInput = {
    userWordHistoryId?: string
    userId: string
    wordId: string
    lastVisitedAt?: Date | string
  }

  export type UserWordHistoryUpdateInput = {
    userWordHistoryId?: StringFieldUpdateOperationsInput | string
    lastVisitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
    word?: WordUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type UserWordHistoryUncheckedUpdateInput = {
    userWordHistoryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    lastVisitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWordHistoryCreateManyInput = {
    userWordHistoryId?: string
    userId: string
    wordId: string
    lastVisitedAt?: Date | string
  }

  export type UserWordHistoryUpdateManyMutationInput = {
    userWordHistoryId?: StringFieldUpdateOperationsInput | string
    lastVisitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWordHistoryUncheckedUpdateManyInput = {
    userWordHistoryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    lastVisitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordCreateInput = {
    wordId?: string
    word: string
    isFavorite: boolean
    status?: $Enums.WordStatus
    createdAt?: Date | string
    phonetics?: PhoneticCreateNestedManyWithoutWordInput
    meanings?: MeaningCreateNestedManyWithoutWordInput
    license?: LicenseCreateNestedOneWithoutWordsInput
    sourceUrls?: SourceUrlCreateNestedManyWithoutWordInput
    history?: UserWordHistoryCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateInput = {
    wordId?: string
    word: string
    isFavorite: boolean
    licenseId?: string | null
    status?: $Enums.WordStatus
    createdAt?: Date | string
    phonetics?: PhoneticUncheckedCreateNestedManyWithoutWordInput
    meanings?: MeaningUncheckedCreateNestedManyWithoutWordInput
    sourceUrls?: SourceUrlUncheckedCreateNestedManyWithoutWordInput
    history?: UserWordHistoryUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordUpdateInput = {
    wordId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phonetics?: PhoneticUpdateManyWithoutWordNestedInput
    meanings?: MeaningUpdateManyWithoutWordNestedInput
    license?: LicenseUpdateOneWithoutWordsNestedInput
    sourceUrls?: SourceUrlUpdateManyWithoutWordNestedInput
    history?: UserWordHistoryUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateInput = {
    wordId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phonetics?: PhoneticUncheckedUpdateManyWithoutWordNestedInput
    meanings?: MeaningUncheckedUpdateManyWithoutWordNestedInput
    sourceUrls?: SourceUrlUncheckedUpdateManyWithoutWordNestedInput
    history?: UserWordHistoryUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordCreateManyInput = {
    wordId?: string
    word: string
    isFavorite: boolean
    licenseId?: string | null
    status?: $Enums.WordStatus
    createdAt?: Date | string
  }

  export type WordUpdateManyMutationInput = {
    wordId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordUncheckedUpdateManyInput = {
    wordId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type MeaningScalarRelationFilter = {
    is?: MeaningWhereInput
    isNot?: MeaningWhereInput
  }

  export type AntonymCountOrderByAggregateInput = {
    antonymId?: SortOrder
    word?: SortOrder
    meaningId?: SortOrder
  }

  export type AntonymMaxOrderByAggregateInput = {
    antonymId?: SortOrder
    word?: SortOrder
    meaningId?: SortOrder
  }

  export type AntonymMinOrderByAggregateInput = {
    antonymId?: SortOrder
    word?: SortOrder
    meaningId?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DefinitionCountOrderByAggregateInput = {
    definitionId?: SortOrder
    definition?: SortOrder
    example?: SortOrder
    meaningId?: SortOrder
  }

  export type DefinitionMaxOrderByAggregateInput = {
    definitionId?: SortOrder
    definition?: SortOrder
    example?: SortOrder
    meaningId?: SortOrder
  }

  export type DefinitionMinOrderByAggregateInput = {
    definitionId?: SortOrder
    definition?: SortOrder
    example?: SortOrder
    meaningId?: SortOrder
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

  export type WordListRelationFilter = {
    every?: WordWhereInput
    some?: WordWhereInput
    none?: WordWhereInput
  }

  export type PhoneticListRelationFilter = {
    every?: PhoneticWhereInput
    some?: PhoneticWhereInput
    none?: PhoneticWhereInput
  }

  export type WordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PhoneticOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LicenseCountOrderByAggregateInput = {
    licenseId?: SortOrder
    name?: SortOrder
    url?: SortOrder
  }

  export type LicenseMaxOrderByAggregateInput = {
    licenseId?: SortOrder
    name?: SortOrder
    url?: SortOrder
  }

  export type LicenseMinOrderByAggregateInput = {
    licenseId?: SortOrder
    name?: SortOrder
    url?: SortOrder
  }

  export type WordScalarRelationFilter = {
    is?: WordWhereInput
    isNot?: WordWhereInput
  }

  export type DefinitionListRelationFilter = {
    every?: DefinitionWhereInput
    some?: DefinitionWhereInput
    none?: DefinitionWhereInput
  }

  export type SynonymListRelationFilter = {
    every?: SynonymWhereInput
    some?: SynonymWhereInput
    none?: SynonymWhereInput
  }

  export type AntonymListRelationFilter = {
    every?: AntonymWhereInput
    some?: AntonymWhereInput
    none?: AntonymWhereInput
  }

  export type DefinitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SynonymOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AntonymOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeaningCountOrderByAggregateInput = {
    meaningId?: SortOrder
    partOfSpeech?: SortOrder
    wordId?: SortOrder
  }

  export type MeaningMaxOrderByAggregateInput = {
    meaningId?: SortOrder
    partOfSpeech?: SortOrder
    wordId?: SortOrder
  }

  export type MeaningMinOrderByAggregateInput = {
    meaningId?: SortOrder
    partOfSpeech?: SortOrder
    wordId?: SortOrder
  }

  export type LicenseNullableScalarRelationFilter = {
    is?: LicenseWhereInput | null
    isNot?: LicenseWhereInput | null
  }

  export type PhoneticCountOrderByAggregateInput = {
    phoneticId?: SortOrder
    text?: SortOrder
    audio?: SortOrder
    sourceUrl?: SortOrder
    wordId?: SortOrder
    licenseId?: SortOrder
  }

  export type PhoneticMaxOrderByAggregateInput = {
    phoneticId?: SortOrder
    text?: SortOrder
    audio?: SortOrder
    sourceUrl?: SortOrder
    wordId?: SortOrder
    licenseId?: SortOrder
  }

  export type PhoneticMinOrderByAggregateInput = {
    phoneticId?: SortOrder
    text?: SortOrder
    audio?: SortOrder
    sourceUrl?: SortOrder
    wordId?: SortOrder
    licenseId?: SortOrder
  }

  export type SourceUrlCountOrderByAggregateInput = {
    sourceUrlId?: SortOrder
    url?: SortOrder
    wordId?: SortOrder
  }

  export type SourceUrlMaxOrderByAggregateInput = {
    sourceUrlId?: SortOrder
    url?: SortOrder
    wordId?: SortOrder
  }

  export type SourceUrlMinOrderByAggregateInput = {
    sourceUrlId?: SortOrder
    url?: SortOrder
    wordId?: SortOrder
  }

  export type SynonymCountOrderByAggregateInput = {
    synonymId?: SortOrder
    word?: SortOrder
    meaningId?: SortOrder
  }

  export type SynonymMaxOrderByAggregateInput = {
    synonymId?: SortOrder
    word?: SortOrder
    meaningId?: SortOrder
  }

  export type SynonymMinOrderByAggregateInput = {
    synonymId?: SortOrder
    word?: SortOrder
    meaningId?: SortOrder
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

  export type UserWordHistoryListRelationFilter = {
    every?: UserWordHistoryWhereInput
    some?: UserWordHistoryWhereInput
    none?: UserWordHistoryWhereInput
  }

  export type UserWordHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserWordHistoryCountOrderByAggregateInput = {
    userWordHistoryId?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    lastVisitedAt?: SortOrder
  }

  export type UserWordHistoryMaxOrderByAggregateInput = {
    userWordHistoryId?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    lastVisitedAt?: SortOrder
  }

  export type UserWordHistoryMinOrderByAggregateInput = {
    userWordHistoryId?: SortOrder
    userId?: SortOrder
    wordId?: SortOrder
    lastVisitedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumWordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WordStatus | EnumWordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WordStatus[] | ListEnumWordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WordStatus[] | ListEnumWordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWordStatusFilter<$PrismaModel> | $Enums.WordStatus
  }

  export type MeaningListRelationFilter = {
    every?: MeaningWhereInput
    some?: MeaningWhereInput
    none?: MeaningWhereInput
  }

  export type SourceUrlListRelationFilter = {
    every?: SourceUrlWhereInput
    some?: SourceUrlWhereInput
    none?: SourceUrlWhereInput
  }

  export type MeaningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SourceUrlOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WordCountOrderByAggregateInput = {
    wordId?: SortOrder
    word?: SortOrder
    isFavorite?: SortOrder
    licenseId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WordMaxOrderByAggregateInput = {
    wordId?: SortOrder
    word?: SortOrder
    isFavorite?: SortOrder
    licenseId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type WordMinOrderByAggregateInput = {
    wordId?: SortOrder
    word?: SortOrder
    isFavorite?: SortOrder
    licenseId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumWordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WordStatus | EnumWordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WordStatus[] | ListEnumWordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WordStatus[] | ListEnumWordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWordStatusWithAggregatesFilter<$PrismaModel> | $Enums.WordStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWordStatusFilter<$PrismaModel>
    _max?: NestedEnumWordStatusFilter<$PrismaModel>
  }

  export type MeaningCreateNestedOneWithoutAntonymsInput = {
    create?: XOR<MeaningCreateWithoutAntonymsInput, MeaningUncheckedCreateWithoutAntonymsInput>
    connectOrCreate?: MeaningCreateOrConnectWithoutAntonymsInput
    connect?: MeaningWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MeaningUpdateOneRequiredWithoutAntonymsNestedInput = {
    create?: XOR<MeaningCreateWithoutAntonymsInput, MeaningUncheckedCreateWithoutAntonymsInput>
    connectOrCreate?: MeaningCreateOrConnectWithoutAntonymsInput
    upsert?: MeaningUpsertWithoutAntonymsInput
    connect?: MeaningWhereUniqueInput
    update?: XOR<XOR<MeaningUpdateToOneWithWhereWithoutAntonymsInput, MeaningUpdateWithoutAntonymsInput>, MeaningUncheckedUpdateWithoutAntonymsInput>
  }

  export type MeaningCreateNestedOneWithoutDefinitionsInput = {
    create?: XOR<MeaningCreateWithoutDefinitionsInput, MeaningUncheckedCreateWithoutDefinitionsInput>
    connectOrCreate?: MeaningCreateOrConnectWithoutDefinitionsInput
    connect?: MeaningWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MeaningUpdateOneRequiredWithoutDefinitionsNestedInput = {
    create?: XOR<MeaningCreateWithoutDefinitionsInput, MeaningUncheckedCreateWithoutDefinitionsInput>
    connectOrCreate?: MeaningCreateOrConnectWithoutDefinitionsInput
    upsert?: MeaningUpsertWithoutDefinitionsInput
    connect?: MeaningWhereUniqueInput
    update?: XOR<XOR<MeaningUpdateToOneWithWhereWithoutDefinitionsInput, MeaningUpdateWithoutDefinitionsInput>, MeaningUncheckedUpdateWithoutDefinitionsInput>
  }

  export type WordCreateNestedManyWithoutLicenseInput = {
    create?: XOR<WordCreateWithoutLicenseInput, WordUncheckedCreateWithoutLicenseInput> | WordCreateWithoutLicenseInput[] | WordUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: WordCreateOrConnectWithoutLicenseInput | WordCreateOrConnectWithoutLicenseInput[]
    createMany?: WordCreateManyLicenseInputEnvelope
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
  }

  export type PhoneticCreateNestedManyWithoutLicenseInput = {
    create?: XOR<PhoneticCreateWithoutLicenseInput, PhoneticUncheckedCreateWithoutLicenseInput> | PhoneticCreateWithoutLicenseInput[] | PhoneticUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: PhoneticCreateOrConnectWithoutLicenseInput | PhoneticCreateOrConnectWithoutLicenseInput[]
    createMany?: PhoneticCreateManyLicenseInputEnvelope
    connect?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
  }

  export type WordUncheckedCreateNestedManyWithoutLicenseInput = {
    create?: XOR<WordCreateWithoutLicenseInput, WordUncheckedCreateWithoutLicenseInput> | WordCreateWithoutLicenseInput[] | WordUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: WordCreateOrConnectWithoutLicenseInput | WordCreateOrConnectWithoutLicenseInput[]
    createMany?: WordCreateManyLicenseInputEnvelope
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
  }

  export type PhoneticUncheckedCreateNestedManyWithoutLicenseInput = {
    create?: XOR<PhoneticCreateWithoutLicenseInput, PhoneticUncheckedCreateWithoutLicenseInput> | PhoneticCreateWithoutLicenseInput[] | PhoneticUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: PhoneticCreateOrConnectWithoutLicenseInput | PhoneticCreateOrConnectWithoutLicenseInput[]
    createMany?: PhoneticCreateManyLicenseInputEnvelope
    connect?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
  }

  export type WordUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<WordCreateWithoutLicenseInput, WordUncheckedCreateWithoutLicenseInput> | WordCreateWithoutLicenseInput[] | WordUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: WordCreateOrConnectWithoutLicenseInput | WordCreateOrConnectWithoutLicenseInput[]
    upsert?: WordUpsertWithWhereUniqueWithoutLicenseInput | WordUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: WordCreateManyLicenseInputEnvelope
    set?: WordWhereUniqueInput | WordWhereUniqueInput[]
    disconnect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    delete?: WordWhereUniqueInput | WordWhereUniqueInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    update?: WordUpdateWithWhereUniqueWithoutLicenseInput | WordUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: WordUpdateManyWithWhereWithoutLicenseInput | WordUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: WordScalarWhereInput | WordScalarWhereInput[]
  }

  export type PhoneticUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<PhoneticCreateWithoutLicenseInput, PhoneticUncheckedCreateWithoutLicenseInput> | PhoneticCreateWithoutLicenseInput[] | PhoneticUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: PhoneticCreateOrConnectWithoutLicenseInput | PhoneticCreateOrConnectWithoutLicenseInput[]
    upsert?: PhoneticUpsertWithWhereUniqueWithoutLicenseInput | PhoneticUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: PhoneticCreateManyLicenseInputEnvelope
    set?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
    disconnect?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
    delete?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
    connect?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
    update?: PhoneticUpdateWithWhereUniqueWithoutLicenseInput | PhoneticUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: PhoneticUpdateManyWithWhereWithoutLicenseInput | PhoneticUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: PhoneticScalarWhereInput | PhoneticScalarWhereInput[]
  }

  export type WordUncheckedUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<WordCreateWithoutLicenseInput, WordUncheckedCreateWithoutLicenseInput> | WordCreateWithoutLicenseInput[] | WordUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: WordCreateOrConnectWithoutLicenseInput | WordCreateOrConnectWithoutLicenseInput[]
    upsert?: WordUpsertWithWhereUniqueWithoutLicenseInput | WordUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: WordCreateManyLicenseInputEnvelope
    set?: WordWhereUniqueInput | WordWhereUniqueInput[]
    disconnect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    delete?: WordWhereUniqueInput | WordWhereUniqueInput[]
    connect?: WordWhereUniqueInput | WordWhereUniqueInput[]
    update?: WordUpdateWithWhereUniqueWithoutLicenseInput | WordUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: WordUpdateManyWithWhereWithoutLicenseInput | WordUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: WordScalarWhereInput | WordScalarWhereInput[]
  }

  export type PhoneticUncheckedUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<PhoneticCreateWithoutLicenseInput, PhoneticUncheckedCreateWithoutLicenseInput> | PhoneticCreateWithoutLicenseInput[] | PhoneticUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: PhoneticCreateOrConnectWithoutLicenseInput | PhoneticCreateOrConnectWithoutLicenseInput[]
    upsert?: PhoneticUpsertWithWhereUniqueWithoutLicenseInput | PhoneticUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: PhoneticCreateManyLicenseInputEnvelope
    set?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
    disconnect?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
    delete?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
    connect?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
    update?: PhoneticUpdateWithWhereUniqueWithoutLicenseInput | PhoneticUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: PhoneticUpdateManyWithWhereWithoutLicenseInput | PhoneticUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: PhoneticScalarWhereInput | PhoneticScalarWhereInput[]
  }

  export type WordCreateNestedOneWithoutMeaningsInput = {
    create?: XOR<WordCreateWithoutMeaningsInput, WordUncheckedCreateWithoutMeaningsInput>
    connectOrCreate?: WordCreateOrConnectWithoutMeaningsInput
    connect?: WordWhereUniqueInput
  }

  export type DefinitionCreateNestedManyWithoutMeaningInput = {
    create?: XOR<DefinitionCreateWithoutMeaningInput, DefinitionUncheckedCreateWithoutMeaningInput> | DefinitionCreateWithoutMeaningInput[] | DefinitionUncheckedCreateWithoutMeaningInput[]
    connectOrCreate?: DefinitionCreateOrConnectWithoutMeaningInput | DefinitionCreateOrConnectWithoutMeaningInput[]
    createMany?: DefinitionCreateManyMeaningInputEnvelope
    connect?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
  }

  export type SynonymCreateNestedManyWithoutMeaningInput = {
    create?: XOR<SynonymCreateWithoutMeaningInput, SynonymUncheckedCreateWithoutMeaningInput> | SynonymCreateWithoutMeaningInput[] | SynonymUncheckedCreateWithoutMeaningInput[]
    connectOrCreate?: SynonymCreateOrConnectWithoutMeaningInput | SynonymCreateOrConnectWithoutMeaningInput[]
    createMany?: SynonymCreateManyMeaningInputEnvelope
    connect?: SynonymWhereUniqueInput | SynonymWhereUniqueInput[]
  }

  export type AntonymCreateNestedManyWithoutMeaningInput = {
    create?: XOR<AntonymCreateWithoutMeaningInput, AntonymUncheckedCreateWithoutMeaningInput> | AntonymCreateWithoutMeaningInput[] | AntonymUncheckedCreateWithoutMeaningInput[]
    connectOrCreate?: AntonymCreateOrConnectWithoutMeaningInput | AntonymCreateOrConnectWithoutMeaningInput[]
    createMany?: AntonymCreateManyMeaningInputEnvelope
    connect?: AntonymWhereUniqueInput | AntonymWhereUniqueInput[]
  }

  export type DefinitionUncheckedCreateNestedManyWithoutMeaningInput = {
    create?: XOR<DefinitionCreateWithoutMeaningInput, DefinitionUncheckedCreateWithoutMeaningInput> | DefinitionCreateWithoutMeaningInput[] | DefinitionUncheckedCreateWithoutMeaningInput[]
    connectOrCreate?: DefinitionCreateOrConnectWithoutMeaningInput | DefinitionCreateOrConnectWithoutMeaningInput[]
    createMany?: DefinitionCreateManyMeaningInputEnvelope
    connect?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
  }

  export type SynonymUncheckedCreateNestedManyWithoutMeaningInput = {
    create?: XOR<SynonymCreateWithoutMeaningInput, SynonymUncheckedCreateWithoutMeaningInput> | SynonymCreateWithoutMeaningInput[] | SynonymUncheckedCreateWithoutMeaningInput[]
    connectOrCreate?: SynonymCreateOrConnectWithoutMeaningInput | SynonymCreateOrConnectWithoutMeaningInput[]
    createMany?: SynonymCreateManyMeaningInputEnvelope
    connect?: SynonymWhereUniqueInput | SynonymWhereUniqueInput[]
  }

  export type AntonymUncheckedCreateNestedManyWithoutMeaningInput = {
    create?: XOR<AntonymCreateWithoutMeaningInput, AntonymUncheckedCreateWithoutMeaningInput> | AntonymCreateWithoutMeaningInput[] | AntonymUncheckedCreateWithoutMeaningInput[]
    connectOrCreate?: AntonymCreateOrConnectWithoutMeaningInput | AntonymCreateOrConnectWithoutMeaningInput[]
    createMany?: AntonymCreateManyMeaningInputEnvelope
    connect?: AntonymWhereUniqueInput | AntonymWhereUniqueInput[]
  }

  export type WordUpdateOneRequiredWithoutMeaningsNestedInput = {
    create?: XOR<WordCreateWithoutMeaningsInput, WordUncheckedCreateWithoutMeaningsInput>
    connectOrCreate?: WordCreateOrConnectWithoutMeaningsInput
    upsert?: WordUpsertWithoutMeaningsInput
    connect?: WordWhereUniqueInput
    update?: XOR<XOR<WordUpdateToOneWithWhereWithoutMeaningsInput, WordUpdateWithoutMeaningsInput>, WordUncheckedUpdateWithoutMeaningsInput>
  }

  export type DefinitionUpdateManyWithoutMeaningNestedInput = {
    create?: XOR<DefinitionCreateWithoutMeaningInput, DefinitionUncheckedCreateWithoutMeaningInput> | DefinitionCreateWithoutMeaningInput[] | DefinitionUncheckedCreateWithoutMeaningInput[]
    connectOrCreate?: DefinitionCreateOrConnectWithoutMeaningInput | DefinitionCreateOrConnectWithoutMeaningInput[]
    upsert?: DefinitionUpsertWithWhereUniqueWithoutMeaningInput | DefinitionUpsertWithWhereUniqueWithoutMeaningInput[]
    createMany?: DefinitionCreateManyMeaningInputEnvelope
    set?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
    disconnect?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
    delete?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
    connect?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
    update?: DefinitionUpdateWithWhereUniqueWithoutMeaningInput | DefinitionUpdateWithWhereUniqueWithoutMeaningInput[]
    updateMany?: DefinitionUpdateManyWithWhereWithoutMeaningInput | DefinitionUpdateManyWithWhereWithoutMeaningInput[]
    deleteMany?: DefinitionScalarWhereInput | DefinitionScalarWhereInput[]
  }

  export type SynonymUpdateManyWithoutMeaningNestedInput = {
    create?: XOR<SynonymCreateWithoutMeaningInput, SynonymUncheckedCreateWithoutMeaningInput> | SynonymCreateWithoutMeaningInput[] | SynonymUncheckedCreateWithoutMeaningInput[]
    connectOrCreate?: SynonymCreateOrConnectWithoutMeaningInput | SynonymCreateOrConnectWithoutMeaningInput[]
    upsert?: SynonymUpsertWithWhereUniqueWithoutMeaningInput | SynonymUpsertWithWhereUniqueWithoutMeaningInput[]
    createMany?: SynonymCreateManyMeaningInputEnvelope
    set?: SynonymWhereUniqueInput | SynonymWhereUniqueInput[]
    disconnect?: SynonymWhereUniqueInput | SynonymWhereUniqueInput[]
    delete?: SynonymWhereUniqueInput | SynonymWhereUniqueInput[]
    connect?: SynonymWhereUniqueInput | SynonymWhereUniqueInput[]
    update?: SynonymUpdateWithWhereUniqueWithoutMeaningInput | SynonymUpdateWithWhereUniqueWithoutMeaningInput[]
    updateMany?: SynonymUpdateManyWithWhereWithoutMeaningInput | SynonymUpdateManyWithWhereWithoutMeaningInput[]
    deleteMany?: SynonymScalarWhereInput | SynonymScalarWhereInput[]
  }

  export type AntonymUpdateManyWithoutMeaningNestedInput = {
    create?: XOR<AntonymCreateWithoutMeaningInput, AntonymUncheckedCreateWithoutMeaningInput> | AntonymCreateWithoutMeaningInput[] | AntonymUncheckedCreateWithoutMeaningInput[]
    connectOrCreate?: AntonymCreateOrConnectWithoutMeaningInput | AntonymCreateOrConnectWithoutMeaningInput[]
    upsert?: AntonymUpsertWithWhereUniqueWithoutMeaningInput | AntonymUpsertWithWhereUniqueWithoutMeaningInput[]
    createMany?: AntonymCreateManyMeaningInputEnvelope
    set?: AntonymWhereUniqueInput | AntonymWhereUniqueInput[]
    disconnect?: AntonymWhereUniqueInput | AntonymWhereUniqueInput[]
    delete?: AntonymWhereUniqueInput | AntonymWhereUniqueInput[]
    connect?: AntonymWhereUniqueInput | AntonymWhereUniqueInput[]
    update?: AntonymUpdateWithWhereUniqueWithoutMeaningInput | AntonymUpdateWithWhereUniqueWithoutMeaningInput[]
    updateMany?: AntonymUpdateManyWithWhereWithoutMeaningInput | AntonymUpdateManyWithWhereWithoutMeaningInput[]
    deleteMany?: AntonymScalarWhereInput | AntonymScalarWhereInput[]
  }

  export type DefinitionUncheckedUpdateManyWithoutMeaningNestedInput = {
    create?: XOR<DefinitionCreateWithoutMeaningInput, DefinitionUncheckedCreateWithoutMeaningInput> | DefinitionCreateWithoutMeaningInput[] | DefinitionUncheckedCreateWithoutMeaningInput[]
    connectOrCreate?: DefinitionCreateOrConnectWithoutMeaningInput | DefinitionCreateOrConnectWithoutMeaningInput[]
    upsert?: DefinitionUpsertWithWhereUniqueWithoutMeaningInput | DefinitionUpsertWithWhereUniqueWithoutMeaningInput[]
    createMany?: DefinitionCreateManyMeaningInputEnvelope
    set?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
    disconnect?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
    delete?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
    connect?: DefinitionWhereUniqueInput | DefinitionWhereUniqueInput[]
    update?: DefinitionUpdateWithWhereUniqueWithoutMeaningInput | DefinitionUpdateWithWhereUniqueWithoutMeaningInput[]
    updateMany?: DefinitionUpdateManyWithWhereWithoutMeaningInput | DefinitionUpdateManyWithWhereWithoutMeaningInput[]
    deleteMany?: DefinitionScalarWhereInput | DefinitionScalarWhereInput[]
  }

  export type SynonymUncheckedUpdateManyWithoutMeaningNestedInput = {
    create?: XOR<SynonymCreateWithoutMeaningInput, SynonymUncheckedCreateWithoutMeaningInput> | SynonymCreateWithoutMeaningInput[] | SynonymUncheckedCreateWithoutMeaningInput[]
    connectOrCreate?: SynonymCreateOrConnectWithoutMeaningInput | SynonymCreateOrConnectWithoutMeaningInput[]
    upsert?: SynonymUpsertWithWhereUniqueWithoutMeaningInput | SynonymUpsertWithWhereUniqueWithoutMeaningInput[]
    createMany?: SynonymCreateManyMeaningInputEnvelope
    set?: SynonymWhereUniqueInput | SynonymWhereUniqueInput[]
    disconnect?: SynonymWhereUniqueInput | SynonymWhereUniqueInput[]
    delete?: SynonymWhereUniqueInput | SynonymWhereUniqueInput[]
    connect?: SynonymWhereUniqueInput | SynonymWhereUniqueInput[]
    update?: SynonymUpdateWithWhereUniqueWithoutMeaningInput | SynonymUpdateWithWhereUniqueWithoutMeaningInput[]
    updateMany?: SynonymUpdateManyWithWhereWithoutMeaningInput | SynonymUpdateManyWithWhereWithoutMeaningInput[]
    deleteMany?: SynonymScalarWhereInput | SynonymScalarWhereInput[]
  }

  export type AntonymUncheckedUpdateManyWithoutMeaningNestedInput = {
    create?: XOR<AntonymCreateWithoutMeaningInput, AntonymUncheckedCreateWithoutMeaningInput> | AntonymCreateWithoutMeaningInput[] | AntonymUncheckedCreateWithoutMeaningInput[]
    connectOrCreate?: AntonymCreateOrConnectWithoutMeaningInput | AntonymCreateOrConnectWithoutMeaningInput[]
    upsert?: AntonymUpsertWithWhereUniqueWithoutMeaningInput | AntonymUpsertWithWhereUniqueWithoutMeaningInput[]
    createMany?: AntonymCreateManyMeaningInputEnvelope
    set?: AntonymWhereUniqueInput | AntonymWhereUniqueInput[]
    disconnect?: AntonymWhereUniqueInput | AntonymWhereUniqueInput[]
    delete?: AntonymWhereUniqueInput | AntonymWhereUniqueInput[]
    connect?: AntonymWhereUniqueInput | AntonymWhereUniqueInput[]
    update?: AntonymUpdateWithWhereUniqueWithoutMeaningInput | AntonymUpdateWithWhereUniqueWithoutMeaningInput[]
    updateMany?: AntonymUpdateManyWithWhereWithoutMeaningInput | AntonymUpdateManyWithWhereWithoutMeaningInput[]
    deleteMany?: AntonymScalarWhereInput | AntonymScalarWhereInput[]
  }

  export type WordCreateNestedOneWithoutPhoneticsInput = {
    create?: XOR<WordCreateWithoutPhoneticsInput, WordUncheckedCreateWithoutPhoneticsInput>
    connectOrCreate?: WordCreateOrConnectWithoutPhoneticsInput
    connect?: WordWhereUniqueInput
  }

  export type LicenseCreateNestedOneWithoutPhoneticsInput = {
    create?: XOR<LicenseCreateWithoutPhoneticsInput, LicenseUncheckedCreateWithoutPhoneticsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutPhoneticsInput
    connect?: LicenseWhereUniqueInput
  }

  export type WordUpdateOneRequiredWithoutPhoneticsNestedInput = {
    create?: XOR<WordCreateWithoutPhoneticsInput, WordUncheckedCreateWithoutPhoneticsInput>
    connectOrCreate?: WordCreateOrConnectWithoutPhoneticsInput
    upsert?: WordUpsertWithoutPhoneticsInput
    connect?: WordWhereUniqueInput
    update?: XOR<XOR<WordUpdateToOneWithWhereWithoutPhoneticsInput, WordUpdateWithoutPhoneticsInput>, WordUncheckedUpdateWithoutPhoneticsInput>
  }

  export type LicenseUpdateOneWithoutPhoneticsNestedInput = {
    create?: XOR<LicenseCreateWithoutPhoneticsInput, LicenseUncheckedCreateWithoutPhoneticsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutPhoneticsInput
    upsert?: LicenseUpsertWithoutPhoneticsInput
    disconnect?: LicenseWhereInput | boolean
    delete?: LicenseWhereInput | boolean
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutPhoneticsInput, LicenseUpdateWithoutPhoneticsInput>, LicenseUncheckedUpdateWithoutPhoneticsInput>
  }

  export type WordCreateNestedOneWithoutSourceUrlsInput = {
    create?: XOR<WordCreateWithoutSourceUrlsInput, WordUncheckedCreateWithoutSourceUrlsInput>
    connectOrCreate?: WordCreateOrConnectWithoutSourceUrlsInput
    connect?: WordWhereUniqueInput
  }

  export type WordUpdateOneRequiredWithoutSourceUrlsNestedInput = {
    create?: XOR<WordCreateWithoutSourceUrlsInput, WordUncheckedCreateWithoutSourceUrlsInput>
    connectOrCreate?: WordCreateOrConnectWithoutSourceUrlsInput
    upsert?: WordUpsertWithoutSourceUrlsInput
    connect?: WordWhereUniqueInput
    update?: XOR<XOR<WordUpdateToOneWithWhereWithoutSourceUrlsInput, WordUpdateWithoutSourceUrlsInput>, WordUncheckedUpdateWithoutSourceUrlsInput>
  }

  export type MeaningCreateNestedOneWithoutSynonymsInput = {
    create?: XOR<MeaningCreateWithoutSynonymsInput, MeaningUncheckedCreateWithoutSynonymsInput>
    connectOrCreate?: MeaningCreateOrConnectWithoutSynonymsInput
    connect?: MeaningWhereUniqueInput
  }

  export type MeaningUpdateOneRequiredWithoutSynonymsNestedInput = {
    create?: XOR<MeaningCreateWithoutSynonymsInput, MeaningUncheckedCreateWithoutSynonymsInput>
    connectOrCreate?: MeaningCreateOrConnectWithoutSynonymsInput
    upsert?: MeaningUpsertWithoutSynonymsInput
    connect?: MeaningWhereUniqueInput
    update?: XOR<XOR<MeaningUpdateToOneWithWhereWithoutSynonymsInput, MeaningUpdateWithoutSynonymsInput>, MeaningUncheckedUpdateWithoutSynonymsInput>
  }

  export type UserWordHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<UserWordHistoryCreateWithoutUserInput, UserWordHistoryUncheckedCreateWithoutUserInput> | UserWordHistoryCreateWithoutUserInput[] | UserWordHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWordHistoryCreateOrConnectWithoutUserInput | UserWordHistoryCreateOrConnectWithoutUserInput[]
    createMany?: UserWordHistoryCreateManyUserInputEnvelope
    connect?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
  }

  export type UserWordHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserWordHistoryCreateWithoutUserInput, UserWordHistoryUncheckedCreateWithoutUserInput> | UserWordHistoryCreateWithoutUserInput[] | UserWordHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWordHistoryCreateOrConnectWithoutUserInput | UserWordHistoryCreateOrConnectWithoutUserInput[]
    createMany?: UserWordHistoryCreateManyUserInputEnvelope
    connect?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserWordHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserWordHistoryCreateWithoutUserInput, UserWordHistoryUncheckedCreateWithoutUserInput> | UserWordHistoryCreateWithoutUserInput[] | UserWordHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWordHistoryCreateOrConnectWithoutUserInput | UserWordHistoryCreateOrConnectWithoutUserInput[]
    upsert?: UserWordHistoryUpsertWithWhereUniqueWithoutUserInput | UserWordHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserWordHistoryCreateManyUserInputEnvelope
    set?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
    disconnect?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
    delete?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
    connect?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
    update?: UserWordHistoryUpdateWithWhereUniqueWithoutUserInput | UserWordHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserWordHistoryUpdateManyWithWhereWithoutUserInput | UserWordHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserWordHistoryScalarWhereInput | UserWordHistoryScalarWhereInput[]
  }

  export type UserWordHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserWordHistoryCreateWithoutUserInput, UserWordHistoryUncheckedCreateWithoutUserInput> | UserWordHistoryCreateWithoutUserInput[] | UserWordHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWordHistoryCreateOrConnectWithoutUserInput | UserWordHistoryCreateOrConnectWithoutUserInput[]
    upsert?: UserWordHistoryUpsertWithWhereUniqueWithoutUserInput | UserWordHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserWordHistoryCreateManyUserInputEnvelope
    set?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
    disconnect?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
    delete?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
    connect?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
    update?: UserWordHistoryUpdateWithWhereUniqueWithoutUserInput | UserWordHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserWordHistoryUpdateManyWithWhereWithoutUserInput | UserWordHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserWordHistoryScalarWhereInput | UserWordHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutHistoryInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type WordCreateNestedOneWithoutHistoryInput = {
    create?: XOR<WordCreateWithoutHistoryInput, WordUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: WordCreateOrConnectWithoutHistoryInput
    connect?: WordWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    upsert?: UserUpsertWithoutHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoryInput, UserUpdateWithoutHistoryInput>, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type WordUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<WordCreateWithoutHistoryInput, WordUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: WordCreateOrConnectWithoutHistoryInput
    upsert?: WordUpsertWithoutHistoryInput
    connect?: WordWhereUniqueInput
    update?: XOR<XOR<WordUpdateToOneWithWhereWithoutHistoryInput, WordUpdateWithoutHistoryInput>, WordUncheckedUpdateWithoutHistoryInput>
  }

  export type PhoneticCreateNestedManyWithoutWordInput = {
    create?: XOR<PhoneticCreateWithoutWordInput, PhoneticUncheckedCreateWithoutWordInput> | PhoneticCreateWithoutWordInput[] | PhoneticUncheckedCreateWithoutWordInput[]
    connectOrCreate?: PhoneticCreateOrConnectWithoutWordInput | PhoneticCreateOrConnectWithoutWordInput[]
    createMany?: PhoneticCreateManyWordInputEnvelope
    connect?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
  }

  export type MeaningCreateNestedManyWithoutWordInput = {
    create?: XOR<MeaningCreateWithoutWordInput, MeaningUncheckedCreateWithoutWordInput> | MeaningCreateWithoutWordInput[] | MeaningUncheckedCreateWithoutWordInput[]
    connectOrCreate?: MeaningCreateOrConnectWithoutWordInput | MeaningCreateOrConnectWithoutWordInput[]
    createMany?: MeaningCreateManyWordInputEnvelope
    connect?: MeaningWhereUniqueInput | MeaningWhereUniqueInput[]
  }

  export type LicenseCreateNestedOneWithoutWordsInput = {
    create?: XOR<LicenseCreateWithoutWordsInput, LicenseUncheckedCreateWithoutWordsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutWordsInput
    connect?: LicenseWhereUniqueInput
  }

  export type SourceUrlCreateNestedManyWithoutWordInput = {
    create?: XOR<SourceUrlCreateWithoutWordInput, SourceUrlUncheckedCreateWithoutWordInput> | SourceUrlCreateWithoutWordInput[] | SourceUrlUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SourceUrlCreateOrConnectWithoutWordInput | SourceUrlCreateOrConnectWithoutWordInput[]
    createMany?: SourceUrlCreateManyWordInputEnvelope
    connect?: SourceUrlWhereUniqueInput | SourceUrlWhereUniqueInput[]
  }

  export type UserWordHistoryCreateNestedManyWithoutWordInput = {
    create?: XOR<UserWordHistoryCreateWithoutWordInput, UserWordHistoryUncheckedCreateWithoutWordInput> | UserWordHistoryCreateWithoutWordInput[] | UserWordHistoryUncheckedCreateWithoutWordInput[]
    connectOrCreate?: UserWordHistoryCreateOrConnectWithoutWordInput | UserWordHistoryCreateOrConnectWithoutWordInput[]
    createMany?: UserWordHistoryCreateManyWordInputEnvelope
    connect?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
  }

  export type PhoneticUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<PhoneticCreateWithoutWordInput, PhoneticUncheckedCreateWithoutWordInput> | PhoneticCreateWithoutWordInput[] | PhoneticUncheckedCreateWithoutWordInput[]
    connectOrCreate?: PhoneticCreateOrConnectWithoutWordInput | PhoneticCreateOrConnectWithoutWordInput[]
    createMany?: PhoneticCreateManyWordInputEnvelope
    connect?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
  }

  export type MeaningUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<MeaningCreateWithoutWordInput, MeaningUncheckedCreateWithoutWordInput> | MeaningCreateWithoutWordInput[] | MeaningUncheckedCreateWithoutWordInput[]
    connectOrCreate?: MeaningCreateOrConnectWithoutWordInput | MeaningCreateOrConnectWithoutWordInput[]
    createMany?: MeaningCreateManyWordInputEnvelope
    connect?: MeaningWhereUniqueInput | MeaningWhereUniqueInput[]
  }

  export type SourceUrlUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<SourceUrlCreateWithoutWordInput, SourceUrlUncheckedCreateWithoutWordInput> | SourceUrlCreateWithoutWordInput[] | SourceUrlUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SourceUrlCreateOrConnectWithoutWordInput | SourceUrlCreateOrConnectWithoutWordInput[]
    createMany?: SourceUrlCreateManyWordInputEnvelope
    connect?: SourceUrlWhereUniqueInput | SourceUrlWhereUniqueInput[]
  }

  export type UserWordHistoryUncheckedCreateNestedManyWithoutWordInput = {
    create?: XOR<UserWordHistoryCreateWithoutWordInput, UserWordHistoryUncheckedCreateWithoutWordInput> | UserWordHistoryCreateWithoutWordInput[] | UserWordHistoryUncheckedCreateWithoutWordInput[]
    connectOrCreate?: UserWordHistoryCreateOrConnectWithoutWordInput | UserWordHistoryCreateOrConnectWithoutWordInput[]
    createMany?: UserWordHistoryCreateManyWordInputEnvelope
    connect?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumWordStatusFieldUpdateOperationsInput = {
    set?: $Enums.WordStatus
  }

  export type PhoneticUpdateManyWithoutWordNestedInput = {
    create?: XOR<PhoneticCreateWithoutWordInput, PhoneticUncheckedCreateWithoutWordInput> | PhoneticCreateWithoutWordInput[] | PhoneticUncheckedCreateWithoutWordInput[]
    connectOrCreate?: PhoneticCreateOrConnectWithoutWordInput | PhoneticCreateOrConnectWithoutWordInput[]
    upsert?: PhoneticUpsertWithWhereUniqueWithoutWordInput | PhoneticUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: PhoneticCreateManyWordInputEnvelope
    set?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
    disconnect?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
    delete?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
    connect?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
    update?: PhoneticUpdateWithWhereUniqueWithoutWordInput | PhoneticUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: PhoneticUpdateManyWithWhereWithoutWordInput | PhoneticUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: PhoneticScalarWhereInput | PhoneticScalarWhereInput[]
  }

  export type MeaningUpdateManyWithoutWordNestedInput = {
    create?: XOR<MeaningCreateWithoutWordInput, MeaningUncheckedCreateWithoutWordInput> | MeaningCreateWithoutWordInput[] | MeaningUncheckedCreateWithoutWordInput[]
    connectOrCreate?: MeaningCreateOrConnectWithoutWordInput | MeaningCreateOrConnectWithoutWordInput[]
    upsert?: MeaningUpsertWithWhereUniqueWithoutWordInput | MeaningUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: MeaningCreateManyWordInputEnvelope
    set?: MeaningWhereUniqueInput | MeaningWhereUniqueInput[]
    disconnect?: MeaningWhereUniqueInput | MeaningWhereUniqueInput[]
    delete?: MeaningWhereUniqueInput | MeaningWhereUniqueInput[]
    connect?: MeaningWhereUniqueInput | MeaningWhereUniqueInput[]
    update?: MeaningUpdateWithWhereUniqueWithoutWordInput | MeaningUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: MeaningUpdateManyWithWhereWithoutWordInput | MeaningUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: MeaningScalarWhereInput | MeaningScalarWhereInput[]
  }

  export type LicenseUpdateOneWithoutWordsNestedInput = {
    create?: XOR<LicenseCreateWithoutWordsInput, LicenseUncheckedCreateWithoutWordsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutWordsInput
    upsert?: LicenseUpsertWithoutWordsInput
    disconnect?: LicenseWhereInput | boolean
    delete?: LicenseWhereInput | boolean
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutWordsInput, LicenseUpdateWithoutWordsInput>, LicenseUncheckedUpdateWithoutWordsInput>
  }

  export type SourceUrlUpdateManyWithoutWordNestedInput = {
    create?: XOR<SourceUrlCreateWithoutWordInput, SourceUrlUncheckedCreateWithoutWordInput> | SourceUrlCreateWithoutWordInput[] | SourceUrlUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SourceUrlCreateOrConnectWithoutWordInput | SourceUrlCreateOrConnectWithoutWordInput[]
    upsert?: SourceUrlUpsertWithWhereUniqueWithoutWordInput | SourceUrlUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: SourceUrlCreateManyWordInputEnvelope
    set?: SourceUrlWhereUniqueInput | SourceUrlWhereUniqueInput[]
    disconnect?: SourceUrlWhereUniqueInput | SourceUrlWhereUniqueInput[]
    delete?: SourceUrlWhereUniqueInput | SourceUrlWhereUniqueInput[]
    connect?: SourceUrlWhereUniqueInput | SourceUrlWhereUniqueInput[]
    update?: SourceUrlUpdateWithWhereUniqueWithoutWordInput | SourceUrlUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: SourceUrlUpdateManyWithWhereWithoutWordInput | SourceUrlUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: SourceUrlScalarWhereInput | SourceUrlScalarWhereInput[]
  }

  export type UserWordHistoryUpdateManyWithoutWordNestedInput = {
    create?: XOR<UserWordHistoryCreateWithoutWordInput, UserWordHistoryUncheckedCreateWithoutWordInput> | UserWordHistoryCreateWithoutWordInput[] | UserWordHistoryUncheckedCreateWithoutWordInput[]
    connectOrCreate?: UserWordHistoryCreateOrConnectWithoutWordInput | UserWordHistoryCreateOrConnectWithoutWordInput[]
    upsert?: UserWordHistoryUpsertWithWhereUniqueWithoutWordInput | UserWordHistoryUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: UserWordHistoryCreateManyWordInputEnvelope
    set?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
    disconnect?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
    delete?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
    connect?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
    update?: UserWordHistoryUpdateWithWhereUniqueWithoutWordInput | UserWordHistoryUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: UserWordHistoryUpdateManyWithWhereWithoutWordInput | UserWordHistoryUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: UserWordHistoryScalarWhereInput | UserWordHistoryScalarWhereInput[]
  }

  export type PhoneticUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<PhoneticCreateWithoutWordInput, PhoneticUncheckedCreateWithoutWordInput> | PhoneticCreateWithoutWordInput[] | PhoneticUncheckedCreateWithoutWordInput[]
    connectOrCreate?: PhoneticCreateOrConnectWithoutWordInput | PhoneticCreateOrConnectWithoutWordInput[]
    upsert?: PhoneticUpsertWithWhereUniqueWithoutWordInput | PhoneticUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: PhoneticCreateManyWordInputEnvelope
    set?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
    disconnect?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
    delete?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
    connect?: PhoneticWhereUniqueInput | PhoneticWhereUniqueInput[]
    update?: PhoneticUpdateWithWhereUniqueWithoutWordInput | PhoneticUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: PhoneticUpdateManyWithWhereWithoutWordInput | PhoneticUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: PhoneticScalarWhereInput | PhoneticScalarWhereInput[]
  }

  export type MeaningUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<MeaningCreateWithoutWordInput, MeaningUncheckedCreateWithoutWordInput> | MeaningCreateWithoutWordInput[] | MeaningUncheckedCreateWithoutWordInput[]
    connectOrCreate?: MeaningCreateOrConnectWithoutWordInput | MeaningCreateOrConnectWithoutWordInput[]
    upsert?: MeaningUpsertWithWhereUniqueWithoutWordInput | MeaningUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: MeaningCreateManyWordInputEnvelope
    set?: MeaningWhereUniqueInput | MeaningWhereUniqueInput[]
    disconnect?: MeaningWhereUniqueInput | MeaningWhereUniqueInput[]
    delete?: MeaningWhereUniqueInput | MeaningWhereUniqueInput[]
    connect?: MeaningWhereUniqueInput | MeaningWhereUniqueInput[]
    update?: MeaningUpdateWithWhereUniqueWithoutWordInput | MeaningUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: MeaningUpdateManyWithWhereWithoutWordInput | MeaningUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: MeaningScalarWhereInput | MeaningScalarWhereInput[]
  }

  export type SourceUrlUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<SourceUrlCreateWithoutWordInput, SourceUrlUncheckedCreateWithoutWordInput> | SourceUrlCreateWithoutWordInput[] | SourceUrlUncheckedCreateWithoutWordInput[]
    connectOrCreate?: SourceUrlCreateOrConnectWithoutWordInput | SourceUrlCreateOrConnectWithoutWordInput[]
    upsert?: SourceUrlUpsertWithWhereUniqueWithoutWordInput | SourceUrlUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: SourceUrlCreateManyWordInputEnvelope
    set?: SourceUrlWhereUniqueInput | SourceUrlWhereUniqueInput[]
    disconnect?: SourceUrlWhereUniqueInput | SourceUrlWhereUniqueInput[]
    delete?: SourceUrlWhereUniqueInput | SourceUrlWhereUniqueInput[]
    connect?: SourceUrlWhereUniqueInput | SourceUrlWhereUniqueInput[]
    update?: SourceUrlUpdateWithWhereUniqueWithoutWordInput | SourceUrlUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: SourceUrlUpdateManyWithWhereWithoutWordInput | SourceUrlUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: SourceUrlScalarWhereInput | SourceUrlScalarWhereInput[]
  }

  export type UserWordHistoryUncheckedUpdateManyWithoutWordNestedInput = {
    create?: XOR<UserWordHistoryCreateWithoutWordInput, UserWordHistoryUncheckedCreateWithoutWordInput> | UserWordHistoryCreateWithoutWordInput[] | UserWordHistoryUncheckedCreateWithoutWordInput[]
    connectOrCreate?: UserWordHistoryCreateOrConnectWithoutWordInput | UserWordHistoryCreateOrConnectWithoutWordInput[]
    upsert?: UserWordHistoryUpsertWithWhereUniqueWithoutWordInput | UserWordHistoryUpsertWithWhereUniqueWithoutWordInput[]
    createMany?: UserWordHistoryCreateManyWordInputEnvelope
    set?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
    disconnect?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
    delete?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
    connect?: UserWordHistoryWhereUniqueInput | UserWordHistoryWhereUniqueInput[]
    update?: UserWordHistoryUpdateWithWhereUniqueWithoutWordInput | UserWordHistoryUpdateWithWhereUniqueWithoutWordInput[]
    updateMany?: UserWordHistoryUpdateManyWithWhereWithoutWordInput | UserWordHistoryUpdateManyWithWhereWithoutWordInput[]
    deleteMany?: UserWordHistoryScalarWhereInput | UserWordHistoryScalarWhereInput[]
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

  export type NestedEnumWordStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WordStatus | EnumWordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WordStatus[] | ListEnumWordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WordStatus[] | ListEnumWordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWordStatusFilter<$PrismaModel> | $Enums.WordStatus
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumWordStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WordStatus | EnumWordStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WordStatus[] | ListEnumWordStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WordStatus[] | ListEnumWordStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWordStatusWithAggregatesFilter<$PrismaModel> | $Enums.WordStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWordStatusFilter<$PrismaModel>
    _max?: NestedEnumWordStatusFilter<$PrismaModel>
  }

  export type MeaningCreateWithoutAntonymsInput = {
    meaningId?: string
    partOfSpeech: string
    word: WordCreateNestedOneWithoutMeaningsInput
    definitions?: DefinitionCreateNestedManyWithoutMeaningInput
    synonyms?: SynonymCreateNestedManyWithoutMeaningInput
  }

  export type MeaningUncheckedCreateWithoutAntonymsInput = {
    meaningId?: string
    partOfSpeech: string
    wordId: string
    definitions?: DefinitionUncheckedCreateNestedManyWithoutMeaningInput
    synonyms?: SynonymUncheckedCreateNestedManyWithoutMeaningInput
  }

  export type MeaningCreateOrConnectWithoutAntonymsInput = {
    where: MeaningWhereUniqueInput
    create: XOR<MeaningCreateWithoutAntonymsInput, MeaningUncheckedCreateWithoutAntonymsInput>
  }

  export type MeaningUpsertWithoutAntonymsInput = {
    update: XOR<MeaningUpdateWithoutAntonymsInput, MeaningUncheckedUpdateWithoutAntonymsInput>
    create: XOR<MeaningCreateWithoutAntonymsInput, MeaningUncheckedCreateWithoutAntonymsInput>
    where?: MeaningWhereInput
  }

  export type MeaningUpdateToOneWithWhereWithoutAntonymsInput = {
    where?: MeaningWhereInput
    data: XOR<MeaningUpdateWithoutAntonymsInput, MeaningUncheckedUpdateWithoutAntonymsInput>
  }

  export type MeaningUpdateWithoutAntonymsInput = {
    meaningId?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    word?: WordUpdateOneRequiredWithoutMeaningsNestedInput
    definitions?: DefinitionUpdateManyWithoutMeaningNestedInput
    synonyms?: SynonymUpdateManyWithoutMeaningNestedInput
  }

  export type MeaningUncheckedUpdateWithoutAntonymsInput = {
    meaningId?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    definitions?: DefinitionUncheckedUpdateManyWithoutMeaningNestedInput
    synonyms?: SynonymUncheckedUpdateManyWithoutMeaningNestedInput
  }

  export type MeaningCreateWithoutDefinitionsInput = {
    meaningId?: string
    partOfSpeech: string
    word: WordCreateNestedOneWithoutMeaningsInput
    synonyms?: SynonymCreateNestedManyWithoutMeaningInput
    antonyms?: AntonymCreateNestedManyWithoutMeaningInput
  }

  export type MeaningUncheckedCreateWithoutDefinitionsInput = {
    meaningId?: string
    partOfSpeech: string
    wordId: string
    synonyms?: SynonymUncheckedCreateNestedManyWithoutMeaningInput
    antonyms?: AntonymUncheckedCreateNestedManyWithoutMeaningInput
  }

  export type MeaningCreateOrConnectWithoutDefinitionsInput = {
    where: MeaningWhereUniqueInput
    create: XOR<MeaningCreateWithoutDefinitionsInput, MeaningUncheckedCreateWithoutDefinitionsInput>
  }

  export type MeaningUpsertWithoutDefinitionsInput = {
    update: XOR<MeaningUpdateWithoutDefinitionsInput, MeaningUncheckedUpdateWithoutDefinitionsInput>
    create: XOR<MeaningCreateWithoutDefinitionsInput, MeaningUncheckedCreateWithoutDefinitionsInput>
    where?: MeaningWhereInput
  }

  export type MeaningUpdateToOneWithWhereWithoutDefinitionsInput = {
    where?: MeaningWhereInput
    data: XOR<MeaningUpdateWithoutDefinitionsInput, MeaningUncheckedUpdateWithoutDefinitionsInput>
  }

  export type MeaningUpdateWithoutDefinitionsInput = {
    meaningId?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    word?: WordUpdateOneRequiredWithoutMeaningsNestedInput
    synonyms?: SynonymUpdateManyWithoutMeaningNestedInput
    antonyms?: AntonymUpdateManyWithoutMeaningNestedInput
  }

  export type MeaningUncheckedUpdateWithoutDefinitionsInput = {
    meaningId?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    synonyms?: SynonymUncheckedUpdateManyWithoutMeaningNestedInput
    antonyms?: AntonymUncheckedUpdateManyWithoutMeaningNestedInput
  }

  export type WordCreateWithoutLicenseInput = {
    wordId?: string
    word: string
    isFavorite: boolean
    status?: $Enums.WordStatus
    createdAt?: Date | string
    phonetics?: PhoneticCreateNestedManyWithoutWordInput
    meanings?: MeaningCreateNestedManyWithoutWordInput
    sourceUrls?: SourceUrlCreateNestedManyWithoutWordInput
    history?: UserWordHistoryCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateWithoutLicenseInput = {
    wordId?: string
    word: string
    isFavorite: boolean
    status?: $Enums.WordStatus
    createdAt?: Date | string
    phonetics?: PhoneticUncheckedCreateNestedManyWithoutWordInput
    meanings?: MeaningUncheckedCreateNestedManyWithoutWordInput
    sourceUrls?: SourceUrlUncheckedCreateNestedManyWithoutWordInput
    history?: UserWordHistoryUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordCreateOrConnectWithoutLicenseInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutLicenseInput, WordUncheckedCreateWithoutLicenseInput>
  }

  export type WordCreateManyLicenseInputEnvelope = {
    data: WordCreateManyLicenseInput | WordCreateManyLicenseInput[]
    skipDuplicates?: boolean
  }

  export type PhoneticCreateWithoutLicenseInput = {
    phoneticId?: string
    text?: string | null
    audio: string
    sourceUrl?: string | null
    word: WordCreateNestedOneWithoutPhoneticsInput
  }

  export type PhoneticUncheckedCreateWithoutLicenseInput = {
    phoneticId?: string
    text?: string | null
    audio: string
    sourceUrl?: string | null
    wordId: string
  }

  export type PhoneticCreateOrConnectWithoutLicenseInput = {
    where: PhoneticWhereUniqueInput
    create: XOR<PhoneticCreateWithoutLicenseInput, PhoneticUncheckedCreateWithoutLicenseInput>
  }

  export type PhoneticCreateManyLicenseInputEnvelope = {
    data: PhoneticCreateManyLicenseInput | PhoneticCreateManyLicenseInput[]
    skipDuplicates?: boolean
  }

  export type WordUpsertWithWhereUniqueWithoutLicenseInput = {
    where: WordWhereUniqueInput
    update: XOR<WordUpdateWithoutLicenseInput, WordUncheckedUpdateWithoutLicenseInput>
    create: XOR<WordCreateWithoutLicenseInput, WordUncheckedCreateWithoutLicenseInput>
  }

  export type WordUpdateWithWhereUniqueWithoutLicenseInput = {
    where: WordWhereUniqueInput
    data: XOR<WordUpdateWithoutLicenseInput, WordUncheckedUpdateWithoutLicenseInput>
  }

  export type WordUpdateManyWithWhereWithoutLicenseInput = {
    where: WordScalarWhereInput
    data: XOR<WordUpdateManyMutationInput, WordUncheckedUpdateManyWithoutLicenseInput>
  }

  export type WordScalarWhereInput = {
    AND?: WordScalarWhereInput | WordScalarWhereInput[]
    OR?: WordScalarWhereInput[]
    NOT?: WordScalarWhereInput | WordScalarWhereInput[]
    wordId?: StringFilter<"Word"> | string
    word?: StringFilter<"Word"> | string
    isFavorite?: BoolFilter<"Word"> | boolean
    licenseId?: StringNullableFilter<"Word"> | string | null
    status?: EnumWordStatusFilter<"Word"> | $Enums.WordStatus
    createdAt?: DateTimeFilter<"Word"> | Date | string
  }

  export type PhoneticUpsertWithWhereUniqueWithoutLicenseInput = {
    where: PhoneticWhereUniqueInput
    update: XOR<PhoneticUpdateWithoutLicenseInput, PhoneticUncheckedUpdateWithoutLicenseInput>
    create: XOR<PhoneticCreateWithoutLicenseInput, PhoneticUncheckedCreateWithoutLicenseInput>
  }

  export type PhoneticUpdateWithWhereUniqueWithoutLicenseInput = {
    where: PhoneticWhereUniqueInput
    data: XOR<PhoneticUpdateWithoutLicenseInput, PhoneticUncheckedUpdateWithoutLicenseInput>
  }

  export type PhoneticUpdateManyWithWhereWithoutLicenseInput = {
    where: PhoneticScalarWhereInput
    data: XOR<PhoneticUpdateManyMutationInput, PhoneticUncheckedUpdateManyWithoutLicenseInput>
  }

  export type PhoneticScalarWhereInput = {
    AND?: PhoneticScalarWhereInput | PhoneticScalarWhereInput[]
    OR?: PhoneticScalarWhereInput[]
    NOT?: PhoneticScalarWhereInput | PhoneticScalarWhereInput[]
    phoneticId?: StringFilter<"Phonetic"> | string
    text?: StringNullableFilter<"Phonetic"> | string | null
    audio?: StringFilter<"Phonetic"> | string
    sourceUrl?: StringNullableFilter<"Phonetic"> | string | null
    wordId?: StringFilter<"Phonetic"> | string
    licenseId?: StringNullableFilter<"Phonetic"> | string | null
  }

  export type WordCreateWithoutMeaningsInput = {
    wordId?: string
    word: string
    isFavorite: boolean
    status?: $Enums.WordStatus
    createdAt?: Date | string
    phonetics?: PhoneticCreateNestedManyWithoutWordInput
    license?: LicenseCreateNestedOneWithoutWordsInput
    sourceUrls?: SourceUrlCreateNestedManyWithoutWordInput
    history?: UserWordHistoryCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateWithoutMeaningsInput = {
    wordId?: string
    word: string
    isFavorite: boolean
    licenseId?: string | null
    status?: $Enums.WordStatus
    createdAt?: Date | string
    phonetics?: PhoneticUncheckedCreateNestedManyWithoutWordInput
    sourceUrls?: SourceUrlUncheckedCreateNestedManyWithoutWordInput
    history?: UserWordHistoryUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordCreateOrConnectWithoutMeaningsInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutMeaningsInput, WordUncheckedCreateWithoutMeaningsInput>
  }

  export type DefinitionCreateWithoutMeaningInput = {
    definitionId?: string
    definition: string
    example?: string | null
  }

  export type DefinitionUncheckedCreateWithoutMeaningInput = {
    definitionId?: string
    definition: string
    example?: string | null
  }

  export type DefinitionCreateOrConnectWithoutMeaningInput = {
    where: DefinitionWhereUniqueInput
    create: XOR<DefinitionCreateWithoutMeaningInput, DefinitionUncheckedCreateWithoutMeaningInput>
  }

  export type DefinitionCreateManyMeaningInputEnvelope = {
    data: DefinitionCreateManyMeaningInput | DefinitionCreateManyMeaningInput[]
    skipDuplicates?: boolean
  }

  export type SynonymCreateWithoutMeaningInput = {
    synonymId?: string
    word: string
  }

  export type SynonymUncheckedCreateWithoutMeaningInput = {
    synonymId?: string
    word: string
  }

  export type SynonymCreateOrConnectWithoutMeaningInput = {
    where: SynonymWhereUniqueInput
    create: XOR<SynonymCreateWithoutMeaningInput, SynonymUncheckedCreateWithoutMeaningInput>
  }

  export type SynonymCreateManyMeaningInputEnvelope = {
    data: SynonymCreateManyMeaningInput | SynonymCreateManyMeaningInput[]
    skipDuplicates?: boolean
  }

  export type AntonymCreateWithoutMeaningInput = {
    antonymId?: string
    word: string
  }

  export type AntonymUncheckedCreateWithoutMeaningInput = {
    antonymId?: string
    word: string
  }

  export type AntonymCreateOrConnectWithoutMeaningInput = {
    where: AntonymWhereUniqueInput
    create: XOR<AntonymCreateWithoutMeaningInput, AntonymUncheckedCreateWithoutMeaningInput>
  }

  export type AntonymCreateManyMeaningInputEnvelope = {
    data: AntonymCreateManyMeaningInput | AntonymCreateManyMeaningInput[]
    skipDuplicates?: boolean
  }

  export type WordUpsertWithoutMeaningsInput = {
    update: XOR<WordUpdateWithoutMeaningsInput, WordUncheckedUpdateWithoutMeaningsInput>
    create: XOR<WordCreateWithoutMeaningsInput, WordUncheckedCreateWithoutMeaningsInput>
    where?: WordWhereInput
  }

  export type WordUpdateToOneWithWhereWithoutMeaningsInput = {
    where?: WordWhereInput
    data: XOR<WordUpdateWithoutMeaningsInput, WordUncheckedUpdateWithoutMeaningsInput>
  }

  export type WordUpdateWithoutMeaningsInput = {
    wordId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phonetics?: PhoneticUpdateManyWithoutWordNestedInput
    license?: LicenseUpdateOneWithoutWordsNestedInput
    sourceUrls?: SourceUrlUpdateManyWithoutWordNestedInput
    history?: UserWordHistoryUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateWithoutMeaningsInput = {
    wordId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phonetics?: PhoneticUncheckedUpdateManyWithoutWordNestedInput
    sourceUrls?: SourceUrlUncheckedUpdateManyWithoutWordNestedInput
    history?: UserWordHistoryUncheckedUpdateManyWithoutWordNestedInput
  }

  export type DefinitionUpsertWithWhereUniqueWithoutMeaningInput = {
    where: DefinitionWhereUniqueInput
    update: XOR<DefinitionUpdateWithoutMeaningInput, DefinitionUncheckedUpdateWithoutMeaningInput>
    create: XOR<DefinitionCreateWithoutMeaningInput, DefinitionUncheckedCreateWithoutMeaningInput>
  }

  export type DefinitionUpdateWithWhereUniqueWithoutMeaningInput = {
    where: DefinitionWhereUniqueInput
    data: XOR<DefinitionUpdateWithoutMeaningInput, DefinitionUncheckedUpdateWithoutMeaningInput>
  }

  export type DefinitionUpdateManyWithWhereWithoutMeaningInput = {
    where: DefinitionScalarWhereInput
    data: XOR<DefinitionUpdateManyMutationInput, DefinitionUncheckedUpdateManyWithoutMeaningInput>
  }

  export type DefinitionScalarWhereInput = {
    AND?: DefinitionScalarWhereInput | DefinitionScalarWhereInput[]
    OR?: DefinitionScalarWhereInput[]
    NOT?: DefinitionScalarWhereInput | DefinitionScalarWhereInput[]
    definitionId?: StringFilter<"Definition"> | string
    definition?: StringFilter<"Definition"> | string
    example?: StringNullableFilter<"Definition"> | string | null
    meaningId?: StringFilter<"Definition"> | string
  }

  export type SynonymUpsertWithWhereUniqueWithoutMeaningInput = {
    where: SynonymWhereUniqueInput
    update: XOR<SynonymUpdateWithoutMeaningInput, SynonymUncheckedUpdateWithoutMeaningInput>
    create: XOR<SynonymCreateWithoutMeaningInput, SynonymUncheckedCreateWithoutMeaningInput>
  }

  export type SynonymUpdateWithWhereUniqueWithoutMeaningInput = {
    where: SynonymWhereUniqueInput
    data: XOR<SynonymUpdateWithoutMeaningInput, SynonymUncheckedUpdateWithoutMeaningInput>
  }

  export type SynonymUpdateManyWithWhereWithoutMeaningInput = {
    where: SynonymScalarWhereInput
    data: XOR<SynonymUpdateManyMutationInput, SynonymUncheckedUpdateManyWithoutMeaningInput>
  }

  export type SynonymScalarWhereInput = {
    AND?: SynonymScalarWhereInput | SynonymScalarWhereInput[]
    OR?: SynonymScalarWhereInput[]
    NOT?: SynonymScalarWhereInput | SynonymScalarWhereInput[]
    synonymId?: StringFilter<"Synonym"> | string
    word?: StringFilter<"Synonym"> | string
    meaningId?: StringFilter<"Synonym"> | string
  }

  export type AntonymUpsertWithWhereUniqueWithoutMeaningInput = {
    where: AntonymWhereUniqueInput
    update: XOR<AntonymUpdateWithoutMeaningInput, AntonymUncheckedUpdateWithoutMeaningInput>
    create: XOR<AntonymCreateWithoutMeaningInput, AntonymUncheckedCreateWithoutMeaningInput>
  }

  export type AntonymUpdateWithWhereUniqueWithoutMeaningInput = {
    where: AntonymWhereUniqueInput
    data: XOR<AntonymUpdateWithoutMeaningInput, AntonymUncheckedUpdateWithoutMeaningInput>
  }

  export type AntonymUpdateManyWithWhereWithoutMeaningInput = {
    where: AntonymScalarWhereInput
    data: XOR<AntonymUpdateManyMutationInput, AntonymUncheckedUpdateManyWithoutMeaningInput>
  }

  export type AntonymScalarWhereInput = {
    AND?: AntonymScalarWhereInput | AntonymScalarWhereInput[]
    OR?: AntonymScalarWhereInput[]
    NOT?: AntonymScalarWhereInput | AntonymScalarWhereInput[]
    antonymId?: StringFilter<"Antonym"> | string
    word?: StringFilter<"Antonym"> | string
    meaningId?: StringFilter<"Antonym"> | string
  }

  export type WordCreateWithoutPhoneticsInput = {
    wordId?: string
    word: string
    isFavorite: boolean
    status?: $Enums.WordStatus
    createdAt?: Date | string
    meanings?: MeaningCreateNestedManyWithoutWordInput
    license?: LicenseCreateNestedOneWithoutWordsInput
    sourceUrls?: SourceUrlCreateNestedManyWithoutWordInput
    history?: UserWordHistoryCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateWithoutPhoneticsInput = {
    wordId?: string
    word: string
    isFavorite: boolean
    licenseId?: string | null
    status?: $Enums.WordStatus
    createdAt?: Date | string
    meanings?: MeaningUncheckedCreateNestedManyWithoutWordInput
    sourceUrls?: SourceUrlUncheckedCreateNestedManyWithoutWordInput
    history?: UserWordHistoryUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordCreateOrConnectWithoutPhoneticsInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutPhoneticsInput, WordUncheckedCreateWithoutPhoneticsInput>
  }

  export type LicenseCreateWithoutPhoneticsInput = {
    licenseId?: string
    name: string
    url: string
    words?: WordCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutPhoneticsInput = {
    licenseId?: string
    name: string
    url: string
    words?: WordUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutPhoneticsInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutPhoneticsInput, LicenseUncheckedCreateWithoutPhoneticsInput>
  }

  export type WordUpsertWithoutPhoneticsInput = {
    update: XOR<WordUpdateWithoutPhoneticsInput, WordUncheckedUpdateWithoutPhoneticsInput>
    create: XOR<WordCreateWithoutPhoneticsInput, WordUncheckedCreateWithoutPhoneticsInput>
    where?: WordWhereInput
  }

  export type WordUpdateToOneWithWhereWithoutPhoneticsInput = {
    where?: WordWhereInput
    data: XOR<WordUpdateWithoutPhoneticsInput, WordUncheckedUpdateWithoutPhoneticsInput>
  }

  export type WordUpdateWithoutPhoneticsInput = {
    wordId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meanings?: MeaningUpdateManyWithoutWordNestedInput
    license?: LicenseUpdateOneWithoutWordsNestedInput
    sourceUrls?: SourceUrlUpdateManyWithoutWordNestedInput
    history?: UserWordHistoryUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateWithoutPhoneticsInput = {
    wordId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meanings?: MeaningUncheckedUpdateManyWithoutWordNestedInput
    sourceUrls?: SourceUrlUncheckedUpdateManyWithoutWordNestedInput
    history?: UserWordHistoryUncheckedUpdateManyWithoutWordNestedInput
  }

  export type LicenseUpsertWithoutPhoneticsInput = {
    update: XOR<LicenseUpdateWithoutPhoneticsInput, LicenseUncheckedUpdateWithoutPhoneticsInput>
    create: XOR<LicenseCreateWithoutPhoneticsInput, LicenseUncheckedCreateWithoutPhoneticsInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutPhoneticsInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutPhoneticsInput, LicenseUncheckedUpdateWithoutPhoneticsInput>
  }

  export type LicenseUpdateWithoutPhoneticsInput = {
    licenseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    words?: WordUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutPhoneticsInput = {
    licenseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    words?: WordUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type WordCreateWithoutSourceUrlsInput = {
    wordId?: string
    word: string
    isFavorite: boolean
    status?: $Enums.WordStatus
    createdAt?: Date | string
    phonetics?: PhoneticCreateNestedManyWithoutWordInput
    meanings?: MeaningCreateNestedManyWithoutWordInput
    license?: LicenseCreateNestedOneWithoutWordsInput
    history?: UserWordHistoryCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateWithoutSourceUrlsInput = {
    wordId?: string
    word: string
    isFavorite: boolean
    licenseId?: string | null
    status?: $Enums.WordStatus
    createdAt?: Date | string
    phonetics?: PhoneticUncheckedCreateNestedManyWithoutWordInput
    meanings?: MeaningUncheckedCreateNestedManyWithoutWordInput
    history?: UserWordHistoryUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordCreateOrConnectWithoutSourceUrlsInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutSourceUrlsInput, WordUncheckedCreateWithoutSourceUrlsInput>
  }

  export type WordUpsertWithoutSourceUrlsInput = {
    update: XOR<WordUpdateWithoutSourceUrlsInput, WordUncheckedUpdateWithoutSourceUrlsInput>
    create: XOR<WordCreateWithoutSourceUrlsInput, WordUncheckedCreateWithoutSourceUrlsInput>
    where?: WordWhereInput
  }

  export type WordUpdateToOneWithWhereWithoutSourceUrlsInput = {
    where?: WordWhereInput
    data: XOR<WordUpdateWithoutSourceUrlsInput, WordUncheckedUpdateWithoutSourceUrlsInput>
  }

  export type WordUpdateWithoutSourceUrlsInput = {
    wordId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phonetics?: PhoneticUpdateManyWithoutWordNestedInput
    meanings?: MeaningUpdateManyWithoutWordNestedInput
    license?: LicenseUpdateOneWithoutWordsNestedInput
    history?: UserWordHistoryUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateWithoutSourceUrlsInput = {
    wordId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phonetics?: PhoneticUncheckedUpdateManyWithoutWordNestedInput
    meanings?: MeaningUncheckedUpdateManyWithoutWordNestedInput
    history?: UserWordHistoryUncheckedUpdateManyWithoutWordNestedInput
  }

  export type MeaningCreateWithoutSynonymsInput = {
    meaningId?: string
    partOfSpeech: string
    word: WordCreateNestedOneWithoutMeaningsInput
    definitions?: DefinitionCreateNestedManyWithoutMeaningInput
    antonyms?: AntonymCreateNestedManyWithoutMeaningInput
  }

  export type MeaningUncheckedCreateWithoutSynonymsInput = {
    meaningId?: string
    partOfSpeech: string
    wordId: string
    definitions?: DefinitionUncheckedCreateNestedManyWithoutMeaningInput
    antonyms?: AntonymUncheckedCreateNestedManyWithoutMeaningInput
  }

  export type MeaningCreateOrConnectWithoutSynonymsInput = {
    where: MeaningWhereUniqueInput
    create: XOR<MeaningCreateWithoutSynonymsInput, MeaningUncheckedCreateWithoutSynonymsInput>
  }

  export type MeaningUpsertWithoutSynonymsInput = {
    update: XOR<MeaningUpdateWithoutSynonymsInput, MeaningUncheckedUpdateWithoutSynonymsInput>
    create: XOR<MeaningCreateWithoutSynonymsInput, MeaningUncheckedCreateWithoutSynonymsInput>
    where?: MeaningWhereInput
  }

  export type MeaningUpdateToOneWithWhereWithoutSynonymsInput = {
    where?: MeaningWhereInput
    data: XOR<MeaningUpdateWithoutSynonymsInput, MeaningUncheckedUpdateWithoutSynonymsInput>
  }

  export type MeaningUpdateWithoutSynonymsInput = {
    meaningId?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    word?: WordUpdateOneRequiredWithoutMeaningsNestedInput
    definitions?: DefinitionUpdateManyWithoutMeaningNestedInput
    antonyms?: AntonymUpdateManyWithoutMeaningNestedInput
  }

  export type MeaningUncheckedUpdateWithoutSynonymsInput = {
    meaningId?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    definitions?: DefinitionUncheckedUpdateManyWithoutMeaningNestedInput
    antonyms?: AntonymUncheckedUpdateManyWithoutMeaningNestedInput
  }

  export type UserWordHistoryCreateWithoutUserInput = {
    userWordHistoryId?: string
    lastVisitedAt?: Date | string
    word: WordCreateNestedOneWithoutHistoryInput
  }

  export type UserWordHistoryUncheckedCreateWithoutUserInput = {
    userWordHistoryId?: string
    wordId: string
    lastVisitedAt?: Date | string
  }

  export type UserWordHistoryCreateOrConnectWithoutUserInput = {
    where: UserWordHistoryWhereUniqueInput
    create: XOR<UserWordHistoryCreateWithoutUserInput, UserWordHistoryUncheckedCreateWithoutUserInput>
  }

  export type UserWordHistoryCreateManyUserInputEnvelope = {
    data: UserWordHistoryCreateManyUserInput | UserWordHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserWordHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: UserWordHistoryWhereUniqueInput
    update: XOR<UserWordHistoryUpdateWithoutUserInput, UserWordHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<UserWordHistoryCreateWithoutUserInput, UserWordHistoryUncheckedCreateWithoutUserInput>
  }

  export type UserWordHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: UserWordHistoryWhereUniqueInput
    data: XOR<UserWordHistoryUpdateWithoutUserInput, UserWordHistoryUncheckedUpdateWithoutUserInput>
  }

  export type UserWordHistoryUpdateManyWithWhereWithoutUserInput = {
    where: UserWordHistoryScalarWhereInput
    data: XOR<UserWordHistoryUpdateManyMutationInput, UserWordHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type UserWordHistoryScalarWhereInput = {
    AND?: UserWordHistoryScalarWhereInput | UserWordHistoryScalarWhereInput[]
    OR?: UserWordHistoryScalarWhereInput[]
    NOT?: UserWordHistoryScalarWhereInput | UserWordHistoryScalarWhereInput[]
    userWordHistoryId?: StringFilter<"UserWordHistory"> | string
    userId?: StringFilter<"UserWordHistory"> | string
    wordId?: StringFilter<"UserWordHistory"> | string
    lastVisitedAt?: DateTimeFilter<"UserWordHistory"> | Date | string
  }

  export type UserCreateWithoutHistoryInput = {
    userId?: string
    email: string
    password: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutHistoryInput = {
    userId?: string
    email: string
    password: string
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type WordCreateWithoutHistoryInput = {
    wordId?: string
    word: string
    isFavorite: boolean
    status?: $Enums.WordStatus
    createdAt?: Date | string
    phonetics?: PhoneticCreateNestedManyWithoutWordInput
    meanings?: MeaningCreateNestedManyWithoutWordInput
    license?: LicenseCreateNestedOneWithoutWordsInput
    sourceUrls?: SourceUrlCreateNestedManyWithoutWordInput
  }

  export type WordUncheckedCreateWithoutHistoryInput = {
    wordId?: string
    word: string
    isFavorite: boolean
    licenseId?: string | null
    status?: $Enums.WordStatus
    createdAt?: Date | string
    phonetics?: PhoneticUncheckedCreateNestedManyWithoutWordInput
    meanings?: MeaningUncheckedCreateNestedManyWithoutWordInput
    sourceUrls?: SourceUrlUncheckedCreateNestedManyWithoutWordInput
  }

  export type WordCreateOrConnectWithoutHistoryInput = {
    where: WordWhereUniqueInput
    create: XOR<WordCreateWithoutHistoryInput, WordUncheckedCreateWithoutHistoryInput>
  }

  export type UserUpsertWithoutHistoryInput = {
    update: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateWithoutHistoryInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutHistoryInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WordUpsertWithoutHistoryInput = {
    update: XOR<WordUpdateWithoutHistoryInput, WordUncheckedUpdateWithoutHistoryInput>
    create: XOR<WordCreateWithoutHistoryInput, WordUncheckedCreateWithoutHistoryInput>
    where?: WordWhereInput
  }

  export type WordUpdateToOneWithWhereWithoutHistoryInput = {
    where?: WordWhereInput
    data: XOR<WordUpdateWithoutHistoryInput, WordUncheckedUpdateWithoutHistoryInput>
  }

  export type WordUpdateWithoutHistoryInput = {
    wordId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phonetics?: PhoneticUpdateManyWithoutWordNestedInput
    meanings?: MeaningUpdateManyWithoutWordNestedInput
    license?: LicenseUpdateOneWithoutWordsNestedInput
    sourceUrls?: SourceUrlUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateWithoutHistoryInput = {
    wordId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phonetics?: PhoneticUncheckedUpdateManyWithoutWordNestedInput
    meanings?: MeaningUncheckedUpdateManyWithoutWordNestedInput
    sourceUrls?: SourceUrlUncheckedUpdateManyWithoutWordNestedInput
  }

  export type PhoneticCreateWithoutWordInput = {
    phoneticId?: string
    text?: string | null
    audio: string
    sourceUrl?: string | null
    license?: LicenseCreateNestedOneWithoutPhoneticsInput
  }

  export type PhoneticUncheckedCreateWithoutWordInput = {
    phoneticId?: string
    text?: string | null
    audio: string
    sourceUrl?: string | null
    licenseId?: string | null
  }

  export type PhoneticCreateOrConnectWithoutWordInput = {
    where: PhoneticWhereUniqueInput
    create: XOR<PhoneticCreateWithoutWordInput, PhoneticUncheckedCreateWithoutWordInput>
  }

  export type PhoneticCreateManyWordInputEnvelope = {
    data: PhoneticCreateManyWordInput | PhoneticCreateManyWordInput[]
    skipDuplicates?: boolean
  }

  export type MeaningCreateWithoutWordInput = {
    meaningId?: string
    partOfSpeech: string
    definitions?: DefinitionCreateNestedManyWithoutMeaningInput
    synonyms?: SynonymCreateNestedManyWithoutMeaningInput
    antonyms?: AntonymCreateNestedManyWithoutMeaningInput
  }

  export type MeaningUncheckedCreateWithoutWordInput = {
    meaningId?: string
    partOfSpeech: string
    definitions?: DefinitionUncheckedCreateNestedManyWithoutMeaningInput
    synonyms?: SynonymUncheckedCreateNestedManyWithoutMeaningInput
    antonyms?: AntonymUncheckedCreateNestedManyWithoutMeaningInput
  }

  export type MeaningCreateOrConnectWithoutWordInput = {
    where: MeaningWhereUniqueInput
    create: XOR<MeaningCreateWithoutWordInput, MeaningUncheckedCreateWithoutWordInput>
  }

  export type MeaningCreateManyWordInputEnvelope = {
    data: MeaningCreateManyWordInput | MeaningCreateManyWordInput[]
    skipDuplicates?: boolean
  }

  export type LicenseCreateWithoutWordsInput = {
    licenseId?: string
    name: string
    url: string
    phonetics?: PhoneticCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutWordsInput = {
    licenseId?: string
    name: string
    url: string
    phonetics?: PhoneticUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutWordsInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutWordsInput, LicenseUncheckedCreateWithoutWordsInput>
  }

  export type SourceUrlCreateWithoutWordInput = {
    sourceUrlId?: string
    url: string
  }

  export type SourceUrlUncheckedCreateWithoutWordInput = {
    sourceUrlId?: string
    url: string
  }

  export type SourceUrlCreateOrConnectWithoutWordInput = {
    where: SourceUrlWhereUniqueInput
    create: XOR<SourceUrlCreateWithoutWordInput, SourceUrlUncheckedCreateWithoutWordInput>
  }

  export type SourceUrlCreateManyWordInputEnvelope = {
    data: SourceUrlCreateManyWordInput | SourceUrlCreateManyWordInput[]
    skipDuplicates?: boolean
  }

  export type UserWordHistoryCreateWithoutWordInput = {
    userWordHistoryId?: string
    lastVisitedAt?: Date | string
    user: UserCreateNestedOneWithoutHistoryInput
  }

  export type UserWordHistoryUncheckedCreateWithoutWordInput = {
    userWordHistoryId?: string
    userId: string
    lastVisitedAt?: Date | string
  }

  export type UserWordHistoryCreateOrConnectWithoutWordInput = {
    where: UserWordHistoryWhereUniqueInput
    create: XOR<UserWordHistoryCreateWithoutWordInput, UserWordHistoryUncheckedCreateWithoutWordInput>
  }

  export type UserWordHistoryCreateManyWordInputEnvelope = {
    data: UserWordHistoryCreateManyWordInput | UserWordHistoryCreateManyWordInput[]
    skipDuplicates?: boolean
  }

  export type PhoneticUpsertWithWhereUniqueWithoutWordInput = {
    where: PhoneticWhereUniqueInput
    update: XOR<PhoneticUpdateWithoutWordInput, PhoneticUncheckedUpdateWithoutWordInput>
    create: XOR<PhoneticCreateWithoutWordInput, PhoneticUncheckedCreateWithoutWordInput>
  }

  export type PhoneticUpdateWithWhereUniqueWithoutWordInput = {
    where: PhoneticWhereUniqueInput
    data: XOR<PhoneticUpdateWithoutWordInput, PhoneticUncheckedUpdateWithoutWordInput>
  }

  export type PhoneticUpdateManyWithWhereWithoutWordInput = {
    where: PhoneticScalarWhereInput
    data: XOR<PhoneticUpdateManyMutationInput, PhoneticUncheckedUpdateManyWithoutWordInput>
  }

  export type MeaningUpsertWithWhereUniqueWithoutWordInput = {
    where: MeaningWhereUniqueInput
    update: XOR<MeaningUpdateWithoutWordInput, MeaningUncheckedUpdateWithoutWordInput>
    create: XOR<MeaningCreateWithoutWordInput, MeaningUncheckedCreateWithoutWordInput>
  }

  export type MeaningUpdateWithWhereUniqueWithoutWordInput = {
    where: MeaningWhereUniqueInput
    data: XOR<MeaningUpdateWithoutWordInput, MeaningUncheckedUpdateWithoutWordInput>
  }

  export type MeaningUpdateManyWithWhereWithoutWordInput = {
    where: MeaningScalarWhereInput
    data: XOR<MeaningUpdateManyMutationInput, MeaningUncheckedUpdateManyWithoutWordInput>
  }

  export type MeaningScalarWhereInput = {
    AND?: MeaningScalarWhereInput | MeaningScalarWhereInput[]
    OR?: MeaningScalarWhereInput[]
    NOT?: MeaningScalarWhereInput | MeaningScalarWhereInput[]
    meaningId?: StringFilter<"Meaning"> | string
    partOfSpeech?: StringFilter<"Meaning"> | string
    wordId?: StringFilter<"Meaning"> | string
  }

  export type LicenseUpsertWithoutWordsInput = {
    update: XOR<LicenseUpdateWithoutWordsInput, LicenseUncheckedUpdateWithoutWordsInput>
    create: XOR<LicenseCreateWithoutWordsInput, LicenseUncheckedCreateWithoutWordsInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutWordsInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutWordsInput, LicenseUncheckedUpdateWithoutWordsInput>
  }

  export type LicenseUpdateWithoutWordsInput = {
    licenseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    phonetics?: PhoneticUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutWordsInput = {
    licenseId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    phonetics?: PhoneticUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type SourceUrlUpsertWithWhereUniqueWithoutWordInput = {
    where: SourceUrlWhereUniqueInput
    update: XOR<SourceUrlUpdateWithoutWordInput, SourceUrlUncheckedUpdateWithoutWordInput>
    create: XOR<SourceUrlCreateWithoutWordInput, SourceUrlUncheckedCreateWithoutWordInput>
  }

  export type SourceUrlUpdateWithWhereUniqueWithoutWordInput = {
    where: SourceUrlWhereUniqueInput
    data: XOR<SourceUrlUpdateWithoutWordInput, SourceUrlUncheckedUpdateWithoutWordInput>
  }

  export type SourceUrlUpdateManyWithWhereWithoutWordInput = {
    where: SourceUrlScalarWhereInput
    data: XOR<SourceUrlUpdateManyMutationInput, SourceUrlUncheckedUpdateManyWithoutWordInput>
  }

  export type SourceUrlScalarWhereInput = {
    AND?: SourceUrlScalarWhereInput | SourceUrlScalarWhereInput[]
    OR?: SourceUrlScalarWhereInput[]
    NOT?: SourceUrlScalarWhereInput | SourceUrlScalarWhereInput[]
    sourceUrlId?: StringFilter<"SourceUrl"> | string
    url?: StringFilter<"SourceUrl"> | string
    wordId?: StringFilter<"SourceUrl"> | string
  }

  export type UserWordHistoryUpsertWithWhereUniqueWithoutWordInput = {
    where: UserWordHistoryWhereUniqueInput
    update: XOR<UserWordHistoryUpdateWithoutWordInput, UserWordHistoryUncheckedUpdateWithoutWordInput>
    create: XOR<UserWordHistoryCreateWithoutWordInput, UserWordHistoryUncheckedCreateWithoutWordInput>
  }

  export type UserWordHistoryUpdateWithWhereUniqueWithoutWordInput = {
    where: UserWordHistoryWhereUniqueInput
    data: XOR<UserWordHistoryUpdateWithoutWordInput, UserWordHistoryUncheckedUpdateWithoutWordInput>
  }

  export type UserWordHistoryUpdateManyWithWhereWithoutWordInput = {
    where: UserWordHistoryScalarWhereInput
    data: XOR<UserWordHistoryUpdateManyMutationInput, UserWordHistoryUncheckedUpdateManyWithoutWordInput>
  }

  export type WordCreateManyLicenseInput = {
    wordId?: string
    word: string
    isFavorite: boolean
    status?: $Enums.WordStatus
    createdAt?: Date | string
  }

  export type PhoneticCreateManyLicenseInput = {
    phoneticId?: string
    text?: string | null
    audio: string
    sourceUrl?: string | null
    wordId: string
  }

  export type WordUpdateWithoutLicenseInput = {
    wordId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phonetics?: PhoneticUpdateManyWithoutWordNestedInput
    meanings?: MeaningUpdateManyWithoutWordNestedInput
    sourceUrls?: SourceUrlUpdateManyWithoutWordNestedInput
    history?: UserWordHistoryUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateWithoutLicenseInput = {
    wordId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    phonetics?: PhoneticUncheckedUpdateManyWithoutWordNestedInput
    meanings?: MeaningUncheckedUpdateManyWithoutWordNestedInput
    sourceUrls?: SourceUrlUncheckedUpdateManyWithoutWordNestedInput
    history?: UserWordHistoryUncheckedUpdateManyWithoutWordNestedInput
  }

  export type WordUncheckedUpdateManyWithoutLicenseInput = {
    wordId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    isFavorite?: BoolFieldUpdateOperationsInput | boolean
    status?: EnumWordStatusFieldUpdateOperationsInput | $Enums.WordStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneticUpdateWithoutLicenseInput = {
    phoneticId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    audio?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    word?: WordUpdateOneRequiredWithoutPhoneticsNestedInput
  }

  export type PhoneticUncheckedUpdateWithoutLicenseInput = {
    phoneticId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    audio?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    wordId?: StringFieldUpdateOperationsInput | string
  }

  export type PhoneticUncheckedUpdateManyWithoutLicenseInput = {
    phoneticId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    audio?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    wordId?: StringFieldUpdateOperationsInput | string
  }

  export type DefinitionCreateManyMeaningInput = {
    definitionId?: string
    definition: string
    example?: string | null
  }

  export type SynonymCreateManyMeaningInput = {
    synonymId?: string
    word: string
  }

  export type AntonymCreateManyMeaningInput = {
    antonymId?: string
    word: string
  }

  export type DefinitionUpdateWithoutMeaningInput = {
    definitionId?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DefinitionUncheckedUpdateWithoutMeaningInput = {
    definitionId?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DefinitionUncheckedUpdateManyWithoutMeaningInput = {
    definitionId?: StringFieldUpdateOperationsInput | string
    definition?: StringFieldUpdateOperationsInput | string
    example?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SynonymUpdateWithoutMeaningInput = {
    synonymId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
  }

  export type SynonymUncheckedUpdateWithoutMeaningInput = {
    synonymId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
  }

  export type SynonymUncheckedUpdateManyWithoutMeaningInput = {
    synonymId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
  }

  export type AntonymUpdateWithoutMeaningInput = {
    antonymId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
  }

  export type AntonymUncheckedUpdateWithoutMeaningInput = {
    antonymId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
  }

  export type AntonymUncheckedUpdateManyWithoutMeaningInput = {
    antonymId?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
  }

  export type UserWordHistoryCreateManyUserInput = {
    userWordHistoryId?: string
    wordId: string
    lastVisitedAt?: Date | string
  }

  export type UserWordHistoryUpdateWithoutUserInput = {
    userWordHistoryId?: StringFieldUpdateOperationsInput | string
    lastVisitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    word?: WordUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type UserWordHistoryUncheckedUpdateWithoutUserInput = {
    userWordHistoryId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    lastVisitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWordHistoryUncheckedUpdateManyWithoutUserInput = {
    userWordHistoryId?: StringFieldUpdateOperationsInput | string
    wordId?: StringFieldUpdateOperationsInput | string
    lastVisitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhoneticCreateManyWordInput = {
    phoneticId?: string
    text?: string | null
    audio: string
    sourceUrl?: string | null
    licenseId?: string | null
  }

  export type MeaningCreateManyWordInput = {
    meaningId?: string
    partOfSpeech: string
  }

  export type SourceUrlCreateManyWordInput = {
    sourceUrlId?: string
    url: string
  }

  export type UserWordHistoryCreateManyWordInput = {
    userWordHistoryId?: string
    userId: string
    lastVisitedAt?: Date | string
  }

  export type PhoneticUpdateWithoutWordInput = {
    phoneticId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    audio?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    license?: LicenseUpdateOneWithoutPhoneticsNestedInput
  }

  export type PhoneticUncheckedUpdateWithoutWordInput = {
    phoneticId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    audio?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PhoneticUncheckedUpdateManyWithoutWordInput = {
    phoneticId?: StringFieldUpdateOperationsInput | string
    text?: NullableStringFieldUpdateOperationsInput | string | null
    audio?: StringFieldUpdateOperationsInput | string
    sourceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    licenseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MeaningUpdateWithoutWordInput = {
    meaningId?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    definitions?: DefinitionUpdateManyWithoutMeaningNestedInput
    synonyms?: SynonymUpdateManyWithoutMeaningNestedInput
    antonyms?: AntonymUpdateManyWithoutMeaningNestedInput
  }

  export type MeaningUncheckedUpdateWithoutWordInput = {
    meaningId?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
    definitions?: DefinitionUncheckedUpdateManyWithoutMeaningNestedInput
    synonyms?: SynonymUncheckedUpdateManyWithoutMeaningNestedInput
    antonyms?: AntonymUncheckedUpdateManyWithoutMeaningNestedInput
  }

  export type MeaningUncheckedUpdateManyWithoutWordInput = {
    meaningId?: StringFieldUpdateOperationsInput | string
    partOfSpeech?: StringFieldUpdateOperationsInput | string
  }

  export type SourceUrlUpdateWithoutWordInput = {
    sourceUrlId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SourceUrlUncheckedUpdateWithoutWordInput = {
    sourceUrlId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SourceUrlUncheckedUpdateManyWithoutWordInput = {
    sourceUrlId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type UserWordHistoryUpdateWithoutWordInput = {
    userWordHistoryId?: StringFieldUpdateOperationsInput | string
    lastVisitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type UserWordHistoryUncheckedUpdateWithoutWordInput = {
    userWordHistoryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastVisitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWordHistoryUncheckedUpdateManyWithoutWordInput = {
    userWordHistoryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    lastVisitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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