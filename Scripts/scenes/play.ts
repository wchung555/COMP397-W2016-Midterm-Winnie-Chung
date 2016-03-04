// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _diceBackground: createjs.Bitmap;
        private _rollButton: objects.Button;
        private _clearButton: objects.Button;
        private _dieImages: createjs.Bitmap[];
        private _dieLabels: objects.Label[];
        private _currentRolls: number[];
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Instantiate arrays
            this._currentRolls = new Array(2);
            this._dieImages = new Array(2);
            this._dieLabels = new Array(2);
            
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
            this.removeChild(this._dieImages[0]);
            this.removeChild(this._dieImages[1]);
            this.removeChild(this._dieLabels[0]);
            this.removeChild(this._dieLabels[1]);
            
            // Generate two random numbers
            this._currentRolls[0] = Math.floor(Math.random()*6+1);
            this._currentRolls[1] = Math.floor(Math.random()*6+1);
            console.log("Rolled "+ this._currentRolls);
            
            // Add corresponding die images to scene
            this._dieImages[0] = new createjs.Bitmap(assets.getResult("Die" + this._currentRolls[0]));
            this._dieImages[0].x = config.Screen.CENTER_X - 115;
            this._dieImages[0].y = config.Screen.CENTER_Y;
            this.addChild(this._dieImages[0]);
            this._dieImages[1] = new createjs.Bitmap(assets.getResult("Die" + this._currentRolls[1]));
            this._dieImages[1].x = config.Screen.CENTER_X + 40;
            this._dieImages[1].y = config.Screen.CENTER_Y;
            this.addChild(this._dieImages[1]);
            
            // Add corresponding labels to scene
            this._dieLabels[0] = new objects.Label(this._currentRolls[0].toString(), "bold 20px Arial", "#cc66ff", config.Screen.CENTER_X - 115 + 37.5, config.Screen.CENTER_Y + 100);
            this.addChild(this._dieLabels[0]);
            this._dieLabels[1] = new objects.Label(this._currentRolls[1].toString(), "bold 20px Arial", "#cc66ff", config.Screen.CENTER_X + 40 + 37.5, config.Screen.CENTER_Y + 100);
            this.addChild(this._dieLabels[1]);
        }
        
        // event handler for the CLEAR button
        private _clearButtonClick(event: createjs.MouseEvent) {
            console.log("Clear scene");
            this.removeAllChildren();
            this.start();
        }
    }
}