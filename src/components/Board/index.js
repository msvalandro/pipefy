import React, { useCallback, useEffect, useState } from 'react';
import produce from 'immer';

import { Container } from './styles';
import BoardContext from './context';
import List from '../List';
import { loadLists } from '../../services/api';

export default function Board() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const loadedLists = loadLists();

    setLists(loadedLists);
  }, []);

  const moveCard = useCallback(
    (fromList, toList, from, to) => {
      setLists(
        produce(lists, draft => {
          const dragged = draft[fromList].cards[from];

          draft[fromList].cards.splice(from, 1);
          draft[toList].cards.splice(to, 0, dragged);
        })
      );
    },
    [lists]
  );

  return (
    <BoardContext.Provider value={{ lists, moveCard }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} index={index} data={list} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}
