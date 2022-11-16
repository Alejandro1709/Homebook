import PageLayout from '../components/PageLayout';

export default function Home() {
  return (
    <PageLayout title='Homebook | Home'>
      <div className='max-w-screen-md mx-auto'>
        <section className='py-4'>
          <div className='bg-white md:shadow-md md:rounded-md'>
            <header className='flex flex-row justify-between mx-8 border-b pb-2 md:border-0 select-none'>
              <button>Edit</button>
              <h2 className='text-2xl font-semibold text-gray-800'>My List</h2>
              <button>New</button>
            </header>
            {/* SearchBar? */}
            <ul
              role='list'
              className='md:divide-y divide-gray-200 h-[225px] overflow-y-auto border-b'
            >
              <li className='flex flex-row justify-between items-center py-4 px-8'>
                John Doe
              </li>
              <li className='flex flex-row justify-between items-center py-4 px-8'>
                Jane Doe
              </li>
              <li className='flex flex-row justify-between items-center py-4 px-8'>
                Tyler Joseph
              </li>
              <li className='flex flex-row justify-between items-center py-4 px-8'>
                Joshua Dun
              </li>
              <li className='flex flex-row justify-between items-center py-4 px-8'>
                Joshua Dun
              </li>
            </ul>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
