export interface OpenGraphData {
  title?: string,
  type?: string,
  url?: string,
  description?: string,
  determiner?: string,
  locale?: string,
  'locale:alternate'?: string,
  site_name?: string
}

export interface OpenGraphImageData {
  url: string,
  type: string,
  width: string,
  height: string,
  alt: string
}

export enum TwitterCard {
  Summary = 'summary',
  SummaryLarge = 'summary_large_image',
  App = 'app',
  Player = 'player'
}

export interface TwitterData {
  card?: TwitterCard,
  site?: string,
  creator?: string,
  title?: string,
  description?: string,
  image?: string,
  'image:alt'?: string
}
