export const css = `
.rebilly-instruments-content.is-summary,
.rebilly-instruments-summary .rebilly-instruments-loader {
  background-color: #f9fafb;
}
`;

export const theme = {
  colorPrimary: "#2B2D42",
};

export const organizationId = "phronesis-villanest";

export const publishableKey = "pk_sandbox_ex-Kc1qd58lihJnsejLtQMpzBBlVRu-YtsNqEG4";

export const secretKey = "sk_sandbox_bg4aWLG58j48J_xaKR15ZFiDbxU1UutzYSHLcs2";

export const websiteId = "www.example.com-phronesis-villanest";

export const apiMode = "sandbox";

export function useBaseConfig({deleteKeys = []} = {}) {
  const config = {
    organizationId,
    publishableKey,
    websiteId,
    apiMode,
    theme,
    css,
    features: {
      showConsentCheck: ["form"],
    },
    i18n: {
      en: {
        consentCheck: {
          agreeToTOS:
            "I agree to the [terms of service](https://www.example.com/tos) and the [privacy policy](https://www.example.com/privacy)",
        },
      },
    },
  };

  for(const key of deleteKeys) {
    delete config[key];
  }

  return config;
}
