import React, { useState,useEffect } from 'react';
import axios from 'axios'
import "../SearchBar/searchBar.scss"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function AutocompleteSearch() {
  // Use the useState hook to manage the input value and suggestions list
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [suggestionValues,setSuggestionValues]=useState([]);
  const [difficulty, setDifficulty] = useState('')
  const [companies, setCompanies] = useState([])
  const [topics, setTopics] = useState([]);

  console.log("here are all the topics",topics);

  console.log("here are all the companies",companies);

  // Create an array of values to use as suggestions
  useEffect(()=>{
    
    async function getAllProblems(){
        let resoponse=await axios({
            method:"get",
            url:"http://localhost:5000/api/v1/problems/getAllProblems"
        })
        
        return resoponse.data.data
    }
    getAllProblems().then((data)=>{
        console.log("here is the data",data);
        let newArr;
        
        newArr=data.map((element)=>{
            return element.problemName
        })
        
        console.log("after change",newArr)
        setSuggestionValues((prevValues)=>{
            return [...newArr]
        })
      },)

      async function getAllCompanies(){
            let response=await axios({
                method:'get',
                url:'http://localhost:5000/api/v1/problems/getAllProblemsCompanies'
            })
            return response.data.data;
      }
      getAllCompanies().then((data)=>{
        console.log("here are all the companies");
        console.log(data);
        setCompanies((prevValue)=>{
            let tempArr=[];
            tempArr=data.map((element,i)=>{
                return <Dropdown.Item href={`#/${i}`}>{element}</Dropdown.Item>
            })
            return [...data];
        })
      })

      async function getAllTopics(){
        let response=await axios({
            method:'get',
            url:'http://localhost:5000/api/v1/problems/getAllProblemTopics'
        })
        return response.data.data
      }
      getAllTopics().then((data)=>{
        
        setTopics((prevVal)=>{
            return [...data];
        })
      })

    },[]);

    useEffect(()=>{
        async function getAllProblems(){
        let response=await axios({
            method:'get',
            url:"http://localhost:5000/api/v1/problems/getAllProblems",
            params:{
                difficulty:difficulty
            }
        })
        return response.data.data;
    }
    getAllProblems().then((data)=>{
        console.log("data after query change",data);
        let newArr;
        newArr=data.map((element)=>{
           return element.problemName;
        })
        setSuggestionValues((prevValues)=>{
            return [...newArr]
        })
    })
    },[difficulty])
 
  

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
    <div className='searchBox'>

    
    <div className='inputSection'>
      <input
        placeholder='Search for a Problem'
        type="search"
        value={inputValue}
        onChange={handleInputChange}
      />

      
    <DropdownButton id="dropdown-basic-button" title="Difficulty" className='dropDown'>
      <Dropdown.Item href="#/action-1" onClick={()=>{
        setDifficulty((prevValue)=>{
            return "Easy";
        })
      }}>Easy</Dropdown.Item>
      <Dropdown.Item href="#/action-2" onClick={()=>{
        setDifficulty((prevValue)=>{
            return "Medium"
        })
      }}>Medium</Dropdown.Item>
      <Dropdown.Item href="#/action-3"
      onClick={()=>{
        setDifficulty((prevValue)=>{
            return "Hard"
        })
      }}
      >Hard</Dropdown.Item>
    </DropdownButton>

    <DropdownButton id="dropdown-basic-button" title="Companies" className='dropDown'>
     {companies}
    </DropdownButton>
     
      </div>
      <div className='searchIteams'>
      <div>
        {suggestions.map(suggestion => (
          <div className='searchProblem' key={suggestion}>{suggestion}</div>
        ))}
      </div>
      </div>
      
  
    </div>
  );
}
export default AutocompleteSearch