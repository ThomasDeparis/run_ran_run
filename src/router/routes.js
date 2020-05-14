import MainLayout from 'layouts/MainLayout.vue'
import IndexPage from 'pages/Index.vue'
import ErrorPage from 'pages/Error404.vue'
import TicketsDashboard from 'components/tickets/TicketsDashboard.vue'
import TicketDetail from 'components/tickets/TicketDetail.vue'
import UserProfile from 'components/profile/UserProfile.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', component: IndexPage, name: 'indexPage' }
    ]
  },
  {
    path: '/ticket',
    component: MainLayout,
    children: [
      { path: '', redirect: { name: 'ticketsDashboard' } },
      { path: 'dashboard', component: TicketsDashboard, name: 'ticketsDashboard' },
      { path: ':id', component: TicketDetail, name: 'ticketDetail' }
    ]
  },
  {
    path: '/profile',
    component: MainLayout,
    children: [
      { path: '', component: UserProfile, name: 'profile' }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: ErrorPage,
    name: 'errorPage'
  })
}

export default routes
