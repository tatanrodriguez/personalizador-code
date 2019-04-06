import Index from './components/Index.vue'
import Option from './components/Option.vue'
import Cojineria from './components/Cojineria.vue'
import Timon from './components/Timon.vue'
import Cartera from './components/Cartera.vue'
import Techo from './components/Techo.vue'

//configurando las rutas
const routes = [
    { path: '/', component: Index, name: 'index' },
    { path: '/option', component: Option, name: 'option' },
    { path: '/cojineria', component: Cojineria, name: 'cojineria' },
    { path: '/timon', component: Timon, name: 'timon' },
    { path: '/cartera', component: Cartera, name: 'cartera' },
    { path: '/techo', component: Techo, name: 'techo' }
]

export default routes