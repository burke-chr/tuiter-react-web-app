import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
  return (`
            <div class="row">
        <div class="col col-11">
          <input placeholder="Search Tuiter"
                 class="form-control rounded-pill ps-5">
          <span class="wd-nudge-up-and-right">
          <i class="fas fa-search position-absolute"></i>
          </span>
        </div>
        <div class="col col-1 float-end">
          <i class="fas fa-cog fa-2x text-primary"></i>
        </div>
      </div>
      <ul class="nav nav-tabs mt-2">
        <li class="nav-item">
          <a class="nav-link active" href="#">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
          <a class="nav-link" href="#">Entertainment</a>
        </li>
      </ul>
      <img src="../../images/spacex-starship.webp" alt="SpaceX's Starship"
           class="w-100"/>
      <h2 class="text-white position-relative wd-nudge-up-and-left">SpaceX's Starship</h2>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
