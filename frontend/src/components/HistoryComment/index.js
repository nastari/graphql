import React from 'react';
import { useQuery } from '@apollo/react-hooks'
import { Container } from './styles';
import { gql }from 'apollo-boost';


const GET_COMMENTS = gql`
  query {
    getComments {
    id
    name
    content
    createdAt
    } 
  }
 `


function HistoryComment() {
  const { loading, error, data } = useQuery(GET_COMMENTS);

  if( error ) return "DEU RUIM";

  return (
    <Container>
      <h1>Campo de Comentários</h1>
      <section className="comments">
      { loading ? ('Carregando...') : ( 
            <>
            { data.getComments === 0 ? 
              ('Não há nenhum comentário') : 
              data.getComments.map(({ id, name, content }) => 
                ( <div key={id}>
                  <h3> {name} </h3>
                  <p> {content}</p>
                  </div>
                )
              )
            }
          </>
        )
      }
      </section>

    </Container>
  );
}

export default HistoryComment;