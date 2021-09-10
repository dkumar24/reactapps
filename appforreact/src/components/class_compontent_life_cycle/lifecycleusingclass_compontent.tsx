import { count } from "console";
import { Component } from "react";
import { Information } from "./information_component";

interface IProps{
    initialValue:number;
   
}
interface IState{
    count:number;
    hideInformation:boolean;
}

export class LifeCycleDemo extends Component<IProps,IState>
{
    state:IState={
        count:this.props.initialValue,
        hideInformation:false
    };

     buttonClicked = ()=>{
        this.setState({count:this.state.count+1,hideInformation:true})

    }
    render()
    {
        console.log("Render Called")
        return <div>
            Compontent with Class Class Compontent : {this.state.count}
            <button onClick={this.buttonClicked}>Click Me</button>
            {!this.state.hideInformation && <Information/>}
        </div>
    }
    shouldComponentUpdate()
    {
        return true
    }
    componentDidUpdate(previousProps:IProps,previousState:IState)
    {
            console.log("Component DidUpdate Called",previousProps,previousState);
    }
    
    componentWillReceiveProps(nextProps:IProps)
    {
        console.log("componentWillReceiveProps",nextProps)
    }
   
    
        componentDidMount(){
            console.log("Didmountcalled",this.state.count)
            this.setState({count:this.state.count+1})
            
        }
}