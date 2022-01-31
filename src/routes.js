import home from './components/home.vue'
import addWeight from './components/addWeight.vue'
import measure from './components/measure.vue'
import showWeight from './components/showWeight.vue'


export default[

{path: '/', component: home },
{path: '/add', component: addWeight },
{path: '/measure', component: measure },
{path: '/show', component: showWeight },
]