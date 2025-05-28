import { Component } from "react";
import "./Grid.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = { ballX: 0, ballY: 0 };
  }

  componentDidUpdate() {
    const canvas = document.getElementById("gridCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    this.drawPolCompass();
    this.drawBallAtPosition();
  }

  drawPolCompass() {
    const canvas = document.getElementById("gridCanvas");
    const ctx = canvas.getContext("2d");

    const colors = [
      "#f72525", // Top-left
      "#2584f7", // Top-right
      "lightgreen", // Bottom-left
      "yellow", // Bottom-right
    ];

    const squareWidth = canvas.width / 2;
    const squareHeight = canvas.height / 2;

    function drawSquare(x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, squareWidth, squareHeight);
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, squareWidth, squareHeight);
    }
    drawSquare(0, 0, colors[0]);
    drawSquare(squareWidth, 0, colors[1]);
    drawSquare(0, squareHeight, colors[2]);
    drawSquare(squareWidth, squareHeight, colors[3]);
  }

  drawBallAtPosition() {
    const canvas = document.getElementById("gridCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.arc(this.state.ballX, this.state.ballY, 5, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }
  componentDidMount() {
    this.drawPolCompass();
    this.drawBallAtPosition();
  }

  isOnMobile() {
    let width = Math.max(window.screen.width, window.innerWidth);
    return width <= 500;
  }

  getSquareWidth() {
    return this.isOnMobile() ? 100 : 200;
  }
  render() {
    let responsiveCanvas = this.isOnMobile() ? <canvas width="200" height="200" id="gridCanvas"></canvas> : <canvas width="400" height="400" id="gridCanvas"></canvas>
    this.state = {
      ballX: this.props.economic * (this.getSquareWidth() / (this.props.questionNumbers.x * 2)) + this.getSquareWidth(),
      ballY: -1 * this.props.social * (this.getSquareWidth() / (this.props.questionNumbers.y * 2)) + this.getSquareWidth(),
    };
    return (
      <><div className="gridArea">
        <div className="gridLabel verticalLabel">{this.props.fieldNames.y}</div>
        <div className="gridArea_verticalElements">
          <div className="gridLabel horizontalLabel">{this.props.fieldNames.x}</div>
          {responsiveCanvas}
          <div>{this.props.economic} , {this.props.social}</div>
        </div>
      </div><div>
        </div>
      </>
    );
  }
}
export default Grid;
