import styled from 'styled-components';

export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    color: blue;
  }

  section {
    margin-top: 10px;
    color: rgb(70,70,70);

    div {
      background: rgb(230,230,230);
      border-radius: 5px;
      width: 350px;
      padding: 10px;
      word-break:break-all;
    }

    div + div {
      margin-top: 5px;
    }
  }
`;
