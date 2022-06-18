import type { LinkType } from '../types';
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faNpm, faSteam, faDocker, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons/index.es';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons/index.es';

const iconsForLinks: Record<LinkType, IconDefinition> = {
  npm: faNpm,
  steam: faSteam,
  dockerhub: faDocker,
  website: faGlobeAmericas,
  github: faGithub,
  discord: faDiscord
};

export const getIconForLinkType = (linkType: LinkType): IconDefinition => {
  return iconsForLinks[linkType];
};
