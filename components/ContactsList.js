import Contact from './Contact';

function ContactsList({ contacts }) {
  return (
    <ul
      role='list'
      className='md:divide-y divide-gray-200 h-fit overflow-y-auto border-b'
    >
      {contacts.map((contact) => (
        <Contact key={contact.id}>{contact.name}</Contact>
      ))}
    </ul>
  );
}

export default ContactsList;