export class ApiService {
  async getUser(login, password) {
    const response = await fetch(
      `http://localhost:8080/Shop/api/Authentication`,
      {
        method: "POST",
        body: JSON.stringify({ login: login, password: password }),
      }
    );

    const data = await response.json();
    return data;
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
    return data;
  };

  async getHistoryOrder(login) {
    const response = await fetch(
      `http://localhost:8080/Shop/api/HistoryOrder?login=${login}`,
      { method: "GET" }
    );

    const data = await response.json();
    return data;
  }

  async getInfoFlowers() {
    const response = await fetch(`http://localhost:8080/Shop/api/Products`, {
      method: "GET",
    });

    const data = await response.json();
    return data;
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
      `http://localhost:8080/Shop/api/Registration`,
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
