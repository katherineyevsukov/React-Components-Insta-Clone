import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments, setComment } = props;

  // const handleComment = event => {
  //   setComment(input.value)
  // }
  
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(comment => <Comment comment={comment}/> )}
      <form><input type="text" placeholder='Leave a comment..'></input>
      <button>Comment</button>
      </form>
    </div>
  );
};

export default Comments;

//setcomment, needs to be passed into comment
//button onclick needs a change handler that sets puts typed comment into state
// value={this.state.value}
// onClick={handleComment