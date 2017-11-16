# leafletExperiment
leafletjs Experiments, currently focusing on using the ReactJS version of leaflet: https://github.com/PaulLeCam/react-leaflet

Comment 16/11/2017, 5:57pm:

Since I'm working ReactJS i'm using the Reactjs version of leafletjs.

Made a simple "find out where I am on the map" based on the the sample code: https://www.webpackbin.com/bins/-Kl_ZeUx4I05ETYoT26O, the basic idea is that:
1. The app shows loading... before it gets latitude and longitude.
2. Get the user's IP address from: https://www.ipify.org/, with GET call, in componentWillMount.
3. Get user's location latitude and longitude from: https://ipapi.co/, with GET call, in componentDidMount. 
Ideally both getting IP and lat/lng should be done in componentWillMount, it's just that I don't think XHR can
do a GET inside the callback of its own last GET, that's why I'm doing them in 2 seperate steps.
4. Once lat/lng is ready the map can render using them. 