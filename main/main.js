'use strict';
$(document).ready(()=>{
    let homeLink = 'home';

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
        const controller = new AbortController;
        $("main").empty();
        $.ajax({
            url: url,
            type: 'GET',
            datatype : "application/html",
            contentType: "text/html",
            cache: false,
            signal: controller.signal,
            beforeSend: consWait,
            success: function(data){
                console.log(url);
                $('main').html(data);
            },
            complete: ()=>{
                controller.abort();
            },
            catch: function(e){
                console.log(e);
            }
        });
    }
    const urlAjax = (url, script)=>{
        let complete = true;
        $("main").empty();
        $.ajax({
            url: url,
            type: 'GET',
            datatype : "application/html",
            contentType: "text/html",
            cache: false,
            beforeSend: consWait,
            success: function(data){
                if(complete===true) {
                    console.log(url);
                    $('main').html(data);
                }
            },

            catch: function(e){
                console.log(e);
            }
        });
         $.getScript(script);
         return ()=>{
            complete = false;
        };
    };

    const navBar = (prev, now)=>{
        $('.type-' + prev).attr('id', 'random');
        $('.type-' + now).attr('id', '_selected');
    }

    $('.type-home').click(()=>{
        navBar(homeLink, 'home');
        if(homeLink !== 'home') {
            urlAjaxNoScript('./main/home.html');   
        }
        homeLink = 'home';
    });

    $('.type-text').click(()=>{
        navBar(homeLink, 'text');
        if(homeLink !== 'text'){
            urlAjax('./text/setting.html', 'text/setting.js');
        }
        homeLink = 'text';
    });
    $('.type-code').click(()=>{
        navBar(homeLink, 'code');
        if(homeLink !== 'code') {
            urlAjax('./code/setting.html', 'code/code.js');
        }
        homeLink = 'code';
    });
    $('.type-capcha').click(()=>{
        navBar(homeLink, 'capcha');
        if(homeLink !== 'capcha') {
            urlAjax('./capcha/capcha.html', 'capcha/capcha.js');
        }
        homeLink = 'capcha';
    });
    $('.type-symbol').click(()=>{
        navBar(homeLink, 'symbol');
        if(homeLink !== 'symbol') {
            urlAjax('./symbol/setting.html', 'symbol/symbol.js')
        }
        homeLink = 'symbol';
    });
});