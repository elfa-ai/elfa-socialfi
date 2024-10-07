import { FormOption } from "@/handlers/types/ui/form";
import { useState } from "react";

export type UseSelectReturnType<
  T extends string = "value",
  ValueType extends string = string,
> = ReturnType<typeof useSelect<T, ValueType>>;

const useSelect = <T extends string = "value", ValueType = string>(
  _options: FormOption<T>[],
  key: T,
  defaultValue: ValueType | undefined = undefined,
) => {
  const [optionValue, setOptionValue] = useState<ValueType | undefined>(
    defaultValue,
  );

  const options = (_options ?? []).map((option) => ({
    value: option[key as T] as ValueType,
    ...option,
  }));

  return {
    // realValue: optionValue ? JSON.parse(optionValue).value as string : undefined,
    value: optionValue,
    handleValueChange: (newVal: ValueType | undefined) =>
      setOptionValue(newVal),
    options,
  };
};

export default useSelect;
