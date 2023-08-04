export const convertNumberToUSD = (num: number) =>
  num.toLocaleString("en-us", {
    style: "currency",
    currency: "USD",
  });
