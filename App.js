const Pet = (props) => {
  return  React.createElement('div', {}, 
    [
      React.createElement('h1', {}, props.name),
      React.createElement('h2', {}, props.animal),
      React.createElement('h2', {}, props.breed)
    ]
  )
}

class App extends React.Component {
  handleTitleClick() {
    alert('you clicked the title');
  }
  render() {
    return  React.createElement('div', {}, 
    [
      React.createElement('h1', { onClick: this.handleTitleClick }, 'Adopt Me!'),
      React.createElement(Pet,  {
        name: 'Luna', 
        animal: 'Dog',
        breed: 'Havanese'
      }),
      React.createElement(Pet, {
        name: 'Tom', 
        animal: 'Cat',
        breed: 'Havanese'
      }),
      React.createElement(Pet, {
        name: 'Jerry', 
        animal: 'Mouse',
        breed: 'Havanese'
      })
    ]
  )
  }
}


ReactDOM.render(React.createElement(App, {}, null), document.getElementById('root'))