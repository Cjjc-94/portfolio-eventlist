const BASE_URL = "http://localhost:3005"

function fetchRequest (url, input) {
  return fetch(`${BASE_URL}${url}`, input)
  .then(res => res.status <=400? res : Promise.reject(res))
  .then(res => res.status !== 204? res.json(): res)
  .catch(err => {console.log(err)})
}

function getEvents() {
  return fetchRequest('/events');
}

function postEvents(body) {
  return fetchRequest('/events', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
}

const ApiService = {
  getEvents, postEvents
};

export default ApiService;