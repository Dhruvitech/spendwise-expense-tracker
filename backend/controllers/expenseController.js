const Expense = require('../models/Expense');

const addExpense = async(req,res)=>{
    try{
        const{amount,category,description,date}= req.body;

        const newExpense = new Expense({
            amount,
            category,
            description,
            date
        });

        await newExpense.save();

        res.status(201).json({
            message: "Expense added successfully",
            data: newExpense
        });


}

catch(error){
    res.status(500).json({
        message:"Server Error",
    error: error.message
    });
}

};

// Get All Expenses
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find().sort({ date: -1 });

        res.status(200).json({
            message: "Expenses Fetched Successfully",
            data: expenses
        });

    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};

// Delete Expense
const deleteExpense = async (req, res) => {
    try {
        const expense = await Expense.findByIdAndDelete(req.params.id);

        if (!expense) {
            return res.status(404).json({
                message: "Expense not found"
            });
        }

        res.status(200).json({
            message: "Expense Deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};

// Update Expense
const updateExpense = async (req, res) => {
    try {
        const { amount, category, description, date } = req.body;

        const updatedExpense = await Expense.findByIdAndUpdate(
            req.params.id,
            {
                amount,
                category,
                description,
                date
            },
            {
                new: true
            }
        );

        if (!updatedExpense) {
            return res.status(404).json({
                message: "Expense not found"
            });
        }

        res.status(200).json({
            message: "Expense Updated Successfully",
            data: updatedExpense
        });

    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
};

module.exports = {
    addExpense,
    getExpenses,
    deleteExpense,
    updateExpense
};