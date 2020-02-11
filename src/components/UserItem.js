import React from "react";
import "./UserItem.css";

function UserItem({ title, last, first, image }) {
  return (
    <article className="card_container">
      <figure className="card">
        <img src={image} alt="avatar" />
        <figcaption>
          {title} {first} {last}
        </figcaption>
      </figure>
    </article>
  );
}

export default UserItem;
