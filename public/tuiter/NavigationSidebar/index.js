const NavigationSidebar = () => {
  return (`
   <div class="list-group">
        <a href="#"
           class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col col-2">
              <i class="fab fa-twitter"></i>
            </div>
            <div class="col col-10">
            </div>
          </div>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col col-2">
              <i class="fas fa-home"></i>
            </div>
            <div class="col col-10 d-none d-xl-block">
              Home
            </div>
          </div>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action active">
          <div class="row">
            <div class="col col-2">
              <i class="fas fa-hashtag"></i>
            </div>
            <div class="col col-10 d-none d-xl-block">
              Explore
            </div>
          </div>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col col-2">
              <i class="fas fa-bell"></i>
            </div>
            <div class="col col-10 d-none d-xl-block">
              Notifications
            </div>
          </div>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col col-2">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="col col-10 d-none d-xl-block">
              Messages
            </div>
          </div>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col col-2">
              <i class="fas fa-bookmark"></i>
            </div>
            <div class="col col-10 d-none d-xl-block">
              Bookmarks
            </div>
          </div>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col col-2">
              <i class="fas fa-list"></i>
            </div>
            <div class="col col-10 d-none d-xl-block">
              Lists
            </div>
          </div>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col col-2">
              <i class="fas fa-user"></i>
            </div>
            <div class="col col-10 d-none d-xl-block">
              Profile
            </div>
          </div>
        </a>
        <a href="#"
           class="list-group-item list-group-item-action">
          <div class="row">
            <div class="col col-2">
              <i class="fas fa-circle"></i>
            </div>
            <div class="col col-10 d-none d-xl-block">
              More
            </div>
          </div>
        </a>
      </div>
      <button class="btn btn-primary rounded-pill mt-1 w-100">
        Tuit
      </button>
 `);
}
export default NavigationSidebar;