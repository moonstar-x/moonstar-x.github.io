const NAVBAR: Record<string, string> = {
  'navbar.projects': 'Proyectos',
  'navbar.about': 'Acerca',
  'navbar.contact': 'Contacto'
};

const FEATURE: Record<string, string> = {
  'feature.title': 'Hola, soy Christian, futuro ingeniero en software con una pasión por la programación.',
  'feature.description': 'Utilizo mi tiempo libre para aprender nuevas tecnologías y desarrollar cosas divertidas. Siempre subo mi código a <git>GitHub</git>.'
};

const PROJECTS: Record<string, string> = {
  'projects.title': 'Mis Proyectos',

  'projects.discord-downtime-notifier.title': 'Servicio de Monitoreo para Bots de Discord',
  'projects.discord-downtime-notifier.description': 'Un bot de monitoreo que da retroalimentación en tiempo real sobre el estado de otros bots en el mismo servidor de Discord.',

  'projects.discord-free-games-notifier.title': 'Notificador de Juegos Gratis para Discord',
  'projects.discord-free-games-notifier.description': 'Un bot para Discord que notifica servidores cuando juegos gratis se encuentran ofertados en Epic Games y Steam.',

  'projects.discord-music-24-7.title': 'Bot Reproductor de Música para Discord',
  'projects.discord-music-24-7.description': 'Un bot de reproducción de música con pausa automática para guardar ancho de banda con soporte para YouTube, SoundCloud, archivos locales y streams de Internet.',

  'projects.discord-tts-bot.title': 'Bot de Text-to-Speech para Discord',
  'projects.discord-tts-bot.description': 'Un bot de Text-to-Speech con soporte multi-lenguaje a través de integraciones de Google Translate, Microsoft TTS, Amazon TTS y Moonbase Alpha (DECTalk).',

  'projects.react-twitch-embed.title': 'React Twitch Embeds',
  'projects.react-twitch-embed.description': 'Embeds de Twitch como componentes de React.',

  'projects.react-mixer-embeds.title': 'React Mixer Embeds',
  'projects.react-mixer-embeds.description': 'Embeds de Mixer como componentes de React.',

  'projects.discord.js-extended.title': 'Discord.js-extended',
  'projects.discord.js-extended.description': 'Un framework para facilitar las tareas repetitivas al momento de desarrollar bots para Discord con discord.js.',

  'projects.node-logger.title': 'Logger a Color con Timestamps',
  'projects.node-logger.description': 'Una pequeña librería de logging con timestamps y soporte de color.',

  'projects.discord-support-tickets.title': 'Bot de Discord para Tickets de Soporte',
  'projects.discord-support-tickets.description': 'Un bot de Discord para crear, administrar y registrar canales privados para soporte de tickets.',

  'projects.webframes.title': 'Webframes',
  'projects.webframes.description': 'Una webapp para enmarcar otros sitios. Útil para tener un lugar central para todo tipo de sitios self-hosted.',

  'projects.prophunt.title': "Binding de Mapvote para Garry's Mod' Prop Hunt",
  'projects.prophunt.description': "Un binding de un sistema de mapvote personalizado para el popular modo de juego Prop Hunt de Garry's Mod.",

  'projects.links.npm.text': 'Míralo en NPM',
  'projects.links.steam.text': 'Míralo en Steam',
  'projects.links.dockerhub.text': 'Míralo en Docker Hub',
  'projects.links.website.text': 'Mira su sitio web',
  'projects.links.github.text': 'Míralo en GitHub',
  'projects.links.discord.text': 'Agrégalo a tu servidor de Discord'
};

const ABOUT: Record<string, string> = {
  'about.title': 'Un Poco Sobre Mí',

  'about.description.0': '¡Hola! Me llamo Christian López, pero mi nombre de usuario en línea es moonstar-x.',
  'about.description.1': 'Tengo {age} años y soy un estudiante universitario de ciencias de la computación con un gusto por cualquier cosa relacionada a las computadoras. Soy de Quito, Ecuador y actualmente estudio en la Universidad San Francisco de Quito.',
  'about.description.2': 'Por lo general, uso mi tiempo libre trabajando en pequeños proyectos personales para aprender lo más posible, esto incluye programación y diseño. Trabajo principalmente con JavaScript y TypeScript, sin embargo me defiendo en Python, Java, Lua y C#.',
  'about.description.3': 'Puedo hablar inglés, español, francés, un poco de portugués, y actualmente estoy aprendiendo coreano.'
};

const CONTACT: Record<string, string> = {
  'contact.title': '¿Quieres Contactarme?',
  'contact.email': 'Envíame un Email',
  'contact.linkedin': 'Conéctate Conmigo en LinkedIn'
};

const FOOTER: Record<string, string> = {
  'footer.info': 'Realizado con Svelte. Hosteado en GitHub Pages.',
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
