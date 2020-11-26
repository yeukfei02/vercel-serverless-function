import { NowRequest, NowResponse } from '@vercel/node';
import { getDB } from '../../common/common';

const db = getDB();

export default (req: NowRequest, res: NowResponse) => {
  const name = req.query.name;

  const memberListStr = db.getItem('member');

  if (memberListStr) {
    let memberList = [];

    if (!name) {
      memberList = JSON.parse(memberListStr);
    } else {
      const memberListFromDB = JSON.parse(memberListStr);
      memberList = memberListFromDB.filter((item: any, i: number) => {
        return item.name === name;
      });
    }

    res.status(200).json({
      message: 'get member',
      members: memberList,
    });
  } else {
    res.status(200).json({
      message: 'get member',
      members: [],
    });
  }
};
