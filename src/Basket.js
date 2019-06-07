import React from 'react';

class Basket extends React.Component {
    render() {
       return (
        <section>
          <p>Shopping Cart</p>
          <ul>
              {this.props.basketItems.map((item,remId) => (
                <li key={remId}>
                  <a onClick={() => {this.props.onPhoneSelected(item.id)}}>
                    {item.name}
                  </a>
                  <button onClick={() => {
                    console.log(remId);
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
