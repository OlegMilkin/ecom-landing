import { ExpertiseItem } from './ExpertiseItem';
import { ExpertiseModelInterface } from '@/lib/models/expertise-model';

export function Expertise({ 
  anchorHref,
  isVisible,
  title,
  expertises,
 }: ExpertiseModelInterface) {

  if (expertises.length <= 0 || !isVisible) return null;

  return (
    <section id={anchorHref}>
      <div className='container'>
        <h2 className='text-4xl lg:text-6xl text-center my-4 lg:my-11'>
          {title}
        </h2>
        {<div className="grid grid-cols-1 gap-5 md:grid-cols-6">
          {expertises.map((item, index) => {
              return <ExpertiseItem item={item} index={index} key={item.id} />
            })}
        </div>}   
      </div>     
    </section>
  )
}