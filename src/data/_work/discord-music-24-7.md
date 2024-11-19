---
name: Discord Music Player Bot
description: A music playing bot with bandwidth-saving auto pausing with support for YouTube, SoundCloud, local files and Internet streams.
cover: /assets/work/discord-music-24-7/cover.jpg
date: 2019-04-15T12:00:00+0000
technologies:
  - nodejs
  - javascript
  - jest
  - docker
  - githubActions
status: deprecated
type: hobby
links:
  github: https://github.com/moonstar-x/discord-music-24-7
  dockerhub: https://hub.docker.com/r/moonstarx/discord-music-24-7
stats:
  github: moonstar-x/discord-music-24-7
  dockerhub: moonstarx/discord-music-24-7
---

Back in 2019, music bots for Discord were a big thing. I used one myself to get some YouTube music going on the voice
channel with my friends. It was great, but I wanted something more.

This was the second bot I ever built for Discord, it was a music bot that would play music forever, like a radio.
But I wanted it to pause whenever the voice channel was empty, and for some reason this didn't seem to exist anywhere.

So I got to work, nothing too fancy, it was mostly a simple bot that would pipe a YouTube stream to the voice channel
stream and that was it.

Curiously this was the bot I made with the most users, every single time I received messages asking for support it was
for this bot in particular. And ironically, it was the bot I hated to work on the most. We never got to use the bot with
my friends as I had initially hoped for, and working on a bot that I wasn't even using myself was not fun at all.

Ultimately I ended up deprecating it, not only because it wasn't entertaining to work on it anymore, but because it was
technically against Discord's ToS anyway, so it was only a matter of time until I had to sunset that project.
