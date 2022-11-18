const event = require("events");
const emiter = new event();
emiter.on("some_event", (args) => {
  const { id, text } = args;
  console.log(id, text);
});
const log = (msg) => {
  console.log(msg);
  emiter.emit("some_event", {
    id: 1,
    text: "lets go",
  });
};
