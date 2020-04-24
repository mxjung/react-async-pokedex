import {useState} from 'react';
import axios from 'axios';
// import { uuid } from "uuid/v4";
import {v4 as uuid} from "uuid";

// Changes flip status of card and returns new value and func to 
// flip the card
function useFlip(initialVal=false) {
  const [value, setValue] = useState(initialVal);
  const flip = () => {
    setValue(oldVal => !oldVal);
  }
  return [value, flip];
}

// Makes axios get request to address and returns array of all API responses 
// and function to make another request (and update array of responses)
function useAxios() {
  const [responses, setResponses] = useState([]);
  
  // name is not query (changed to resource) *******
  async function fetchData (url, resource="") {
    try {
      const response = await axios(`${url}${resource}`);
      setResponses(resps => [...resps, {...response.data, id: uuid()}]);
    } catch {
      console.log('error happened in API call');
    }
  };
  
  return [responses, fetchData];
}


export {useFlip, useAxios};