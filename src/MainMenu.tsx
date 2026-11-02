interface MainMenuProps
{
    onStart: () => void;
}

const MainMenu = ({ onStart }: MainMenuProps) => {
    return (
        <div className="menu-ui">
            <h1>Are you ready to talk money?</h1>
            <input id="player-name" type="text" placeholder="Enter your name" />
            <button className="button" onClick={onStart}>Start</button>
        </div>
    );
};

export default MainMenu;