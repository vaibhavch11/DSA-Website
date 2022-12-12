import React, { useState,useEffect } from 'react';
import axios from 'axios'

function AutocompleteSearch() {
  // Use the useState hook to manage the input value and suggestions list
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionValues,setSuggestionValues]=useState([]);

  // Create an array of values to use as suggestions
  useEffect(()=>{
    
    async function getAllProblems(){
        let resoponse=await axios({
            method:"get",
            url:"http://localhost:5000/api/v1/problems/getAllProblems"
        })
        console.log(response);
        return response.data.data
    }
    let data=getAllProblems();
    setSuggestionValues((prevValues)=>{
        return [...data]
    })
  },[])
  

  // Listen for changes to the input field
  const handleInputChange = (event) => {
    // Update the input value
    setInputValue(event.target.value);

    // Clear the suggestions list
    setSuggestions([]);

    // If the input value is empty, don't show any suggestions
    if (inputValue.trim() === '') {
      return;
    }

    // Loop through the suggestionValues array and add matching suggestions to the list
    for (const suggestion of suggestionValues) {
      if (suggestion.startsWith(inputValue)) {
        setSuggestions(prevSuggestions => [...prevSuggestions, suggestion]);
      }
    }
  };

  return (
    <div>
      <input
        type="search"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {suggestions.map(suggestion => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
}
