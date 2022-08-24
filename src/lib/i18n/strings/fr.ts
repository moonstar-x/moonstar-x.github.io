const NAVBAR: Record<string, string> = {
  'navbar.projects': 'Projets',
  'navbar.about': 'À propos',
  'navbar.contact': 'Contact'
};

const FEATURE: Record<string, string> = {
  'feature.title': 'Bonjour, je suis Christian, futur ingénieur logiciel avec une passion pour la programmation.',
  'feature.description': "J'utilise mon temps libre à apprendre des nouvelles technologies et à développer des trucs sympas. Je commit mon code tout le temps sur <git>GitHub</git>."
};

const PROJECTS: Record<string, string> = {
  'projects.title': 'Mes Projets',

  'projects.discord-downtime-notifier.title': 'Service Moniteur pour Bots de Discord',
  'projects.discord-downtime-notifier.description': "Un bot moniteur qui fournit des messages en temps réel sur l'état d'autres bots sur le même serveur Discord.",

  'projects.discord-free-games-notifier.title': 'Notificateur de Jeux Gratuits pour Discord',
  'projects.discord-free-games-notifier.description': "Un bot pour Discord qui notifie des serveurs lorsqu'il y-a des jeux gratuits offerts sur Epic Games et Steam.",

  'projects.discord-music-24-7.title': 'Bot Lecteur de Musique pour Discord',
  'projects.discord-music-24-7.description': "Un bot lecteur de musique avec fonctionnalité d'économie de bande avec pause automatique et support pour YouTube, SoundCloud, fichiers locaux et streams d'Internet.",

  'projects.discord-tts-bot.title': 'Bot de Text-to-Speech pour Discord',
  'projects.discord-tts-bot.description': "Un bot de Text-to-Speech avec support multi-language à travers d'intégrations de Google Translate, Microsoft TTS, Amazon TTS et Moonbase Alpha (DECTalk).",

  'projects.react-twitch-embed.title': 'React Twitch Embeds',
  'projects.react-twitch-embed.description': 'Une collection de composants pour intégrer Twitch.',

  'projects.react-mixer-embeds.title': 'React Mixer Embeds',
  'projects.react-mixer-embeds.description': 'Mixer embeds comme composants React.',

  'projects.discord.js-extended.title': 'Discord.js-extended',
  'projects.discord.js-extended.description': 'Un framework pour faciliter les tâches répétitives lors du développement de bots de Discord avec discord.js.',

  'projects.node-logger.title': 'Logger à Couleur avec Timestamps',
  'projects.node-logger.description': 'Petite bibliothèque pour logger avec horodatage et couleurs.',

  'projects.discord-support-tickets.title': "Bot de Discord pour Tickets d'Assistance",
  'projects.discord-support-tickets.description': 'Un bot de Discord pour créer, administrer et registrer des canaux privés pour assistance de tickets.',

  'projects.webframes.title': 'Webframes',
  'projects.webframes.description': 'Un webapp pour encadrer autres sites. Utile pour avoir un lieu central pour tous les sites self-hosted.',

  'projects.prophunt.title': "Binding de Mapvote pour Garry's Mod' Prop Hunt",
  'projects.prophunt.description': "Un binding d'un système de mapvote personnalisé pour le mode de jeu populaire Prop Hunt de Garry's Mod.",

  'projects.links.npm.text': 'Regardez-le sur NPM',
  'projects.links.steam.text': 'Regardez-le sur Steam',
  'projects.links.dockerhub.text': 'Regardez-le sur Docker Hub',
  'projects.links.website.text': 'Regardez le site web',
  'projects.links.github.text': 'Regardez-le sur GitHub',
  'projects.links.discord.text': 'Ajoutez-le sur votre serveur Discord'
};

const ABOUT: Record<string, string> = {
  'about.title': 'Un Peu à Propos de Moi',

  'about.description.0': "Bonjour! Je m'appelle Christian López mais mon surnom sur Internet est moonstar-x.",
  'about.description.1': "Je suis un étudiant universitaire d'ingénierie logicielle de {age} ans avec une passion pour n'importe quelle chose relationnée avec les ordinateurs. Je suis de Quito, Équateur et dans ce moment j'étudie à l'Universidad San Francisco de Quito.",
  'about.description.2': 'Généralement, je passe mon temps à travailler sur des petits projets personnels pour apprendre le plus que possible, cela comprend la programmation et le design. Je travaille principalement avec JavaScript et TypeScript, mais je me défends avec Python, Java, Lua and C#.',
  'about.description.3': "Je parle anglais, espagnol, français, un peu de portugais, et j'apprends le coréen."
};

const CONTACT: Record<string, string> = {
  'contact.title': 'Voulez-vous me contacter?',
  'contact.email': 'Envoyez-moi un mél',
  'contact.linkedin': 'Connectez-vous avec moi sur LinkedIn'
};

const FOOTER: Record<string, string> = {
  'footer.info': 'Réalisé avec Svelte. Hébergé sur GitHub Pages.',
  'footer.copyright': '© {year} - moonstar-x'
};

const ALL: Record<string, string> = {
  ...NAVBAR,
  ...FEATURE,
  ...PROJECTS,
  ...ABOUT,
  ...CONTACT,
  ...FOOTER
};

export default ALL;
