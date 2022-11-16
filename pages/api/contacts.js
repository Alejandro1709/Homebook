import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const contactData = JSON.parse(req.body);

  const savedContact = await prisma.contact.create({
    data: contactData,
  });

  res.json(savedContact);
};
