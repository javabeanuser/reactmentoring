export function renderMyData(){
  fetch('https://reactjs-cdp.herokuapp.com/movies')
      .then((response) => response.json())
      .then((responseJson) => responseJson.data)
      .then(data => {
        this.setState({ items : data, isLoaded : true })
      })
      .catch((error) => {
        console.error(error);
      });
}
