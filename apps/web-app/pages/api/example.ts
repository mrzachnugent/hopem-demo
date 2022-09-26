import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@hopem/db';

const example = async (_req: NextApiRequest, res: NextApiResponse) => {
  const posts = await prisma.post.findMany();
  res.status(200).json(posts);
};

export default example;
