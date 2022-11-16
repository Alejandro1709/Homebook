import { useRouter } from 'next/router';

function ContactPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>Contact {id}</div>;
}

export default ContactPage;
