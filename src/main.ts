import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UIComponents from './components/UI'
const app = createApp(App)
app
.use(store)
.use(router)
.mount('#app')



UIComponents.forEach(component =>{
    app.component(component.name, component)
})