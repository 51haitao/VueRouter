import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'

Vue.use(VueRouter)


// 创建路由
const router = new VueRouter({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        }
    ]
})

export default router