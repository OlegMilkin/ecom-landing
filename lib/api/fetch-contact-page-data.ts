import qs from 'qs';
import { instance } from './api-service';
import { ContactPageModel } from '@/lib/models/contact-page-model';

const populateParams = {
  getInTouch: {
    populate: true,
  },
};

const queryString = qs.stringify({
  populate: populateParams,
});

export const getContactPageData = async () => {
  try {
    const { data } = await instance.get(`${process.env.BASE_URL}/api/contact?${queryString}`);

    return new ContactPageModel(data.data);
  } catch(e) {
    console.log(e)
  }
}