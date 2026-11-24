// Fortune Cookie Wisdom for Developers — make.fun bounty entry.
// Writes one original fortune-cookie line for a software developer
// to /output/entry.txt. No network at runtime; everything it loads is in this repo.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The legacy code you inherit was once somebody's Friday afternoon.";

if (LINE.length < 1 || LINE.length > 120) {
  throw new Error(
    `Fortune line must be 1-120 characters, got ${LINE.length}.`,
  );
}
if (
  LINE.includes("\n") ||
  LINE.includes("\r") ||
  LINE.includes("\t") ||
  LINE.trim() !== LINE
) {
  throw new Error("Fortune line must be a single line with no extra whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
