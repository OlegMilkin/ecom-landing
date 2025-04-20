import qs from 'qs';
import { instance } from './api-service';
import { HomePageModel } from '@/lib/models/home-page-model';

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

export const getHomePageData = async () => {
  try {
    const { data } = await instance.get(`${process.env.BASE_URL}/api/home-page?${queryString}`);

    console.log(new HomePageModel(data.data))

    return data.data
  } catch(e) {
    console.log(e)
  }
}