import { NowRequest, NowResponse } from '@vercel/node';
import { v4 as uuidv4 } from 'uuid';
import { getDB } from '../../common/common';

const db = getDB();

export default (req: NowRequest, res: NowResponse) => {
  const body = req.body;

  if (body) {
    const name = body.name;
    if (name) {
      const memberListStr = db.getItem('member');
      if (memberListStr) {
        const memberList = JSON.parse(memberListStr);
        const obj = {
          id: uuidv4(),
          name: name,
        };
        memberList.push(obj);

        db.setItem('member', JSON.stringify(memberList));
      } else {
        const memberList = [];
        const obj = {
          id: uuidv4(),
          name: name,
        };
        memberList.push(obj);
        db.setItem('member', JSON.stringify(memberList));
      }

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
