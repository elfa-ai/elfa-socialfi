"use client";

import React from "react";
import * as Select from "@radix-ui/react-select";
import { FaChevronUp } from "@react-icons/all-files/fa/FaChevronUp";
import { cn } from "@/handlers/types/ui/common";
import { FormOption } from "@/handlers/types/ui/form";
import useInitRender from "@/handlers/hooks/layout/useInitRender";

type ElfaSelectProps<T extends string = string> = {
  options: FormOption[];
  // { label: string; value: T; leftIcon?: React.ReactNode }[];
  handleValueChange: (val: T | undefined) => void;
  value: T | undefined;
  // valueFormatter?: (val: T) => string;
  defaultLabel?: string;
  hideLabel?: boolean;
  selectProps?: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >;
};

const DEFAULT_PLACEHOLDER_VALUE = ' "X3-1" ';

const ElfaSelect = <T extends string = string>({
  value,
  handleValueChange,
  options,
  // valueFormatter = (val) => val,
  defaultLabel = "Select",
  hideLabel = false,
  selectProps,
}: ElfaSelectProps<T>) => {
  // const realValue = value ? JSON.parse(value) : undefined;

  const initRender = useInitRender();

  const getValueOptionObject = () => {
    if (!value || !initRender) return undefined;
    return options.find((option) => option.value === value);
  };

  const valueOptionObject = getValueOptionObject();

  return (
    <Select.Root
      value={value ?? defaultLabel}
      onValueChange={(val: T) =>
        handleValueChange(val === DEFAULT_PLACEHOLDER_VALUE ? undefined : val)
      }
    >
      <Select.Trigger
        className={cn(
          "flex items-center justify-between gap-3 border rounded-full px-4 py-2 min-w-32 w-fit data-[state=open]:bg-purple-bg",
          "data-[state=open]:border-transparent focus-visible:!ring-0 focus-visible:!outline-none data-[state=closed]:border-gray-300 text-gray-900",
          selectProps?.className,
        )}
      >
        <Select.Value
          aria-label={value}
          className="flex gap-2 items-center text-gray-900"
        >
          <div className="flex gap-2 items-center text-gray-900">
            {!!valueOptionObject?.leftIcon && (
              <div className="text-gray-900">{valueOptionObject.leftIcon}</div>
            )}
            <div className="text-gray-900">
              {valueOptionObject?.label ?? defaultLabel}
            </div>
          </div>
        </Select.Value>
        <FaChevronUp className="rotate-180 size-3 fill-gray-900" />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="z-[202]">
          <Select.Viewport className="border border-gray-300 rounded-lg bg-purple-bg">
            {!hideLabel && (
              <Select.Item
                value={DEFAULT_PLACEHOLDER_VALUE}
                className="px-4 py-2 bg-purple-bg text-gray-900 cursor-pointer focus-visible:ring-0 focus-visible:!outline-none hover:bg-gray-200"
              >
                <Select.ItemText className="text-gray-900">
                  {defaultLabel}
                </Select.ItemText>
                {/* <Select.ItemIndicator>…</Select.ItemIndicator> */}
              </Select.Item>
            )}
            {options.map((option) => {
              return (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className={cn(
                    "px-4 py-2 focus-visible:!ring-0 focus-visible:!outline-none bg-purple-bg text-gray-900 cursor-pointer hover:!bg-gray-200",
                    {
                      "!bg-gray-200": !!value && option.value === value,
                    },
                    "flex items-center gap-2",
                  )}
                >
                  {!!option.leftIcon && <div>{option.leftIcon}</div>}
                  <Select.ItemText>{option.label}</Select.ItemText>
                  {/* <Select.ItemIndicator>…</Select.ItemIndicator> */}
                </Select.Item>
              );
            })}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default ElfaSelect;
