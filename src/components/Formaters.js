import { utcToZonedTime, format } from "date-fns-tz";

function formatDate(date, template = "PPP KK:mm") {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const zonedTime = utcToZonedTime(date, timeZone);
  return format(zonedTime, template);
}

function formatCurrency(number, currency = "USD", options = {}) {
  const numberValue = Number(number);
  if (
    Number.isNaN(numberValue) ||
    number == null ||
    number.toString().length === 0
  )
    return "-";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    ...options,
  }).format(numberValue);
}

export function useFormatters() {
  return {
    formatDate,
    formatCurrency
  }
}