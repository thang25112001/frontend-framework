import React from "react";
import AlbumItem from "../AlbumsItem";

const Albums = ({ data, onDelete }) => {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {data.map((albums, index) => {
            return <AlbumItem key={index} data={albums} onDelete={onDelete} />
          })}

        </div>
      </div>
    </div>
  );
};

export default Albums;