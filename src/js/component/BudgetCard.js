import React from "react";
import "../../styles/totalBudgetModif.css";
import { Card, ProgressBar, Stack, Button } from "react-bootstrap";
import { currencyFormatter } from "./utils";
import { useTranslation } from "react-i18next";
export default function BudgetCard({
  name,
  amount,
  max,
  gray,
  dark,
  onAddExpenseClick,
  hideButtons,
  onViewExpensesClick,
  shorter
}) {
  const classNames = [];
  const { t } = useTranslation();
  
  if (amount >= max) {
    classNames.push("bg-max-reached" );
  } else if (gray) {
    classNames.push("bg-light");
  } else if (dark) {
    classNames.push("bg-dark");
  } 
  if (shorter) {
    classNames.push("shorter");
  }
  return (
    <Card className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2"> {name} </div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(amount)}
            {max && (
              <span className="text-muted fs-6">
                {" "}
                / {currencyFormatter.format(max)}{" "}
              </span>
            )}
          </div>
        </Card.Title>
        {max && (
          <ProgressBar
            className="rounded-pill"
            animated
            variant={getProgressBarVariant(amount, max)}
            min={0}
            max={max}
            now={amount}
          />
        )}
        {amount >= max && (
          <div className="text-limit mt-2">{t("budgetCard.warning")}</div>
        )}
        
        {!hideButtons && (
          <Stack direction="horizontal" gap="2" className="mt-4">
            <Button
              variant="warning"
              className="ms-auto"
              onClick={onAddExpenseClick}
            >
             {t("budgetCard.add_expense")}
            </Button>
            <Button onClick={onViewExpensesClick} variant="secondary">
              {t("budgetCard.view_expense")}
            </Button>
          </Stack>
        )}
      </Card.Body>
    </Card>
  );
}

const getProgressBarVariant = (amount, max) => {
  const ratio = amount / max;
  if (ratio <= 0.5) return "info";
  if (ratio <= 0.75) return "warning";
  if (ratio >= 1.0) return "dark";
  return "danger";
};
