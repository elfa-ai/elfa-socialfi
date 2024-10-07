"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";

import { ErrorBoundary, FallbackProps } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      role="alert"
    >
      <p className="p-5">
        Sorry. We are unable to process your request temporarily.
      </p>
      <Button variant="primary" onClick={resetErrorBoundary}>
        Reload
      </Button>
    </div>
  );
}

function ElfaErrorBoundary({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV === "development") return children;
  return (
    <>
      <ExceptionHandler />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          if (process.env.NODE_ENV === "development") return;
          // reset the state of your app so the error doesn't happen again
          window.location.reload();
        }}
      >
        {children}
      </ErrorBoundary>
    </>
  );
}

function ExceptionHandler() {
  const [exceptionMessages, setExceptionMessages] = useState<string[]>([]);

  const onError = (exception: ErrorEvent) => {
    if (process.env.KW_DEBUG) {
      if (!exception.message) {
        // The "no controller" something
        return;
      }
      setExceptionMessages(exception.message.split(/\n/));
    }
  };

  useEffect(() => {
    window.addEventListener("error", onError);
    return () => {
      window.removeEventListener("error", onError);
    };
  });

  if (!exceptionMessages.length) return null;

  return (
    <div>
      <div>
        <span>
          {exceptionMessages.map((message) => (
            <div key={message}>{message}</div>
          ))}
        </span>
        <button
          type="button"
          onClick={() => {
            setExceptionMessages([]);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default ElfaErrorBoundary;
