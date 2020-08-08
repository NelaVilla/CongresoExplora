import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Registrar from '../views/Registrar.vue'
import Recuperar from '../views/Recuperar.vue'
import Firebase from 'firebase'
import NotFound from '../views/NotFound.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    alias: [
      '/home', '/inicio', '/portada',  
  
  ],
  },
  {
    path: '/principal',
    name: 'Principal',
    
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Principal.vue'),
       meta:{
     login: true,
    }   
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registrar',
    name: 'Registrar',
    component: Registrar
  },
  
  {
    path: '/recuperar',
    name: 'Recuperar',
    component: Recuperar
  },
//Redireccionar
{
  path:'/home',
  redirect:{name:'Home'}
},
{
  path:'/videos',
  redirect:{name:'Home'}
},


//not found 
{
  path:'*',
  component: NotFound,
  name: 'not found'
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
 //guards solo entrar a principal si está logeado 
  router.beforeEach((to, from, next) => {
  let user = Firebase.auth().currentUser;
  let authRequired = to.matched.some((route) => route.meta.login);
  if (!user && authRequired) {
    next({ path: '/principal'});
    
  } else {
    next();
  }
});  
export default router;
