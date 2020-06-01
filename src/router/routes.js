import MainLayout from 'layouts/MainLayout.vue'
import IndexPage from 'pages/Index.vue'
import ErrorPage from 'pages/Error404.vue'
import TicketsDashboardPage from 'pages/tickets/TicketsDashboard.vue'
import TicketDetailPage from 'pages/tickets/TicketDetail.vue'
import UserProfilePage from 'pages/profile/UserProfile.vue'
import CardsDashboardPage from 'pages/cards/CardsDashboard.vue'

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
      { path: 'dashboard', component: TicketsDashboardPage, name: 'ticketsDashboard' },
      { path: ':id', component: TicketDetailPage, name: 'ticketDetail' }
    ]
  },
  {
    path: '/profile',
    component: MainLayout,
    children: [
      { path: '', component: UserProfilePage, name: 'profile' }
    ]
  },
  {
    path: '/card',
    component: MainLayout,
    children: [
      { path: '', redirect: { name: 'cardsDashboard' } },
      { path: 'dashboard', component: CardsDashboardPage, name: 'cardsDashboard' }
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
