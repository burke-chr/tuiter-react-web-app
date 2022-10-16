const PostSummaryItem = (post) => {
  return (`
   <li class="list-group-item">
          <div class="row">
            <div class="col col-sm-9 col-10">
              <div class="row">
                <span class="text-secondary">
                  ${post.topic}
                </span>
              </div>
              <div class="row">
                <span class="fw-bold">${post.userName}
                  <i class="fas fa-check-circle"></i>
                  <span class="text-secondary fw-normal"> - ${post.time}</span>
                </span>
              </div>
              <div class="row">
                <span class="fw-bold">${post.title}
                </span>
              </div>
            </div>
            <div class="col col-sm-3 col-2">
              <img src="../../images/${post.image}"
                   class="float-end"
                   width="80px"/>
            </div>
          </div>
        </li>
 `);
}
export default PostSummaryItem;