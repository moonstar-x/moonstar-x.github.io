const NAVBAR: Record<string, string> = {
  'navbar.projects': 'Projects',
  'navbar.about': 'About',
  'navbar.contact': 'Contact'
};

const FEATURE: Record<string, string> = {
  'feature.title': "Hi, I'm Christian, a soon-to-be software engineer with a passion for programming.",
  'feature.description': 'I spend my free time learning new technologies and developing fun stuff. I always commit my code to <git>GitHub</git>.'
};

const ALL: Record<string, string> = {
  ...NAVBAR,
  ...FEATURE
};

export default ALL;
