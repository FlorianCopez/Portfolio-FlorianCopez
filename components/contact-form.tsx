"use client";

import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import FlashMessage from "./flash-message";
import validator from "validator";

interface FormData {
  email: string;
  message: string;
  subject: string;
  [key: string]: string;
}

export default function ContactForm() {
  const initialFormData: FormData = {
    email: "",
    subject: "",
    message: "",
  };
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [flashMessage, setFlashMessage] = useState<{
    status: string;
    message: string;
  } | null>(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  const validateField = (fieldName: string, value: string): string => {
    switch (fieldName) {
      case "email":
        return validator.isEmail(value) ? "" : "Adresse email invalide";
      case "subject":
        return value.trim() !== "" ? "" : "L'objet est obligatoire";
      case "message":
        return value.trim() !== "" ? "" : "Le message est obligatoire";
      default:
        return "";
    }
  };

  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};

    Object.keys(formData).forEach((fieldName) => {
      const errorMessage = validateField(fieldName, formData[fieldName]);
      if (errorMessage) {
        errors[fieldName] = errorMessage;
      }
    });

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (isFormSubmitted) {
      const errorMessage = validateField(name, value);

      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        [name]: errorMessage,
      }));
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsFormSubmitted(true);

    const isValid = validateForm();

    if (isValid) {
      try {
        const response = await axios.post("/api/sendEmail", formData);

        if (response.status === 200) {
          setFlashMessage({
            status: "Success",
            message: "L'email a bien été envoyé!",
          });
          setFormData(initialFormData);
        } else {
          setFlashMessage({
            status: "Warning",
            message: "Échec de l'envoi de l'email. Veuillez réessayer.",
          });
        }
      } catch (error) {
        setFlashMessage({
          status: "Error",
          message: "Une erreur s'est produite lors de l'envoi de l'email.",
        });
      }
    }
  };

  const classDivField = "flex flex-col space-y-1";
  const classLabel = "font-semibold";
  const classInput =
    "px-3 py-2 border rounded-md text-sm shadow-sm placeholder-zinc-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none";

  return (
    <>
      {flashMessage && (
        <FlashMessage
          status={flashMessage.status}
          message={flashMessage.message}
        />
      )}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className={classDivField}>
          <label htmlFor="email" className={classLabel}>
            Email*
          </label>
          <input
            className={`${classInput} ${
              validationErrors.email && "border-red-500"
            }`}
            type="email"
            name="email"
            id="email"
            required
            placeholder="Entrer votre email"
            value={formData.email}
            onChange={handleChange}
          />
          {validationErrors.email && (
            <p className="text-red-500 text-sm mt-1">
              {validationErrors.email}
            </p>
          )}
        </div>
        <div className={classDivField}>
          <label htmlFor="subject" className={classLabel}>
            Objet du message*
          </label>
          <input
            className={`${classInput} ${
              validationErrors.subject && "border-red-500"
            }`}
            name="subject"
            id="subject"
            type="text"
            placeholder="Entrer l'objet de votre message"
            value={formData.subject}
            onChange={handleChange}
          />
          {validationErrors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {validationErrors.subject}
            </p>
          )}
        </div>
        <div className={classDivField}>
          <label htmlFor="message" className={classLabel}>
            Message*
          </label>
          <textarea
            className={`${classInput} ${
              validationErrors.message && "border-red-500"
            }`}
            name="message"
            id="message"
            placeholder="Entrer votre message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
          />
          {validationErrors.message && (
            <p className="text-red-500 text-sm mt-1">
              {validationErrors.message}
            </p>
          )}
        </div>
        <div>
          <p className="text-xs italic text-zinc-500">* Champs obligatoires </p>
        </div>
        <div className="py-4 flex justify-end">
          <Button variant="linkCustom" type="submit">
            Envoyer
          </Button>
        </div>
      </form>
    </>
  );
}
