// objetivo: se utiliza para memorizar una instancia de una función
// hace que un hijo no renderice

import { useCallback, useState } from "react";

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

  return (
    <div>
      <h3>{contact.name}</h3>
      <p>Teléfono: {contact.phone}</p>
      <button onClick={() => onCall(contact.phone)}>Llamar</button>
    </div>
  );
};

export const PhoneBook = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: "Manzana", phone: "123" },
    { id: 2, name: "Pera", phone: "345" },
    { id: 3, name: "Banana", phone: "678" },
  ]);

  const [log, setLog] = useState<string>("");

  const makeCall = useCallback(
    (phone: string) => setLog(`Llamadando al ${phone}`),
    [],
  );

  const addContact = () => {
    const newContact = {
      id: contacts.length + 1,
      name: `Contacto ${contacts.length + 1}`,
      phone: `${Math.floor(100000000 + Math.random() * 90000000)}`,
    };
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h2>Agenda de contacto</h2>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
      ))}
      <button onClick={addContact}></button>
      <p>{log}</p>
    </div>
  );
};
