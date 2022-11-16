function Contact({ children }) {
  return (
    <li className='flex flex-row justify-between items-center py-4 px-8'>
      {children}
    </li>
  );
}

export default Contact;
