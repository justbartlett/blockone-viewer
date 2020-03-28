import React from 'react';
import Block from './block';
import Pacman from './pacman';

const Blocks = props => {
  if (props.isLoading) {
    return <Pacman />;
  }
  return (
    <div className="blocks">
      {props.blocks.map((block, index) => (
        <Block key={index} block={block} blockIndex={index} />
      ))}
    </div>
  );
};

export default Blocks;
