import "./DashBoard.css"
import { Transactions } from "./transactions";
import { calculateBalance } from "../util/calculateBalance";
import { calculateTotalIncome } from "../util/calculateTotalIncome";
import { calculateTotalExpense } from "../util/calculateTotalExpense";
import { calculateSavingsRate } from "../util/calculateSavingRate";
import {Options} from "./options";
// eslint-disable-next-line no-unused-vars
export function Dashboard({ transactions, setTransactions }) {
    return (
        <>
            <p className='title'>Income And Expense Tracker</p>
            <div className="container">
                <Options  />
                <div className="information">
                    <div className="amountinfo">
                        <div className="balance">
                            <p className="balanced">Total Balance</p>
                            <p className="balanceamount">{calculateBalance(transactions)}</p>
                        </div>
                        <div className="income">
                            <p className="balanced">Total Income</p>
                            <p className="balanceamount">{calculateTotalIncome(transactions)}</p>
                        </div>
                        <div className="expense">
                            <p className="balanced">Total Expense</p>
                            <p className="balanceamount">{calculateTotalExpense(transactions)}</p>
                        </div>
                        <div className="savingsrate">
                            <p className="balanced">Savings Rate</p>
                            <p className="balanceamount">{calculateSavingsRate(transactions)}</p>
                        </div>
                    </div>
                    <div className="transactionhistory">
                        <div className="transaction transaction-header">
                            <p>Date</p>
                            <p>Description</p>
                            <p>Category</p>
                            <p>Type</p>
                            <p>Amount</p>
                        </div>
                        <Transactions transactions={transactions} />
                    </div>
                </div>
            </div>
        </>
    )
}