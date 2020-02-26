import React from 'react'
class Demo3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:"我是一个事件组件",
            username:""
         };
    }
    run=(event)=>{
        console.log(event);
        console.log(event.target);
        event.target.style.background="red"
        console.log(event.target.getAttribute("aid"));
        
    }
    // 第一种
    inputChange=(event)=>{
        // console.log(event);
        console.log(event.target.value);
        this.setState({
            username:event.target.value
        })
    }
    getInput=()=>{
        alert(this.state.username)
    }
    // 第二种
    inputChange_ref=()=>{
        // console.log(event);
        console.log(this.refs.username.value);
        this.setState({
            username:this.refs.username.value
        })
    }
    getInput_ref=()=>{
        alert(this.state.username)
    }
    inputKeyUp(e){
        console.log(e.keyCode);
        if (e.keyCode==13) {
            alert(e.target.value)
        }
    }
    inputKeyDown(e){
        console.log(e.keyCode);
        if (e.keyCode==13) {
            alert(e.target.value)
        }
    }
    // 数据双向绑定
    inputChange_mode=(e)=>{
        this.setState({
            msg:e.target.value
        })
    }
    render() {
        return (
            <div>
                {this.state.msg}
                {/* 事件对象 */}
                <h2>事件对象演示</h2>
                <button aid="123" onClick={this.run}>事件对象</button>
                <br/>
                <br/>
                <h2>表单事件</h2>
                <div>第一种获取表单值的方法</div>
                {/* 获取表单值
                1、监听表单改变事件                             onChange
                2.在改变事件里面获取表单输入的值                event事件对象
                3、把表单输入的值赋值给username                 this.setState({})
                4、点击按钮的时候获取state里面的username        this.state.username*/}
                <input onChange={this.inputChange}/><button onClick={this.getInput}>获取input值第一种方法</button>
                {/* 获取表单值
                1、监听表单改变事件                             onChange
                2.在改变事件里面获取表单输入的值                ref
                3、把表单输入的值赋值给username                 this.setState({})
                4、点击按钮的时候获取state里面的username        this.state.username*/}
                <input ref="username" onChange={this.inputChange_ref}/><button onClick={this.getInput_ref}>获取input值第二种方法</button>
                <h2>键盘事件</h2>
                键盘弹起事件
                <input onKeyUp={this.inputKeyUp}/>
                <br/>
                键盘按下事件
                <input onKeyDown={this.inputKeyDown}/>
                <br/>
                数据双向绑定
                <input value={this.state.msg} onChange={this.inputChange_mode}></input>
                <br/>
                {this.state.msg}
            </div>
        );
    }
}

export default Demo3;