import React from "react";
import WhoToFollowListItem
  from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const whoArray = useSelector(
      (state) => state.who);
  return (
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