// import fetch from "isomorphic-unfetch";
const API_SERVER="http://127.0.0.1:3001"

export const messagesServiceFunction = fetch => ({
  getMessages: async () =>
    fetch(`${API_SERVER}/messages`),
  createMessage: async message =>
    fetch(`${API_SERVER}/message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message })
    }),
  deleteMessage: async id =>
    fetch(`${API_SERVER}/message/${id}`, {
      method: "DELETE"
    }),
  updateMessage: async ({id,message}) =>
    fetch(`${API_SERVER}/message/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message })
    }),
});

export default messagesServiceFunction(fetch);
/*
curl -X POST \
  http://localhost:3000/message \
  -H 'Content-Type: application/json' \
  -d '{
  "message": "This is a message."
}'
*/
/*
function postData(fetch, url = ``, data = {}) {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  })
  //.then(response => response.json()); // parses JSON response into native Javascript objects
}

*/