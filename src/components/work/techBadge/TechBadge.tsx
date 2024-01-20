import React from 'react';
import clsx from 'clsx';
import { Badge, BadgeProps } from '@components/ui/badge';
import { Icon, IconComponent } from '@components/ui/icon';
import { TechType } from '@lib/services/work';
import { NodeJsIcon } from '@components/ui/icon/library/tech/NodeJsIcon';
import { MongoIcon } from '@components/ui/icon/library/tech/MongoIcon';
import { DockerIcon } from '@components/ui/icon/library/tech/DockerIcon';
import { JavaScriptIcon } from '@components/ui/icon/library/tech/JavaScriptIcon';
import { ReactIcon } from '@components/ui/icon/library/tech/ReactIcon';
import { TypeScriptIcon } from '@components/ui/icon/library/tech/TypeScriptIcon';
import { SvelteIcon } from '@components/ui/icon/library/tech/SvelteIcon';
import { LuaIcon } from '@components/ui/icon/library/tech/LuaIcon';
import { PythonIcon } from '@components/ui/icon/library/tech/PythonIcon';
import { MarkdownIcon } from '@components/ui/icon/library/tech/MarkdownIcon';
import { NextJsIcon } from '@components/ui/icon/library/tech/NextJsIcon';
import { RedisIcon } from '@components/ui/icon/library/tech/RedisIcon';
import { Neo4jIcon } from '@components/ui/icon/library/tech/Neo4jIcon';
import { FlaskIcon } from '@components/ui/icon/library/tech/FlaskIcon';
import { NginxIcon } from '@components/ui/icon/library/tech/NginxIcon';
import { GitHubActionsIcon } from '@components/ui/icon/library/tech/GitHubActionsIcon';
import { JenkinsIcon } from '@components/ui/icon/library/tech/JenkinsIcon';
import { TailwindIcon } from '@components/ui/icon/library/tech/TailwindIcon';
import { SassIcon } from '@components/ui/icon/library/tech/SassIcon';
import { OpenCvIcon } from '@components/ui/icon/library/tech/OpenCvIcon';
import { FlutterIcon } from '@components/ui/icon/library/tech/FlutterIcon';
import { DartIcon } from '@components/ui/icon/library/tech/DartIcon';
import { ViteIcon } from '@components/ui/icon/library/tech/ViteIcon';
import { PostgresIcon } from '@components/ui/icon/library/tech/PostgresIcon';
import { ExpressIcon } from '@components/ui/icon/library/tech/ExpressIcon';
import { SqliteIcon } from '@components/ui/icon/library/tech/SqliteIcon';
import { JestIcon } from '@components/ui/icon/library/tech/JestIcon';
import { HtmlIcon } from '@components/ui/icon/library/tech/HtmlIcon';
import { CssIcon } from '@components/ui/icon/library/tech/CssIcon';
import { LevelIcon } from '@components/ui/icon/library/tech/LevelIcon';
import { SeleniumIcon } from '@components/ui/icon/library/tech/SeleniumIcon';
import { PuppeteerIcon } from '@components/ui/icon/library/tech/PuppeteerIcon';
import { MariaDbIcon } from '@components/ui/icon/library/tech/MariaDbIcon';

export type IconObject = {
  icon: IconComponent
  text: string
  badgeStyle: string
  iconStyle: string
}
const typeMap: Record<TechType, IconObject> = {
  nodejs: {
    icon: NodeJsIcon,
    text: 'Node.js',
    badgeStyle: 'text-white bg-tech-nodejs',
    iconStyle: 'fill-white'
  },
  mongo: {
    icon: MongoIcon,
    text: 'MongoDB',
    badgeStyle: 'text-white bg-tech-mongo',
    iconStyle: 'fill-white'
  },
  docker: {
    icon: DockerIcon,
    text: 'Docker',
    badgeStyle: 'text-white bg-tech-docker',
    iconStyle: 'fill-white'
  },
  javascript: {
    icon: JavaScriptIcon,
    text: 'JavaScript',
    badgeStyle: 'text-white bg-tech-javascript',
    iconStyle: 'fill-white'
  },
  react: {
    icon: ReactIcon,
    text: 'React',
    badgeStyle: 'text-white bg-tech-react',
    iconStyle: 'fill-white'
  },
  typescript: {
    icon: TypeScriptIcon,
    text: 'TypeScript',
    badgeStyle: 'text-white bg-tech-typescript',
    iconStyle: 'fill-white'
  },
  svelte: {
    icon: SvelteIcon,
    text: 'Svelte',
    badgeStyle: 'text-white bg-tech-svelte',
    iconStyle: 'fill-white'
  },
  lua: {
    icon: LuaIcon,
    text: 'Lua',
    badgeStyle: 'text-white bg-tech-lua',
    iconStyle: 'fill-white'
  },
  python: {
    icon: PythonIcon,
    text: 'Python',
    badgeStyle: 'text-white bg-tech-python',
    iconStyle: 'fill-white'
  },
  markdown: {
    icon: MarkdownIcon,
    text: 'Markdown',
    badgeStyle: 'text-white bg-tech-markdown',
    iconStyle: 'fill-white'
  },
  nextjs: {
    icon: NextJsIcon,
    text: 'Next.js',
    badgeStyle: 'text-white bg-tech-nextjs',
    iconStyle: 'fill-white'
  },
  redis: {
    icon: RedisIcon,
    text: 'Redis',
    badgeStyle: 'text-white bg-tech-redis',
    iconStyle: 'fill-white'
  },
  neo4j: {
    icon: Neo4jIcon,
    text: 'Neo4j',
    badgeStyle: 'text-white bg-tech-neo4j',
    iconStyle: 'fill-white'
  },
  flask: {
    icon: FlaskIcon,
    text: 'Flask',
    badgeStyle: 'text-white bg-tech-flask',
    iconStyle: 'fill-white'
  },
  nginx: {
    icon: NginxIcon,
    text: 'NGINX',
    badgeStyle: 'text-white bg-tech-nginx',
    iconStyle: 'fill-white'
  },
  githubActions: {
    icon: GitHubActionsIcon,
    text: 'GitHub Actions',
    badgeStyle: 'text-white bg-tech-githubActions',
    iconStyle: 'fill-white'
  },
  jenkins: {
    icon: JenkinsIcon,
    text: 'Jenkins',
    badgeStyle: 'text-white bg-tech-jenkins',
    iconStyle: 'fill-white'
  },
  tailwind: {
    icon: TailwindIcon,
    text: 'Tailwind',
    badgeStyle: 'text-white bg-tech-tailwind',
    iconStyle: 'fill-white'
  },
  sass: {
    icon: SassIcon,
    text: 'Sass',
    badgeStyle: 'text-white bg-tech-sass',
    iconStyle: 'fill-white'
  },
  opencv: {
    icon: OpenCvIcon,
    text: 'OpenCV',
    badgeStyle: 'text-white bg-tech-opencv',
    iconStyle: 'fill-white'
  },
  flutter: {
    icon: FlutterIcon,
    text: 'Flutter',
    badgeStyle: 'text-white bg-tech-flutter',
    iconStyle: 'fill-white'
  },
  dart: {
    icon: DartIcon,
    text: 'Dart',
    badgeStyle: 'text-white bg-tech-dart',
    iconStyle: 'fill-white'
  },
  vite: {
    icon: ViteIcon,
    text: 'Vite',
    badgeStyle: 'text-white bg-tech-vite',
    iconStyle: 'fill-white'
  },
  postgres: {
    icon: PostgresIcon,
    text: 'Postgres',
    badgeStyle: 'text-white bg-tech-postgres',
    iconStyle: 'fill-white'
  },
  express: {
    icon: ExpressIcon,
    text: 'Express',
    badgeStyle: 'text-white bg-tech-express',
    iconStyle: 'fill-white'
  },
  sqlite: {
    icon: SqliteIcon,
    text: 'SQLite',
    badgeStyle: 'text-white bg-tech-sqlite',
    iconStyle: 'fill-white'
  },
  jest: {
    icon: JestIcon,
    text: 'Jest',
    badgeStyle: 'text-white bg-tech-jest',
    iconStyle: 'fill-white'
  },
  html: {
    icon: HtmlIcon,
    text: 'HTML',
    badgeStyle: 'text-white bg-tech-html',
    iconStyle: 'fill-white'
  },
  css: {
    icon: CssIcon,
    text: 'CSS',
    badgeStyle: 'text-white bg-tech-css',
    iconStyle: 'fill-white'
  },
  level: {
    icon: LevelIcon,
    text: 'LevelDB',
    badgeStyle: 'text-white bg-tech-level',
    iconStyle: 'fill-white'
  },
  selenium: {
    icon: SeleniumIcon,
    text: 'Selenium',
    badgeStyle: 'text-white bg-tech-selenium',
    iconStyle: 'fill-white'
  },
  puppeteer: {
    icon: PuppeteerIcon,
    text: 'Puppeteer',
    badgeStyle: 'text-white bg-tech-puppeteer',
    iconStyle: 'fill-white'
  },
  mariadb: {
    icon: MariaDbIcon,
    text: 'MariaDB',
    badgeStyle: 'text-white bg-tech-mariadb',
    iconStyle: 'fill-white'
  }
};

export interface Props extends BadgeProps {
  type: TechType
}

export const TechBadge: React.FC<Props> = ({ className, type, ...props }) => {
  if (!typeMap[type]) {
    return null;
  }

  const { icon, text, badgeStyle, iconStyle } = typeMap[type];

  return (
    <Badge className={clsx('inline-flex gap-[0.25rem] items-center', badgeStyle, className)} pill {...props}>

      <Icon icon={icon} className={clsx('inline-block', iconStyle)} />
      {text}
    </Badge>
  );
};
