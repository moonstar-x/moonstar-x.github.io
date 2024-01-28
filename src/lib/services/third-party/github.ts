import { fetchHttp } from '@lib/services/http';

const BASE_URL = 'https://api.github.com';

export type RepoData = {
  stars: number
  forks: number
  openIssues: number
  watchers: number
};

export type RawRepoData = Record<string, any> & {
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  subscribers_count: number
};

export const getRepoData = async (repo: string): Promise<RepoData | null> => {
  try {
    const data = await fetchHttp<RawRepoData>(`${BASE_URL}/repos/${repo}`);

    return {
      stars: data.stargazers_count,
      forks: data.forks_count,
      openIssues: data.open_issues_count,
      watchers: data.subscribers_count
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
