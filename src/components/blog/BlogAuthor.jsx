import React, { useState } from "react";
import { Link } from "@reach/router";
import Icon from "../icon";

import "./Blog.scss"
import { settings } from "../../data/settings";

const BlogAuthor = ({ data, className }) => {

  console.log(data)

  return (
    <div className={`blog-author ${className ? className : ""}`}>
      {data &&
        <>
          <Link to={`/bio/${data[0].slug}`} className="blog-author-details">
            {data[0].profile_image &&
              <div>
                <img className="blog-author-img" src={`${data[0].profile_image}`} alt="" />
              </div>
            }
            <div>
              <h3>{data[0].name}</h3>
              <p className="mb-0">{data[0].bio}</p>
            </div>
          </Link>
          <div className="blog-author-socials">
            {data[0].twitter && <a href={data[0].twitter} target="_blank"><Icon variant="icon-twitter" /></a>}
            {data[0].facebook && <a href={data[0].facebook} target="_blank"><Icon variant="icon-facebook" /></a>}
            {data[0].website && <a href={data[0].website} target="_blank"><Icon variant="icon-linkedin" /></a>}
          </div>
        </>
      }
    </div>
  );
}

export default BlogAuthor;