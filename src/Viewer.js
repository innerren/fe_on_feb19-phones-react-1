import React from 'react';

class Viewer extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        imageId: 0,
        selectImage: (id) => {
                    this.setState({imageId: id});
        }
      }
    }

    render() {
       return (
          <div>
            <img className="phone" src={this.props.phone.images[this.state.imageId]}/>
            <button onClick={this.props.onBack}>Back</button>
            <button  onClick={this.props.onBasket}>Add to basket</button>

            <h1>{this.props.phone.name}</h1>
            <p>{this.props.phone.description}</p>

            <ul className="phone-thumbs">
              { this.props.phone.images.map((imageUrl, id) => (
                <li>
                  <img src={imageUrl} onClick={() => {this.state.selectImage(id)}} />
                </li>
              )) }
            </ul>
          </div>
       );
    }

}

export default Viewer;