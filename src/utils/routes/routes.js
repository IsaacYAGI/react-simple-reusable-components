import { 
    Switch,
    Route
 } from 'react-router-dom'
import Login from '@views/login/login'
import Dashboard from '../../views/dashboard/dashboard'


 const Routes = () => {
    return (
           <Switch>
               <Route exact path='/' component={Login} />
               <Route exact path='/dashboard' component={Dashboard} />
               {/* <Route exact path='/about' component={About} /> */}
               {/* <Route exact path='/contacts' component={Contacts} /> */}
               {/* <Route path='/login' component={Login} />
               <Route path='/register' component={Register} />
               <PrivateRoute path='/admin' component={Admin} />
               <Route path='/403' component={Error403} />
               <Route path='*' component={Error404} /> */}
           </Switch>
    )
} 

export default Routes