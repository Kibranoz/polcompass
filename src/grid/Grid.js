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
        return ( 
            <Fragment>
            <div className = "grid-area">
                <div className = "pointElement" style = {{
            fontSize: 14,
            "line-height":"50%",
            textAlign: "center",
            top:"50%",

            transform: "translate("+0.5*this.props.identite+"%,"+ (-0.5)*this.props.socioeconomique+"%)",
            paddingTop: "50.5%",
            paddingBottom:"49.5%"
        }}>🎱</div>  
        </div>
        <div>
        {this.props.identite} , {this.props.socioeconomique} </div>
        </Fragment>
        );
    }
}
export default Grid;