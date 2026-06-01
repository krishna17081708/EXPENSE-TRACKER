import { useState } from 'react'
import { Routes,Route} from 'react-router-dom'
import {Dashboard} from './pages/Dashboard'
import './App.css'

function App() {
  const [transactions, setTransactions]= useState([
    {
      id:1,
      description:'Grocery',
      catergory:'Food',
      amount:50.00,
      type:'expense',
      date: "2026-06-01"
    },
    {
      id:2,
      description:'Salary',
      catergory:'Income',
      amount:5000.00,
      type:'income',
      date: "2026-06-01" 
    }
  ])
  return (
    <>
      <Routes>
          <Route path='/' element={<Dashboard transactions={transactions} setTransactions={setTransactions}/>} />
          {/* <Route path='/transactions' element={<TrackEvent transactions={transactions} setTransactions={setTransactions}/>} />
          <Route path='/reports' element={<Reports transactions={transactions}/>} /> */}
      </Routes>
    </>
  )
}

export default App
