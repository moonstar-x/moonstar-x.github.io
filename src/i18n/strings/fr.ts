const NAVBAR: Record<string, string> = {
  'navbar.projects': 'Projects',
  'navbar.about': 'À propos',
  'navbar.contact': 'Contact'
};


const FEATURE: Record<string, string> = {
  'feature.title': 'Bonjour, je suis Christian, futur ingénieur logiciel avec une passion pour la programmation.'
};

const ALL: Record<string, string> = {
  ...NAVBAR,
  ...FEATURE
};

export default ALL;
