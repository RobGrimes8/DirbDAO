import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x17bb4e2854aa9aC1fAb06Ca9A7482Ea6BFE6ffAB",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Dirb Level 1",
        description: "This NFT will give you early access to DirbDAO!",
        image: readFileSync("scripts/assets/level_1.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()