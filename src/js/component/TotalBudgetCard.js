import React from "react";
import BudgetCard from "./BudgetCard";
import { useBudgets } from "../contexts/BudgetsContext";
import { useTranslation } from "react-i18next";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TotalBudgetCard(props) {
  const { t } = useTranslation();
  const { expenses, budgets } = useBudgets();

  const amount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const max = budgets.reduce((total, b) => total + b.max, 0);
  if (max === 0) return null;

  const pieData = {
    labels: budgets.map(b => b.name),
    datasets: [
      {
        data: budgets.map(b =>
          expenses
            .filter(e => e.budgetId === b.id)
            .reduce((sum, e) => sum + e.amount, 0)
        ),
        backgroundColor: [
          "#007bff", "#dc3545", "#ffc107", "#28a745", "#6610f2", "#6c757d"
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="d-flex flex-column align-items-center mb-4">
      
      <div className="d-flex justify-content-center">
        <BudgetCard
          amount={amount}
          name={t("total.total")}
          gray
          max={max}
          hideButtons
          shorter
        />
      </div>
      {expenses.length > 0 && (
        <div style={{ maxWidth: "400px", width: "100%", marginBottom: "1rem" }}>
          <Pie data={pieData} />
        </div>
      )}
    </div>
  );
}