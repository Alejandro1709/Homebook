import Head from 'next/head';

function PageLayout({
  title = 'Homebook',
  metaDesc = 'A Simple Webapp to store your contacts.',
  children,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={metaDesc} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='flex justify-center items-center text-center bg-gray-100 h-[100px]'>
        <div className='flex flex-col gap-[6px]'>
          <h1 className='text-4xl font-bold'>Homebook</h1>
          <p className='text-xl'>A Simple Web App to store your contacts.</p>
        </div>
      </header>

      <main className='max-w-screen-md mx-auto'>{children}</main>
    </>
  );
}

export default PageLayout;
