import { render } from "@testing-library/react";
import { Component, Fragment } from "react";
import compass from "./compass4.jpg";
import "./Grid.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = { ballX: 10, ballY: 20 };
  }

  //TODO; réduire limage

  componentDidUpdate() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    this.drawPolCompass();

    ctx.fillStyle = "white";
    ctx.arc(this.state.ballX, this.state.ballY, 10, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
  }

  drawPolCompass() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Define the colors for the four squares
    const colors = [
      "magenta", // Top-left
      "blue", // Top-right
      "lightgreen", // Bottom-left
      "yellow", // Bottom-right
    ];

    // Calculate the dimensions of each square
    const squareWidth = canvas.width / 2;
    const squareHeight = canvas.height / 2;

    // Function to draw a single square
    function drawSquare(x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, squareWidth, squareHeight);
      ctx.strokeStyle = "black"; // Add black border
      ctx.lineWidth = 2; // Set border width
      ctx.strokeRect(x, y, squareWidth, squareHeight); // Draw the border
    }

    // Draw the four squares
    drawSquare(0, 0, colors[0]);
    drawSquare(squareWidth, 0, colors[1]);
    drawSquare(0, squareHeight, colors[2]);
    drawSquare(squareWidth, squareHeight, colors[3]);
  }
  componentDidMount() {
    this.drawPolCompass();
  }
  render() {
    this.state = {
      ballX: this.props.economic * (200 / 11) + 200,
      ballY: -1 * this.props.social * (200 / 13) + 200,
    };
    console.log("state", this.state);
    return (
      <div className="grid-section">
        <div className="grid-area">
          <canvas id="myCanvas" width="400" height="400"></canvas>
        </div>
        <div>
          {this.props.economic} , {this.props.social}{" "}
        </div>
      </div>
    );
  }
}
export default Grid;
