<script lang="ts">
  import { t } from '../../i18n';
  import { LINKS } from '../../constants';

  const textInserts = {
    git: (str) => `<a class="link github" href="${LINKS.github}" target="_blank">${str}</a>`
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
  @import './src/styles/variables.scss';

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

  :global(.link) {
    text-decoration: none;
    padding-bottom: 1px;

    &:visited {
      text-decoration: none;
    }
  }
</style>
