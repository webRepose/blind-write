'use strict';
$(document).ready(()=>{
    let devGit = false;
    let gitUrl = devGit === true ? '' : '/blind-write';

    let homeLink = window.location.pathname === '/' ? 'home': window.location.pathname.replace(/\//g, "");

    $(window).on('load', ()=>{
        history.pushState(null, '', window.location.pathname.slice(0, window.location.pathname.length - 1))
        const urlPath = document.location.pathname.replace(gitUrl, '');
        console.log(urlPath)
        let chechReq = gitUrl + '/';
        if(urlPath === chechReq) {
            urlAjaxNoScript(gitUrl + '/main.html');
        } else {
            urlAjaxNoScript(gitUrl + '/' + urlPath + '/main.html');
        }
        console.log('res 4440')
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
        let urlReq = url;
        $("main").empty();
        $.ajax({
            url: urlReq,
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
            urlAjaxNoScript('/main.html', gitUrl + '/');   
        }
        homeLink = 'home';
    });

    $('.type-text').click(()=>{
        navBar(homeLink, 'text');
        if(homeLink !== 'text'){
            urlAjaxNoScript('text/main.html', gitUrl + '/text');
        }
        homeLink = 'text';
    });
    $('.type-code').click(()=>{
        navBar(homeLink, 'code');
        if(homeLink !== 'code') {
            urlAjaxNoScript('code/main.html', gitUrl + '/code');
        }
        homeLink = 'code';
    });
    $('.type-capcha').click(()=>{
        navBar(homeLink, 'capcha');
        if(homeLink !== 'capcha') {
            urlAjaxNoScript('capcha/main.html', gitUrl + '/capcha');
        }
        homeLink = 'capcha';
    });
    $('.type-symbol').click(()=>{
        navBar(homeLink, 'symbol');
        if(homeLink !== 'symbol') {
            urlAjaxNoScript('symbol/main.html' , gitUrl + '/symbol');
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