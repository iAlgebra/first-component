class App extends React.Component {
  render() {
    return (
        <div>
          <Hello
              to="Everyone"
              from="Me"
              bangs={4}
          />
          <Hello
              to="World"s
          />
        </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
