import React, {useState, useEffect} from 'react'
import Header from './components/Header'


function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = () => {fetch(
    "https://content.guardianapis.com/search?api-key=a2d60f04-597c-4989-8022-8fe29ee1a6eb"
  )
  .then(res => res.json())
  .then(
    (result) => {
      
      setItems(result);
      setIsLoading(false);
     
    },
    // Note: it's important to handle errors here
    // instead of a catch() block so that we don't swallow
    // exceptions from actual bugs in components.
    
  )}

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetchData()
  }, [])
  console.log(items)

// return (

//   isLoading?  (<h1>Loading...</h1>)  :
    

return (

  isLoading?  (<h1>Loading...</h1>)  :

  <div >
    <Header/>
    {items && items.response.results.map(item => (
    <li key = {item.id}>
    <h2>{item.webTitle}</h2>
    </li>)

     )}
     </div>
    
  
)}
export default App;




