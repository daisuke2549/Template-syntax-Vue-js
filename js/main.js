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


/* v-cloakディレクティブ */
var app = new Vue({
   el:'#app4',
   data:{
      message: 'Hello Vue.js'
   }
})


/* v-textディレクティブ ⇨基本的にはMustache構文に統一するのがおすすめ*/
var app = new Vue({
   el:'#app5',
   data:{
      message: 'Hello Vue.js'
   }
})


/* バインディング式 */
/* javascript式 */

// var app = new Vue({
//    el:'#app6',
//    data:{
//       message: 'Hello Vue.js',
//       number:100,
//       ok:false
//    }
// })



/* フィルタ式*/


/* グローバルフィルター*/

// Vue.filter('numberFormat', function(value){
//      return value.toLocaleString();
// })



// var app = new Vue({
//    el:'#app7',
//    data:{
//       price: 2980000000
//    },
//    // filters:{
//    //    numberFormat: function(value){
//    //       return value.toLocaleString()
//    //    }
//    // }
// })



// Vue.filter('toUSD', function(jpy){
//    return jpy /  100
// }


// Vue.filter('numberFormat', function(value){
//       return value.toLocaleString()
// })



// var app = new Vue({
//    el:'#app8',
//    data:{
//       jpyPrice: 29800
//    },
// })



var app = new Vue({
   el: '#app9',
   data:{
      url:'https://www.google.co.jp/'
   }
})

