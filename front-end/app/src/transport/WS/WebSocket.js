function logDate(msg = "") {
  console.log(msg + ": " + new Date());
}

// const echo = () => {
//   let ws = new WebSocket("ws://localhost:8080/Shop/api/echo");
//   logDate(ws);
//   return ws;
//   // ws.onopen = function (event) {
//   //   console.log("WS echo was opened: " + event);
//   //   ws.send("Test WS message...");
//   // };

//   // ws.onmessage = function (event) {
//   //   console.log("WS echo got mesage: " + event.data);
//   //   ws.close();
//   // };
// };

const getHistoryOrderWS = async () => {
  console.log("захожу ли я ква");

  const ws = new WebSocket(`ws://localhost:8080/Shop/HistoryOrder`);
  logDate(ws);

  return ws
  // ws.onopen = function (event) {
  //   console.log("WS counter was opened: " + event);
  //   const data = { login, flowers, cost, date };
  //   ws.send(JSON.stringify(data));
  // };

  // ws.onmessage = function (event) {
  //   // const message = JSON.parse(event.data);
  //   logDate("ws counter got message: " + event.data);
  //   return event.data;
  // };
};

export { 
  // echo, 
  getHistoryOrderWS};
