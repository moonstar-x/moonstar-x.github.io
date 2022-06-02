<script lang="ts">
  import type { ProjectData } from '../../interfaces';
  import ProjectCard from './ProjectCard.svelte';
  import { t } from '../../i18n';

  let projects: ProjectData[] = [
    {
      title: 'Discord-Text-to-Speech',
      technologies: ['node.js', 'discord.js'],
      description: 'A Text-to-Speech bot for Discord.',
      status: 'maintained',
      links: { 
        github: 'https://github.com/',
        dockerhub: 'https://hub.docker.com/'
      }
    },
    {
      title: 'Discord-Text-to-Speech',
      technologies: ['node.js', 'discord.js'],
      description: 'A Text-to-Speech bot for Discord.',
      status: 'deprecated',
      links: { 
        github: 'https://github.com/',
        dockerhub: 'https://hub.docker.com/'
      }
    },
    {
      title: 'Discord-Text-to-Speech',
      technologies: ['node.js', 'discord.js'],
      description: 'A Text-to-Speech bot for Discord.',
      status: 'greencoast',
      links: { 
        github: 'https://github.com/',
        dockerhub: 'https://hub.docker.com/'
      }
    }
  ];
</script>

<div class="projects">
  <h1>
    {t('projects.title')}
  </h1>
  {#each projects as project }
    <ProjectCard data={project} />
  {/each}
</div>

<style lang="scss">
  .projects {
    margin: 2rem 0;
  }

  h1 {
    font-weight: normal;
  }
</style>
