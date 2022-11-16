import Link from 'next/link';

function Contact({ children, contactId }) {
  return (
    <Link href={`/contacts/${contactId}`}>
      <li className='flex flex-row justify-between items-center py-4 px-8 cursor-pointer hover:bg-gray-200'>
        {children}
      </li>
    </Link>
  );
}

export default Contact;
