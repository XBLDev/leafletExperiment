import React from 'react';
import PropTypes from 'prop-types';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gettingData: true,
      myip: '',
      lat: -1,
      lng: -1,
      zoom: 13
    }      
  }

  componentWillMount()
  {

    var xhr = new XMLHttpRequest();

    xhr.open('get', 'https://api.ipify.org');

    xhr.addEventListener('load', () => {
          console.log(xhr.response);
          this.setState({myip: xhr.response});
      // }
    });
    xhr.send();    
  }  

  componentWillUnmount() 
  {
  }

  componentDidMount() 
  {
    
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://ipapi.co/'.concat(this.state.myip).concat('/latlong'));

    xhr.addEventListener('load', () => {
          console.log(xhr.response);
          var latitude = xhr.response.substring(0, xhr.response.lastIndexOf(','));
          var longitude = xhr.response.substring(xhr.response.lastIndexOf(',') + 1, xhr.response.length);
          console.log(latitude);
          console.log(longitude);
          this.setState({lat: parseFloat(latitude)});
          this.setState({lng: parseFloat(longitude)});
          this.setState({gettingData: false});

    });
    xhr.send();    
  }        

  componentWillUpdate(nextProps, nextState)
  {
  }

  componentDidUpdate(prevProps, prevState)
  {
  }
  
  componentWillReceiveProps(nextProps)
  {
  }

  render() {

    let position = [this.state.lat, this.state.lng];
    
    return (
      <div className="leaflet-container">
        {this.state.gettingData == false ? (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={position}>
          <Popup>
            {/* <span>A pretty CSS3 popup. <br/> Easily customizable.</span> */}
            <span>I'm here</span>
          </Popup>
        </Marker>
      </Map>
        ):(
          'loading...'
        )
        }
      </div>

    )      
  
  }    


}  


export default App
