import { useState } from 'react';
import './App.css';
import Search from './components/Search.js';
import SearchResults from './components/SearchResults.js';

function App() {

  const [results, setResults] = useState([]);

  async function performCodewordSearch(codeword){
    console.log(`performCodewordSearch invoked: ${codeword}`);

    //TODO: externalize url to a properties file
    let response = await fetch('http://127.0.0.1:3000/actions/codeword/' + codeword);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    setResults(jsonResponse);
  }

  async function performActionSearch(actionId){
    console.log(`performActionSearch invoked: ${actionId}`);

    //TODO: externalize url to a properties file
    let response = await fetch('http://127.0.0.1:3000/actions/action/' + actionId);
    let jsonResponse = await response.json();
    console.log(jsonResponse);
    setResults(jsonResponse);
  }

  return (
    <div className="App">
      <h2>MediaCell Search</h2>
      <Search performCodewordSearch={performCodewordSearch} performActionSearch={performActionSearch}/>
      <h2>Search Results</h2>
      <SearchResults results={results}/>
    </div>
  );
}

export default App;
