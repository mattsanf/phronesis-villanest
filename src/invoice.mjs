import "./styles.css";
import RebillyAPI from "rebilly-js-sdk";
import { RebillyStorefrontAPI } from "rebilly-js-sdk";
import { baseConfig } from "./instruments.mjs";
const customerId = "cus_01J56B1FAQ1M4Y29E3VWCB41EQ";
const params = new URLSearchParams(window.location.search);

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
          invoiceId: params.get("id"),
        },
      },
    });

  RebillyInstruments.mount({
    jwt: exchangeToken.token,
    apiMode: "sandbox",
    invoiceId: params.get("id"),
  });
})();
