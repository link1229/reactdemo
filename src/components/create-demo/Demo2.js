import React from 'react'
class Demo2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:"我是demo2组件",
            name:"link"
         };
         // 第二中改变this指向
         this.getMessage=this.getMessage.bind(this);
    }
    run(){
        alert("我是点击方法")
    }
    getData(){
        alert(this.state.title)
    }
    getMessage(){
        alert(this.state.title)
    }
    // 第三种改变this指向
    getName=()=>{
        alert(this.state.name)
    }
    setName(name){
        this.setState({
            name:name
        })
    }
    setData=()=>{
        this.setState({
            title:"我是demo2组件 改变后的值"
        })
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <h2>{this.state.name}</h2>
                <button onClick={this.run}>执行方法</button>
                <br/>
                <button onClick={this.getData.bind(this)}>获取数据，第一种改变this指向的方法(传值this过去)</button>
                <br/>
                <button onClick={this.getMessage}>获取数据，第二种改变this指向的方法（在构造函数constructor中改变指向）</button>
                <br/>
                <button onClick={this.getName}>获取数据，第三种改变this指向的方法（箭头函数改变指向）</button>
                <br/>
                <button onClick={this.setData}>改变值</button>
                <br/>
                <button onClick={this.setName.bind(this,"张三")}>传参</button>
            </div>
        );
    }
}

export default Demo2;