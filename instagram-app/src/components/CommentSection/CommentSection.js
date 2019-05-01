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
            commentsOnState: props.comments,
            postIdsOnState: props.postId,
            comment: " "
        }

    }

        addComment = ( => {


    }


    render (){

        return (

            <div className= "comment-section">

                <div className= "comment-section">
                    {this.state.commentsOnState.map( (eleComment) =>(
                        < Comment 
                            // key={index} // might need to define the key/id somewhere else later
                            comment={eleComment}
                            />
                    ))}
                </div>

                <form>
                    <input
                        placeholder="add a comment..."
                        type="text"
                        value={this.state.comment.text}
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