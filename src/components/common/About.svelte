<script lang="ts">
  import Image from './ui/Image.svelte';
  import { t } from '../../i18n';
  import { getAge } from '../../utils/date';
  import { BIRTHDAY } from '../../constants';

  const paragraphs = Array.from(Array(4)).map((_, i) => t(`about.description.${i}`, { age: getAge(BIRTHDAY) }));
</script>

<div class="about" id="about">
  <h1>
    {t('about.title')}
  </h1>
  <div class="about-inner">
    <Image src="/img/me.jpg" rounded width={"25%"} />
    <div class="text">
      {#each paragraphs as paragraph}
      <p>
        {paragraph}
      </p>
    {/each}
    </div>
  </div>
</div>

<style lang="scss">
  .about {
    padding: 2rem 0;
  }

  .about-inner {
    display: flex;
    gap: 3rem;
    align-items: center;
  }

  .text {
    flex: 1 75%;
    text-align: justify;
  }

  h1 {
    font-weight: normal;
    margin: 0 0 1rem 0;
  }
</style>
