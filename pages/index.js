import PageLayout from '../components/PageLayout';
import PhoneBook from '../components/PhoneBook';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
  const contacts = await prisma.contact.findMany();
  return {
    props: {
      initialContacts: contacts,
    },
  };
}
