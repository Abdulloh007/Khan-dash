window.addEventListener('DOMContentLoaded', function () {

    //Tabination
    const tabination = document.querySelectorAll('.kh-tabination');

    function activeTabination(elem) {
        const tabNav = elem.querySelector('.kh-tab_nav'),
        tabBtns = elem.querySelectorAll('.kh-tab_nav li'),
        tabs = elem.querySelectorAll('.kh-tab');

        tabNav.addEventListener('click', function () {
            for (let i = 0; i < tabBtns.length; i++) {
                if (event.target == tabBtns[i]) {
                    showTab(i);
                }
            }
        })
        showTab(0);
        function showTab(n) {
            tabBtns.forEach((item) => item.classList.remove('active'));
            tabs.forEach((item) => item.classList.remove('active'));
            tabBtns[n].classList.add('active');
            tabs[n].classList.add('active');
        }
    }
    if (tabination !== undefined && tabination !== null) {
        tabination.forEach(item => activeTabination(item));
    }
    //Liner Progress Bars
    const linersBar = document.querySelectorAll('.kh-lp_bar');
    function runLiners(elem) {
        setTimeout(()=>{
            if (elem.children[0] != undefined) {
                elem.children[0].style.width = elem.dataset.plane;
            }
            if (elem.children[1] != undefined) {
                elem.children[1].style.width = elem.dataset.fact;
            }
        }, 1000);
    }
    linersBar.forEach(item => runLiners(item));

    //Show More
    const showMoreList = document.querySelectorAll('.kh-show_more');

    function showMoreFromeList(elem) {
        const showMoreItem = elem.querySelectorAll('.kh-show_more li');
        let collapseHeight = 0;

        for (let i = 0; i < parseInt(elem.dataset.show); i++) {
            if (i == parseInt(elem.dataset.show) - 1) {
                if (elem.classList.contains('kh-liner-digs') || elem.classList.contains('kh-tasker_list') || elem.classList.contains('kh-req_list')) {
                    collapseHeight += 10 * (parseInt(elem.dataset.show) - 1);
                }
            }
            collapseHeight += showMoreItem[i].offsetHeight;
            elem.style.height = collapseHeight + 'px';
            if (i == parseInt(elem.dataset.show) - 1) {
                collapseHeight = 0;
                break;
            }
        }

        elem.nextElementSibling.addEventListener('click', function () {
            if (this.classList.contains('not_opened')) {
                elem.style.height = elem.scrollHeight + 'px';
                this.classList.remove('not_opened');
                this.innerHTML = `<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.00018 6L6.00018 1L11.0002 6" stroke="#D99478" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Меньше</span>`;
            }else if (!this.classList.contains('not_opened')) {
                for (let i = 0; i < parseInt(elem.dataset.show); i++) {
                    if (i == parseInt(elem.dataset.show) - 1) {
                        if (elem.classList.contains('kh-liner-digs') || elem.classList.contains('kh-tasker_list') || elem.classList.contains('kh-req_list')) {
                            collapseHeight += 10 * (parseInt(elem.dataset.show) - 1);
                        }
                    }
                    collapseHeight += showMoreItem[i].offsetHeight;
                    elem.style.height = collapseHeight + 'px';
                    if (i == parseInt(elem.dataset.show) - 1) {
                        collapseHeight = 0;
                        break;
                    }
                }
                this.classList.add('not_opened');
                this.innerHTML = `<svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 1L6 6L1 1" stroke="#D99478" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Больше</span>`;
            }
        })
    }
    showMoreList.forEach(item => showMoreFromeList(item));

    //Win-down
    const winDowns = document.querySelectorAll('.kh-liner-digs li');


    function winDowner(elem) {
        elem.classList.remove('win-down');
        const winBtns = elem.querySelector('.kh-btn_gray'),
        winHeader = elem.querySelector('.kh-ld-header'),
        winData = elem.querySelector('.kh-ld_desc');

        elem.classList.remove('win-down');
        elem.style.height = winHeader.clientHeight + 'px';
        this.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 6H11.5" stroke="#ADA59F" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 0.5V11.5" stroke="#ADA59F" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

        winBtns.addEventListener('click', function () {
            if (!elem.classList.contains('win-down')) {
                elem.parentNode.style.height = parseInt(elem.parentNode.style.height.split('px')[0]) + winData.clientHeight + 'px';
                elem.classList.add('win-down');
                elem.style.height = winData.clientHeight + winHeader.clientHeight + 'px';
                this.innerHTML = `<svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 1H11.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/></svg>`
            }else if (elem.classList.contains('win-down')) {
                elem.parentNode.style.height = parseInt(elem.parentNode.style.height.split('px')[0]) - winData.clientHeight + 'px';
                elem.classList.remove('win-down');
                elem.style.height = winHeader.clientHeight + 'px';
                this.innerHTML = `<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 6H11.5" stroke="#ADA59F" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 0.5V11.5" stroke="#ADA59F" stroke-linecap="round" stroke-linejoin="round"/></svg>`
            }
        })
    }
    winDowns.forEach(item => winDowner(item));

    //Sort down
    // const sortDownBtn = document.querySelectorAll('.kh-sort_down');
    // function sortDown(elem) {
    //     let sortDownList = elem.parentNode.parentNode.querySelector('.kh-sort-list_down'),
    //     sortListItems = sortDownList.querySelectorAll('li');
    //
    //
    //     elem.addEventListener('click', function () {
    //         for (let i = 0; i < sortListItems.length; i++) {
    //             console.log(sortDownList);
    //             console.log(sortListItems);
    //             sortDownList.appendChild(sortDownList[i]);
    //         }
    //     })
    // }
    //
    // sortDownBtn.forEach(item => sortDown(item));



})
