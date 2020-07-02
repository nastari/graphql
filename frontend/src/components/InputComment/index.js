import React ,{ useState } from 'react';
import { Container } from './styles';
import { gql }from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks'

const ADD_COMMENT = gql`
mutation($name: String!, $content: String!) {
  saveComment( 
    objects: [{
      name: $name,
      content: $content
    }]
  ){
    returning {
    name,
    content,
    createdAt
    }
  }
}

 `
function InputComment() {
  const [ name , setName ] = useState('');
  const [ content, setContent ] = useState('');

  const [ addComment , {data} ] = useMutation(ADD_COMMENT);
  console.log(data);
  function handleName(e){
    return setName(e.target.value)
  }

  function handleContent(e){
    return setContent(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault();
    addComment({ variables: { name: name, content: content }});
    setName('');
    setContent('');
  }

  return ( 
    <Container>
      <div className="inputs">
      <input type="text" className="name" placeholder="Name" value={name} onChange={handleName}/>
      <input type="textarea" className="content" placeholder="Comment" value = {content} onChange={handleContent}/>
      </div>
      <button type="submit" onClick={handleSubmit}>Enviar</button>
    </Container> 
  );
}

export default InputComment;