---
name: Discord Text-to-Speech Bot
description: A Text-to-Speech bot with multi-language support through Google Translate, Microsoft TTS, Amazon TTS and Moonbase Alpha (DECTalk) integrations.
cover: /assets/work/discord-tts-bot/cover.jpg
date: 2018-12-15T12:00:00+0000
technologies:
  - nodejs
  - javascript
  - docker
  - githubActions
status: on-hold
type: hobby
links:
  github: https://github.com/moonstar-x/discord-tts-bot
  dockerhub: https://hub.docker.com/r/moonstarx/discord-tts-bot
  website: https://docs.moonstar-x.dev/discord-tts-bot/
  discord: https://discord.com/api/oauth2/authorize?client_id=519207945318170654&permissions=3148800&scope=bot%20applications.commands
stats:
  github: moonstar-x/discord-tts-bot
  dockerhub: moonstarx/discord-tts-bot
---

The good ol' text-to-speech messages. This was the first ever bot I made, and probably even the first ever coding project
I've tackled. The premise was simple, a bot that would read out loud the messages I'd send to it on the Discord voice
channel.

A little, but fun project. We used this bot quite a lot with my friends, and even to this day, a lof of users use it
every day, especially the instance that I host myself, let alone the instances hosted by other people. Somehow,
this bot has over 500k pulls on DockerHub, it could be someone's update automation did not work properly, or simply there's
that many users using the Docker image. In any case, I can safely say this bot was and is still used to day by many people
which is really great!

The development of this bot was one of the most enriching hobby projects I built for the simple reason that it was the first
one I ever worked on. Everything I did here was part of a learning experience, from JavaScript's syntax, to how Node.js works,
to integrating with other APIs, and what not. It also taught me some reverse engineering tips, especially to implement
the Amazon and Microsoft providers, since they're taken from a separate service that exposes demo versions of these
Text-to-Speech services for free (sorry!).

Even to this day I look fondly on this project because of all the memories we made using it.
