import qs from 'qs';
import { instance } from './api-service';
import { createGlobalDataModel } from '@/lib/models/global-data-model';

const populateParams = {
  headerDesktopLogo: {
    populate: 'logo',
  },
  menu: true,
  headerMobileLogo: {
    populate: 'logo',
  },
  networks: {
    populate: 'icon',
  },
};

const queryString = qs.stringify({
  populate: populateParams,
});

export const getGlobalData = async (locale: string) => {
  try {
    const { data } = await instance.get(`/api/global?${queryString}&locale=${locale}`);

    return createGlobalDataModel(data.data);
  } catch(e) {
    console.log(e)
  }
}