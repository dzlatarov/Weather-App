import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from '../src/components/App/App'
import SingleWeather from './components/SingleWeather/SingleWeather'
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { store } from './state/store'

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
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)