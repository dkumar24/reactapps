import { Component } from "react";

export class Information extends Component{
    

    render()
    {
        return <div>"Hello World"</div>
    }
    componentWillUnmount()
    {
        console.log("Unmount called")
    }

}