import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'

import GameGenerator from './GameGenerator'

type AppProps = {initialData: any}
const App = ({initialData}: AppProps):any => {
  return (
    <div>
      <h1>{initialData.appName}</h1>
      <br />
      <GameGenerator
      />
    </div>
  )
}

export default App
