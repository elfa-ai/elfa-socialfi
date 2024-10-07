import { QueryKey } from "@tanstack/react-query";
import { ElfaAPIError } from "../errors/types";

export type ElfaAPIResponse<T> = any;
export type ElfaAPIPromise<T> = any;

export type ElfaUseQueryOptions<
  TQueryFnData = unknown,
  TError = ElfaAPIError,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
> = any;

export type ElfaUseInfiniteQueryOptions<
  TQueryFnData = unknown,
  TError = ElfaAPIError,
  TData = TQueryFnData,
  TQueryData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey,
  TPageParam = number | undefined,
> = any;

export type ElfaUseMutationOptions<
  TData = unknown,
  TError = ElfaAPIError,
  TVariables = unknown,
> = any;

export type MetadataPaginationParam = any;

export type MetadataPaginationResponse = any;

export type PaginatedResponse<T = unknown> = any;
