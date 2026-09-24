import { fetchHttp } from '@core/services/http';
import { z } from 'zod';

const BASE_URL = 'https://api.npmjs.org';

export interface NpmPackageData {
  downloads: {
    lastMonth: number;
    lastWeek: number;
    lastYear: number;
  };
}

const GetNpmPackageDataResponseSchema = z.object({
  downloads: z.number()
});

export const getNpmPackageData = async (package_: string): Promise<NpmPackageData | null> => {
  try {
    const weekData = await fetchHttp(GetNpmPackageDataResponseSchema, `${BASE_URL}/downloads/point/last-week/${package_}`);
    const monthData = await fetchHttp(GetNpmPackageDataResponseSchema, `${BASE_URL}/downloads/point/last-month/${package_}`);
    const yearData = await fetchHttp(GetNpmPackageDataResponseSchema, `${BASE_URL}/downloads/point/last-year/${package_}`);

    return {
      downloads: {
        lastWeek: weekData.downloads,
        lastMonth: monthData.downloads,
        lastYear: yearData.downloads
      }
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};
