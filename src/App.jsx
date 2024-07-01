import React, { Suspense, lazy } from 'react';
import './App.css';

const Home = lazy(() => import('./Home.jsx'));

function App() {
  return (
    <React.Fragment>
      <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
      </main>
    </React.Fragment>
  );
}

export default App;