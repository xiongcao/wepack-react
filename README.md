### 一：相关命令   
dev: 热更新,速度非常快, 作用的是webpack.config.js 中的devServer    
start: 热更新，作用的是dev-server.js(Node.js API)   
srver: 不会热更新   
build: 打包   
watch: 打包并监听dist文件改动，需手动刷新浏览器   
analyz: 可视化展示依赖关系   
http-server： 使用的是node http-server 搭建的服务器，可访问dist   

### 二：技术栈   
webapck4.x + react16.x + react-redux + redux + react-router + react-router-dom    

### 三：注意事项    
1.class中无法使用箭头函数，是因为缺少@babel/preset-stage-0,然后这个bable已经被弃用，可以使用 "@babel/plugin-syntax-dynamic-import", "@babel/plugin-syntax-import-meta", "@babel/plugin-proposal-class-properties", "@babel/plugin-proposal-json-strings" 替代
