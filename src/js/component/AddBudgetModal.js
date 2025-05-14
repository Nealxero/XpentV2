import React from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useBudgets } from "../contexts/BudgetsContext";

export default function AddBudgetModal({ show, handleClose }) {
  const nameRef = useRef();
  const maxRef = useRef();
  const { addBudget } = useBudgets();
  function handleSubmit(e) {
    e.preventDefault();
    addBudget({
      name: nameRef.current.value,
      max: parseFloat(maxRef.current.value),
    });
    handleClose();
  }
  const { t } = useTranslation();

  return (
    <Modal show={show} onHide={handleClose} id="ModalBudget">
      <Form onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>{t("addModal.new_budget")}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>{t("addModal.name")}</Form.Label>
            <Form.Control ref={nameRef} type="text" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="max">
            <Form.Label>{t("addModal.max_spending")}</Form.Label>
            <Form.Control
              ref={maxRef}
              type="number"
              required
              min={0}
              step={0.01}
            />
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="success" type="submit">
              {t("addModal.add")}
            </Button>
          </div>
        </Modal.Body>
      </Form>
    </Modal>
  );
}
