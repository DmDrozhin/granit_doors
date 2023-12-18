import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import uIs from '@/components/UI'
import comps from '@/components'

const app = createApp(App)

const uComps = [...uIs, ...comps]
uComps.forEach(comp => app.component(comp.name, comp))

app.use(store).use(router).mount('#app')
