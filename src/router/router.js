const Home = ()=>import('../pages/Home/Home.vue')
const Category = ()=>import('../pages/category/category.vue')
const Things = ()=>import('../pages/Things/things.vue')
const Shopcar = ()=>import('../pages/Shopcar/shopcar.vue')
const Personal = ()=>import('../pages/Personal/personal.vue')

export default [
  {
    path: '/home',
    component:Home
  },
  {
    path: '/category',
    component:Category
  },
  {
    path: '/things',
    component:Things
  },
  {
    path: '/shopcar',
    component:Shopcar
  },
  {
    path: '/personal',
    component:Personal
  },
  {
    path: '/',
    redirect: '/home'
  }
]
