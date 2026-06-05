import { useState } from "react";
export function EditTransactions({onClose,transactions,setTransactions,transaction})
{
    const [date,setDate]=useState(transaction.date);
    const [desc,setDesc]=useState(transaction.description);
    const [cate,setCate]=useState(transaction.catergory);
    const [type,setType]=useState(transaction.type);
    const [amount,setAmount]=useState(transaction.amount);
    return(
        <div className="overlay">
        <div className="modal">
            <p className="modal-title">ADD TRANSACTION</p>
            <div className='modal-body'>
                <label htmlFor="date">Date: </label>
                <input type="date" id="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
                <br />
                <label htmlFor="description" >Description: </label>
                <input type="text" id="description" placeholder="Enter Description" value={desc} onChange={(e)=> setDesc(e.target.value)}/>
                <br />
                <label htmlFor="category" >Category: </label>
                <input type="text" id="category" placeholder="Enter Category" value={cate} onChange={(e)=> setCate(e.target.value)}/>
                <br />
                <label htmlFor="type">Type:</label>
                <br />
                <label htmlFor="income">Income</label>
                <input type="radio" id="income" name="type" value='income' checked={type === 'income'}onChange={(e)=>setType(e.target.value)} />
                <label htmlFor="expense" className="exp">Expense</label>
                <input type="radio" id="expense" name="type" value='expense' checked={type === 'expense'} onChange={(e)=>setType(e.target.value)}/>
                <br />
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" placeholder="Enter Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                <br />
                <button className="add-btn" onClick={()=>{
                    const updatedTransaction={
                        id:transaction.id,
                        date:date,
                        description:desc,
                        catergory:cate,
                        type:type,
                        amount:parseFloat(amount)
                    }
                   setTransactions(transactions.map(t=>
                    t.id===transaction.id? updatedTransaction:t
                   ))
                    onClose();
                }}
                >Update</button>
                <button className="cancel-btn" onClick={onClose}>Cancel</button>
            </div>
        </div>
        </div>
    );
}