
import DashboardLayout from '../layout/DashboardLayout.vue'

import NotFoundPage from '../pages/NotFoundPage.vue'

const routes = [
    {
        path: '/admin.dashboard',
            component:DashboardLayout,
       /* redirect: '/admin.dashboard/analytics',
        children:[
            {
                path:'analytics',
                name:'Analytics',
                component:Analytics
            },
            {
                path:'studiocloud',
                name:'Studiocloud',
                component:Studiocloud
            }
        ]*/
    },
    /*{
        path: '/admin.dashboard/fastreg=*',
        component:DashboardLayout
    },*/
    { path: '*', component: NotFoundPage }
]

export default routes
