export const TECH_TYPES = [
  'nodejs', 'mongo', 'docker', 'javascript', 'react',
  'typescript', 'svelte', 'lua', 'python', 'markdown',
  'nextjs', 'redis', 'neo4j', 'flask', 'nginx',
  'githubActions', 'jenkins', 'tailwind', 'sass', 'opencv',
  'flutter', 'dart', 'vite', 'postgres', 'express',
  'sqlite', 'jest', 'html', 'css', 'level',
  'selenium', 'puppeteer', 'mariadb', 'pytest', 'strapi',
  'fastapi', 'ruby'
] as const;
export type TechType = typeof TECH_TYPES[number];

const TECH_LABELS: Record<TechType, string> = {
  nodejs: 'Node.js',
  mongo: 'MongoDB',
  docker: 'Docker',
  javascript: 'JavaScript',
  react: 'React',
  typescript: 'TypeScript',
  svelte: 'Svelte',
  lua: 'Lua',
  python: 'Python',
  markdown: 'Markdown',
  nextjs: 'Next.js',
  redis: 'Redis',
  neo4j: 'Neo4j',
  flask: 'Flask',
  nginx: 'NGINX',
  githubActions: 'GitHub Actions',
  jenkins: 'Jenkins',
  tailwind: 'Tailwind CSS',
  sass: 'Sass',
  opencv: 'OpenCV',
  flutter: 'Flutter',
  dart: 'Dart',
  vite: 'Vite',
  postgres: 'PostgreSQL',
  express: 'Express',
  sqlite: 'SQLite',
  jest: 'Jest',
  html: 'HTML',
  css: 'CSS',
  level: 'LevelDB',
  selenium: 'Selenium',
  puppeteer: 'Puppeteer',
  mariadb: 'MariaDB',
  pytest: 'pytest',
  strapi: 'Strapi',
  fastapi: 'FastAPI',
  ruby: 'Ruby'
};

export const getTechLabel = (technology: TechType): string => TECH_LABELS[technology];
