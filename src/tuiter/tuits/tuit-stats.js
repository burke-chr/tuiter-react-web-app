import React from "react";
import {
  Chat,
  Recycle,
  HeartFill,
  Heart,
  Share,
  ArrowDown,
  ArrowDownSquareFill
} from "react-bootstrap-icons";
import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
      tuit = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "spacex.png",
        "liked": true,
        "disliked": false,
        "dislikes": 127,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {
  const dispatch = useDispatch();
  return (
      <div className="row">
        <div className="col-2 float-start">
          <span><Chat/></span> {tuit.replies}
        </div>
        <div className="col-2 float-start">
          <span>{tuit.liked === true ?
              <HeartFill color="red"
                         onClick={() => dispatch(
                             updateTuitThunk({
                               ...tuit,
                               likes: tuit.likes - 1,
                               liked: false
                             }))}/> :
              <Heart onClick={() => dispatch(
                  updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1,
                    liked: true
                  }))}/>}</span> {tuit.likes}
        </div>
        <div className="col-2 float-start">
          <span><Recycle/></span> {tuit.retuits}
        </div>
        <div className="col-2 float-start">
          <span>{tuit.disliked === true ?
              <ArrowDownSquareFill color="red"
                                   onClick={() => dispatch(
                                       updateTuitThunk({
                                         ...tuit,
                                         dislikes: tuit.dislikes - 1,
                                         disliked: false
                                       }))}/> :
              <ArrowDown onClick={() => dispatch(
                  updateTuitThunk({
                    ...tuit,
                    dislikes: tuit.dislikes + 1,
                    disliked: true
                  }))}/>}</span> {tuit.dislikes}
        </div>
        <div className="col-2 float-start">
          <span><Share/></span>
        </div>
      </div>
  );
};

export default TuitStats;