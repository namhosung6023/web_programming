import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'; // Register 컴포넌트를 가져옴
import CatagoIT from '../views/CatagoIT.vue';
import CatagoSport from '../views/CatagoSport.vue';
import Home from '../views/Home.vue'
import Mypage from '../views/Mypage.vue'
import LoginPage from '../views/LoginPage.vue'
import Catagoidea from '../views/Catagoidea.vue'
import SignPage from '../views/SignPage.vue'
import CompetitionPage from '@/views/CompetitionPage.vue'; 
import CompetitionPage1 from '@/views/CompetitionPage1.vue'; 


const routes = [
  {
    path: '/', // 새로운 경로 '/register'
    component: Home // Register 컴포넌트를 연결
  },
  {
    path: '/register', // 새로운 경로 '/register'
    component: Register // Register 컴포넌트를 연결
  },
  {
    path: '/catagoIT',
    component: CatagoIT
  },
  {
    path: '/catagosport',
    component: CatagoSport
  },
  {
    path: '/Catagoidea',
    component: Catagoidea
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: Mypage
  },
  {
    path: '/loginPage',
    component: LoginPage
  },
  {
    path: '/signpage',
    component: SignPage
  },
  {
    path: '/competition/:id', // 동적 경로 매개변수 ":id"를 사용하여 페이지를 동적으로 생성합니다.
    name: 'competition',
    component: CompetitionPage,
  },
  {
    path: '/competition1/:id', // 동적 경로 매개변수 ":id"를 사용하여 페이지를 동적으로 생성합니다.
    name: 'competition1',
    component: CompetitionPage1,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
