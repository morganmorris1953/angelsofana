import styled from "@emotion/styled";

import Image from "./Image";
import ItemQuantity from "./ItemQuantity";

const Shop = styled.div`
  padding: 10px 20px 40px 20px;
`;

const ShopName = styled.h1`
  font-size: 18px;
  color: #fff;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 26.4px;
  margin-bottom: 20px;
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const ItemShop = ({ onAddItem, onRemoveItem, numItems }) => {
  return (
    <Shop>
      <ShopName>/stripe/item</ShopName>
      {/* <Image src="./item.png" width="100px"></Image> */}
      <Controls>
        <ItemQuantity
          onAdd={onAddItem}
          onRemove={onRemoveItem}
          quantity={numItems}
        />
      </Controls>
    </Shop>
  );
};

export default ItemShop;