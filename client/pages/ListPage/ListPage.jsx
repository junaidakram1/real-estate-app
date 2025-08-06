import React from "react";
import { listData } from "../../src/lib/dummyData.js";
import Filter from "../../components/Filter/Filter.jsx";
import "./ListPage.scss";
import Card from "../../components/Card/Card.jsx";
import Map from "../../components/Map/Map.jsx";

const ListPage = () => {
  const data = listData;

  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />{" "}
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
