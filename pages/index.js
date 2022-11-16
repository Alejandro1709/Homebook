import PageLayout from '../components/PageLayout';
import PhoneBook from '../components/PhoneBook';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function Home({ initialContacts }) {
  return (
    <PageLayout title='Homebook | Home'>
      <section className='py-4'>
        <PhoneBook contacts={initialContacts} />
      </section>
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
