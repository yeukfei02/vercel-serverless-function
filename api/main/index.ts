import { NowRequest, NowResponse } from '@vercel/node';

export default (req: NowRequest, res: NowResponse): void => {
  res.status(200).json({
    message: 'vercel serverless function',
  });
};
