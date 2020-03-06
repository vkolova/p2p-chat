import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Sidebar from './Sidebar';

class App extends React.Component {
    render () {
        return <Router>
            <Sidebar/>
            <Switch>
                <Route exact path='/'>
                    <React.Fragment>Getting Started</React.Fragment>
                </Route>
                <Route path='/channel/:channelID/'>
                    <React.Fragment>channel</React.Fragment>
                </Route>
            </Switch>
        </Router>;
    }
}


export default App;