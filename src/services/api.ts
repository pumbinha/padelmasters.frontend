/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface UserDetailDto {
  User?: UserDto;
  UserStatistics?: UserStatisticsDto;
  UserMatches?: GroupMatchDto[];
}

export interface UserDto {
  /** @format guid */
  Id?: string;
  FirstName?: string;
  LastName?: string;
}

export interface UserStatisticsDto {
  /** @format int32 */
  MatchesPlayed?: number;
  /** @format int32 */
  MatchesWon?: number;
  /** @format int32 */
  MatchesLost?: number;
  /** @format int32 */
  SetsWon?: number;
  /** @format int32 */
  SetsLost?: number;
  /** @format int32 */
  PointsWon?: number;
  /** @format int32 */
  PointsLost?: number;
  /** @format int32 */
  WinRate?: number;
}

export interface GroupMatchDto {
  /** @format guid */
  Id?: string;
  Team1?: GroupTeamDtoResult;
  Team2?: GroupTeamDtoResult;
  /** @format date-time */
  Date?: string | null;
  /** @format int32 */
  RoundNumber?: number | null;
  Status?: MatchStatus | null;
  MatchType?: MatchType | null;
  MatchResults?: GroupMatchResultDto[];
  CurrentUserIsPlayer?: boolean;
  CurrentUserCanEdit?: boolean;
  CurrentUserCanDelete?: boolean;
}

export interface GroupTeamDtoResult {
  Team?: GroupTeamDto;
  IsWinner?: boolean;
}

export interface GroupTeamDto {
  /** @format guid */
  Id?: string;
  Name?: string | null;
  Player1?: UserDto;
  Player2?: UserDto;
}

export interface GroupMatchResultDto {
  /** @format int32 */
  MatchSet?: number;
  /** @format int32 */
  ResultTeam1?: number;
  /** @format int32 */
  ResultTeam2?: number;
}

export interface DefaultCreatedResponse {
  /** @format guid */
  Id?: string;
}

export interface SaveMatchResultRequest {
  /** @format date-time */
  Date?: string;
  MatchResult1?: GroupMatchResultDto;
  MatchResult2?: GroupMatchResultDto | null;
  MatchResult3?: GroupMatchResultDto | null;
}

export interface GroupMatchSearchDto {
  Championship?: ChampionshipDto;
  Group?: GroupDto;
  Match?: GroupMatchDto;
}

export interface ChampionshipDto {
  /** @format guid */
  Id?: string;
  Name?: string;
  Description?: string | null;
  Rules?: string | null;
  /** @format date-time */
  StartDate?: string;
  /** @format date-time */
  EndDate?: string;
  Status?: ChampionshipStatus | null;
  Type?: ChampionshipType | null;
}

export interface GroupDto {
  /** @format guid */
  Id?: string;
  Name?: string;
  Description?: string | null;
  GroupType?: GroupType | null;
}

export interface SearchMatchesRequest {
  /** @format guid */
  GroupId?: string | null;
  /** @format guid */
  UserId?: string | null;
  MatchStatus?: MatchStatus | null;
}

export interface GetGroupResponse {
  Group?: GroupInformationDto;
}

export interface GroupInformationDto {
  Group?: GroupDto;
  GroupDetail?: GroupDetailDto;
  Championship?: ChampionshipDto;
}

export interface GroupDetailDto {
  /** @format int32 */
  NumberPlayers?: number;
  /** @format int32 */
  NumberMatches?: number;
  /** @format int32 */
  NumberOfPlayedMatches?: number;
  /** @format int32 */
  NumberOfPendingMatches?: number;
  /** @format int32 */
  NumberOfFinalists?: number;
}

export interface StandingDto {
  PlayerStandings?: PlayerStandingDto[];
}

export interface PlayerStandingDto {
  /** @format guid */
  UserId?: string;
  DisplayName?: string;
  /** @format int32 */
  Points?: number;
  /** @format int32 */
  WonMatches?: number;
  /** @format int32 */
  LostMatches?: number;
  /** @format int32 */
  PlayedMatches?: number;
}

export interface CreateChampionshipRequest {
  Name?: string;
  Description?: string | null;
  /** @format date-time */
  StartDate?: string;
  /** @format date-time */
  EndDate?: string;
  ChampionshipType?: ChampionshipType | null;
  Configurations?: ChampionshipConfigurationItemDto[];
}

export interface ChampionshipConfigurationItemDto {
  Key?: ChampionshipConfigurationKey | null;
  Value?: string;
}

export interface EnrollChampionshipRequest {
  Notes?: string | null;
}

export interface GetChampionshipResponse {
  Championship?: ChampionshipInformationDto;
  Configurations?: ChampionshipConfigurationDto[];
  Groups?: GroupDto[];
}

export interface ChampionshipInformationDto {
  Championship?: ChampionshipDto;
  ChampionshipDetail?: ChampionshipDetailDto;
  UserProfile?: ChampionshipUserProfileDto;
}

export interface ChampionshipDetailDto {
  /** @format int32 */
  NumberEnrolledPlayers?: number;
  /** @format int32 */
  NumberTotalPlayers?: number;
  /** @format int32 */
  NumberGroups?: number;
  /** @format int32 */
  NumberMatches?: number;
  /** @format int32 */
  NumberOfPlayedMatches?: number;
  /** @format int32 */
  NumberOfPendingMatches?: number;
}

export interface ChampionshipUserProfileDto {
  UserIsRegistered?: boolean;
  UserIsOwner?: boolean;
  UserCanJoin?: boolean;
  UserCanLeave?: boolean;
  /** @format guid */
  CurrentGroupId?: string | null;
}

export interface ChampionshipConfigurationDto {
  Name?: string;
  Description?: string;
  Key?: ChampionshipConfigurationKey | null;
  Value?: string;
}

export enum MatchStatus {
  Planned = "Planned",
  Played = "Played",
  Cancelled = "Cancelled",
}

export enum MatchType {
  Classic = "Classic",
  Americano = "Americano",
}

export enum ChampionshipStatus {
  Created = "Created",
  Open = "Open",
  Started = "Started",
  Cancelled = "Cancelled",
  Finished = "Finished",
}

export enum ChampionshipType {
  AmericanoLeagueWithAmericanoFinal = "AmericanoLeagueWithAmericanoFinal",
}

export enum GroupType {
  League = "League",
  Americano = "Americano",
}

export enum ChampionshipConfigurationKey {
  NumberOfPlayers = "NumberOfPlayers",
  NumberOfGroups = "NumberOfGroups",
  HasFinals = "HasFinals",
  NumberOfFinalists = "NumberOfFinalists",
  PointsPerWin = "PointsPerWin",
  PointsPerDraw = "PointsPerDraw",
  PointsPerLoss = "PointsPerLoss",
  AmericanoPoints = "AmericanoPoints",
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "https://test.api.padelmasters.net";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: FormData) =>
      (Array.from(input.keys()) || []).reduce((formData, key) => {
        const property = input.get(key);
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Padelmasters.Api
 * @version 1.0.0
 * @baseUrl https://test.api.padelmasters.net
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Api
     * @name PadelmastersApiDomainEndpointsUsersGetUser
     * @request GET:/api/users/{userId}
     * @secure
     */
    padelmastersApiDomainEndpointsUsersGetUser: (userId: string, params: RequestParams = {}) =>
      this.request<UserDetailDto, void>({
        path: `/api/users/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Api
     * @name PadelmastersApiDomainEndpointsMatchesDeleteMatchResult
     * @request DELETE:/api/matches/{matchId}
     * @secure
     */
    padelmastersApiDomainEndpointsMatchesDeleteMatchResult: (matchId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/matches/${matchId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Api
     * @name PadelmastersApiDomainEndpointsMatchesGetMatch
     * @request GET:/api/matches/{matchId}
     * @secure
     */
    padelmastersApiDomainEndpointsMatchesGetMatch: (matchId: string, params: RequestParams = {}) =>
      this.request<GroupMatchDto, void>({
        path: `/api/matches/${matchId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Api
     * @name PadelmastersApiDomainEndpointsMatchesCreateChampionship
     * @request POST:/api/matches/{matchId}/results
     * @secure
     */
    padelmastersApiDomainEndpointsMatchesCreateChampionship: (
      matchId: string,
      data: SaveMatchResultRequest,
      params: RequestParams = {},
    ) =>
      this.request<DefaultCreatedResponse, void>({
        path: `/api/matches/${matchId}/results`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Api
     * @name PadelmastersApiDomainEndpointsMatchesSearchMatches
     * @request POST:/api/matches/search
     * @secure
     */
    padelmastersApiDomainEndpointsMatchesSearchMatches: (data: SearchMatchesRequest, params: RequestParams = {}) =>
      this.request<GroupMatchSearchDto[], void>({
        path: `/api/matches/search`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Api
     * @name PadelmastersApiDomainEndpointsGroupsGetGroup
     * @request GET:/api/groups/{groupId}
     * @secure
     */
    padelmastersApiDomainEndpointsGroupsGetGroup: (groupId: string, params: RequestParams = {}) =>
      this.request<GetGroupResponse, void>({
        path: `/api/groups/${groupId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Api
     * @name PadelmastersApiDomainEndpointsGroupsGetGroupStandings
     * @request GET:/api/groups/{groupId}/standing
     * @secure
     */
    padelmastersApiDomainEndpointsGroupsGetGroupStandings: (groupId: string, params: RequestParams = {}) =>
      this.request<StandingDto, void>({
        path: `/api/groups/${groupId}/standing`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Api
     * @name PadelmastersApiDomainEndpointsChampionshipsCreateChampionship
     * @request POST:/api/championships
     * @secure
     */
    padelmastersApiDomainEndpointsChampionshipsCreateChampionship: (
      data: CreateChampionshipRequest,
      params: RequestParams = {},
    ) =>
      this.request<DefaultCreatedResponse, void>({
        path: `/api/championships`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Api
     * @name PadelmastersApiDomainEndpointsChampionshipsGetChampionships
     * @request GET:/api/championships
     * @secure
     */
    padelmastersApiDomainEndpointsChampionshipsGetChampionships: (params: RequestParams = {}) =>
      this.request<ChampionshipInformationDto[], void>({
        path: `/api/championships`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Api
     * @name PadelmastersApiDomainEndpointsChampionshipsEnrollChampionship
     * @request POST:/api/championships/{championshipId}/enroll
     * @secure
     */
    padelmastersApiDomainEndpointsChampionshipsEnrollChampionship: (
      championshipId: string,
      data: EnrollChampionshipRequest,
      params: RequestParams = {},
    ) =>
      this.request<DefaultCreatedResponse, void>({
        path: `/api/championships/${championshipId}/enroll`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Api
     * @name PadelmastersApiDomainEndpointsChampionshipsGetChampionship
     * @request GET:/api/championships/{championshipId}
     * @secure
     */
    padelmastersApiDomainEndpointsChampionshipsGetChampionship: (championshipId: string, params: RequestParams = {}) =>
      this.request<GetChampionshipResponse, void>({
        path: `/api/championships/${championshipId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Api
     * @name PadelmastersApiDomainEndpointsChampionshipsLeaveChampionship
     * @request POST:/api/championships/{championshipId}/leave
     * @secure
     */
    padelmastersApiDomainEndpointsChampionshipsLeaveChampionship: (
      championshipId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/api/championships/${championshipId}/leave`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Api
     * @name PadelmastersApiDomainEndpointsChampionshipsOpenChampionship
     * @request POST:/api/championships/{championshipId}/open
     * @secure
     */
    padelmastersApiDomainEndpointsChampionshipsOpenChampionship: (championshipId: string, params: RequestParams = {}) =>
      this.request<any, void>({
        path: `/api/championships/${championshipId}/open`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Api
     * @name PadelmastersApiDomainEndpointsChampionshipsStartChampionship
     * @request POST:/api/championships/{championshipId}/start
     * @secure
     */
    padelmastersApiDomainEndpointsChampionshipsStartChampionship: (
      championshipId: string,
      params: RequestParams = {},
    ) =>
      this.request<any, void>({
        path: `/api/championships/${championshipId}/start`,
        method: "POST",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
