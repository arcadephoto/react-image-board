import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      images: [{image: "https://cdn.shopify.com/s/files/1/0546/1817/files/1_grande.jpg?v=1510086340",
      caption: "Mid Century sofa"},
    {image: "https://hivemodern.com/public_resources/eames-lounge-chair-ottoman-charles-and-ray-eames-herman-miller-1.jpg",
  caption: "Herman Miller Eames Chair"}],
    };

    this.addImage = this.addImage.bind(this);

  }

  addImage (newImage){
    const images = [...this.state.images];
    images.push(newImage);
    this.setState({images});
  }

  render(){
    return (
      <div className="container">
      <div><h1>Furniture You Can't Afford</h1></div>
      <div id="submitRow" className="row d-flex justify-content-center">
      <ImageForm addImage={this.props.addImage}/>
      </div>
      <div className="row d-flex justify-content-center">
      <div className="col-auto">
        <ImageBoard addImage={this.addImage} images={this.state.images}/>
</div>
        </div>
        </div>
    );
  }
}




class ImageForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      image: "",
      caption: '',
    }

  this.doSubmit = this.doSubmit.bind(this);
  this.doInput = this.doInput.bind(this);

  }



  doSubmit(event){
    event.preventDefault();
    this.props.addImage(this.state);
    this.setState({image: ""});
    this.setState({caption: ""});
  }

  doInput(event){
    // console.log(event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }



  render() {
    return(
      <form className="form-group" onSubmit={this.doSubmit}>
      <input className="form-control" placeholder="Enter Image URL" name="image" type="text" id="img-text" value={this.state.image} onChange={this.doInput} required/><br/>
      <input className="form-control" placeholder="Enter Image Caption" name="caption" type="text" id="cap-text" value={this.state.caption} onChange={this.doInput} required/><br/>
      <button className="btn btn-success" id="submitButton" type="submit">Submit Image</button>
      </form>
)
}

  }






class ImageList extends Component{

  render() {

    const images = this.props.images.map((image, index) => (
      <div className="card" key={index}>
      <img src={image.image} alt="bigthing"/>
      <p> {image.caption}</p>
      </div>
    ))
    return(
      <ul>
        {images}
      </ul>
    )
  }
};







class ImageBoard extends Component{
  render() {
    return(
      <div >
        <ImageList images={this.props.images}/>
      </div>
    )
  }
}















export default App;
