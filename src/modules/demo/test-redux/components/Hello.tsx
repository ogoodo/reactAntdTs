import * as React from 'react';
import {Button} from 'antd';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement: any;
  onDecrement: any;
}

function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: Props) {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <span>enthusiasmLevel</span>
      <Button onClick={ onIncrement }>增加</Button>
      <span>{enthusiasmLevel}</span>
      <Button onClick={ onDecrement }>减少</Button>
    </div>
  );
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
