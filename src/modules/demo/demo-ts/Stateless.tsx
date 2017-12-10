import * as React from 'react';
import classNames from 'classnames';

export interface StateLessProps {
  name: string;
  age?: number;
}

export default ({age = 16, ...props}: StateLessProps) => {
  return <div>
    {props.name}: {age}
  </div>;
};
