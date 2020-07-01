import React ,{ useState } from 'react';
import { Container } from './styles';

function InputComment() {
  const [ name , setName ] = useState('');
  const [ comment, setComment ] = useState('');

  function handleName(e){
    return setName(e.target.value)
  }

  function handleComment(e){
    return setComment(e.target.value)
  }

  return ( 
    <Container>
      <input type="text" className="name" placeholder="Name" value={name} onChange={handleName}/>
      <input type="textarea" className="content" placeholder="Comment" value = {comment} onChange={handleComment}/>
      <button type="submit">Enviar</button>
    </Container> 
  );
}

export default InputComment;