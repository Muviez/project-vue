import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import Cars from './pages/Cars.vue'
import Car from './pages/Car.vue'
import CarFull from './pages/CarFull.vue'

export default new VueRouter ({
    routes: [
        {
            path: '', //localhost:8080
            component: Home
        },
        {
            path: '/cars',
            component: Cars
        },
        {
            path: '/car/:id',
            component: Car,
            children: [
                {
                    path: 'full',
                    component: CarFull,
                    name: 'CarFull'
                }
            ]
        }
    ],
    mode: 'history'
}) 