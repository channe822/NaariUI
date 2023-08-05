import React, { useEffect } from "react";
import complaint from "../assests/complaint.png";
import chat from "../assests/chat.png";
import laws from "../assests/laws.png";
import session from "../assests/session.png";
import counselling from "../assests/counselling.png";
import track from "../assests/track.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";


const Features = () => {
  const featureData = [
    {
      img: complaint,
      title: "File Complain",
      description: "File your complain with easy process",
      ref:"/complain"
    },
    {
      img: chat,
      title: "Chat",
      description: "Have one to one conversation with authority",
      ref:"/chat"
    },
    {
      img: track,
      title: "Track Complain",
      description: "Track your complain status",
      ref:"/track"
    },
    {
      img: laws,
      title: "Laws",
      description: "Learn about the laws of harassment",
      ref:"/laws"
    },
    {
      img: session,
      title: "Mentoring Sessions",
      description: `Information of the session conducted by NGOs`,
      ref:"/session"
    },
    {
      img: counselling,
      title: "Blogs",
      description: "Read Blogs to know more about others experiences ",
      ref:"/blogs"
    },
  ];

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div className="py-6 bg-black">
      <h2 className="text-white font-bold text-center text-3xl my-6">
        ASSISTANCE
      </h2>
      <div className="grid grid-cols-3 items-center gap-6 ">
        {featureData.map((features) => {
          return (
            <div className="mt-6 flex items-center flex-col cursor-pointer group ">
            <Link to={features.ref}>
              <img
                className="w-40 mx-auto "
                src={features.img}
                alt=""
                srcset=""
              />
              <h2 className="text-white font-bold text-2xl my-2 mx-auto text-center">
                {features.title}
              </h2>
              <p className="text-white font-light mx-4">
                {features.description}
              </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
