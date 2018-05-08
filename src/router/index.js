import Vue from 'vue'
import Router from 'vue-router'
const Recommend = () => import('components/recommend/recommend')
const RecommendDetail = () => import('components/recommend-detail/recommend-detail')
const Rank = () => import('components/rank/rank')
const RankDetail = () => import('components/rank-detail/rank-detail')
const Search = () => import('components/search/search')
const SingerDetail = () => import('components/singer-detail/singer-detail')
const UserCenter = () => import('components/user-center/user-center')
Vue.use(Router)
const MyIndex = () => import('components/my-index/my-index')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: RecommendDetail
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: RankDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/user',
      component: UserCenter
    },
    {
      path: '/my',
      component: MyIndex
    }
  ]
})
