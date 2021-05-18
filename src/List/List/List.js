import React from "react";
import ListItem from "../ListItem/ListItem";

function List(props) {
  const renderList = () => {
    return props.data[0].map((key) => {
      return <ListItem key={key.recipe_id} recipe={key} />;
    });
  };
  return (
    <main>
      <ul className="recipe-list">{renderList()}</ul>
    </main>
  );
}

export default List;
