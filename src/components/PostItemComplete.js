import React from 'react'
import { inject, observer } from 'mobx-react';
import '../css/PostItemComplete.css';
import PostItemList from './PostItemList.js'

@inject('RedditCloneStore')
@observer
class PostItemComplete extends React.Component {

    constructor(props){
        super(props);
        this.RedditCloneStore = this.props.RedditCloneStore;
    }

    handleClick(e){                
        let title   = this.refs.title.value;
        let content = this.refs.content.value;                
        //this.RedditCloneStore.postsArr.replace();
    }


    createNewPost(title, content){
        return {
            id:0, 
            index: 5,
            submitted_date: 1522718401,
            username:'Usuario1', 
            title:title, 
            content:content,
            votes:0,
            thumbnail:'./img/thumbnail.png',
            comments:[]
        }
    }


    render(){
        return(
            <div>
                <div className='titleText'>Title</div>
                <div>
                    <input className='titleInput' type='text' ref='title' />
                </div>
                <div className='contentText'>Content</div>
                <div>
                    <textarea name="Text1" cols="120" rows="20" ref='content'></textarea>
                </div>
                <div className='submitButton'>
                    <button onClick={ e => this.handleClick(e) } >Submit</button>
                </div>
                <div>
                    <PostItemList />
                </div>
            </div>
        )
    }
}

export default PostItemComplete;