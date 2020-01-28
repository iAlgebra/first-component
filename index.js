function getMood() {
	const moods = ['Angry', 'Happy', 'Sad', 'Pumped', 'Hungry'];
	return moods[Math.floor(Math.random() * moods.length)];
}

class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>My current mood is: {getMood()}</h1>
			</div>
		);
	}
}

ReactDOM.render(<Hello />, document.getElementById('root'));
