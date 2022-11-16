import PageLayout from '../components/PageLayout';
import PhoneBook from '../components/PhoneBook';

export default function Home({ initialContacts }) {
  return (
    <PageLayout title='Homebook | Home'>
      <div className='max-w-screen-md mx-auto'>
        <section className='py-4'>
          <PhoneBook contacts={initialContacts} />
        </section>
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps() {
  const initialContacts = [
    {
      id: 1,
      name: 'John Doe',
      phone: '555-555-5555',
      email: 'john@mail.com',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
    },
    {
      id: 2,
      name: 'Jane Doe',
      phone: '555-555-5555',
      email: 'jane@mail.com',
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zip: '10001',
    },
  ];

  return {
    props: {
      initialContacts,
    },
  };
}
