import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../data";

const Id = ({ setIsHome }) => {
  const { route } = useParams();
  const projects = data.repos;
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    setIsHome(false);
    console.log(projects.subname);
  });
  return <div>{route}</div>;
};

export default Id;
