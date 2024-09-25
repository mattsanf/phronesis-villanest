import "./styles.css";
import RebillyAPI from "rebilly-js-sdk";
import { RebillyStorefrontAPI } from "rebilly-js-sdk";
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
        <td>${invoice.id}</td>
        <td>${invoice.issuedTime}</td>
        <td>${invoice.status}</td>
        <td>${invoice.amountDue}</td>
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
