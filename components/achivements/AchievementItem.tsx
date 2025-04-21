import { AchivementItemInterface } from '@/lib/models/achievement-item-model';

export function AchievementItem({ description, title }: AchivementItemInterface) {
  return (
    <div className='border-b border-r border-sky-100 py-4 lg:py-8 px-2'>
      <strong className='text-2xl font-medium lg:text-3xl mb-3 block'>
        {title}
      </strong>
      <p className='text-sm lg:text-lg'>
        {description}
      </p>
    </div>
  )
}