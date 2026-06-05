import "./DashBoard.css"
import {Transactiondone} from './transaction-edit'
import {Options} from "./options";
import { useState } from "react";
import {handleAdd} from "../util/handleAdd";
import {AddTransaction} from "./AddTransactions";
import { EditTransactions } from "./EditTransactions";
export function TrackEvent({transactions,setTransactions})
{
    const [addmodal,setAddModal]=useState(false);
    const [editData,setEditModal]=useState(null);
    return(
        <>
        <div className='header'>
        <p className='title' style={{ display: 'inline' }} >Income And Expense Tracker</p>
        <button className="addTransaction" onClick={()=> setAddModal(true)}>Add Transaction</button>
        </div>
                    <div className="container">
                        {addmodal && <AddTransaction onClose={()=> setAddModal(false)} onAdd={handleAdd} transactions={transactions} setTransactions={setTransactions} /> }
                        <Options />
                        <div className="information">
                            <div className="transactionhistory">
                                <div className="t transaction-header">
                                    <p>Date</p>
                                    <p>Description</p>
                                    <p>Category</p>
                                    <p>Type</p>
                                    <p>Amount</p>
                                    <p>Action</p>
                                </div>
                                <Transactiondone transactions={transactions}  setEditModal={setEditModal}/>
                                 
                            </div>
                            {editData && <EditTransactions onClose={()=>{setEditModal(null)} } transactions={transactions} setTransactions={setTransactions} transaction={editData}/>}
                        </div>
                    </div>
        </>
    )
}