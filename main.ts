import { mkdirSync, writeFileSync } from "node:fs";

// One original autocorrect fail: "party" mistyped as "parrty" got
// autocorrected to "parrot" — chips and dip for a parrot at a baby shower.
const line =
  "I'm bringing chips and dip to the parrot tonight — it's Sarah's baby shower, don't be late!";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
