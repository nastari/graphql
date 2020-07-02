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
    border-radius : 15px;
    width: 175px;
    height: 40px;
    padding: 10px;
  }

  button {
    width: 350px;
    background: rgb(100,100,100);
  }

  input + input {
    margin-left: 2px;
  }

  button{
    transition: background 0.5s;
    color: white;
    font-weight: bold;
    font-size: 20px;
  }

  button:hover {
    background: rgb(30,31,39);
  }
`;
