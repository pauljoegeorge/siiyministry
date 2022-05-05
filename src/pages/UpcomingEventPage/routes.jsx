import UpcomingEvents from './index'

const UpcomingEventRoutes = [
  {
    component: UpcomingEvents,
    path: '/event/:uid',
    exact: true,
    type: 'public',
  },
]

export default UpcomingEventRoutes
