// src/App.js
import React, { useState } from 'react';
import axios from 'axios';

function Scrap() {
  const [query, setQuery] = useState('');
  const [hashtags, setHashtags] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/scrape`, {
        params: { query },
      });
      setHashtags(response.data);
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  return (
    <div className="Scrap">
      <h1>Pinterest Hashtag Scraper</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for hashtags"
      />
      <button onClick={handleSearch}>Search</button>
      <div className="hashtag-list">
        {hashtags.map((hashtag, index) => (
          <div key={index} className="hashtag">
            #{hashtag}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Scrap;
