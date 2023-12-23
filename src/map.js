import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

function Gmap() {
  // const containerStyle = {
  //   width: "400px",
  //   height: "400px",
  // };

  // const center = {
  //   lat: 10.959815,
  //   lng: 79.380898,
  // };

  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: "AIzaSyC8pqTf1lW0H1LQXibbVfgoTwn_36lcM3Q",
  // });

  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback(function callback(map) {
  //   // This is just an example of getting and using the map instance!!! don't just blindly copy!
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);

  //   setMap(map);
  // }, []);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, []);

  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62672.23690922409!2d79.32686664103858!3d10.962253801956095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5532b360353419%3A0x9ecb5d94413ad35!2sKumbakonam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703244713116!5m2!1sen!2sin"
      style={{ width: "600", height: "450" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
  //  isLoaded ? (
  //   <GoogleMap
  //     mapContainerStyle={containerStyle}
  //     center={center}
  //     zoom={10}
  //     onLoad={onLoad}
  //     onUnmount={onUnmount}
  //   >
  //     {/* Child components, such as markers, info windows, etc. */}
  //     <></>
  //   </GoogleMap>
  // ) : (
  //   <></>
  // );
}

export default Gmap;
