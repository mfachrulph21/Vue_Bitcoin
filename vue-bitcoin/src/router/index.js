import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BTCToRupiahView from '../views/BTCToRupiahView.vue'
import RupiahToBTCView from '../views/RupiahToBTCView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/btc-to-rupiah',
      name: 'btcToRupiah',
      component: BTCToRupiahView
    },
    {
      path: '/rupiah-to-btc',
      name: 'rupiahToBtc',
      component: RupiahToBTCView
    }
 
  ]
})

export default router
