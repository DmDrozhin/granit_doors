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
          ]
        },
        {
          src: require('@/assets/images/1440/header_bg_1400-2.jpg'),
          srcset: [
            require('@/assets/images/1440/header_bg_1400-2.webp'), 
            require('@/assets/images/1440/header_bg_1400-2.jpg')
          ]
        },
        {
          src: require('@/assets/images/1440/header_bg_1400-3.jpg'),
          srcset: [
            require('@/assets/images/1440/header_bg_1400-3.webp'), 
            require('@/assets/images/1440/header_bg_1400-3.jpg')
          ]
        },
        {
          src: require('@/assets/images/1440/header_bg_1400-4.jpg'),
          srcset: [
            require('@/assets/images/1440/header_bg_1400-4.webp'), 
            require('@/assets/images/1440/header_bg_1400-4.jpg')
          ]
        }
      ],
      sm: [
        {
          src: require('@/assets/images/768/header_bg_768-1.jpg'),
          srcset: [
            require('@/assets/images/768/header_bg_768-1.webp'), 
            require('@/assets/images/768/header_bg_768-1.jpg')
          ]
        },
        {
          src: require('@/assets/images/768/header_bg_768-2.jpg'),
          srcset: [
            require('@/assets/images/768/header_bg_768-2.webp'), 
            require('@/assets/images/768/header_bg_768-2.jpg')
          ]
        },
        {
          src: require('@/assets/images/768/header_bg_768-3.jpg'),
          srcset: [
            require('@/assets/images/768/header_bg_768-3.webp'), 
            require('@/assets/images/768/header_bg_768-3.jpg')
          ]
        },
        {
          src: require('@/assets/images/768/header_bg_768-4.jpg'),
          srcset: [
            require('@/assets/images/768/header_bg_768-4.webp'), 
            require('@/assets/images/768/header_bg_768-4.jpg')
          ]
        }
      ]
    }
  },
  getters: {
    lg: (state) => state.slides.lg,
    sm: (state) => state.slides.sm,
  },

}
export default slider