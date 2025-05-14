import React, { useState } from "react";
import BudgetCard from "./BudgetCard";
import { Stack } from "react-bootstrap";
import { Container, Button } from "react-bootstrap";
import AddBudgetModal from "./AddBudgetModal";
import AddExpenseModal from "./AddExpenseModal";
import UncategorizedBudgetCard from "./UncategorizedBudgetCard";
import { useTranslation } from "react-i18next";
import LanguageToggle from "./TranslationButton";
import "../../styles/index.css";

/* Linea 77 Total */

import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetsContext";
import TotalBudgetCard from "./TotalBudgetCard";
import ViewExpensesModal from "./ViewExpensesModal";

//create your first component
const Home = () => {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [viewExpensesModalBudgetId, setViewExpensesModalBudgetId] = useState();
  const [addExpenseModalBudgetId, setaddExpenseModalBudgetId] = useState();
  const [currencyType, setCurrencyType] = useState("EUR"); // Track currency type
  const { budgets, getBudgetExpenses } = useBudgets();
  const { t, i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };
 

  function openAddExpenseModal(budgetId) {
    setShowAddExpenseModal(true);
    setaddExpenseModalBudgetId(budgetId);
  }
  const whiteBorderStyle = {
    color: "white",
  };
  return (
    <>
      <Container className="my-4">
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto" style={whiteBorderStyle}>
            {" "}
            XPent{" "}
            <LanguageToggle/>
          </h1>
          
          <Button variant="success" onClick={() => setShowAddBudgetModal(true)}>
            {t("home.add_budget")}
          </Button>
          <Button onClick={openAddExpenseModal} variant="warning">
            {t("home.add_expense")}
          </Button>
        </Stack>
        <div
          style={{
            margin: "20px 0 ",
          }}
        >
          <TotalBudgetCard style={{}} />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {budgets.map((budget) => {
            const amount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.amount,
              0
            );
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name}
                amount={amount}
                max={budget.max}
                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                onViewExpensesClick={() =>
                  setViewExpensesModalBudgetId(budget.id)
                }
              />
            );
          })}

          <UncategorizedBudgetCard
            onAddExpenseClick={openAddExpenseModal}
            onViewExpensesClick={() =>
              setViewExpensesModalBudgetId(UNCATEGORIZED_BUDGET_ID)
            }
          />
        </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      />
      <AddExpenseModal
        show={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
      />
      <ViewExpensesModal
        budgetId={viewExpensesModalBudgetId}
        handleClose={() => setViewExpensesModalBudgetId()}
      />
    </>
  );
};

export default Home;
