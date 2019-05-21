const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(e => e.json())
  },
  getAll() {
      console.log("Made it to Employee GetAll")
    return fetch(`${remoteURL}/employees`).then(e => e.json())
  },
  deleteEmployee(id) {
      return fetch(`${remoteURL}/employees/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          },
      }).then(e => e.json())
  }
}