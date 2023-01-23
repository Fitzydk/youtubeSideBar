// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<JSON>
) {
  const reqData = JSON.stringify(req.body)
  const jsonDirectory = path.join(process.cwd(), 'json');
  fs.writeFile(jsonDirectory + '/content.json', reqData, (err: any) => {
    if (err)
      throw(err);
  });
  res.status(200)
}
