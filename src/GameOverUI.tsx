interface GameOverUIProps
{
    onRestart: () => void;
    onMainMenu: () => void;
}

const GameOverUI = ({ onRestart, onMainMenu }: GameOverUIProps) => {
    return (
        <div className="game-ui game-over-ui">
            <button className="button" onClick={onRestart}>Play Again</button>
            <button className="button" onClick={onMainMenu}>Main Menu</button>
        </div>
    );
};

export default GameOverUI;
