const express = require('express');
const router = express.Router();

const {
    addExpense,
    getExpenses,
    deleteExpense,
    updateExpense
} = require("../controllers/expenseController");


router.get("/", getExpenses);
router.post("/add", addExpense);
router.delete("/:id", deleteExpense);
router.put("/:id", updateExpense);

module.exports=router;
