import patch1 from '../assets/6.jpeg'
import React, {Component} from 'react';
import '@stripe/stripe-js';
import prod1 from '../assets/prod1.png'

import { useState } from "react";
import Router from "next/router";
import Layout from "../components/Layout";
import Row from "../components/prebuilt/Row";
import ItemShop from "../components/prebuilt/ItemShop";
import CheckoutForm from "../components/CheckoutForm";
import GetItemPrice from "./GetItemPrice";

function Shop(props) {
    const [numItems, setNumItems] = useState(0);

    const addItem = () => setNumItems(num => Math.min(12, num + 1));
    const remItem = () => setNumItems(num => Math.max(1, num - 1));

    return (
        




        <div style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-around', width: '1800px', height: '400px'}}>
            <div>
                <h1>Shop</h1>
            </div>
        </div>
    )
}

export default Shop;