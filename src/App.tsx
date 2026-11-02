import { useRef, useState } from 'react';
import { IRefPhaserGame, PhaserGame } from './PhaserGame';
import MainMenu from './MainMenu';
import GameControls from './GameControls';
import GameOverUI from './GameOverUI';

type SceneKey = 'MainMenu' | 'Game' | 'GameOver';

function App()
{
    const [activeScene, setActiveScene] = useState('MainMenu');

    //  References to the PhaserGame component (game and scene are exposed)
    const phaserRef = useRef<IRefPhaserGame | null>(null);

    const changeScene = (sceneKey: SceneKey) => {
        const scene = phaserRef.current?.scene;

        if (scene) {
            scene.scene.start(sceneKey);
        }
    }

    // Event emitted from the PhaserGame component
    const currentScene = (scene: Phaser.Scene) => {
        setActiveScene(scene.scene.key);
    }

    return (
        <div id="app">
            <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
            {activeScene === 'MainMenu' && <MainMenu onStart={() => changeScene('Game')} />}
            {activeScene === 'Game' && <GameControls onEnd={() => changeScene('GameOver')} />}
            {activeScene === 'GameOver' && (
                <GameOverUI
                    onRestart={() => changeScene('Game')}
                    onMainMenu={() => changeScene('MainMenu')}
                />
            )}
        </div>
    )
}

export default App
