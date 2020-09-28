import React from 'react';
import './styles.css';

import AutoType from './components/autotype';

export default function App() {
  return (
    <div className="App">
      <h1>ReactJS Auto Typer</h1>
      <p style={{ textAlign: 'center' }}>
        Made by{' '}
        <a style={{ color: 'white' }} href="https://github.com/rem029" target="_blank" rel="noopener noreferrer">
          rem029
        </a>
      </p>
      <div className="info">
        <h2>Parameters</h2>
        <p>
          text <em>(string)</em>: text to type
        </p>
        <p>
          typeSpeed <em>(number)</em>: typing speed
        </p>
        <p>
          pauseTime <em>(number)</em>: pause time after typing
        </p>
        <p>
          loop <em>(boolean)</em>: if typing should repeat
        </p>
        <p>can be customized with css or inline styling</p>
      </div>

      <AutoType
        text={'I am typing at 100ms'}
        typeSpeed={100}
        pauseTime={5000}
        loop={true}
        style={{ color: '#000500' }}
      />

      <AutoType
        text={'I am typing at 200ms. Loop disabled.'}
        typeSpeed={200}
        pauseTime={10000}
        loop={false}
        style={{ color: '#362417' }}
      />

      <AutoType
        text={'I am typing at 500ms'}
        typeSpeed={500}
        pauseTime={5000}
        loop={true}
        style={{ color: '#92817A' }}
      />

      <AutoType
        text={'I am typing at 50ms with longer text. to style the text. element I used is <p>'}
        typeSpeed={50}
        pauseTime={5000}
        loop={true}
        style={{ color: '#F1DABF' }}
      />
    </div>
  );
}
