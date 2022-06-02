import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface LinkButtonOptions {
  text: string,
  url: string
}

export interface LinkButtonWithIconOptions extends LinkButtonOptions {
  icon: IconDefinition
}

export interface DropdownItem {
  text: string,
  value: string
}

export type LinkType = 'npm' | 'steam' | 'dockerhub' | 'website' | 'github' | 'discord';
export type ProjectLinks = {
  [K in LinkType]?: string
};

export type ProjectStatus = 'maintained' | 'deprecated' | 'greencoast';

export interface ProjectData {
  title: string,
  description: string,
  status: ProjectStatus,
  technologies: string[],
  links: ProjectLinks
}
