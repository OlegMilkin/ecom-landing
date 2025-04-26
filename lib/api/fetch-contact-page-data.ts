import qs from 'qs';
import { instance } from './api-service';
import { createContactPageModel } from '@/lib/models/contact-page-model';

const populateParams = {
  getInTouch: {
    populate: true,
  },
};

const queryString = qs.stringify({
  populate: populateParams,
});

export const getContactPageData = async (locale: string) => {
  try {
    const { data } = await instance.get(`/api/contact?${queryString}&locale=${locale}`);

    return createContactPageModel(data.data);
  } catch(e) {
    console.log(e)
  }
}