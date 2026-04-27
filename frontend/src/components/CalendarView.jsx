import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

const CalendarView = () => {
    const [expenses, setExpenses] = useState([]);

    const fetchExpenses = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/expenses"
            );

            setExpenses(res.data.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    const tileContent = ({ date, view }) => {
        if (view === "month") {
            const expenseOnDate = expenses.find((expense) => {
                const expenseDate = new Date(expense.date);
                return (
                    expenseDate.toDateString() === date.toDateString()
                );
            });

            return expenseOnDate ? (
                <p style={{ color: "red", fontSize: "12px" }}>
                    ₹{expenseOnDate.amount}
                </p>
            ) : null;
        }
    };

    return (
        <div>
            <h2>Budget Calendar</h2>
            <Calendar tileContent={tileContent} />
        </div>
    );
};

export default CalendarView;