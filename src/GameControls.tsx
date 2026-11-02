interface GameControlsProps
{
    onEnd: () => void;
}

const GameControls = ({ onEnd }: GameControlsProps) => {
    return (
        <div className="game-ui game-controls">
            <button className="button" onClick={onEnd}>End Game</button>
        </div>
    );
};

export default GameControls;
