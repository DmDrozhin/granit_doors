const slider = {
  namespaced: true,
  state: {
    slides: {
      lg: [
        {
          src: require('@/assets/images/1440/header_bg_1400-1.jpg'),
          srcset: [
            require('@/assets/images/1440/header_bg_1400-1.webp'), 
            require('@/assets/images/1440/header_bg_1400-1.jpg')
          ],
          alt: 'лучшие предложения на рынке дверей'
        },
        {
          src: require('@/assets/images/1440/header_bg_1400-2.jpg'),
          srcset: [
            require('@/assets/images/1440/header_bg_1400-2.webp'), 
            require('@/assets/images/1440/header_bg_1400-2.jpg')
          ],
          alt: 'качество проверенное временем'

        },
        {
          src: require('@/assets/images/1440/header_bg_1400-3.jpg'),
          srcset: [
            require('@/assets/images/1440/header_bg_1400-3.webp'), 
            require('@/assets/images/1440/header_bg_1400-3.jpg')
          ],
          alt: 'двери которые подчеркнут изящество вашего интерьера'
        },
        {
          src: require('@/assets/images/1440/header_bg_1400-4.jpg'),
          srcset: [
            require('@/assets/images/1440/header_bg_1400-4.webp'), 
            require('@/assets/images/1440/header_bg_1400-4.jpg')
          ],
          alt: 'надежность и качество - залог успеха на многие годы'
        }
      ],
      sm: [
        {
          src: require('@/assets/images/768/header_bg_768-1.jpg'),
          srcset: [
            require('@/assets/images/768/header_bg_768-1.webp'), 
            require('@/assets/images/768/header_bg_768-1.jpg')
          ],
          alt: 'лучшие предложения на рынке дверей'

        },
        {
          src: require('@/assets/images/768/header_bg_768-2.jpg'),
          srcset: [
            require('@/assets/images/768/header_bg_768-2.webp'), 
            require('@/assets/images/768/header_bg_768-2.jpg')
          ],
          alt: 'качество проверенное временем'
        },
        {
          src: require('@/assets/images/768/header_bg_768-3.jpg'),
          srcset: [
            require('@/assets/images/768/header_bg_768-3.webp'), 
            require('@/assets/images/768/header_bg_768-3.jpg')
          ],
          alt: 'двери которые подчеркнут изящество вашего интерьера'
        },
        {
          src: require('@/assets/images/768/header_bg_768-4.jpg'),
          srcset: [
            require('@/assets/images/768/header_bg_768-4.webp'), 
            require('@/assets/images/768/header_bg_768-4.jpg')
          ],
          alt: 'надежность и качество - залог успеха на многие годы'
        }
      ]
    },
  },
  getters: {
    LG: (state) => state.slides.lg,
    SM: (state) => state.slides.sm,
  },


}
export default slider