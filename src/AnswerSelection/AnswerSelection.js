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
        this.infos = {lastAffected:this.props.question["affects"],lastDirection:Number(this.props.question["direction"]),lastIntensity:intensity, lastAnswer:answer, canGoBack:true};
      }

      updateInfos = (answer,intensity) => {
        this.infos = {lastAffected:this.props.question["affects"],lastDirection:Number(this.props.question["direction"]),lastIntensity:intensity, lastAnswer:answer, canGoBack:true};
      }



      updateInfosBack = () => {
        this.infos.canGoBack = false;

      }
      chooseAppropriateClickHandler = (answer, intensity) => {
        //this.setState({lastAffected:this.props.question["affects"]});
        //console.log(this.infos);
        return this.props.clickHandlerFunctions[this.props.question["affects"]].bind(this,answer*intensity*Number(this.props.question["direction"]))
      }

      switchQuestion = (by=1) =>
      {
        return this.props.questionHandler.bind(this,by);
      }
      backHandler = () => {
        if (this.infos.canGoBack){
          this.infos.canGoBack = false;
          console.log(this.infos);
          //this.setState({canGoBack:false});
          return this.props.clickHandlerFunctions[this.infos.lastAffected].bind(this,-1*this.infos.lastAnswer*this.infos.lastIntensity*this.infos.lastDirection)

        }

      }
      render(){
        return(
          <div className = "questionArea">
            <Fragment>
                <AnswerButton answer="Totally agree" questionHandler = {this.switchQuestion} color = "#81D799" clickHandler={this.chooseAppropriateClickHandler(1,2)} updater={this.chooseUpdateInfos(1,2)} ></AnswerButton>
                <AnswerButton answer="Agree" questionHandler = {this.switchQuestion} clickHandler={this.chooseAppropriateClickHandler(1,1)} color="#BAE6C2" updater={this.chooseUpdateInfos(1,1)} ></AnswerButton>
                <AnswerButton answer="Unsure/Neutral" questionHandler = {this.switchQuestion} color = "#EEE573"></AnswerButton>
                <AnswerButton answer="Disagree" questionHandler = {this.switchQuestion} color = "#FFADAB" clickHandler={this.chooseAppropriateClickHandler(-1,1)} updater={this.chooseUpdateInfos(-1,1)}></AnswerButton>
                <AnswerButton answer="Totally Disagree" questionHandler = {this.switchQuestion} color = "#EE7373" clickHandler={this.chooseAppropriateClickHandler(-1,2)}updater={this.chooseUpdateInfos(-1,2)}></AnswerButton>
                <AnswerButton answer="Go back" questionHandler = {this.switchQuestion(-1)} color = "#EE7373" clickHandler={this.backHandler}updater={this.updateInfosBack} ></AnswerButton>
            </Fragment>
            </div>
        )
      }
    }
    export default AnswerSelection;