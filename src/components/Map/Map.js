import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.701599,
      lng: -79.397429
    },
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyApsvM47e-6-VPQ8QjZSLfF57tt9BbgNGc' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
  
          <AnyReactComponent className=""
            lat={43.701599}
            lng={-79.397429}
            text="St. Loius"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;