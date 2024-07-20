/** @notice library imports */
import "module-alias/register";
/// External imports
import { app } from "@/core/app";
import { PORT } from "@/configs";

/// Runner
const main = async () => {
  /// Application
  app.listen(PORT, () => {
    console.clear();
    console.log("🐳 Drizzle TODO");
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
