## 一.todoList案例知识点
    1.拆分组件、实现静态组件，注意：className、style的写法
    2.动态化初始化列表，如果确定将数据放在那个组件的state中？
        ----某个组件的使用：放在其自身的state中
        ----某些组件的使用：放在他们共同的父组件的state中，（官方称之为：状态提升）
    3.关于父子之间通信：
        1.【父组件】给【子组件】传递数据：通过props传递
        2.【子组件】个【父组件】传递数据：通过props传递方法，要求父组件提前给子组件传递一个函数
    4.注意defaultChecked和checked的区别：类似还有defaultValue和value: 
        区别： defaultChecked只在第一次赋值时有用，checked一直有用
    5.状态在哪里，操作状态提升的方法就在哪里。