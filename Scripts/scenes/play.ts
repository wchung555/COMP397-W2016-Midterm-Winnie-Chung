// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _diceBackground: createjs.Bitmap;
        private _rollButton: objects.Button;
        private _clearButton: objects.Button;
        private _dieImage: createjs.Bitmap;
        private _dieLabel: objects.Label;
        private _currentRoll: number;
        private _lastX: number;
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // initialize private instance variable
            this._lastX = 75;
            
            // Add DICE Background to scene
            this._diceBackground = new createjs.Bitmap(assets.getResult("DiceBackground"));
            this.addChild(this._diceBackground); 
            
            // Add ROLL Button to scene
            this._rollButton = new objects.Button(
                "RollButton",
                config.Screen.CENTER_X,
                100);
            this._rollButton.on("click", this._rollButtonClick, this);
            this.addChild(this._rollButton);
            
            // Add CLEAR Button to scene
            this._clearButton = new objects.Button(
                "ClearButton",
                config.Screen.CENTER_X,
                200);
            this._clearButton.on("click", this._clearButtonClick, this);
            this.addChild(this._clearButton);            
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {

        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        // event handler for the ROLL Button
        private _rollButtonClick(event: createjs.MouseEvent) {
            // Generate a random number
            this._currentRoll = Math.floor(Math.random()*6+1);
            console.log("Rolled "+ this._currentRoll);
            
            // Add corresponding die image to scene
            this._dieImage = new createjs.Bitmap(assets.getResult("Die" + this._currentRoll));
            this._dieImage.x = this._lastX;
            this._dieImage.y = config.Screen.CENTER_Y;
            this.addChild(this._dieImage);
            
            // Add corresponding label to scene
            this._dieLabel = new objects.Label(this._currentRoll.toString(), "20px Arial", "#cc66ff", this._lastX + 37.5, config.Screen.CENTER_Y + 100);
            this.addChild(this._dieLabel);
            
            this._lastX += 100;
        }
        
        // event handler for the CLEAR button
        private _clearButtonClick(event: createjs.MouseEvent) {
            console.log("Clear scene");
            this.removeAllChildren();
            this.start();
        }
    }
}