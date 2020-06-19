import { AppConfigurationClient } from "@azure/app-configuration";
import dotenv from "dotenv";
import { env } from "process";

dotenv.config();

const connectionString = env["AZ_CONFIG_CONNECTION"]!;

(async () => {
  const client = new AppConfigurationClient(connectionString);
  const settings = client.listConfigurationSettings();

  for await (const setting of settings) {
    console.log(`setting: ${setting.key}`);
  }
})();
