---
name: Discord.js - Extended := Data Provider (Redis)
description: '[discord.js-extended] - A data provider implemented with Redis.'
cover: /assets/work/discord-js-extended-data-provider-redis/cover.jpg
date: 2023-07-15T12:00:00+0000
technologies:
  - nodejs
  - typescript
  - jest
  - redis
  - githubActions
status: deprecated
type: hobby
links:
  github: https://github.com/greencoast-studios/djs-extended-data-provider-redis
  website: https://docs.greencoaststudios.com/djs-extended-data-provider-redis/master/
  npm: https://www.npmjs.com/package/@greencoast/djs-extended-data-provider-redis
stats:
  github: greencoast-studios/djs-extended-data-provider-redis
  npm: '@greencoast/djs-extended-data-provider-redis'
---

For the implementation of data persistence for [discord.js-extended](.,/discord-js-extended), I created a data provider
built on top of Redis which was an interesting choice since it could work as key-value store but in-memory. Good enough,
Redis actually has some persistence functionality which made it possible to use it as a data provider.

It worked very well, and it fit the interface nicely since the data provider interface I had built was designed as a
key-value adapter for different data persistence services.

Today, the project is deprecated alongside the main framework.
