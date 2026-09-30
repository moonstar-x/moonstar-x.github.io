/* eslint-disable camelcase */
import { fetchHttp } from '@core/services/http';
import { z } from 'zod';

const BASE_URL = 'https://hub.docker.com/v2';

export interface DockerHubRepoData {
  pulls: number;
  stars: number;
}

const GetDockerHubRepoDataResponseSchema = z.object({
  star_count: z.number(),
  pull_count: z.number()
});

export const getDockerHubRepoData = async (repo: string): Promise<DockerHubRepoData | null> => {
  try {
    const data = await fetchHttp(GetDockerHubRepoDataResponseSchema, `${BASE_URL}/repositories/${repo}`);

    return {
      stars: data.star_count,
      pulls: data.pull_count
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
