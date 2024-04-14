function logDate(msg = "") {
  console.log(msg + ": " + new Date());
}

const echo = () => {
  let ws = new WebSocket("http://localhost:8080/Shop/api/echo");
  ws.onopen = function (event) {
    console.log("WS echo was opened: " + event);
    ws.send("Test WS message...");
  };

  ws.onmessage = function (event) {
    console.log("WS echo got mesage: " + event.data);
    ws.close();
  };
};

const getNewOrders = (login, flowers, cost, date) => {
  const ws = new WebSocket(`http://localhost:8080/Shop/api/NewOrder`);

  ws.onopen = function (event) {
    console.log("WS counter was opened: " + event);
    const data = { login, flowers, cost, date };
    ws.send(JSON.stringify(data));
  };

  ws.onmessage = function (event) {
    // const message = JSON.parse(event.data);
    logDate("ws counter got message: " + event.data);
    return event.data;
  };
};

export { echo, getNewOrders};
