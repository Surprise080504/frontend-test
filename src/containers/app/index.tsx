import { Switch, Route } from 'wouter'
import GlobalStyles from 'styles/global'
import Dashboard from 'containers/dashboard'
import Signup from 'containers/signup'
import Signin from 'containers/signin'
import SignupToken from 'containers/signup-token'
import SigninToken from 'containers/signin-token'
import UserContextProvider from 'context/user'

const App = () => (
  <>
    <GlobalStyles />
    <UserContextProvider>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/signup" component={Signup} />
        <Route path="/signup/:token">
          {params => <SignupToken token={params.token} />}
        </Route>
        <Route path="/login" component={Signin} />
        <Route path="/login/:token">
          {params => <SigninToken token={params.token} />}
        </Route>
        <Route>404, Not Found!</Route>
      </Switch>
    </UserContextProvider>
  </>
)

export default App
