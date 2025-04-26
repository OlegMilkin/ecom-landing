import qs from 'qs';
import { instance } from './api-service';
import { createHomePageModel } from '@/lib/models/home-page-model';

const populateParams = {
  block: {
    on: {
      'section.hero': true,
      'section.achievements': {
        populate: {
          achievement: true,
        }
      },
      'section.expertise': {
        populate: {
          expertise: {
            populate: {
              cover: true,
            }
          }
        }
      },
      'section.services': {
        populate: {
          cover: true,
        }
      },
      'section.technologies': {
        populate: {
          serviceItem: {
            populate: {
              icon: true,
            }
          },
          technologieItem: {
            populate: {
              icon: true,
            }
          }
        }
      },
      'section.pricing': {
        populate: {
          pricingItem: {
            populate: {
              pricingItemService: true,
            }
          }
        }
      },
      'section.partners': {
        populate: {
          partnerIcon: {
            populate: {
              icon: true,
            }
          }
        }
      },
      'section.reviews': {
        populate: {
          reviewItem: true,
        }
      }
    },
  }
};

const queryString = qs.stringify({
  populate: populateParams,
});

export const getHomePageData = async (locale: string) => {
  try {
    const { data } = await instance.get(`/api/home-page?${queryString}&locale=${locale}`);

    return createHomePageModel(data.data);
  } catch(e) {
    console.log(e)
  }
}