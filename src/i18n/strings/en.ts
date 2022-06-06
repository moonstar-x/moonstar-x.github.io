const NAVBAR: Record<string, string> = {
  'navbar.projects': 'Projects',
  'navbar.about': 'About',
  'navbar.contact': 'Contact'
};

const FEATURE: Record<string, string> = {
  'feature.title': "Hi, I'm Christian, a soon-to-be software engineer with a passion for programming.",
  'feature.description': 'I spend my free time learning new technologies and developing fun stuff. I always commit my code to <git>GitHub</git>.'
};

const PROJECTS: Record<string, string> = {
  'projects.title': 'My Projects',

  'projects.discord-downtime-notifier.title': 'Discord Bot Monitoring Service',
  'projects.discord-downtime-notifier.description': 'A monitoring bot that gives real-time feedback on the status of other bots on the same Discord server.',

  'projects.discord-free-games-notifier.title': 'Discord Free Games Notifier',
  'projects.discord-free-games-notifier.description': 'A Discord bot that notifies servers when free games are offered on Epic Games and Steam.',

  'projects.discord-music-24-7.title': 'Discord Music Player Bot',
  'projects.discord-music-24-7.description': 'A music playing bot with bandwidth-saving auto pausing with support for YouTube, SoundCloud, local files and Internet streams.',

  'projects.discord-tts-bot.title': 'Discord Text-to-Speech Bot',
  'projects.discord-tts-bot.description': 'A Text-to-Speech bot with multi-language support through Google Translate, Microsoft TTS, Amazon TTS and Moonbase Alpha (DECTalk) integrations.',

  'projects.react-twitch-embed.title': 'React Twitch Embeds',
  'projects.react-twitch-embed.description': 'Twitch embeds as React components.',

  'projects.react-mixer-embeds.title': 'React Mixer Embeds',
  'projects.react-mixer-embeds.description': 'Mixer embeds as React components.',

  'projects.discord.js-extended.title': 'Discord.js-extended',
  'projects.discord.js-extended.description': 'A framework to facilitate the repetitive tasks when developing Discord bots with discord.js.',

  'projects.node-logger.title': 'Timestamped Color Logger',
  'projects.node-logger.description': 'Small logging library with timestamps and color support.',

  'projects.discord-support-tickets.title': 'Discord Support Ticketing Bot',
  'projects.discord-support-tickets.description': 'A Discord bot for creating, managing and logging private ticketing support channels.',

  'projects.webframes.title': 'Webframes',
  'projects.webframes.description': 'A webapp to frame other sites. Useful for having a central place for all self-hosted sites.',

  'projects.prophunt.title': "Garry's Mod' Prop Hunt Mapvote Binding",
  'projects.prophunt.description': "A binding of a custom mapvote system for the popular game mode Prop Hunt of Garry's Mod.",

  'projects.links.npm.text': 'See it on NPM',
  'projects.links.steam.text': 'See it on Steam',
  'projects.links.dockerhub.text': 'See it on Docker Hub',
  'projects.links.website.text': 'See its website',
  'projects.links.github.text': 'See it on GitHub',
  'projects.links.discord.text': 'Add it to your Discord server'
};

const ABOUT: Record<string, string> = {
  'about.title': 'A Little Bit About Myself',

  'about.description.0': 'Hello! My name is Christian López, but my online nickname is moonstar-x.',
  'about.description.1': "I'm a {age} year old computer science college student who loves anything related to computers. I'm from Quito, Ecuador and currently studying in the Universidad San Francisco de Quito.",
  'about.description.2': 'Generally, I spend my free time working on small personal projects to learn as much as possible, this includes programming and designing. I work mostly with JavaScript and TypeScript, but I can make my way around Python, Java, Lua and C#.',
  'about.description.3': "I can speak English, Spanish, French, a little Portuguese, and I'm now learning Korean."
};

const ALL: Record<string, string> = {
  ...NAVBAR,
  ...FEATURE,
  ...PROJECTS,
  ...ABOUT
};

export default ALL;
