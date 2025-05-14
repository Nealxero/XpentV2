import React from "react";
import BudgetCard from "./BudgetCard";
import { useBudgets } from "../contexts/BudgetsContext";
import { useTranslation } from "react-i18next";


export default function TotalBudgetCard(props) {
  const {t} = useTranslation();
  const { expenses, budgets } = useBudgets();
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const max = budgets.reduce((total, budgets) => total + budgets.max, 0);
  if (max === 0) return null;

  return <div className="d-flex justify-content-center"> <BudgetCard amount={amount} name={t("total.total")} gray max={max} hideButtons shorter /> </div>;
}
