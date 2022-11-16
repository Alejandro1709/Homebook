import Contact from './Contact';

function ContactsList() {
  return (
    <ul
      role='list'
      className='md:divide-y divide-gray-200 h-[225px] overflow-y-auto border-b'
    >
      <Contact>John Doe</Contact>
      <Contact>Jane Doe</Contact>
      <Contact>Tyler Joseph</Contact>
      <Contact>Joshua Dun</Contact>
      <Contact>Joshua Dun</Contact>
    </ul>
  );
}

export default ContactsList;
