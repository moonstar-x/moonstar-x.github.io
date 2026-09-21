---
name: Discord.js - Extended
description: A framework to facilitate the repetitive tasks when creating Discord bots.
cover: /assets/work/discord-js-extended/cover.jpg
date: 2021-06-15T12:00:00+0000
technologies:
  - nodejs
  - typescript
  - jest
  - githubActions
status: deprecated
type: hobby
links:
  github: https://github.com/greencoast-studios/discord.js-extended
  website: https://docs.greencoaststudios.com/discord.js-extended/master/
  npm: https://www.npmjs.com/package/@greencoast/discord.js-extended
stats:
  github: greencoast-studios/discord.js-extended
  npm: '@greencoast/discord.js-extended'
---

Years 2018 to 2021 were the ones were I focused mostly on making bots for Discord as a hobby. Most of these bots shared
lots of functionality and structure. At the time I wanted to create a scaffold generator `create-discord-bot` similar to
how `create-react-app` worked for React apps at the time. But I never got into the making until late 2021.

This was during the pandemic, and staying at home every day was the norm. This was the perfect time to build something
for myself, and this is when I decided to build a framework for Discord bots.

The framework was fairly simple, it included some of the things I had to re-implement all the time such as:

* Proper logging.
* Command handling.
* Command permissions.
* Data persistence.
* Pretty presence messages.
* Configuration provided by a `.json` file and environment variables.
* And more...

This was the first time I was making an actual framework with unit testing and all. This was my real first exposition
to unit testing as a whole, and it was great. I was so surprised by the fact that I didn't need to manually test my
code as often with an example bot, instead the unit tests did everything for me.

It was great for the most part. After the development I went ahead and updated all my bots to use it, and it was crazy
how much code I was able to reuse, it made matters much easier. But that was it. For some reason I thought people would
adopt this, but it didn't take off, and instead it became a burden.

Every time I had a bug in of my bots I would have to fix two repositories now instead of one, and it wasn't ideal anymore.
So the project got deprecated and is no longer updated.
