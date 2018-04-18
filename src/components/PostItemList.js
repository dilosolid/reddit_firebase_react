import React from 'react'
import PostItem from './PostItem'
import { inject, observer } from 'mobx-react';

@inject('RedditCloneStore')
@observer
class PostItemList extends React.Component {
    constructor(props){
        super(props);
        this.RedditCloneStore = this.props.RedditCloneStore;
    }

    getPosts(){
        let index = 0;
        let result = [];        

        if(this.RedditCloneStore.postsArr) {
            result = this.RedditCloneStore.postsArr.map((item) => {                      
                //item.index = index++;            
                index++;            
                return <PostItem key={item.id} {...item} index={index} />
            });        
        }
        return result;
    }

    render(){
        return(
            <div>                
                { this.getPosts() }
            </div>
        );
    }
}

export default PostItemList;
