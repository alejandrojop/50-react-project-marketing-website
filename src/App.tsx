import './styles.css';
// import { CardList } from './components/CardList';
import { Children } from './components/Children';
import { useState } from 'react';

export const App = () => {
  const [visible, setVisible] = useState(false);
  const teste = 'holaaa';
  const handleChange = () => {
    setVisible(!visible);
  };
  return (
    <>
      {/* <CardList /> */}
      <button onClick={handleChange}>click...</button>
      <Children test={teste} visible={visible} />
    </>
  );
};
