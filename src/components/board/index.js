import React, {useState} from 'react';
import produce from 'immer';

import {loadLists} from '../../services/api'

import BoardContext from './context'

import List from '../list'

import { Container } from './styles';

const data = loadLists();

export default function Board() {
  const [ lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
    setLists(produce(lists, draft =>{
      const dragged = draft[toList].cards[to];

      draft[toList].cards.splice(from, 1);
      draft[fromList].cards.splice(to, 0, dragged);
    }))
  }

  return (
    <BoardContext.Provider value={{lists, move}}>
      <Container >
        {lists.map((list, index)=><List index={index} key={list.title} data={list} />)}
      </Container>
    </BoardContext.Provider>

  );
}
