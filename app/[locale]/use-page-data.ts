const usePageData = () => {
  const experticeList = [{
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc sed cursus tellus at in consectetur. Nec eu fringilla commodo ut duis pretium egestas tristique. Tincidunt adipiscing sit nulla nec morbi velit cursus. Viverra nunc donec vestibulum sit tellus molestie diam.',
    cover: 'https://kinsta.com/de/wp-content/uploads/sites/5/2023/04/react-must-be-in-scope-when-using-jsx.jpg',
  }, {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc sed cursus tellus at in consectetur. Nec eu fringilla commodo ut duis pretium egestas tristique. Tincidunt adipiscing sit nulla nec morbi velit cursus. Viverra nunc donec vestibulum sit tellus molestie diam.',
    cover: 'https://res.cloudinary.com/cloudinary-marketing/images/w_2000,h_1100/f_auto,q_auto/v1657148451/Cld_Blog_FeatImg_July2k22_Laravel-v2/Cld_Blog_FeatImg_July2k22_Laravel-v2-png?_i=AA',
  }, {
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc sed cursus tellus at in consectetur. Nec eu fringilla commodo ut duis pretium egestas tristique. Tincidunt adipiscing sit nulla nec morbi velit cursus. Viverra nunc donec vestibulum sit tellus molestie diam.',
    cover: 'https://assets.intersystems.com/dims4/default/1d025bd/2147483647/strip/true/crop/780x410+0+6/resize/1200x630!/quality/90/?url=http%3A%2F%2Finter-systems-brightspot.s3.amazonaws.com%2F26%2Fbd%2F6a6aa762425f87ad7d5c2fe65f8c%2Fawslogo-image.jpg',
  },{
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc sed cursus tellus at in consectetur. Nec eu fringilla commodo ut duis pretium egestas tristique. Tincidunt adipiscing sit nulla nec morbi velit cursus. Viverra nunc donec vestibulum sit tellus molestie diam.',
    cover: 'https://media.licdn.com/dms/image/v2/D4D12AQHw9SjCddUhjQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1715021638881?e=2147483647&v=beta&t=t9mCD8AQaRo9x7liefaZ5ZRxFEDq3KrhepjoQ04imu0',
  },{
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc sed cursus tellus at in consectetur. Nec eu fringilla commodo ut duis pretium egestas tristique. Tincidunt adipiscing sit nulla nec morbi velit cursus. Viverra nunc donec vestibulum sit tellus molestie diam.',
    cover: 'https://codewithmosh.com/_next/image?url=https%3A%2F%2Fcdn.filestackcontent.com%2F8MbtJ4hTAaOk3KPcptqZ&w=3840&q=75',
  },{
    title: 'Lorem ipsum dolor sit amet consectetur.',
    description: 'Lorem ipsum dolor sit amet consectetur. Nunc sed cursus tellus at in consectetur. Nec eu fringilla commodo ut duis pretium egestas tristique. Tincidunt adipiscing sit nulla nec morbi velit cursus. Viverra nunc donec vestibulum sit tellus molestie diam.',
    cover: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/4084530/cover_image/retina_1708x683/0604-nodeos-the-javascript-based-operating-system-Waldek_Newsletter-8911cd0372c9aaf2807f9c75cbc00749.png',
  }];

  const achievementsList = [{
    title: '~$100 billion',
    description: 'Lorem ipsum dolor sit amet'
  },{
    title: '0.8%',
    description: 'Lorem ipsum dolor sit amet'
  },{
    title: '~30',
    description: 'Lorem ipsum dolor sit amet'
  },{
    title: '25+',
    description: 'Lorem ipsum dolor sit amet'
  },{
    title: '2024',
    description: 'Lorem ipsum dolor sit amet'
  },{
    title: '1,200+',
    description: 'Lorem ipsum dolor sit amet'
  },{
    title: '24/7',
    description: 'Lorem ipsum dolor sit amet'
  },{
    title: '5 billion+',
    description: 'Lorem ipsum dolor sit amet'
  }];

  const servicesList = [{
    title: 'Aplication',
    icon: 'ss1.png',
  },{
    title: 'Website',
    icon: 'ss2.png',
  },{
    title: 'Database',
    icon: 'ss3.png',
  },{
    title: 'Warehouse',
    icon: 'ss4.png',
  },]

  const technologiesList = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
  ]

  return {
    experticeList,
    achievementsList,
    servicesList,
    technologiesList,
  }
}

export default usePageData;