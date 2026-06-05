export function calculateTotalExpense(transactions) {
    let expense=0;
    transactions.forEach((transaction)=>{
        if(transaction.type === 'expense'){
            expense += transaction.amount;
        }
    });
    return `₹ ${expense.toFixed(2)}`;
}