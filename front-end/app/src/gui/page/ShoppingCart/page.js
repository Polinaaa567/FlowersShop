import React from "react";

import {
  useActionRemoveItemsInShoppingCart,
  useActionSetDateTime,
  useGetDateTimeListener,
  useGetResultDispatch,
  useGetResultListener,
  useGetShoppingCartListener,
  useGetUserListener,
  useSendNewOrderDispatch,
} from "../../../viewModel/Toolkit/api";

function LabelInfo() {
  const price = useGetResultListener();
  const basket = useGetShoppingCartListener();
  const dispatchDate = useActionSetDateTime();

  const hundlerDateTime = async (event) => {
    dispatchDate(event.target.value);
  };
  return (
    <>
      <span className="AllItemsInShoppingCart">
        Всего предметов в корзине: {basket.length}
      </span>
      <br />
      <span className="AllItemsInShoppingCart">
        Общая сумма заказа: {price} ₽
      </span>
      <br />
      <input
        className="DateTime"
        type="datetime-local"
        onChange={hundlerDateTime}
      ></input>
      <br />
    </>
  );
}

function ButtonNewOrder() {
  const dispatchNewOrder = useSendNewOrderDispatch();
  const login = useGetUserListener();
  const date = useGetDateTimeListener();
  const basket = useGetShoppingCartListener();

  const hundlerFromNewOrder = () => {
    if (
      login != "" &&
      date != "" &&
      basket.length > 0 &&
      date > new Date().toISOString()
    ) {
      dispatchNewOrder();
      alert(
        "Вам позвонит первый освободившийся оператор \nКогда-нибудь ваш заказ будет выполнен, но не в этой жизни"
      );
    } else if (date === "" || date < new Date().toISOString()) {
      alert("Впишите корректную дату");
      console.log(new Date().toISOString());
    }
  };

  return (
    <>
      <button onClick={hundlerFromNewOrder}>Новый заказ</button>
    </>
  );
}

function TableData() {
  const data = useGetShoppingCartListener();
  console.log(data);
  const dispatchResult = useGetResultDispatch();
  const dispatchRemoveItems = useActionRemoveItemsInShoppingCart();

  const handlerButton = (index, price) => {
    console.log(index);
    dispatchResult(price, "minus");
    dispatchRemoveItems(index);
  };

  return (
    <>
      <table>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item.image_path} alt={item.title} height={200} />
              </td>
              <td>
                <div>{item.title}</div>
                <br />
                <div>Состав: {item.description}</div>
                <br />
                <div>Цена: {item.price} ₽</div>
              </td>
              <td>
                <button onClick={() => handlerButton(index, item.price)}>
                  Удалить из заказа
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function PageShoppingCart() {
  return (
    <>
      <TableData />
      <form className="labelInfoOrder">
        <LabelInfo />
        <ButtonNewOrder />
      </form>
    </>
  );
}

export default PageShoppingCart;
