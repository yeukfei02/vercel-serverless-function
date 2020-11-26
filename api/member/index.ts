import { NowRequest, NowResponse } from '@vercel/node';

export default (req: NowRequest, res: NowResponse): void => {
  const name = req.query.name;

  let result = null;
  const memberList = [
    {
      id: 1,
      name: 'test',
    },
    {
      id: 2,
      name: 'test2',
    },
  ];

  if (!name) {
    result = memberList;
  } else {
    result = memberList.filter((item: any, i: number) => {
      return item.name === name;
    });
  }

  res.status(200).json({
    message: 'get member',
    members: result,
  });
};
