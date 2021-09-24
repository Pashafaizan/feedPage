import React from "react";
import { useDispatch } from "react-redux";
import "./header.css";
function Header() {
  const dispatch = useDispatch();

  return (
    <div className="header">
      <h1 id="feedpage">Feed Page</h1>
      <div className="sort_option">
        <label for="sort" id="sort_text">
          Sort
        </label>

        <select
          id="sort"
          onChange={(e) => {
            switch (e.target.value) {
              case "date":
                dispatch({ type: "DATE" });
                break;
              case "like":
                dispatch({ type: "LIKE" });
                break;
              case "view":
                dispatch({ type: "VIEW" });
                break;
              case "share":
                dispatch({ type: "SHARE" });
                break;
              default:
                dispatch({ type: "DATE" });
            }
          }}
        >
          <option value="date">Date</option>
          <option value="like">Like</option>
          <option value="view">Views</option>
          <option value="share">Share</option>
        </select>
      </div>
    </div>
  );
}

export default Header;
