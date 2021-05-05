import { render } from "@testing-library/react";
import { Component, Fragment } from "react";
import AnswerButton from "../AnswerButton/AnswerButton.js"
import "./AnswerSelection.css"
class AnswerSelection extends Component{
    constructor(props) {
        super(props);
        this.infos = {lastAffected:"social",lastDirection:0,lastIntensity:0, lastAnswer:1, canGoBack:false};
      }
      updateHandler = (answer,intensity,lastDirection,lastIntensity,) => {
        this.infos = {lastAffected:this.props.question["affects"],lastDirection:Number(this.props.question["direction"]),lastIntensity:intensity, lastAnswer:answer, canGoBack:true};
        console.log('update')
      }
      chooseUpdateInfos = (answer,intensity) => {
        return this.updateInfos.bind(this,answer,intensity);
      }

      updateInfos = (answer,intensity) => {
        this.infos = {lastAffected:this.props.question["affects"],lastDirection:Number(this.props.question["direction"]),lastIntensity:intensity, lastAnswer:answer, canGoBack:true};
      }

      updateInfosBack = () => {
        this.infos.canGoBack = false;
      }
      chooseAppropriateClickHandler = (answer, intensity) => {
        return this.props.clickHandlerFunctions[this.props.question["affects"]].bind(this,answer*intensity*Number(this.props.question["direction"]),1)
      }

      backHandler = () => {
        if (this.infos.canGoBack){
          this.infos.canGoBack = false;
          return this.props.clickHandlerFunctions[this.infos.lastAffected.toString()].bind(this,-1*this.infos.lastAnswer*this.infos.lastIntensity*Number(this.infos.lastDirection),-1)

        }
        else {
          return this.props.clickHandlerFunctions[this.infos.lastAffected.toString()].bind(this,0,0)

        }
        //call in frangments is okay, because we want the return of this function
      }
      render(){
        return(
          <div className = "questionArea">
            <Fragment>
                <AnswerButton answer="Totally agree" color = "#81D799" clickHandler={this.chooseAppropriateClickHandler(1,2)} updater={this.chooseUpdateInfos(1,2)} ></AnswerButton>
                <AnswerButton answer="Agree"  clickHandler={this.chooseAppropriateClickHandler(1,1)} color="#BAE6C2" updater={this.chooseUpdateInfos(1,1)} ></AnswerButton>
                <AnswerButton answer="Unsure/Neutral" clickHandler={this.chooseAppropriateClickHandler(0,0)} updater={this.chooseUpdateInfos(0,0)} color = "#EEE573"></AnswerButton>
                <AnswerButton answer="Disagree"  color = "#FFADAB" clickHandler={this.chooseAppropriateClickHandler(-1,1)} updater={this.chooseUpdateInfos(-1,1)}></AnswerButton>
                <AnswerButton answer="Totally Disagree"  color = "#EE7373" clickHandler={this.chooseAppropriateClickHandler(-1,2)}updater={this.chooseUpdateInfos(-1,2)}></AnswerButton>
                <AnswerButton answer="Go back" color = "#ffa8d7" clickHandler={this.backHandler()}updater={this.updateInfosBack} ></AnswerButton>
            </Fragment>
            </div>
        )
      }
    }
    export default AnswerSelection;