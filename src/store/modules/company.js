const company = {
  namespaced: true,
  state: {
    title: {
      logo: ['двери', 'гранит'],
      h1: 'лучшие предложения <br/> на рынке дверей',
      h2: 'от известных производителей',
      txt: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
    },
    contacts: {
      tel: '+380975558877',
      email: 'info@corp.com',
    },
    socials: {
      fb: 'fb. Lorem ipsum dolor sit amet consect.',
      tg: 'tg. Lorem ipsum dolor sit amet consect.',
      vb: 'vb. Lorem ipsum dolor sit amet consect.'
    },
    links: {
      l1: { txt: 'Квартирные двери', link: '#' },
      l2: { txt: 'Двери для дачи', link: '#' },
      l3: { txt: 'Двери для дачи', link: '#' },
      l4: { txt: 'Квартирные двери', link: '#' },
      l5: { txt: 'Двери для дачи', link: '#' },
      l6: { txt: 'Двери для дачи', link: '#' },
    }
  
  },
  getters: {
    title: (state) => state.title,
    contacts: (state) => state.contacts,
    links: (state) => state.links,
    socials: (state) => state.socials
  }
}

export default company