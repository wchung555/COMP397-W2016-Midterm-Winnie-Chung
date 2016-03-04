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
            // initialize private instance variable
            this._lastX = 75;
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
            // Generate a random number
            this._currentRoll = Math.floor(Math.random() * 6 + 1);
            console.log("Rolled " + this._currentRoll);
            // Add corresponding die image to scene
            this._dieImage = new createjs.Bitmap(assets.getResult("Die" + this._currentRoll));
            this._dieImage.x = this._lastX;
            this._dieImage.y = config.Screen.CENTER_Y;
            this.addChild(this._dieImage);
            // Add corresponding label to scene
            this._dieLabel = new objects.Label(this._currentRoll.toString(), "20px Arial", "#cc66ff", this._lastX + 37.5, config.Screen.CENTER_Y + 100);
            this.addChild(this._dieLabel);
            this._lastX += 100;
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