import { useId } from 'react';
import { ExperticeItemType } from './expertise-types';
import { ExpertiseItem } from './ExpertiseItem';

interface ExpertiseProps {
  expertice: ExperticeItemType[]
}

export function Expertise({ expertice }: ExpertiseProps) {

  if (expertice.length <= 0) return null;

  return (
    <section id="expertise">
      <h2 className='text-4xl lg:text-6xl text-center my-4 lg:my-11'>
        Expertise
      </h2>

      {<div className="grid grid-cols-1 gap-5 md:grid-cols-6">
        {expertice.map((item, index) => {
            const id = useId();
            return <ExpertiseItem item={item} index={index} key={id} />
          })}
      </div>}        
    </section>
  )
}