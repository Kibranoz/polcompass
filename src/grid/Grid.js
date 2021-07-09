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
            fontSize: 20,
            "line-height":"50%",
            textAlign: "center",
            top:"50%",
            bottom:"50%",
            transform: "translate("+1*this.props.economic+"%,"+ (-1)*this.props.social+"%)",
            paddingTop: "50.5%",
            paddingBottom:"49.5%",
            maxWidth:"100%!important",
        }}>🎱</div>  
        </div>
        <div>
        {this.props.economic} , {this.props.social} </div>
        </Fragment>
        );
    }
}
export default Grid;