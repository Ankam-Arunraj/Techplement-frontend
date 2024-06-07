
import React, { useState, useEffect } from 'react';
import AuthorsGrid from './AuthorsGrid';

function Home() {
  const [quotes, setQuotes] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentQuote, setCurrentQuote] = useState({}); // new state to store the current quote

  useEffect(() => {
    fetch('https://techplement-backend.onrender.com/quote/search')
      .then(response => response.json())
      .then(data => setQuotes(data));
  }, []);

  //\http://localhost:7000/quote/search

  const searchQuote = (e) => {
    setSearchKey(e.target.value);
    if (e.target.value) {
      let searchResultsData = quotes.filter((item) => {
        return item.quoteText.toLowerCase().includes(e.target.value.toLowerCase()) || item.quoteAuthor.toLowerCase().includes(e.target.value.toLowerCase());
      });
      setSearchResults(searchResultsData);
    } else {
      setSearchResults([]);
    }
  };

  const generateNewQuote = () => {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    }
  };

  return (
    <div className="container">

      


      <div className="input-group mb-3">
        <input
          style={{ marginTop: "20px", border: "1px solid black" }}
          type="text"
          className="form-control"
          placeholder="Search by Quote/Author...."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={searchKey}
          onChange={(e) => searchQuote(e)}
        />
      </div>
      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Search Results</h3>
          {searchResults.map((quote, index) => (
            <div key={index} className="quote">
              <div className="card">
                <div className="card-header">
                  Quote
                </div>
                <div className="card-body">
                  <blockquote className="blockquote mb-0">
                    <p>{quote.quoteText}</p>
                    <footer className="blockquote-footer"> <cite title="Source Title">{quote.quoteAuthor}</cite></footer>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className='quote-generator' style={{ width: "60rem", marginLeft: "12rem", marginTop: "2rem" , marginBottom:"2rem"}}>

        {quotes.length > 0 && (
          <div class="card">
            <div class="card-header">
              Random quotes
            </div>
            <div class="card-body">
              <h3 class="card-title">Quote of the day</h3>
              <p class="card-text">" {currentQuote.quoteText}"</p>
              <p class="card-text" style={{ fontWeight: "bold" }}>-- {currentQuote.quoteAuthor}</p>
              <a  class="btn btn-primary" onClick={generateNewQuote}>Generate</a>
            </div>
          </div>
        )}
      </div>

      <h1>Browser by the Authors</h1>

      <div className='authors'>
        <AuthorsGrid />
      </div>

     
    </div>
  );
}

export default Home;