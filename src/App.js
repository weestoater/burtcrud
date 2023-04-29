import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from v2 of <code>burtcrud</code></h1>
        <p className="text-white"><i className="bi bi-person-circle"></i></p>
      </header>
      <main className="container"> 
        <div className="row">
          <div className="col">
            
            <h2>What is the next step...</h2>
            <p>We have a simple ReactJS app, now we need to give it a '<code>back-end</code>' for handling the queries to and from the <code>mongoDB</code>.</p>
          </div>
        </div>
        <div className="row">ghghghghg</div>
      </main>
    </div>
  );
}

export default App;
