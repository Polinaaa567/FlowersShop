import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";

import { getHistoryOrderHttp } from "../../../transport/api/ApiService";
// import
import {
  // useGetHistoryOrderDispatch,
  useGetHistoryOrderListener,
  // useGetLoginListener,
  useGetUserListener,
  useGetPersonsInfo,
  useGetPersonsInfoListener,
  useGetTokenListener,
} from "../../../viewModel/Toolkit/api";

import { WSInfo } from "../../../viewModel/Toolkit/impl/slice/basket";

const ProfileData = () => {
  const infoPersons = useGetPersonsInfoListener();
  console.log(infoPersons);
  const parsedData = JSON.stringify(infoPersons);
  const data = JSON.parse(parsedData);
  return (
    <ul>
      <img src="images/bee.png" alt="logo bee" className="profile-image" />
      <li>
        <h3>Фамилия: {data.lastname}</h3>
      </li>
      <li>
        <h3>Имя: {data.name}</h3>
      </li>
    </ul>
  );
};

function TableData() {
  // const dispatch2 = useDispatch();
  // const tokenListener = useSelector((state) => state.user.token);

  // useEffect(() => {
  //   dispatch2(WSInfo(tokenListener));
  // }, []);
  
  const data = useGetHistoryOrderListener();

  const groupedOrders = data.reduce((acc, order) => {
    const date = order.dateComplete;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(order);
    console.log(acc);
    return acc;
  }, {});

  const sortedGroupedOrders = Object.entries(groupedOrders).sort(
    ([dateA], [dateB]) => Date.parse(dateA) - Date.parse(dateB)
  );

  return (
    <>
      <span>
        <h1>Все заказы</h1>
      </span>
      {sortedGroupedOrders.map(([date, orders]) => (
        <div key={date}>
          <h2>Date: {date}</h2>
          {orders.map((order) => (
            <div key={order.orderID}>
              <div>
                <div>
                  <img
                    src={order.flowers.image_path}
                    className="profile-image"
                  ></img>
                </div>
                <div>Название букета: {order.flowers.title}</div>
                <div>Цена за букет: {order.flowers.price}</div>
                <br />
              </div>
            </div>
          ))}
          <div>
            <label>
              Общая стоимость заказов за эту дату:{" "}
              {orders.reduce((acc, order) => order.cost, 0)}
            </label>
          </div>
        </div>
      ))}
    </>
  );
}

function PageProfile() {

  const dispatch2 = useDispatch();
  const tokenListener = useSelector((state) => state.user.token);

  const login = useSelector((state) => state.user.user);
  console.log("I in Profile PAge = " + tokenListener);
  getHistoryOrderHttp({login, tokenListener});
  
  useEffect(() => {
    dispatch2(WSInfo(tokenListener));
  }, []);

  const info = useGetPersonsInfo();
  info();
  return (
    <>
      <div>
        <ProfileData />
      </div>
      <TableData />
    </>
  );
}

export default PageProfile;
