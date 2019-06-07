import React from 'react';

import { getAll, getById } from './api/phone'
import Basket from './Basket'
import Filter from './Filter'
import Catalog from './Catalog'
import Viewer from './Viewer'

import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phones: getAll(),
      selectedPhone: null,
      basketItems: [],
      removeBasketItem: (remItem) => {
          let tmpBasketItems = [].concat(this.state.basketItems);
          tmpBasketItems.splice(remItem,1)
          this.setState({basketItems: tmpBasketItems})
        },
      onPhoneSelected: (phoneId) => {
                    this.setState({
                      selectedPhone: getById(phoneId),
                    });
                  },

}}

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter />
              
              <Basket
              basketItems = {this.state.basketItems}
              removeBasketItem = {this.state.removeBasketItem}
              onPhoneSelected={this.state.onPhoneSelected} 
              />
            </div>

            <div className="col-md-10">
              { this.state.selectedPhone ? (
                <Viewer
                  phone={this.state.selectedPhone}
                  onBack={() => {
                    this.setState({
                      selectedPhone: null,
                    });
                  }}
                  onBasket={(phoneId) => {
                  this.setState((prevState) => {
                                            return {
                                                basketItems: prevState.basketItems.concat(getById(phoneId)),
                                            }
                    })
                  }}
                />
              ) : (
                <Catalog
                  phones={this.state.phones}
                  onPhoneSelected={this.state.onPhoneSelected}
                  onBasket={(phoneId) => {
                  this.setState((prevState) => {
                                            return {
                                                basketItems: prevState.basketItems.concat(getById(phoneId)),
                                            }
                  })
                }}
                />
              ) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
