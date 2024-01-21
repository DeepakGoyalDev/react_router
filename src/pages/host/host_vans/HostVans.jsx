import React from "react";
import { Link } from "react-router-dom";

const DATA = [
  {
    id: 1,
    name: "Modest Explorer",
    rate: 60,
    tag: "simple",
  },
  {
    id: 2,
    name: "Beach Bum",
    rate: 80,
    tag: "rugged",
  },
  {
    id: 3,
    name: "Reliable Red",
    rate: 100,
    tag: "luxury",
  },
  {
    id: 4,
    name: "Dreamfinder",
    rate: 65,
    tag: "simple",
  },
];

const HostVans = () => {
  return (
    <div className="vans-list">
      {DATA.map((item) => {
        return (
          <Link key={item.id} to={`${item.id}`}>
            <div className="vans-list-item"></div>
          </Link>
        );
      })}
    </div>
  );
};

export default HostVans;
