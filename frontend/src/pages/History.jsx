import React, { useEffect, useState } from "react";
import axios from "axios";

const History = () => {
    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/expenses"
            );

            console.log(res.data);

            setExpenses(res.data.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <div>
            <h2>Expense History</h2>

            {expenses.map((expense) => (
                <div key={expense._id}>
                    <p>Amount: ₹{expense.amount}</p>
                    <p>Category: {expense.category}</p>
                    <p>Description: {expense.description}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};

export default History;