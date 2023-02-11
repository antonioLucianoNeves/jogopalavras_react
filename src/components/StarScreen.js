import "./StarScreen.css"

const StarScreen = ({startGame}) => {
    return (
        <div className="start">
            <h1>Secret Word</h1>
            <p>Clique no botão para començar o jogo</p>
            <button onClick={startGame}>Começar o jogo</button>
        </div>
    );
};

export default StarScreen;