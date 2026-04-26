import React,{useEffect,useState} from "react";
import axios from "axios";

const Dashboard = () => {
    const [expenses, setexpenses] = useState([]);
     const budget = 10000;

    const fetchExpenses = async()=>{
        try{
            const res=await axios.get("http://localhost:5000/api/expenses");
            setexpenses(res.data.data);
        }
        catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    const totalExpense = expenses.reduce((total,item)=>total+item.amount,0);

    const moneyLeft = budget - totalExpense;

    return (
        <div>
            <h2>Dashboard</h2>

            <h3>Total Expense: ₹{totalExpense}</h3>
            <h3>Monthly Budget: ₹{budget}</h3>
            <h3>Money Left: ₹{moneyLeft}</h3>
        </div>
    );
};
export default Dashboard;


