"use client";

import { enqueueSnackbar } from "notistack";

export async function handleErrorResponse(error: any) {
  if (error.response.status === 404 && !error.response.data.code) {
    displayErrorResponse(
      "404 - It's not you, it's us. Something is missing here. Please refresh the page",
    );
    return;
  }

  throw error;
}

export const getDefaultErrorStatus = (error: any): number => {
  return 400;
};

export const getDefaultErrorMessage = (error: any): string => {
  if (error && error instanceof Error) return error.message;
  return String(error);
};

export const displayErrorResponse = (error: any) => {
  enqueueSnackbar(error.toString(), { variant: "error" });
};
