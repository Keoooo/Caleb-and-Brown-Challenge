//FORMAT PERCENTAGES TO .2 DP
export const formatPercent = (number) => {
  return `${new Number(number).toFixed(2)}%`;
};

//FORMAT THE DOLLAR PRICE
export const formatDollar = (number, maxSignificantDigits) => {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "usd",
    maxSignificantDigits,
  }).format(number);
};

export const getFilteredItems = (query, items) => {
  if (!query) return;
  if (!items) return;
  // Searched all products on supabase table and returns close itesm to query
  const result = items.filter((item) => {
    return item.id.toLowerCase().includes(query);
  });

  return result;
};
