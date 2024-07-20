/** @notice library imports */
import "module-alias/register";
/// External imports
import { app } from "@/core/app";
import { PORT } from "@/configs";

/// Runner
/// Application
app.listen(PORT, () => {
  console.clear();
  console.log("🐳 Drizzle TODO");
});
