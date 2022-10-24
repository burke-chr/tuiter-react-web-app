import NavigationSidebar
  from "./navigation-sidebar";
import {Route, Routes} from "react-router";
import Notifications from "./notifications";
import Messages from "./messages";
import Bookmarks from "./bookmarks";
import Lists from "./lists";
import Profile from "./profile";
import More from "./more";
import WhoToFollowList from "./who-to-follow-list/who-to-follow-list";
import ExploreComponent from "./explore";

function Tuiter() {
  return (
      <div>
        <div className="row mt-3">
          <div
              className="col col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
            <NavigationSidebar active="explore"/>
          </div>
          <div
              className="col col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6"
              style={{"position": "relative"}}>
            <Routes>
              <Route index element={<ExploreComponent/>}/>
              <Route path="explore" element={<ExploreComponent/>}/>
              <Route path="notifications" element={<Notifications/>}/>
              <Route path="messages" element={<Messages/>}/>
              <Route path="bookmarks" element={<Bookmarks/>}/>
              <Route path="lists" element={<Lists/>}/>
              <Route path="profile" element={<Profile/>}/>
              <Route path="more" element={<More/>}/>
            </Routes>
          </div>
          <div
              className="col col-lg-4 col-xl-4 col-xxl-4 mb-2 d-none d-lg-block">
            <WhoToFollowList/>
          </div>
        </div>
      </div>
  )
}

export default Tuiter