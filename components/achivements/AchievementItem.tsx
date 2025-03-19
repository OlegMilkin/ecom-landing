import { achievementsType } from './achievements-types';

interface AchievementItemProps {
  item: achievementsType
}

export function AchievementItem({ item }: AchievementItemProps) {
  return (
    <div className='border-b border-r border-sky-100 py-4 lg:py-8 px-2'>
      <strong className='text-2xl font-medium lg:text-3xl mb-3 block'>
        {item.title}
      </strong>
      <p className='text-sm lg:text-lg'>
        {item.description}
      </p>
    </div>
  )
}