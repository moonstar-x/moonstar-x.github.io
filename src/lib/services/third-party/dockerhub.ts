import { fetchHttp } from '@lib/services/http';

const BASE_URL = 'https://hub.docker.com/v2';

export type RepoData = {
  stars: number
  pulls: number
};

export type RawRepoData = Record<string, any> & {
  star_count: number
  pull_count: number
};

export const getRepoData = async (repo: string): Promise<RepoData | null> => {
  try {
    const data = await fetchHttp<RawRepoData>(`${BASE_URL}/repositories/${repo}`);

    return {
      stars: data.star_count,
      pulls: data.pull_count
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
