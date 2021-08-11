import React, { useEffect } from 'react'

import CreateA from './as/CreateA'
import ListA from './as/ListA'
import DetailA from './as/DetailA'
import UpdateA from './as/UpdateA'

import CreateB from './bs/CreateB'
import ListB from './bs/ListB'
import DetailB from './bs/DetailB'
import UpdateB from './bs/UpdateB'

import CreateC from './cs/CreateC'
import ListC from './cs/ListC'
import DetailC from './cs/DetailC'
import UpdateC from './cs/UpdateC'

import CreateD from './ds/CreateD'
import ListD from './ds/ListD'
import DetailD from './ds/DetailD'
import UpdateD from './ds/UpdateD'

import CreateUser from './users/CreateUser'
import ListUser from './users/ListUser'
import DetailUser from './users/DetailUser'
import UpdateUser from './users/UpdateUser'

import LoginForm from './auth/LoginForm'
import RegisterForm from './auth/RegisterForm'

import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom'

import { useQuery } from 'react-query'

import client, { fetchCSRFToken, hasCSRFToken } from './api'

function App() {
  const { data: user } = useQuery('user', () => client.get('/auth/me'), {
    retry: false,
  })

  useEffect(() => {
    if (!hasCSRFToken()) fetchCSRFToken()
  }, [])

  return (
    <Router>
      <nav>
        <ul className='flex'>
          <li>
            <Link to='/'>Home</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/register'>Register</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/as'>As</Link>
            <br />
            <Link to='/as/create'>Create a A</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/bs'>Bs</Link>
            <br />
            <Link to='/bs/create'>Create a B</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/cs'>Cs</Link>
            <br />
            <Link to='/cs/create'>Create a C</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/ds'>Ds</Link>
            <br />
            <Link to='/ds/create'>Create a D</Link>
            <br />
          </li>

          <li className='ml-10'>
            <Link to='/users'>Users</Link>
            <br />
            <Link to='/users/create'>Create a User</Link>
            <br />
          </li>
        </ul>
      </nav>
      <main>
        <Route path='/as'>
          <h1>As</h1>
        </Route>

        <Route path='/bs'>
          <h1>Bs</h1>
        </Route>

        <Route path='/cs'>
          <h1>Cs</h1>
        </Route>

        <Route path='/ds'>
          <h1>Ds</h1>
        </Route>

        <Route path='/users'>
          <h1>Users</h1>
        </Route>

        <Switch>
          {/* A routes */}
          <Route path='/as/create' component={CreateA} />
          <Route path='/as/update/:id' component={UpdateA} />
          <Route path='/as/detail/:id' component={DetailA} />
          <Route path='/as' component={ListA} />,{/* B routes */}
          <Route path='/bs/create' component={CreateB} />
          <Route path='/bs/update/:id' component={UpdateB} />
          <Route path='/bs/detail/:id' component={DetailB} />
          <Route path='/bs' component={ListB} />,{/* C routes */}
          <Route path='/cs/create' component={CreateC} />
          <Route path='/cs/update/:id' component={UpdateC} />
          <Route path='/cs/detail/:id' component={DetailC} />
          <Route path='/cs' component={ListC} />,{/* D routes */}
          <Route path='/ds/create' component={CreateD} />
          <Route path='/ds/update/:id' component={UpdateD} />
          <Route path='/ds/detail/:id' component={DetailD} />
          <Route path='/ds' component={ListD} />,{/* User routes */}
          <Route path='/users/create' component={CreateUser} />
          <Route path='/users/update/:id' component={UpdateUser} />
          <Route path='/users/detail/:id' component={DetailUser} />
          <Route path='/users' component={ListUser} />
          {/* auth routes */}
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegisterForm} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
