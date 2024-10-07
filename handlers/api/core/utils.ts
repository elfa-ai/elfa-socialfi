import { RawAxiosRequestHeaders } from "axios";

export function getHeaders(
  newHeaders?: RawAxiosRequestHeaders,
): RawAxiosRequestHeaders {
  const headers: RawAxiosRequestHeaders = {};

  headers["Content-Type"] = newHeaders?.["Content-Type"] ?? "application/json";

  return headers;
}
