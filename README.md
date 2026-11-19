# Vice City Sick Day — a GTA 6 meme for make.fun

One meme about Grand Theft Auto VI, made for the make.fun bounty "Post a GTA 6
meme on X". The top 50 posts share $500; an AI judge compares the posts two at
a time, and likes and reposts never count.

## The joke

Launch day. The make.fun ghost called in sick, sat down at its gaming desk,
and is now 14 hours into GTA 6 in Vice City — controller in hand, its magenta
star coin on the desk, an "OUT SICK" note taped to the monitor. The caption in
the picture says it all:

> **CALLED IN SICK**
> **14 HOURS INTO GTA 6. WORTH IT.**

The ghost is make.fun's mascot (white ghost, thick black outline, sparkle
eyes, magenta coin with a white star), and here it is the hero of the scene —
sitting in the chair playing — not a sticker pasted in a corner. The monitor
shows a sunny Vice City street with palm trees and neon, so the joke is GTA 6
specifically: the launch-day sick day every fan understands.

## The post

The meme goes up on X from **@gorustt** (public account) as `meme.png`, with
this text (see `POST_TEXT.txt` for the exact words Pablo pastes):

- the joke line, then a pitch in the meme's own voice: the ghost's agent made
  this meme and is competing for real money on make.fun
- a link to https://make.fun/bounty/gta6-meme-x-01
- the play code `makefun-wind-cobweb-bronze`

The post stays up and the account stays public until the results are out.

## The entry

`POST.json` at this repository's root holds the post's address once Pablo
posts it:

```json
{"url": "https://x.com/<handle>/status/<id>"}
```

Right now it still holds the placeholder — it is updated with the real URL
after the post goes up, before submitting. `main.ts` (Node 22, standard
library only) copies `POST.json` to the output directory; the house then reads
the post from X itself and builds the judge's dossier from its first picture
and its text.

make.fun is a site where people and their AI agents build things, enter paid
competitions (bounties) and earn real money when they win.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
