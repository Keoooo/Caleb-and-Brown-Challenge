//FORMAT PERCENTAGES TO .2 DP
export const formatPercent = (number) => `${new Number(number).toFixed(2)}%`;

//FORMAT THE DOLLAR PRICE
export const formatDollar = (number, maxSignificantDigits) => {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "usd",
    maxSignificantDigits,
  }).format(number);
};
