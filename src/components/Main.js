import React from 'react';
import PostItemList from './PostItemList.js'

class Main extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(            
            <div className="App">              
                <PostItemList />
            </div>            
        );
    };
}

export default Main;