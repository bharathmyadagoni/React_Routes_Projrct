import './App.css';
import Apple from './Apple';
import Cart from './Cart';
import Orange from './Orange';
import React,{useState} from 'react'
import Home from './Home';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Page from './Page';
function App (){
  const[Fruits,setFruits] = useState([]);
  const handleClick = (item)=>{
    const newFruitItems =[...Fruits,item]
    setFruits(newFruitItems);
    setCurrentFruits(newFruitItems.slice(0,5))
  }
// Pagination
const [pageSize,setPage] = useState(5)
const [currentPage,setCurrentpage] = useState(0)
const [currentFruits,setCurrentFruits] = useState([Fruits.slice(0,pageSize)])
// const [pageCount,setPageCount] = useState(Math.ceil(Fruits.length/pageSize))


const page_numbers =[1,2,3,4,5]
const onPageChange = (index)=>{
  setCurrentpage(index)

  const indexOfLastRecord = index * pageSize;
  const indexOfFirstRecord = indexOfLastRecord - pageSize;
  let currentFruits=Fruits.slice(indexOfFirstRecord,indexOfLastRecord)

  setCurrentFruits(currentFruits)



  }

  return(
    <div>
      <Home/>
     <BrowserRouter>
     <Routes>
      <Route exact path='/apple' element={<Apple onClick = {() =>(
  handleClick('apple')
)} />}/>
<Route exact
 path='/orange' element={<Orange onClick = {() =>(
  handleClick('Orange')
)} />}/>
     </Routes>
     </BrowserRouter>

<Cart fruitsArray={currentFruits}/>


<button >Pages</button>
{
page_numbers.map((page,index)=>
{
  return <><button onClick={()=>onPageChange(page)}>{index+1} </button></>
}
  
  )
}
    </div>
  )
}
export default App


