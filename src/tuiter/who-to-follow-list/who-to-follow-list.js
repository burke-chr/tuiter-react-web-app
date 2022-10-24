import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem
  from "./who-to-follow-list-item";

const WhoToFollowList = () => {
  return(
      <ul className="list-group">
        <li className="list-group-item">
          <div className="fw-bold">Who to Follow</div>
        </li>
        {
          whoArray.map(who =>
              <WhoToFollowListItem
                  key={who._id}
                  who={who}/>
          )
        }
      </ul>
  );
};

export default WhoToFollowList;