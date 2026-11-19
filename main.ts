// gta6-meme-x-01 — entrypoint for the make.fun GTA 6 meme bounty.
// Copies POST.json (the X post's address) from the repository root to
// the output directory, exactly as the grader expects. Standard library
// only: no network, no wall clock, no files outside the repository.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(botDir, "POST.json");
const parsed = JSON.parse(readFileSync(sourcePath, "utf8")) as unknown;
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string"
) {
  throw new Error("POST.json must be a JSON object with a string url");
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, join(outputDir, "POST.json"));
