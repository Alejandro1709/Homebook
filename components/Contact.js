function Contact({ children }) {
  return (
    <li className='flex flex-row justify-between items-center py-4 px-8 cursor-pointer hover:bg-gray-200'>
      {children}
    </li>
  );
}

export default Contact;
