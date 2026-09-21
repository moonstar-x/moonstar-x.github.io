---
name: Free Games Crawler
description: A crawler service that scrapes free game offers from multiple game storefronts like Steam and Epic Games and publishes them on Redis.
cover: /assets/work/free-games-crawler/cover.jpg
date: 2024-07-24T12:00:00+0000
technologies:
  - python
  - redis
  - pytest
  - docker
  - githubActions
status: maintained
type: hobby
links:
  github: https://github.com/moonstar-x/free-games-crawler
  dockerhub: https://hub.docker.com/r/moonstarx/free-games-crawler
stats:
  github: moonstar-x/free-games-crawler
  dockerhub: moonstarx/free-games-crawler
---

As part of the extended development of [discord-free-games-notifier](../discord-free-games-notifier), the development
of this small service served as a way to get into scraping in Python and to have it work as a separate service.

Part of the reason I wanted to have it as a separate reason was to simply separate the concerns of both applications.
You could technically use this with other services yourself, so long as your own application supports Redis PubSub,
but this way I get to make the scraping logic completely independent and instead just integrate it to the Discord bot
who's only responsibility is to notify rather than acquire as well.

This service is very extensible and lays out a good foundation to extend its functionality to other game
storefronts without much tinkering.

This is also the first project I've worked on Python with lots of unit testing. It's not really TDD, but I do try to
achieve as much coverage as possible.

Also, shout-out to DALL-E for the illustration featured in this post.
