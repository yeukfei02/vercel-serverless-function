import { NowRequest, NowResponse } from '@vercel/node';

export default (req: NowRequest, res: NowResponse): void => {
  const id = parseInt(req.query.id as string, 10);

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

  if (id) {
    const member = memberList.filter((item: any, i: number) => {
      return item.id === id;
    });

    if (member) {
      res.status(200).json({
        message: 'get member by id',
        member: member[0] || {},
      });
    } else {
      res.status(200).json({
        message: 'get member by id',
        member: {},
      });
    }
  }
};
