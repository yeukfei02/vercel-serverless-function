import { NowRequest, NowResponse } from '@vercel/node';
import { getDB } from '../../common/common';

const db = getDB();

export default (req: NowRequest, res: NowResponse) => {
  const id = req.query.id;

  if (id) {
    const memberListStr = db.getItem('member');
    if (memberListStr) {
      const memberList = JSON.parse(memberListStr);
      if (memberList) {
        const member = memberList.filter((item: any, i: number) => {
          return item.id === id;
        });

        res.status(200).json({
          message: 'get member by id',
          member: member[0] || {},
        });
      }
    } else {
      res.status(200).json({
        message: 'get member by id',
        member: {},
      });
    }
  }
};
