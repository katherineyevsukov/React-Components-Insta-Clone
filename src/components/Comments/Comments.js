import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments, setComment, post, addComment, setUser } = props;

  console.log('func 4', setComment)
  // const handleComment = event => {
  //   setComment(input.value)
  // }
  // const onChange = (event) => {
  //   setComment(event.target.value)
  // }
  
  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(comment => <Comment comment={comment}/> )}
      <input type="text" placeholder='Username?' onChange={event => setUser(event.target.value)}></input>
      <input type="text" placeholder='Leave a comment..' onChange={event => setComment(event.target.value)}></input>
      <button onClick={() => addComment(post.id)}>Comment</button>
    </div>
  );
};

export default Comments;

//setcomment, needs to be passed into comment
//button onclick needs a change handler that sets puts typed comment into state
// value={this.state.value}
// onClick={handleComment