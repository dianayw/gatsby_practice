import React from "react";
import { Loader } from "@googlemaps/js-api-loader";

const mapDivStyles = {
  height: 600,
  width: "100%",
};

const Map = () => {
  const loader = new Loader({
    apiKey: "AIzaSyCTPrQJK-VE4UKIavwG41HkRXbJFpT3Ngw",
    version: "weekly",
    libraries: ["places"],
  });
  const mapOptions = {
    center: {
      lat: -33.86981,
      lng: 151.207347,
    },
    zoom: 20,
  };
  loader
    .load()
    .then((google) => {
      const map = new google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );
      new google.maps.Marker({
        position: mapOptions.center,
        map: map,
      });
    })
    .catch((e) => {
      console.log(e);
    });
  return (
    <>
      <div className="mapDiv" style={mapDivStyles} id="map"></div>
    </>
  );
};
export default Map;
