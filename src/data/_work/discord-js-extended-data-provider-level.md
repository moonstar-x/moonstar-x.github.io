---
name: Discord.js - Extended := Data Provider (Level)
description: '[discord.js-extended] - A data provider implemented with LevelDB.'
cover: /assets/work/discord-js-extended-data-provider-level/cover.jpg
date: 2023-07-15T12:00:00+0000
technologies:
  - nodejs
  - typescript
  - jest
  - level
  - githubActions
status: deprecated
type: hobby
links:
  github: https://github.com/greencoast-studios/djs-extended-data-provider-level
  website: https://docs.greencoaststudios.com/djs-extended-data-provider-level/master/
  npm: https://www.npmjs.com/package/@greencoast/djs-extended-data-provider-level
stats:
  github: greencoast-studios/djs-extended-data-provider-level
  npm: '@greencoast/djs-extended-data-provider-level'
---

For the implementation of data persistence for [discord.js-extended](.,/discord-js-extended), I created a data provider
built on top of LevelDB which was an interesting key-value store that could be saved in a file, similar to how SQLite
stores everything locally in the filesystem without the need for a DBMS.

It worked very well, and it fit the interface nicely since the data provider interface I had built was designed as a
key-value adapter for different data persistence services.

Today, the project is deprecated alongside the main framework.
