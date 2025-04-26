import { instance } from './api-service';

export const getLocales = async () => {

  try {
    const { data } = await instance.get(`/api/i18n/locales`);

    return data;
  } catch(e) {
    console.log(e)
  }
}