import React from 'react'
import ReactDOM from 'react-dom'
import App from './compoents/counter'

const Card = () => {
  return (
    <div className="alert">
      <font size="6" color="blue">資管四甲 10544107 李欣汶Candy</font>
      <br></br>
      <font size="5" color="red">2019/10/6 react 第一個計數器</font>
      <App />
    </div>
  )
}

// eslint-disable-next-line react/prop-types
// const Title = ({ text }) => <h5 className="text-bold">{text}</h5>

// const cartList = [
//   'test1', 'text2'
// ]

// const Card = () => {
//   return (
//     <div>
//       {cartList.map((el, inx) => {
//         return <Title key={inx} text={el}/>
//       })
//       }
//     </div>
//   )
// }

// // eslint-disable-next-line no-unused-vars
// const Card2 = () => {
//   return (
//     <div>
//       <Title text={'我是測試'}/>
//     </div>
//   )
// }

// var Index = function Index() {
//     return React.createElement('div',{
//         className: 'helloworld'
//     },'Hello React,Webpack4,Babel7!')
// }

// const Index = () => {
//     return <div className="helloworld">Hello React,Webpack4,Babel7!</div>;
// };

// ReactDOM.render(<Card/>, document.querySelector('#root'))

// ReactDOM.render(<Index />, document.querySelector("#root"));
const rootElement = document.getElementById('root')
ReactDOM.render(<Card />, rootElement)
