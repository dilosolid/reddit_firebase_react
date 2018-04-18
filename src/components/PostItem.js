import React from 'react'
import '../css/PostItem.css'

class PostItem extends React.Component {

    constructor(props){
        super(props);                
        this.state = {showHideContent:false};                  
    }

    componentWillMount(){
        //console.log('componentWillMount');                
    }

    componentDidMount(){
        //console.log('componentDidMount');        
    }

    timeDifference(_date1) {
        let date1 = new Date(_date1);
        let date2 = new Date();

        let difference = date1.getTime() - date2.getTime();

        let daysDifference = Math.floor(difference/1000/60/60/24);
        difference -= daysDifference*1000*60*60*24

        let hoursDifference = Math.floor(difference/1000/60/60);
        difference -= hoursDifference*1000*60*60

        let minutesDifference = Math.floor(difference/1000/60);
        difference -= minutesDifference*1000*60

        let secondsDifference = Math.floor(difference/1000);

        return minutesDifference
    }

    showHideContent() {
        console.log('Show Hide Content');
        this.setState({showHideContent:!this.state.showHideContent})
    }

    render(){        
        return(
            <div className='itemContainer'>
                <div className='index'>
                    { this.props.index }
                </div>
                <div className='votes'>
                    <div className='voteup'></div>
                    { this.props.votes }
                    <div className='votedown'></div>
                </div>                    
                <div className='thumbnail'>                    
                    <img src={ this.props.thumbnail } height='50' />                    
                </div>
                <div className='infoContainer'>
                    <div className='containerTitle'>{ this.props.title }</div>
                    <div className="expandContentThumb" onClick={ e => this.showHideContent(e) } ></div>
                    <div  className='containerStructure'>                         
                        <div className='containerSubmittedDate' > Submitted { this.timeDifference(this.props.submitted_date) } hours ago by { this.props.username } </div>
                        <div className='containerDetails'>
                            <span>{ this.props.comments.length } comments</span>
                            <span>share</span>
                            <span>save</span>
                            <span>hide</span>
                            <span>give gold</span>
                            <span>report</span>
                            <span>crosspost</span>
                        </div>
                    </div>
                    <div className={ `expandContent ${ this.state.showHideContent ? 'expandContentShow' : 'expandContentHide'}` } >
                        { this.props.content }
                    </div>
                </div>
            </div>
        );
    }

}

export default PostItem;