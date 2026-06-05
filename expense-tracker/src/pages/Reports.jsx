import {PieChart ,Pie,Tooltip,Cell,Legend} from 'recharts';
import { Options } from './options';

export function Reports({transactions}){
    let expense=0,income=0;
    transactions.forEach((trans)=>{
        if(trans.type === "income")
            income+=trans.amount;
        else
            expense+=trans.amount;
    })
    const expinc=[{
        name:"income",
        value:income
    },{
        name:"expense",
        value:expense
    }]
    const categorydata=transactions.reduce((acc,t)=>{
        const existing=acc.find(item=> item.name  === t.catergory)
        if(existing)
            existing.value+=t.amount
        else
            acc.push({name:t.catergory,
        value:t.amount})
        return acc
    },[])
        
   
    const COLORS=['#0088FE', '#FF4444', '#00C49F'];
    return (
        <>
            <p className='title'>Income And Expense Tracker</p>
                        <div className="container">
                            <Options  />
                            <div className="information">
                                <div className='report-1'>
                                <p className='report-title'>EXPENSE VS INCOME</p>
                                <PieChart height={250} width={500} className='piechart1'>
                                    
                                    <Pie 
                                    data={expinc}
                                    cx={210}
                                    cy={110}
                                    outerRadius={80}
                                    dataKey="value"
                                    label={({ name, value }) => `${name}: ₹${value}`} >
                                        {expinc.map((entry,index)=>(
                                        <Cell key={index} fill={COLORS[index]}></Cell>
                                    ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                                </div>
                                <div className='report-2'>
                                <p className='report-title'>CATEGORY WISE EXPENSE</p>
                                <PieChart height={250} width={500} className='piechart1'>
                                    
                                    <Pie 
                                    data={categorydata}
                                    cx={210}
                                    cy={110}
                                    outerRadius={80}
                                    dataKey="value"
                                    label={({ name, value }) => `${name}: ₹${value}`} >
                                        {expinc.map((entry,index)=>(
                                        <Cell key={index} fill={COLORS[index%COLORS.length]}></Cell>
                                    ))}
                                    </Pie>
                                    <Tooltip />
                                    <Legend />
                                </PieChart>
                                </div>
                            </div>
                        </div>
        </>
    );
}