"use client";

import { useTransition } from "react";
import { revalidateAllCache } from "../actions";

interface RevalidateButtonProps {
  className?: string;
}

export const RevalidateButton = ({ className = "" }: RevalidateButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const handleRevalidate = () => {
    startTransition(async () => {
      const result = await revalidateAllCache();
      console.log("🔄 Cache revalidated at:", result.timestamp);
    });
  };

  return (
    <button
      type="button"
      onClick={handleRevalidate}
      disabled={isPending}
      aria-label="Revalidate cache to fetch fresh data"
      tabIndex={0}
      className={`
        inline-flex items-center gap-2 px-4 py-2 
        bg-red-600 hover:bg-red-700 disabled:bg-red-400
        text-white font-medium text-sm rounded-lg
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
        disabled:cursor-not-allowed
        ${className}
      `}
    >
      {isPending ? (
        <>
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Revalidating...
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          Revalidate Cache
        </>
      )}
    </button>
  );
};
