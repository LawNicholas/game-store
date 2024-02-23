import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

// Pages
import StoreFront from './pages/StoreFront'
import Library from './pages/Library'
import Profile from './pages/Profile'
import GamePage from './pages/GamePage'

// Layouts
import RootLayout from './layouts/RootLayout'

import './App.css'

// This variable is needed when configuring the project to be deployed as a subpath.
const basename = process.env.PUBLIC_URL || '/'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<StoreFront />} />
      <Route path="store" element={<StoreFront />} />
      <Route path="store/:id" element={<GamePage />}/>
      <Route path="library" element={<Library />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  ),
  { basename }
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App