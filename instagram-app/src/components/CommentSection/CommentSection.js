import React from 'react'
import "./CommentSection.css"
import Comment from './Comment';

//username comment

// comments: [
//     {
//       username: "playhearthstone",
//       text: "Love this shot!"
//     },
//     {
//       username: "hello",
//       text: "Love this sure!"
//     }
    

class CommentSection extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            commentInput: {text: ""}
        }

    }

    handleChanges = event => {
        this.setState({
          commentInput: {
            text: event.target.value
        }})
      }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addComment(this.state.commentInput.text, this.props.timestamp);
        this.setState({
          commentInput: {text: ''}
        })
      }

    render (){

        return (

            <div className= "comment-section">

                <div className= "comment-section">
                    {this.props.comments.map( (eleComment) =>(
                        < Comment 
                            // key={index} // might need to define the key/id somewhere else later
                            comment={eleComment}
                            />
                    ))}
                </div>

                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="add a comment..."
                        type="text"
                        value={this.state.commentInput.text}
                        onChange={this.handleChanges}
                    />
                </form>

            </div>


        );

    }   

}





export default CommentSection

// const CommentSection = props => {
//     return (
//         <div className= "comment-section">
//           {props.comments.map( (eleComment, index) =>(
//               < Comment 
//                 key={index} // might need to define the key/id somewhere else later
//                 comment={eleComment}
//                 />
//           ))}

//         </div>

//     )
// }



// const Comment = props => {

//     return (
//       <div className='comment'>
//       <p> <strong>{props.comment.username}</strong> {props.comment.text} </p> 
//       </div>
  
//       );
  
//   }