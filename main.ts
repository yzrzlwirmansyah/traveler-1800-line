import * as fs from "node:fs";

const sentence =
  "A letter that once took weeks by horse now crosses the world in a blink, and any book, song, voice, or market stall may follow it.";

// Design intent: explain the internet to an 1800 traveler using only
// period-correct images (letter, horse, book, song, voice, market stall),
// with the horse-vs-blink speed contrast carrying the wonder.
fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", sentence, "utf8");
