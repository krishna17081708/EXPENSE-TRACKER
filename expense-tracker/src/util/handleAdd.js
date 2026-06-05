export function handleAdd({transactions,setTransactions},newTransaction)
{
    setTransactions([...transactions, newTransaction]);
}