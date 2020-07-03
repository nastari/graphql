import React ,{ useState } from 'react';
import { Container } from './styles';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks'

const ADD_COMMENT = gql`
  mutation save($input: CommentInput) {
    saveComment(input: $input) {
      id,
      name,
      content,
    }
  }
`;



function InputComment() {
  const [addComment] = useMutation(ADD_COMMENT);
  const [ name , setName ] = useState('');
  const [ content, setContent ] = useState('');


  async function handleSubmit(e){
    e.preventDefault();
    await addComment({ variables: { input: { name, content }}});
    setName('');
    setContent('');
  }


  return ( 
    <Container>
      <div className="inputs">
      <input type="text" 
             className="name" 
             placeholder="Name" 
             value={name} 
             onChange={(e) => setName(e.target.value)}/>
      <input type="textarea" 
             className="content" 
             placeholder="Comment" 
             value = {content} 
             onChange={(e) => setContent(e.target.value)}/>
      </div>
      <button type="submit" >Enviar</button>
    </Container> 
  );
}

export default InputComment;