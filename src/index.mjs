import "./styles.css";
import { baseConfig } from "./instruments.mjs";

let config = {
  ...baseConfig,
  items: [
    {
      planId: "premium-monthly",
      quantity: 1,
    },
  ],
  paymentInstruments: {
    address: {
      name: "stacked",
      show: ["email", "phoneNumber", "address", "city", "country"],
      require: ["email", "phoneNumber", "address", "city", "country"],
    },
  },
  addons: [
    {
      planId: "personal-travel-plan",
      quantity: 1,
    },
  ],
  bumpOffer: [
    {
      planId: "platinum-monthly",
      quantity: 1,
    },
  ],
};

RebillyInstruments.mount(config);

let button = document.getElementById("switch-period");
let period = "monthly";

button.addEventListener("click", async function () {
  button.innerHTML = `Switch to ${period} plan`;
  period = period === "yearly" ? "monthly" : "yearly";

  try {
    await RebillyInstruments.update({
      items: [
        {
          planId: `premium-${period}`,
        },
      ],
      bumpOffer: [
        {
          planId: `platinum-${period}`,
        },
      ],
    });
  } catch (error) {
    console.log("Error updating instruments: ", error);
  } finally {
    e.target.disabled = false;
  }
});

// Optional
/*RebillyInstruments.on("instrument-ready", (instrument) => {
  console.info("instrument-ready", instrument);
});
RebillyInstruments.on("purchase-completed", (purchase) => {
  console.info("purchase-completed", purchase);
});*/
/*
document
  .getElementById("donate-form")
  .addEventListener("submit", async function () {
    RebillyInstruments.destroy(config);
  });
*/
