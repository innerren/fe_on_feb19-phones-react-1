import React from 'react';

class Basket extends React.Component {
    render() {
       return (
        <section>
          <p>Shopping Cart</p>
          <ul>
              {this.props.basketItems.map((item,remId) => (
                <li key={remId}>
                  <a href="#phone" onClick={() => {this.props.onPhoneSelected(item.name)}}>
                    {(item.count===1)?item.name:(item.name + ' ' + item.count)}
                  </a>
                  <button onClick={() => {
                    this.props.removeBasketItem(remId);
                }}>x</button>
                </li>
                ))
              }
          </ul>
        </section>
      );
    };
}


export default Basket;
