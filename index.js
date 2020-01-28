function getNum() {
    return Math.ceil(Math.random() * 10);
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        let msg;
        if (num === 7) {
            msg =
                <div>
                    <h2>CONGRATS YOU WIN!!!</h2>
                    <img src="https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif"/>
                </div>
        } else {
            msg = <p>SORRY YOU LOSE!</p>
        }
        return (
            <div>
                <h1>Your number is: {num}</h1>
                {msg}
                {/*<p>{num === 7 ? 'Congrats!' : 'Condolences!'}</p>*/}
                {/*{num === 7 && <img src="https://media.giphy.com/media/nXxOjZrbnbRxS/giphy.gif" />}*/}
            </div>
        );
    }
}

ReactDOM.render(<NumPicker/>, document.getElementById('root'));
