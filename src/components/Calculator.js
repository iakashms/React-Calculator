import React from 'react'

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            history : []
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.validate = this.validate.bind(this)
    }

    handleClick(e){
        if(e.target.value==="plusOrMinus"){
            let afterEval = this.validate(this.state.calculatorInput)
            if(afterEval){
                this.setState({
                    calculatorInput : -(afterEval)
                })
            }else{
                let plusOrMinus = this.state.calculatorInput+'(-';
                this.setState({
                    calculatorInput : plusOrMinus
                })
            }
            return false;
        }
        let value = this.state.calculatorInput && this.state.calculatorInput !=0 ? this.state.calculatorInput+e.target.value : e.target.value;
        this.setState({
            calculatorInput : value
        })
    }

    handleSubmit(e){
        if(this.state.calculatorInput){
            let afterEval = this.validate(this.state.calculatorInput)
            if(afterEval){
                this.setState({
                    calculatorInput : afterEval
                })
            }else{
                alert("Invalid Expression")
            }
        }
    }

    handleClear(e){
        let value = e.target.value;
        if(value === 'clearAll'){
            this.setState({
                calculatorInput : ''
            })
            return true
        }
        if(this.state.calculatorInput){
            this.setState({
                calculatorInput : this.state.calculatorInput.slice(0,this.state.calculatorInput.length-1)
            })
        }
    }

    validate(expression){
        try { 
            let evalResult = eval(expression).toString();
            return evalResult;
        } catch(err) { 
            return false; 
        }
    };

    render(){
        return(
            <div className="calculator App">
                <div className="cursor">
                    <p style={{margin:'8pt',fontSize:'22pt',fontFamily:'sans-serif',height:'39px',textAlign:'right'}}>{this.state.calculatorInput}</p>
                </div>
                <div className="historyandclear">
                    <button className="" style={{color:'grey',width:'50%',backgroundColor:'white',textAlign:'center'}} disabled>HISTORY (Coming Soon)</button>
                    <button className="" onClick={this.handleClear} value="clearAll" style={{color:'red',width:'25%',backgroundColor:'white',textAlign:'center',fontSize:'17pt'}}>C</button>
                    <button className="" onClick={this.handleClear} value="clear" style={{color:'blue',width:'25%',backgroundColor:'white',textAlign:'center',fontSize:'17pt'}}>&#8656;</button>
                </div>
                <div className="contents">
                    <button className="content-buttons"  onClick={this.handleClick} value="(" style={{color:'blue'}}>(</button>
                    <button className="content-buttons"  onClick={this.handleClick} value=")" style={{color:'blue'}}>)</button>
                    <button className="content-buttons"  onClick={this.handleClick} value="%" style={{color:'blue'}}>&#37;</button>
                    <button className="content-buttons"  onClick={this.handleClick} value="/" style={{color:'blue'}}>&#xF7;</button>
                        <br></br>
                    <button className="content-buttons"  onClick={this.handleClick} value="7">7</button>
                    <button className="content-buttons"  onClick={this.handleClick} value="8">8</button>
                    <button className="content-buttons"  onClick={this.handleClick} value="9">9</button>
                    <button className="content-buttons"  onClick={this.handleClick} value="*" style={{color:'blue'}}>&times;</button>
                        <br></br>
                    <button className="content-buttons"  onClick={this.handleClick} value="4">4</button>
                    <button className="content-buttons"  onClick={this.handleClick} value="5">5</button>
                    <button className="content-buttons"  onClick={this.handleClick} value="6">6</button>
                    <button className="content-buttons"  onClick={this.handleClick} value="-" style={{color:'blue'}}>&minus;</button>
                        <br></br>
                    <button className="content-buttons"  onClick={this.handleClick} value="1">1</button>
                    <button className="content-buttons"  onClick={this.handleClick} value="2">2</button>
                    <button className="content-buttons"  onClick={this.handleClick} value="3">3</button>
                    <button className="content-buttons"  onClick={this.handleClick} value="+" style={{color:'blue'}}>&#43;</button>
                        <br></br>
                    <button className="content-buttons"  onClick={this.handleClick} value="plusOrMinus">&plusmn;</button>
                    <button className="content-buttons"  onClick={this.handleClick} value="0">0</button>
                    <button className="content-buttons"  onClick={this.handleClick} value=".">.</button>
                    <button className="content-buttons" 
                            id="caclulate" 
                            style={{backgroundColor:'#34abeb',color:'white'}}
                            onClick={this.handleSubmit}
                            value="submit"
                            >&#61;</button>
                </div>
            </div>
        )
    }
}

export default Calculator