class App extends React.Component {
  render() {
    return (
        <div>
          <Friend
              name="Gaby"
              hobbies={['puzzles', 'programming', 'petting dogs']}
          />
          <Friend
              name="Fab"
              hobbies={['swimming', 'watch football']}
          />
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
