import { NowRequest, NowResponse } from '@vercel/node';

export default (req: NowRequest, res: NowResponse): void => {
  const body = req.body;

  if (body) {
    const name = body.name;
    if (name) {
      res.status(201).json({
        message: 'create member',
        name: name,
      });
    } else {
      res.status(400).json({
        message: 'create member error, please enter name',
      });
    }
  } else {
    res.status(400).json({
      message: 'create member error, please enter body',
    });
  }
};
