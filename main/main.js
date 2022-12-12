'use strict';
$(document).ready(()=>{
    let devGit = true;
    let gitUrl = devGit === true ? '': '/blind-write';

    let homeLink = window.location.pathname === '/' ? 'home': window.location.pathname.replace(/\//g, "");

    $(window).on('load', ()=>{
        const urlPath = document.location.pathname;
        console.log(urlPath)
        if(urlPath === '/') {
            urlAjaxNoScript('main/main.html');
        } else {
            urlAjaxNoScript(urlPath + 'main.html');
        }
        console.log('res 1 3 5 7')
    })

    $(window).on('popstate', (e)=>{
        const urlPath = document.location.pathname;
        console.log(urlPath)
        if(urlPath === '/') {
            urlAjaxNoScript('/');
        } else {
            urlAjaxNoScript('/blind-write' + urlPath + 'main.html');
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
        console.log('result ' + 'home2')
        navBar(homeLink, 'home');
        if(homeLink !== 'home') {
            urlAjaxNoScript('/blind-write/main/main.html');   
        }
        homeLink = 'home';
        window.history.pushState(null, '', '');
    });

    $('.type-text').click(()=>{
        window.history.pushState(null, '', 'text');
        navBar(homeLink, 'text');
        if(homeLink !== 'text'){
            urlAjaxNoScript('/blind-write/text/main.html');
        }
        homeLink = 'text';
        window.history.pushState(null, '', 'text');
    });
    $('.type-code').click(()=>{
        navBar(homeLink, 'code');
        if(homeLink !== 'code') {
            urlAjaxNoScript('/blind-write/code/main.html');
        }
        homeLink = 'code';
        window.history.pushState(null, '', 'code');
    });
    $('.type-capcha').click(()=>{
        navBar(homeLink, 'capcha');
        if(homeLink !== 'capcha') {
            urlAjaxNoScript('/blind-write/capcha/main.html');
        }
        homeLink = 'capcha';
        window.history.pushState(null, '', 'capcha');
    });
    $('.type-symbol').click(()=>{
        navBar(homeLink, 'symbol');
        if(homeLink !== 'symbol') {
            urlAjaxNoScript('/blind-write/symbol/main.html');
        }
        homeLink = 'symbol';
        window.history.pushState(null, '', 'symbol');
    });

    // $('.type-history').click(()=>{
    //     console.log('hello')
        // window.history.pushState(null, '', '../history');
        // navBar(homeLink, 'history');
        // if(homeLink !== 'history') {
        //     urlAjaxNoScript('/blind-write/histoy/main.html')
        // }
        // homeLink = 'history';
    // });
});