import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";
import Button from "../../shared/components/FormElements/Button";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Build",
    description: "Lugar top master",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipP6DUOn5UGrHCK2HtNrTcIS18LAbjKPC2kWEyi5=w408-h271-k-no",
    address: "20 W 34th St, New York, NY 10001, Estados Unidos",
    coordinates: {
      lat: 40.7477445,
      lng: -73.9881647
    },
    creator: "u1"
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
