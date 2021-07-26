window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    const mapPoins = document.querySelectorAll('.kh-mp_item');

    function mapSwiper(elem) {
        const mapPointAnim = elem.querySelector('.kh-mpi_anim'),
        mapPointWrap = elem.querySelector('.kh-mpi_wrap'),
        mapContent = elem.querySelector('.kh-mpiw-content'),
        mapBottom = elem.querySelector('.kh-mpiw_bottom'),
        defaultHeight = mapPointWrap.clientHeight,
        defaultWidth = mapPointWrap.clientWidth;
        mapPointAnim.style.height = mapBottom.clientHeight + 'px';
        mapPointAnim.style.width = mapBottom.clientWidth + 'px';

        mapPointWrap.addEventListener('mouseenter',function () {
            mapPointAnim.style.height = defaultHeight + 20 + 'px';
            mapPointAnim.style.width = defaultWidth + 'px';
        })
        mapPointWrap.addEventListener('mouseleave',function () {
            mapPointAnim.style.height = mapBottom.clientHeight + 'px';
            mapPointAnim.style.width = mapBottom.clientWidth + 'px';
        })
    }
    mapPoins.forEach(item => mapSwiper(item));

})
