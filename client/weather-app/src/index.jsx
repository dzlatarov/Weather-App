import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../src/components/App/App'
import { SingleWeather } from '../src/components/SingleWeather/SingleWeather'
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFoundPage />
    },
    {
        path: '/singleWeather',
        element: <SingleWeather />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)