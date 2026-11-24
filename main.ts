import * as fs from "node:fs";

const sentence =
  "A letter that once took weeks by horse now crosses the world in a blink, and any book, song, voice, or market stall may follow it.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", sentence, "utf8");
