import { mkdirSync, writeFileSync } from "node:fs";

// The emoji below must stay byte-for-byte: a single emoji, no newline, no extra text.
const EMOJI = "😊";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", EMOJI, { encoding: "utf8" });
}

writeEntry();
