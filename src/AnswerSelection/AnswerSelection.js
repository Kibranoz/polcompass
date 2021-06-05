import { render } from "@testing-library/react";
import { Component, Fragment } from "react";
import AnswerButton from "../AnswerButton/AnswerButton.js"
import "./AnswerSelection.css"
class AnswerSelection extends Component{
    constructor(props) {
        super(props);
        this.infos = {lastAffected:"socioeconomique",lastDirection:0,lastIntensity:0, lastAnswer:1, canGoBack:false};
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
          return this.props.clickHandlerFunctions[this.infos.lastAffected.toString()].bind(this,-1*this.infos.lastAnswer*this.infos.lastIntensity*Number(this.infos.lastDirection),-1)

        }
        else {
          return this.props.clickHandlerFunctions[this.infos.lastAffected.toString()].bind(this,0,0)

        }
        //call in frangments is okay, because we want the return of this function
      }
      render(){
        return(
          <div>
          <div className = "questionArea">
            <Fragment>
                <AnswerButton answer="Complètement d'accord" color = "#81D799" clickHandler={this.chooseAppropriateClickHandler(1,2)} updater={this.chooseUpdateInfos(1,2)} ></AnswerButton>
                <AnswerButton answer="D'accord"  clickHandler={this.chooseAppropriateClickHandler(1,1)} color="#BAE6C2" updater={this.chooseUpdateInfos(1,1)} ></AnswerButton>
                <AnswerButton answer="Ne se prononce pas" clickHandler={this.chooseAppropriateClickHandler(0,0)} updater={this.chooseUpdateInfos(0,0)} color = "#EEE573"></AnswerButton>
                <AnswerButton answer="En désaccord"  color = "#FFADAB" clickHandler={this.chooseAppropriateClickHandler(-1,1)} updater={this.chooseUpdateInfos(-1,1)}></AnswerButton>
                <AnswerButton answer="Complètement en désaccord"  color = "#EE7373" clickHandler={this.chooseAppropriateClickHandler(-1,2)}updater={this.chooseUpdateInfos(-1,2)}></AnswerButton>
                <AnswerButton answer="Retour" color = "#ffa8d7" clickHandler={this.backHandler()}updater={this.updateInfosBack} ></AnswerButton>

            </Fragment>
            </div>
            <div className = "questionAreaMobile">
              <Fragment>
              <AnswerButton answer= "😃" color = "#81D799" clickHandler={this.chooseAppropriateClickHandler(1,2)} updater={this.chooseUpdateInfos(1,2)} ></AnswerButton>
                <AnswerButton answer="🙂"  clickHandler={this.chooseAppropriateClickHandler(1,1)} color="#BAE6C2" updater={this.chooseUpdateInfos(1,1)} ></AnswerButton>
                <AnswerButton answer="🤨" clickHandler={this.chooseAppropriateClickHandler(0,0)} updater={this.chooseUpdateInfos(0,0)} color = "#EEE573"></AnswerButton>
                <AnswerButton answer="☹️"  color = "#FFADAB" clickHandler={this.chooseAppropriateClickHandler(-1,1)} updater={this.chooseUpdateInfos(-1,1)}></AnswerButton>
                <AnswerButton answer="😡"  color = "#EE7373" clickHandler={this.chooseAppropriateClickHandler(-1,2)}updater={this.chooseUpdateInfos(-1,2)}></AnswerButton>
                <AnswerButton answer="⏮" color = "#ffa8d7" clickHandler={this.backHandler()}updater={this.updateInfosBack} ></AnswerButton>
              </Fragment>
            </div>
            </div>
        )
      }
    }
    export default AnswerSelection;