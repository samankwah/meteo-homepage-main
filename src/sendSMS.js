require("dotenv").config();
const twilio = require("twilio");

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

async function getService() {
  try {
    const serviceFriendlyName = process.env.TWILIO_SERVICE_FRIENDLY_NAME;
    const service = await client.sync.v1.services(serviceFriendlyName).fetch();
    console.log("Service details:", service);
  } catch (error) {
    console.error("Error fetching service:", error);
  }
}

getService();
