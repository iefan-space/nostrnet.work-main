import React, { useState } from 'react';






const SearchForm = ({ value, onChange, onSubmit, placeholder }) => (
  <form onSubmit={onSubmit} className="flex items-center rounded p-2">
    <input
      type="text"
      name="q"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      className="input-style p-2 outline-none"
    />
  </form>
  
);


const searchEnginesConfig = {
  Nostr: {
    url: (query) => `https://nostr.band/?q=${encodeURIComponent(query)}`,
    placeholder: 'Search on Nostr',
  },
   Brave: {
    url: (query) => `https://search.brave.com/search?q=${encodeURIComponent(query)}`,
    placeholder: 'Search on Brave',
  },
  DDG: {
    url: (query) => `https://search.brave.com/search?q=${encodeURIComponent(query)}`,
    placeholder: 'Search on Duckduckgo',
  },
  Google: {
    url: (query) => `https://www.google.com/search?q=${encodeURIComponent(query)}`,
    placeholder: 'Search on Google',
  },
  Reddit: {
    url: (query) => `https://www.reddit.com/search?q=${encodeURIComponent(query)}`,
    placeholder: 'Search on Reddit',
  },
  YouTube: {
    url: (query) => `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`,
    placeholder: 'Search on YouTube',
  },
  
 
};



const DuckDuckGoSearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchEngine, setSearchEngine] = useState('Nostr');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const searchUrl = searchEnginesConfig[searchEngine].url(searchQuery);
    window.location.href = searchUrl;
  };

  const handleSearchEngineChange = (event) => {
    setSearchEngine(event.target.value);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

    const [isDropdown2Open, setDropdown2Open] = useState(false);

  const toggleDropdown2 = () => {
    setDropdown2Open(!isDropdown2Open);
  };

  const placeholder = searchEnginesConfig[searchEngine].placeholder;

  

  return (
    <div className="flex items-center justify-center">
      <SearchForm
        value={searchQuery}
        onChange={setSearchQuery}
        onSubmit={handleSearchSubmit}
        placeholder={placeholder}
      />
      <div className="ml-0  relative">
        {/* Dropdown list for search engine selection */}
        <div className="relative  inline-block text-left">
          <div className="pt-0 ">
            <button
              type="button"
              onClick={toggleDropdown}
              className="bg-[#2b282c] text-white p-1  rounded-full focus:outline-none relative z-1"
            >
              <span className="sr-only">Open options</span>
              <svg
                className={`h-5 w-5 ${isDropdownOpen ? 'transform rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
        >
                <path
                  fillRule="evenodd"
                  d="M6.293 8.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            
            <div className=" inline-block  px-2   ">
              <button
                type="button1"
                onClick={toggleDropdown2}
                className="bg-[#303479] text-white p-1 px-1 text-semibold rounded-full focus:outline-none relative z-1 "
              >
                <svg width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#000000" fill="none"><circle cx="34.52" cy="11.43" r="5.82"/><circle cx="53.63" cy="31.6" r="5.82"/><circle cx="34.52" cy="50.57" r="5.82"/><circle cx="15.16" cy="42.03" r="5.82"/><circle cx="15.16" cy="19.27" r="5.82"/><circle cx="34.51" cy="29.27" r="4.7"/><line x1="20.17" y1="16.3" x2="28.9" y2="12.93"/><line x1="38.6" y1="15.59" x2="49.48" y2="27.52"/><line x1="50.07" y1="36.2" x2="38.67" y2="46.49"/><line x1="18.36" y1="24.13" x2="30.91" y2="46.01"/><line x1="20.31" y1="44.74" x2="28.7" y2="48.63"/><line x1="17.34" y1="36.63" x2="31.37" y2="16.32"/><line x1="20.52" y1="21.55" x2="30.34" y2="27.1"/><line x1="39.22" y1="29.8" x2="47.81" y2="30.45"/><line x1="34.51" y1="33.98" x2="34.52" y2="44.74"/></svg>
                
              </button>
              
                  
           
            </div>
      
          </div>
          
          {isDropdownOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-25 rounded-md  shadow-lg  z-10 bg-[#353237]  ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {Object.keys(searchEnginesConfig).map((engine) => (
                  <button
                    key={engine}
                    value={engine}
                    onClick={handleSearchEngineChange}
                    className={`w-full text-left block px-2 py-2  text-sm rounded-md font-semibold text-gray-200 hover:bg-gray-100 hover:text-gray-900 ${searchEngine === engine ? 'bg-gray-100 text-gray-900 hover:text-gray-900 ' : ''}`}
                  >
                    {engine === 'Brave' ? 'Brave' : engine}
                  </button>
                  
                  
                ))}
                
                

                
              </div>
            </div>
          )}
           {isDropdown2Open && (
        <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg z-10 bg-[#353237] ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {/* Link list dropdown options */}

            <a
              href="https://labs.perplexity.ai/"
              className="block px-4 py-2 text-xs font-semibold rounded-md font-mono text-gray-200 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"

              rel="noopener noreferrer"
            >
              AI Chat
            </a>

            <a
              href="https://www.perplexity.ai/"
              className="block px-4 py-2 text-xs font-semibold rounded-md font-mono text-gray-200 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"

              rel="noopener noreferrer"
            >
              Ai Search
            </a>
            

          </div>
        </div>
      )}
     
            



          </div>  
      </div>
    </div>
  );
};

export default DuckDuckGoSearchBar;
