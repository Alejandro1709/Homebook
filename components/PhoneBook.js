import ContactsList from './ContactsList';

function PhoneBook() {
  return (
    <div className='bg-white md:shadow-md md:rounded-md'>
      <header className='flex flex-row justify-between mx-8 border-b pb-2 md:border-0 select-none'>
        <button>Edit</button>
        <h2 className='text-2xl font-semibold text-gray-800'>My List</h2>
        <button>New</button>
      </header>
      {/* SearchBar? */}
      <ContactsList />
    </div>
  );
}

export default PhoneBook;
