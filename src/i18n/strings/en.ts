const NAVBAR: Record<string, string> = {
  'navbar.projects': 'Projects',
  'navbar.about': 'About',
  'navbar.contact': 'Contact'
};

const FEATURE: Record<string, string> = {
  'feature.title': "Hi, I'm Christian, a soon-to-be software engineer with a passion for programming."
};

const ALL: Record<string, string> = {
  ...NAVBAR,
  ...FEATURE
};

export default ALL;
