export function calculateSavingsRate(transactions) {
    let income=0;
    let expense=0;
    transactions.forEach((transaction)=>{
        if(transaction.type === 'income'){
            income += transaction.amount;
        } else if(transaction.type === 'expense'){
            expense += transaction.amount;
        }
    });
    if(income===0){
        return '0%';
    }
    return `${((income - expense) / income * 100).toFixed(2)}%`;
}