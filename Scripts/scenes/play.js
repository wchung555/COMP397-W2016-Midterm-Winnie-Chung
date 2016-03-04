var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// PLAY SCENE
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function Play() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        Play.prototype.start = function () {
            // Instantiate arrays
            this._currentRolls = new Array(2);
            this._dieImages = new Array(2);
            this._dieLabels = new Array(2);
            // Add DICE Background to scene
            this._diceBackground = new createjs.Bitmap(assets.getResult("DiceBackground"));
            this.addChild(this._diceBackground);
            // Add ROLL Button to scene
            this._rollButton = new objects.Button("RollButton", config.Screen.CENTER_X, 100);
            this._rollButton.on("click", this._rollButtonClick, this);
            this.addChild(this._rollButton);
            // Add CLEAR Button to scene
            this._clearButton = new objects.Button("ClearButton", config.Screen.CENTER_X, 200);
            this._clearButton.on("click", this._clearButtonClick, this);
            this.addChild(this._clearButton);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // PLAY Scene updates here
        Play.prototype.update = function () {
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // event handler for the ROLL Button
        Play.prototype._rollButtonClick = function (event) {
            this.removeChild(this._dieImages[0]);
            this.removeChild(this._dieImages[1]);
            this.removeChild(this._dieLabels[0]);
            this.removeChild(this._dieLabels[1]);
            // Generate two random numbers
            this._currentRolls[0] = Math.floor(Math.random() * 6 + 1);
            this._currentRolls[1] = Math.floor(Math.random() * 6 + 1);
            console.log("Rolled " + this._currentRolls);
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
        };
        // event handler for the CLEAR button
        Play.prototype._clearButtonClick = function (event) {
            console.log("Clear scene");
            this.removeAllChildren();
            this.start();
        };
        return Play;
    })(objects.Scene);
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map