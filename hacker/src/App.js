import React, {useState, useEffect} from 'react'
import Header from './components/Header'

function App() {
 
  const [items, setItems] = useState([]);
  const[isLoading, setIsLoading] = useState(true);
  
  

  const fetchData = () => fetch('https://content.guardianapis.com/search?api-key=a2d60f04-597c-4989-8022-8fe29ee1a6eb')
  .then(response => response.json())
  .then(
  (data) => {
  
  setItems(data);
  setIsLoading(false);

},

)

useEffect(() => {
  fetchData()
}, [])
console.log(items)





   if (isLoading) 
   
   {return (<h1>Loading...</h1>);}
    

  return (
    <div className="App">
     <Header/>
    </div>
  );
}

export default App;
