import React from 'react';

class Viewer extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        imageId: 0,      
      }
    }

    selectImage = (id) => {
                    this.setState({imageId: id});
        }

    render() {
      const {phone, onBack, onBasket} = this.props;
      const imageId = this.state.imageId;
       return (
          <div>
            <img alt="Large_Image" className="phone" key={imageId}  src={phone.images[imageId]}/>
            <button onClick={onBack}>Back</button>
            <button  onClick={()=>(onBasket(phone.id))}>Add to basket</button>

            <h1>{phone.name}</h1>
            <p>{phone.description}</p>

            <ul className="phone-thumbs">
              { phone.images.map((imageUrl, id) => (
                <li key={id} >
                  <img alt="small_Image" src={imageUrl} onClick={() => {this.selectImage(id)}} />
                </li>
              )) }
            </ul>
          </div>
       );
    }

}

export default Viewer;