
export const getData = url => {
    return fetch(`https://jsonplaceholder.typicode.com/${url}`).then(res => {
      if(!res.ok) {
        return;
      }
      return res.json();
    })
  }