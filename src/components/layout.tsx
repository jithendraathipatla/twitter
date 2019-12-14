import React from 'react';
import Secondlay from './SecondLayoutSub';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import PageEmail from '../pages/Email';
import PageHome from '../pages/Home';
import PageMessages from '../pages/Messages';
import PageOverview from "../pages/Overview";
import PageTickets from "../pages/Tickets";
import PageWaitlist from "../pages/waitlist";
const layout = () => {
    return (
        <BrowserRouter>
        
        <div className="Layout">
        
          <div className="layout_main">
            <div>
             <Link to="/">Home</Link>
            </div>

            <div>
               <Link to="/overview"> Overview</Link>
            </div>

            <div>
               <Link to="/tickets">Tickets</Link> 
            </div>

            <div>
               <Link to="/waitlist">Waitlist</Link> 
            </div>


            <div>
                <Link to="/email">Email</Link>
            </div>


            <div>
               <Link to="/messages"> Meassages</Link>
            </div>

            <div>
              <Link to="/">Home</Link>
            </div>

            <div>
               <Link to="/overview"> Overview</Link>
            </div>

            <div>
               <Link to="/tickets">Tickets</Link> 
            </div>

            <div>
               <Link to="/waitlist">Waitlist</Link> 
            </div>


            <div>
                <Link to="/email">Email</Link>
            </div>


            <div>
               <Link to="/messages"> Meassages</Link>
            </div>
          </div>
          <div className="layout_sub">
              <Secondlay/>
              <div className="card">
              
               <Switch>
                <Route path="/" exact component={PageHome}/>
                <Route path="/home" exact component={PageHome} />
                <Route path="/overview" exact component={PageOverview}/>
                <Route path="/tickets" exact component={PageTickets}/>
                <Route path="/waitlist" exact component={PageWaitlist}/>
                <Route path="/email" exact component={PageEmail}/>
                <Route path="/messages" exact component={PageMessages}/>
               </Switch>
              
              </div>
          </div>
        </div>
        </BrowserRouter>
    );
};

export default layout;