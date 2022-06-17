<script lang="ts">
  import type { ProjectData, LinkButtonWithIconOptions, LinkType, ProjectStatus } from '../types';
  import Fa from 'svelte-fa/src/fa.svelte';
  import Card from './ui/Card.svelte';
  import LinkButton from './ui/LinkButton.svelte';
  import { t } from '../i18n';
  import { getIconForLinkType } from '../utils/projects';

  export let data: ProjectData;

  const statusColors: Record<ProjectStatus, string> = {
    maintained: '#1982c4',
    deprecated: '#ff595e',
    greencoast: '#8ac926'
  };

  let buttons: LinkButtonWithIconOptions[] = (Object.keys(data.links) as LinkType[]).map((key: LinkType) => {
    return { text: t(`projects.links.${key}.text`), url: data.links[key]!, icon: getIconForLinkType(key) };
  });
</script>

<Card title={data.title} description={data.description} subtitle={data.technologies.join(', ')} color={statusColors[data.status]}>
  <div class="buttons-container">
    {#each buttons as { text, url, icon }}
      <LinkButton text={text} url={url}>
        <Fa class="inline-icon" icon={icon} slot="pre" />
      </LinkButton>
    {/each}
  </div>
</Card>

<style lang="scss">
  @import '../../lib/styles/variables.scss';

  .buttons-container {
    margin: 0.5rem 0;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  @media (max-width: map-get($breakpoints, 'md')) {
    .buttons-container {
      flex-direction: column;
      flex-grow: 1;
      text-align: center;
    }
  }
</style>
