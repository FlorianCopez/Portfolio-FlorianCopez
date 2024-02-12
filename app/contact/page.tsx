/* eslint-disable react/no-unescaped-entities */

import ContactForm from "@/components/contact-form";

export default function Contact() {
  return (
    <section className="py-4 px-32">
      <div className="mb-8 text-center">
        <h2 className="text-sky-950 text-4xl font-bold mb-4 uppercase">
          Contactez moi !
        </h2>
        <span className="font-semibold text-zinc-500 italic">
          Si mon profil suscite votre intérêt et que vous souhaitez collaborer,
          n'hésitez pas à me contacter. Je suis ouvert aux opportunités
          passionnantes qui peuvent surgir.
        </span>
      </div>
      <ContactForm />
    </section>
  );
}
