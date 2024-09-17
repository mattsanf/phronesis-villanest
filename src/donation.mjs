import "./styles.css";
import { baseConfig } from "./instruments.mjs";

const params = new URLSearchParams(window.location.search);

let config = {
  ...baseConfig,
};

if (params.get("type") === "one-time") {
  config.money = {
    amount: parseFloat(params.get("amount")),
    currency: "USD",
  };
} else {
  config.items = [
    {
      planId: "monthly-2",
      quantity: {
        default: parseInt(params.get("amount")),
        minimum: 1,
        maximum: 1000,
        multipleOf: 1,
      },
    },
  ];
}

RebillyInstruments.mount(config);
