const usePageData = () => {
  const menuItems = [{
    link: '/#archievements',
    title: 'Achievements'
  }, {
    link: '/#expertise',
    title: 'Expertise'
  }, {
    link: '/#pricing',
    title: 'Pricing'
  }, {
    link: '#',
    title: 'Partners'
  }, {
    link: '#',
    title: 'Reviewers'
  }];

  return {
    menuItems,
  }
}

export default usePageData;