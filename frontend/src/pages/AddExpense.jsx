import React, { useState } from "react";
import axios from "axios";

const AddExpense = () => {
    const [formData, setFormData] = useState({
        amount: "",
        category: "",
        description: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://localhost:5000/api/expenses/add",
                formData
            );

            alert("Expense Added Successfully!");

            setFormData({
                amount: "",
                category: "",
                description: ""
            });

        } catch (error) {
            console.log(error);
            alert("Error adding expense");
        }
    };

    return (
        <div>
            <h2>Add Expense</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={formData.amount}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    Add Expense
                </button>
            </form>
        </div>
    );
};

export default AddExpense;