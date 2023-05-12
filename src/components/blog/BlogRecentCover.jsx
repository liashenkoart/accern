import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import { randomFromInterval, dateFormat } from "../../utils/scripts";

import "./Blog.scss"
import { settings } from "../../data/settings";

const BlogRecentCover = ({ data, className, isShowDate, isRemoveLink }) => {

  const [datar, setDatar] = useState(data);

  useEffect(()=>{
    setDatar(data);
  }, [data])

  const renderRecent = () => {
    return <><div>
      {datar.title && <h2 className="text-title-white-sm mb-3 mw-600">{datar.title}</h2>}
      {datar.excerpt && <p className="text-light-sub text-white mw-500">{datar.excerpt}</p>}
    </div>
      <div className="blog-recent-cover-details">
        {datar.authors &&
          <div>
            <div><span className="text-light-sub op-08">{settings.texts.By}</span></div>
            <div><span className="text-medium-white">{datar.authors[0].name}</span></div>
          </div>
        }
        {datar.tags &&
          <div className="ml-5">
            <div><span className="text-light-sub op-08">{settings.texts.In}</span></div>
            <div><span className="text-medium-white">{datar.tags.map((tag, i)=>(i < datar.tags.length-1 ? `${tag.name}, ` : `${tag.name}`))}</span></div>
          </div>
        }
        {isShowDate && datar.published_at &&
          <div className="ml-5">
            <div><span className="text-light-sub op-08">{settings.texts.On}</span></div>
            <div><span className="text-medium-white">{dateFormat(datar.published_at, "dd mmm yyyy")}</span></div>
          </div>
        }
      </div></>
  }

  return (
    <div className={`blog-recent-cover ${className ? className : ""}`}>
      {datar ? datar.slug && !isRemoveLink ?
        <Link to={`/post/${datar.slug}`} className="blog-recent-cover-inner" style={{ backgroundImage: `url(${datar.feature_image})` }}>
          {renderRecent()}
        </Link> :
        <div className="blog-recent-cover-inner" style={{ backgroundImage: `url(${datar.feature_image})` }}>
          {renderRecent()}
        </div>
        : <></>
      }
    </div>
  );
}

export default BlogRecentCover;