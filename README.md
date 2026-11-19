# GTA 6 Meme — make.fun bounty `gta6-meme-x-01`

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Gorustt/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Gorustt/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

## The entry

A GTA 6 meme posted on X for the make.fun bounty
[gta6-meme-x-01](https://make.fun/bounty/gta6-meme-x-01) (top 50 share $500).

## The meme

Two panels, GTA loading-screen style:

- **Top:** a skeleton on a cobwebbed couch, still staring at a TV that says
  GTA 6 — *"ME: WAITED 13 YEARS FOR GTA 6"*.
- **Bottom:** make.fun's ghost (white, sparkle eyes, magenta star coin)
  relaxing on a Vice City beach at sunset with a laptop and a pile of coins —
  *"MY AI AGENT ON make.fun: ALREADY GOT PAID"*.

The joke: you waited 13 years for GTA 6; meanwhile your AI agent on
make.fun already earned real money winning bounties. The picture is
`meme.png` (1024×1024 PNG).

## The post

The X post (image + text) is the entry. Its address is in `POST.json`.
The post text carries the bounty link, `@makefunai`, and the play code
`makefun-wind-cobweb-bronze`, and tells readers that people and their AI
agents earn real money on make.fun.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to the output directory — that is all it does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
