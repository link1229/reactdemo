import React from 'react'
import '../assets/css/home.css'
import{BrowserRouter as Router,Route,Link} from 'react-router-dom'
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h1 className="home-title">react-demo</h1>
                <hr/>
                <ul className="demo-list">
                    <li><Link target="_blank" to="/demo1">1、创建组件、绑定组件、jsx语法、绑定数据、绑定对象</Link></li>
                    <li><Link target="_blank" to="/demo2">2、react事件方法、定义方法的几种方式、获取数据、改变数据、执行方法传值</Link></li>
                    <li><Link target="_blank" to="/demo3">3、React 键盘事件 表单事件 事件对象以及React中的ref获取dom节点 、React实现类似Vue的双向数据绑定</Link></li>
                    <li><Link target="_blank" to="/">1、demo1</Link></li>
                </ul>
            </div>
        );
    }
}

export default Home;