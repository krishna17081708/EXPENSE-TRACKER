export function calculateTotalIncome(transactions) {
    let income=0;
    transactions.forEach((transaction)=>{
        if(transaction.type === 'income'){
            income += transaction.amount;
        } 
    });
    return `₹ ${income.toFixed(2)}`;
}