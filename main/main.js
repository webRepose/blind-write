'use strict';
$(document).ready(()=>{
    // window.location.pathname.substring(0, window.location.pathname.length - 1);
    // window.location.pathname.replace(/\/+$/, '');
    
    let homeLink = window.location.pathname === '/' ? 'home': window.location.pathname.replace(/\//g, "");

    $(window).on('load', ()=>{
        const urlPath = document.location.pathname;
        console.log(urlPath)
        if(urlPath === '/') {
            urlAjaxNoScript('/main/main.html');
        } else {
            urlAjaxNoScript(urlPath + '/main.html');
        }
    })

    $(window).on('popstate', (e)=>{
        const urlPath = document.location.pathname;
        console.log(urlPath)
        if(urlPath === '/') {
            urlAjaxNoScript('/main/main.html');
        } else {
            urlAjaxNoScript(urlPath + 'main.html');
        }
    })

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

    const navBar = (prev, now)=>{
        $('.type-' + prev).attr('id', 'random');
        $('.type-' + now).attr('id', '_selected');
    }

    $('.type-home').click(()=>{
        console.log('result ' + document.location.pathname)
        window.history.pushState(null, '', '../');
        navBar(homeLink, 'home');
        if(homeLink !== 'home') {
            urlAjaxNoScript('./../main/main.html');   
        }
        homeLink = 'home';
    });

    $('.type-text').click(()=>{
        window.history.pushState(null, '', '/text');
        navBar(homeLink, 'text');
        if(homeLink !== 'text'){
            urlAjaxNoScript('/text/main.html');
        }
        homeLink = 'text';
    });
    $('.type-code').click(()=>{
        window.history.pushState(null, '', '/code');
        navBar(homeLink, 'code');
        if(homeLink !== 'code') {
            urlAjaxNoScript('/code/main.html');
        }
        homeLink = 'code';
    });
    $('.type-capcha').click(()=>{
        window.history.pushState(null, '', '/capcha');
        navBar(homeLink, 'capcha');
        if(homeLink !== 'capcha') {
            urlAjaxNoScript('/capcha/main.html');
        }
        homeLink = 'capcha';
    });
    $('.type-symbol').click(()=>{
        window.history.pushState(null, '', '/symbol');
        navBar(homeLink, 'symbol');
        if(homeLink !== 'symbol') {
            urlAjaxNoScript('/symbol/main.html')
        }
        homeLink = 'symbol';
    });
});