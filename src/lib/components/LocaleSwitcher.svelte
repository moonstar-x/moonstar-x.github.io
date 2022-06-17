<script lang="ts">
  import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons/index.es';
  import Dropdown from './ui/Dropdown.svelte';
  import { locale } from '../stores/app';
  import { supportedLocales } from '../i18n';

  const dropdownItems = Object.keys(supportedLocales).map((key) => {
    return { value: key, text: supportedLocales[key] };
  });

  const handleLocaleSelect = ({ detail: newLocale }: { detail: string }) => {
    locale.update(newLocale);
  };
</script>

<Dropdown icon={faGlobeAmericas} items={dropdownItems} on:select={handleLocaleSelect} />
