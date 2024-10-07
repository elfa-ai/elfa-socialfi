"use client";

import {
  getCookie as nextGetCookie,
  deleteCookie as nextDeleteCookie,
  setCookie as nextSetCookie,
} from "cookies-next";
import { OptionsType } from "cookies-next/lib/types";

const getExpireTime = () => {
  const currentDate = new Date();
  const newDate = new Date(currentDate);
  newDate.setDate(currentDate.getDate() + 2);
  return newDate;
};

const DEFAULT_COOKIE_OPTION: OptionsType = {
  secure: true,
  expires: getExpireTime(),
};

export const getCookie = (key: string) => nextGetCookie(key);
export const setCookie = (
  key: string,
  value: string | boolean | number,
  options = DEFAULT_COOKIE_OPTION,
) => {
  nextSetCookie(key, value as string, options);
};
export const deleteCookie = (key: string) => {
  nextDeleteCookie(key);
};
