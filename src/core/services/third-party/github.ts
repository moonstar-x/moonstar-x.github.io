/* eslint-disable camelcase */
import { fetchHttp } from '@core/services/http';
import { z } from 'zod';

const BASE_URL = 'https://api.github.com';

export interface GitHubRepoData {
  forks: number;
  openIssues: number;
  stars: number;
  watchers: number;
}

const GetGitHubRepoDataResponseSchema = z.object({
  stargazers_count: z.number(),
  forks_count: z.number(),
  open_issues_count: z.number(),
  subscribers_count: z.number()
});

export const getGitHubRepoData = async (repo: string): Promise<GitHubRepoData | null> => {
  try {
    const data = await fetchHttp(GetGitHubRepoDataResponseSchema, `${BASE_URL}/repos/${repo}`);

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
