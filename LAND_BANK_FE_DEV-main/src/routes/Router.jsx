import { lazy, Suspense } from 'react'
import Loader from '../components/ui/Loader'
import Layout from '../layout/Layout'
import ErrorPage from './ErrorPage'

const Landbank = lazy(() => import('../pages/LandBank'))
const MoreAnalytics = lazy(() => import('../pages/Analytics'))
const Reports = lazy(() => import('../pages/Reports/Reports'))
const CardsAll = lazy(() => import('../pages/CardsAll'))

export const routesList = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: (
                    <Suspense fallback={<Loader />}>
                        <Landbank />
                    </Suspense>
                ),
            },
            {
                path: 'landbank',
                element: (
                    <Suspense fallback={<Loader />}>
                        <Landbank />
                    </Suspense>
                ),
            },
            {
                path: 'analytics',
                element: (
                    <Suspense fallback={<Loader />}>
                        <MoreAnalytics />
                    </Suspense>
                ),
            },
            {
                path: 'reports',
                element: (
                    <Suspense fallback={<Loader />}>
                        <Reports />
                    </Suspense>
                ),
            },
            {
                path: 'view-all',
                element: (
                    <Suspense fallback={<Loader />}>
                        <CardsAll />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: '/*',
        element: (
            <Suspense fallback={<Loader />}>
                <ErrorPage />
            </Suspense>
        ),
    },
]
