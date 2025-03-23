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
    link: '/#partners',
    title: 'Partners'
  }, {
    link: '/#reviews',
    title: 'Reviewers'
  }];

  return {
    menuItems,
  }
}

export default usePageData;