
import { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';

const particlesOptions = {}

const app = new Clarifai.App({
  apiKey: '10c8de5e20c44f548c07425a83c786ef'
 });

class App extends Component {
  constructor(){
    super();
    this.state = {
      input : '',
      imageUrl : '',
      box : {},
      route : 'signin',
      isSignedIn : false
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height)
    return {
      leftCol : clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height,
      rightCol : width - (clarifaiFace.right_col * width),
      bottomRow : height - (clarifaiFace.bottom_row * height)

    }
  }

  displayFaceBox = (box) => {
    this.setState({box : box})
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  
  onButtonSubmit = () => {
    this.setState({
      imageUrl : this.state.input
    })
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if(route === 'home'){this.setState({isSignedIn : true})}
    else{this.setState({isSignedIn : false})}
    this.setState({route : route})
  }

  render(){
  return (
    <div className="App">
      <Particles className="particles" params = {particlesOptions}/>
      <Navigation isSignedIn = {this.state.isSignedIn} onRouteChange = {this.onRouteChange}/>
      {(this.state.route === "home") 
      ?
        <div>
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition box = {this.state.box} imageUrl ={this.state.imageUrl}/>
        </div>
      :
        (this.state.route === 'signin')
      ?
        <SignIn onRouteChange = {this.onRouteChange}/>
      :
        <Register onRouteChange={this.onRouteChange} />
  }
    </div>
  );
  }
}

export default App;
