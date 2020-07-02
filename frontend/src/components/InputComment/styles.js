import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  input, button {
    background: rgb(230,230,230);
    border: 0;
    padding: 5px;
    border-radius : 5px;
    width: 350px;
    padding: 10px;
  }

  input + input {
    margin-left: 5px;
  }

  button{
    transition: background 0.5s;
  }

  button:hover {
    background: rgb(9,21,9);
  }
`;
