import { fetchHttp } from '@lib/services/http';

const BASE_URL = 'https://api.npmjs.org';

export type PackageData = {
  downloads: {
    lastWeek: number
    lastMonth: number
    lastYear: number
  }
};

export type RawNpmPackageData = Record<string, any> & {
  downloads: number
};

export const getPackageData = async (pkg: string): Promise<PackageData | null> => {
  try {
    const weekData = await fetchHttp<RawNpmPackageData>(`${BASE_URL}/downloads/point/last-week/${pkg}`);
    const monthData = await fetchHttp<RawNpmPackageData>(`${BASE_URL}/downloads/point/last-month/${pkg}`);
    const yearData = await fetchHttp<RawNpmPackageData>(`${BASE_URL}/downloads/point/last-year/${pkg}`);

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
