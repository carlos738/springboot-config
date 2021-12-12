import React, {Component} from "react"
import ReactDom from"react-dom"
import"./style.css"

class App extends Component{
    constructor(props){
        super(props)

        this.state={
            clock: 1000,
            copo: 'água'
        }
        componentDiMount(){
            windowsetTimeOut(()=>{
                this.state({
                    copo:'refrigerante'
                })
            })
            render(){
                const{
                    clock,copo
                }=this.state
                return(
                    <<div>
                        <h1>{clock}</h1>
                        <Button onClick={()=> this.alterarCopo()}><h1>{copo}</h1></Button>                    </div>>
                )
            }
        }
        const rootElement= document.getElementId("root")
        ReactDom.render(<App/>,rootElement)
    }

}