<script lang="ts">
  import type { LinkButtonWithIconOptions } from '../types';
  import Fa from 'svelte-fa/src/fa.svelte';
  import { faLinkedin } from '@fortawesome/free-brands-svg-icons/index.es';
  import { faAt } from '@fortawesome/free-solid-svg-icons/index.es';
  import ContactButton from './ui/ContactLinkButton.svelte';
  import { t } from '../i18n';
  import { LINKS } from '../constants';

  const buttons: LinkButtonWithIconOptions[] = [
    { text: t('contact.email'), url: LINKS.email, icon: faAt },
    { text: t('contact.linkedin'), url: LINKS.linkedin, icon: faLinkedin }
  ];
</script>

<div class="contact" id="contact">
  <h1>
    {t('contact.title')}
  </h1>
  <div class="buttons-container">
    {#each buttons as { text, url, icon }}
      <ContactButton text={text} url={url}>
        <Fa icon={icon} size="lg" slot="pre" class="inline-icon" />
      </ContactButton>
    {/each}
  </div>
</div>

<style lang="scss">
  @import '../../lib/styles/variables.scss';

  .contact {
    padding: 2rem;
  }

  h1 {
    color: $accent-color;
    font-size: 2.5em;
    text-align: center;
    margin: 0 0 2rem 0;
  }

  .buttons-container {
    text-align: center;
  }
</style>

