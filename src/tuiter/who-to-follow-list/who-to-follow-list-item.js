import React from "react";

const WhoToFollowListItem = (
    {
      who = {_id: 123, userName: 'NASA', handle: 'NASA', avatarIcon: 'NASA_logo.svg.webp'}
    }
) => {
  return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img className="rounded-circle" height={48}
                 src={`/images/${who.avatarIcon}`} alt={""}/>
          </div>
          <div className="col-8">
            <div className="fw-bold">{who.userName}
              <span>  <i className="fas fa-check-circle"/></span></div>
            <div>@{who.handle}</div>
          </div>
          <div className="col-2">
            <button className="btn btn-primary rounded-pill float-end">Follow
            </button>
          </div>
        </div>
      </li>
  );
};
export default WhoToFollowListItem;

// const WhoToFollowListItem = (
//     {
//       who = {avatarIcon: 'NASA_logo.svg.webp', handle: 'NASA', userName: 'NASA'}
//     }
// ) => {
//   return (`
//    <li class="list-group-item">
//           <div class="row">
//             <div class="col col-2">
//               <img src="../../images/${who.avatarIcon}"
//                    width="50px"
//                    height="50px"
//                    class="rounded-circle">
//             </div>
//             <div class="col col-8 ps-3">
//               <div class="row">
//                 <span class="fw-bold">
//                   ${who.userName}
//                   <i class="fas fa-check-circle"></i>
//                 </span>
//               </div>
//               <div class="row">
//                 <span>
//                   @${who.handle}
//                 </span>
//               </div>
//             </div>
//             <div class="col col-2">
//               <button class="btn btn-primary rounded-pill float-end wd-nudge-down-slightly">Follow
//               </button>
//             </div>
//           </div>
//         </li>
//  `);
// };
// export default WhoToFollowListItem;