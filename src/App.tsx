import { useRef, useState } from 'react';
import { IRefPhaserGame, PhaserGame } from './PhaserGame';
import { MainMenu } from './game/scenes/MainMenu';

function App()
{
    // The sprite can only be moved in the MainMenu Scene
    const [canMoveSprite, setCanMoveSprite] = useState(true);

    //  References to the PhaserGame component (game and scene are exposed)
    const phaserRef = useRef<IRefPhaserGame | null>(null);

    const changeScene = () => {

        if(phaserRef.current)
        {     
            const scene = phaserRef.current.scene as MainMenu;
            
            if (scene)
            {
                scene.changeScene();
            }
        }
    }

    // Event emitted from the PhaserGame component
    const currentScene = (scene: Phaser.Scene) => {

        setCanMoveSprite(scene.scene.key !== 'MainMenu');
        
    }

    return (
        <div id="app">
            <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
            <div>
                <div>
                    <h1
                        style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    >
                        Welcome to The Life Trail Project
                    </h1>
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    />
                </div>
                <div>
                    <button
                        className="button"
                        onClick={changeScene}
                        style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    >
                        Start
                    </button>
                </div>
            </div>
        </div>
    )
}

export default App
