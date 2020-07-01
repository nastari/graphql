import React from 'react';
import HistoryComments from '../../components/HistoryComment'
import InputComment from '../../components/InputComment'

import { Container } from './styles';

function SessionComment() {
  return (
    <Container>
      <HistoryComments/>
      <InputComment/>
    </Container>
  )
}

export default SessionComment;