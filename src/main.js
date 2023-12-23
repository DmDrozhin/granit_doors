import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uIs from '@/components/UI'
import comps from '@/components'
import drs from '@/directives'

import { register } from 'swiper/element'
register()

const app = createApp(App)

const uComps = [...uIs, ...comps]
uComps.forEach(comp => app.component(comp.name, comp))
drs.forEach(dr => app.directive(dr.name, dr))

app.use(store).use(router).mount('#app')
