import React, { useState } from "react";
import Repository from "./Repository";

const RepositoriesList = ({ repositories }) => {
  const [selected, setSelected] = useState(null);
  const list = repositories.map((item, index) => (
    <Repository
      key={index}
      repository={item}
      selected={selected}
      getSelected={setSelected}
    />
  ));

  return <div>{list}</div>;
};
export default RepositoriesList;
