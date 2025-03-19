import { AchievementItem } from './AchievementItem';
import { achievementsType } from './achievements-types';
import { useId } from 'react';

interface AchievementsProps {
  achievements: achievementsType[]
}

export function Achivements({ achievements }: AchievementsProps) {
  if (achievements.length <= 0) return null;

  return (
    <section className='flex flex-col items-center' id="archievements">
      <h2 className='text-4xl lg:text-6xl text-center my-4 lg:my-11'>
        Achievements
      </h2>
      <p className='max-w-[980px] text-center lg:text-xl text-sm mb-4 lg:mb-16'>
        Discover the numbers behind our success.
        These figures showcase the trust our clients place in us and our relentless pursuit of excellence.
        Every statistic reflects our unwavering commitment to quality,
        innovation, and delivering results that exceed expectations.
        From longstanding partnerships to groundbreaking achievements,
        our journey is built on a foundation of trust and expertise.
        Let our track record speak for itself as we continue to grow and create lasting value for our clients.
      </p>
      <div className='overflow-hidden w-full'>
        <div className="grid grid-cols-2 lg:grid-cols-4 text-white text-center mb-[-1px] mr-[-1px]">
          {achievements.map(item => {
            const id = useId();

            return <AchievementItem item={item} key={id} />
          })}
        </div>
      </div>
    </section>
  )
}