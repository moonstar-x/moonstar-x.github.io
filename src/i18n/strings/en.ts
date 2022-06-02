const NAVBAR: Record<string, string> = {
  'navbar.projects': 'Projects',
  'navbar.about': 'About',
  'navbar.contact': 'Contact'
};

const FEATURE: Record<string, string> = {
  'feature.title': "Hi, I'm Christian, a soon-to-be software engineer with a passion for programming.",
  'feature.description': 'I spend my free time learning new technologies and developing fun stuff. I always commit my code to <git>GitHub</git>.'
};

const PROJECTS: Record<string, string> = {
  'projects.title': 'My Projects',

  'projects.links.npm.text': 'See it on NPM',
  'projects.links.steam.text': 'See it on Steam',
  'projects.links.dockerhub.text': 'See it on Docker Hub',
  'projects.links.website.text': 'See its website',
  'projects.links.github.text': 'See it on GitHub',
  'projects.links.discord.text': 'Add it to your Discord server'
};

const ALL: Record<string, string> = {
  ...NAVBAR,
  ...FEATURE,
  ...PROJECTS
};

export default ALL;
