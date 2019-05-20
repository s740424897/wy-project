const Home = ()=>import('../pages/Home/Home.vue')
const Category = ()=>import('../pages/category/category.vue')
const Things = ()=>import('../pages/Things/things.vue')
const Shopcar = ()=>import('../pages/Shopcar/Shopcar.vue')
const Personal = ()=>import('../pages/Personal/personal.vue')




export default [
  {
    path: '/home',
    component:Home,
    meta: {
      showFooter: true,
      showHeader: true
    }
  },
  {
    path: '/category',
    component:Category,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/things',
    component:Things,
    meta: {
      showFooter: true
    }
  },
  {
    path: '/shopcar',
    component:Shopcar,
    meta: {
      showFooter: true
    }
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
