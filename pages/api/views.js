import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    return await createView(req, res);
  }
}

async function createView(req, res) {
  const body = req.body;
  try {
    const newEntry = await prisma.view.create({
      data: {},
    });
    return res.status(200).json(newEntry['id'], { success: true });
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error creating view', success: false });
  }
}
