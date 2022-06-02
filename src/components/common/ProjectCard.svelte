<script lang="ts">
  import type { ProjectData, LinkButtonWithIconOptions, LinkType, ProjectStatus } from '../../interfaces';
  import Fa from 'svelte-fa/src/fa.svelte';
  import Card from './ui/Card.svelte';
  import LinkButton from './ui/LinkButton.svelte';
  import { t } from '../../i18n';
  import { getIconForLinkType } from '../../utils/projects';

  export let data: ProjectData;

  const statusColors: Record<ProjectStatus, string> = {
    maintained: '#1982c4',
    deprecated: '#ff595e',
    greencoast: '#8ac926'
  };

  let buttons: LinkButtonWithIconOptions[] = Object.keys(data.links).map((key: LinkType) => {
    return { text: t(`projects.links.${key}.text`), url: data.links[key], icon: getIconForLinkType(key) };
  });

  let stats = 'No stats available.';
</script>

<Card title={data.title} description={data.description} subtitle={data.technologies.join(', ')} footer={stats} color={statusColors[data.status]}>
  {#each buttons as { text, url, icon }}
    <LinkButton text={text} url={url}>
      <Fa icon={icon} slot="pre" />
    </LinkButton>
  {/each}
</Card>
