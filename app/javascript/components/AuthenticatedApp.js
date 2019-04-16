import React from "react"
import PropTypes from "prop-types"
import {
   BrowserRouter as Router,
   Route,
   Switch,Link } from 'react-router-dom'
import Apartments from './pages/Apartments'
import NewApartment from './pages/newapartment'



 class AuthenticatedApp extends React.Component {
   render () {
     return (
       <Router>
         <div>
         <Link to = "/newapartment" > New Apt </Link>
           <Switch>
             <Route path="/apartments" component={Apartments} />
             <Route path="/newapartment" component={NewApartment}/>
            <Apartments />
            <NewApartment />
           </Switch>
         </div>
       </Router>

     );
   }
 }

 export default AuthenticatedApp
