/* eslint-disable react/no-unescaped-entities */

import ContactForm from "@/components/contact-form";
import TitlePage from "@/components/title-page";

export default function Contact() {
  return (
    <section>
      <TitlePage
        title="Contact"
        subtitle="Si mon profil suscite votre intérêt et que vous souhaitez collaborer,
          n'hésitez pas à me contacter. Je suis ouvert aux opportunités
          passionnantes qui peuvent surgir."
      />
      <ContactForm />
    </section>
  );
}
