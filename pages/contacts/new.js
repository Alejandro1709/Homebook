import { useState } from 'react';
import { useRouter } from 'next/router';
import PageLayout from '../../components/PageLayout';

function NewContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  });

  const router = useRouter();

  async function saveContact(contact) {
    const response = await fetch('/api/contacts', {
      method: 'POST',
      body: JSON.stringify(contact),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await saveContact(formData);
    router.push('/');
  }

  return (
    <PageLayout title='Homebook | New'>
      <section className='flex flex-col gap-2 mt-[20px]'>
        <h1 className='text-4xl font-bold'>New Contact</h1>
        <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2'>
            <label htmlFor='name'>Name</label>
            <input
              className='p-2 border'
              type='text'
              name='name'
              id='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='phone'>Phone</label>
            <input
              className='p-2 border'
              type='text'
              name='phone'
              id='phone'
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='email'>Email</label>
            <input
              className='p-2 border'
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='address'>Address</label>
            <input
              className='p-2 border'
              type='text'
              name='address'
              id='address'
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='city'>City</label>
            <input
              className='p-2 border'
              type='text'
              name='city'
              id='city'
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='state'>State</label>
            <input
              className='p-2 border'
              type='text'
              name='state'
              id='state'
              value={formData.state}
              onChange={handleChange}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='zip'>Zip</label>
            <input
              className='p-2 border'
              type='number'
              name='zip'
              id='zip'
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
          <button
            className='bg-blue-500 text-white p-2 hover:bg-blue-600 mt-4'
            type='submit'
          >
            Save Contact
          </button>
        </form>
      </section>
      {/* <ContactForm /> */}
    </PageLayout>
  );
}

export default NewContactPage;
