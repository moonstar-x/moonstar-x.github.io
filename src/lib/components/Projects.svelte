<script lang="ts">
  import type { ProjectData } from '../types';
  import ProjectCard from './ProjectCard.svelte';
  import { t } from '../i18n';

  const projects: ProjectData[] = [
    {
      title: t('projects.discord-downtime-notifier.title'),
      technologies: ['Node.js', 'Discord.js', 'MongoDB', 'Docker'],
      description: t('projects.discord-downtime-notifier.description'),
      status: 'maintained',
      links: {
        github: 'https://github.com/moonstar-x/discord-downtime-notifier',
        dockerhub: 'https://hub.docker.com/r/moonstarx/discord-downtime-notifier',
        website: 'https://docs.moonstar-x.dev/discord-downtime-notifier/',
        discord: 'https://discordapp.com/oauth2/authorize?client_id=514136165138563073&scope=bot&permissions=2048'
      }
    },
    {
      title: t('projects.discord-free-games-notifier.title'),
      technologies: ['Node.js', 'Discord.js', 'Docker'],
      description: t('projects.discord-free-games-notifier.description'),
      status: 'maintained',
      links: {
        github: 'https://github.com/moonstar-x/discord-free-games-notifier',
        dockerhub: 'https://hub.docker.com/r/moonstarx/discord-free-games-notifier',
        website: 'https://docs.moonstar-x.dev/discord-free-games-notifier/',
        discord: 'https://discord.com/oauth2/authorize?client_id=795561965954269205&scope=bot&permissions=2048'
      }
    },
    {
      title: t('projects.discord-music-24-7.title'),
      technologies: ['Node.js', 'Discord.js', 'Docker'],
      description: t('projects.discord-music-24-7.description'),
      status: 'maintained',
      links: {
        github: 'https://github.com/moonstar-x/discord-music-24-7',
        dockerhub: 'https://hub.docker.com/r/moonstarx/discord-music-24-7',
        website: 'https://docs.moonstar-x.dev/discord-music-24-7/'
      }
    },
    {
      title: t('projects.discord-tts-bot.title'),
      technologies: ['Node.js', 'Discord.js', 'Docker'],
      description: t('projects.discord-tts-bot.description'),
      status: 'maintained',
      links: {
        github: 'https://github.com/moonstar-x/discord-tts-bot',
        dockerhub: 'https://hub.docker.com/r/moonstarx/discord-tts-bot',
        website: 'https://docs.moonstar-x.dev/discord-tts-bot/',
        discord: 'https://discord.com/api/oauth2/authorize?client_id=519207945318170654&permissions=3148800&scope=bot%20applications.commands'
      }
    },
    {
      title: t('projects.react-twitch-embed.title'),
      technologies: ['React', 'Typescript'],
      description: t('projects.react-twitch-embed.description'),
      status: 'maintained',
      links: {
        github: 'https://github.com/moonstar-x/react-twitch-embed',
        npm: 'https://www.npmjs.com/package/react-twitch-embed',
        website: 'https://docs.moonstar-x.dev/react-twitch-embed/'
      }
    },
    {
      title: t('projects.react-mixer-embeds.title'),
      technologies: ['React'],
      description: t('projects.react-mixer-embeds.description'),
      status: 'deprecated',
      links: {
        github: 'https://github.com/moonstar-x/react-mixer-embeds',
        npm: 'https://www.npmjs.com/package/react-mixer-embeds'
      }
    },
    {
      title: t('projects.discord.js-extended.title'),
      technologies: ['Typescript', 'Node.js', 'Discord.js'],
      description: t('projects.discord.js-extended.description'),
      status: 'greencoast',
      links: {
        github: 'https://github.com/greencoast-studios/discord.js-extended',
        npm: 'https://www.npmjs.com/package/@greencoast/discord.js-extended',
        website: 'https://docs.greencoaststudios.com/discord.js-extended/master/'
      }
    },
    {
      title: t('projects.node-logger.title'),
      technologies: ['Node.js'],
      description: t('projects.node-logger.description'),
      status: 'greencoast',
      links: {
        github: 'https://github.com/greencoast-studios/node-logger',
        dockerhub: 'https://www.npmjs.com/package/@greencoast/logger'
      }
    },
    {
      title: t('projects.discord-support-tickets.title'),
      technologies: ['Node.js', 'Discord.js', 'Docker'],
      description: t('projects.discord-support-tickets.description'),
      status: 'greencoast',
      links: {
        github: 'https://github.com/greencoast-studios/discord-support-tickets',
        dockerhub: 'https://hub.docker.com/r/greencoast/discord-support-tickets'
      }
    },
    {
      title: t('projects.webframes.title'),
      technologies: ['Svelte', 'Express', 'LevelDB', 'Docker'],
      description: t('projects.webframes.description'),
      status: 'maintained',
      links: {
        github: 'https://github.com/moonstar-x/webframes',
        dockerhub: 'https://hub.docker.com/r/moonstarx/webframes'
      }
    },
    {
      title: t('projects.prophunt.title'),
      technologies: ['Lua'],
      description: t('projects.prophunt.description'),
      status: 'deprecated',
      links: {
        steam: 'https://steamcommunity.com/sharedfiles/filedetails/?id=207938283'
      }
    }
  ];
</script>

<div class="projects" id="projects">
  <h1>
    {t('projects.title')}
  </h1>
  <div class="projects-container">
    {#each projects as project }
      <ProjectCard data={project} />
    {/each}
  </div>
</div>

<style lang="scss">
  .projects {
    margin: 2rem 0;
  }

  h1 {
    font-weight: normal;
  }

  .projects-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
  }
</style>
