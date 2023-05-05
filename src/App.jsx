import React from 'react';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import useTitle from './hooks/useTitle';
import MyLocation from './components/MyLocation/MyLocation';

const App = () => {
  useTitle('aappp')
  

  return (
    <div>
     <MyLocation></MyLocation>
    </div>
  );
};

export default App;