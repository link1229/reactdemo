import React from 'react'
class Demo4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            title:"react表单",
            name:"",
            sex:'1',
            citys:["北京","西安","武汉"],
            city:'',
            hobby:[
                {
                    title:"看书",
                    checked:true
                },
                {
                    title:"玩",
                    checked:true
                },
                {
                    title:"敲代码",
                    checked:false
                },
                {
                    title:"睡觉",
                    checked:true
                }
            ],
            info:''
         };
    }
    handelName=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handelSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.name,this.state.sex,this.state.city,this.state.hobby,this.state.info);
        
    }
    handelSex=(e)=>{
        this.setState({
            sex:e.target.value
        })
    }
    handelCity=(e)=>{
        this.setState({
            city:e.target.value
        })
    }
    handelHobby=(key)=>{
        // console.log(key);
        var hobby=this.state.hobby;
        hobby[key].checked=!hobby[key].checked;
        this.setState({
            hobby:hobby
        })
    }
    handelInfo=(e)=>{
        this.setState({
            info:e.target.value
        })
    }
    render() {
        return (
           <div>
               <h2>{this.state.title}</h2>
               <div>
                <form onSubmit={this.handelSubmit}>
                    用户名：<input type="text" value={this.state.name} onChange={this.handelName}/>
                    <br/>
                    性别：<input type="radio" value='0' checked={this.state.sex=="0"} onChange={this.handelSex}/>男
                    <input type="radio" value='1' checked={this.state.sex=="1"} onChange={this.handelSex}/>女
                    <br/>
                    居住城市：<select value={this.state.city} onChange={this.handelCity}>
                        {
                            this.state.citys.map(function(value,key){
                                return (
                                <option key={key}>{value}</option>
                                )
                            })
                        }
                        
                    </select>
                    <br/>
                    爱好：{
                        // 注意this指向
                        this.state.hobby.map((value,key)=>{
                            return (
                                <div key={key}>
                                    {value.title} <input type="checkbox" onChange={this.handelHobby.bind(this,key)} checked={value.checked}/>
                                </div>
                                
                            )
                        })
                    }
                    <br/>
                    <br/>
                    <br/>
                    备注：<textarea value={this.state.info} onChange={this.handelInfo}></textarea>
                    <br/>
                    <input type="submit" value="提交"/>
                </form>
               </div>
           </div> 
        );
    }
}

export default Demo4;