import React from 'react';
import Good from './Good';
import Bad from './Bad';
import ErrorBoundry from './ErrorBoundry';

export default function App() {
  return (
    <>
      <ErrorBoundry>
        <Bad />
      </ErrorBoundry>
      <Good />
    </>
  );
}

