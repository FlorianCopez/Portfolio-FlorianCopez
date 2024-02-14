import ContactForm from "@/components/contact-form";
import TitlePage from "@/components/title-page";

/**
 * Contact page component.
 * Displays a title section and a contact form.
 * @returns {JSX.Element} JSX element representing the Contact page.
 */
export default function Contact() {
  return (
    <section>
      {/* Title and subtitle section */}
      <TitlePage
        title="Contact"
        subtitle="Si mon profil suscite votre intérêt et que vous souhaitez collaborer,
          n'hésitez pas à me contacter. Je suis ouvert aux opportunités
          passionnantes qui peuvent surgir."
      />
      {/* Render the ContactForm component */}
      <ContactForm />
    </section>
  );
}
