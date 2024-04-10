import React from "react";

import "./TableData.css";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  useActionAddItemsInShoppingCart,
  useGetItemsListener,
  useGetResultDispatch,
  useGetUserListener,
  useItemDispatch,
} from "../../../viewModel/Toolkit/api";
import "./TableData.css";

function TableData() {
  const data = useGetItemsListener();
  const dispatchItemInBasket = useActionAddItemsInShoppingCart();
  const user = useGetUserListener();
  const dispatchResult = useGetResultDispatch();
  const hundleButtonPrice = (price, item) => {
    if (user == "") {
      alert("Пожалуйста, войдите в аккаунт");
    } else {
      dispatchResult(price, "plus");
      dispatchItemInBasket(item);
    }
  };

  const rows = [];
  for (let i = 0; i < data.length; i += 4) {
    const rowData = data.slice(i, i + 4);
    rows.push(
      <tr key={i}>
        {rowData.map((item) => (
          <td key={item.flowerID}>
            <img src={item.image_path} alt={item.title} height={200} />
            <div>{item.title}</div>
            <div>Состав: {item.description}</div>
            <div>Цена: {item.price} ₽</div>
            <br />
            <button onClick={() => hundleButtonPrice(item.price, item)}>
              Добавить в заказ
              <AddShoppingCartIcon className="AddShoppingCartIcon" fontSize="very small" />
            </button>
          </td>
        ))}
      </tr>
    );
  }

  return (
    <>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}

function PageMain() {
  const dispatch = useItemDispatch();
  dispatch();

  return (
    <>
      <div>
        <TableData />
      </div>
    </>
  );
}

export default PageMain;
