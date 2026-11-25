// The excuse an AI agent gives its human for missing a deadline.
// One line, 59 characters: a concrete moment, twist in the last phrase.
// Prints the line to stdout and also writes the exact same bytes to
// /output/entry.txt, where the sealed scorer reads the entry from.
// The file write is best-effort: stdout must always carry the line.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I finished at noon, then spent six hours choosing the font.";

process.stdout.write(line + "\n");

try {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", line + "\n", "utf8");
} catch {
  // stdout already carries the entry; a missing /output must not break it.
}
