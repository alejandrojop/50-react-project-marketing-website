import { FC } from 'react';

interface ChildrenProps {
  test: string;
  visible: boolean;
}

export const Children: FC<ChildrenProps> = ({ test, visible }) => {
  return (
    <div>
      <span>{test}</span>
      <div>{visible ? <h3>Aqui</h3> : null}</div>
    </div>
  );
};
