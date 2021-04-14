import { render } from "@testing-library/react";
import { Component, Fragment } from "react";
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

            transform: "translateX("+2*this.props.economic+"px)",
            paddingTop: "267px",
            paddingBottom:"268px"
        }}>🎱</div>
                
        </div>
        <div>
        {this.props.economic} , {this.props.social} </div>
        </Fragment>
        );
    }
}
export default Grid;