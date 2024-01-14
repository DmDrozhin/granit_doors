export default {
  enterData: [],
  enterSetts: {},
  setts: {
    purp: { hm: 'Квартирная', out: 'Для дома и дачи' },
    type: { entr: 'Входная', int: 'Межкомнатная' },
    side: { L: 'Открывание левое', R: 'Открывание правое' },
    size: ['2050x860', '2050x960', '2055x865', '2055x965', '2045x855', '2045x955', '2060х1250'],
    dfct: { ok: 'Без дефектов', used: 'Витринный образец', bad: 'С дефектом', old: 'Устаревшая модель' },
    adds: { mirr: 'С зеркалом' },
    sale: { 1: 0.5, 2: 0.3, 3: 0.15 },
    cont: [2, 3],
    fltr: ['По убыванию цены', 'По возрастанию цены', 'По наличию', 'По популярности',]
  },
  prods: [
    {
      id: '1',
      name: 'Дверь Гранит Лира 001',
      nic: 'lira_001',
      purp: 'hm',
      desc1: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
      
      size: {sm: '2050x860', lg: '2050x960'},
      side: { L: 'Открывание левое', R: 'Открывание правое' },
      lock1: true,
      lock2: true,
      d: 150,
      cont: 3,
      type: 'entr',
      mirr: true,
      arts: {
        a0989: {
          desc2: '1) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 1334',
          col2: undefined,
          price: 13500,
          sale: 3,
          dfct: 'ok',
          stock: 15,
          rate: 8,
          src1: [ require('@/assets/images/door/door1.webp') ],
          src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
        },
        a0990: {
          desc2: '2) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 1387',
          col2: undefined,
          price: 13400,
          dfct: 'bad',
          sale: 1,
          stock: 9,
          rate: 3,
          src1: [ require('@/assets/images/door/door2.webp') ],
          src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
        },
        a0991: {
          desc2: '3) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 1300',
          col2: undefined,
          price: 13200,
          dfct: 'used',
          sale: 2,
          stock: 9,
          rate: 6,
          src1: [ require('@/assets/images/door/door3.webp') ],
          src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
        },
        a0992: {
          desc2: '4) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 1387',
          col2: undefined,
          price: 13650,
          dfct: 'old',
          sale: 1,
          stock: 1,
          rate: 3,
          src1: [ require('@/assets/images/door/door4.webp') ],
          src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
        },
        a0993: {
          desc2: '5) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 1374',
          col2: undefined,
          price: 12560,
          dfct: 'bad',
          sale: 1,
          stock: 25,
          rate: 4,
          src1: [ require('@/assets/images/door/door5.webp') ],
          src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
        },
        a0994: {
          desc2: '6) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 8056',
          col2: undefined,
          price: 13400,
          dfct: 'old',
          sale: 1,
          stock: 0,
          rate: 3,
          src1: [ require('@/assets/images/door/door6.webp') ],
          src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
        },
        a0995: {
          desc2: '7) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 0057',
          col2: undefined,
          price: 13550,
          dfct: 'used',
          sale: 1,
          stock: 5,
          rate: 4,
          src1: [ require('@/assets/images/door/door7.webp') ],
          src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
        },
        a0996: {
          desc2: '8) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 1058',
          col2: undefined,
          price: 12890,
          dfct: 'used',
          sale: 2,
          stock: 18,
          rate: 7,
          src1: [ require('@/assets/images/door/door8.webp') ],
          src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
        },
        a0997: {
          desc2: '9) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 5102',
          col2: undefined,
          price: 14200,
          dfct: 'ok',
          sale: 3,
          stock: 29,
          rate: 8,
          src1: [ require('@/assets/images/door/door9.webp') ],
          src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
        },
        a0998: {
          desc2: '10) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 6509',
          col2: undefined,
          price: 14560,
          dfct: 'ok',
          sale: 3,
          stock: 5,
          rate: 10,
          src1: [ require('@/assets/images/door/door10.webp') ],
          src2: [ require('@/assets/images/door/lira_001_side2.webp') ],
        },
      }
    },
    {
      id: '2',
      name: 'Дверь Гранит Лаура 005',
      nic: 'laura_005',
      purp: 'hm',
      desc1: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
      
      size: {sm: '2055x865', lg: '2055x965'},
      side: { L: 'Открывание левое', R: 'Открывание правое' },
      lock1: true,
      lock2: true,
      d: 145,
      cont: 2,
      type: 'entr',
      mirr: true,
      arts: {
        a0851: {
          desc2: '1) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 5008',
          col2: undefined,
          price: 15800,
          dfct: 'ok',
          sale: 3,
          stock: 6,
          rate: 8,
          src1: [ require('@/assets/images/door/door1.webp') ],
          src2: [ require('@/assets/images/door/laura_005_side2.webp') ]
        },
        a0852: {
          desc2: '2) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 1387',
          col2: undefined,
          price: 15430,
          dfct: 'old',
          sale: 1,
          stock: 0,
          rate: 3,
          src1: [ require('@/assets/images/door/door2.webp') ],
          src2: [ require('@/assets/images/door/laura_005_side2.webp') ]
        },
        a0853: {
          desc2: '3) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 1300',
          col2: undefined,
          price: 15690,
          dfct: 'ok',
          sale: 1,
          stock: 12,
          rate: 4,
          src1: [ require('@/assets/images/door/door3.webp') ],
          src2: [ require('@/assets/images/door/laura_005_side2.webp') ]
        },
        a0854: {
          desc2: '4) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 1387',
          col2: undefined,
          price: 15860,
          dfct: 'used',
          sale: 2,
          stock: 10,
          rate: 5,
          src1: [ require('@/assets/images/door/door4.webp') ],
          src2: [ require('@/assets/images/door/laura_005_side2.webp') ]
        },
        a0855: {
          desc2: '5) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 1374',
          col2: undefined,
          price: 15420,
          dfct: 'old',
          sale: 1,
          stock: 9,
          rate: 2,
          src1: [ require('@/assets/images/door/door5.webp') ],
          src2: [ require('@/assets/images/door/laura_005_side2.webp') ]
        }
      }
    },
    {
      id: '3',
      name: 'Дверь Гранит Сеул 045',
      nic: 'seul_045',
      purp: 'out',
      desc1: 'Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
      
      size: {sm: '2045x855', lg: '2045x955'},
      side: { L: 'Открывание левое', R: 'Открывание правое' },
      lock1: true,
      lock2: false,
      d: 155,
      cont: 3,
      type: 'entr',
      mirr: false,
      arts: {
        a0230: {
          desc2: '1) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 8120',
          col2: undefined,
          price: 18100,
          dfct: 'bad',
          sale: 1,
          stock: 3,
          rate: 3,
          src1: [ require('@/assets/images/door/door1.webp') ],
          src2: [ require('@/assets/images/door/seul_045_side2.webp') ]
        },
        a0231: {
          desc2: '2) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 1387',
          col2: undefined,
          price: 18560,
          dfct: 'used',
          sale: 2,
          stock: 8,
          rate: 6,
          src1: [ require('@/assets/images/door/door2.webp') ],
          src2: [ require('@/assets/images/door/seul_045_side2.webp') ]
        },
        a0232: {
          desc2: '3) Lorem ipsum dolor sit amet consectetur. Fringilla justo et sit duis pretium. Amet morbi purus donec pharetra vulputate velit. Non mauris egestas congue nullam',
          col1: 'RAL 1300',
          col2: undefined,
          price: 18700,
          dfct: 'ok',
          sale: 3,
          stock: 0,
          rate: 9,
          src1: [ require('@/assets/images/door/door3.webp') ],
          src2: [ require('@/assets/images/door/seul_045_side2.webp') ]
        }
      }
    },
  ],
  prodsSorted: [],
  prodsFiltered: [],
  // currnet slide data
  currSlide: [{ doorId: '', currArtId: '', currArt: '' }],
  currArt: [{ art: '', data: '' }],
  settsFilter: {
    defects: [],
    contour: [],
    hasMirror: false,
    purpose: [],
    sizes: []
  },
  settsSorter: '',
}