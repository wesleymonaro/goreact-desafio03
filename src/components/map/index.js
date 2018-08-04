import React, { Component } from "react";
import MapGL, { Marker } from "react-map-gl";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import "mapbox-gl/dist/mapbox-gl.css";

import { Avatar } from './styles';

import { Creators as UserActions } from '../../store/ducks/users';

const MAP_BOX_TOKEN = 'pk.eyJ1Ijoid2VzbGV5bW9uYXJvIiwiYSI6ImNqa2RhbWw0YzBoeHUzd3FtcHZpaTY4bjIifQ.lYSOeUucWfHFNpxXhwEIaA';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  };

  handleMapClick = (e) => {
    const [latitude, longitude] = e.lngLat;

    console.log(this.props);

    this.props.openModalRequest([longitude, latitude,]);
  }

  render() {
    const { users } = this.props;
    console.log(users)
    return (
      <MapGL
        {...this.state.viewport}
        onClick={this.handleMapClick}
        mapStyle="mapbox://styles/mapbox/basic-v9"
        mapboxApiAccessToken={MAP_BOX_TOKEN}
        onViewportChange={viewport => this.setState({ viewport })}
      >
      {
        users.map(user => (
          <Marker
            latitude={user.coordinates.lat}
            longitude={user.coordinates.lon}
            onClick={this.handleMapClick}
            captureClick={true}
            key={user.login}
          >
            <Avatar
              src={user.avatar}
            />
          </Marker>
        ))
      }
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
        />
        {/* Same as */}
      <ToastContainer />
      </MapGL>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.data
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
