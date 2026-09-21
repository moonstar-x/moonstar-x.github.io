---
name: Discord Bot Monitoring Service
description: A monitoring bot that gives real-time feedback on the status of other bots on the same Discord server.
cover: /assets/work/discord-downtime-notifier/cover.jpg
date: 2018-11-15T12:00:00+0000
technologies:
  - nodejs
  - javascript
  - mongo
  - docker
  - githubActions
status: deprecated
type: hobby
links:
  github: https://github.com/moonstar-x/discord-downtime-notifier
  dockerhub: https://hub.docker.com/r/moonstarx/discord-downtime-notifier
stats:
  github: moonstar-x/discord-downtime-notifier
  dockerhub: moonstarx/discord-downtime-notifier
---

Back in 2018 when I was getting my feet wet in software development in general, one of my projects was managing my
Discord server that I shared with some friends. I enjoyed adding bots and integrations to the server that I even
went ahead and made my own bots.

At the time I was hosting my Discord bots on my own home server, but it wasn't too reliable. Sometimes they would go
down for no reason, and I wouldn't know when and why it happened.

This is why I wanted to make a Discord bot that would observe other Discord bots' online status and notify me whenever
they went down.

It was fairly simple, although not too accurate. It used the observed bot's presence (or online status) which was freely
accessible back in the day (nowadays if your bot is in more than 100 servers you need to request
access to this protected feature) to determine whether a bot was online or not. The problem was that the presence wouldn't
get updated immediately after a bot went down, it would take some time to register the offline state. Sometimes
the bots would go down for a minute and the downtime service wouldn't detect it since their presence never changed.

But it worked, at least at the beginning.

Initially I had hosted this on Heroku which was a really popular service to host Discord bots in general because of its
free tier. You could host one container for free indefinitely because Heroku offered something around 750 hours per month
which was awesome for something simple like this.

Then they changed their policy, and it was no longer free to host anything in Heroku anymore, so naturally, I abandoned
the development of this project.
