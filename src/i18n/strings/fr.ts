const NAVBAR: Record<string, string> = {
  'navbar.projects': 'Projects',
  'navbar.about': 'À propos',
  'navbar.contact': 'Contact'
};


const FEATURE: Record<string, string> = {
  'feature.title': 'Bonjour, je suis Christian, futur ingénieur logiciel avec une passion pour la programmation.',
  'feature.description': "J'utilise mon temps libre à apprendre des nouvelles technologies et à développer des trucs sympas. Je commit mon code tout le temps sur <git>GitHub</git>."
};

const ALL: Record<string, string> = {
  ...NAVBAR,
  ...FEATURE
};

export default ALL;
