export type FormOption<T extends string = "value"> = {
  label: string;
  leftIcon?: React.ReactNode;
} & Record<T, string>;
