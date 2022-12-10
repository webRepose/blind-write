'use strict';
const ua = window.navigator.userAgent;
if (ua.indexOf("MSIE ") > 0 || ua.indexOf("Trident") > 0) {
    window.location.href = "microsoft-edge:" + window.location.href;

    setTimeout(function () {
        window.location.href = "https://support.microsoft.com/en-us/microsoft-edge/this-website-doesn-t-work-in-internet-explorer-8f5fc675-cd47-414c-9535-12821ddfc554";
    }, 0);
}


// let counterClickHome = 0;
// document.querySelector("#type-home").addEventListener("click",()=>{
//     counterClickCode = 0;
//     counterClickCacpcha = 0;
//     counterClickSymbol = 0;
//     counterClickText = 0;
//     counterClickHome++;
//     if(counterClickHome > 1) {
//         return false;
//     }
//     fetch('main/home.html').then((response) => {
//         return response.text()
//     }).then((body) => {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(body, "text/html");
//         document.querySelector("main").innerHTML = new XMLSerializer().serializeToString(doc);
//     }).catch((err) => {  
//         console.log('Failed to fetch page: ', err);
//     });
// });

// let counterClickText = 0;
// document.querySelector("#type-text").addEventListener("click",()=>{
//     counterClickCode = 0;
//     counterClickCacpcha = 0;
//     counterClickSymbol = 0;
//     counterClickHome = 0;
//     counterClickText++;
//     if(counterClickText > 1) {
//         return false;
//     }
//     fetch('text/setting.html').then((response) => {
//         return response.text();
//     }).then((body) => {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(body, "text/html");
//         document.querySelector("main").innerHTML = new XMLSerializer().serializeToString(doc);
//     }).catch((err) => {  
//         console.log('Failed to fetch page: ', err);
//     });
// });


// let counterClickCode = 0;
// document.querySelector("#type-code").addEventListener("click",()=>{
//     counterClickText = 0;
//     counterClickCacpcha = 0;
//     counterClickSymbol = 0;
//     counterClickHome = 0;
//     counterClickCode++;
//     if(counterClickCode > 1) {
//         return false;
//     }
//     fetch('code/code.html').then((response) => {
//         return response.text();
//     }).then((body) => {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(body, "text/html");
//         document.querySelector("main").innerHTML = new XMLSerializer().serializeToString(doc);
//     }).catch((err) => {  
//         console.log('Failed to fetch page: ', err);
//     });
// });


// let counterClickCacpcha = 0;
// document.querySelector("#type-capcha").addEventListener("click",()=>{
//     counterClickText = 0;
//     counterClickCode = 0;
//     counterClickSymbol = 0;
//     counterClickHome = 0;
//     counterClickCacpcha++;
//     if(counterClickCacpcha > 1) {
//         return false;
//     }
//     fetch('capcha/setting.html').then((response) => {
//         return response.text();
//     }).then((body) => {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(body, "text/html");
//         document.querySelector("main").innerHTML = new XMLSerializer().serializeToString(doc);
//     }).catch((err) => {  
//         console.log('Failed to fetch page: ', err);
//     });
// });

// let counterClickSymbol = 0;
// document.querySelector("#type-symbol").addEventListener("click",()=>{
//     counterClickText = 0;
//     counterClickCode = 0;
//     counterClickCacpcha = 0;
//     counterClickHome = 0;
//     counterClickSymbol++;
//     if(counterClickSymbol > 1) {
//         return false;
//     }
//     fetch('symbol/setting.html').then((response) => {
//         return response.text();
//     }).then((body) => {
//         var parser = new DOMParser();
//         var doc = parser.parseFromString(body, "text/html");
//         document.querySelector("main").innerHTML = new XMLSerializer().serializeToString(doc);
//     }).catch((err) => {  
//         console.log('Failed to fetch page: ', err);
//     });
// });


// let count = 0;
// $(()=>{
//     $('#type-text').on('click', ()=>{
//         count++
//         if(count > 1) {
//             return false
//         }
//         $.getScript('text/setting.js')
//     })
// })

function consWait() {
    console.log('wait')
}

// function consSuccess() {
//     $()
// }


// let m = 0;
// let b = 0;
$(document).ready(()=>{
    // function addScript(src) {
    //     var s = document.createElement('script');
    //     s.type = 'text/javascript';
    //     s.src = src;
    //     document.getElementsByTagName('main')[0].appendChild(s);
    //     return s;  // to remove it later
    // }
    $('.type-text').bind('click',()=>{
        // m++
        // if(m>1) {
        //     return false
        // }
        $.ajax({
            url: 'text/setting.html',
            type: 'GET',
            datatype : "application/html",
            contentType: "text/html",
            cache: false,
            beforeSend: consWait,
            success: function(data){
                // $('main').html(data);
                $("main").empty();$('main').html(data);
                // $("script#d").remove();
                // delete $("script#d");
            }
        })
        // $.getScript('text/setting.js')
        // $.ajaxSetup({
        //     cache: false
        //  });

        // b++
        // if(b>1) {
        //     return false
        // }
        // cache.delete(request,{options}).then(function() {
        //     // запись была удалена
        //   });
         $.getScript( 'text/setting.js' );
        // addScript('text/setting.js')
    })
})


$(document).ready(()=>{
    // function addScript(src) {
    //     var s = document.createElement('script');
    //     s.type = 'text/javascript';
    //     s.src = src;
    //     document.getElementsByTagName('main')[0].appendChild(s);
    //     return s;  // to remove it later
    // }
    $('#type-code').bind('click',()=>{
        // b = 0
        // m = 0
        $.ajax({
            url: 'code/code.html',
            type: 'GET',
            datatype : "application/html",
            contentType: "text/html",
            cache: false,
            ifModified: true ,
            beforeSend: consWait,
            success: function(data){
                // $('main').html(data);
                $("main").empty();$('main').html(data);
            }
        })
        // $.getScript('text/setting.js')
        // addScript('text/setting.js')
    })
})

$(document).ready(()=>{
    // function addScript(src) {
    //     var s = document.createElement('script');
    //     s.type = 'text/javascript';
    //     s.src = src;
    //     document.getElementsByTagName('main')[0].appendChild(s);
    //     return s;  // to remove it later
    // }
    $('#type-capcha').bind('click',()=>{
        $.ajax({
            url: 'capcha/setting.html',
            type: 'GET',
            datatype : "application/html",
            contentType: "text/html",
            cache: false,
            beforeSend: consWait,
            success: function(data){
                // $('main').html(data);
                $("main").empty();$('main').html(data);
            }
        })
        // $.getScript('text/setting.js')
        // addScript('text/setting.js')
    })
})

$(document).ready(()=>{
    // function addScript(src) {
    //     var s = document.createElement('script');
    //     s.type = 'text/javascript';
    //     s.src = src;
    //     document.getElementsByTagName('main')[0].appendChild(s);
    //     return s;  // to remove it later
    // }
    $('#type-symbol').bind('click',()=>{
        $.ajax({
            url: 'symbol/setting.html',
            type: 'GET',
            datatype : "application/html",
            contentType: "text/html",
            cache: false,
            beforeSend: consWait,
            success: function(data){
                // $('main').html(data);
                $("main").empty();$('main').html(data);
            }
        })
        // $.getScript('text/setting.js')
        // addScript('text/setting.js')
    })
})


$(document).ready(()=>{
    // function addScript(src) {
    //     var s = document.createElement('script');
    //     s.type = 'text/javascript';
    //     s.src = src;
    //     document.getElementsByTagName('main')[0].appendChild(s);
    //     return s;  // to remove it later
    // }
    $('#type-home').bind('click',()=>{
        $.ajax({
            url: 'main/home.html',
            type: 'GET',
            datatype : "application/html",
            contentType: "text/html",
            cache: false,
            beforeSend: consWait,
            success: function(data){
                // $('main').html(data);
                $("main").empty();$('main').html(data);
            }
        })
        // $.getScript('text/setting.js')
        // addScript('text/setting.js')
    })
})
