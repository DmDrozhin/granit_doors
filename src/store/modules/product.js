const product = {
  namespaced: true,
  state: {
    setts: {
      sz: {sm: '2050x860', lg: '2050x960'},
      fUse: { hm: 'Квартирная', out: 'Для дома и дачи' },
      typ: { entr: 'Входная', int: 'Межкомнатная' },
      osd: { L: 'Левое открывание', R: 'Правое открывание' },
      szs: ['780х2000 мм', '800х2030 мм', '860х2050 мм', '900х2050 мм', '960х2070 мм', '980х2080 мм', '1050х2070 мм'],
      def: { ok: 'Без дефектов', used: 'Витринный образец', bad: 'С дефектом', old: 'Устаревшая модель' },
      ads: { mirr: 'С зеркалом' }
    },
    prods: [
      {
        id: '1',
        name: 'Дверь Гранит Лира 001',
        nic: 'lira_001',
        desc1: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
        
        sz: {sm: '2050x860', lg: '2050x960'},
        osd: { L: 'Левое открывание', R: 'Правое открывание' },
        lock1: true,
        lock2: true,
        d: 150,
        cont: 4,
        typ: 'entr',
        mirr: true,
        arts: {
          a0989: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 1334',
            col2: undefined,
            price: 13500,
            sale: 1,
            stock: 15,
            src1: [ require('@/assets/images/door/door1.webp') ],
            src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
          },
          a0990: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 1387',
            col2: undefined,
            price: 13400,
            sale: 1,
            stock: 9,
            src1: [ require('@/assets/images/door/door2.webp') ],
            src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
          },
          a0991: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 1300',
            col2: undefined,
            price: 13200,
            sale: 1,
            stock: 9,
            src1: [ require('@/assets/images/door/door3.webp') ],
            src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
          },
          a0992: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 1387',
            col2: undefined,
            price: 13650,
            sale: 1,
            stock: 1,
            src1: [ require('@/assets/images/door/door4.webp') ],
            src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
          },
          a0993: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 1374',
            col2: undefined,
            price: 12560,
            sale: 1,
            stock: 25,
            src1: [ require('@/assets/images/door/door5.webp') ],
            src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
          },
          a0994: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 8056',
            col2: undefined,
            price: 13400,
            sale: 1,
            stock: 0,
            src1: [ require('@/assets/images/door/door6.webp') ],
            src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
          },
          a0995: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 0057',
            col2: undefined,
            price: 13550,
            sale: 1,
            stock: 5,
            src1: [ require('@/assets/images/door/door7.webp') ],
            src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
          },
          a0996: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 1058',
            col2: undefined,
            price: 12890,
            sale: 1,
            stock: 18,
            src1: [ require('@/assets/images/door/door8.webp') ],
            src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
          },
          a0997: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 5102',
            col2: undefined,
            price: 14200,
            sale: 1,
            stock: 29,
            src1: [ require('@/assets/images/door/door9.webp') ],
            src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
          },
          a0998: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 6509',
            col2: undefined,
            price: 14560,
            sale: 1,
            stock: 5,
            src1: [ require('@/assets/images/door/door10.webp') ],
            src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
          },
        }
      },
      {
        id: '2',
        name: 'Дверь Гранит Лаура 005',
        nic: 'laura_005',
        desc1: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
        
        sz: {sm: '2050x860', lg: '2050x960'},
        osd: { L: 'Левое открывание', R: 'Правое открывание' },
        lock1: true,
        lock2: true,
        d: 145,
        cont: 2,
        typ: 'entr',
        mirr: true,
        arts: {
          a0851: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 1334',
            col2: undefined,
            price: 15800,
            sale: 1,
            stock: 6,
            src1: [ require('@/assets/images/door/door1.webp') ],
            src2: [ require('@/assets/images/door/laura_005_side2.webp') ]
          },
          a0852: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 1387',
            col2: undefined,
            price: 15430,
            sale: 1,
            stock: 0,
            src1: [ require('@/assets/images/door/door2.webp') ],
            src2: [ require('@/assets/images/door/laura_005_side2.webp') ]
          },
          a0853: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 1300',
            col2: undefined,
            price: 15690,
            sale: 1,
            stock: 12,
            src1: [ require('@/assets/images/door/door3.webp') ],
            src2: [ require('@/assets/images/door/laura_005_side2.webp') ]
          },
          a0854: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 1387',
            col2: undefined,
            price: 15860,
            sale: 1,
            stock: 10,
            src1: [ require('@/assets/images/door/door4.webp') ],
            src2: [ require('@/assets/images/door/laura_005_side2.webp') ]
          },
          a0855: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 1374',
            col2: undefined,
            price: 15420,
            sale: 1,
            stock: 9,
            src1: [ require('@/assets/images/door/door5.webp') ],
            src2: [ require('@/assets/images/door/laura_005_side2.webp') ]
          }
        }
      },
      {
        id: '3',
        name: 'Дверь Гранит Сеул 045',
        nic: 'seul_045',
        desc1: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
        
        sz: {sm: '2050x860', lg: '2050x960'},
        osd: { L: 'Левое открывание', R: 'Правое открывание' },
        lock1: true,
        lock2: false,
        d: 155,
        cont: 3,
        typ: 'entr',
        mirr: false,
        arts: {
          a0230: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 1334',
            col2: undefined,
            price: 18100,
            sale: 1,
            stock: 3,
            src1: [ require('@/assets/images/door/door1.webp') ],
            src2: [ require('@/assets/images/door/seul_045_side2.webp') ]
          },
          a0231: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 1387',
            col2: undefined,
            price: 18560,
            sale: 1,
            stock: 8,
            src1: [ require('@/assets/images/door/door2.webp') ],
            src2: [ require('@/assets/images/door/seul_045_side2.webp') ]
          },
          a0232: {
            desc2: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
            col1: 'RAL 1300',
            col2: undefined,
            price: 18700,
            sale: 1,
            stock: 0,
            src1: [ require('@/assets/images/door/door3.webp') ],
            src2: [ require('@/assets/images/door/seul_045_side2.webp') ]
          }
        }
      },
    ],
    currSlide: { curr: '', idx: '', qt: '' }
  },
  getters: {
    PRODS: (state) => state.prods,
    CURR_SLIDE: (state) => state.currSlide,
  },
  mutations: {
    SET_SLIDE: (state, dt) => state.currSlide = dt
  },
  actions: {
    SET_SLIDE({ commit }, pl) { commit('SET_SLIDE', pl) }
  }
}
export default product