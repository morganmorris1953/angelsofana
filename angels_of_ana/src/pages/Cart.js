import React, {Component} from 'react';
import '@stripe/stripe-js';

import { useState } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import Row from "../components/prebuilt/Row";
import ItemShop from "../components/prebuilt/ItemShop";
import CheckoutForm from "../components/CheckoutForm";
import GetItemPrice from "./GetItemPrice";


function Cart(props) {
    const [numItems, setNumItems] = useState(0);

    const addItem = () => setNumItems(num => Math.min(12, num + 1));
    const remItem = () => setNumItems(num => Math.max(1, num - 1));

    return (
        <Layout title="ItemShop">
        <Row>
          <ItemShop
            onAddItem={addItem}
            onRemoveItem={remItem}
            numItems={numItems}
          />
        </Row>
        <CheckoutForm
          price={GetItemPrice(numItems)}
          onSuccessfulCheckout={() => Router.push("/success")}
        />
      </Layout>
    )
}




export default Cart;