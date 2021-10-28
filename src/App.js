import React, { useState } from 'react';

import Layout from './components/Layout'

import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'

function App() {
  const [value, setValue] = useState(false)

  function onTrue(){
    setValue(prev => prev = true)
  }

  let content;
  if(value){
    content = 
      <Layout >
      <First />
      <Second />
      <Third />
      </Layout>
  }
return(
  <div>
    <button onClick={onTrue}>show</button>
      {content}
  </div>
)
}

export default App;
