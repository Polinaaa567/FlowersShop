export class ApiService {
  async getUser(login, password) {
    const response = await fetch(
      `http://localhost:8080/Shop/api/Identification/Authentication`,
      {
        method: "POST",
        body: JSON.stringify({ login: login, password: password }),
      }
    );

    const data = await response.json();
    const newData = data.map((item) => {
      return {
        title: item.title,
        image_path: item.image_path,
        description: item.description,
        price: item.price,
        flowerID: item.flowerID,
      };
    });
    return newData;
  }

  async getResult(price, result, symbol) {
    const response = await fetch(
      `http://localhost:8080/Shop/api/Basket?result=${result}&price=${price}&symbol=${symbol}`,
      { method: "GET" }
    );

    const data = await response.json();
    return data;
  }

  async getInfoUser(login) {
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
  }

  async getHistoryOrder(login) {
    const response = await fetch(
      `http://localhost:8080/Shop/api/HistoryOrder?login=${login}`,
      { method: "GET" }
    );

    const data = await response.json();
    const infoFlowers = data.map((item) => {
      return {
        created_at: item.created_at,
        cost: item.cost,
        flowers: {
          title: item.flowers.title,
          image_path: item.flowers.image_path,
          description: item.flowers.description,
          price: item.flowers.price,
          flowerID: item.flowers.flowerID,
        },
        orderID: item.orderID,
        personLogin: item.personLogin,
        dateComplete: item.dateComplete,
      };
    });

    return infoFlowers;
  }

  async getInfoFlowers() {
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
  }

  async getNewOrders(login, flowers, cost, date) {
    const response = await fetch(
      `http://localhost:8080/Shop/api/NewOrder?login=${login}&flowers=${flowers}&cost=${cost}&date=${date}`,
      { method: "GET" }
    );

    const data = await response.json();
    return data;
  }

  async getRegistration(login, password, firstName, lastName) {
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
  }

  async getPersons() {
    const response = await fetch(`http://localhost:8080/Shop/api/Persons`, {
      method: "GET",
    });

    const data = await response.json();
    return data;
  }
}
