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
}}

    onPhoneSelected = (phoneId) => {
                      this.setState({
                        selectedPhone: getById(phoneId),
                      });
                    };

    onBasket = (phoneId) => {
     this.setState((prevState) => { 
                                    let dubletItem = prevState.basketItems.findIndex((item) => {return item.name === phoneId});
                                    if (dubletItem === -1){
                                    return {basketItems: [...prevState.basketItems, {name: phoneId, count: 1}]}
                                  }else{
                                    let tmpBasketItems = [].concat(prevState.basketItems);
                                    tmpBasketItems[dubletItem].count++;
                                    return {basketItems: tmpBasketItems}
                                  }

                                  })}
    removeBasketItem = (remItem) => {
              this.setState((prevState) => {
                let tmpRemBasketItems = [].concat(prevState.basketItems);
                  if (tmpRemBasketItems[remItem].count === 1){
                    tmpRemBasketItems.splice(remItem,1)
                  }else{
                    tmpRemBasketItems[remItem].count--;
                  }
                  return {basketItems: tmpRemBasketItems}
                })}


  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <Filter />
              
              <Basket
              basketItems = {this.state.basketItems}
              removeBasketItem = {this.removeBasketItem}
              onPhoneSelected={this.onPhoneSelected} 
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
                  onBasket={this.onBasket}
                />
              ) : (
                <Catalog
                  phones={this.state.phones}
                  onPhoneSelected={this.onPhoneSelected}
                  onBasket={this.onBasket}
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
