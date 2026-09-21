---
name: Discord Free Games Notifier
description: A Discord bot that notifies servers when free games are offered on Epic Games and Steam.
cover: /assets/work/discord-free-games-notifier/cover.jpg
date: 2021-01-15T12:00:00+0000
technologies:
  - nodejs
  - typescript
  - postgres
  - redis
  - jest
  - docker
  - githubActions
status: maintained
type: hobby
links:
  github: https://github.com/moonstar-x/discord-free-games-notifier
  dockerhub: https://hub.docker.com/r/moonstarx/discord-free-games-notifier
  website: https://docs.moonstar-x.dev/discord-free-games-notifier/
  discord: https://discord.com/oauth2/authorize?client_id=795561965954269205&scope=bot&permissions=2048
stats:
  github: moonstar-x/discord-free-games-notifier
  dockerhub: moonstarx/discord-free-games-notifier
---

Around 2021, HumbleBundle was giving out free games once in a while to redeem them on Steam. I redeemed some of them
but missed most of them too. At that time, every day I found a free game on the HumbleBundle I would
manually send a message to my friends on Discord about it so we could all get it. But it quickly became a pain to do so.

So what better project than to make my own bot for notifying about free games? It even fits the topic of Discord which
is primarily targeted to gamers. So I did.

Only problem, HumbleBundle had stopped offering free games, bummer...

Luckily, Epic Games entered the field with their generous free game offers, and Steam which sometimes has some of these
offers too.

This was the first time I ever got into scraping. At first, I used [puppeteer](https://www.npmjs.com/package/puppeteer)
which seems to be the classic mistake of every scraping noob out there. There's nothing inherently wrong with this tool,
it's mostly related to the fact that it runs a headless version of Chrome, which means _RIP memory_.

I later learned that you could scrape sites just as easily but more efficiently by requesting the HTML document
directly with an HTTP client, parse it, and consume it as normal, all without a headless browser process.

For the latest update to this bot, I actually decided to separate the logic of scraping to another
[service](../free-games-crawler) which would do all the scraping and publish it to a Redis PubSub topic.

It works very well now, and I'm able to offload the scraping logic to another server if ever necessary.
