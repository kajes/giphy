export default class Giphy {

  search(url)
  {

    return fetch(url)
      .then(response => response.json()
      .then(post => post.data),
      error => console.error(error))
      .catch(error => console.error(error))

  }

}
