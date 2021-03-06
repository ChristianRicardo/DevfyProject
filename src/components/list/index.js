import React from 'react';

import {MdAdd} from 'react-icons/md';

import Card from '../card'

import { Container } from './styles';

export default function list({data, index: listIndex}) {
  return (
    <Container done={data.done}>
        <header>
            <h2>{data.title}</h2>
            {data.creatable &&(
              <button type="button">
                <MdAdd size={24} color="#FFF"/>
              </button>
            )}
        </header>

        <ul>
              {data.cards.map((card, index)=> <Card listIndex={listIndex} key={card.id}index={index} data={card} />)}
        </ul>
    </Container>
  );
}
