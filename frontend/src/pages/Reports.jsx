import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend
} from "recharts";

const Reports = () => {
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

    // Group expenses by category
    const categoryData = [];

    expenses.forEach((expense) => {
        const existing = categoryData.find(
            (item) => item.name === expense.category
        );

        if (existing) {
            existing.value += expense.amount;
        } else {
            categoryData.push({
                name: expense.category,
                value: expense.amount
            });
        }
    });

    const COLORS = [
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#AA336A"
    ];

    return (
        <div>
            <h2>Reports</h2>

            <PieChart width={500} height={400}>
                <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label
                >
                    {categoryData.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>

                <Tooltip />
                <Legend />
            </PieChart>
        </div>
    );
};

export default Reports;