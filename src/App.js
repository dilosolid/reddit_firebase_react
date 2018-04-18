import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { Provider } from 'mobx-react';
import RedditCloneStore from './store/store'
import Main from './components/Main.js'
import PostItemComplete from './components/PostItemComplete';

class App extends Component {
  render() {
    return (
      <div>
        <div>Header...</div>
        <div>
          <Provider RedditCloneStore={RedditCloneStore}>                
            <BrowserRouter>
              <Switch>                              
                  <Route path="/post/:id" component={PostItemComplete} />
                  <Route path="/" exact  component={Main} />                    
              </Switch>  
            </BrowserRouter>
          </Provider>          
        </div>
        <div>Footer...</div>    
      </div>
    );
  }
}

export default App;
