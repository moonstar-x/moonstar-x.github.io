<script lang="ts">
  import { t } from '../i18n';
  import { LINKS } from '../constants';

  const textInserts = {
    git: (str: string) => `<a class="link-in-text github" href="${LINKS.github}" target="_blank">${str}</a>`
  };
</script>

<div>
  <h1>
    {t('feature.title')}
  </h1>
  <h2>
    {@html t('feature.description', textInserts)}
  </h2>
</div>

<style lang="scss">
  @import '../../lib/styles/variables.scss';

  div {
    padding: 2rem 0;
  }

  h1 {
    color: $accent-color;
    max-width: 75%;
  }

  h2 {
    color: $text-color;
    font-weight: normal;
    max-width: 70%;
  }

  @media (max-width: map-get($breakpoints, 'md')) {
    h1, h2 {
      max-width: 100%;
    }
  }
</style>
