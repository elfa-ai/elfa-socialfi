import { useQuery } from "@tanstack/react-query";
import elfaApi from "@/handlers/api/core";
import { ElfaUseQueryOptions } from "../core/types";

export const getElfaConfig = (): any => elfaApi.get("/elfaConfig");

export const ELFA_CONFIG_QUERY_KEYS = ["elfaConfig"];

export const useElfaConfig = (options?: ElfaUseQueryOptions<any>) =>
  useQuery({
    queryKey: ELFA_CONFIG_QUERY_KEYS,
    queryFn: () => getElfaConfig(),
    ...options,
  });
