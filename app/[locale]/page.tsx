import { useTranslations } from 'next-intl';
import { Button } from '@/components/Button';
import { Archivements } from '@/components/Archivements';
import { Expertise } from '@/components/expertise/Expertise';

export default function Home() {
  const t = useTranslations('HomePage');

  const expertice = [{
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc sed cursus tellus at in consectetur. Nec eu fringilla commodo ut duis pretium egestas tristique. Tincidunt adipiscing sit nulla nec morbi velit cursus. Viverra nunc donec vestibulum sit tellus molestie diam.',
    cover: '/div.png',
  }, {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc sed cursus tellus at in consectetur. Nec eu fringilla commodo ut duis pretium egestas tristique. Tincidunt adipiscing sit nulla nec morbi velit cursus. Viverra nunc donec vestibulum sit tellus molestie diam.',
    cover: '/div.png',
  }, {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc sed cursus tellus at in consectetur. Nec eu fringilla commodo ut duis pretium egestas tristique. Tincidunt adipiscing sit nulla nec morbi velit cursus. Viverra nunc donec vestibulum sit tellus molestie diam.',
    cover: '/div.png',
  },{
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc sed cursus tellus at in consectetur. Nec eu fringilla commodo ut duis pretium egestas tristique. Tincidunt adipiscing sit nulla nec morbi velit cursus. Viverra nunc donec vestibulum sit tellus molestie diam.',
    cover: '/div.png',
  },{
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc sed cursus tellus at in consectetur. Nec eu fringilla commodo ut duis pretium egestas tristique. Tincidunt adipiscing sit nulla nec morbi velit cursus. Viverra nunc donec vestibulum sit tellus molestie diam.',
    cover: '/div.png',
  },{
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc sed cursus tellus at in consectetur. Nec eu fringilla commodo ut duis pretium egestas tristique. Tincidunt adipiscing sit nulla nec morbi velit cursus. Viverra nunc donec vestibulum sit tellus molestie diam.',
    cover: '/div.png',
  },{
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc sed cursus tellus at in consectetur. Nec eu fringilla commodo ut duis pretium egestas tristique. Tincidunt adipiscing sit nulla nec morbi velit cursus. Viverra nunc donec vestibulum sit tellus molestie diam.',
    cover: '/div.png',
  },{
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc sed cursus tellus at in consectetur. Nec eu fringilla commodo ut duis pretium egestas tristique. Tincidunt adipiscing sit nulla nec morbi velit cursus. Viverra nunc donec vestibulum sit tellus molestie diam.',
    cover: '/div.png',
  }, {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc sed cursus tellus at in consectetur. Nec eu fringilla commodo ut duis pretium egestas tristique. Tincidunt adipiscing sit nulla nec morbi velit cursus. Viverra nunc donec vestibulum sit tellus molestie diam.',
    cover: '/div.png',
  }];

  return (
    <>
      {/* Hero section start */}
      <section className='min-h-0 lg:min-h-[663px] bg-[url(/hero-banner.png)] bg-no-repeat bg-center bg-contain flex flex-col items-center justify-center lg:gap-10 gap-4 lg:py-0 py-4'>
        <h1 className='text-6xl lg:text-9xl font-medium text-center'>
          ECOM is simple
        </h1>
        <p className='max-w-[745px] text-center lg:text-lg text-sm'>
          Lorem ipsum dolor sit amet consectetur. Quis donec sit massa odio lacus consectetur congue sem. 
          Risus diam odio magna dui. Ut sed ut tellus id mattis.
          Tempus bibendum quisque scelerisque euismod varius.
        </p>
        <Button 
          title={t('contactUs')}
          href="/contact"
          size="big"
        />
      </section>
      {/* Hero section end */}
      {/* Archievements section start */}
      <Archivements />
      {/* Archievements section end */}

      {/* Expertise section start */}
      <Expertise expertice={expertice} />
      {/* Expertise section end */}
    </>
  );
}
