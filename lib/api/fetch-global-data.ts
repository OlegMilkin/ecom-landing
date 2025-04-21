import qs from 'qs';
import { instance } from './api-service';
import { GlobalDataModel } from '@/lib/models/global-data-model';

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

export const getGlobalData = async () => {
  try {
    const { data } = await instance.get(`${process.env.BASE_URL}/api/global?${queryString}`);

    return new GlobalDataModel(data.data);
  } catch(e) {
    console.log(e)
  }
}