let getURL = async function (url, success, error) {
    if (!window.XMLHttpRequest) return;
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status !== 200) {
                if (error && typeof error === 'function') {
                    error(request.responseText, request);
                }
                return console.log(request.status);
            }
            if (success && typeof success === 'function') {
                success(request.responseText);
            }
        }
    };
    request.open('GET', url);
    request.send();
},
header = true;
getURL(
    '/src/glob_elements/header.html',
    function (data) {
        let el = document.createElement('div');
        el.innerHTML = data;
        let fetch = el.querySelector('#kh-pc_header');
        let embed = document.querySelector('#header');
        if (!fetch || !embed) return;
        embed.parentNode.replaceChild(fetch, embed);
        /*Active Nav item*/
        const lHref = window.location.href.split('/'),
        linkHrefs = fetch.querySelectorAll('.kh-menu li a');
        for (let i = 0; i < linkHrefs.length; i++) {
            const aHref = linkHrefs[i].href.split('/');
            if (lHref[lHref.length - 1] == aHref[aHref.length - 1]) {
                linkHrefs[i].classList.add('active');
                break
            }
        }

        //Mobile Menu Srcipt
        const waitingFor = setInterval(() => {
            if (header == false) {
                const sideBar = document.querySelector('.kh-m-menu'),
                sideBarOverlay = document.querySelector('.kh-menu_overlay'),
                sideBarBtn = document.querySelector('.kh-humburger');

                sideBarBtn.addEventListener('click', function () {
                    if (this.classList.contains('active')) {
                        this.classList.remove('active');
                        sideBar.classList.remove('open');
                        sideBarOverlay.classList.remove('open');
                        sideBarOverlay.style.display = 'none'
                        document.documentElement.style.overflow = ''
                    }
                    else {
                        this.classList.add('active');
                        sideBar.classList.add('open');
                        sideBarOverlay.classList.add('open');
                        sideBarOverlay.style.display = '';
                        document.documentElement.style.overflow = 'hidden'
                    }
                });

                //ScrollTop Fixed menu
                const navMobile = document.querySelector('.kh-mobile-nav');

                window.addEventListener('scroll', ()=>{
                    if (document.documentElement.scrollTop > 80) {
                        navMobile.classList.add('fix');
                    }else {
                        navMobile.classList.remove('fix')
                    }
                })
                clearInterval(waitingFor);
            }
        }, 500);
        return header = false;
    }
);
