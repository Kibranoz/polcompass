import { render } from "@testing-library/react";
import { Component, Fragment } from "react";
import compass from "./compass4.jpg"
import "./Grid.css";

class Grid extends Component{
    constructor(props) {
        super(props);
      }
      //TODO; réduire limage 
    render(){
        console.log("translate("+(25/12)*this.props.economic+"%,"+ (-25/13)*this.props.social+"%)")
        return ( 
            <div className="grid-section">
            <div className = "grid-area">
                
                <div className = "pointElement" style = {{
            fontSize: 14,
            position:"relative",
            textAlign: "center",
            transform: "translate("+(25/12)*this.props.economic+"%,"+ (-25/13)*this.props.social+"%)",
            paddingTop: "50%",
            paddingBottom:"50%"
        }}>🎱</div>  
        </div>
        <div>
        {this.props.economic} , {this.props.social} </div>
        </div>
        );
    }
}
export default Grid;