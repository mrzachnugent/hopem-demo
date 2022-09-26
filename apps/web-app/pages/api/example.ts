import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@hopem/db';

// import Redis from 'ioredis'
// let redis = new Redis(process.env.REDIS_URL)

const example = async (_req: NextApiRequest, res: NextApiResponse) => {
  // const count = await redis.incr('counter')
  // res.status(200).json({ count })

  const posts = await prisma.post.findMany();
  res.status(200).json(posts);
};

export default example;
