import "./styles.css";
import "./invoices.css";
import RebillyAPI from "rebilly-js-sdk";
import { RebillyStorefrontAPI } from "rebilly-js-sdk";
import { utcToZonedTime, format } from "date-fns-tz";
import { baseConfig } from "./instruments.mjs";
const customerId = "cus_01J56B1FAQ1M4Y29E3VWCB41EQ";

(async () => {
  const api = new RebillyAPI({
    apiKey: "sk_sandbox_bg4aWLG58j48J_xaKR15ZFiDbxU1UutzYSHLcs2",
    organizationId: baseConfig.organizationId,
    sandbox: true,
  });

  const { fields: login } = await api.customerAuthentication.login({
    data: {
      mode: "passwordless",
      customerId,
    },
  });

  const { fields: exchangeToken } =
    await api.customerAuthentication.exchangeToken({
      token: login.token,
      data: {
        acl: [
          {
            scope: {
              organizationId: [baseConfig.organizationId],
            },
            permissions: [
              "PostToken",
              "PostDigitalWalletValidation",
              "StorefrontGetAccount",
              "StorefrontPatchAccount",
              "StorefrontPostPayment",
              "StorefrontGetTransaction",
              "StorefrontGetPaymentInstrumentCollection",
              "StorefrontPostPaymentInstrument",
              "StorefrontGetPaymentInstrument",
              "StorefrontPatchPaymentInstrument",
              "StorefrontPostPaymentInstrumentDeactivation",
              "StorefrontGetWebsite",
              "StorefrontGetInvoiceCollection",
              "StorefrontGetInvoice",
              "StorefrontGetProductCollection",
              "StorefrontGetProduct",
              "StorefrontPostReadyToPay",
              "StorefrontPostPreviewPurchase",
            ],
          },
        ],
        customClaims: {
          websiteId: baseConfig.websiteId,
        },
      },
    });

  const storefrontApi = new RebillyStorefrontAPI({
    apiKey: "sk_sandbox_bg4aWLG58j48J_xaKR15ZFiDbxU1UutzYSHLcs2",
    organizationId: baseConfig.organizationId,
    sandbox: true,
  });
  storefrontApi.setSessionToken(exchangeToken.token);

  let { items: invoices } = await storefrontApi.invoices.getAll();
  invoices = invoices.map(({ fields }) => fields);

  let table = document.querySelector("tbody");
  for (let invoice of invoices) {
    table.insertAdjacentHTML(
      "beforeEnd",
      `
        <tr>
          <td class="rigth">${invoice.id}</td>
          <td>${formatDate(invoice.issuedTime)}</td>
          <td>${invoice.status}</td>
          <td>${formatCurrency(invoice.amountDue, invoice.currency)}</td>
          <td id="${invoice.id}-actions"></td>
        </tr>
      `
    );
    const actions = document.getElementById(`${invoice.id}-actions`);

    const payButton = document.createElement("button");
    payButton.innerHTML = "Pay";
    payButton.addEventListener("click", () => {
      window.location = `/invoice.html?id=${invoice.id}`;
    });

    if (["unpaid", "past-due", "partially-paid"].includes(invoice.status)) {
      actions.insertAdjacentElement("beforeEnd", payButton);
    }
  }
})();

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

function formatDate(date, template = "PPP KK:mm") {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const zonedTime = utcToZonedTime(date, timeZone);
  return format(zonedTime, template);
}
