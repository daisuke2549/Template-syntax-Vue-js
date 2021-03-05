/* v-onceディレクティブ */
var app = new Vue({
     el:'#app',
     data:{
        message: 'Hello Vue.js'
     },
     methods:{
          clickHandler: function(event){
             this.message = this.message.split('').reverse().join('')
          }
     }
})


/* v-preディレクティブ =生のMustacheタグを表示したいとき　XSS対策　*/
var app = new Vue({
     el:'#app2',
     data:{
        message: 'Hello Vue.js'
     }
})

/* v-htmlディレクティブ */
var app = new Vue({
     el:'#app3',
     data:{
        message: '  Hello <span style="color:red;"> Vue.js</span>'
     }
})