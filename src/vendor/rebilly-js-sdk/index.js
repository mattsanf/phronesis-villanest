import {
  organizationId,
  websiteId,
  secretKey as apiKey,
} from "../../components/RebillyInstruments";
import RebillyAPI, { RebillyStorefrontAPI } from "rebilly-js-sdk";

const api = new RebillyAPI({
  apiKey,
  organizationId,
  sandbox: true,
});
const storefrontApi = new RebillyStorefrontAPI({
  apiKey,
  organizationId,
  sandbox: true,
});

export function useRebillySDK() {
  api.storefront = storefrontApi;

  api.actions = {
    passwordlessLogin: async ({ customerId }) => {
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
                  organizationId: [organizationId],
                },
                permissions: [
                  "*",
                  // "PostToken",
                  // "PostDigitalWalletValidation",
                  // "StorefrontGetAccount",
                  // "StorefrontPatchAccount",
                  // "StorefrontPostPayment",
                  // "StorefrontGetTransaction",
                  // "StorefrontGetPaymentInstrumentCollection",
                  // "StorefrontPostPaymentInstrument",
                  // "StorefrontGetPaymentInstrument",
                  // "StorefrontPatchPaymentInstrument",
                  // "StorefrontPostPaymentInstrumentDeactivation",
                  // "StorefrontGetWebsite",
                  // "StorefrontGetInvoiceCollection",
                  // "StorefrontGetInvoice",
                  // "StorefrontGetProductCollection",
                  // "StorefrontGetProduct",
                  // "StorefrontPostReadyToPay",
                  // "StorefrontPostPreviewPurchase",
                  // "StorefrontGetDepositRequest",
                  // "StorefrontGetDepositStrategy",
                  // "StorefrontPostDeposit",
                ],
              },
            ],
            customClaims: {
              websiteId: websiteId,
            },
          },
        });

      return exchangeToken;
    },
  };
  return api;
}
