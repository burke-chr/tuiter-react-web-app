import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "../ExploreComonent/ExploreComponent.js";

function exploreComponent() {
  $('#wd-explore').append(`
       <h2>Explore</h2>
    <div class="row mt-2">
   <div class="col col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2 mb-2">
    <!--<h3>NavigationSidebar</h3>-->
    ${NavigationSidebar()}
   </div>
   <div class="col col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6 mb-2">
    <!--<h3>ExploreComponent</h3>-->
    ${ExploreComponent()}
   </div>
   <div class="col col-lg-4 col-xl-4 col-xxl-4 mb-2 d-none d-lg-block">
    <!--<h3>WhoToFollowList </h3>-->
    ${WhoToFollowList()}
   </div>
  </div>

   `);
}

$(exploreComponent);