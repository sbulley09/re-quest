import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

export const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={8} defaultCenter={props.origin.data.results[0].geometry.location}>
      {props.isMarkerShown && <Marker position={props.origin.data.results[0].geometry.location} />}
    </GoogleMap>
  ))
);
