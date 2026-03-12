import React from 'react';
import ReactDOM from 'react-dom/client';
import InteractiveGreetings from './components/Greetings';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<InteractiveGreetings firstname='James' lastname='JJ' age={20}/>);history