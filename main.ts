// make.fun — "One Line, One Laugh"
// Writes one funny line to /output/entry.txt.
// Deterministic: the text is a constant. No randomness, no clock, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "I asked my smart speaker for a joke. It said, 'Have you seen your screen time this week?'";
// Setup asks for a joke, the punchline is the speaker roasting you instead.

// The gate allows 1–140 characters: fail loudly rather than submit an invalid line.
if (TEXT.length < 1 || TEXT.length > 140) {
  throw new Error(`TEXT must be 1-140 characters, got ${TEXT.length}`);
}

const out = process.argv[2] ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, TEXT, "utf8");
