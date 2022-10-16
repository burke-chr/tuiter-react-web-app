const WhoToFollowListItem = (who) => {
  return (`
   <li class="list-group-item">
          <div class="row">
            <div class="col col-2">
              <img src="../../images/${who.avatarIcon}"
                   width="50px"
                   height="50px"
                   class="rounded-circle">
            </div>
            <div class="col col-8 ps-3">
              <div class="row">
                <span class="fw-bold">
                  ${who.userName}
                  <i class="fas fa-check-circle"></i>
                </span>
              </div>
              <div class="row">
                <span>
                  @${who.handle}
                </span>
              </div>
            </div>
            <div class="col col-2">
              <button class="btn btn-primary rounded-pill float-end wd-nudge-down-slightly">Follow
              </button>
            </div>
          </div>
        </li>
 `);
}
export default WhoToFollowListItem;