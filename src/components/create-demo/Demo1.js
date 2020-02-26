import React from 'react'
import test0 from "../../assets/img/test0.jpg"
// 绑定数据
class Demo1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mesg: "我是demo1，创建组件、绑定组件、jsx语法、绑定数据、绑定对象",
            title: "我的title属性",
            color: 'red',
            style: {
                color: 'orange',
                fontSize: '35px'
            },
            hList:[<h2 key="1">第一个h2</h2>,<h2 key="2">第二个h2</h2>,<h2 key="3">第三个h2</h2>],
            list: [
                { name: "link", age: 24 },
                { name: "link1", age: 23 },
                { name: "link2", age: 22 },
                { name: "link3", age: 21 },
                { name: "link4", age: 20 },
                { name: "link5", age: 19 },
            ],
            list1: [
                { name: "peng", age: 24 },
                { name: "peng1", age: 23 },
                { name: "peng2", age: 22 },
                { name: "peng3", age: 21 },
                { name: "peng4", age: 20 },
                { name: "peng5", age: 19 },
            ]
        };
    }
    render() {
        let listResult = this.state.list.map(function (value, key) {
            return <li key={key}>{value.name}++++++{value.age}</li>
        })
        return (
            <div>
                <div title={this.state.title}>{this.state.title}</div>
                <br />
                <br />
                <div className="red">{this.state.mesg}</div>
                <br />
                <div className={this.state.color}>{this.state.mesg}</div>
                <br />
                <label htmlFor="name">name</label>
                <input id="name" />
                <div style={{ 'color': 'red' }}>我是一个style绑定div</div>
                <br />
                <div style={this.state.style}>我是一个style绑定div</div>
                <br />
                <div>
                    <div>import绑定图片</div>
                    <img style={{ 'width': '200px', 'height': '200px' }} src={test0} alt="测试图片"/>

                    <div>require加载图片</div>
                    <img style={{ 'width': '200px', 'height': '200px' }} src={require("../../assets/img/test1.jpg")} alt="测试图片"/>
                </div>
                <div>
                    <h2>直接加载数组</h2>
                    {this.state.hList}
                    <h2>循环数组数据方法1</h2>
                    <ul>
                        {listResult}
                    </ul>
                    <br/>
                    <h2>循环数组数据方法2</h2>
                    <ul>
                        {
                            this.state.list1.map(function (value, key) {
                                return (<li key={key}>{value.name}++++++{value.age}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Demo1;