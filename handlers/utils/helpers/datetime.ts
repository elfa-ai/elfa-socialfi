import {
  format,
  formatDistanceToNowStrict,
  FormatDistanceToNowStrictOptions,
} from "date-fns";

export const formatDateTime = (
  unixTimestamp: number,
  formatStr: string = "d MMMM yyyy, h:mm a",
) => format(new Date(unixTimestamp * 1000), formatStr);

export const formatDateTimeDistance = (
  unixTimestamp: number,
  concise: boolean = false,
  config?: FormatDistanceToNowStrictOptions,
) => {
  const date = new Date(unixTimestamp * 1000);

  const result = formatDistanceToNowStrict(date, config);
  if (concise) {
    const [value, unit] = result.split(" ");

    switch (unit) {
      case "second":
      case "seconds":
        return `${value}s`;
      case "minute":
      case "minutes":
        return `${value}m`;
      case "hour":
      case "hours":
        return `${value}h`;
      case "day":
      case "days":
        return `${value}d`;
      case "week":
      case "weeks":
        return `${value}w`;
      case "month":
      case "months":
        return `${value}m`;
      case "year":
      case "years":
        return `${value}y`;
      default:
        return result;
    }
  }

  return result;
};
