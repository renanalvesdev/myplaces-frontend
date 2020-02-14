import React from "react";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/util/validators";
import "./PlaceForm.css";

import { useParams } from "react-router-dom";

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

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place !</h2>
      </div>
    );
  }

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="title"
        element="textarea"
        type="text"
        label="Description"
        validators={[VALIDATOR_MINLENGTH()]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />

      <Button type="submit" disabled={true} UPDATE PLACE></Button>
    </form>
  );
};

export default UpdatePlace;
