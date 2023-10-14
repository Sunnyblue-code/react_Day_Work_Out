import { useEffect } from "react";
// import axios from "axios";
import React from "react";

const HTTPREQUEST = () => {
  const apis = "https://jsonplaceholder.typicode.com/posts";
  //Using fetch request

  //   useEffect(() => {
  //     fetch(apis)
  //       .then((e) => e.json().then((data) => console.log(data)))
  //       .catch((err) => console.log(err));
  //   }, []);

  // Using axios request
  // useEffect(() => {
  //   axios
  //     .get(apis)
  //     .then((data) => {
  //       console.log(data);
  //     })
  //     .catch((err) => console(err));
  // }, []);

  //making use of Async Await

  useEffect(() => {
    const res = async () => {
      try {
        const req = await fetch(apis);
        const load = await req.json();
        const result = load;
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    res();
  }, []);
  return (
    <div>
      <h1>Hellot Http using useEffect</h1>
    </div>
  );
};

export default HTTPREQUEST;
