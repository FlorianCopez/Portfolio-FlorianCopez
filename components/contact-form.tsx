"use client";

import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import FlashMessage from "./flash-message";
import isEmail from "validator/lib/isEmail";

/**
 * Represents the form data for the contact form.
 * @interface FormData
 */
interface FormData {
  name: string;
  email: string;
  message: string;
  subject: string;
  [key: string]: string;
}

/**
 * ContactForm component for displaying and handling the contact form.
 * @returns {JSX.Element} JSX element representing the ContactForm.
 */
export default function ContactForm() {
  // Initial form data and state variables
  const initialFormData: FormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  // State to manage form data
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // State for displaying flash messages
  const [flashMessage, setFlashMessage] = useState<{
    status: string;
    message: string;
  } | null>(null);

  // State to track whether the form has been submitted
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // State for validation errors in form fields
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  // Function to validate individual form field
  const validateField = (fieldName: string, value: string): string => {
    switch (fieldName) {
      case "name":
        return value.trim() !== "" ? "" : "Votre nom est obligatoire";
      case "email":
        return isEmail(value) ? "" : "L'email est obligatoire";
      case "subject":
        return value.trim() !== "" ? "" : "L'objet est obligatoire";
      case "message":
        return value.trim() !== "" ? "" : "Le message est obligatoire";
      default:
        return "";
    }
  };

  // Function to validate the entire form
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

  // Event handler for input changes
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

  // Event handler for form submission
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
            message: response.data.message,
          });
          setFormData(initialFormData);
        } else {
          setFlashMessage({
            status: "Warning",
            message: "Échec de l'envoi de l'email. Veuillez réessayer.",
          });
        }
      } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
          setFlashMessage({
            status: "Error",
            message: error.response.data.message,
          });
        } else {
          setFlashMessage({
            status: "Error",
            message:
              "Une erreur inconnue s'est produite lors de l'envoi de l'email.",
          });
        }
      }
    }
  };

  // CSS classes for styling
  const classDivField = "flex flex-col space-y-1";
  const classLabel = "font-semibold";
  const classInput =
    "px-3 py-2 border rounded-md text-sm shadow-sm placeholder-zinc-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none";

  return (
    <>
      {/* Display flash message if available */}
      {flashMessage && (
        <FlashMessage
          status={flashMessage.status}
          message={flashMessage.message}
        />
      )}

      {/* Contact form */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        {/* Name field */}
        <div className={classDivField}>
          <label htmlFor="name" className={classLabel}>
            Nom*
          </label>
          <input
            className={`${classInput} ${
              validationErrors.email && "border-red-500"
            }`}
            type="text"
            id="name"
            name="name"
            placeholder="Entrer votre nom"
            autoComplete="off"
            required
            value={formData.name}
            onChange={handleChange}
          />
          {validationErrors.name && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
          )}
        </div>

        {/* email field */}
        <div className={classDivField}>
          <label htmlFor="email" className={classLabel}>
            Email*
          </label>
          <input
            className={`${classInput} ${
              validationErrors.email && "border-red-500"
            }`}
            type="email"
            id="email"
            name="email"
            placeholder="Entrer votre email"
            autoComplete="off"
            required
            value={formData.email}
            onChange={handleChange}
          />
          {validationErrors.name && (
            <p className="text-red-500 text-sm mt-1">{validationErrors.name}</p>
          )}
        </div>

        {/* Subject field */}
        <div className={classDivField}>
          <label htmlFor="subject" className={classLabel}>
            Objet du message*
          </label>
          <input
            className={`${classInput} ${
              validationErrors.subject && "border-red-500"
            }`}
            type="text"
            id="subject"
            name="subject"
            placeholder="Entrer l'objet de votre message"
            autoComplete="off"
            required
            value={formData.subject}
            onChange={handleChange}
          />
          {validationErrors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {validationErrors.subject}
            </p>
          )}
        </div>

        {/* Message field */}
        <div className={classDivField}>
          <label htmlFor="message" className={classLabel}>
            Message*
          </label>
          <textarea
            className={`${classInput} ${
              validationErrors.message && "border-red-500"
            }`}
            id="message"
            name="message"
            placeholder="Entrer votre message"
            required
            autoComplete="off"
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

        {/* Additional information */}
        <div>
          <p className="text-xs italic text-zinc-500">* Champs obligatoires </p>
        </div>

        {/* Submit button */}
        <div className="py-4 flex justify-end">
          <Button variant="linkCustom" type="submit">
            Envoyer
          </Button>
        </div>
      </form>
    </>
  );
}
