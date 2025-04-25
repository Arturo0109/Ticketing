
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
 * Model Administrador
 * 
 */
export type Administrador = $Result.DefaultSelection<Prisma.$AdministradorPayload>
/**
 * Model Cliente
 * 
 */
export type Cliente = $Result.DefaultSelection<Prisma.$ClientePayload>
/**
 * Model Evento
 * 
 */
export type Evento = $Result.DefaultSelection<Prisma.$EventoPayload>
/**
 * Model Ubicacion
 * 
 */
export type Ubicacion = $Result.DefaultSelection<Prisma.$UbicacionPayload>
/**
 * Model Funcion
 * 
 */
export type Funcion = $Result.DefaultSelection<Prisma.$FuncionPayload>
/**
 * Model TipoBoleta
 * 
 */
export type TipoBoleta = $Result.DefaultSelection<Prisma.$TipoBoletaPayload>
/**
 * Model Compra
 * 
 */
export type Compra = $Result.DefaultSelection<Prisma.$CompraPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Administradors
 * const administradors = await prisma.administrador.findMany()
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
   * // Fetch zero or more Administradors
   * const administradors = await prisma.administrador.findMany()
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
   * `prisma.administrador`: Exposes CRUD operations for the **Administrador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administradors
    * const administradors = await prisma.administrador.findMany()
    * ```
    */
  get administrador(): Prisma.AdministradorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cliente`: Exposes CRUD operations for the **Cliente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clientes
    * const clientes = await prisma.cliente.findMany()
    * ```
    */
  get cliente(): Prisma.ClienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.evento`: Exposes CRUD operations for the **Evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.EventoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ubicacion`: Exposes CRUD operations for the **Ubicacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ubicacions
    * const ubicacions = await prisma.ubicacion.findMany()
    * ```
    */
  get ubicacion(): Prisma.UbicacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.funcion`: Exposes CRUD operations for the **Funcion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funcions
    * const funcions = await prisma.funcion.findMany()
    * ```
    */
  get funcion(): Prisma.FuncionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tipoBoleta`: Exposes CRUD operations for the **TipoBoleta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TipoBoletas
    * const tipoBoletas = await prisma.tipoBoleta.findMany()
    * ```
    */
  get tipoBoleta(): Prisma.TipoBoletaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compra`: Exposes CRUD operations for the **Compra** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Compras
    * const compras = await prisma.compra.findMany()
    * ```
    */
  get compra(): Prisma.CompraDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Administrador: 'Administrador',
    Cliente: 'Cliente',
    Evento: 'Evento',
    Ubicacion: 'Ubicacion',
    Funcion: 'Funcion',
    TipoBoleta: 'TipoBoleta',
    Compra: 'Compra'
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
      modelProps: "administrador" | "cliente" | "evento" | "ubicacion" | "funcion" | "tipoBoleta" | "compra"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Administrador: {
        payload: Prisma.$AdministradorPayload<ExtArgs>
        fields: Prisma.AdministradorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministradorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministradorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findFirst: {
            args: Prisma.AdministradorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministradorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          findMany: {
            args: Prisma.AdministradorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          create: {
            args: Prisma.AdministradorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          createMany: {
            args: Prisma.AdministradorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdministradorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          delete: {
            args: Prisma.AdministradorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          update: {
            args: Prisma.AdministradorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          deleteMany: {
            args: Prisma.AdministradorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministradorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdministradorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>[]
          }
          upsert: {
            args: Prisma.AdministradorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministradorPayload>
          }
          aggregate: {
            args: Prisma.AdministradorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrador>
          }
          groupBy: {
            args: Prisma.AdministradorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministradorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministradorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministradorCountAggregateOutputType> | number
          }
        }
      }
      Cliente: {
        payload: Prisma.$ClientePayload<ExtArgs>
        fields: Prisma.ClienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findFirst: {
            args: Prisma.ClienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          findMany: {
            args: Prisma.ClienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          create: {
            args: Prisma.ClienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          createMany: {
            args: Prisma.ClienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClienteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          delete: {
            args: Prisma.ClienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          update: {
            args: Prisma.ClienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          deleteMany: {
            args: Prisma.ClienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClienteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>[]
          }
          upsert: {
            args: Prisma.ClienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientePayload>
          }
          aggregate: {
            args: Prisma.ClienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCliente>
          }
          groupBy: {
            args: Prisma.ClienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClienteCountArgs<ExtArgs>
            result: $Utils.Optional<ClienteCountAggregateOutputType> | number
          }
        }
      }
      Evento: {
        payload: Prisma.$EventoPayload<ExtArgs>
        fields: Prisma.EventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findFirst: {
            args: Prisma.EventoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findMany: {
            args: Prisma.EventoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          create: {
            args: Prisma.EventoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          createMany: {
            args: Prisma.EventoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          delete: {
            args: Prisma.EventoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          update: {
            args: Prisma.EventoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          deleteMany: {
            args: Prisma.EventoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          upsert: {
            args: Prisma.EventoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.EventoGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoCountArgs<ExtArgs>
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
          }
        }
      }
      Ubicacion: {
        payload: Prisma.$UbicacionPayload<ExtArgs>
        fields: Prisma.UbicacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UbicacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UbicacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          findFirst: {
            args: Prisma.UbicacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UbicacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          findMany: {
            args: Prisma.UbicacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>[]
          }
          create: {
            args: Prisma.UbicacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          createMany: {
            args: Prisma.UbicacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UbicacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>[]
          }
          delete: {
            args: Prisma.UbicacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          update: {
            args: Prisma.UbicacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          deleteMany: {
            args: Prisma.UbicacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UbicacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UbicacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>[]
          }
          upsert: {
            args: Prisma.UbicacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UbicacionPayload>
          }
          aggregate: {
            args: Prisma.UbicacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUbicacion>
          }
          groupBy: {
            args: Prisma.UbicacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UbicacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UbicacionCountArgs<ExtArgs>
            result: $Utils.Optional<UbicacionCountAggregateOutputType> | number
          }
        }
      }
      Funcion: {
        payload: Prisma.$FuncionPayload<ExtArgs>
        fields: Prisma.FuncionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FuncionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FuncionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionPayload>
          }
          findFirst: {
            args: Prisma.FuncionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FuncionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionPayload>
          }
          findMany: {
            args: Prisma.FuncionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionPayload>[]
          }
          create: {
            args: Prisma.FuncionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionPayload>
          }
          createMany: {
            args: Prisma.FuncionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FuncionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionPayload>[]
          }
          delete: {
            args: Prisma.FuncionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionPayload>
          }
          update: {
            args: Prisma.FuncionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionPayload>
          }
          deleteMany: {
            args: Prisma.FuncionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FuncionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FuncionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionPayload>[]
          }
          upsert: {
            args: Prisma.FuncionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FuncionPayload>
          }
          aggregate: {
            args: Prisma.FuncionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFuncion>
          }
          groupBy: {
            args: Prisma.FuncionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FuncionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FuncionCountArgs<ExtArgs>
            result: $Utils.Optional<FuncionCountAggregateOutputType> | number
          }
        }
      }
      TipoBoleta: {
        payload: Prisma.$TipoBoletaPayload<ExtArgs>
        fields: Prisma.TipoBoletaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TipoBoletaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBoletaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TipoBoletaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBoletaPayload>
          }
          findFirst: {
            args: Prisma.TipoBoletaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBoletaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TipoBoletaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBoletaPayload>
          }
          findMany: {
            args: Prisma.TipoBoletaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBoletaPayload>[]
          }
          create: {
            args: Prisma.TipoBoletaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBoletaPayload>
          }
          createMany: {
            args: Prisma.TipoBoletaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TipoBoletaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBoletaPayload>[]
          }
          delete: {
            args: Prisma.TipoBoletaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBoletaPayload>
          }
          update: {
            args: Prisma.TipoBoletaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBoletaPayload>
          }
          deleteMany: {
            args: Prisma.TipoBoletaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TipoBoletaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TipoBoletaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBoletaPayload>[]
          }
          upsert: {
            args: Prisma.TipoBoletaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TipoBoletaPayload>
          }
          aggregate: {
            args: Prisma.TipoBoletaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTipoBoleta>
          }
          groupBy: {
            args: Prisma.TipoBoletaGroupByArgs<ExtArgs>
            result: $Utils.Optional<TipoBoletaGroupByOutputType>[]
          }
          count: {
            args: Prisma.TipoBoletaCountArgs<ExtArgs>
            result: $Utils.Optional<TipoBoletaCountAggregateOutputType> | number
          }
        }
      }
      Compra: {
        payload: Prisma.$CompraPayload<ExtArgs>
        fields: Prisma.CompraFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompraFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompraFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          findFirst: {
            args: Prisma.CompraFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompraFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          findMany: {
            args: Prisma.CompraFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>[]
          }
          create: {
            args: Prisma.CompraCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          createMany: {
            args: Prisma.CompraCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompraCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>[]
          }
          delete: {
            args: Prisma.CompraDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          update: {
            args: Prisma.CompraUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          deleteMany: {
            args: Prisma.CompraDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompraUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompraUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>[]
          }
          upsert: {
            args: Prisma.CompraUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompraPayload>
          }
          aggregate: {
            args: Prisma.CompraAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompra>
          }
          groupBy: {
            args: Prisma.CompraGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompraGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompraCountArgs<ExtArgs>
            result: $Utils.Optional<CompraCountAggregateOutputType> | number
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
    administrador?: AdministradorOmit
    cliente?: ClienteOmit
    evento?: EventoOmit
    ubicacion?: UbicacionOmit
    funcion?: FuncionOmit
    tipoBoleta?: TipoBoletaOmit
    compra?: CompraOmit
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
   * Count Type AdministradorCountOutputType
   */

  export type AdministradorCountOutputType = {
    eventos: number
  }

  export type AdministradorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | AdministradorCountOutputTypeCountEventosArgs
  }

  // Custom InputTypes
  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdministradorCountOutputType
     */
    select?: AdministradorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdministradorCountOutputType without action
   */
  export type AdministradorCountOutputTypeCountEventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
  }


  /**
   * Count Type ClienteCountOutputType
   */

  export type ClienteCountOutputType = {
    compras: number
  }

  export type ClienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compras?: boolean | ClienteCountOutputTypeCountComprasArgs
  }

  // Custom InputTypes
  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClienteCountOutputType
     */
    select?: ClienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClienteCountOutputType without action
   */
  export type ClienteCountOutputTypeCountComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
  }


  /**
   * Count Type EventoCountOutputType
   */

  export type EventoCountOutputType = {
    funciones: number
  }

  export type EventoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funciones?: boolean | EventoCountOutputTypeCountFuncionesArgs
  }

  // Custom InputTypes
  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoCountOutputType
     */
    select?: EventoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountFuncionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionWhereInput
  }


  /**
   * Count Type UbicacionCountOutputType
   */

  export type UbicacionCountOutputType = {
    funciones: number
  }

  export type UbicacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funciones?: boolean | UbicacionCountOutputTypeCountFuncionesArgs
  }

  // Custom InputTypes
  /**
   * UbicacionCountOutputType without action
   */
  export type UbicacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UbicacionCountOutputType
     */
    select?: UbicacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UbicacionCountOutputType without action
   */
  export type UbicacionCountOutputTypeCountFuncionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionWhereInput
  }


  /**
   * Count Type FuncionCountOutputType
   */

  export type FuncionCountOutputType = {
    tipoBoletas: number
  }

  export type FuncionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tipoBoletas?: boolean | FuncionCountOutputTypeCountTipoBoletasArgs
  }

  // Custom InputTypes
  /**
   * FuncionCountOutputType without action
   */
  export type FuncionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FuncionCountOutputType
     */
    select?: FuncionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FuncionCountOutputType without action
   */
  export type FuncionCountOutputTypeCountTipoBoletasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoBoletaWhereInput
  }


  /**
   * Count Type TipoBoletaCountOutputType
   */

  export type TipoBoletaCountOutputType = {
    compras: number
  }

  export type TipoBoletaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compras?: boolean | TipoBoletaCountOutputTypeCountComprasArgs
  }

  // Custom InputTypes
  /**
   * TipoBoletaCountOutputType without action
   */
  export type TipoBoletaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBoletaCountOutputType
     */
    select?: TipoBoletaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TipoBoletaCountOutputType without action
   */
  export type TipoBoletaCountOutputTypeCountComprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Administrador
   */

  export type AggregateAdministrador = {
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  export type AdministradorAvgAggregateOutputType = {
    cedulaAdm: number | null
    estado: number | null
  }

  export type AdministradorSumAggregateOutputType = {
    cedulaAdm: number | null
    estado: number | null
  }

  export type AdministradorMinAggregateOutputType = {
    cedulaAdm: number | null
    nombres: string | null
    apellidos: string | null
    direccion: string | null
    municipio: string | null
    departamento: string | null
    email: string | null
    telefono: string | null
    contrasena: string | null
    estado: number | null
  }

  export type AdministradorMaxAggregateOutputType = {
    cedulaAdm: number | null
    nombres: string | null
    apellidos: string | null
    direccion: string | null
    municipio: string | null
    departamento: string | null
    email: string | null
    telefono: string | null
    contrasena: string | null
    estado: number | null
  }

  export type AdministradorCountAggregateOutputType = {
    cedulaAdm: number
    nombres: number
    apellidos: number
    direccion: number
    municipio: number
    departamento: number
    email: number
    telefono: number
    contrasena: number
    estado: number
    _all: number
  }


  export type AdministradorAvgAggregateInputType = {
    cedulaAdm?: true
    estado?: true
  }

  export type AdministradorSumAggregateInputType = {
    cedulaAdm?: true
    estado?: true
  }

  export type AdministradorMinAggregateInputType = {
    cedulaAdm?: true
    nombres?: true
    apellidos?: true
    direccion?: true
    municipio?: true
    departamento?: true
    email?: true
    telefono?: true
    contrasena?: true
    estado?: true
  }

  export type AdministradorMaxAggregateInputType = {
    cedulaAdm?: true
    nombres?: true
    apellidos?: true
    direccion?: true
    municipio?: true
    departamento?: true
    email?: true
    telefono?: true
    contrasena?: true
    estado?: true
  }

  export type AdministradorCountAggregateInputType = {
    cedulaAdm?: true
    nombres?: true
    apellidos?: true
    direccion?: true
    municipio?: true
    departamento?: true
    email?: true
    telefono?: true
    contrasena?: true
    estado?: true
    _all?: true
  }

  export type AdministradorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrador to aggregate.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administradors
    **/
    _count?: true | AdministradorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdministradorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdministradorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministradorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministradorMaxAggregateInputType
  }

  export type GetAdministradorAggregateType<T extends AdministradorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrador[P]>
      : GetScalarType<T[P], AggregateAdministrador[P]>
  }




  export type AdministradorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministradorWhereInput
    orderBy?: AdministradorOrderByWithAggregationInput | AdministradorOrderByWithAggregationInput[]
    by: AdministradorScalarFieldEnum[] | AdministradorScalarFieldEnum
    having?: AdministradorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministradorCountAggregateInputType | true
    _avg?: AdministradorAvgAggregateInputType
    _sum?: AdministradorSumAggregateInputType
    _min?: AdministradorMinAggregateInputType
    _max?: AdministradorMaxAggregateInputType
  }

  export type AdministradorGroupByOutputType = {
    cedulaAdm: number
    nombres: string
    apellidos: string
    direccion: string
    municipio: string
    departamento: string
    email: string
    telefono: string
    contrasena: string
    estado: number
    _count: AdministradorCountAggregateOutputType | null
    _avg: AdministradorAvgAggregateOutputType | null
    _sum: AdministradorSumAggregateOutputType | null
    _min: AdministradorMinAggregateOutputType | null
    _max: AdministradorMaxAggregateOutputType | null
  }

  type GetAdministradorGroupByPayload<T extends AdministradorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministradorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministradorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministradorGroupByOutputType[P]>
        }
      >
    >


  export type AdministradorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cedulaAdm?: boolean
    nombres?: boolean
    apellidos?: boolean
    direccion?: boolean
    municipio?: boolean
    departamento?: boolean
    email?: boolean
    telefono?: boolean
    contrasena?: boolean
    estado?: boolean
    eventos?: boolean | Administrador$eventosArgs<ExtArgs>
    _count?: boolean | AdministradorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cedulaAdm?: boolean
    nombres?: boolean
    apellidos?: boolean
    direccion?: boolean
    municipio?: boolean
    departamento?: boolean
    email?: boolean
    telefono?: boolean
    contrasena?: boolean
    estado?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cedulaAdm?: boolean
    nombres?: boolean
    apellidos?: boolean
    direccion?: boolean
    municipio?: boolean
    departamento?: boolean
    email?: boolean
    telefono?: boolean
    contrasena?: boolean
    estado?: boolean
  }, ExtArgs["result"]["administrador"]>

  export type AdministradorSelectScalar = {
    cedulaAdm?: boolean
    nombres?: boolean
    apellidos?: boolean
    direccion?: boolean
    municipio?: boolean
    departamento?: boolean
    email?: boolean
    telefono?: boolean
    contrasena?: boolean
    estado?: boolean
  }

  export type AdministradorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cedulaAdm" | "nombres" | "apellidos" | "direccion" | "municipio" | "departamento" | "email" | "telefono" | "contrasena" | "estado", ExtArgs["result"]["administrador"]>
  export type AdministradorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventos?: boolean | Administrador$eventosArgs<ExtArgs>
    _count?: boolean | AdministradorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdministradorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdministradorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdministradorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrador"
    objects: {
      eventos: Prisma.$EventoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cedulaAdm: number
      nombres: string
      apellidos: string
      direccion: string
      municipio: string
      departamento: string
      email: string
      telefono: string
      contrasena: string
      estado: number
    }, ExtArgs["result"]["administrador"]>
    composites: {}
  }

  type AdministradorGetPayload<S extends boolean | null | undefined | AdministradorDefaultArgs> = $Result.GetResult<Prisma.$AdministradorPayload, S>

  type AdministradorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdministradorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministradorCountAggregateInputType | true
    }

  export interface AdministradorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrador'], meta: { name: 'Administrador' } }
    /**
     * Find zero or one Administrador that matches the filter.
     * @param {AdministradorFindUniqueArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministradorFindUniqueArgs>(args: SelectSubset<T, AdministradorFindUniqueArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administrador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdministradorFindUniqueOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministradorFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministradorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministradorFindFirstArgs>(args?: SelectSubset<T, AdministradorFindFirstArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindFirstOrThrowArgs} args - Arguments to find a Administrador
     * @example
     * // Get one Administrador
     * const administrador = await prisma.administrador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministradorFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministradorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administradors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administradors
     * const administradors = await prisma.administrador.findMany()
     * 
     * // Get first 10 Administradors
     * const administradors = await prisma.administrador.findMany({ take: 10 })
     * 
     * // Only select the `cedulaAdm`
     * const administradorWithCedulaAdmOnly = await prisma.administrador.findMany({ select: { cedulaAdm: true } })
     * 
     */
    findMany<T extends AdministradorFindManyArgs>(args?: SelectSubset<T, AdministradorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administrador.
     * @param {AdministradorCreateArgs} args - Arguments to create a Administrador.
     * @example
     * // Create one Administrador
     * const Administrador = await prisma.administrador.create({
     *   data: {
     *     // ... data to create a Administrador
     *   }
     * })
     * 
     */
    create<T extends AdministradorCreateArgs>(args: SelectSubset<T, AdministradorCreateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administradors.
     * @param {AdministradorCreateManyArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministradorCreateManyArgs>(args?: SelectSubset<T, AdministradorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Administradors and returns the data saved in the database.
     * @param {AdministradorCreateManyAndReturnArgs} args - Arguments to create many Administradors.
     * @example
     * // Create many Administradors
     * const administrador = await prisma.administrador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Administradors and only return the `cedulaAdm`
     * const administradorWithCedulaAdmOnly = await prisma.administrador.createManyAndReturn({
     *   select: { cedulaAdm: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdministradorCreateManyAndReturnArgs>(args?: SelectSubset<T, AdministradorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Administrador.
     * @param {AdministradorDeleteArgs} args - Arguments to delete one Administrador.
     * @example
     * // Delete one Administrador
     * const Administrador = await prisma.administrador.delete({
     *   where: {
     *     // ... filter to delete one Administrador
     *   }
     * })
     * 
     */
    delete<T extends AdministradorDeleteArgs>(args: SelectSubset<T, AdministradorDeleteArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administrador.
     * @param {AdministradorUpdateArgs} args - Arguments to update one Administrador.
     * @example
     * // Update one Administrador
     * const administrador = await prisma.administrador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministradorUpdateArgs>(args: SelectSubset<T, AdministradorUpdateArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administradors.
     * @param {AdministradorDeleteManyArgs} args - Arguments to filter Administradors to delete.
     * @example
     * // Delete a few Administradors
     * const { count } = await prisma.administrador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministradorDeleteManyArgs>(args?: SelectSubset<T, AdministradorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministradorUpdateManyArgs>(args: SelectSubset<T, AdministradorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administradors and returns the data updated in the database.
     * @param {AdministradorUpdateManyAndReturnArgs} args - Arguments to update many Administradors.
     * @example
     * // Update many Administradors
     * const administrador = await prisma.administrador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Administradors and only return the `cedulaAdm`
     * const administradorWithCedulaAdmOnly = await prisma.administrador.updateManyAndReturn({
     *   select: { cedulaAdm: true },
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
    updateManyAndReturn<T extends AdministradorUpdateManyAndReturnArgs>(args: SelectSubset<T, AdministradorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Administrador.
     * @param {AdministradorUpsertArgs} args - Arguments to update or create a Administrador.
     * @example
     * // Update or create a Administrador
     * const administrador = await prisma.administrador.upsert({
     *   create: {
     *     // ... data to create a Administrador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrador we want to update
     *   }
     * })
     */
    upsert<T extends AdministradorUpsertArgs>(args: SelectSubset<T, AdministradorUpsertArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administradors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorCountArgs} args - Arguments to filter Administradors to count.
     * @example
     * // Count the number of Administradors
     * const count = await prisma.administrador.count({
     *   where: {
     *     // ... the filter for the Administradors we want to count
     *   }
     * })
    **/
    count<T extends AdministradorCountArgs>(
      args?: Subset<T, AdministradorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministradorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdministradorAggregateArgs>(args: Subset<T, AdministradorAggregateArgs>): Prisma.PrismaPromise<GetAdministradorAggregateType<T>>

    /**
     * Group by Administrador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministradorGroupByArgs} args - Group by arguments.
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
      T extends AdministradorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministradorGroupByArgs['orderBy'] }
        : { orderBy?: AdministradorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdministradorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministradorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrador model
   */
  readonly fields: AdministradorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministradorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    eventos<T extends Administrador$eventosArgs<ExtArgs> = {}>(args?: Subset<T, Administrador$eventosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Administrador model
   */
  interface AdministradorFieldRefs {
    readonly cedulaAdm: FieldRef<"Administrador", 'Int'>
    readonly nombres: FieldRef<"Administrador", 'String'>
    readonly apellidos: FieldRef<"Administrador", 'String'>
    readonly direccion: FieldRef<"Administrador", 'String'>
    readonly municipio: FieldRef<"Administrador", 'String'>
    readonly departamento: FieldRef<"Administrador", 'String'>
    readonly email: FieldRef<"Administrador", 'String'>
    readonly telefono: FieldRef<"Administrador", 'String'>
    readonly contrasena: FieldRef<"Administrador", 'String'>
    readonly estado: FieldRef<"Administrador", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Administrador findUnique
   */
  export type AdministradorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findUniqueOrThrow
   */
  export type AdministradorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador findFirst
   */
  export type AdministradorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findFirstOrThrow
   */
  export type AdministradorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administrador to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administradors.
     */
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador findMany
   */
  export type AdministradorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter, which Administradors to fetch.
     */
    where?: AdministradorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administradors to fetch.
     */
    orderBy?: AdministradorOrderByWithRelationInput | AdministradorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administradors.
     */
    cursor?: AdministradorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administradors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administradors.
     */
    skip?: number
    distinct?: AdministradorScalarFieldEnum | AdministradorScalarFieldEnum[]
  }

  /**
   * Administrador create
   */
  export type AdministradorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The data needed to create a Administrador.
     */
    data: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
  }

  /**
   * Administrador createMany
   */
  export type AdministradorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador createManyAndReturn
   */
  export type AdministradorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data used to create many Administradors.
     */
    data: AdministradorCreateManyInput | AdministradorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrador update
   */
  export type AdministradorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The data needed to update a Administrador.
     */
    data: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
    /**
     * Choose, which Administrador to update.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador updateMany
   */
  export type AdministradorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to update.
     */
    limit?: number
  }

  /**
   * Administrador updateManyAndReturn
   */
  export type AdministradorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * The data used to update Administradors.
     */
    data: XOR<AdministradorUpdateManyMutationInput, AdministradorUncheckedUpdateManyInput>
    /**
     * Filter which Administradors to update
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to update.
     */
    limit?: number
  }

  /**
   * Administrador upsert
   */
  export type AdministradorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * The filter to search for the Administrador to update in case it exists.
     */
    where: AdministradorWhereUniqueInput
    /**
     * In case the Administrador found by the `where` argument doesn't exist, create a new Administrador with this data.
     */
    create: XOR<AdministradorCreateInput, AdministradorUncheckedCreateInput>
    /**
     * In case the Administrador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministradorUpdateInput, AdministradorUncheckedUpdateInput>
  }

  /**
   * Administrador delete
   */
  export type AdministradorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
    /**
     * Filter which Administrador to delete.
     */
    where: AdministradorWhereUniqueInput
  }

  /**
   * Administrador deleteMany
   */
  export type AdministradorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administradors to delete
     */
    where?: AdministradorWhereInput
    /**
     * Limit how many Administradors to delete.
     */
    limit?: number
  }

  /**
   * Administrador.eventos
   */
  export type Administrador$eventosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    cursor?: EventoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Administrador without action
   */
  export type AdministradorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrador
     */
    select?: AdministradorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrador
     */
    omit?: AdministradorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministradorInclude<ExtArgs> | null
  }


  /**
   * Model Cliente
   */

  export type AggregateCliente = {
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  export type ClienteAvgAggregateOutputType = {
    cedula: number | null
    estado: number | null
  }

  export type ClienteSumAggregateOutputType = {
    cedula: number | null
    estado: number | null
  }

  export type ClienteMinAggregateOutputType = {
    cedula: number | null
    nombres: string | null
    apellidos: string | null
    direccion: string | null
    departamento: string | null
    municipio: string | null
    email: string | null
    telefono: string | null
    contrasena: string | null
    estado: number | null
  }

  export type ClienteMaxAggregateOutputType = {
    cedula: number | null
    nombres: string | null
    apellidos: string | null
    direccion: string | null
    departamento: string | null
    municipio: string | null
    email: string | null
    telefono: string | null
    contrasena: string | null
    estado: number | null
  }

  export type ClienteCountAggregateOutputType = {
    cedula: number
    nombres: number
    apellidos: number
    direccion: number
    departamento: number
    municipio: number
    email: number
    telefono: number
    contrasena: number
    estado: number
    _all: number
  }


  export type ClienteAvgAggregateInputType = {
    cedula?: true
    estado?: true
  }

  export type ClienteSumAggregateInputType = {
    cedula?: true
    estado?: true
  }

  export type ClienteMinAggregateInputType = {
    cedula?: true
    nombres?: true
    apellidos?: true
    direccion?: true
    departamento?: true
    municipio?: true
    email?: true
    telefono?: true
    contrasena?: true
    estado?: true
  }

  export type ClienteMaxAggregateInputType = {
    cedula?: true
    nombres?: true
    apellidos?: true
    direccion?: true
    departamento?: true
    municipio?: true
    email?: true
    telefono?: true
    contrasena?: true
    estado?: true
  }

  export type ClienteCountAggregateInputType = {
    cedula?: true
    nombres?: true
    apellidos?: true
    direccion?: true
    departamento?: true
    municipio?: true
    email?: true
    telefono?: true
    contrasena?: true
    estado?: true
    _all?: true
  }

  export type ClienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cliente to aggregate.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clientes
    **/
    _count?: true | ClienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClienteMaxAggregateInputType
  }

  export type GetClienteAggregateType<T extends ClienteAggregateArgs> = {
        [P in keyof T & keyof AggregateCliente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCliente[P]>
      : GetScalarType<T[P], AggregateCliente[P]>
  }




  export type ClienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClienteWhereInput
    orderBy?: ClienteOrderByWithAggregationInput | ClienteOrderByWithAggregationInput[]
    by: ClienteScalarFieldEnum[] | ClienteScalarFieldEnum
    having?: ClienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClienteCountAggregateInputType | true
    _avg?: ClienteAvgAggregateInputType
    _sum?: ClienteSumAggregateInputType
    _min?: ClienteMinAggregateInputType
    _max?: ClienteMaxAggregateInputType
  }

  export type ClienteGroupByOutputType = {
    cedula: number
    nombres: string
    apellidos: string
    direccion: string
    departamento: string
    municipio: string
    email: string
    telefono: string
    contrasena: string
    estado: number
    _count: ClienteCountAggregateOutputType | null
    _avg: ClienteAvgAggregateOutputType | null
    _sum: ClienteSumAggregateOutputType | null
    _min: ClienteMinAggregateOutputType | null
    _max: ClienteMaxAggregateOutputType | null
  }

  type GetClienteGroupByPayload<T extends ClienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClienteGroupByOutputType[P]>
            : GetScalarType<T[P], ClienteGroupByOutputType[P]>
        }
      >
    >


  export type ClienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cedula?: boolean
    nombres?: boolean
    apellidos?: boolean
    direccion?: boolean
    departamento?: boolean
    municipio?: boolean
    email?: boolean
    telefono?: boolean
    contrasena?: boolean
    estado?: boolean
    compras?: boolean | Cliente$comprasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cedula?: boolean
    nombres?: boolean
    apellidos?: boolean
    direccion?: boolean
    departamento?: boolean
    municipio?: boolean
    email?: boolean
    telefono?: boolean
    contrasena?: boolean
    estado?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cedula?: boolean
    nombres?: boolean
    apellidos?: boolean
    direccion?: boolean
    departamento?: boolean
    municipio?: boolean
    email?: boolean
    telefono?: boolean
    contrasena?: boolean
    estado?: boolean
  }, ExtArgs["result"]["cliente"]>

  export type ClienteSelectScalar = {
    cedula?: boolean
    nombres?: boolean
    apellidos?: boolean
    direccion?: boolean
    departamento?: boolean
    municipio?: boolean
    email?: boolean
    telefono?: boolean
    contrasena?: boolean
    estado?: boolean
  }

  export type ClienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cedula" | "nombres" | "apellidos" | "direccion" | "departamento" | "municipio" | "email" | "telefono" | "contrasena" | "estado", ExtArgs["result"]["cliente"]>
  export type ClienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compras?: boolean | Cliente$comprasArgs<ExtArgs>
    _count?: boolean | ClienteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClienteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClienteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cliente"
    objects: {
      compras: Prisma.$CompraPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      cedula: number
      nombres: string
      apellidos: string
      direccion: string
      departamento: string
      municipio: string
      email: string
      telefono: string
      contrasena: string
      estado: number
    }, ExtArgs["result"]["cliente"]>
    composites: {}
  }

  type ClienteGetPayload<S extends boolean | null | undefined | ClienteDefaultArgs> = $Result.GetResult<Prisma.$ClientePayload, S>

  type ClienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClienteCountAggregateInputType | true
    }

  export interface ClienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cliente'], meta: { name: 'Cliente' } }
    /**
     * Find zero or one Cliente that matches the filter.
     * @param {ClienteFindUniqueArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClienteFindUniqueArgs>(args: SelectSubset<T, ClienteFindUniqueArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cliente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClienteFindUniqueOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClienteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClienteFindFirstArgs>(args?: SelectSubset<T, ClienteFindFirstArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cliente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindFirstOrThrowArgs} args - Arguments to find a Cliente
     * @example
     * // Get one Cliente
     * const cliente = await prisma.cliente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClienteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clientes
     * const clientes = await prisma.cliente.findMany()
     * 
     * // Get first 10 Clientes
     * const clientes = await prisma.cliente.findMany({ take: 10 })
     * 
     * // Only select the `cedula`
     * const clienteWithCedulaOnly = await prisma.cliente.findMany({ select: { cedula: true } })
     * 
     */
    findMany<T extends ClienteFindManyArgs>(args?: SelectSubset<T, ClienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cliente.
     * @param {ClienteCreateArgs} args - Arguments to create a Cliente.
     * @example
     * // Create one Cliente
     * const Cliente = await prisma.cliente.create({
     *   data: {
     *     // ... data to create a Cliente
     *   }
     * })
     * 
     */
    create<T extends ClienteCreateArgs>(args: SelectSubset<T, ClienteCreateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clientes.
     * @param {ClienteCreateManyArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClienteCreateManyArgs>(args?: SelectSubset<T, ClienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clientes and returns the data saved in the database.
     * @param {ClienteCreateManyAndReturnArgs} args - Arguments to create many Clientes.
     * @example
     * // Create many Clientes
     * const cliente = await prisma.cliente.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clientes and only return the `cedula`
     * const clienteWithCedulaOnly = await prisma.cliente.createManyAndReturn({
     *   select: { cedula: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClienteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClienteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cliente.
     * @param {ClienteDeleteArgs} args - Arguments to delete one Cliente.
     * @example
     * // Delete one Cliente
     * const Cliente = await prisma.cliente.delete({
     *   where: {
     *     // ... filter to delete one Cliente
     *   }
     * })
     * 
     */
    delete<T extends ClienteDeleteArgs>(args: SelectSubset<T, ClienteDeleteArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cliente.
     * @param {ClienteUpdateArgs} args - Arguments to update one Cliente.
     * @example
     * // Update one Cliente
     * const cliente = await prisma.cliente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClienteUpdateArgs>(args: SelectSubset<T, ClienteUpdateArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clientes.
     * @param {ClienteDeleteManyArgs} args - Arguments to filter Clientes to delete.
     * @example
     * // Delete a few Clientes
     * const { count } = await prisma.cliente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClienteDeleteManyArgs>(args?: SelectSubset<T, ClienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClienteUpdateManyArgs>(args: SelectSubset<T, ClienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clientes and returns the data updated in the database.
     * @param {ClienteUpdateManyAndReturnArgs} args - Arguments to update many Clientes.
     * @example
     * // Update many Clientes
     * const cliente = await prisma.cliente.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clientes and only return the `cedula`
     * const clienteWithCedulaOnly = await prisma.cliente.updateManyAndReturn({
     *   select: { cedula: true },
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
    updateManyAndReturn<T extends ClienteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClienteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cliente.
     * @param {ClienteUpsertArgs} args - Arguments to update or create a Cliente.
     * @example
     * // Update or create a Cliente
     * const cliente = await prisma.cliente.upsert({
     *   create: {
     *     // ... data to create a Cliente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cliente we want to update
     *   }
     * })
     */
    upsert<T extends ClienteUpsertArgs>(args: SelectSubset<T, ClienteUpsertArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteCountArgs} args - Arguments to filter Clientes to count.
     * @example
     * // Count the number of Clientes
     * const count = await prisma.cliente.count({
     *   where: {
     *     // ... the filter for the Clientes we want to count
     *   }
     * })
    **/
    count<T extends ClienteCountArgs>(
      args?: Subset<T, ClienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClienteAggregateArgs>(args: Subset<T, ClienteAggregateArgs>): Prisma.PrismaPromise<GetClienteAggregateType<T>>

    /**
     * Group by Cliente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClienteGroupByArgs} args - Group by arguments.
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
      T extends ClienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClienteGroupByArgs['orderBy'] }
        : { orderBy?: ClienteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cliente model
   */
  readonly fields: ClienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cliente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compras<T extends Cliente$comprasArgs<ExtArgs> = {}>(args?: Subset<T, Cliente$comprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cliente model
   */
  interface ClienteFieldRefs {
    readonly cedula: FieldRef<"Cliente", 'Int'>
    readonly nombres: FieldRef<"Cliente", 'String'>
    readonly apellidos: FieldRef<"Cliente", 'String'>
    readonly direccion: FieldRef<"Cliente", 'String'>
    readonly departamento: FieldRef<"Cliente", 'String'>
    readonly municipio: FieldRef<"Cliente", 'String'>
    readonly email: FieldRef<"Cliente", 'String'>
    readonly telefono: FieldRef<"Cliente", 'String'>
    readonly contrasena: FieldRef<"Cliente", 'String'>
    readonly estado: FieldRef<"Cliente", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cliente findUnique
   */
  export type ClienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findUniqueOrThrow
   */
  export type ClienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente findFirst
   */
  export type ClienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findFirstOrThrow
   */
  export type ClienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Cliente to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clientes.
     */
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente findMany
   */
  export type ClienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter, which Clientes to fetch.
     */
    where?: ClienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clientes to fetch.
     */
    orderBy?: ClienteOrderByWithRelationInput | ClienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clientes.
     */
    cursor?: ClienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clientes.
     */
    skip?: number
    distinct?: ClienteScalarFieldEnum | ClienteScalarFieldEnum[]
  }

  /**
   * Cliente create
   */
  export type ClienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Cliente.
     */
    data: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
  }

  /**
   * Cliente createMany
   */
  export type ClienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente createManyAndReturn
   */
  export type ClienteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to create many Clientes.
     */
    data: ClienteCreateManyInput | ClienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cliente update
   */
  export type ClienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Cliente.
     */
    data: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
    /**
     * Choose, which Cliente to update.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente updateMany
   */
  export type ClienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente updateManyAndReturn
   */
  export type ClienteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * The data used to update Clientes.
     */
    data: XOR<ClienteUpdateManyMutationInput, ClienteUncheckedUpdateManyInput>
    /**
     * Filter which Clientes to update
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to update.
     */
    limit?: number
  }

  /**
   * Cliente upsert
   */
  export type ClienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Cliente to update in case it exists.
     */
    where: ClienteWhereUniqueInput
    /**
     * In case the Cliente found by the `where` argument doesn't exist, create a new Cliente with this data.
     */
    create: XOR<ClienteCreateInput, ClienteUncheckedCreateInput>
    /**
     * In case the Cliente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClienteUpdateInput, ClienteUncheckedUpdateInput>
  }

  /**
   * Cliente delete
   */
  export type ClienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
    /**
     * Filter which Cliente to delete.
     */
    where: ClienteWhereUniqueInput
  }

  /**
   * Cliente deleteMany
   */
  export type ClienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clientes to delete
     */
    where?: ClienteWhereInput
    /**
     * Limit how many Clientes to delete.
     */
    limit?: number
  }

  /**
   * Cliente.compras
   */
  export type Cliente$comprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    cursor?: CompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Cliente without action
   */
  export type ClienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cliente
     */
    select?: ClienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cliente
     */
    omit?: ClienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClienteInclude<ExtArgs> | null
  }


  /**
   * Model Evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoAvgAggregateOutputType = {
    idEvento: number | null
    cedulaAdm: number | null
    estado: number | null
  }

  export type EventoSumAggregateOutputType = {
    idEvento: number | null
    cedulaAdm: number | null
    estado: number | null
  }

  export type EventoMinAggregateOutputType = {
    idEvento: number | null
    nombre: string | null
    descripcion: string | null
    fotoPrincipal: string | null
    fotoSecundaria: string | null
    cedulaAdm: number | null
    estado: number | null
  }

  export type EventoMaxAggregateOutputType = {
    idEvento: number | null
    nombre: string | null
    descripcion: string | null
    fotoPrincipal: string | null
    fotoSecundaria: string | null
    cedulaAdm: number | null
    estado: number | null
  }

  export type EventoCountAggregateOutputType = {
    idEvento: number
    nombre: number
    descripcion: number
    fotoPrincipal: number
    fotoSecundaria: number
    cedulaAdm: number
    estado: number
    _all: number
  }


  export type EventoAvgAggregateInputType = {
    idEvento?: true
    cedulaAdm?: true
    estado?: true
  }

  export type EventoSumAggregateInputType = {
    idEvento?: true
    cedulaAdm?: true
    estado?: true
  }

  export type EventoMinAggregateInputType = {
    idEvento?: true
    nombre?: true
    descripcion?: true
    fotoPrincipal?: true
    fotoSecundaria?: true
    cedulaAdm?: true
    estado?: true
  }

  export type EventoMaxAggregateInputType = {
    idEvento?: true
    nombre?: true
    descripcion?: true
    fotoPrincipal?: true
    fotoSecundaria?: true
    cedulaAdm?: true
    estado?: true
  }

  export type EventoCountAggregateInputType = {
    idEvento?: true
    nombre?: true
    descripcion?: true
    fotoPrincipal?: true
    fotoSecundaria?: true
    cedulaAdm?: true
    estado?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evento to aggregate.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type EventoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithAggregationInput | EventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: EventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _avg?: EventoAvgAggregateInputType
    _sum?: EventoSumAggregateInputType
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    idEvento: number
    nombre: string
    descripcion: string
    fotoPrincipal: string
    fotoSecundaria: string
    cedulaAdm: number
    estado: number
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends EventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type EventoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEvento?: boolean
    nombre?: boolean
    descripcion?: boolean
    fotoPrincipal?: boolean
    fotoSecundaria?: boolean
    cedulaAdm?: boolean
    estado?: boolean
    administrador?: boolean | AdministradorDefaultArgs<ExtArgs>
    funciones?: boolean | Evento$funcionesArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEvento?: boolean
    nombre?: boolean
    descripcion?: boolean
    fotoPrincipal?: boolean
    fotoSecundaria?: boolean
    cedulaAdm?: boolean
    estado?: boolean
    administrador?: boolean | AdministradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idEvento?: boolean
    nombre?: boolean
    descripcion?: boolean
    fotoPrincipal?: boolean
    fotoSecundaria?: boolean
    cedulaAdm?: boolean
    estado?: boolean
    administrador?: boolean | AdministradorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectScalar = {
    idEvento?: boolean
    nombre?: boolean
    descripcion?: boolean
    fotoPrincipal?: boolean
    fotoSecundaria?: boolean
    cedulaAdm?: boolean
    estado?: boolean
  }

  export type EventoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idEvento" | "nombre" | "descripcion" | "fotoPrincipal" | "fotoSecundaria" | "cedulaAdm" | "estado", ExtArgs["result"]["evento"]>
  export type EventoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrador?: boolean | AdministradorDefaultArgs<ExtArgs>
    funciones?: boolean | Evento$funcionesArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrador?: boolean | AdministradorDefaultArgs<ExtArgs>
  }
  export type EventoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrador?: boolean | AdministradorDefaultArgs<ExtArgs>
  }

  export type $EventoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Evento"
    objects: {
      administrador: Prisma.$AdministradorPayload<ExtArgs>
      funciones: Prisma.$FuncionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idEvento: number
      nombre: string
      descripcion: string
      fotoPrincipal: string
      fotoSecundaria: string
      cedulaAdm: number
      estado: number
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }

  type EventoGetPayload<S extends boolean | null | undefined | EventoDefaultArgs> = $Result.GetResult<Prisma.$EventoPayload, S>

  type EventoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface EventoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evento'], meta: { name: 'Evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {EventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventoFindUniqueArgs>(args: SelectSubset<T, EventoFindUniqueArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Evento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventoFindUniqueOrThrowArgs>(args: SelectSubset<T, EventoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventoFindFirstArgs>(args?: SelectSubset<T, EventoFindFirstArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventoFindFirstOrThrowArgs>(args?: SelectSubset<T, EventoFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `idEvento`
     * const eventoWithIdEventoOnly = await prisma.evento.findMany({ select: { idEvento: true } })
     * 
     */
    findMany<T extends EventoFindManyArgs>(args?: SelectSubset<T, EventoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Evento.
     * @param {EventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
     */
    create<T extends EventoCreateArgs>(args: SelectSubset<T, EventoCreateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Eventos.
     * @param {EventoCreateManyArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventoCreateManyArgs>(args?: SelectSubset<T, EventoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Eventos and returns the data saved in the database.
     * @param {EventoCreateManyAndReturnArgs} args - Arguments to create many Eventos.
     * @example
     * // Create many Eventos
     * const evento = await prisma.evento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Eventos and only return the `idEvento`
     * const eventoWithIdEventoOnly = await prisma.evento.createManyAndReturn({
     *   select: { idEvento: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventoCreateManyAndReturnArgs>(args?: SelectSubset<T, EventoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Evento.
     * @param {EventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
     */
    delete<T extends EventoDeleteArgs>(args: SelectSubset<T, EventoDeleteArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Evento.
     * @param {EventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventoUpdateArgs>(args: SelectSubset<T, EventoUpdateArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Eventos.
     * @param {EventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventoDeleteManyArgs>(args?: SelectSubset<T, EventoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventoUpdateManyArgs>(args: SelectSubset<T, EventoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos and returns the data updated in the database.
     * @param {EventoUpdateManyAndReturnArgs} args - Arguments to update many Eventos.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Eventos and only return the `idEvento`
     * const eventoWithIdEventoOnly = await prisma.evento.updateManyAndReturn({
     *   select: { idEvento: true },
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
    updateManyAndReturn<T extends EventoUpdateManyAndReturnArgs>(args: SelectSubset<T, EventoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Evento.
     * @param {EventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
     */
    upsert<T extends EventoUpsertArgs>(args: SelectSubset<T, EventoUpsertArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventoCountArgs>(
      args?: Subset<T, EventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoGroupByArgs} args - Group by arguments.
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
      T extends EventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoGroupByArgs['orderBy'] }
        : { orderBy?: EventoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evento model
   */
  readonly fields: EventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    administrador<T extends AdministradorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdministradorDefaultArgs<ExtArgs>>): Prisma__AdministradorClient<$Result.GetResult<Prisma.$AdministradorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    funciones<T extends Evento$funcionesArgs<ExtArgs> = {}>(args?: Subset<T, Evento$funcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Evento model
   */
  interface EventoFieldRefs {
    readonly idEvento: FieldRef<"Evento", 'Int'>
    readonly nombre: FieldRef<"Evento", 'String'>
    readonly descripcion: FieldRef<"Evento", 'String'>
    readonly fotoPrincipal: FieldRef<"Evento", 'String'>
    readonly fotoSecundaria: FieldRef<"Evento", 'String'>
    readonly cedulaAdm: FieldRef<"Evento", 'Int'>
    readonly estado: FieldRef<"Evento", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Evento findUnique
   */
  export type EventoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findUniqueOrThrow
   */
  export type EventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento findFirst
   */
  export type EventoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findFirstOrThrow
   */
  export type EventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento findMany
   */
  export type EventoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }

  /**
   * Evento create
   */
  export type EventoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to create a Evento.
     */
    data: XOR<EventoCreateInput, EventoUncheckedCreateInput>
  }

  /**
   * Evento createMany
   */
  export type EventoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Evento createManyAndReturn
   */
  export type EventoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evento update
   */
  export type EventoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to update a Evento.
     */
    data: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
    /**
     * Choose, which Evento to update.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento updateMany
   */
  export type EventoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
  }

  /**
   * Evento updateManyAndReturn
   */
  export type EventoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Evento upsert
   */
  export type EventoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The filter to search for the Evento to update in case it exists.
     */
    where: EventoWhereUniqueInput
    /**
     * In case the Evento found by the `where` argument doesn't exist, create a new Evento with this data.
     */
    create: XOR<EventoCreateInput, EventoUncheckedCreateInput>
    /**
     * In case the Evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
  }

  /**
   * Evento delete
   */
  export type EventoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter which Evento to delete.
     */
    where: EventoWhereUniqueInput
  }

  /**
   * Evento deleteMany
   */
  export type EventoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventoWhereInput
    /**
     * Limit how many Eventos to delete.
     */
    limit?: number
  }

  /**
   * Evento.funciones
   */
  export type Evento$funcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcion
     */
    select?: FuncionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcion
     */
    omit?: FuncionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionInclude<ExtArgs> | null
    where?: FuncionWhereInput
    orderBy?: FuncionOrderByWithRelationInput | FuncionOrderByWithRelationInput[]
    cursor?: FuncionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuncionScalarFieldEnum | FuncionScalarFieldEnum[]
  }

  /**
   * Evento without action
   */
  export type EventoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Evento
     */
    omit?: EventoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventoInclude<ExtArgs> | null
  }


  /**
   * Model Ubicacion
   */

  export type AggregateUbicacion = {
    _count: UbicacionCountAggregateOutputType | null
    _avg: UbicacionAvgAggregateOutputType | null
    _sum: UbicacionSumAggregateOutputType | null
    _min: UbicacionMinAggregateOutputType | null
    _max: UbicacionMaxAggregateOutputType | null
  }

  export type UbicacionAvgAggregateOutputType = {
    idUbicacion: number | null
    estado: number | null
  }

  export type UbicacionSumAggregateOutputType = {
    idUbicacion: number | null
    estado: number | null
  }

  export type UbicacionMinAggregateOutputType = {
    idUbicacion: number | null
    nombre: string | null
    personaContacto: string | null
    telefono: string | null
    direccion: string | null
    municipio: string | null
    departamento: string | null
    email: string | null
    estado: number | null
  }

  export type UbicacionMaxAggregateOutputType = {
    idUbicacion: number | null
    nombre: string | null
    personaContacto: string | null
    telefono: string | null
    direccion: string | null
    municipio: string | null
    departamento: string | null
    email: string | null
    estado: number | null
  }

  export type UbicacionCountAggregateOutputType = {
    idUbicacion: number
    nombre: number
    personaContacto: number
    telefono: number
    direccion: number
    municipio: number
    departamento: number
    email: number
    estado: number
    _all: number
  }


  export type UbicacionAvgAggregateInputType = {
    idUbicacion?: true
    estado?: true
  }

  export type UbicacionSumAggregateInputType = {
    idUbicacion?: true
    estado?: true
  }

  export type UbicacionMinAggregateInputType = {
    idUbicacion?: true
    nombre?: true
    personaContacto?: true
    telefono?: true
    direccion?: true
    municipio?: true
    departamento?: true
    email?: true
    estado?: true
  }

  export type UbicacionMaxAggregateInputType = {
    idUbicacion?: true
    nombre?: true
    personaContacto?: true
    telefono?: true
    direccion?: true
    municipio?: true
    departamento?: true
    email?: true
    estado?: true
  }

  export type UbicacionCountAggregateInputType = {
    idUbicacion?: true
    nombre?: true
    personaContacto?: true
    telefono?: true
    direccion?: true
    municipio?: true
    departamento?: true
    email?: true
    estado?: true
    _all?: true
  }

  export type UbicacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ubicacion to aggregate.
     */
    where?: UbicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ubicacions to fetch.
     */
    orderBy?: UbicacionOrderByWithRelationInput | UbicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UbicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ubicacions
    **/
    _count?: true | UbicacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UbicacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UbicacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UbicacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UbicacionMaxAggregateInputType
  }

  export type GetUbicacionAggregateType<T extends UbicacionAggregateArgs> = {
        [P in keyof T & keyof AggregateUbicacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUbicacion[P]>
      : GetScalarType<T[P], AggregateUbicacion[P]>
  }




  export type UbicacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UbicacionWhereInput
    orderBy?: UbicacionOrderByWithAggregationInput | UbicacionOrderByWithAggregationInput[]
    by: UbicacionScalarFieldEnum[] | UbicacionScalarFieldEnum
    having?: UbicacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UbicacionCountAggregateInputType | true
    _avg?: UbicacionAvgAggregateInputType
    _sum?: UbicacionSumAggregateInputType
    _min?: UbicacionMinAggregateInputType
    _max?: UbicacionMaxAggregateInputType
  }

  export type UbicacionGroupByOutputType = {
    idUbicacion: number
    nombre: string
    personaContacto: string
    telefono: string
    direccion: string
    municipio: string
    departamento: string
    email: string
    estado: number
    _count: UbicacionCountAggregateOutputType | null
    _avg: UbicacionAvgAggregateOutputType | null
    _sum: UbicacionSumAggregateOutputType | null
    _min: UbicacionMinAggregateOutputType | null
    _max: UbicacionMaxAggregateOutputType | null
  }

  type GetUbicacionGroupByPayload<T extends UbicacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UbicacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UbicacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UbicacionGroupByOutputType[P]>
            : GetScalarType<T[P], UbicacionGroupByOutputType[P]>
        }
      >
    >


  export type UbicacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUbicacion?: boolean
    nombre?: boolean
    personaContacto?: boolean
    telefono?: boolean
    direccion?: boolean
    municipio?: boolean
    departamento?: boolean
    email?: boolean
    estado?: boolean
    funciones?: boolean | Ubicacion$funcionesArgs<ExtArgs>
    _count?: boolean | UbicacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ubicacion"]>

  export type UbicacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUbicacion?: boolean
    nombre?: boolean
    personaContacto?: boolean
    telefono?: boolean
    direccion?: boolean
    municipio?: boolean
    departamento?: boolean
    email?: boolean
    estado?: boolean
  }, ExtArgs["result"]["ubicacion"]>

  export type UbicacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idUbicacion?: boolean
    nombre?: boolean
    personaContacto?: boolean
    telefono?: boolean
    direccion?: boolean
    municipio?: boolean
    departamento?: boolean
    email?: boolean
    estado?: boolean
  }, ExtArgs["result"]["ubicacion"]>

  export type UbicacionSelectScalar = {
    idUbicacion?: boolean
    nombre?: boolean
    personaContacto?: boolean
    telefono?: boolean
    direccion?: boolean
    municipio?: boolean
    departamento?: boolean
    email?: boolean
    estado?: boolean
  }

  export type UbicacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idUbicacion" | "nombre" | "personaContacto" | "telefono" | "direccion" | "municipio" | "departamento" | "email" | "estado", ExtArgs["result"]["ubicacion"]>
  export type UbicacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funciones?: boolean | Ubicacion$funcionesArgs<ExtArgs>
    _count?: boolean | UbicacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UbicacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UbicacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UbicacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ubicacion"
    objects: {
      funciones: Prisma.$FuncionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idUbicacion: number
      nombre: string
      personaContacto: string
      telefono: string
      direccion: string
      municipio: string
      departamento: string
      email: string
      estado: number
    }, ExtArgs["result"]["ubicacion"]>
    composites: {}
  }

  type UbicacionGetPayload<S extends boolean | null | undefined | UbicacionDefaultArgs> = $Result.GetResult<Prisma.$UbicacionPayload, S>

  type UbicacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UbicacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UbicacionCountAggregateInputType | true
    }

  export interface UbicacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ubicacion'], meta: { name: 'Ubicacion' } }
    /**
     * Find zero or one Ubicacion that matches the filter.
     * @param {UbicacionFindUniqueArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UbicacionFindUniqueArgs>(args: SelectSubset<T, UbicacionFindUniqueArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ubicacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UbicacionFindUniqueOrThrowArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UbicacionFindUniqueOrThrowArgs>(args: SelectSubset<T, UbicacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ubicacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionFindFirstArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UbicacionFindFirstArgs>(args?: SelectSubset<T, UbicacionFindFirstArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ubicacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionFindFirstOrThrowArgs} args - Arguments to find a Ubicacion
     * @example
     * // Get one Ubicacion
     * const ubicacion = await prisma.ubicacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UbicacionFindFirstOrThrowArgs>(args?: SelectSubset<T, UbicacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ubicacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ubicacions
     * const ubicacions = await prisma.ubicacion.findMany()
     * 
     * // Get first 10 Ubicacions
     * const ubicacions = await prisma.ubicacion.findMany({ take: 10 })
     * 
     * // Only select the `idUbicacion`
     * const ubicacionWithIdUbicacionOnly = await prisma.ubicacion.findMany({ select: { idUbicacion: true } })
     * 
     */
    findMany<T extends UbicacionFindManyArgs>(args?: SelectSubset<T, UbicacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ubicacion.
     * @param {UbicacionCreateArgs} args - Arguments to create a Ubicacion.
     * @example
     * // Create one Ubicacion
     * const Ubicacion = await prisma.ubicacion.create({
     *   data: {
     *     // ... data to create a Ubicacion
     *   }
     * })
     * 
     */
    create<T extends UbicacionCreateArgs>(args: SelectSubset<T, UbicacionCreateArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ubicacions.
     * @param {UbicacionCreateManyArgs} args - Arguments to create many Ubicacions.
     * @example
     * // Create many Ubicacions
     * const ubicacion = await prisma.ubicacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UbicacionCreateManyArgs>(args?: SelectSubset<T, UbicacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ubicacions and returns the data saved in the database.
     * @param {UbicacionCreateManyAndReturnArgs} args - Arguments to create many Ubicacions.
     * @example
     * // Create many Ubicacions
     * const ubicacion = await prisma.ubicacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ubicacions and only return the `idUbicacion`
     * const ubicacionWithIdUbicacionOnly = await prisma.ubicacion.createManyAndReturn({
     *   select: { idUbicacion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UbicacionCreateManyAndReturnArgs>(args?: SelectSubset<T, UbicacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ubicacion.
     * @param {UbicacionDeleteArgs} args - Arguments to delete one Ubicacion.
     * @example
     * // Delete one Ubicacion
     * const Ubicacion = await prisma.ubicacion.delete({
     *   where: {
     *     // ... filter to delete one Ubicacion
     *   }
     * })
     * 
     */
    delete<T extends UbicacionDeleteArgs>(args: SelectSubset<T, UbicacionDeleteArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ubicacion.
     * @param {UbicacionUpdateArgs} args - Arguments to update one Ubicacion.
     * @example
     * // Update one Ubicacion
     * const ubicacion = await prisma.ubicacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UbicacionUpdateArgs>(args: SelectSubset<T, UbicacionUpdateArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ubicacions.
     * @param {UbicacionDeleteManyArgs} args - Arguments to filter Ubicacions to delete.
     * @example
     * // Delete a few Ubicacions
     * const { count } = await prisma.ubicacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UbicacionDeleteManyArgs>(args?: SelectSubset<T, UbicacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ubicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ubicacions
     * const ubicacion = await prisma.ubicacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UbicacionUpdateManyArgs>(args: SelectSubset<T, UbicacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ubicacions and returns the data updated in the database.
     * @param {UbicacionUpdateManyAndReturnArgs} args - Arguments to update many Ubicacions.
     * @example
     * // Update many Ubicacions
     * const ubicacion = await prisma.ubicacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ubicacions and only return the `idUbicacion`
     * const ubicacionWithIdUbicacionOnly = await prisma.ubicacion.updateManyAndReturn({
     *   select: { idUbicacion: true },
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
    updateManyAndReturn<T extends UbicacionUpdateManyAndReturnArgs>(args: SelectSubset<T, UbicacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ubicacion.
     * @param {UbicacionUpsertArgs} args - Arguments to update or create a Ubicacion.
     * @example
     * // Update or create a Ubicacion
     * const ubicacion = await prisma.ubicacion.upsert({
     *   create: {
     *     // ... data to create a Ubicacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ubicacion we want to update
     *   }
     * })
     */
    upsert<T extends UbicacionUpsertArgs>(args: SelectSubset<T, UbicacionUpsertArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ubicacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionCountArgs} args - Arguments to filter Ubicacions to count.
     * @example
     * // Count the number of Ubicacions
     * const count = await prisma.ubicacion.count({
     *   where: {
     *     // ... the filter for the Ubicacions we want to count
     *   }
     * })
    **/
    count<T extends UbicacionCountArgs>(
      args?: Subset<T, UbicacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UbicacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ubicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UbicacionAggregateArgs>(args: Subset<T, UbicacionAggregateArgs>): Prisma.PrismaPromise<GetUbicacionAggregateType<T>>

    /**
     * Group by Ubicacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UbicacionGroupByArgs} args - Group by arguments.
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
      T extends UbicacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UbicacionGroupByArgs['orderBy'] }
        : { orderBy?: UbicacionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UbicacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUbicacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ubicacion model
   */
  readonly fields: UbicacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ubicacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UbicacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    funciones<T extends Ubicacion$funcionesArgs<ExtArgs> = {}>(args?: Subset<T, Ubicacion$funcionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ubicacion model
   */
  interface UbicacionFieldRefs {
    readonly idUbicacion: FieldRef<"Ubicacion", 'Int'>
    readonly nombre: FieldRef<"Ubicacion", 'String'>
    readonly personaContacto: FieldRef<"Ubicacion", 'String'>
    readonly telefono: FieldRef<"Ubicacion", 'String'>
    readonly direccion: FieldRef<"Ubicacion", 'String'>
    readonly municipio: FieldRef<"Ubicacion", 'String'>
    readonly departamento: FieldRef<"Ubicacion", 'String'>
    readonly email: FieldRef<"Ubicacion", 'String'>
    readonly estado: FieldRef<"Ubicacion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ubicacion findUnique
   */
  export type UbicacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter, which Ubicacion to fetch.
     */
    where: UbicacionWhereUniqueInput
  }

  /**
   * Ubicacion findUniqueOrThrow
   */
  export type UbicacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter, which Ubicacion to fetch.
     */
    where: UbicacionWhereUniqueInput
  }

  /**
   * Ubicacion findFirst
   */
  export type UbicacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter, which Ubicacion to fetch.
     */
    where?: UbicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ubicacions to fetch.
     */
    orderBy?: UbicacionOrderByWithRelationInput | UbicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ubicacions.
     */
    cursor?: UbicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ubicacions.
     */
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * Ubicacion findFirstOrThrow
   */
  export type UbicacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter, which Ubicacion to fetch.
     */
    where?: UbicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ubicacions to fetch.
     */
    orderBy?: UbicacionOrderByWithRelationInput | UbicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ubicacions.
     */
    cursor?: UbicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ubicacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ubicacions.
     */
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * Ubicacion findMany
   */
  export type UbicacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter, which Ubicacions to fetch.
     */
    where?: UbicacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ubicacions to fetch.
     */
    orderBy?: UbicacionOrderByWithRelationInput | UbicacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ubicacions.
     */
    cursor?: UbicacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ubicacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ubicacions.
     */
    skip?: number
    distinct?: UbicacionScalarFieldEnum | UbicacionScalarFieldEnum[]
  }

  /**
   * Ubicacion create
   */
  export type UbicacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Ubicacion.
     */
    data: XOR<UbicacionCreateInput, UbicacionUncheckedCreateInput>
  }

  /**
   * Ubicacion createMany
   */
  export type UbicacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ubicacions.
     */
    data: UbicacionCreateManyInput | UbicacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ubicacion createManyAndReturn
   */
  export type UbicacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * The data used to create many Ubicacions.
     */
    data: UbicacionCreateManyInput | UbicacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ubicacion update
   */
  export type UbicacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Ubicacion.
     */
    data: XOR<UbicacionUpdateInput, UbicacionUncheckedUpdateInput>
    /**
     * Choose, which Ubicacion to update.
     */
    where: UbicacionWhereUniqueInput
  }

  /**
   * Ubicacion updateMany
   */
  export type UbicacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ubicacions.
     */
    data: XOR<UbicacionUpdateManyMutationInput, UbicacionUncheckedUpdateManyInput>
    /**
     * Filter which Ubicacions to update
     */
    where?: UbicacionWhereInput
    /**
     * Limit how many Ubicacions to update.
     */
    limit?: number
  }

  /**
   * Ubicacion updateManyAndReturn
   */
  export type UbicacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * The data used to update Ubicacions.
     */
    data: XOR<UbicacionUpdateManyMutationInput, UbicacionUncheckedUpdateManyInput>
    /**
     * Filter which Ubicacions to update
     */
    where?: UbicacionWhereInput
    /**
     * Limit how many Ubicacions to update.
     */
    limit?: number
  }

  /**
   * Ubicacion upsert
   */
  export type UbicacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Ubicacion to update in case it exists.
     */
    where: UbicacionWhereUniqueInput
    /**
     * In case the Ubicacion found by the `where` argument doesn't exist, create a new Ubicacion with this data.
     */
    create: XOR<UbicacionCreateInput, UbicacionUncheckedCreateInput>
    /**
     * In case the Ubicacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UbicacionUpdateInput, UbicacionUncheckedUpdateInput>
  }

  /**
   * Ubicacion delete
   */
  export type UbicacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
    /**
     * Filter which Ubicacion to delete.
     */
    where: UbicacionWhereUniqueInput
  }

  /**
   * Ubicacion deleteMany
   */
  export type UbicacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ubicacions to delete
     */
    where?: UbicacionWhereInput
    /**
     * Limit how many Ubicacions to delete.
     */
    limit?: number
  }

  /**
   * Ubicacion.funciones
   */
  export type Ubicacion$funcionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcion
     */
    select?: FuncionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcion
     */
    omit?: FuncionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionInclude<ExtArgs> | null
    where?: FuncionWhereInput
    orderBy?: FuncionOrderByWithRelationInput | FuncionOrderByWithRelationInput[]
    cursor?: FuncionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FuncionScalarFieldEnum | FuncionScalarFieldEnum[]
  }

  /**
   * Ubicacion without action
   */
  export type UbicacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ubicacion
     */
    select?: UbicacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ubicacion
     */
    omit?: UbicacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UbicacionInclude<ExtArgs> | null
  }


  /**
   * Model Funcion
   */

  export type AggregateFuncion = {
    _count: FuncionCountAggregateOutputType | null
    _avg: FuncionAvgAggregateOutputType | null
    _sum: FuncionSumAggregateOutputType | null
    _min: FuncionMinAggregateOutputType | null
    _max: FuncionMaxAggregateOutputType | null
  }

  export type FuncionAvgAggregateOutputType = {
    idFuncion: number | null
    idEvento: number | null
    idUbicacion: number | null
    estado: number | null
  }

  export type FuncionSumAggregateOutputType = {
    idFuncion: number | null
    idEvento: number | null
    idUbicacion: number | null
    estado: number | null
  }

  export type FuncionMinAggregateOutputType = {
    idFuncion: number | null
    nombre: string | null
    descripcion: string | null
    fecha: Date | null
    horaInicio: Date | null
    idEvento: number | null
    idUbicacion: number | null
    estado: number | null
  }

  export type FuncionMaxAggregateOutputType = {
    idFuncion: number | null
    nombre: string | null
    descripcion: string | null
    fecha: Date | null
    horaInicio: Date | null
    idEvento: number | null
    idUbicacion: number | null
    estado: number | null
  }

  export type FuncionCountAggregateOutputType = {
    idFuncion: number
    nombre: number
    descripcion: number
    fecha: number
    horaInicio: number
    idEvento: number
    idUbicacion: number
    estado: number
    _all: number
  }


  export type FuncionAvgAggregateInputType = {
    idFuncion?: true
    idEvento?: true
    idUbicacion?: true
    estado?: true
  }

  export type FuncionSumAggregateInputType = {
    idFuncion?: true
    idEvento?: true
    idUbicacion?: true
    estado?: true
  }

  export type FuncionMinAggregateInputType = {
    idFuncion?: true
    nombre?: true
    descripcion?: true
    fecha?: true
    horaInicio?: true
    idEvento?: true
    idUbicacion?: true
    estado?: true
  }

  export type FuncionMaxAggregateInputType = {
    idFuncion?: true
    nombre?: true
    descripcion?: true
    fecha?: true
    horaInicio?: true
    idEvento?: true
    idUbicacion?: true
    estado?: true
  }

  export type FuncionCountAggregateInputType = {
    idFuncion?: true
    nombre?: true
    descripcion?: true
    fecha?: true
    horaInicio?: true
    idEvento?: true
    idUbicacion?: true
    estado?: true
    _all?: true
  }

  export type FuncionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcion to aggregate.
     */
    where?: FuncionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcions to fetch.
     */
    orderBy?: FuncionOrderByWithRelationInput | FuncionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FuncionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funcions
    **/
    _count?: true | FuncionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FuncionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FuncionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FuncionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FuncionMaxAggregateInputType
  }

  export type GetFuncionAggregateType<T extends FuncionAggregateArgs> = {
        [P in keyof T & keyof AggregateFuncion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFuncion[P]>
      : GetScalarType<T[P], AggregateFuncion[P]>
  }




  export type FuncionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FuncionWhereInput
    orderBy?: FuncionOrderByWithAggregationInput | FuncionOrderByWithAggregationInput[]
    by: FuncionScalarFieldEnum[] | FuncionScalarFieldEnum
    having?: FuncionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FuncionCountAggregateInputType | true
    _avg?: FuncionAvgAggregateInputType
    _sum?: FuncionSumAggregateInputType
    _min?: FuncionMinAggregateInputType
    _max?: FuncionMaxAggregateInputType
  }

  export type FuncionGroupByOutputType = {
    idFuncion: number
    nombre: string
    descripcion: string
    fecha: Date
    horaInicio: Date
    idEvento: number
    idUbicacion: number
    estado: number
    _count: FuncionCountAggregateOutputType | null
    _avg: FuncionAvgAggregateOutputType | null
    _sum: FuncionSumAggregateOutputType | null
    _min: FuncionMinAggregateOutputType | null
    _max: FuncionMaxAggregateOutputType | null
  }

  type GetFuncionGroupByPayload<T extends FuncionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FuncionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FuncionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FuncionGroupByOutputType[P]>
            : GetScalarType<T[P], FuncionGroupByOutputType[P]>
        }
      >
    >


  export type FuncionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idFuncion?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha?: boolean
    horaInicio?: boolean
    idEvento?: boolean
    idUbicacion?: boolean
    estado?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    tipoBoletas?: boolean | Funcion$tipoBoletasArgs<ExtArgs>
    _count?: boolean | FuncionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcion"]>

  export type FuncionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idFuncion?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha?: boolean
    horaInicio?: boolean
    idEvento?: boolean
    idUbicacion?: boolean
    estado?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcion"]>

  export type FuncionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idFuncion?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha?: boolean
    horaInicio?: boolean
    idEvento?: boolean
    idUbicacion?: boolean
    estado?: boolean
    evento?: boolean | EventoDefaultArgs<ExtArgs>
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["funcion"]>

  export type FuncionSelectScalar = {
    idFuncion?: boolean
    nombre?: boolean
    descripcion?: boolean
    fecha?: boolean
    horaInicio?: boolean
    idEvento?: boolean
    idUbicacion?: boolean
    estado?: boolean
  }

  export type FuncionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idFuncion" | "nombre" | "descripcion" | "fecha" | "horaInicio" | "idEvento" | "idUbicacion" | "estado", ExtArgs["result"]["funcion"]>
  export type FuncionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
    tipoBoletas?: boolean | Funcion$tipoBoletasArgs<ExtArgs>
    _count?: boolean | FuncionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FuncionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
  }
  export type FuncionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    evento?: boolean | EventoDefaultArgs<ExtArgs>
    ubicacion?: boolean | UbicacionDefaultArgs<ExtArgs>
  }

  export type $FuncionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Funcion"
    objects: {
      evento: Prisma.$EventoPayload<ExtArgs>
      ubicacion: Prisma.$UbicacionPayload<ExtArgs>
      tipoBoletas: Prisma.$TipoBoletaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idFuncion: number
      nombre: string
      descripcion: string
      fecha: Date
      horaInicio: Date
      idEvento: number
      idUbicacion: number
      estado: number
    }, ExtArgs["result"]["funcion"]>
    composites: {}
  }

  type FuncionGetPayload<S extends boolean | null | undefined | FuncionDefaultArgs> = $Result.GetResult<Prisma.$FuncionPayload, S>

  type FuncionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FuncionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FuncionCountAggregateInputType | true
    }

  export interface FuncionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Funcion'], meta: { name: 'Funcion' } }
    /**
     * Find zero or one Funcion that matches the filter.
     * @param {FuncionFindUniqueArgs} args - Arguments to find a Funcion
     * @example
     * // Get one Funcion
     * const funcion = await prisma.funcion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FuncionFindUniqueArgs>(args: SelectSubset<T, FuncionFindUniqueArgs<ExtArgs>>): Prisma__FuncionClient<$Result.GetResult<Prisma.$FuncionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Funcion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FuncionFindUniqueOrThrowArgs} args - Arguments to find a Funcion
     * @example
     * // Get one Funcion
     * const funcion = await prisma.funcion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FuncionFindUniqueOrThrowArgs>(args: SelectSubset<T, FuncionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FuncionClient<$Result.GetResult<Prisma.$FuncionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionFindFirstArgs} args - Arguments to find a Funcion
     * @example
     * // Get one Funcion
     * const funcion = await prisma.funcion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FuncionFindFirstArgs>(args?: SelectSubset<T, FuncionFindFirstArgs<ExtArgs>>): Prisma__FuncionClient<$Result.GetResult<Prisma.$FuncionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Funcion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionFindFirstOrThrowArgs} args - Arguments to find a Funcion
     * @example
     * // Get one Funcion
     * const funcion = await prisma.funcion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FuncionFindFirstOrThrowArgs>(args?: SelectSubset<T, FuncionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FuncionClient<$Result.GetResult<Prisma.$FuncionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funcions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funcions
     * const funcions = await prisma.funcion.findMany()
     * 
     * // Get first 10 Funcions
     * const funcions = await prisma.funcion.findMany({ take: 10 })
     * 
     * // Only select the `idFuncion`
     * const funcionWithIdFuncionOnly = await prisma.funcion.findMany({ select: { idFuncion: true } })
     * 
     */
    findMany<T extends FuncionFindManyArgs>(args?: SelectSubset<T, FuncionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Funcion.
     * @param {FuncionCreateArgs} args - Arguments to create a Funcion.
     * @example
     * // Create one Funcion
     * const Funcion = await prisma.funcion.create({
     *   data: {
     *     // ... data to create a Funcion
     *   }
     * })
     * 
     */
    create<T extends FuncionCreateArgs>(args: SelectSubset<T, FuncionCreateArgs<ExtArgs>>): Prisma__FuncionClient<$Result.GetResult<Prisma.$FuncionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funcions.
     * @param {FuncionCreateManyArgs} args - Arguments to create many Funcions.
     * @example
     * // Create many Funcions
     * const funcion = await prisma.funcion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FuncionCreateManyArgs>(args?: SelectSubset<T, FuncionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funcions and returns the data saved in the database.
     * @param {FuncionCreateManyAndReturnArgs} args - Arguments to create many Funcions.
     * @example
     * // Create many Funcions
     * const funcion = await prisma.funcion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funcions and only return the `idFuncion`
     * const funcionWithIdFuncionOnly = await prisma.funcion.createManyAndReturn({
     *   select: { idFuncion: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FuncionCreateManyAndReturnArgs>(args?: SelectSubset<T, FuncionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Funcion.
     * @param {FuncionDeleteArgs} args - Arguments to delete one Funcion.
     * @example
     * // Delete one Funcion
     * const Funcion = await prisma.funcion.delete({
     *   where: {
     *     // ... filter to delete one Funcion
     *   }
     * })
     * 
     */
    delete<T extends FuncionDeleteArgs>(args: SelectSubset<T, FuncionDeleteArgs<ExtArgs>>): Prisma__FuncionClient<$Result.GetResult<Prisma.$FuncionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Funcion.
     * @param {FuncionUpdateArgs} args - Arguments to update one Funcion.
     * @example
     * // Update one Funcion
     * const funcion = await prisma.funcion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FuncionUpdateArgs>(args: SelectSubset<T, FuncionUpdateArgs<ExtArgs>>): Prisma__FuncionClient<$Result.GetResult<Prisma.$FuncionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funcions.
     * @param {FuncionDeleteManyArgs} args - Arguments to filter Funcions to delete.
     * @example
     * // Delete a few Funcions
     * const { count } = await prisma.funcion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FuncionDeleteManyArgs>(args?: SelectSubset<T, FuncionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funcions
     * const funcion = await prisma.funcion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FuncionUpdateManyArgs>(args: SelectSubset<T, FuncionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funcions and returns the data updated in the database.
     * @param {FuncionUpdateManyAndReturnArgs} args - Arguments to update many Funcions.
     * @example
     * // Update many Funcions
     * const funcion = await prisma.funcion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funcions and only return the `idFuncion`
     * const funcionWithIdFuncionOnly = await prisma.funcion.updateManyAndReturn({
     *   select: { idFuncion: true },
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
    updateManyAndReturn<T extends FuncionUpdateManyAndReturnArgs>(args: SelectSubset<T, FuncionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FuncionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Funcion.
     * @param {FuncionUpsertArgs} args - Arguments to update or create a Funcion.
     * @example
     * // Update or create a Funcion
     * const funcion = await prisma.funcion.upsert({
     *   create: {
     *     // ... data to create a Funcion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Funcion we want to update
     *   }
     * })
     */
    upsert<T extends FuncionUpsertArgs>(args: SelectSubset<T, FuncionUpsertArgs<ExtArgs>>): Prisma__FuncionClient<$Result.GetResult<Prisma.$FuncionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funcions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionCountArgs} args - Arguments to filter Funcions to count.
     * @example
     * // Count the number of Funcions
     * const count = await prisma.funcion.count({
     *   where: {
     *     // ... the filter for the Funcions we want to count
     *   }
     * })
    **/
    count<T extends FuncionCountArgs>(
      args?: Subset<T, FuncionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FuncionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Funcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FuncionAggregateArgs>(args: Subset<T, FuncionAggregateArgs>): Prisma.PrismaPromise<GetFuncionAggregateType<T>>

    /**
     * Group by Funcion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FuncionGroupByArgs} args - Group by arguments.
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
      T extends FuncionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FuncionGroupByArgs['orderBy'] }
        : { orderBy?: FuncionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FuncionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFuncionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Funcion model
   */
  readonly fields: FuncionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Funcion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FuncionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    evento<T extends EventoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventoDefaultArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ubicacion<T extends UbicacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UbicacionDefaultArgs<ExtArgs>>): Prisma__UbicacionClient<$Result.GetResult<Prisma.$UbicacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoBoletas<T extends Funcion$tipoBoletasArgs<ExtArgs> = {}>(args?: Subset<T, Funcion$tipoBoletasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoBoletaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Funcion model
   */
  interface FuncionFieldRefs {
    readonly idFuncion: FieldRef<"Funcion", 'Int'>
    readonly nombre: FieldRef<"Funcion", 'String'>
    readonly descripcion: FieldRef<"Funcion", 'String'>
    readonly fecha: FieldRef<"Funcion", 'DateTime'>
    readonly horaInicio: FieldRef<"Funcion", 'DateTime'>
    readonly idEvento: FieldRef<"Funcion", 'Int'>
    readonly idUbicacion: FieldRef<"Funcion", 'Int'>
    readonly estado: FieldRef<"Funcion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Funcion findUnique
   */
  export type FuncionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcion
     */
    select?: FuncionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcion
     */
    omit?: FuncionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionInclude<ExtArgs> | null
    /**
     * Filter, which Funcion to fetch.
     */
    where: FuncionWhereUniqueInput
  }

  /**
   * Funcion findUniqueOrThrow
   */
  export type FuncionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcion
     */
    select?: FuncionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcion
     */
    omit?: FuncionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionInclude<ExtArgs> | null
    /**
     * Filter, which Funcion to fetch.
     */
    where: FuncionWhereUniqueInput
  }

  /**
   * Funcion findFirst
   */
  export type FuncionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcion
     */
    select?: FuncionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcion
     */
    omit?: FuncionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionInclude<ExtArgs> | null
    /**
     * Filter, which Funcion to fetch.
     */
    where?: FuncionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcions to fetch.
     */
    orderBy?: FuncionOrderByWithRelationInput | FuncionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcions.
     */
    cursor?: FuncionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcions.
     */
    distinct?: FuncionScalarFieldEnum | FuncionScalarFieldEnum[]
  }

  /**
   * Funcion findFirstOrThrow
   */
  export type FuncionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcion
     */
    select?: FuncionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcion
     */
    omit?: FuncionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionInclude<ExtArgs> | null
    /**
     * Filter, which Funcion to fetch.
     */
    where?: FuncionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcions to fetch.
     */
    orderBy?: FuncionOrderByWithRelationInput | FuncionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funcions.
     */
    cursor?: FuncionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funcions.
     */
    distinct?: FuncionScalarFieldEnum | FuncionScalarFieldEnum[]
  }

  /**
   * Funcion findMany
   */
  export type FuncionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcion
     */
    select?: FuncionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcion
     */
    omit?: FuncionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionInclude<ExtArgs> | null
    /**
     * Filter, which Funcions to fetch.
     */
    where?: FuncionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funcions to fetch.
     */
    orderBy?: FuncionOrderByWithRelationInput | FuncionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funcions.
     */
    cursor?: FuncionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funcions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funcions.
     */
    skip?: number
    distinct?: FuncionScalarFieldEnum | FuncionScalarFieldEnum[]
  }

  /**
   * Funcion create
   */
  export type FuncionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcion
     */
    select?: FuncionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcion
     */
    omit?: FuncionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionInclude<ExtArgs> | null
    /**
     * The data needed to create a Funcion.
     */
    data: XOR<FuncionCreateInput, FuncionUncheckedCreateInput>
  }

  /**
   * Funcion createMany
   */
  export type FuncionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funcions.
     */
    data: FuncionCreateManyInput | FuncionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Funcion createManyAndReturn
   */
  export type FuncionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcion
     */
    select?: FuncionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcion
     */
    omit?: FuncionOmit<ExtArgs> | null
    /**
     * The data used to create many Funcions.
     */
    data: FuncionCreateManyInput | FuncionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Funcion update
   */
  export type FuncionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcion
     */
    select?: FuncionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcion
     */
    omit?: FuncionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionInclude<ExtArgs> | null
    /**
     * The data needed to update a Funcion.
     */
    data: XOR<FuncionUpdateInput, FuncionUncheckedUpdateInput>
    /**
     * Choose, which Funcion to update.
     */
    where: FuncionWhereUniqueInput
  }

  /**
   * Funcion updateMany
   */
  export type FuncionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funcions.
     */
    data: XOR<FuncionUpdateManyMutationInput, FuncionUncheckedUpdateManyInput>
    /**
     * Filter which Funcions to update
     */
    where?: FuncionWhereInput
    /**
     * Limit how many Funcions to update.
     */
    limit?: number
  }

  /**
   * Funcion updateManyAndReturn
   */
  export type FuncionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcion
     */
    select?: FuncionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Funcion
     */
    omit?: FuncionOmit<ExtArgs> | null
    /**
     * The data used to update Funcions.
     */
    data: XOR<FuncionUpdateManyMutationInput, FuncionUncheckedUpdateManyInput>
    /**
     * Filter which Funcions to update
     */
    where?: FuncionWhereInput
    /**
     * Limit how many Funcions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Funcion upsert
   */
  export type FuncionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcion
     */
    select?: FuncionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcion
     */
    omit?: FuncionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionInclude<ExtArgs> | null
    /**
     * The filter to search for the Funcion to update in case it exists.
     */
    where: FuncionWhereUniqueInput
    /**
     * In case the Funcion found by the `where` argument doesn't exist, create a new Funcion with this data.
     */
    create: XOR<FuncionCreateInput, FuncionUncheckedCreateInput>
    /**
     * In case the Funcion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FuncionUpdateInput, FuncionUncheckedUpdateInput>
  }

  /**
   * Funcion delete
   */
  export type FuncionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcion
     */
    select?: FuncionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcion
     */
    omit?: FuncionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionInclude<ExtArgs> | null
    /**
     * Filter which Funcion to delete.
     */
    where: FuncionWhereUniqueInput
  }

  /**
   * Funcion deleteMany
   */
  export type FuncionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funcions to delete
     */
    where?: FuncionWhereInput
    /**
     * Limit how many Funcions to delete.
     */
    limit?: number
  }

  /**
   * Funcion.tipoBoletas
   */
  export type Funcion$tipoBoletasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBoleta
     */
    select?: TipoBoletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBoleta
     */
    omit?: TipoBoletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBoletaInclude<ExtArgs> | null
    where?: TipoBoletaWhereInput
    orderBy?: TipoBoletaOrderByWithRelationInput | TipoBoletaOrderByWithRelationInput[]
    cursor?: TipoBoletaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TipoBoletaScalarFieldEnum | TipoBoletaScalarFieldEnum[]
  }

  /**
   * Funcion without action
   */
  export type FuncionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Funcion
     */
    select?: FuncionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Funcion
     */
    omit?: FuncionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FuncionInclude<ExtArgs> | null
  }


  /**
   * Model TipoBoleta
   */

  export type AggregateTipoBoleta = {
    _count: TipoBoletaCountAggregateOutputType | null
    _avg: TipoBoletaAvgAggregateOutputType | null
    _sum: TipoBoletaSumAggregateOutputType | null
    _min: TipoBoletaMinAggregateOutputType | null
    _max: TipoBoletaMaxAggregateOutputType | null
  }

  export type TipoBoletaAvgAggregateOutputType = {
    idTipoBoleta: number | null
    precio: number | null
    cupoMaximo: number | null
    disponibles: number | null
    idFuncion: number | null
  }

  export type TipoBoletaSumAggregateOutputType = {
    idTipoBoleta: number | null
    precio: number | null
    cupoMaximo: number | null
    disponibles: number | null
    idFuncion: number | null
  }

  export type TipoBoletaMinAggregateOutputType = {
    idTipoBoleta: number | null
    nombre: string | null
    localizacion: string | null
    precio: number | null
    cupoMaximo: number | null
    disponibles: number | null
    idFuncion: number | null
  }

  export type TipoBoletaMaxAggregateOutputType = {
    idTipoBoleta: number | null
    nombre: string | null
    localizacion: string | null
    precio: number | null
    cupoMaximo: number | null
    disponibles: number | null
    idFuncion: number | null
  }

  export type TipoBoletaCountAggregateOutputType = {
    idTipoBoleta: number
    nombre: number
    localizacion: number
    precio: number
    cupoMaximo: number
    disponibles: number
    idFuncion: number
    _all: number
  }


  export type TipoBoletaAvgAggregateInputType = {
    idTipoBoleta?: true
    precio?: true
    cupoMaximo?: true
    disponibles?: true
    idFuncion?: true
  }

  export type TipoBoletaSumAggregateInputType = {
    idTipoBoleta?: true
    precio?: true
    cupoMaximo?: true
    disponibles?: true
    idFuncion?: true
  }

  export type TipoBoletaMinAggregateInputType = {
    idTipoBoleta?: true
    nombre?: true
    localizacion?: true
    precio?: true
    cupoMaximo?: true
    disponibles?: true
    idFuncion?: true
  }

  export type TipoBoletaMaxAggregateInputType = {
    idTipoBoleta?: true
    nombre?: true
    localizacion?: true
    precio?: true
    cupoMaximo?: true
    disponibles?: true
    idFuncion?: true
  }

  export type TipoBoletaCountAggregateInputType = {
    idTipoBoleta?: true
    nombre?: true
    localizacion?: true
    precio?: true
    cupoMaximo?: true
    disponibles?: true
    idFuncion?: true
    _all?: true
  }

  export type TipoBoletaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoBoleta to aggregate.
     */
    where?: TipoBoletaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoBoletas to fetch.
     */
    orderBy?: TipoBoletaOrderByWithRelationInput | TipoBoletaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TipoBoletaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoBoletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoBoletas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TipoBoletas
    **/
    _count?: true | TipoBoletaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TipoBoletaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TipoBoletaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TipoBoletaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TipoBoletaMaxAggregateInputType
  }

  export type GetTipoBoletaAggregateType<T extends TipoBoletaAggregateArgs> = {
        [P in keyof T & keyof AggregateTipoBoleta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTipoBoleta[P]>
      : GetScalarType<T[P], AggregateTipoBoleta[P]>
  }




  export type TipoBoletaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TipoBoletaWhereInput
    orderBy?: TipoBoletaOrderByWithAggregationInput | TipoBoletaOrderByWithAggregationInput[]
    by: TipoBoletaScalarFieldEnum[] | TipoBoletaScalarFieldEnum
    having?: TipoBoletaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TipoBoletaCountAggregateInputType | true
    _avg?: TipoBoletaAvgAggregateInputType
    _sum?: TipoBoletaSumAggregateInputType
    _min?: TipoBoletaMinAggregateInputType
    _max?: TipoBoletaMaxAggregateInputType
  }

  export type TipoBoletaGroupByOutputType = {
    idTipoBoleta: number
    nombre: string
    localizacion: string
    precio: number
    cupoMaximo: number
    disponibles: number
    idFuncion: number
    _count: TipoBoletaCountAggregateOutputType | null
    _avg: TipoBoletaAvgAggregateOutputType | null
    _sum: TipoBoletaSumAggregateOutputType | null
    _min: TipoBoletaMinAggregateOutputType | null
    _max: TipoBoletaMaxAggregateOutputType | null
  }

  type GetTipoBoletaGroupByPayload<T extends TipoBoletaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TipoBoletaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TipoBoletaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TipoBoletaGroupByOutputType[P]>
            : GetScalarType<T[P], TipoBoletaGroupByOutputType[P]>
        }
      >
    >


  export type TipoBoletaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idTipoBoleta?: boolean
    nombre?: boolean
    localizacion?: boolean
    precio?: boolean
    cupoMaximo?: boolean
    disponibles?: boolean
    idFuncion?: boolean
    compras?: boolean | TipoBoleta$comprasArgs<ExtArgs>
    funcion?: boolean | FuncionDefaultArgs<ExtArgs>
    _count?: boolean | TipoBoletaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoBoleta"]>

  export type TipoBoletaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idTipoBoleta?: boolean
    nombre?: boolean
    localizacion?: boolean
    precio?: boolean
    cupoMaximo?: boolean
    disponibles?: boolean
    idFuncion?: boolean
    funcion?: boolean | FuncionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoBoleta"]>

  export type TipoBoletaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idTipoBoleta?: boolean
    nombre?: boolean
    localizacion?: boolean
    precio?: boolean
    cupoMaximo?: boolean
    disponibles?: boolean
    idFuncion?: boolean
    funcion?: boolean | FuncionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tipoBoleta"]>

  export type TipoBoletaSelectScalar = {
    idTipoBoleta?: boolean
    nombre?: boolean
    localizacion?: boolean
    precio?: boolean
    cupoMaximo?: boolean
    disponibles?: boolean
    idFuncion?: boolean
  }

  export type TipoBoletaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idTipoBoleta" | "nombre" | "localizacion" | "precio" | "cupoMaximo" | "disponibles" | "idFuncion", ExtArgs["result"]["tipoBoleta"]>
  export type TipoBoletaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    compras?: boolean | TipoBoleta$comprasArgs<ExtArgs>
    funcion?: boolean | FuncionDefaultArgs<ExtArgs>
    _count?: boolean | TipoBoletaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TipoBoletaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcion?: boolean | FuncionDefaultArgs<ExtArgs>
  }
  export type TipoBoletaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    funcion?: boolean | FuncionDefaultArgs<ExtArgs>
  }

  export type $TipoBoletaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TipoBoleta"
    objects: {
      compras: Prisma.$CompraPayload<ExtArgs>[]
      funcion: Prisma.$FuncionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idTipoBoleta: number
      nombre: string
      localizacion: string
      precio: number
      cupoMaximo: number
      disponibles: number
      idFuncion: number
    }, ExtArgs["result"]["tipoBoleta"]>
    composites: {}
  }

  type TipoBoletaGetPayload<S extends boolean | null | undefined | TipoBoletaDefaultArgs> = $Result.GetResult<Prisma.$TipoBoletaPayload, S>

  type TipoBoletaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TipoBoletaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TipoBoletaCountAggregateInputType | true
    }

  export interface TipoBoletaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TipoBoleta'], meta: { name: 'TipoBoleta' } }
    /**
     * Find zero or one TipoBoleta that matches the filter.
     * @param {TipoBoletaFindUniqueArgs} args - Arguments to find a TipoBoleta
     * @example
     * // Get one TipoBoleta
     * const tipoBoleta = await prisma.tipoBoleta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TipoBoletaFindUniqueArgs>(args: SelectSubset<T, TipoBoletaFindUniqueArgs<ExtArgs>>): Prisma__TipoBoletaClient<$Result.GetResult<Prisma.$TipoBoletaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TipoBoleta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TipoBoletaFindUniqueOrThrowArgs} args - Arguments to find a TipoBoleta
     * @example
     * // Get one TipoBoleta
     * const tipoBoleta = await prisma.tipoBoleta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TipoBoletaFindUniqueOrThrowArgs>(args: SelectSubset<T, TipoBoletaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TipoBoletaClient<$Result.GetResult<Prisma.$TipoBoletaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoBoleta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBoletaFindFirstArgs} args - Arguments to find a TipoBoleta
     * @example
     * // Get one TipoBoleta
     * const tipoBoleta = await prisma.tipoBoleta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TipoBoletaFindFirstArgs>(args?: SelectSubset<T, TipoBoletaFindFirstArgs<ExtArgs>>): Prisma__TipoBoletaClient<$Result.GetResult<Prisma.$TipoBoletaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TipoBoleta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBoletaFindFirstOrThrowArgs} args - Arguments to find a TipoBoleta
     * @example
     * // Get one TipoBoleta
     * const tipoBoleta = await prisma.tipoBoleta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TipoBoletaFindFirstOrThrowArgs>(args?: SelectSubset<T, TipoBoletaFindFirstOrThrowArgs<ExtArgs>>): Prisma__TipoBoletaClient<$Result.GetResult<Prisma.$TipoBoletaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TipoBoletas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBoletaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TipoBoletas
     * const tipoBoletas = await prisma.tipoBoleta.findMany()
     * 
     * // Get first 10 TipoBoletas
     * const tipoBoletas = await prisma.tipoBoleta.findMany({ take: 10 })
     * 
     * // Only select the `idTipoBoleta`
     * const tipoBoletaWithIdTipoBoletaOnly = await prisma.tipoBoleta.findMany({ select: { idTipoBoleta: true } })
     * 
     */
    findMany<T extends TipoBoletaFindManyArgs>(args?: SelectSubset<T, TipoBoletaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoBoletaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TipoBoleta.
     * @param {TipoBoletaCreateArgs} args - Arguments to create a TipoBoleta.
     * @example
     * // Create one TipoBoleta
     * const TipoBoleta = await prisma.tipoBoleta.create({
     *   data: {
     *     // ... data to create a TipoBoleta
     *   }
     * })
     * 
     */
    create<T extends TipoBoletaCreateArgs>(args: SelectSubset<T, TipoBoletaCreateArgs<ExtArgs>>): Prisma__TipoBoletaClient<$Result.GetResult<Prisma.$TipoBoletaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TipoBoletas.
     * @param {TipoBoletaCreateManyArgs} args - Arguments to create many TipoBoletas.
     * @example
     * // Create many TipoBoletas
     * const tipoBoleta = await prisma.tipoBoleta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TipoBoletaCreateManyArgs>(args?: SelectSubset<T, TipoBoletaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TipoBoletas and returns the data saved in the database.
     * @param {TipoBoletaCreateManyAndReturnArgs} args - Arguments to create many TipoBoletas.
     * @example
     * // Create many TipoBoletas
     * const tipoBoleta = await prisma.tipoBoleta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TipoBoletas and only return the `idTipoBoleta`
     * const tipoBoletaWithIdTipoBoletaOnly = await prisma.tipoBoleta.createManyAndReturn({
     *   select: { idTipoBoleta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TipoBoletaCreateManyAndReturnArgs>(args?: SelectSubset<T, TipoBoletaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoBoletaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TipoBoleta.
     * @param {TipoBoletaDeleteArgs} args - Arguments to delete one TipoBoleta.
     * @example
     * // Delete one TipoBoleta
     * const TipoBoleta = await prisma.tipoBoleta.delete({
     *   where: {
     *     // ... filter to delete one TipoBoleta
     *   }
     * })
     * 
     */
    delete<T extends TipoBoletaDeleteArgs>(args: SelectSubset<T, TipoBoletaDeleteArgs<ExtArgs>>): Prisma__TipoBoletaClient<$Result.GetResult<Prisma.$TipoBoletaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TipoBoleta.
     * @param {TipoBoletaUpdateArgs} args - Arguments to update one TipoBoleta.
     * @example
     * // Update one TipoBoleta
     * const tipoBoleta = await prisma.tipoBoleta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TipoBoletaUpdateArgs>(args: SelectSubset<T, TipoBoletaUpdateArgs<ExtArgs>>): Prisma__TipoBoletaClient<$Result.GetResult<Prisma.$TipoBoletaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TipoBoletas.
     * @param {TipoBoletaDeleteManyArgs} args - Arguments to filter TipoBoletas to delete.
     * @example
     * // Delete a few TipoBoletas
     * const { count } = await prisma.tipoBoleta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TipoBoletaDeleteManyArgs>(args?: SelectSubset<T, TipoBoletaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoBoletas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBoletaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TipoBoletas
     * const tipoBoleta = await prisma.tipoBoleta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TipoBoletaUpdateManyArgs>(args: SelectSubset<T, TipoBoletaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TipoBoletas and returns the data updated in the database.
     * @param {TipoBoletaUpdateManyAndReturnArgs} args - Arguments to update many TipoBoletas.
     * @example
     * // Update many TipoBoletas
     * const tipoBoleta = await prisma.tipoBoleta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TipoBoletas and only return the `idTipoBoleta`
     * const tipoBoletaWithIdTipoBoletaOnly = await prisma.tipoBoleta.updateManyAndReturn({
     *   select: { idTipoBoleta: true },
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
    updateManyAndReturn<T extends TipoBoletaUpdateManyAndReturnArgs>(args: SelectSubset<T, TipoBoletaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TipoBoletaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TipoBoleta.
     * @param {TipoBoletaUpsertArgs} args - Arguments to update or create a TipoBoleta.
     * @example
     * // Update or create a TipoBoleta
     * const tipoBoleta = await prisma.tipoBoleta.upsert({
     *   create: {
     *     // ... data to create a TipoBoleta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TipoBoleta we want to update
     *   }
     * })
     */
    upsert<T extends TipoBoletaUpsertArgs>(args: SelectSubset<T, TipoBoletaUpsertArgs<ExtArgs>>): Prisma__TipoBoletaClient<$Result.GetResult<Prisma.$TipoBoletaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TipoBoletas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBoletaCountArgs} args - Arguments to filter TipoBoletas to count.
     * @example
     * // Count the number of TipoBoletas
     * const count = await prisma.tipoBoleta.count({
     *   where: {
     *     // ... the filter for the TipoBoletas we want to count
     *   }
     * })
    **/
    count<T extends TipoBoletaCountArgs>(
      args?: Subset<T, TipoBoletaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TipoBoletaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TipoBoleta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBoletaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TipoBoletaAggregateArgs>(args: Subset<T, TipoBoletaAggregateArgs>): Prisma.PrismaPromise<GetTipoBoletaAggregateType<T>>

    /**
     * Group by TipoBoleta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TipoBoletaGroupByArgs} args - Group by arguments.
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
      T extends TipoBoletaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TipoBoletaGroupByArgs['orderBy'] }
        : { orderBy?: TipoBoletaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TipoBoletaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipoBoletaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TipoBoleta model
   */
  readonly fields: TipoBoletaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TipoBoleta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TipoBoletaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    compras<T extends TipoBoleta$comprasArgs<ExtArgs> = {}>(args?: Subset<T, TipoBoleta$comprasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    funcion<T extends FuncionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FuncionDefaultArgs<ExtArgs>>): Prisma__FuncionClient<$Result.GetResult<Prisma.$FuncionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TipoBoleta model
   */
  interface TipoBoletaFieldRefs {
    readonly idTipoBoleta: FieldRef<"TipoBoleta", 'Int'>
    readonly nombre: FieldRef<"TipoBoleta", 'String'>
    readonly localizacion: FieldRef<"TipoBoleta", 'String'>
    readonly precio: FieldRef<"TipoBoleta", 'Int'>
    readonly cupoMaximo: FieldRef<"TipoBoleta", 'Int'>
    readonly disponibles: FieldRef<"TipoBoleta", 'Int'>
    readonly idFuncion: FieldRef<"TipoBoleta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TipoBoleta findUnique
   */
  export type TipoBoletaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBoleta
     */
    select?: TipoBoletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBoleta
     */
    omit?: TipoBoletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBoletaInclude<ExtArgs> | null
    /**
     * Filter, which TipoBoleta to fetch.
     */
    where: TipoBoletaWhereUniqueInput
  }

  /**
   * TipoBoleta findUniqueOrThrow
   */
  export type TipoBoletaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBoleta
     */
    select?: TipoBoletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBoleta
     */
    omit?: TipoBoletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBoletaInclude<ExtArgs> | null
    /**
     * Filter, which TipoBoleta to fetch.
     */
    where: TipoBoletaWhereUniqueInput
  }

  /**
   * TipoBoleta findFirst
   */
  export type TipoBoletaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBoleta
     */
    select?: TipoBoletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBoleta
     */
    omit?: TipoBoletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBoletaInclude<ExtArgs> | null
    /**
     * Filter, which TipoBoleta to fetch.
     */
    where?: TipoBoletaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoBoletas to fetch.
     */
    orderBy?: TipoBoletaOrderByWithRelationInput | TipoBoletaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoBoletas.
     */
    cursor?: TipoBoletaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoBoletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoBoletas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoBoletas.
     */
    distinct?: TipoBoletaScalarFieldEnum | TipoBoletaScalarFieldEnum[]
  }

  /**
   * TipoBoleta findFirstOrThrow
   */
  export type TipoBoletaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBoleta
     */
    select?: TipoBoletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBoleta
     */
    omit?: TipoBoletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBoletaInclude<ExtArgs> | null
    /**
     * Filter, which TipoBoleta to fetch.
     */
    where?: TipoBoletaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoBoletas to fetch.
     */
    orderBy?: TipoBoletaOrderByWithRelationInput | TipoBoletaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TipoBoletas.
     */
    cursor?: TipoBoletaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoBoletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoBoletas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TipoBoletas.
     */
    distinct?: TipoBoletaScalarFieldEnum | TipoBoletaScalarFieldEnum[]
  }

  /**
   * TipoBoleta findMany
   */
  export type TipoBoletaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBoleta
     */
    select?: TipoBoletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBoleta
     */
    omit?: TipoBoletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBoletaInclude<ExtArgs> | null
    /**
     * Filter, which TipoBoletas to fetch.
     */
    where?: TipoBoletaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TipoBoletas to fetch.
     */
    orderBy?: TipoBoletaOrderByWithRelationInput | TipoBoletaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TipoBoletas.
     */
    cursor?: TipoBoletaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TipoBoletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TipoBoletas.
     */
    skip?: number
    distinct?: TipoBoletaScalarFieldEnum | TipoBoletaScalarFieldEnum[]
  }

  /**
   * TipoBoleta create
   */
  export type TipoBoletaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBoleta
     */
    select?: TipoBoletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBoleta
     */
    omit?: TipoBoletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBoletaInclude<ExtArgs> | null
    /**
     * The data needed to create a TipoBoleta.
     */
    data: XOR<TipoBoletaCreateInput, TipoBoletaUncheckedCreateInput>
  }

  /**
   * TipoBoleta createMany
   */
  export type TipoBoletaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TipoBoletas.
     */
    data: TipoBoletaCreateManyInput | TipoBoletaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TipoBoleta createManyAndReturn
   */
  export type TipoBoletaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBoleta
     */
    select?: TipoBoletaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBoleta
     */
    omit?: TipoBoletaOmit<ExtArgs> | null
    /**
     * The data used to create many TipoBoletas.
     */
    data: TipoBoletaCreateManyInput | TipoBoletaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBoletaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TipoBoleta update
   */
  export type TipoBoletaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBoleta
     */
    select?: TipoBoletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBoleta
     */
    omit?: TipoBoletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBoletaInclude<ExtArgs> | null
    /**
     * The data needed to update a TipoBoleta.
     */
    data: XOR<TipoBoletaUpdateInput, TipoBoletaUncheckedUpdateInput>
    /**
     * Choose, which TipoBoleta to update.
     */
    where: TipoBoletaWhereUniqueInput
  }

  /**
   * TipoBoleta updateMany
   */
  export type TipoBoletaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TipoBoletas.
     */
    data: XOR<TipoBoletaUpdateManyMutationInput, TipoBoletaUncheckedUpdateManyInput>
    /**
     * Filter which TipoBoletas to update
     */
    where?: TipoBoletaWhereInput
    /**
     * Limit how many TipoBoletas to update.
     */
    limit?: number
  }

  /**
   * TipoBoleta updateManyAndReturn
   */
  export type TipoBoletaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBoleta
     */
    select?: TipoBoletaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBoleta
     */
    omit?: TipoBoletaOmit<ExtArgs> | null
    /**
     * The data used to update TipoBoletas.
     */
    data: XOR<TipoBoletaUpdateManyMutationInput, TipoBoletaUncheckedUpdateManyInput>
    /**
     * Filter which TipoBoletas to update
     */
    where?: TipoBoletaWhereInput
    /**
     * Limit how many TipoBoletas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBoletaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TipoBoleta upsert
   */
  export type TipoBoletaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBoleta
     */
    select?: TipoBoletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBoleta
     */
    omit?: TipoBoletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBoletaInclude<ExtArgs> | null
    /**
     * The filter to search for the TipoBoleta to update in case it exists.
     */
    where: TipoBoletaWhereUniqueInput
    /**
     * In case the TipoBoleta found by the `where` argument doesn't exist, create a new TipoBoleta with this data.
     */
    create: XOR<TipoBoletaCreateInput, TipoBoletaUncheckedCreateInput>
    /**
     * In case the TipoBoleta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TipoBoletaUpdateInput, TipoBoletaUncheckedUpdateInput>
  }

  /**
   * TipoBoleta delete
   */
  export type TipoBoletaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBoleta
     */
    select?: TipoBoletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBoleta
     */
    omit?: TipoBoletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBoletaInclude<ExtArgs> | null
    /**
     * Filter which TipoBoleta to delete.
     */
    where: TipoBoletaWhereUniqueInput
  }

  /**
   * TipoBoleta deleteMany
   */
  export type TipoBoletaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TipoBoletas to delete
     */
    where?: TipoBoletaWhereInput
    /**
     * Limit how many TipoBoletas to delete.
     */
    limit?: number
  }

  /**
   * TipoBoleta.compras
   */
  export type TipoBoleta$comprasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    cursor?: CompraWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * TipoBoleta without action
   */
  export type TipoBoletaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TipoBoleta
     */
    select?: TipoBoletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TipoBoleta
     */
    omit?: TipoBoletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TipoBoletaInclude<ExtArgs> | null
  }


  /**
   * Model Compra
   */

  export type AggregateCompra = {
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  export type CompraAvgAggregateOutputType = {
    idCompra: number | null
    cantidad: number | null
    cedula: number | null
    idTipoBoleta: number | null
    estado: number | null
  }

  export type CompraSumAggregateOutputType = {
    idCompra: number | null
    cantidad: number | null
    cedula: number | null
    idTipoBoleta: number | null
    estado: number | null
  }

  export type CompraMinAggregateOutputType = {
    idCompra: number | null
    fecha: Date | null
    cantidad: number | null
    formaPago: string | null
    cedula: number | null
    idTipoBoleta: number | null
    estado: number | null
  }

  export type CompraMaxAggregateOutputType = {
    idCompra: number | null
    fecha: Date | null
    cantidad: number | null
    formaPago: string | null
    cedula: number | null
    idTipoBoleta: number | null
    estado: number | null
  }

  export type CompraCountAggregateOutputType = {
    idCompra: number
    fecha: number
    cantidad: number
    formaPago: number
    cedula: number
    idTipoBoleta: number
    estado: number
    _all: number
  }


  export type CompraAvgAggregateInputType = {
    idCompra?: true
    cantidad?: true
    cedula?: true
    idTipoBoleta?: true
    estado?: true
  }

  export type CompraSumAggregateInputType = {
    idCompra?: true
    cantidad?: true
    cedula?: true
    idTipoBoleta?: true
    estado?: true
  }

  export type CompraMinAggregateInputType = {
    idCompra?: true
    fecha?: true
    cantidad?: true
    formaPago?: true
    cedula?: true
    idTipoBoleta?: true
    estado?: true
  }

  export type CompraMaxAggregateInputType = {
    idCompra?: true
    fecha?: true
    cantidad?: true
    formaPago?: true
    cedula?: true
    idTipoBoleta?: true
    estado?: true
  }

  export type CompraCountAggregateInputType = {
    idCompra?: true
    fecha?: true
    cantidad?: true
    formaPago?: true
    cedula?: true
    idTipoBoleta?: true
    estado?: true
    _all?: true
  }

  export type CompraAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compra to aggregate.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Compras
    **/
    _count?: true | CompraCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompraAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompraSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompraMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompraMaxAggregateInputType
  }

  export type GetCompraAggregateType<T extends CompraAggregateArgs> = {
        [P in keyof T & keyof AggregateCompra]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompra[P]>
      : GetScalarType<T[P], AggregateCompra[P]>
  }




  export type CompraGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompraWhereInput
    orderBy?: CompraOrderByWithAggregationInput | CompraOrderByWithAggregationInput[]
    by: CompraScalarFieldEnum[] | CompraScalarFieldEnum
    having?: CompraScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompraCountAggregateInputType | true
    _avg?: CompraAvgAggregateInputType
    _sum?: CompraSumAggregateInputType
    _min?: CompraMinAggregateInputType
    _max?: CompraMaxAggregateInputType
  }

  export type CompraGroupByOutputType = {
    idCompra: number
    fecha: Date
    cantidad: number
    formaPago: string
    cedula: number
    idTipoBoleta: number
    estado: number
    _count: CompraCountAggregateOutputType | null
    _avg: CompraAvgAggregateOutputType | null
    _sum: CompraSumAggregateOutputType | null
    _min: CompraMinAggregateOutputType | null
    _max: CompraMaxAggregateOutputType | null
  }

  type GetCompraGroupByPayload<T extends CompraGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompraGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompraGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompraGroupByOutputType[P]>
            : GetScalarType<T[P], CompraGroupByOutputType[P]>
        }
      >
    >


  export type CompraSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCompra?: boolean
    fecha?: boolean
    cantidad?: boolean
    formaPago?: boolean
    cedula?: boolean
    idTipoBoleta?: boolean
    estado?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    tipoBoleta?: boolean | TipoBoletaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compra"]>

  export type CompraSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCompra?: boolean
    fecha?: boolean
    cantidad?: boolean
    formaPago?: boolean
    cedula?: boolean
    idTipoBoleta?: boolean
    estado?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    tipoBoleta?: boolean | TipoBoletaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compra"]>

  export type CompraSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idCompra?: boolean
    fecha?: boolean
    cantidad?: boolean
    formaPago?: boolean
    cedula?: boolean
    idTipoBoleta?: boolean
    estado?: boolean
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    tipoBoleta?: boolean | TipoBoletaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compra"]>

  export type CompraSelectScalar = {
    idCompra?: boolean
    fecha?: boolean
    cantidad?: boolean
    formaPago?: boolean
    cedula?: boolean
    idTipoBoleta?: boolean
    estado?: boolean
  }

  export type CompraOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idCompra" | "fecha" | "cantidad" | "formaPago" | "cedula" | "idTipoBoleta" | "estado", ExtArgs["result"]["compra"]>
  export type CompraInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    tipoBoleta?: boolean | TipoBoletaDefaultArgs<ExtArgs>
  }
  export type CompraIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    tipoBoleta?: boolean | TipoBoletaDefaultArgs<ExtArgs>
  }
  export type CompraIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cliente?: boolean | ClienteDefaultArgs<ExtArgs>
    tipoBoleta?: boolean | TipoBoletaDefaultArgs<ExtArgs>
  }

  export type $CompraPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Compra"
    objects: {
      cliente: Prisma.$ClientePayload<ExtArgs>
      tipoBoleta: Prisma.$TipoBoletaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idCompra: number
      fecha: Date
      cantidad: number
      formaPago: string
      cedula: number
      idTipoBoleta: number
      estado: number
    }, ExtArgs["result"]["compra"]>
    composites: {}
  }

  type CompraGetPayload<S extends boolean | null | undefined | CompraDefaultArgs> = $Result.GetResult<Prisma.$CompraPayload, S>

  type CompraCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompraCountAggregateInputType | true
    }

  export interface CompraDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Compra'], meta: { name: 'Compra' } }
    /**
     * Find zero or one Compra that matches the filter.
     * @param {CompraFindUniqueArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompraFindUniqueArgs>(args: SelectSubset<T, CompraFindUniqueArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Compra that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompraFindUniqueOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompraFindUniqueOrThrowArgs>(args: SelectSubset<T, CompraFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compra that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompraFindFirstArgs>(args?: SelectSubset<T, CompraFindFirstArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Compra that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindFirstOrThrowArgs} args - Arguments to find a Compra
     * @example
     * // Get one Compra
     * const compra = await prisma.compra.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompraFindFirstOrThrowArgs>(args?: SelectSubset<T, CompraFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Compras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Compras
     * const compras = await prisma.compra.findMany()
     * 
     * // Get first 10 Compras
     * const compras = await prisma.compra.findMany({ take: 10 })
     * 
     * // Only select the `idCompra`
     * const compraWithIdCompraOnly = await prisma.compra.findMany({ select: { idCompra: true } })
     * 
     */
    findMany<T extends CompraFindManyArgs>(args?: SelectSubset<T, CompraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Compra.
     * @param {CompraCreateArgs} args - Arguments to create a Compra.
     * @example
     * // Create one Compra
     * const Compra = await prisma.compra.create({
     *   data: {
     *     // ... data to create a Compra
     *   }
     * })
     * 
     */
    create<T extends CompraCreateArgs>(args: SelectSubset<T, CompraCreateArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Compras.
     * @param {CompraCreateManyArgs} args - Arguments to create many Compras.
     * @example
     * // Create many Compras
     * const compra = await prisma.compra.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompraCreateManyArgs>(args?: SelectSubset<T, CompraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Compras and returns the data saved in the database.
     * @param {CompraCreateManyAndReturnArgs} args - Arguments to create many Compras.
     * @example
     * // Create many Compras
     * const compra = await prisma.compra.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Compras and only return the `idCompra`
     * const compraWithIdCompraOnly = await prisma.compra.createManyAndReturn({
     *   select: { idCompra: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompraCreateManyAndReturnArgs>(args?: SelectSubset<T, CompraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Compra.
     * @param {CompraDeleteArgs} args - Arguments to delete one Compra.
     * @example
     * // Delete one Compra
     * const Compra = await prisma.compra.delete({
     *   where: {
     *     // ... filter to delete one Compra
     *   }
     * })
     * 
     */
    delete<T extends CompraDeleteArgs>(args: SelectSubset<T, CompraDeleteArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Compra.
     * @param {CompraUpdateArgs} args - Arguments to update one Compra.
     * @example
     * // Update one Compra
     * const compra = await prisma.compra.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompraUpdateArgs>(args: SelectSubset<T, CompraUpdateArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Compras.
     * @param {CompraDeleteManyArgs} args - Arguments to filter Compras to delete.
     * @example
     * // Delete a few Compras
     * const { count } = await prisma.compra.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompraDeleteManyArgs>(args?: SelectSubset<T, CompraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Compras
     * const compra = await prisma.compra.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompraUpdateManyArgs>(args: SelectSubset<T, CompraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Compras and returns the data updated in the database.
     * @param {CompraUpdateManyAndReturnArgs} args - Arguments to update many Compras.
     * @example
     * // Update many Compras
     * const compra = await prisma.compra.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Compras and only return the `idCompra`
     * const compraWithIdCompraOnly = await prisma.compra.updateManyAndReturn({
     *   select: { idCompra: true },
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
    updateManyAndReturn<T extends CompraUpdateManyAndReturnArgs>(args: SelectSubset<T, CompraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Compra.
     * @param {CompraUpsertArgs} args - Arguments to update or create a Compra.
     * @example
     * // Update or create a Compra
     * const compra = await prisma.compra.upsert({
     *   create: {
     *     // ... data to create a Compra
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Compra we want to update
     *   }
     * })
     */
    upsert<T extends CompraUpsertArgs>(args: SelectSubset<T, CompraUpsertArgs<ExtArgs>>): Prisma__CompraClient<$Result.GetResult<Prisma.$CompraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Compras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraCountArgs} args - Arguments to filter Compras to count.
     * @example
     * // Count the number of Compras
     * const count = await prisma.compra.count({
     *   where: {
     *     // ... the filter for the Compras we want to count
     *   }
     * })
    **/
    count<T extends CompraCountArgs>(
      args?: Subset<T, CompraCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompraCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompraAggregateArgs>(args: Subset<T, CompraAggregateArgs>): Prisma.PrismaPromise<GetCompraAggregateType<T>>

    /**
     * Group by Compra.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompraGroupByArgs} args - Group by arguments.
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
      T extends CompraGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompraGroupByArgs['orderBy'] }
        : { orderBy?: CompraGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Compra model
   */
  readonly fields: CompraFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Compra.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompraClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cliente<T extends ClienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClienteDefaultArgs<ExtArgs>>): Prisma__ClienteClient<$Result.GetResult<Prisma.$ClientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tipoBoleta<T extends TipoBoletaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TipoBoletaDefaultArgs<ExtArgs>>): Prisma__TipoBoletaClient<$Result.GetResult<Prisma.$TipoBoletaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Compra model
   */
  interface CompraFieldRefs {
    readonly idCompra: FieldRef<"Compra", 'Int'>
    readonly fecha: FieldRef<"Compra", 'DateTime'>
    readonly cantidad: FieldRef<"Compra", 'Int'>
    readonly formaPago: FieldRef<"Compra", 'String'>
    readonly cedula: FieldRef<"Compra", 'Int'>
    readonly idTipoBoleta: FieldRef<"Compra", 'Int'>
    readonly estado: FieldRef<"Compra", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Compra findUnique
   */
  export type CompraFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra findUniqueOrThrow
   */
  export type CompraFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra findFirst
   */
  export type CompraFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     */
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra findFirstOrThrow
   */
  export type CompraFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compra to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Compras.
     */
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra findMany
   */
  export type CompraFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter, which Compras to fetch.
     */
    where?: CompraWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Compras to fetch.
     */
    orderBy?: CompraOrderByWithRelationInput | CompraOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Compras.
     */
    cursor?: CompraWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Compras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Compras.
     */
    skip?: number
    distinct?: CompraScalarFieldEnum | CompraScalarFieldEnum[]
  }

  /**
   * Compra create
   */
  export type CompraCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The data needed to create a Compra.
     */
    data: XOR<CompraCreateInput, CompraUncheckedCreateInput>
  }

  /**
   * Compra createMany
   */
  export type CompraCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Compras.
     */
    data: CompraCreateManyInput | CompraCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Compra createManyAndReturn
   */
  export type CompraCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * The data used to create many Compras.
     */
    data: CompraCreateManyInput | CompraCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Compra update
   */
  export type CompraUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The data needed to update a Compra.
     */
    data: XOR<CompraUpdateInput, CompraUncheckedUpdateInput>
    /**
     * Choose, which Compra to update.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra updateMany
   */
  export type CompraUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Compras.
     */
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyInput>
    /**
     * Filter which Compras to update
     */
    where?: CompraWhereInput
    /**
     * Limit how many Compras to update.
     */
    limit?: number
  }

  /**
   * Compra updateManyAndReturn
   */
  export type CompraUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * The data used to update Compras.
     */
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyInput>
    /**
     * Filter which Compras to update
     */
    where?: CompraWhereInput
    /**
     * Limit how many Compras to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Compra upsert
   */
  export type CompraUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * The filter to search for the Compra to update in case it exists.
     */
    where: CompraWhereUniqueInput
    /**
     * In case the Compra found by the `where` argument doesn't exist, create a new Compra with this data.
     */
    create: XOR<CompraCreateInput, CompraUncheckedCreateInput>
    /**
     * In case the Compra was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompraUpdateInput, CompraUncheckedUpdateInput>
  }

  /**
   * Compra delete
   */
  export type CompraDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
    /**
     * Filter which Compra to delete.
     */
    where: CompraWhereUniqueInput
  }

  /**
   * Compra deleteMany
   */
  export type CompraDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Compras to delete
     */
    where?: CompraWhereInput
    /**
     * Limit how many Compras to delete.
     */
    limit?: number
  }

  /**
   * Compra without action
   */
  export type CompraDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Compra
     */
    select?: CompraSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Compra
     */
    omit?: CompraOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompraInclude<ExtArgs> | null
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


  export const AdministradorScalarFieldEnum: {
    cedulaAdm: 'cedulaAdm',
    nombres: 'nombres',
    apellidos: 'apellidos',
    direccion: 'direccion',
    municipio: 'municipio',
    departamento: 'departamento',
    email: 'email',
    telefono: 'telefono',
    contrasena: 'contrasena',
    estado: 'estado'
  };

  export type AdministradorScalarFieldEnum = (typeof AdministradorScalarFieldEnum)[keyof typeof AdministradorScalarFieldEnum]


  export const ClienteScalarFieldEnum: {
    cedula: 'cedula',
    nombres: 'nombres',
    apellidos: 'apellidos',
    direccion: 'direccion',
    departamento: 'departamento',
    municipio: 'municipio',
    email: 'email',
    telefono: 'telefono',
    contrasena: 'contrasena',
    estado: 'estado'
  };

  export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum]


  export const EventoScalarFieldEnum: {
    idEvento: 'idEvento',
    nombre: 'nombre',
    descripcion: 'descripcion',
    fotoPrincipal: 'fotoPrincipal',
    fotoSecundaria: 'fotoSecundaria',
    cedulaAdm: 'cedulaAdm',
    estado: 'estado'
  };

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const UbicacionScalarFieldEnum: {
    idUbicacion: 'idUbicacion',
    nombre: 'nombre',
    personaContacto: 'personaContacto',
    telefono: 'telefono',
    direccion: 'direccion',
    municipio: 'municipio',
    departamento: 'departamento',
    email: 'email',
    estado: 'estado'
  };

  export type UbicacionScalarFieldEnum = (typeof UbicacionScalarFieldEnum)[keyof typeof UbicacionScalarFieldEnum]


  export const FuncionScalarFieldEnum: {
    idFuncion: 'idFuncion',
    nombre: 'nombre',
    descripcion: 'descripcion',
    fecha: 'fecha',
    horaInicio: 'horaInicio',
    idEvento: 'idEvento',
    idUbicacion: 'idUbicacion',
    estado: 'estado'
  };

  export type FuncionScalarFieldEnum = (typeof FuncionScalarFieldEnum)[keyof typeof FuncionScalarFieldEnum]


  export const TipoBoletaScalarFieldEnum: {
    idTipoBoleta: 'idTipoBoleta',
    nombre: 'nombre',
    localizacion: 'localizacion',
    precio: 'precio',
    cupoMaximo: 'cupoMaximo',
    disponibles: 'disponibles',
    idFuncion: 'idFuncion'
  };

  export type TipoBoletaScalarFieldEnum = (typeof TipoBoletaScalarFieldEnum)[keyof typeof TipoBoletaScalarFieldEnum]


  export const CompraScalarFieldEnum: {
    idCompra: 'idCompra',
    fecha: 'fecha',
    cantidad: 'cantidad',
    formaPago: 'formaPago',
    cedula: 'cedula',
    idTipoBoleta: 'idTipoBoleta',
    estado: 'estado'
  };

  export type CompraScalarFieldEnum = (typeof CompraScalarFieldEnum)[keyof typeof CompraScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type AdministradorWhereInput = {
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    cedulaAdm?: IntFilter<"Administrador"> | number
    nombres?: StringFilter<"Administrador"> | string
    apellidos?: StringFilter<"Administrador"> | string
    direccion?: StringFilter<"Administrador"> | string
    municipio?: StringFilter<"Administrador"> | string
    departamento?: StringFilter<"Administrador"> | string
    email?: StringFilter<"Administrador"> | string
    telefono?: StringFilter<"Administrador"> | string
    contrasena?: StringFilter<"Administrador"> | string
    estado?: IntFilter<"Administrador"> | number
    eventos?: EventoListRelationFilter
  }

  export type AdministradorOrderByWithRelationInput = {
    cedulaAdm?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    direccion?: SortOrder
    municipio?: SortOrder
    departamento?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
    eventos?: EventoOrderByRelationAggregateInput
  }

  export type AdministradorWhereUniqueInput = Prisma.AtLeast<{
    cedulaAdm?: number
    email?: string
    AND?: AdministradorWhereInput | AdministradorWhereInput[]
    OR?: AdministradorWhereInput[]
    NOT?: AdministradorWhereInput | AdministradorWhereInput[]
    nombres?: StringFilter<"Administrador"> | string
    apellidos?: StringFilter<"Administrador"> | string
    direccion?: StringFilter<"Administrador"> | string
    municipio?: StringFilter<"Administrador"> | string
    departamento?: StringFilter<"Administrador"> | string
    telefono?: StringFilter<"Administrador"> | string
    contrasena?: StringFilter<"Administrador"> | string
    estado?: IntFilter<"Administrador"> | number
    eventos?: EventoListRelationFilter
  }, "cedulaAdm" | "email">

  export type AdministradorOrderByWithAggregationInput = {
    cedulaAdm?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    direccion?: SortOrder
    municipio?: SortOrder
    departamento?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
    _count?: AdministradorCountOrderByAggregateInput
    _avg?: AdministradorAvgOrderByAggregateInput
    _max?: AdministradorMaxOrderByAggregateInput
    _min?: AdministradorMinOrderByAggregateInput
    _sum?: AdministradorSumOrderByAggregateInput
  }

  export type AdministradorScalarWhereWithAggregatesInput = {
    AND?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    OR?: AdministradorScalarWhereWithAggregatesInput[]
    NOT?: AdministradorScalarWhereWithAggregatesInput | AdministradorScalarWhereWithAggregatesInput[]
    cedulaAdm?: IntWithAggregatesFilter<"Administrador"> | number
    nombres?: StringWithAggregatesFilter<"Administrador"> | string
    apellidos?: StringWithAggregatesFilter<"Administrador"> | string
    direccion?: StringWithAggregatesFilter<"Administrador"> | string
    municipio?: StringWithAggregatesFilter<"Administrador"> | string
    departamento?: StringWithAggregatesFilter<"Administrador"> | string
    email?: StringWithAggregatesFilter<"Administrador"> | string
    telefono?: StringWithAggregatesFilter<"Administrador"> | string
    contrasena?: StringWithAggregatesFilter<"Administrador"> | string
    estado?: IntWithAggregatesFilter<"Administrador"> | number
  }

  export type ClienteWhereInput = {
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    cedula?: IntFilter<"Cliente"> | number
    nombres?: StringFilter<"Cliente"> | string
    apellidos?: StringFilter<"Cliente"> | string
    direccion?: StringFilter<"Cliente"> | string
    departamento?: StringFilter<"Cliente"> | string
    municipio?: StringFilter<"Cliente"> | string
    email?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    contrasena?: StringFilter<"Cliente"> | string
    estado?: IntFilter<"Cliente"> | number
    compras?: CompraListRelationFilter
  }

  export type ClienteOrderByWithRelationInput = {
    cedula?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    direccion?: SortOrder
    departamento?: SortOrder
    municipio?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
    compras?: CompraOrderByRelationAggregateInput
  }

  export type ClienteWhereUniqueInput = Prisma.AtLeast<{
    cedula?: number
    email?: string
    AND?: ClienteWhereInput | ClienteWhereInput[]
    OR?: ClienteWhereInput[]
    NOT?: ClienteWhereInput | ClienteWhereInput[]
    nombres?: StringFilter<"Cliente"> | string
    apellidos?: StringFilter<"Cliente"> | string
    direccion?: StringFilter<"Cliente"> | string
    departamento?: StringFilter<"Cliente"> | string
    municipio?: StringFilter<"Cliente"> | string
    telefono?: StringFilter<"Cliente"> | string
    contrasena?: StringFilter<"Cliente"> | string
    estado?: IntFilter<"Cliente"> | number
    compras?: CompraListRelationFilter
  }, "cedula" | "email">

  export type ClienteOrderByWithAggregationInput = {
    cedula?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    direccion?: SortOrder
    departamento?: SortOrder
    municipio?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
    _count?: ClienteCountOrderByAggregateInput
    _avg?: ClienteAvgOrderByAggregateInput
    _max?: ClienteMaxOrderByAggregateInput
    _min?: ClienteMinOrderByAggregateInput
    _sum?: ClienteSumOrderByAggregateInput
  }

  export type ClienteScalarWhereWithAggregatesInput = {
    AND?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    OR?: ClienteScalarWhereWithAggregatesInput[]
    NOT?: ClienteScalarWhereWithAggregatesInput | ClienteScalarWhereWithAggregatesInput[]
    cedula?: IntWithAggregatesFilter<"Cliente"> | number
    nombres?: StringWithAggregatesFilter<"Cliente"> | string
    apellidos?: StringWithAggregatesFilter<"Cliente"> | string
    direccion?: StringWithAggregatesFilter<"Cliente"> | string
    departamento?: StringWithAggregatesFilter<"Cliente"> | string
    municipio?: StringWithAggregatesFilter<"Cliente"> | string
    email?: StringWithAggregatesFilter<"Cliente"> | string
    telefono?: StringWithAggregatesFilter<"Cliente"> | string
    contrasena?: StringWithAggregatesFilter<"Cliente"> | string
    estado?: IntWithAggregatesFilter<"Cliente"> | number
  }

  export type EventoWhereInput = {
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    idEvento?: IntFilter<"Evento"> | number
    nombre?: StringFilter<"Evento"> | string
    descripcion?: StringFilter<"Evento"> | string
    fotoPrincipal?: StringFilter<"Evento"> | string
    fotoSecundaria?: StringFilter<"Evento"> | string
    cedulaAdm?: IntFilter<"Evento"> | number
    estado?: IntFilter<"Evento"> | number
    administrador?: XOR<AdministradorScalarRelationFilter, AdministradorWhereInput>
    funciones?: FuncionListRelationFilter
  }

  export type EventoOrderByWithRelationInput = {
    idEvento?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fotoPrincipal?: SortOrder
    fotoSecundaria?: SortOrder
    cedulaAdm?: SortOrder
    estado?: SortOrder
    administrador?: AdministradorOrderByWithRelationInput
    funciones?: FuncionOrderByRelationAggregateInput
  }

  export type EventoWhereUniqueInput = Prisma.AtLeast<{
    idEvento?: number
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    nombre?: StringFilter<"Evento"> | string
    descripcion?: StringFilter<"Evento"> | string
    fotoPrincipal?: StringFilter<"Evento"> | string
    fotoSecundaria?: StringFilter<"Evento"> | string
    cedulaAdm?: IntFilter<"Evento"> | number
    estado?: IntFilter<"Evento"> | number
    administrador?: XOR<AdministradorScalarRelationFilter, AdministradorWhereInput>
    funciones?: FuncionListRelationFilter
  }, "idEvento">

  export type EventoOrderByWithAggregationInput = {
    idEvento?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fotoPrincipal?: SortOrder
    fotoSecundaria?: SortOrder
    cedulaAdm?: SortOrder
    estado?: SortOrder
    _count?: EventoCountOrderByAggregateInput
    _avg?: EventoAvgOrderByAggregateInput
    _max?: EventoMaxOrderByAggregateInput
    _min?: EventoMinOrderByAggregateInput
    _sum?: EventoSumOrderByAggregateInput
  }

  export type EventoScalarWhereWithAggregatesInput = {
    AND?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    OR?: EventoScalarWhereWithAggregatesInput[]
    NOT?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    idEvento?: IntWithAggregatesFilter<"Evento"> | number
    nombre?: StringWithAggregatesFilter<"Evento"> | string
    descripcion?: StringWithAggregatesFilter<"Evento"> | string
    fotoPrincipal?: StringWithAggregatesFilter<"Evento"> | string
    fotoSecundaria?: StringWithAggregatesFilter<"Evento"> | string
    cedulaAdm?: IntWithAggregatesFilter<"Evento"> | number
    estado?: IntWithAggregatesFilter<"Evento"> | number
  }

  export type UbicacionWhereInput = {
    AND?: UbicacionWhereInput | UbicacionWhereInput[]
    OR?: UbicacionWhereInput[]
    NOT?: UbicacionWhereInput | UbicacionWhereInput[]
    idUbicacion?: IntFilter<"Ubicacion"> | number
    nombre?: StringFilter<"Ubicacion"> | string
    personaContacto?: StringFilter<"Ubicacion"> | string
    telefono?: StringFilter<"Ubicacion"> | string
    direccion?: StringFilter<"Ubicacion"> | string
    municipio?: StringFilter<"Ubicacion"> | string
    departamento?: StringFilter<"Ubicacion"> | string
    email?: StringFilter<"Ubicacion"> | string
    estado?: IntFilter<"Ubicacion"> | number
    funciones?: FuncionListRelationFilter
  }

  export type UbicacionOrderByWithRelationInput = {
    idUbicacion?: SortOrder
    nombre?: SortOrder
    personaContacto?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    municipio?: SortOrder
    departamento?: SortOrder
    email?: SortOrder
    estado?: SortOrder
    funciones?: FuncionOrderByRelationAggregateInput
  }

  export type UbicacionWhereUniqueInput = Prisma.AtLeast<{
    idUbicacion?: number
    AND?: UbicacionWhereInput | UbicacionWhereInput[]
    OR?: UbicacionWhereInput[]
    NOT?: UbicacionWhereInput | UbicacionWhereInput[]
    nombre?: StringFilter<"Ubicacion"> | string
    personaContacto?: StringFilter<"Ubicacion"> | string
    telefono?: StringFilter<"Ubicacion"> | string
    direccion?: StringFilter<"Ubicacion"> | string
    municipio?: StringFilter<"Ubicacion"> | string
    departamento?: StringFilter<"Ubicacion"> | string
    email?: StringFilter<"Ubicacion"> | string
    estado?: IntFilter<"Ubicacion"> | number
    funciones?: FuncionListRelationFilter
  }, "idUbicacion">

  export type UbicacionOrderByWithAggregationInput = {
    idUbicacion?: SortOrder
    nombre?: SortOrder
    personaContacto?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    municipio?: SortOrder
    departamento?: SortOrder
    email?: SortOrder
    estado?: SortOrder
    _count?: UbicacionCountOrderByAggregateInput
    _avg?: UbicacionAvgOrderByAggregateInput
    _max?: UbicacionMaxOrderByAggregateInput
    _min?: UbicacionMinOrderByAggregateInput
    _sum?: UbicacionSumOrderByAggregateInput
  }

  export type UbicacionScalarWhereWithAggregatesInput = {
    AND?: UbicacionScalarWhereWithAggregatesInput | UbicacionScalarWhereWithAggregatesInput[]
    OR?: UbicacionScalarWhereWithAggregatesInput[]
    NOT?: UbicacionScalarWhereWithAggregatesInput | UbicacionScalarWhereWithAggregatesInput[]
    idUbicacion?: IntWithAggregatesFilter<"Ubicacion"> | number
    nombre?: StringWithAggregatesFilter<"Ubicacion"> | string
    personaContacto?: StringWithAggregatesFilter<"Ubicacion"> | string
    telefono?: StringWithAggregatesFilter<"Ubicacion"> | string
    direccion?: StringWithAggregatesFilter<"Ubicacion"> | string
    municipio?: StringWithAggregatesFilter<"Ubicacion"> | string
    departamento?: StringWithAggregatesFilter<"Ubicacion"> | string
    email?: StringWithAggregatesFilter<"Ubicacion"> | string
    estado?: IntWithAggregatesFilter<"Ubicacion"> | number
  }

  export type FuncionWhereInput = {
    AND?: FuncionWhereInput | FuncionWhereInput[]
    OR?: FuncionWhereInput[]
    NOT?: FuncionWhereInput | FuncionWhereInput[]
    idFuncion?: IntFilter<"Funcion"> | number
    nombre?: StringFilter<"Funcion"> | string
    descripcion?: StringFilter<"Funcion"> | string
    fecha?: DateTimeFilter<"Funcion"> | Date | string
    horaInicio?: DateTimeFilter<"Funcion"> | Date | string
    idEvento?: IntFilter<"Funcion"> | number
    idUbicacion?: IntFilter<"Funcion"> | number
    estado?: IntFilter<"Funcion"> | number
    evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
    ubicacion?: XOR<UbicacionScalarRelationFilter, UbicacionWhereInput>
    tipoBoletas?: TipoBoletaListRelationFilter
  }

  export type FuncionOrderByWithRelationInput = {
    idFuncion?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    idEvento?: SortOrder
    idUbicacion?: SortOrder
    estado?: SortOrder
    evento?: EventoOrderByWithRelationInput
    ubicacion?: UbicacionOrderByWithRelationInput
    tipoBoletas?: TipoBoletaOrderByRelationAggregateInput
  }

  export type FuncionWhereUniqueInput = Prisma.AtLeast<{
    idFuncion?: number
    AND?: FuncionWhereInput | FuncionWhereInput[]
    OR?: FuncionWhereInput[]
    NOT?: FuncionWhereInput | FuncionWhereInput[]
    nombre?: StringFilter<"Funcion"> | string
    descripcion?: StringFilter<"Funcion"> | string
    fecha?: DateTimeFilter<"Funcion"> | Date | string
    horaInicio?: DateTimeFilter<"Funcion"> | Date | string
    idEvento?: IntFilter<"Funcion"> | number
    idUbicacion?: IntFilter<"Funcion"> | number
    estado?: IntFilter<"Funcion"> | number
    evento?: XOR<EventoScalarRelationFilter, EventoWhereInput>
    ubicacion?: XOR<UbicacionScalarRelationFilter, UbicacionWhereInput>
    tipoBoletas?: TipoBoletaListRelationFilter
  }, "idFuncion">

  export type FuncionOrderByWithAggregationInput = {
    idFuncion?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    idEvento?: SortOrder
    idUbicacion?: SortOrder
    estado?: SortOrder
    _count?: FuncionCountOrderByAggregateInput
    _avg?: FuncionAvgOrderByAggregateInput
    _max?: FuncionMaxOrderByAggregateInput
    _min?: FuncionMinOrderByAggregateInput
    _sum?: FuncionSumOrderByAggregateInput
  }

  export type FuncionScalarWhereWithAggregatesInput = {
    AND?: FuncionScalarWhereWithAggregatesInput | FuncionScalarWhereWithAggregatesInput[]
    OR?: FuncionScalarWhereWithAggregatesInput[]
    NOT?: FuncionScalarWhereWithAggregatesInput | FuncionScalarWhereWithAggregatesInput[]
    idFuncion?: IntWithAggregatesFilter<"Funcion"> | number
    nombre?: StringWithAggregatesFilter<"Funcion"> | string
    descripcion?: StringWithAggregatesFilter<"Funcion"> | string
    fecha?: DateTimeWithAggregatesFilter<"Funcion"> | Date | string
    horaInicio?: DateTimeWithAggregatesFilter<"Funcion"> | Date | string
    idEvento?: IntWithAggregatesFilter<"Funcion"> | number
    idUbicacion?: IntWithAggregatesFilter<"Funcion"> | number
    estado?: IntWithAggregatesFilter<"Funcion"> | number
  }

  export type TipoBoletaWhereInput = {
    AND?: TipoBoletaWhereInput | TipoBoletaWhereInput[]
    OR?: TipoBoletaWhereInput[]
    NOT?: TipoBoletaWhereInput | TipoBoletaWhereInput[]
    idTipoBoleta?: IntFilter<"TipoBoleta"> | number
    nombre?: StringFilter<"TipoBoleta"> | string
    localizacion?: StringFilter<"TipoBoleta"> | string
    precio?: IntFilter<"TipoBoleta"> | number
    cupoMaximo?: IntFilter<"TipoBoleta"> | number
    disponibles?: IntFilter<"TipoBoleta"> | number
    idFuncion?: IntFilter<"TipoBoleta"> | number
    compras?: CompraListRelationFilter
    funcion?: XOR<FuncionScalarRelationFilter, FuncionWhereInput>
  }

  export type TipoBoletaOrderByWithRelationInput = {
    idTipoBoleta?: SortOrder
    nombre?: SortOrder
    localizacion?: SortOrder
    precio?: SortOrder
    cupoMaximo?: SortOrder
    disponibles?: SortOrder
    idFuncion?: SortOrder
    compras?: CompraOrderByRelationAggregateInput
    funcion?: FuncionOrderByWithRelationInput
  }

  export type TipoBoletaWhereUniqueInput = Prisma.AtLeast<{
    idTipoBoleta?: number
    AND?: TipoBoletaWhereInput | TipoBoletaWhereInput[]
    OR?: TipoBoletaWhereInput[]
    NOT?: TipoBoletaWhereInput | TipoBoletaWhereInput[]
    nombre?: StringFilter<"TipoBoleta"> | string
    localizacion?: StringFilter<"TipoBoleta"> | string
    precio?: IntFilter<"TipoBoleta"> | number
    cupoMaximo?: IntFilter<"TipoBoleta"> | number
    disponibles?: IntFilter<"TipoBoleta"> | number
    idFuncion?: IntFilter<"TipoBoleta"> | number
    compras?: CompraListRelationFilter
    funcion?: XOR<FuncionScalarRelationFilter, FuncionWhereInput>
  }, "idTipoBoleta">

  export type TipoBoletaOrderByWithAggregationInput = {
    idTipoBoleta?: SortOrder
    nombre?: SortOrder
    localizacion?: SortOrder
    precio?: SortOrder
    cupoMaximo?: SortOrder
    disponibles?: SortOrder
    idFuncion?: SortOrder
    _count?: TipoBoletaCountOrderByAggregateInput
    _avg?: TipoBoletaAvgOrderByAggregateInput
    _max?: TipoBoletaMaxOrderByAggregateInput
    _min?: TipoBoletaMinOrderByAggregateInput
    _sum?: TipoBoletaSumOrderByAggregateInput
  }

  export type TipoBoletaScalarWhereWithAggregatesInput = {
    AND?: TipoBoletaScalarWhereWithAggregatesInput | TipoBoletaScalarWhereWithAggregatesInput[]
    OR?: TipoBoletaScalarWhereWithAggregatesInput[]
    NOT?: TipoBoletaScalarWhereWithAggregatesInput | TipoBoletaScalarWhereWithAggregatesInput[]
    idTipoBoleta?: IntWithAggregatesFilter<"TipoBoleta"> | number
    nombre?: StringWithAggregatesFilter<"TipoBoleta"> | string
    localizacion?: StringWithAggregatesFilter<"TipoBoleta"> | string
    precio?: IntWithAggregatesFilter<"TipoBoleta"> | number
    cupoMaximo?: IntWithAggregatesFilter<"TipoBoleta"> | number
    disponibles?: IntWithAggregatesFilter<"TipoBoleta"> | number
    idFuncion?: IntWithAggregatesFilter<"TipoBoleta"> | number
  }

  export type CompraWhereInput = {
    AND?: CompraWhereInput | CompraWhereInput[]
    OR?: CompraWhereInput[]
    NOT?: CompraWhereInput | CompraWhereInput[]
    idCompra?: IntFilter<"Compra"> | number
    fecha?: DateTimeFilter<"Compra"> | Date | string
    cantidad?: IntFilter<"Compra"> | number
    formaPago?: StringFilter<"Compra"> | string
    cedula?: IntFilter<"Compra"> | number
    idTipoBoleta?: IntFilter<"Compra"> | number
    estado?: IntFilter<"Compra"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    tipoBoleta?: XOR<TipoBoletaScalarRelationFilter, TipoBoletaWhereInput>
  }

  export type CompraOrderByWithRelationInput = {
    idCompra?: SortOrder
    fecha?: SortOrder
    cantidad?: SortOrder
    formaPago?: SortOrder
    cedula?: SortOrder
    idTipoBoleta?: SortOrder
    estado?: SortOrder
    cliente?: ClienteOrderByWithRelationInput
    tipoBoleta?: TipoBoletaOrderByWithRelationInput
  }

  export type CompraWhereUniqueInput = Prisma.AtLeast<{
    idCompra?: number
    AND?: CompraWhereInput | CompraWhereInput[]
    OR?: CompraWhereInput[]
    NOT?: CompraWhereInput | CompraWhereInput[]
    fecha?: DateTimeFilter<"Compra"> | Date | string
    cantidad?: IntFilter<"Compra"> | number
    formaPago?: StringFilter<"Compra"> | string
    cedula?: IntFilter<"Compra"> | number
    idTipoBoleta?: IntFilter<"Compra"> | number
    estado?: IntFilter<"Compra"> | number
    cliente?: XOR<ClienteScalarRelationFilter, ClienteWhereInput>
    tipoBoleta?: XOR<TipoBoletaScalarRelationFilter, TipoBoletaWhereInput>
  }, "idCompra">

  export type CompraOrderByWithAggregationInput = {
    idCompra?: SortOrder
    fecha?: SortOrder
    cantidad?: SortOrder
    formaPago?: SortOrder
    cedula?: SortOrder
    idTipoBoleta?: SortOrder
    estado?: SortOrder
    _count?: CompraCountOrderByAggregateInput
    _avg?: CompraAvgOrderByAggregateInput
    _max?: CompraMaxOrderByAggregateInput
    _min?: CompraMinOrderByAggregateInput
    _sum?: CompraSumOrderByAggregateInput
  }

  export type CompraScalarWhereWithAggregatesInput = {
    AND?: CompraScalarWhereWithAggregatesInput | CompraScalarWhereWithAggregatesInput[]
    OR?: CompraScalarWhereWithAggregatesInput[]
    NOT?: CompraScalarWhereWithAggregatesInput | CompraScalarWhereWithAggregatesInput[]
    idCompra?: IntWithAggregatesFilter<"Compra"> | number
    fecha?: DateTimeWithAggregatesFilter<"Compra"> | Date | string
    cantidad?: IntWithAggregatesFilter<"Compra"> | number
    formaPago?: StringWithAggregatesFilter<"Compra"> | string
    cedula?: IntWithAggregatesFilter<"Compra"> | number
    idTipoBoleta?: IntWithAggregatesFilter<"Compra"> | number
    estado?: IntWithAggregatesFilter<"Compra"> | number
  }

  export type AdministradorCreateInput = {
    cedulaAdm: number
    nombres: string
    apellidos: string
    direccion: string
    municipio: string
    departamento: string
    email: string
    telefono: string
    contrasena: string
    estado: number
    eventos?: EventoCreateNestedManyWithoutAdministradorInput
  }

  export type AdministradorUncheckedCreateInput = {
    cedulaAdm: number
    nombres: string
    apellidos: string
    direccion: string
    municipio: string
    departamento: string
    email: string
    telefono: string
    contrasena: string
    estado: number
    eventos?: EventoUncheckedCreateNestedManyWithoutAdministradorInput
  }

  export type AdministradorUpdateInput = {
    cedulaAdm?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    eventos?: EventoUpdateManyWithoutAdministradorNestedInput
  }

  export type AdministradorUncheckedUpdateInput = {
    cedulaAdm?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    eventos?: EventoUncheckedUpdateManyWithoutAdministradorNestedInput
  }

  export type AdministradorCreateManyInput = {
    cedulaAdm: number
    nombres: string
    apellidos: string
    direccion: string
    municipio: string
    departamento: string
    email: string
    telefono: string
    contrasena: string
    estado: number
  }

  export type AdministradorUpdateManyMutationInput = {
    cedulaAdm?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type AdministradorUncheckedUpdateManyInput = {
    cedulaAdm?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type ClienteCreateInput = {
    cedula: number
    nombres: string
    apellidos: string
    direccion: string
    departamento: string
    municipio: string
    email: string
    telefono: string
    contrasena: string
    estado: number
    compras?: CompraCreateNestedManyWithoutClienteInput
  }

  export type ClienteUncheckedCreateInput = {
    cedula: number
    nombres: string
    apellidos: string
    direccion: string
    departamento: string
    municipio: string
    email: string
    telefono: string
    contrasena: string
    estado: number
    compras?: CompraUncheckedCreateNestedManyWithoutClienteInput
  }

  export type ClienteUpdateInput = {
    cedula?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    compras?: CompraUpdateManyWithoutClienteNestedInput
  }

  export type ClienteUncheckedUpdateInput = {
    cedula?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    compras?: CompraUncheckedUpdateManyWithoutClienteNestedInput
  }

  export type ClienteCreateManyInput = {
    cedula: number
    nombres: string
    apellidos: string
    direccion: string
    departamento: string
    municipio: string
    email: string
    telefono: string
    contrasena: string
    estado: number
  }

  export type ClienteUpdateManyMutationInput = {
    cedula?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type ClienteUncheckedUpdateManyInput = {
    cedula?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type EventoCreateInput = {
    nombre: string
    descripcion: string
    fotoPrincipal: string
    fotoSecundaria: string
    estado: number
    administrador: AdministradorCreateNestedOneWithoutEventosInput
    funciones?: FuncionCreateNestedManyWithoutEventoInput
  }

  export type EventoUncheckedCreateInput = {
    idEvento?: number
    nombre: string
    descripcion: string
    fotoPrincipal: string
    fotoSecundaria: string
    cedulaAdm: number
    estado: number
    funciones?: FuncionUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventoUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fotoPrincipal?: StringFieldUpdateOperationsInput | string
    fotoSecundaria?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    administrador?: AdministradorUpdateOneRequiredWithoutEventosNestedInput
    funciones?: FuncionUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateInput = {
    idEvento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fotoPrincipal?: StringFieldUpdateOperationsInput | string
    fotoSecundaria?: StringFieldUpdateOperationsInput | string
    cedulaAdm?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    funciones?: FuncionUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type EventoCreateManyInput = {
    idEvento?: number
    nombre: string
    descripcion: string
    fotoPrincipal: string
    fotoSecundaria: string
    cedulaAdm: number
    estado: number
  }

  export type EventoUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fotoPrincipal?: StringFieldUpdateOperationsInput | string
    fotoSecundaria?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type EventoUncheckedUpdateManyInput = {
    idEvento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fotoPrincipal?: StringFieldUpdateOperationsInput | string
    fotoSecundaria?: StringFieldUpdateOperationsInput | string
    cedulaAdm?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type UbicacionCreateInput = {
    nombre: string
    personaContacto: string
    telefono: string
    direccion: string
    municipio: string
    departamento: string
    email: string
    estado: number
    funciones?: FuncionCreateNestedManyWithoutUbicacionInput
  }

  export type UbicacionUncheckedCreateInput = {
    idUbicacion?: number
    nombre: string
    personaContacto: string
    telefono: string
    direccion: string
    municipio: string
    departamento: string
    email: string
    estado: number
    funciones?: FuncionUncheckedCreateNestedManyWithoutUbicacionInput
  }

  export type UbicacionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    personaContacto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    funciones?: FuncionUpdateManyWithoutUbicacionNestedInput
  }

  export type UbicacionUncheckedUpdateInput = {
    idUbicacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    personaContacto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    funciones?: FuncionUncheckedUpdateManyWithoutUbicacionNestedInput
  }

  export type UbicacionCreateManyInput = {
    idUbicacion?: number
    nombre: string
    personaContacto: string
    telefono: string
    direccion: string
    municipio: string
    departamento: string
    email: string
    estado: number
  }

  export type UbicacionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    personaContacto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type UbicacionUncheckedUpdateManyInput = {
    idUbicacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    personaContacto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type FuncionCreateInput = {
    nombre: string
    descripcion: string
    fecha: Date | string
    horaInicio: Date | string
    estado: number
    evento: EventoCreateNestedOneWithoutFuncionesInput
    ubicacion: UbicacionCreateNestedOneWithoutFuncionesInput
    tipoBoletas?: TipoBoletaCreateNestedManyWithoutFuncionInput
  }

  export type FuncionUncheckedCreateInput = {
    idFuncion?: number
    nombre: string
    descripcion: string
    fecha: Date | string
    horaInicio: Date | string
    idEvento: number
    idUbicacion: number
    estado: number
    tipoBoletas?: TipoBoletaUncheckedCreateNestedManyWithoutFuncionInput
  }

  export type FuncionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: IntFieldUpdateOperationsInput | number
    evento?: EventoUpdateOneRequiredWithoutFuncionesNestedInput
    ubicacion?: UbicacionUpdateOneRequiredWithoutFuncionesNestedInput
    tipoBoletas?: TipoBoletaUpdateManyWithoutFuncionNestedInput
  }

  export type FuncionUncheckedUpdateInput = {
    idFuncion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    idEvento?: IntFieldUpdateOperationsInput | number
    idUbicacion?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    tipoBoletas?: TipoBoletaUncheckedUpdateManyWithoutFuncionNestedInput
  }

  export type FuncionCreateManyInput = {
    idFuncion?: number
    nombre: string
    descripcion: string
    fecha: Date | string
    horaInicio: Date | string
    idEvento: number
    idUbicacion: number
    estado: number
  }

  export type FuncionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type FuncionUncheckedUpdateManyInput = {
    idFuncion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    idEvento?: IntFieldUpdateOperationsInput | number
    idUbicacion?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type TipoBoletaCreateInput = {
    nombre: string
    localizacion: string
    precio: number
    cupoMaximo: number
    disponibles: number
    compras?: CompraCreateNestedManyWithoutTipoBoletaInput
    funcion: FuncionCreateNestedOneWithoutTipoBoletasInput
  }

  export type TipoBoletaUncheckedCreateInput = {
    idTipoBoleta?: number
    nombre: string
    localizacion: string
    precio: number
    cupoMaximo: number
    disponibles: number
    idFuncion: number
    compras?: CompraUncheckedCreateNestedManyWithoutTipoBoletaInput
  }

  export type TipoBoletaUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    localizacion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    cupoMaximo?: IntFieldUpdateOperationsInput | number
    disponibles?: IntFieldUpdateOperationsInput | number
    compras?: CompraUpdateManyWithoutTipoBoletaNestedInput
    funcion?: FuncionUpdateOneRequiredWithoutTipoBoletasNestedInput
  }

  export type TipoBoletaUncheckedUpdateInput = {
    idTipoBoleta?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    localizacion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    cupoMaximo?: IntFieldUpdateOperationsInput | number
    disponibles?: IntFieldUpdateOperationsInput | number
    idFuncion?: IntFieldUpdateOperationsInput | number
    compras?: CompraUncheckedUpdateManyWithoutTipoBoletaNestedInput
  }

  export type TipoBoletaCreateManyInput = {
    idTipoBoleta?: number
    nombre: string
    localizacion: string
    precio: number
    cupoMaximo: number
    disponibles: number
    idFuncion: number
  }

  export type TipoBoletaUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    localizacion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    cupoMaximo?: IntFieldUpdateOperationsInput | number
    disponibles?: IntFieldUpdateOperationsInput | number
  }

  export type TipoBoletaUncheckedUpdateManyInput = {
    idTipoBoleta?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    localizacion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    cupoMaximo?: IntFieldUpdateOperationsInput | number
    disponibles?: IntFieldUpdateOperationsInput | number
    idFuncion?: IntFieldUpdateOperationsInput | number
  }

  export type CompraCreateInput = {
    fecha?: Date | string
    cantidad: number
    formaPago: string
    estado: number
    cliente: ClienteCreateNestedOneWithoutComprasInput
    tipoBoleta: TipoBoletaCreateNestedOneWithoutComprasInput
  }

  export type CompraUncheckedCreateInput = {
    idCompra?: number
    fecha?: Date | string
    cantidad: number
    formaPago: string
    cedula: number
    idTipoBoleta: number
    estado: number
  }

  export type CompraUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    formaPago?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    cliente?: ClienteUpdateOneRequiredWithoutComprasNestedInput
    tipoBoleta?: TipoBoletaUpdateOneRequiredWithoutComprasNestedInput
  }

  export type CompraUncheckedUpdateInput = {
    idCompra?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    formaPago?: StringFieldUpdateOperationsInput | string
    cedula?: IntFieldUpdateOperationsInput | number
    idTipoBoleta?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type CompraCreateManyInput = {
    idCompra?: number
    fecha?: Date | string
    cantidad: number
    formaPago: string
    cedula: number
    idTipoBoleta: number
    estado: number
  }

  export type CompraUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    formaPago?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type CompraUncheckedUpdateManyInput = {
    idCompra?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    formaPago?: StringFieldUpdateOperationsInput | string
    cedula?: IntFieldUpdateOperationsInput | number
    idTipoBoleta?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
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

  export type EventoListRelationFilter = {
    every?: EventoWhereInput
    some?: EventoWhereInput
    none?: EventoWhereInput
  }

  export type EventoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdministradorCountOrderByAggregateInput = {
    cedulaAdm?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    direccion?: SortOrder
    municipio?: SortOrder
    departamento?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
  }

  export type AdministradorAvgOrderByAggregateInput = {
    cedulaAdm?: SortOrder
    estado?: SortOrder
  }

  export type AdministradorMaxOrderByAggregateInput = {
    cedulaAdm?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    direccion?: SortOrder
    municipio?: SortOrder
    departamento?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
  }

  export type AdministradorMinOrderByAggregateInput = {
    cedulaAdm?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    direccion?: SortOrder
    municipio?: SortOrder
    departamento?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
  }

  export type AdministradorSumOrderByAggregateInput = {
    cedulaAdm?: SortOrder
    estado?: SortOrder
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

  export type CompraListRelationFilter = {
    every?: CompraWhereInput
    some?: CompraWhereInput
    none?: CompraWhereInput
  }

  export type CompraOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClienteCountOrderByAggregateInput = {
    cedula?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    direccion?: SortOrder
    departamento?: SortOrder
    municipio?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
  }

  export type ClienteAvgOrderByAggregateInput = {
    cedula?: SortOrder
    estado?: SortOrder
  }

  export type ClienteMaxOrderByAggregateInput = {
    cedula?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    direccion?: SortOrder
    departamento?: SortOrder
    municipio?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
  }

  export type ClienteMinOrderByAggregateInput = {
    cedula?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    direccion?: SortOrder
    departamento?: SortOrder
    municipio?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    contrasena?: SortOrder
    estado?: SortOrder
  }

  export type ClienteSumOrderByAggregateInput = {
    cedula?: SortOrder
    estado?: SortOrder
  }

  export type AdministradorScalarRelationFilter = {
    is?: AdministradorWhereInput
    isNot?: AdministradorWhereInput
  }

  export type FuncionListRelationFilter = {
    every?: FuncionWhereInput
    some?: FuncionWhereInput
    none?: FuncionWhereInput
  }

  export type FuncionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventoCountOrderByAggregateInput = {
    idEvento?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fotoPrincipal?: SortOrder
    fotoSecundaria?: SortOrder
    cedulaAdm?: SortOrder
    estado?: SortOrder
  }

  export type EventoAvgOrderByAggregateInput = {
    idEvento?: SortOrder
    cedulaAdm?: SortOrder
    estado?: SortOrder
  }

  export type EventoMaxOrderByAggregateInput = {
    idEvento?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fotoPrincipal?: SortOrder
    fotoSecundaria?: SortOrder
    cedulaAdm?: SortOrder
    estado?: SortOrder
  }

  export type EventoMinOrderByAggregateInput = {
    idEvento?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fotoPrincipal?: SortOrder
    fotoSecundaria?: SortOrder
    cedulaAdm?: SortOrder
    estado?: SortOrder
  }

  export type EventoSumOrderByAggregateInput = {
    idEvento?: SortOrder
    cedulaAdm?: SortOrder
    estado?: SortOrder
  }

  export type UbicacionCountOrderByAggregateInput = {
    idUbicacion?: SortOrder
    nombre?: SortOrder
    personaContacto?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    municipio?: SortOrder
    departamento?: SortOrder
    email?: SortOrder
    estado?: SortOrder
  }

  export type UbicacionAvgOrderByAggregateInput = {
    idUbicacion?: SortOrder
    estado?: SortOrder
  }

  export type UbicacionMaxOrderByAggregateInput = {
    idUbicacion?: SortOrder
    nombre?: SortOrder
    personaContacto?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    municipio?: SortOrder
    departamento?: SortOrder
    email?: SortOrder
    estado?: SortOrder
  }

  export type UbicacionMinOrderByAggregateInput = {
    idUbicacion?: SortOrder
    nombre?: SortOrder
    personaContacto?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    municipio?: SortOrder
    departamento?: SortOrder
    email?: SortOrder
    estado?: SortOrder
  }

  export type UbicacionSumOrderByAggregateInput = {
    idUbicacion?: SortOrder
    estado?: SortOrder
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

  export type EventoScalarRelationFilter = {
    is?: EventoWhereInput
    isNot?: EventoWhereInput
  }

  export type UbicacionScalarRelationFilter = {
    is?: UbicacionWhereInput
    isNot?: UbicacionWhereInput
  }

  export type TipoBoletaListRelationFilter = {
    every?: TipoBoletaWhereInput
    some?: TipoBoletaWhereInput
    none?: TipoBoletaWhereInput
  }

  export type TipoBoletaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FuncionCountOrderByAggregateInput = {
    idFuncion?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    idEvento?: SortOrder
    idUbicacion?: SortOrder
    estado?: SortOrder
  }

  export type FuncionAvgOrderByAggregateInput = {
    idFuncion?: SortOrder
    idEvento?: SortOrder
    idUbicacion?: SortOrder
    estado?: SortOrder
  }

  export type FuncionMaxOrderByAggregateInput = {
    idFuncion?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    idEvento?: SortOrder
    idUbicacion?: SortOrder
    estado?: SortOrder
  }

  export type FuncionMinOrderByAggregateInput = {
    idFuncion?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    fecha?: SortOrder
    horaInicio?: SortOrder
    idEvento?: SortOrder
    idUbicacion?: SortOrder
    estado?: SortOrder
  }

  export type FuncionSumOrderByAggregateInput = {
    idFuncion?: SortOrder
    idEvento?: SortOrder
    idUbicacion?: SortOrder
    estado?: SortOrder
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

  export type FuncionScalarRelationFilter = {
    is?: FuncionWhereInput
    isNot?: FuncionWhereInput
  }

  export type TipoBoletaCountOrderByAggregateInput = {
    idTipoBoleta?: SortOrder
    nombre?: SortOrder
    localizacion?: SortOrder
    precio?: SortOrder
    cupoMaximo?: SortOrder
    disponibles?: SortOrder
    idFuncion?: SortOrder
  }

  export type TipoBoletaAvgOrderByAggregateInput = {
    idTipoBoleta?: SortOrder
    precio?: SortOrder
    cupoMaximo?: SortOrder
    disponibles?: SortOrder
    idFuncion?: SortOrder
  }

  export type TipoBoletaMaxOrderByAggregateInput = {
    idTipoBoleta?: SortOrder
    nombre?: SortOrder
    localizacion?: SortOrder
    precio?: SortOrder
    cupoMaximo?: SortOrder
    disponibles?: SortOrder
    idFuncion?: SortOrder
  }

  export type TipoBoletaMinOrderByAggregateInput = {
    idTipoBoleta?: SortOrder
    nombre?: SortOrder
    localizacion?: SortOrder
    precio?: SortOrder
    cupoMaximo?: SortOrder
    disponibles?: SortOrder
    idFuncion?: SortOrder
  }

  export type TipoBoletaSumOrderByAggregateInput = {
    idTipoBoleta?: SortOrder
    precio?: SortOrder
    cupoMaximo?: SortOrder
    disponibles?: SortOrder
    idFuncion?: SortOrder
  }

  export type ClienteScalarRelationFilter = {
    is?: ClienteWhereInput
    isNot?: ClienteWhereInput
  }

  export type TipoBoletaScalarRelationFilter = {
    is?: TipoBoletaWhereInput
    isNot?: TipoBoletaWhereInput
  }

  export type CompraCountOrderByAggregateInput = {
    idCompra?: SortOrder
    fecha?: SortOrder
    cantidad?: SortOrder
    formaPago?: SortOrder
    cedula?: SortOrder
    idTipoBoleta?: SortOrder
    estado?: SortOrder
  }

  export type CompraAvgOrderByAggregateInput = {
    idCompra?: SortOrder
    cantidad?: SortOrder
    cedula?: SortOrder
    idTipoBoleta?: SortOrder
    estado?: SortOrder
  }

  export type CompraMaxOrderByAggregateInput = {
    idCompra?: SortOrder
    fecha?: SortOrder
    cantidad?: SortOrder
    formaPago?: SortOrder
    cedula?: SortOrder
    idTipoBoleta?: SortOrder
    estado?: SortOrder
  }

  export type CompraMinOrderByAggregateInput = {
    idCompra?: SortOrder
    fecha?: SortOrder
    cantidad?: SortOrder
    formaPago?: SortOrder
    cedula?: SortOrder
    idTipoBoleta?: SortOrder
    estado?: SortOrder
  }

  export type CompraSumOrderByAggregateInput = {
    idCompra?: SortOrder
    cantidad?: SortOrder
    cedula?: SortOrder
    idTipoBoleta?: SortOrder
    estado?: SortOrder
  }

  export type EventoCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<EventoCreateWithoutAdministradorInput, EventoUncheckedCreateWithoutAdministradorInput> | EventoCreateWithoutAdministradorInput[] | EventoUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutAdministradorInput | EventoCreateOrConnectWithoutAdministradorInput[]
    createMany?: EventoCreateManyAdministradorInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type EventoUncheckedCreateNestedManyWithoutAdministradorInput = {
    create?: XOR<EventoCreateWithoutAdministradorInput, EventoUncheckedCreateWithoutAdministradorInput> | EventoCreateWithoutAdministradorInput[] | EventoUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutAdministradorInput | EventoCreateOrConnectWithoutAdministradorInput[]
    createMany?: EventoCreateManyAdministradorInputEnvelope
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EventoUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<EventoCreateWithoutAdministradorInput, EventoUncheckedCreateWithoutAdministradorInput> | EventoCreateWithoutAdministradorInput[] | EventoUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutAdministradorInput | EventoCreateOrConnectWithoutAdministradorInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutAdministradorInput | EventoUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: EventoCreateManyAdministradorInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutAdministradorInput | EventoUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutAdministradorInput | EventoUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type EventoUncheckedUpdateManyWithoutAdministradorNestedInput = {
    create?: XOR<EventoCreateWithoutAdministradorInput, EventoUncheckedCreateWithoutAdministradorInput> | EventoCreateWithoutAdministradorInput[] | EventoUncheckedCreateWithoutAdministradorInput[]
    connectOrCreate?: EventoCreateOrConnectWithoutAdministradorInput | EventoCreateOrConnectWithoutAdministradorInput[]
    upsert?: EventoUpsertWithWhereUniqueWithoutAdministradorInput | EventoUpsertWithWhereUniqueWithoutAdministradorInput[]
    createMany?: EventoCreateManyAdministradorInputEnvelope
    set?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    disconnect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    delete?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    connect?: EventoWhereUniqueInput | EventoWhereUniqueInput[]
    update?: EventoUpdateWithWhereUniqueWithoutAdministradorInput | EventoUpdateWithWhereUniqueWithoutAdministradorInput[]
    updateMany?: EventoUpdateManyWithWhereWithoutAdministradorInput | EventoUpdateManyWithWhereWithoutAdministradorInput[]
    deleteMany?: EventoScalarWhereInput | EventoScalarWhereInput[]
  }

  export type CompraCreateNestedManyWithoutClienteInput = {
    create?: XOR<CompraCreateWithoutClienteInput, CompraUncheckedCreateWithoutClienteInput> | CompraCreateWithoutClienteInput[] | CompraUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutClienteInput | CompraCreateOrConnectWithoutClienteInput[]
    createMany?: CompraCreateManyClienteInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type CompraUncheckedCreateNestedManyWithoutClienteInput = {
    create?: XOR<CompraCreateWithoutClienteInput, CompraUncheckedCreateWithoutClienteInput> | CompraCreateWithoutClienteInput[] | CompraUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutClienteInput | CompraCreateOrConnectWithoutClienteInput[]
    createMany?: CompraCreateManyClienteInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type CompraUpdateManyWithoutClienteNestedInput = {
    create?: XOR<CompraCreateWithoutClienteInput, CompraUncheckedCreateWithoutClienteInput> | CompraCreateWithoutClienteInput[] | CompraUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutClienteInput | CompraCreateOrConnectWithoutClienteInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutClienteInput | CompraUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: CompraCreateManyClienteInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutClienteInput | CompraUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutClienteInput | CompraUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type CompraUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: XOR<CompraCreateWithoutClienteInput, CompraUncheckedCreateWithoutClienteInput> | CompraCreateWithoutClienteInput[] | CompraUncheckedCreateWithoutClienteInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutClienteInput | CompraCreateOrConnectWithoutClienteInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutClienteInput | CompraUpsertWithWhereUniqueWithoutClienteInput[]
    createMany?: CompraCreateManyClienteInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutClienteInput | CompraUpdateWithWhereUniqueWithoutClienteInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutClienteInput | CompraUpdateManyWithWhereWithoutClienteInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type AdministradorCreateNestedOneWithoutEventosInput = {
    create?: XOR<AdministradorCreateWithoutEventosInput, AdministradorUncheckedCreateWithoutEventosInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutEventosInput
    connect?: AdministradorWhereUniqueInput
  }

  export type FuncionCreateNestedManyWithoutEventoInput = {
    create?: XOR<FuncionCreateWithoutEventoInput, FuncionUncheckedCreateWithoutEventoInput> | FuncionCreateWithoutEventoInput[] | FuncionUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: FuncionCreateOrConnectWithoutEventoInput | FuncionCreateOrConnectWithoutEventoInput[]
    createMany?: FuncionCreateManyEventoInputEnvelope
    connect?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
  }

  export type FuncionUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<FuncionCreateWithoutEventoInput, FuncionUncheckedCreateWithoutEventoInput> | FuncionCreateWithoutEventoInput[] | FuncionUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: FuncionCreateOrConnectWithoutEventoInput | FuncionCreateOrConnectWithoutEventoInput[]
    createMany?: FuncionCreateManyEventoInputEnvelope
    connect?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
  }

  export type AdministradorUpdateOneRequiredWithoutEventosNestedInput = {
    create?: XOR<AdministradorCreateWithoutEventosInput, AdministradorUncheckedCreateWithoutEventosInput>
    connectOrCreate?: AdministradorCreateOrConnectWithoutEventosInput
    upsert?: AdministradorUpsertWithoutEventosInput
    connect?: AdministradorWhereUniqueInput
    update?: XOR<XOR<AdministradorUpdateToOneWithWhereWithoutEventosInput, AdministradorUpdateWithoutEventosInput>, AdministradorUncheckedUpdateWithoutEventosInput>
  }

  export type FuncionUpdateManyWithoutEventoNestedInput = {
    create?: XOR<FuncionCreateWithoutEventoInput, FuncionUncheckedCreateWithoutEventoInput> | FuncionCreateWithoutEventoInput[] | FuncionUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: FuncionCreateOrConnectWithoutEventoInput | FuncionCreateOrConnectWithoutEventoInput[]
    upsert?: FuncionUpsertWithWhereUniqueWithoutEventoInput | FuncionUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: FuncionCreateManyEventoInputEnvelope
    set?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
    disconnect?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
    delete?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
    connect?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
    update?: FuncionUpdateWithWhereUniqueWithoutEventoInput | FuncionUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: FuncionUpdateManyWithWhereWithoutEventoInput | FuncionUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: FuncionScalarWhereInput | FuncionScalarWhereInput[]
  }

  export type FuncionUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<FuncionCreateWithoutEventoInput, FuncionUncheckedCreateWithoutEventoInput> | FuncionCreateWithoutEventoInput[] | FuncionUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: FuncionCreateOrConnectWithoutEventoInput | FuncionCreateOrConnectWithoutEventoInput[]
    upsert?: FuncionUpsertWithWhereUniqueWithoutEventoInput | FuncionUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: FuncionCreateManyEventoInputEnvelope
    set?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
    disconnect?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
    delete?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
    connect?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
    update?: FuncionUpdateWithWhereUniqueWithoutEventoInput | FuncionUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: FuncionUpdateManyWithWhereWithoutEventoInput | FuncionUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: FuncionScalarWhereInput | FuncionScalarWhereInput[]
  }

  export type FuncionCreateNestedManyWithoutUbicacionInput = {
    create?: XOR<FuncionCreateWithoutUbicacionInput, FuncionUncheckedCreateWithoutUbicacionInput> | FuncionCreateWithoutUbicacionInput[] | FuncionUncheckedCreateWithoutUbicacionInput[]
    connectOrCreate?: FuncionCreateOrConnectWithoutUbicacionInput | FuncionCreateOrConnectWithoutUbicacionInput[]
    createMany?: FuncionCreateManyUbicacionInputEnvelope
    connect?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
  }

  export type FuncionUncheckedCreateNestedManyWithoutUbicacionInput = {
    create?: XOR<FuncionCreateWithoutUbicacionInput, FuncionUncheckedCreateWithoutUbicacionInput> | FuncionCreateWithoutUbicacionInput[] | FuncionUncheckedCreateWithoutUbicacionInput[]
    connectOrCreate?: FuncionCreateOrConnectWithoutUbicacionInput | FuncionCreateOrConnectWithoutUbicacionInput[]
    createMany?: FuncionCreateManyUbicacionInputEnvelope
    connect?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
  }

  export type FuncionUpdateManyWithoutUbicacionNestedInput = {
    create?: XOR<FuncionCreateWithoutUbicacionInput, FuncionUncheckedCreateWithoutUbicacionInput> | FuncionCreateWithoutUbicacionInput[] | FuncionUncheckedCreateWithoutUbicacionInput[]
    connectOrCreate?: FuncionCreateOrConnectWithoutUbicacionInput | FuncionCreateOrConnectWithoutUbicacionInput[]
    upsert?: FuncionUpsertWithWhereUniqueWithoutUbicacionInput | FuncionUpsertWithWhereUniqueWithoutUbicacionInput[]
    createMany?: FuncionCreateManyUbicacionInputEnvelope
    set?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
    disconnect?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
    delete?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
    connect?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
    update?: FuncionUpdateWithWhereUniqueWithoutUbicacionInput | FuncionUpdateWithWhereUniqueWithoutUbicacionInput[]
    updateMany?: FuncionUpdateManyWithWhereWithoutUbicacionInput | FuncionUpdateManyWithWhereWithoutUbicacionInput[]
    deleteMany?: FuncionScalarWhereInput | FuncionScalarWhereInput[]
  }

  export type FuncionUncheckedUpdateManyWithoutUbicacionNestedInput = {
    create?: XOR<FuncionCreateWithoutUbicacionInput, FuncionUncheckedCreateWithoutUbicacionInput> | FuncionCreateWithoutUbicacionInput[] | FuncionUncheckedCreateWithoutUbicacionInput[]
    connectOrCreate?: FuncionCreateOrConnectWithoutUbicacionInput | FuncionCreateOrConnectWithoutUbicacionInput[]
    upsert?: FuncionUpsertWithWhereUniqueWithoutUbicacionInput | FuncionUpsertWithWhereUniqueWithoutUbicacionInput[]
    createMany?: FuncionCreateManyUbicacionInputEnvelope
    set?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
    disconnect?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
    delete?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
    connect?: FuncionWhereUniqueInput | FuncionWhereUniqueInput[]
    update?: FuncionUpdateWithWhereUniqueWithoutUbicacionInput | FuncionUpdateWithWhereUniqueWithoutUbicacionInput[]
    updateMany?: FuncionUpdateManyWithWhereWithoutUbicacionInput | FuncionUpdateManyWithWhereWithoutUbicacionInput[]
    deleteMany?: FuncionScalarWhereInput | FuncionScalarWhereInput[]
  }

  export type EventoCreateNestedOneWithoutFuncionesInput = {
    create?: XOR<EventoCreateWithoutFuncionesInput, EventoUncheckedCreateWithoutFuncionesInput>
    connectOrCreate?: EventoCreateOrConnectWithoutFuncionesInput
    connect?: EventoWhereUniqueInput
  }

  export type UbicacionCreateNestedOneWithoutFuncionesInput = {
    create?: XOR<UbicacionCreateWithoutFuncionesInput, UbicacionUncheckedCreateWithoutFuncionesInput>
    connectOrCreate?: UbicacionCreateOrConnectWithoutFuncionesInput
    connect?: UbicacionWhereUniqueInput
  }

  export type TipoBoletaCreateNestedManyWithoutFuncionInput = {
    create?: XOR<TipoBoletaCreateWithoutFuncionInput, TipoBoletaUncheckedCreateWithoutFuncionInput> | TipoBoletaCreateWithoutFuncionInput[] | TipoBoletaUncheckedCreateWithoutFuncionInput[]
    connectOrCreate?: TipoBoletaCreateOrConnectWithoutFuncionInput | TipoBoletaCreateOrConnectWithoutFuncionInput[]
    createMany?: TipoBoletaCreateManyFuncionInputEnvelope
    connect?: TipoBoletaWhereUniqueInput | TipoBoletaWhereUniqueInput[]
  }

  export type TipoBoletaUncheckedCreateNestedManyWithoutFuncionInput = {
    create?: XOR<TipoBoletaCreateWithoutFuncionInput, TipoBoletaUncheckedCreateWithoutFuncionInput> | TipoBoletaCreateWithoutFuncionInput[] | TipoBoletaUncheckedCreateWithoutFuncionInput[]
    connectOrCreate?: TipoBoletaCreateOrConnectWithoutFuncionInput | TipoBoletaCreateOrConnectWithoutFuncionInput[]
    createMany?: TipoBoletaCreateManyFuncionInputEnvelope
    connect?: TipoBoletaWhereUniqueInput | TipoBoletaWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventoUpdateOneRequiredWithoutFuncionesNestedInput = {
    create?: XOR<EventoCreateWithoutFuncionesInput, EventoUncheckedCreateWithoutFuncionesInput>
    connectOrCreate?: EventoCreateOrConnectWithoutFuncionesInput
    upsert?: EventoUpsertWithoutFuncionesInput
    connect?: EventoWhereUniqueInput
    update?: XOR<XOR<EventoUpdateToOneWithWhereWithoutFuncionesInput, EventoUpdateWithoutFuncionesInput>, EventoUncheckedUpdateWithoutFuncionesInput>
  }

  export type UbicacionUpdateOneRequiredWithoutFuncionesNestedInput = {
    create?: XOR<UbicacionCreateWithoutFuncionesInput, UbicacionUncheckedCreateWithoutFuncionesInput>
    connectOrCreate?: UbicacionCreateOrConnectWithoutFuncionesInput
    upsert?: UbicacionUpsertWithoutFuncionesInput
    connect?: UbicacionWhereUniqueInput
    update?: XOR<XOR<UbicacionUpdateToOneWithWhereWithoutFuncionesInput, UbicacionUpdateWithoutFuncionesInput>, UbicacionUncheckedUpdateWithoutFuncionesInput>
  }

  export type TipoBoletaUpdateManyWithoutFuncionNestedInput = {
    create?: XOR<TipoBoletaCreateWithoutFuncionInput, TipoBoletaUncheckedCreateWithoutFuncionInput> | TipoBoletaCreateWithoutFuncionInput[] | TipoBoletaUncheckedCreateWithoutFuncionInput[]
    connectOrCreate?: TipoBoletaCreateOrConnectWithoutFuncionInput | TipoBoletaCreateOrConnectWithoutFuncionInput[]
    upsert?: TipoBoletaUpsertWithWhereUniqueWithoutFuncionInput | TipoBoletaUpsertWithWhereUniqueWithoutFuncionInput[]
    createMany?: TipoBoletaCreateManyFuncionInputEnvelope
    set?: TipoBoletaWhereUniqueInput | TipoBoletaWhereUniqueInput[]
    disconnect?: TipoBoletaWhereUniqueInput | TipoBoletaWhereUniqueInput[]
    delete?: TipoBoletaWhereUniqueInput | TipoBoletaWhereUniqueInput[]
    connect?: TipoBoletaWhereUniqueInput | TipoBoletaWhereUniqueInput[]
    update?: TipoBoletaUpdateWithWhereUniqueWithoutFuncionInput | TipoBoletaUpdateWithWhereUniqueWithoutFuncionInput[]
    updateMany?: TipoBoletaUpdateManyWithWhereWithoutFuncionInput | TipoBoletaUpdateManyWithWhereWithoutFuncionInput[]
    deleteMany?: TipoBoletaScalarWhereInput | TipoBoletaScalarWhereInput[]
  }

  export type TipoBoletaUncheckedUpdateManyWithoutFuncionNestedInput = {
    create?: XOR<TipoBoletaCreateWithoutFuncionInput, TipoBoletaUncheckedCreateWithoutFuncionInput> | TipoBoletaCreateWithoutFuncionInput[] | TipoBoletaUncheckedCreateWithoutFuncionInput[]
    connectOrCreate?: TipoBoletaCreateOrConnectWithoutFuncionInput | TipoBoletaCreateOrConnectWithoutFuncionInput[]
    upsert?: TipoBoletaUpsertWithWhereUniqueWithoutFuncionInput | TipoBoletaUpsertWithWhereUniqueWithoutFuncionInput[]
    createMany?: TipoBoletaCreateManyFuncionInputEnvelope
    set?: TipoBoletaWhereUniqueInput | TipoBoletaWhereUniqueInput[]
    disconnect?: TipoBoletaWhereUniqueInput | TipoBoletaWhereUniqueInput[]
    delete?: TipoBoletaWhereUniqueInput | TipoBoletaWhereUniqueInput[]
    connect?: TipoBoletaWhereUniqueInput | TipoBoletaWhereUniqueInput[]
    update?: TipoBoletaUpdateWithWhereUniqueWithoutFuncionInput | TipoBoletaUpdateWithWhereUniqueWithoutFuncionInput[]
    updateMany?: TipoBoletaUpdateManyWithWhereWithoutFuncionInput | TipoBoletaUpdateManyWithWhereWithoutFuncionInput[]
    deleteMany?: TipoBoletaScalarWhereInput | TipoBoletaScalarWhereInput[]
  }

  export type CompraCreateNestedManyWithoutTipoBoletaInput = {
    create?: XOR<CompraCreateWithoutTipoBoletaInput, CompraUncheckedCreateWithoutTipoBoletaInput> | CompraCreateWithoutTipoBoletaInput[] | CompraUncheckedCreateWithoutTipoBoletaInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutTipoBoletaInput | CompraCreateOrConnectWithoutTipoBoletaInput[]
    createMany?: CompraCreateManyTipoBoletaInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type FuncionCreateNestedOneWithoutTipoBoletasInput = {
    create?: XOR<FuncionCreateWithoutTipoBoletasInput, FuncionUncheckedCreateWithoutTipoBoletasInput>
    connectOrCreate?: FuncionCreateOrConnectWithoutTipoBoletasInput
    connect?: FuncionWhereUniqueInput
  }

  export type CompraUncheckedCreateNestedManyWithoutTipoBoletaInput = {
    create?: XOR<CompraCreateWithoutTipoBoletaInput, CompraUncheckedCreateWithoutTipoBoletaInput> | CompraCreateWithoutTipoBoletaInput[] | CompraUncheckedCreateWithoutTipoBoletaInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutTipoBoletaInput | CompraCreateOrConnectWithoutTipoBoletaInput[]
    createMany?: CompraCreateManyTipoBoletaInputEnvelope
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
  }

  export type CompraUpdateManyWithoutTipoBoletaNestedInput = {
    create?: XOR<CompraCreateWithoutTipoBoletaInput, CompraUncheckedCreateWithoutTipoBoletaInput> | CompraCreateWithoutTipoBoletaInput[] | CompraUncheckedCreateWithoutTipoBoletaInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutTipoBoletaInput | CompraCreateOrConnectWithoutTipoBoletaInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutTipoBoletaInput | CompraUpsertWithWhereUniqueWithoutTipoBoletaInput[]
    createMany?: CompraCreateManyTipoBoletaInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutTipoBoletaInput | CompraUpdateWithWhereUniqueWithoutTipoBoletaInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutTipoBoletaInput | CompraUpdateManyWithWhereWithoutTipoBoletaInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type FuncionUpdateOneRequiredWithoutTipoBoletasNestedInput = {
    create?: XOR<FuncionCreateWithoutTipoBoletasInput, FuncionUncheckedCreateWithoutTipoBoletasInput>
    connectOrCreate?: FuncionCreateOrConnectWithoutTipoBoletasInput
    upsert?: FuncionUpsertWithoutTipoBoletasInput
    connect?: FuncionWhereUniqueInput
    update?: XOR<XOR<FuncionUpdateToOneWithWhereWithoutTipoBoletasInput, FuncionUpdateWithoutTipoBoletasInput>, FuncionUncheckedUpdateWithoutTipoBoletasInput>
  }

  export type CompraUncheckedUpdateManyWithoutTipoBoletaNestedInput = {
    create?: XOR<CompraCreateWithoutTipoBoletaInput, CompraUncheckedCreateWithoutTipoBoletaInput> | CompraCreateWithoutTipoBoletaInput[] | CompraUncheckedCreateWithoutTipoBoletaInput[]
    connectOrCreate?: CompraCreateOrConnectWithoutTipoBoletaInput | CompraCreateOrConnectWithoutTipoBoletaInput[]
    upsert?: CompraUpsertWithWhereUniqueWithoutTipoBoletaInput | CompraUpsertWithWhereUniqueWithoutTipoBoletaInput[]
    createMany?: CompraCreateManyTipoBoletaInputEnvelope
    set?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    disconnect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    delete?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    connect?: CompraWhereUniqueInput | CompraWhereUniqueInput[]
    update?: CompraUpdateWithWhereUniqueWithoutTipoBoletaInput | CompraUpdateWithWhereUniqueWithoutTipoBoletaInput[]
    updateMany?: CompraUpdateManyWithWhereWithoutTipoBoletaInput | CompraUpdateManyWithWhereWithoutTipoBoletaInput[]
    deleteMany?: CompraScalarWhereInput | CompraScalarWhereInput[]
  }

  export type ClienteCreateNestedOneWithoutComprasInput = {
    create?: XOR<ClienteCreateWithoutComprasInput, ClienteUncheckedCreateWithoutComprasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutComprasInput
    connect?: ClienteWhereUniqueInput
  }

  export type TipoBoletaCreateNestedOneWithoutComprasInput = {
    create?: XOR<TipoBoletaCreateWithoutComprasInput, TipoBoletaUncheckedCreateWithoutComprasInput>
    connectOrCreate?: TipoBoletaCreateOrConnectWithoutComprasInput
    connect?: TipoBoletaWhereUniqueInput
  }

  export type ClienteUpdateOneRequiredWithoutComprasNestedInput = {
    create?: XOR<ClienteCreateWithoutComprasInput, ClienteUncheckedCreateWithoutComprasInput>
    connectOrCreate?: ClienteCreateOrConnectWithoutComprasInput
    upsert?: ClienteUpsertWithoutComprasInput
    connect?: ClienteWhereUniqueInput
    update?: XOR<XOR<ClienteUpdateToOneWithWhereWithoutComprasInput, ClienteUpdateWithoutComprasInput>, ClienteUncheckedUpdateWithoutComprasInput>
  }

  export type TipoBoletaUpdateOneRequiredWithoutComprasNestedInput = {
    create?: XOR<TipoBoletaCreateWithoutComprasInput, TipoBoletaUncheckedCreateWithoutComprasInput>
    connectOrCreate?: TipoBoletaCreateOrConnectWithoutComprasInput
    upsert?: TipoBoletaUpsertWithoutComprasInput
    connect?: TipoBoletaWhereUniqueInput
    update?: XOR<XOR<TipoBoletaUpdateToOneWithWhereWithoutComprasInput, TipoBoletaUpdateWithoutComprasInput>, TipoBoletaUncheckedUpdateWithoutComprasInput>
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

  export type EventoCreateWithoutAdministradorInput = {
    nombre: string
    descripcion: string
    fotoPrincipal: string
    fotoSecundaria: string
    estado: number
    funciones?: FuncionCreateNestedManyWithoutEventoInput
  }

  export type EventoUncheckedCreateWithoutAdministradorInput = {
    idEvento?: number
    nombre: string
    descripcion: string
    fotoPrincipal: string
    fotoSecundaria: string
    estado: number
    funciones?: FuncionUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventoCreateOrConnectWithoutAdministradorInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutAdministradorInput, EventoUncheckedCreateWithoutAdministradorInput>
  }

  export type EventoCreateManyAdministradorInputEnvelope = {
    data: EventoCreateManyAdministradorInput | EventoCreateManyAdministradorInput[]
    skipDuplicates?: boolean
  }

  export type EventoUpsertWithWhereUniqueWithoutAdministradorInput = {
    where: EventoWhereUniqueInput
    update: XOR<EventoUpdateWithoutAdministradorInput, EventoUncheckedUpdateWithoutAdministradorInput>
    create: XOR<EventoCreateWithoutAdministradorInput, EventoUncheckedCreateWithoutAdministradorInput>
  }

  export type EventoUpdateWithWhereUniqueWithoutAdministradorInput = {
    where: EventoWhereUniqueInput
    data: XOR<EventoUpdateWithoutAdministradorInput, EventoUncheckedUpdateWithoutAdministradorInput>
  }

  export type EventoUpdateManyWithWhereWithoutAdministradorInput = {
    where: EventoScalarWhereInput
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyWithoutAdministradorInput>
  }

  export type EventoScalarWhereInput = {
    AND?: EventoScalarWhereInput | EventoScalarWhereInput[]
    OR?: EventoScalarWhereInput[]
    NOT?: EventoScalarWhereInput | EventoScalarWhereInput[]
    idEvento?: IntFilter<"Evento"> | number
    nombre?: StringFilter<"Evento"> | string
    descripcion?: StringFilter<"Evento"> | string
    fotoPrincipal?: StringFilter<"Evento"> | string
    fotoSecundaria?: StringFilter<"Evento"> | string
    cedulaAdm?: IntFilter<"Evento"> | number
    estado?: IntFilter<"Evento"> | number
  }

  export type CompraCreateWithoutClienteInput = {
    fecha?: Date | string
    cantidad: number
    formaPago: string
    estado: number
    tipoBoleta: TipoBoletaCreateNestedOneWithoutComprasInput
  }

  export type CompraUncheckedCreateWithoutClienteInput = {
    idCompra?: number
    fecha?: Date | string
    cantidad: number
    formaPago: string
    idTipoBoleta: number
    estado: number
  }

  export type CompraCreateOrConnectWithoutClienteInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutClienteInput, CompraUncheckedCreateWithoutClienteInput>
  }

  export type CompraCreateManyClienteInputEnvelope = {
    data: CompraCreateManyClienteInput | CompraCreateManyClienteInput[]
    skipDuplicates?: boolean
  }

  export type CompraUpsertWithWhereUniqueWithoutClienteInput = {
    where: CompraWhereUniqueInput
    update: XOR<CompraUpdateWithoutClienteInput, CompraUncheckedUpdateWithoutClienteInput>
    create: XOR<CompraCreateWithoutClienteInput, CompraUncheckedCreateWithoutClienteInput>
  }

  export type CompraUpdateWithWhereUniqueWithoutClienteInput = {
    where: CompraWhereUniqueInput
    data: XOR<CompraUpdateWithoutClienteInput, CompraUncheckedUpdateWithoutClienteInput>
  }

  export type CompraUpdateManyWithWhereWithoutClienteInput = {
    where: CompraScalarWhereInput
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyWithoutClienteInput>
  }

  export type CompraScalarWhereInput = {
    AND?: CompraScalarWhereInput | CompraScalarWhereInput[]
    OR?: CompraScalarWhereInput[]
    NOT?: CompraScalarWhereInput | CompraScalarWhereInput[]
    idCompra?: IntFilter<"Compra"> | number
    fecha?: DateTimeFilter<"Compra"> | Date | string
    cantidad?: IntFilter<"Compra"> | number
    formaPago?: StringFilter<"Compra"> | string
    cedula?: IntFilter<"Compra"> | number
    idTipoBoleta?: IntFilter<"Compra"> | number
    estado?: IntFilter<"Compra"> | number
  }

  export type AdministradorCreateWithoutEventosInput = {
    cedulaAdm: number
    nombres: string
    apellidos: string
    direccion: string
    municipio: string
    departamento: string
    email: string
    telefono: string
    contrasena: string
    estado: number
  }

  export type AdministradorUncheckedCreateWithoutEventosInput = {
    cedulaAdm: number
    nombres: string
    apellidos: string
    direccion: string
    municipio: string
    departamento: string
    email: string
    telefono: string
    contrasena: string
    estado: number
  }

  export type AdministradorCreateOrConnectWithoutEventosInput = {
    where: AdministradorWhereUniqueInput
    create: XOR<AdministradorCreateWithoutEventosInput, AdministradorUncheckedCreateWithoutEventosInput>
  }

  export type FuncionCreateWithoutEventoInput = {
    nombre: string
    descripcion: string
    fecha: Date | string
    horaInicio: Date | string
    estado: number
    ubicacion: UbicacionCreateNestedOneWithoutFuncionesInput
    tipoBoletas?: TipoBoletaCreateNestedManyWithoutFuncionInput
  }

  export type FuncionUncheckedCreateWithoutEventoInput = {
    idFuncion?: number
    nombre: string
    descripcion: string
    fecha: Date | string
    horaInicio: Date | string
    idUbicacion: number
    estado: number
    tipoBoletas?: TipoBoletaUncheckedCreateNestedManyWithoutFuncionInput
  }

  export type FuncionCreateOrConnectWithoutEventoInput = {
    where: FuncionWhereUniqueInput
    create: XOR<FuncionCreateWithoutEventoInput, FuncionUncheckedCreateWithoutEventoInput>
  }

  export type FuncionCreateManyEventoInputEnvelope = {
    data: FuncionCreateManyEventoInput | FuncionCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type AdministradorUpsertWithoutEventosInput = {
    update: XOR<AdministradorUpdateWithoutEventosInput, AdministradorUncheckedUpdateWithoutEventosInput>
    create: XOR<AdministradorCreateWithoutEventosInput, AdministradorUncheckedCreateWithoutEventosInput>
    where?: AdministradorWhereInput
  }

  export type AdministradorUpdateToOneWithWhereWithoutEventosInput = {
    where?: AdministradorWhereInput
    data: XOR<AdministradorUpdateWithoutEventosInput, AdministradorUncheckedUpdateWithoutEventosInput>
  }

  export type AdministradorUpdateWithoutEventosInput = {
    cedulaAdm?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type AdministradorUncheckedUpdateWithoutEventosInput = {
    cedulaAdm?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type FuncionUpsertWithWhereUniqueWithoutEventoInput = {
    where: FuncionWhereUniqueInput
    update: XOR<FuncionUpdateWithoutEventoInput, FuncionUncheckedUpdateWithoutEventoInput>
    create: XOR<FuncionCreateWithoutEventoInput, FuncionUncheckedCreateWithoutEventoInput>
  }

  export type FuncionUpdateWithWhereUniqueWithoutEventoInput = {
    where: FuncionWhereUniqueInput
    data: XOR<FuncionUpdateWithoutEventoInput, FuncionUncheckedUpdateWithoutEventoInput>
  }

  export type FuncionUpdateManyWithWhereWithoutEventoInput = {
    where: FuncionScalarWhereInput
    data: XOR<FuncionUpdateManyMutationInput, FuncionUncheckedUpdateManyWithoutEventoInput>
  }

  export type FuncionScalarWhereInput = {
    AND?: FuncionScalarWhereInput | FuncionScalarWhereInput[]
    OR?: FuncionScalarWhereInput[]
    NOT?: FuncionScalarWhereInput | FuncionScalarWhereInput[]
    idFuncion?: IntFilter<"Funcion"> | number
    nombre?: StringFilter<"Funcion"> | string
    descripcion?: StringFilter<"Funcion"> | string
    fecha?: DateTimeFilter<"Funcion"> | Date | string
    horaInicio?: DateTimeFilter<"Funcion"> | Date | string
    idEvento?: IntFilter<"Funcion"> | number
    idUbicacion?: IntFilter<"Funcion"> | number
    estado?: IntFilter<"Funcion"> | number
  }

  export type FuncionCreateWithoutUbicacionInput = {
    nombre: string
    descripcion: string
    fecha: Date | string
    horaInicio: Date | string
    estado: number
    evento: EventoCreateNestedOneWithoutFuncionesInput
    tipoBoletas?: TipoBoletaCreateNestedManyWithoutFuncionInput
  }

  export type FuncionUncheckedCreateWithoutUbicacionInput = {
    idFuncion?: number
    nombre: string
    descripcion: string
    fecha: Date | string
    horaInicio: Date | string
    idEvento: number
    estado: number
    tipoBoletas?: TipoBoletaUncheckedCreateNestedManyWithoutFuncionInput
  }

  export type FuncionCreateOrConnectWithoutUbicacionInput = {
    where: FuncionWhereUniqueInput
    create: XOR<FuncionCreateWithoutUbicacionInput, FuncionUncheckedCreateWithoutUbicacionInput>
  }

  export type FuncionCreateManyUbicacionInputEnvelope = {
    data: FuncionCreateManyUbicacionInput | FuncionCreateManyUbicacionInput[]
    skipDuplicates?: boolean
  }

  export type FuncionUpsertWithWhereUniqueWithoutUbicacionInput = {
    where: FuncionWhereUniqueInput
    update: XOR<FuncionUpdateWithoutUbicacionInput, FuncionUncheckedUpdateWithoutUbicacionInput>
    create: XOR<FuncionCreateWithoutUbicacionInput, FuncionUncheckedCreateWithoutUbicacionInput>
  }

  export type FuncionUpdateWithWhereUniqueWithoutUbicacionInput = {
    where: FuncionWhereUniqueInput
    data: XOR<FuncionUpdateWithoutUbicacionInput, FuncionUncheckedUpdateWithoutUbicacionInput>
  }

  export type FuncionUpdateManyWithWhereWithoutUbicacionInput = {
    where: FuncionScalarWhereInput
    data: XOR<FuncionUpdateManyMutationInput, FuncionUncheckedUpdateManyWithoutUbicacionInput>
  }

  export type EventoCreateWithoutFuncionesInput = {
    nombre: string
    descripcion: string
    fotoPrincipal: string
    fotoSecundaria: string
    estado: number
    administrador: AdministradorCreateNestedOneWithoutEventosInput
  }

  export type EventoUncheckedCreateWithoutFuncionesInput = {
    idEvento?: number
    nombre: string
    descripcion: string
    fotoPrincipal: string
    fotoSecundaria: string
    cedulaAdm: number
    estado: number
  }

  export type EventoCreateOrConnectWithoutFuncionesInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutFuncionesInput, EventoUncheckedCreateWithoutFuncionesInput>
  }

  export type UbicacionCreateWithoutFuncionesInput = {
    nombre: string
    personaContacto: string
    telefono: string
    direccion: string
    municipio: string
    departamento: string
    email: string
    estado: number
  }

  export type UbicacionUncheckedCreateWithoutFuncionesInput = {
    idUbicacion?: number
    nombre: string
    personaContacto: string
    telefono: string
    direccion: string
    municipio: string
    departamento: string
    email: string
    estado: number
  }

  export type UbicacionCreateOrConnectWithoutFuncionesInput = {
    where: UbicacionWhereUniqueInput
    create: XOR<UbicacionCreateWithoutFuncionesInput, UbicacionUncheckedCreateWithoutFuncionesInput>
  }

  export type TipoBoletaCreateWithoutFuncionInput = {
    nombre: string
    localizacion: string
    precio: number
    cupoMaximo: number
    disponibles: number
    compras?: CompraCreateNestedManyWithoutTipoBoletaInput
  }

  export type TipoBoletaUncheckedCreateWithoutFuncionInput = {
    idTipoBoleta?: number
    nombre: string
    localizacion: string
    precio: number
    cupoMaximo: number
    disponibles: number
    compras?: CompraUncheckedCreateNestedManyWithoutTipoBoletaInput
  }

  export type TipoBoletaCreateOrConnectWithoutFuncionInput = {
    where: TipoBoletaWhereUniqueInput
    create: XOR<TipoBoletaCreateWithoutFuncionInput, TipoBoletaUncheckedCreateWithoutFuncionInput>
  }

  export type TipoBoletaCreateManyFuncionInputEnvelope = {
    data: TipoBoletaCreateManyFuncionInput | TipoBoletaCreateManyFuncionInput[]
    skipDuplicates?: boolean
  }

  export type EventoUpsertWithoutFuncionesInput = {
    update: XOR<EventoUpdateWithoutFuncionesInput, EventoUncheckedUpdateWithoutFuncionesInput>
    create: XOR<EventoCreateWithoutFuncionesInput, EventoUncheckedCreateWithoutFuncionesInput>
    where?: EventoWhereInput
  }

  export type EventoUpdateToOneWithWhereWithoutFuncionesInput = {
    where?: EventoWhereInput
    data: XOR<EventoUpdateWithoutFuncionesInput, EventoUncheckedUpdateWithoutFuncionesInput>
  }

  export type EventoUpdateWithoutFuncionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fotoPrincipal?: StringFieldUpdateOperationsInput | string
    fotoSecundaria?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    administrador?: AdministradorUpdateOneRequiredWithoutEventosNestedInput
  }

  export type EventoUncheckedUpdateWithoutFuncionesInput = {
    idEvento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fotoPrincipal?: StringFieldUpdateOperationsInput | string
    fotoSecundaria?: StringFieldUpdateOperationsInput | string
    cedulaAdm?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type UbicacionUpsertWithoutFuncionesInput = {
    update: XOR<UbicacionUpdateWithoutFuncionesInput, UbicacionUncheckedUpdateWithoutFuncionesInput>
    create: XOR<UbicacionCreateWithoutFuncionesInput, UbicacionUncheckedCreateWithoutFuncionesInput>
    where?: UbicacionWhereInput
  }

  export type UbicacionUpdateToOneWithWhereWithoutFuncionesInput = {
    where?: UbicacionWhereInput
    data: XOR<UbicacionUpdateWithoutFuncionesInput, UbicacionUncheckedUpdateWithoutFuncionesInput>
  }

  export type UbicacionUpdateWithoutFuncionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    personaContacto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type UbicacionUncheckedUpdateWithoutFuncionesInput = {
    idUbicacion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    personaContacto?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type TipoBoletaUpsertWithWhereUniqueWithoutFuncionInput = {
    where: TipoBoletaWhereUniqueInput
    update: XOR<TipoBoletaUpdateWithoutFuncionInput, TipoBoletaUncheckedUpdateWithoutFuncionInput>
    create: XOR<TipoBoletaCreateWithoutFuncionInput, TipoBoletaUncheckedCreateWithoutFuncionInput>
  }

  export type TipoBoletaUpdateWithWhereUniqueWithoutFuncionInput = {
    where: TipoBoletaWhereUniqueInput
    data: XOR<TipoBoletaUpdateWithoutFuncionInput, TipoBoletaUncheckedUpdateWithoutFuncionInput>
  }

  export type TipoBoletaUpdateManyWithWhereWithoutFuncionInput = {
    where: TipoBoletaScalarWhereInput
    data: XOR<TipoBoletaUpdateManyMutationInput, TipoBoletaUncheckedUpdateManyWithoutFuncionInput>
  }

  export type TipoBoletaScalarWhereInput = {
    AND?: TipoBoletaScalarWhereInput | TipoBoletaScalarWhereInput[]
    OR?: TipoBoletaScalarWhereInput[]
    NOT?: TipoBoletaScalarWhereInput | TipoBoletaScalarWhereInput[]
    idTipoBoleta?: IntFilter<"TipoBoleta"> | number
    nombre?: StringFilter<"TipoBoleta"> | string
    localizacion?: StringFilter<"TipoBoleta"> | string
    precio?: IntFilter<"TipoBoleta"> | number
    cupoMaximo?: IntFilter<"TipoBoleta"> | number
    disponibles?: IntFilter<"TipoBoleta"> | number
    idFuncion?: IntFilter<"TipoBoleta"> | number
  }

  export type CompraCreateWithoutTipoBoletaInput = {
    fecha?: Date | string
    cantidad: number
    formaPago: string
    estado: number
    cliente: ClienteCreateNestedOneWithoutComprasInput
  }

  export type CompraUncheckedCreateWithoutTipoBoletaInput = {
    idCompra?: number
    fecha?: Date | string
    cantidad: number
    formaPago: string
    cedula: number
    estado: number
  }

  export type CompraCreateOrConnectWithoutTipoBoletaInput = {
    where: CompraWhereUniqueInput
    create: XOR<CompraCreateWithoutTipoBoletaInput, CompraUncheckedCreateWithoutTipoBoletaInput>
  }

  export type CompraCreateManyTipoBoletaInputEnvelope = {
    data: CompraCreateManyTipoBoletaInput | CompraCreateManyTipoBoletaInput[]
    skipDuplicates?: boolean
  }

  export type FuncionCreateWithoutTipoBoletasInput = {
    nombre: string
    descripcion: string
    fecha: Date | string
    horaInicio: Date | string
    estado: number
    evento: EventoCreateNestedOneWithoutFuncionesInput
    ubicacion: UbicacionCreateNestedOneWithoutFuncionesInput
  }

  export type FuncionUncheckedCreateWithoutTipoBoletasInput = {
    idFuncion?: number
    nombre: string
    descripcion: string
    fecha: Date | string
    horaInicio: Date | string
    idEvento: number
    idUbicacion: number
    estado: number
  }

  export type FuncionCreateOrConnectWithoutTipoBoletasInput = {
    where: FuncionWhereUniqueInput
    create: XOR<FuncionCreateWithoutTipoBoletasInput, FuncionUncheckedCreateWithoutTipoBoletasInput>
  }

  export type CompraUpsertWithWhereUniqueWithoutTipoBoletaInput = {
    where: CompraWhereUniqueInput
    update: XOR<CompraUpdateWithoutTipoBoletaInput, CompraUncheckedUpdateWithoutTipoBoletaInput>
    create: XOR<CompraCreateWithoutTipoBoletaInput, CompraUncheckedCreateWithoutTipoBoletaInput>
  }

  export type CompraUpdateWithWhereUniqueWithoutTipoBoletaInput = {
    where: CompraWhereUniqueInput
    data: XOR<CompraUpdateWithoutTipoBoletaInput, CompraUncheckedUpdateWithoutTipoBoletaInput>
  }

  export type CompraUpdateManyWithWhereWithoutTipoBoletaInput = {
    where: CompraScalarWhereInput
    data: XOR<CompraUpdateManyMutationInput, CompraUncheckedUpdateManyWithoutTipoBoletaInput>
  }

  export type FuncionUpsertWithoutTipoBoletasInput = {
    update: XOR<FuncionUpdateWithoutTipoBoletasInput, FuncionUncheckedUpdateWithoutTipoBoletasInput>
    create: XOR<FuncionCreateWithoutTipoBoletasInput, FuncionUncheckedCreateWithoutTipoBoletasInput>
    where?: FuncionWhereInput
  }

  export type FuncionUpdateToOneWithWhereWithoutTipoBoletasInput = {
    where?: FuncionWhereInput
    data: XOR<FuncionUpdateWithoutTipoBoletasInput, FuncionUncheckedUpdateWithoutTipoBoletasInput>
  }

  export type FuncionUpdateWithoutTipoBoletasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: IntFieldUpdateOperationsInput | number
    evento?: EventoUpdateOneRequiredWithoutFuncionesNestedInput
    ubicacion?: UbicacionUpdateOneRequiredWithoutFuncionesNestedInput
  }

  export type FuncionUncheckedUpdateWithoutTipoBoletasInput = {
    idFuncion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    idEvento?: IntFieldUpdateOperationsInput | number
    idUbicacion?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type ClienteCreateWithoutComprasInput = {
    cedula: number
    nombres: string
    apellidos: string
    direccion: string
    departamento: string
    municipio: string
    email: string
    telefono: string
    contrasena: string
    estado: number
  }

  export type ClienteUncheckedCreateWithoutComprasInput = {
    cedula: number
    nombres: string
    apellidos: string
    direccion: string
    departamento: string
    municipio: string
    email: string
    telefono: string
    contrasena: string
    estado: number
  }

  export type ClienteCreateOrConnectWithoutComprasInput = {
    where: ClienteWhereUniqueInput
    create: XOR<ClienteCreateWithoutComprasInput, ClienteUncheckedCreateWithoutComprasInput>
  }

  export type TipoBoletaCreateWithoutComprasInput = {
    nombre: string
    localizacion: string
    precio: number
    cupoMaximo: number
    disponibles: number
    funcion: FuncionCreateNestedOneWithoutTipoBoletasInput
  }

  export type TipoBoletaUncheckedCreateWithoutComprasInput = {
    idTipoBoleta?: number
    nombre: string
    localizacion: string
    precio: number
    cupoMaximo: number
    disponibles: number
    idFuncion: number
  }

  export type TipoBoletaCreateOrConnectWithoutComprasInput = {
    where: TipoBoletaWhereUniqueInput
    create: XOR<TipoBoletaCreateWithoutComprasInput, TipoBoletaUncheckedCreateWithoutComprasInput>
  }

  export type ClienteUpsertWithoutComprasInput = {
    update: XOR<ClienteUpdateWithoutComprasInput, ClienteUncheckedUpdateWithoutComprasInput>
    create: XOR<ClienteCreateWithoutComprasInput, ClienteUncheckedCreateWithoutComprasInput>
    where?: ClienteWhereInput
  }

  export type ClienteUpdateToOneWithWhereWithoutComprasInput = {
    where?: ClienteWhereInput
    data: XOR<ClienteUpdateWithoutComprasInput, ClienteUncheckedUpdateWithoutComprasInput>
  }

  export type ClienteUpdateWithoutComprasInput = {
    cedula?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type ClienteUncheckedUpdateWithoutComprasInput = {
    cedula?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    departamento?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type TipoBoletaUpsertWithoutComprasInput = {
    update: XOR<TipoBoletaUpdateWithoutComprasInput, TipoBoletaUncheckedUpdateWithoutComprasInput>
    create: XOR<TipoBoletaCreateWithoutComprasInput, TipoBoletaUncheckedCreateWithoutComprasInput>
    where?: TipoBoletaWhereInput
  }

  export type TipoBoletaUpdateToOneWithWhereWithoutComprasInput = {
    where?: TipoBoletaWhereInput
    data: XOR<TipoBoletaUpdateWithoutComprasInput, TipoBoletaUncheckedUpdateWithoutComprasInput>
  }

  export type TipoBoletaUpdateWithoutComprasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    localizacion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    cupoMaximo?: IntFieldUpdateOperationsInput | number
    disponibles?: IntFieldUpdateOperationsInput | number
    funcion?: FuncionUpdateOneRequiredWithoutTipoBoletasNestedInput
  }

  export type TipoBoletaUncheckedUpdateWithoutComprasInput = {
    idTipoBoleta?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    localizacion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    cupoMaximo?: IntFieldUpdateOperationsInput | number
    disponibles?: IntFieldUpdateOperationsInput | number
    idFuncion?: IntFieldUpdateOperationsInput | number
  }

  export type EventoCreateManyAdministradorInput = {
    idEvento?: number
    nombre: string
    descripcion: string
    fotoPrincipal: string
    fotoSecundaria: string
    estado: number
  }

  export type EventoUpdateWithoutAdministradorInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fotoPrincipal?: StringFieldUpdateOperationsInput | string
    fotoSecundaria?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    funciones?: FuncionUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateWithoutAdministradorInput = {
    idEvento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fotoPrincipal?: StringFieldUpdateOperationsInput | string
    fotoSecundaria?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    funciones?: FuncionUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateManyWithoutAdministradorInput = {
    idEvento?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fotoPrincipal?: StringFieldUpdateOperationsInput | string
    fotoSecundaria?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type CompraCreateManyClienteInput = {
    idCompra?: number
    fecha?: Date | string
    cantidad: number
    formaPago: string
    idTipoBoleta: number
    estado: number
  }

  export type CompraUpdateWithoutClienteInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    formaPago?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    tipoBoleta?: TipoBoletaUpdateOneRequiredWithoutComprasNestedInput
  }

  export type CompraUncheckedUpdateWithoutClienteInput = {
    idCompra?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    formaPago?: StringFieldUpdateOperationsInput | string
    idTipoBoleta?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type CompraUncheckedUpdateManyWithoutClienteInput = {
    idCompra?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    formaPago?: StringFieldUpdateOperationsInput | string
    idTipoBoleta?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type FuncionCreateManyEventoInput = {
    idFuncion?: number
    nombre: string
    descripcion: string
    fecha: Date | string
    horaInicio: Date | string
    idUbicacion: number
    estado: number
  }

  export type FuncionUpdateWithoutEventoInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: IntFieldUpdateOperationsInput | number
    ubicacion?: UbicacionUpdateOneRequiredWithoutFuncionesNestedInput
    tipoBoletas?: TipoBoletaUpdateManyWithoutFuncionNestedInput
  }

  export type FuncionUncheckedUpdateWithoutEventoInput = {
    idFuncion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    idUbicacion?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    tipoBoletas?: TipoBoletaUncheckedUpdateManyWithoutFuncionNestedInput
  }

  export type FuncionUncheckedUpdateManyWithoutEventoInput = {
    idFuncion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    idUbicacion?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type FuncionCreateManyUbicacionInput = {
    idFuncion?: number
    nombre: string
    descripcion: string
    fecha: Date | string
    horaInicio: Date | string
    idEvento: number
    estado: number
  }

  export type FuncionUpdateWithoutUbicacionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: IntFieldUpdateOperationsInput | number
    evento?: EventoUpdateOneRequiredWithoutFuncionesNestedInput
    tipoBoletas?: TipoBoletaUpdateManyWithoutFuncionNestedInput
  }

  export type FuncionUncheckedUpdateWithoutUbicacionInput = {
    idFuncion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    idEvento?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
    tipoBoletas?: TipoBoletaUncheckedUpdateManyWithoutFuncionNestedInput
  }

  export type FuncionUncheckedUpdateManyWithoutUbicacionInput = {
    idFuncion?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    idEvento?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type TipoBoletaCreateManyFuncionInput = {
    idTipoBoleta?: number
    nombre: string
    localizacion: string
    precio: number
    cupoMaximo: number
    disponibles: number
  }

  export type TipoBoletaUpdateWithoutFuncionInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    localizacion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    cupoMaximo?: IntFieldUpdateOperationsInput | number
    disponibles?: IntFieldUpdateOperationsInput | number
    compras?: CompraUpdateManyWithoutTipoBoletaNestedInput
  }

  export type TipoBoletaUncheckedUpdateWithoutFuncionInput = {
    idTipoBoleta?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    localizacion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    cupoMaximo?: IntFieldUpdateOperationsInput | number
    disponibles?: IntFieldUpdateOperationsInput | number
    compras?: CompraUncheckedUpdateManyWithoutTipoBoletaNestedInput
  }

  export type TipoBoletaUncheckedUpdateManyWithoutFuncionInput = {
    idTipoBoleta?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    localizacion?: StringFieldUpdateOperationsInput | string
    precio?: IntFieldUpdateOperationsInput | number
    cupoMaximo?: IntFieldUpdateOperationsInput | number
    disponibles?: IntFieldUpdateOperationsInput | number
  }

  export type CompraCreateManyTipoBoletaInput = {
    idCompra?: number
    fecha?: Date | string
    cantidad: number
    formaPago: string
    cedula: number
    estado: number
  }

  export type CompraUpdateWithoutTipoBoletaInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    formaPago?: StringFieldUpdateOperationsInput | string
    estado?: IntFieldUpdateOperationsInput | number
    cliente?: ClienteUpdateOneRequiredWithoutComprasNestedInput
  }

  export type CompraUncheckedUpdateWithoutTipoBoletaInput = {
    idCompra?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    formaPago?: StringFieldUpdateOperationsInput | string
    cedula?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
  }

  export type CompraUncheckedUpdateManyWithoutTipoBoletaInput = {
    idCompra?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    cantidad?: IntFieldUpdateOperationsInput | number
    formaPago?: StringFieldUpdateOperationsInput | string
    cedula?: IntFieldUpdateOperationsInput | number
    estado?: IntFieldUpdateOperationsInput | number
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