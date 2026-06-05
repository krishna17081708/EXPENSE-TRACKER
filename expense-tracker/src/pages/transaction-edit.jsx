import './DashBoard.css';
export function Transactiondone({ transactions,setEditModal }) {
    return (
        <>
            {transactions.map((transaction) => {
                return(
                    <div key={transaction.id} className="t">
                        
                        <p className='dates'>{transaction.date}</p>
                        <p className='description'>{transaction.description}</p>
                        <p className='category'>{transaction.catergory}</p>
                        <p className='type' style={transaction.type === 'income' ? { color: 'blue' } : { color: 'red' }}>
                            {transaction.type}
                        </p>
                        <p className='amount' style={transaction.type === 'income' ? { color: 'blue' } : { color: 'red' }}>
                            {(transaction.type === 'income' ? '+' + '₹' + transaction.amount.toFixed(2) : '-' + '₹' + transaction.amount.toFixed(2))}
                        </p>
                        <button className='edit' onClick={()=>{setEditModal(transaction)}}>Edit</button>
                    </div>
                )
            })}
        </>
    );
}
