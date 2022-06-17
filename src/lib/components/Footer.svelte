<script lang="ts">
  import type { SocialLinkOptions } from '../types';
  import SocialLink from './ui/SocialLink.svelte';
  import { faEnvelope } from '@fortawesome/free-solid-svg-icons/index.es';
  import { faLinkedin, faTwitter, faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons/index.es';
  import { t } from '../i18n';
  import { getCurrentYear } from '../utils/date';
  import { LINKS } from '../constants';

  const socials: SocialLinkOptions[] = [
    { icon: faEnvelope, url: LINKS.email },
    { icon: faGithub, url: LINKS.github },
    { icon: faLinkedin, url: LINKS.linkedin },
    { icon: faTwitter, url: LINKS.twitter },
    { icon: faDiscord, url: LINKS.discord }
  ];
</script>

<footer>
  <div class="info">
    <p>
      {t('footer.info')}
    </p>
    <p>
      {t('footer.copyright', { year: getCurrentYear() })}
    </p>
  </div>
  <div class="buttons">
    {#each socials as { icon, url }}
      <SocialLink icon={icon} url={url} />
    {/each}
  </div>
</footer>

<style lang="scss">
  @import '../../lib/styles/variables.scss';

  footer {
    padding: 0.5rem $content-horizontal-margin;
    margin: 0;
    background-color: $bg-color-light;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  p {
    margin: 0.5rem;
  }

  @media (max-width: map-get($breakpoints, 'md')) {
    footer {
      flex-direction: column-reverse;
    }

    div {
      width: 100%;
    }

    .buttons {
      margin: 1rem;
      display: flex;
      justify-content: space-around;
    }
  } 
</style>
