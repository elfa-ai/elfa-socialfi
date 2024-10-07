export const roundTokenValue = (number: number | null) => {
  if (!number) return 0;
  if (number >= 1) {
    return Number(number.toFixed(3));
  }
  const scientificNotation = number.toExponential();
  const [, exponent] = scientificNotation.split("e");
  const decimals = Math.min(Math.max(3 - Number(exponent), 0), 100);
  return Number(number.toFixed(decimals));
};

export const roundPercentageValue = (number: number | null): string => {
  if (!number) return "0";

  const absNumber = Math.abs(number);
  if (absNumber >= 1000)
    return new Intl.NumberFormat("en-US").format(Number(absNumber.toFixed()));
  const exponent = Math.floor(Math.log10(absNumber));

  const multiplier = Math.pow(10, 2 - exponent);

  let roundedNumber = Math.round(number * multiplier) / multiplier;
  roundedNumber = roundedNumber === 0 ? Math.abs(roundedNumber) : roundedNumber;
  return roundedNumber.toString();
};

export const formatRoundNumberToShortForm = (number: number): string => {
  if (number < 0) return `-${formatRoundNumberToShortForm(-number)}`;
  if (number < 1000) return number.toString();

  const suffixes = ["", "K", "M", "B", "T"];
  const i = Math.floor(Math.log10(number) / 3);
  if (i >= suffixes.length) {
    const stringifiedNum = number.toString();
    return `${parseInt(stringifiedNum.slice(0, stringifiedNum.length - 12)).toLocaleString()}T`;
  }

  const shortNum = (number / Math.pow(1000, i)).toPrecision(3);

  const formattedNum = parseFloat(shortNum).toString();
  return `${formattedNum}${suffixes[i]}`;
};

export const formatDecimalNumberToShortForm = (number: number): string => {
  if (number < 0) return `-${formatDecimalNumberToShortForm(-number)}`;
  if (number < 1000) {
    return number.toFixed(2).replace(/\.?0+$/, "");
  }

  const suffixes = ["", "K", "M", "B", "T"];
  const i = Math.floor(Math.log10(number) / 3);
  if (i >= suffixes.length) {
    const stringifiedNum = number.toString();
    return `${parseInt(stringifiedNum.slice(0, stringifiedNum.length - 12)).toLocaleString()}T`;
  }

  const shortNum = (number / Math.pow(1000, i)).toPrecision(3);

  const formattedNum = parseFloat(shortNum).toString();
  return `${formattedNum}${suffixes[i]}`;
};

export const formatPriceDisplay = (value: number) => {
  const resultValue = roundTokenValue(value);
  if (resultValue < 1) {
    const scientificNotation = resultValue.toExponential();
    const [, exponent] = scientificNotation.split("e");
    const decimals = Math.min(Math.max(3 - Number(exponent), 0), 100);
    return `$${resultValue.toFixed(decimals)}`;
  }
  return `$${resultValue.toLocaleString()}`;
};
