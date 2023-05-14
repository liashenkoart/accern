import React from "react";
import { Link } from "@reach/router";
import Icon from "../../components/icon";

import "./Courses.scss"

const CoursesBlock = ({ data, more }) => {

  return (
    <Link to={`/course/${data.id}`} className={`courses-block`}>
      <div className="courses-block-img" style={{ backgroundImage: `url(/assets/img/${data.img})` }}></div>
      <h2 className="text-medium fw-400 mt-2">{data.title}</h2>
      {more && data.description && <p>{data.description}</p>}
      {more &&
        <div className="courses-block-duration">
          <span className="d-flex align-items-center mr-3"><Icon className="mr-2" variant={data.level.toLowerCase()} />{data.level}</span>
          <span className="d-flex align-items-center"><Icon className="mr-2" variant="clock" />{data.duration}</span>
        </div>
      }
    </Link>
  );
}

export default CoursesBlock;