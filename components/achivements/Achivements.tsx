import { AchievementItem } from './AchievementItem';
import { AchivementsModelInterface } from '@/lib/models/achievements-model';

export function Achivements({ 
  achievements,
  anchorHref,
  description,
  isVisible,
  title
 }: AchivementsModelInterface) {
  if (achievements.length <= 0 || !isVisible) return null;

  return (
    <section className='flex flex-col items-center' id={anchorHref}>
      <div className='container'>
        <h2 className='text-4xl lg:text-6xl text-center my-4 lg:my-11'>
          {title}
        </h2>
        <p className='max-w-[980px] mx-auto text-center lg:text-xl text-sm mb-4 lg:mb-16'>
          {description}
        </p>
        <div className='overflow-hidden w-full'>
          <div className="grid grid-cols-2 lg:grid-cols-4 text-white text-center mb-[-1px] mr-[-1px]">
            {achievements.map(item => <AchievementItem {...item} key={item.id} />)}
          </div>
        </div>
      </div>
    </section>
  )
}