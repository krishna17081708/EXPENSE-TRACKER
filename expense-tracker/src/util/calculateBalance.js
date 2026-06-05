export function calculateBalance(transactions) {
    let income=0;
    let expense=0;
    transactions.forEach((transaction)=>{
        if(transaction.type === 'income'){
            income += transaction.amount;
        } else if(transaction.type === 'expense'){
            expense += transaction.amount;
        }
    });
    return `₹ ${(income - expense).toFixed(2)}`;
}