import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
      active = 'tuiter'
    }
) => {
  return (
      <div className="list-group">
        <Link href="#" className="list-group-item">
          <span><i className="fab fa-twitter"/></span></Link>
        <Link to="/tuiter" href="#" className={`list-group-item
                    ${active === 'tuiter' ? 'active' : ''}`}>
          <span><i className="fas fa-home"/> </span>   Home
        </Link>
        <Link to="/tuiter/explore"  href="#" className={`list-group-item
                    ${active === 'explore' ? 'active' : ''}`}>
          <span><i className="fas fa-hashtag"/> </span>   Explore
        </Link>
        <Link to="/tuiter/notifications"  href="#" className={`list-group-item
                    ${active === 'notifications' ? 'active' : ''}`}>
          <span><i className="fas fa-bell"/> </span>   Notifications
        </Link>
        <Link to="/tuiter/messages"  href="#" className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`}>
          <span><i className="fas fa-envelope"/> </span>   Messages
        </Link>
        <Link to="/tuiter/bookmarks"  href="#" className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`}>
          <span><i className="fas fa-bookmark"/> </span>   Bookmarks
        </Link>
        <Link to="/tuiter/lists"  href="#" className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`}>
          <span><i className="fas fa-list"/> </span>   Lists
        </Link>
        <Link to="/tuiter/profile"  href="#" className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
          <span><i className="fas fa-user"/> </span>   Profile
        </Link>
        <Link to="/tuiter/more"  href="#" className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
          <span><i className="fas fa-circle"/> </span>   More
        </Link>
      </div>
  );
};
export default NavigationSidebar;