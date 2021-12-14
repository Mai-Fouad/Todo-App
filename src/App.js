import logo from './logo.svg';
import React from 'react';
import Header from './features/header/Header';
import TodoList from './features/todos/TodoList';
import Footer from './features/footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>
        </section>
      </nav>
      <main>
        <section className='medium-container'>
          <h2>Todos</h2>
          <div className='todoapp'>
              <Header/>
              <TodoList/>
              <Footer/>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
