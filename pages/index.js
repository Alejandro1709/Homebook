import PageLayout from '../components/PageLayout';
import PhoneBook from '../components/PhoneBook';

export default function Home() {
  return (
    <PageLayout title='Homebook | Home'>
      <div className='max-w-screen-md mx-auto'>
        <section className='py-4'>
          <PhoneBook />
        </section>
      </div>
    </PageLayout>
  );
}
