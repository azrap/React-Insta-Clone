import React from 'react';
import logo from './logo.svg';
import './App.css';
 import dummyData from './dummy-data';
import Post from './components/PostContainer/PostContainer';

class App extends React.Component {

  constructor() {
    super();
    this.state={
      dataOnState:[]
    };
    console.log(this.state.dummyDataOnState);
  }
  

    componentDidMount(){
      this.setState({
        dataOnState: dummyData,
        comments: dummyData.map( item => {
          return item.comments
        })
      });

    }

    addComment = (comment, timestamp)=>{
      this.setState({
        dataOnState: this.state.dataOnState.map( (post) =>{
          if (post.timestamp===timestamp){
            // I don't understand why we wouldn't return [this.state.dataOnState, ...]
            return (
              { ...post, comments: [...post.comments, {text: comment, username: 'bob'}]}
            )
          }
          else {
            return post
          }

        })

      })

    }

  render(){
    return (
      <div className="App">

        <div className="post-list">
          {this.state.dataOnState.map(ele => (
            <Post post={ele}
            addComment={this.addComment} />
          ))}
        </div>
      
      </div>
    );
  }
}
export default App;
