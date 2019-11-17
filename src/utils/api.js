import axios from 'axios'

function fetch(api, method, data) {
  return axios({
    url: 'localhost:8080/'+api,
    method: method,
    data: data
  })
}

export function getOrders() {
  fetch('/db/order.json', 'GET', {})
}
