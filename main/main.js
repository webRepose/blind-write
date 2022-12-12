'use strict';
$(document).ready(()=>{
    let devGit = false;
    let gitUrl = devGit === true ? '' : '/blind-write';

    let homeLink = window.location.pathname === '/' ? 'home': window.location.pathname.replace(/\//g, "");

    $(window).on('load', ()=>{
        const urlPath = document.location.pathname;
        console.log(urlPath)
        if(urlPath === '/') {
            urlAjaxNoScript('main/main.html');
        } else {
            urlAjaxNoScript(urlPath + 'main.html');
        }
        console.log('res 1525 11 12 8')
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
    const urlAjaxNoScript = (url, history)=>{
        const controller = new AbortController;
        let urlReq = url.replace(gitUrl, '')
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
                window.history.pushState(null, '', history);
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
            urlAjaxNoScript(gitUrl + '/main/main.html', '');   
        }
        homeLink = 'home';
    });

    $('.type-text').click(()=>{
        window.history.pushState(null, '', 'text');
        navBar(homeLink, 'text');
        if(homeLink !== 'text'){
            urlAjaxNoScript(gitUrl + '/text/main.html', 'text');
        }
        homeLink = 'text';
    });
    $('.type-code').click(()=>{
        navBar(homeLink, 'code');
        if(homeLink !== 'code') {
            urlAjaxNoScript(gitUrl + '/code/main.html', 'code');
        }
        homeLink = 'code';
    });
    $('.type-capcha').click(()=>{
        navBar(homeLink, 'capcha');
        if(homeLink !== 'capcha') {
            urlAjaxNoScript(gitUrl + '/capcha/main.html', 'capcha');
        }
        homeLink = 'capcha';
    });
    $('.type-symbol').click(()=>{
        navBar(homeLink, 'symbol');
        if(homeLink !== 'symbol') {
            urlAjaxNoScript(gitUrl + '/symbol/main.html' , 'symbol');
        }
        homeLink = 'symbol';
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