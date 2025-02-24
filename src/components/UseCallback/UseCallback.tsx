// objetivo: se utiliza para memorizar una instancia de una función
// hace que un hijo no renderice

import { useCallback } from "react";

// Si tenemos un número que se llame con frecuencia
// En vez de marcarlo continuamente se guarda en contactos
// A menos que el número cambie siempre se utiliza el mismo contacto

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface ContactProps {
  contact: Contact;
  onCall: (phone: string) => void;
}

const ContactCard = ({ contact, onCall }: ContactProps) => {
  console.log(`Renderizar contacto ${contact.name}`);
};
