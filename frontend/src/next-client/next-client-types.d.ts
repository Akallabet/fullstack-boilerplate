export interface FullResponse<T, U extends number> {
  'statusCode': U;
  'headers': object;
  'body': T;
}

export type DbGetMoviesRequest = {
  /**
   * Limit will be applied by default if not passed. If the provided value exceeds the maximum allowed value a validation error will be thrown
   */
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'id' | 'title'>;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.ilike'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.ilike'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.id'?: 'asc' | 'desc';
  'orderby.title'?: 'asc' | 'desc';
}

/**
 * Default Response
 */
export type DbGetMoviesResponseOK = Array<{ 'id'?: number | null; 'title'?: string | null }>
export type DbGetMoviesResponses =
  DbGetMoviesResponseOK

export type DbCreateMovieRequest = {
  'id'?: number;
  'title': string;
}

/**
 * A Movie
 */
export type DbCreateMovieResponseOK = { 'id'?: number | null; 'title'?: string | null }
export type DbCreateMovieResponses =
  DbCreateMovieResponseOK

export type DbUpdateMoviesRequest = {
  'fields'?: Array<'id' | 'title'>;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.ilike'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.title.eq'?: string;
  'where.title.neq'?: string;
  'where.title.gt'?: string;
  'where.title.gte'?: string;
  'where.title.lt'?: string;
  'where.title.lte'?: string;
  'where.title.like'?: string;
  'where.title.ilike'?: string;
  'where.title.in'?: string;
  'where.title.nin'?: string;
  'where.title.contains'?: string;
  'where.title.contained'?: string;
  'where.title.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'title': string;
}

/**
 * Default Response
 */
export type DbUpdateMoviesResponseOK = Array<{ 'id'?: number | null; 'title'?: string | null }>
export type DbUpdateMoviesResponses =
  DbUpdateMoviesResponseOK

export type DbGetMovieByIdRequest = {
  'fields'?: Array<'id' | 'title'>;
  'id': number;
}

/**
 * A Movie
 */
export type DbGetMovieByIdResponseOK = { 'id'?: number | null; 'title'?: string | null }
export type DbGetMovieByIdResponses =
  DbGetMovieByIdResponseOK

export type DbUpdateMovieRequest = {
  'fields'?: Array<'id' | 'title'>;
  'id': number;
  'title': string;
}

/**
 * A Movie
 */
export type DbUpdateMovieResponseOK = { 'id'?: number | null; 'title'?: string | null }
export type DbUpdateMovieResponses =
  DbUpdateMovieResponseOK

export type DbDeleteMoviesRequest = {
  'fields'?: Array<'id' | 'title'>;
  'id': number;
}

/**
 * A Movie
 */
export type DbDeleteMoviesResponseOK = { 'id'?: number | null; 'title'?: string | null }
export type DbDeleteMoviesResponses =
  DbDeleteMoviesResponseOK

export type DbGetUsersRequest = {
  /**
   * Limit will be applied by default if not passed. If the provided value exceeds the maximum allowed value a validation error will be thrown
   */
  'limit'?: number;
  'offset'?: number;
  'totalCount'?: boolean;
  'fields'?: Array<'id' | 'name'>;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.ilike'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.name.eq'?: string;
  'where.name.neq'?: string;
  'where.name.gt'?: string;
  'where.name.gte'?: string;
  'where.name.lt'?: string;
  'where.name.lte'?: string;
  'where.name.like'?: string;
  'where.name.ilike'?: string;
  'where.name.in'?: string;
  'where.name.nin'?: string;
  'where.name.contains'?: string;
  'where.name.contained'?: string;
  'where.name.overlaps'?: string;
  'where.or'?: Array<string>;
  'orderby.id'?: 'asc' | 'desc';
  'orderby.name'?: 'asc' | 'desc';
}

/**
 * Default Response
 */
export type DbGetUsersResponseOK = Array<{ 'id'?: number | null; 'name'?: string | null }>
export type DbGetUsersResponses =
  DbGetUsersResponseOK

export type DbCreateUserRequest = {
  'id'?: number;
  'name': string;
}

/**
 * A User
 */
export type DbCreateUserResponseOK = { 'id'?: number | null; 'name'?: string | null }
export type DbCreateUserResponses =
  DbCreateUserResponseOK

export type DbUpdateUsersRequest = {
  'fields'?: Array<'id' | 'name'>;
  'where.id.eq'?: number;
  'where.id.neq'?: number;
  'where.id.gt'?: number;
  'where.id.gte'?: number;
  'where.id.lt'?: number;
  'where.id.lte'?: number;
  'where.id.like'?: number;
  'where.id.ilike'?: number;
  'where.id.in'?: string;
  'where.id.nin'?: string;
  'where.id.contains'?: string;
  'where.id.contained'?: string;
  'where.id.overlaps'?: string;
  'where.name.eq'?: string;
  'where.name.neq'?: string;
  'where.name.gt'?: string;
  'where.name.gte'?: string;
  'where.name.lt'?: string;
  'where.name.lte'?: string;
  'where.name.like'?: string;
  'where.name.ilike'?: string;
  'where.name.in'?: string;
  'where.name.nin'?: string;
  'where.name.contains'?: string;
  'where.name.contained'?: string;
  'where.name.overlaps'?: string;
  'where.or'?: Array<string>;
  'id'?: number;
  'name': string;
}

/**
 * Default Response
 */
export type DbUpdateUsersResponseOK = Array<{ 'id'?: number | null; 'name'?: string | null }>
export type DbUpdateUsersResponses =
  DbUpdateUsersResponseOK

export type DbGetUserByIdRequest = {
  'fields'?: Array<'id' | 'name'>;
  'id': number;
}

/**
 * A User
 */
export type DbGetUserByIdResponseOK = { 'id'?: number | null; 'name'?: string | null }
export type DbGetUserByIdResponses =
  DbGetUserByIdResponseOK

export type DbUpdateUserRequest = {
  'fields'?: Array<'id' | 'name'>;
  'id': number;
  'name': string;
}

/**
 * A User
 */
export type DbUpdateUserResponseOK = { 'id'?: number | null; 'name'?: string | null }
export type DbUpdateUserResponses =
  DbUpdateUserResponseOK

export type DbDeleteUsersRequest = {
  'fields'?: Array<'id' | 'name'>;
  'id': number;
}

/**
 * A User
 */
export type DbDeleteUsersResponseOK = { 'id'?: number | null; 'name'?: string | null }
export type DbDeleteUsersResponses =
  DbDeleteUsersResponseOK

export type GetDbExampleRequest = {
  
}

export type GetDbExampleResponseOK = unknown
export type GetDbExampleResponses =
  FullResponse<GetDbExampleResponseOK, 200>



export interface NextClient {
  setBaseUrl(newUrl: string): void;
  setDefaultHeaders(headers: object): void;
  setDefaultFetchParams(fetchParams: RequestInit): void;
  /**
   * Get movies.
   *
   * Fetch movies from the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  dbGetMovies(req: DbGetMoviesRequest): Promise<DbGetMoviesResponses>;
  /**
   * Create movie.
   *
   * Add new movie to the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  dbCreateMovie(req: DbCreateMovieRequest): Promise<DbCreateMovieResponses>;
  /**
   * Update movies.
   *
   * Update one or more movies in the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  dbUpdateMovies(req: DbUpdateMoviesRequest): Promise<DbUpdateMoviesResponses>;
  /**
   * Get Movie by id.
   *
   * Fetch Movie using its id from the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  dbGetMovieById(req: DbGetMovieByIdRequest): Promise<DbGetMovieByIdResponses>;
  /**
   * Update movie.
   *
   * Update movie in the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  dbUpdateMovie(req: DbUpdateMovieRequest): Promise<DbUpdateMovieResponses>;
  /**
   * Delete movies.
   *
   * Delete one or more movies from the Database.
   * @param req - request parameters object
   * @returns the API response body
   */
  dbDeleteMovies(req: DbDeleteMoviesRequest): Promise<DbDeleteMoviesResponses>;
  /**
   * Get users.
   *
   * Fetch users from the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  dbGetUsers(req: DbGetUsersRequest): Promise<DbGetUsersResponses>;
  /**
   * Create user.
   *
   * Add new user to the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  dbCreateUser(req: DbCreateUserRequest): Promise<DbCreateUserResponses>;
  /**
   * Update users.
   *
   * Update one or more users in the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  dbUpdateUsers(req: DbUpdateUsersRequest): Promise<DbUpdateUsersResponses>;
  /**
   * Get User by id.
   *
   * Fetch User using its id from the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  dbGetUserById(req: DbGetUserByIdRequest): Promise<DbGetUserByIdResponses>;
  /**
   * Update user.
   *
   * Update user in the database.
   * @param req - request parameters object
   * @returns the API response body
   */
  dbUpdateUser(req: DbUpdateUserRequest): Promise<DbUpdateUserResponses>;
  /**
   * Delete users.
   *
   * Delete one or more users from the Database.
   * @param req - request parameters object
   * @returns the API response body
   */
  dbDeleteUsers(req: DbDeleteUsersRequest): Promise<DbDeleteUsersResponses>;
  /**
   * @param req - request parameters object
   * @returns the API response body
   */
  getDbExample(req: GetDbExampleRequest): Promise<GetDbExampleResponses>;
}
type PlatformaticFrontendClient = Omit<NextClient, 'setBaseUrl'>
type BuildOptions = {
  headers?: object
}
export default function build(url: string, options?: BuildOptions): PlatformaticFrontendClient
