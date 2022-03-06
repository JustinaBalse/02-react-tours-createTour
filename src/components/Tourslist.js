import React, { useState, useEffect } from "react";
import { getAllTours } from "../api/lib/tourAPI";
import TourCard from "./TourCard";

function ToursList() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    getAllTours().then((res) => {
      console.log(res.data.data.tours);
      setTours(res.data.data.tours);
    });
  }, []);

  let toursList = tours.map((tour) => {
    return (
      <TourCard
        key={tour._id}
        name={tour.name}
        difficulty={tour.difficulty}
        duration={tour.duration}
      />
    );
  });

  return <>{toursList}</>;
}

export default ToursList;
