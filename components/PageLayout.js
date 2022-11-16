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
      <main className='h-screen'>{children}</main>
    </>
  );
}

export default PageLayout;
