'use strict';
$(document).ready(()=>{
    function consWait() {
        console.log('wait');
    }
    const ua = window.navigator.userAgent;
    if (ua.indexOf("MSIE ") > 0 || ua.indexOf("Trident") > 0) {
    window.location.href = "microsoft-edge:" + window.location.href;

    setTimeout(function () {
        window.location.href = "https://support.microsoft.com/en-us/microsoft-edge/this-website-doesn-t-work-in-internet-explorer-8f5fc675-cd47-414c-9535-12821ddfc554";
    }, 0);
    }
    const urlAjaxNoScript = (url)=>{
        $("main").empty();
        $.ajax({
            url: url,
            type: 'GET',
            datatype : "application/html",
            contentType: "text/html",
            cache: false,
            beforeSend: consWait,
            success: function(data){
                console.log(url);
                $('main').html(data);
            },
            catch: function(e){
                console.log(e);
            }
        });
    }
    const urlAjax = (url, script)=>{
        $("main").empty();
        $.ajax({
            url: url,
            type: 'GET',
            datatype : "application/html",
            contentType: "text/html",
            cache: false,
            beforeSend: consWait,
            success: function(data){
                console.log(url);
                $('main').html(data);
            },
            catch: function(e){
                console.log(e);
            }
        });
         $.getScript(script);
    };
    
    $('.type-home').click(()=>{
        urlAjaxNoScript('./main/home.html');
    });
    $('.type-text').click(()=>{
        urlAjax('./text/setting.html', 'text/setting.js');
    });
    $('.type-code').click(()=>{
        urlAjax('./code/setting.html', 'code/code.js');
    });
    $('.type-capcha').click(()=>{
        urlAjax('./capcha/capcha.html', 'capcha/capcha.js');
    });
    $('.type-symbol').click(()=>{
        urlAjax('./symbol/setting.html', 'symbol/symbol.js');
    });
});