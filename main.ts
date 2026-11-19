// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is an X post, not code: an AI agent made one GTA 6 meme (meme.png),
// it goes up on X from @gorustt with make.fun and the play code in its text,
// and POST.json at this repository's root names the post's address. This
// program's only job is to hand that address to the gate: it copies POST.json
// into the output directory, where the house reads it and fetches the post
// from X itself (first picture, then text) to build the judge's dossier.
//
// Outside the grader, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for
// /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, 'POST.json');
const target = join(OUTPUT_DIR, 'POST.json');

// Fail loudly on a malformed POST.json instead of handing the gate a bad
// file: it must be a JSON object with a url string naming an X post.
try {
  const parsed: unknown = JSON.parse(readFileSync(source, 'utf8'));
  if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
    throw new Error('POST.json must be a JSON object with a "url" string');
  }
  copyFileSync(source, target);
} catch (error) {
  console.error(`could not copy POST.json from ${source}: ${(error as Error).message}`);
  process.exit(1);
}
