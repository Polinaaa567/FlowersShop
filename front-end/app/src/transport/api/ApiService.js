export const getUser = async (login, password) => {
  console.log( "csmkac");
  const response = await fetch(
    `http://localhost:8080/Shop/api/Identification/Authentication`,
    {
      method: "POST",
      body: JSON.stringify({ login: login, password: password }),
    }
  );

  const data = await response.text();
  // const newData = data.map((item) => {
  //   return {
  //     title: item.title,
  //     image_path: item.image_path,
  //     description: item.description,
  //     price: item.price,
  //     flowerID: item.flowerID,
  //   };
  // });
  console.log( "хмдльав" + data);
  return data;
};

export const getResult = async (price, result, symbol) => {
  const response = await fetch(
    `http://localhost:8080/Shop/api/Basket?result=${result}&price=${price}&symbol=${symbol}`,
    { method: "GET" }
  );

  const data = await response.json();
  return data;
};

export const getInfoUser = async (login) => {
  const response = await fetch(
    `http://localhost:8080/Shop/api/InfoUser?login=${login}`,
    { method: "GET" }
  );
  const data = await response.json();
  const newData = {
    name: data.first_name,
    lastname: data.last_name,
  };
  console.log(data.first_name);
  return newData;
};

// диспатчи на изменение сосотояния в стор
export const getHistoryOrderHttp = async ({login, tokenListener}) => {

  console.log("[htym = " + tokenListener);
  const response = await fetch(
    `http://localhost:8080/Shop/api/HOHttp?login=${login}`,
    { method: "GET", headers: { token: tokenListener } }
  );

  const data = await response.json();
  return data;
  // const infoFlowers = data.map((item) => {
  //   return {
  //     created_at: item.created_at,
  //     cost: item.cost,
  //     flowers: {
  //       title: item.flowers.title,
  //       image_path: item.flowers.image_path,
  //       description: item.flowers.description,
  //       price: item.flowers.price,
  //       flowerID: item.flowers.flowerID,
  //     },
  //     orderID: item.orderID,
  //     personLogin: item.personLogin,
  //     dateComplete: item.dateComplete,
  //   };
  // });

  // return infoFlowers;
};

export const getInfoFlowers = async () => {
  const response = await fetch(`http://localhost:8080/Shop/api/Products`, {
    method: "GET",
  });

  const data = await response.json();
  const infoFlowers = data.map((item) => {
    return {
      title: item.title,
      image_path: item.image_path,
      description: item.description,
      price: item.price,
      flowerID: item.flowerID,
    };
  });
  return infoFlowers;
};

export const getNewOrders = async (login, flowers, cost, date) => {
  const response = await fetch(
    `http://localhost:8080/Shop/api/NewOrder?login=${login}&flowers=${flowers}&cost=${cost}&date=${date}`,
    { method: "GET" }
  );

  const data = await response.json();
  return data;
};

export const getRegistration = async (login, password, firstName, lastName) => {
  console.log(firstName + " " + lastName);
  const response = await fetch(
    `http://localhost:8080/Shop/api/Identification/Registration`,
    {
      method: "POST",
      body: JSON.stringify({
        login: login,
        password: password,
        firstName: firstName,
        lastName: lastName,
      }),
    }
  );

  const data = await response.json();
  return data;
};

export const getPersons = async () => {
  const response = await fetch(`http://localhost:8080/Shop/api/Persons`, {
    method: "GET",
  });

  const data = await response.json();
  return data;
};
