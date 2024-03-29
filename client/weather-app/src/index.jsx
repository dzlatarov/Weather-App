import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../src/components/App/App'
import SingleWeather from './components/SingleWeather/SingleWeather'
import { PageNotFound } from './components/PageNotFound/PageNotFound'
import { store } from './state/store'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <PageNotFound />
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