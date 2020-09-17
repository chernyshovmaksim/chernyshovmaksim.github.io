$(document).ready(function () {
    init();
});

$(window).on('orientationchange', function () {
    $('.reviews-wrapper').slick('resize');
});

var mMenuInit = function(){
    const menu = new MmenuLight(
        document.querySelector("#mobile-menu")
    );

    const navigator = menu.navigation({
        title: 'Рейтинг CRM для стоматологий'
    });
    const drawer = menu.offcanvas();

    document.querySelector('a[href="#mobile-menu"]')
        .addEventListener('click', (evnt) => {
            evnt.preventDefault();
            drawer.open();
        });
};

var reviewCarouselInit = function () {
    $('.reviews-wrapper').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 4
                }
            }
        ]
    });
};

var tableProductsInit = function () {
    $('.table-products').DataTable({
        paging: false,
        sDom: 'lrtip',
        "bInfo": false,
        "ordering": true,
        "autoWidth": false,
        columnDefs: [{
            orderable: false,
            targets: "no-sort"
        }],
        responsive: true
    });
};

var productsFilterInit = function () {
    var filterIcon = $('.filter-icon');
    var filterBody = $('.filter-body');
    var filterClean = $('.filter-clear');
    var filterSearch = $('.filter-search');

    $(filterIcon).on('click', function(e){
        e.preventDefault();
        filterBody.toggleClass('filter-body--hidden');
    });
    $(filterClean).on('click', function(e){
        e.preventDefault();
        filterBody.toggleClass('filter-body--hidden');
        $('.grid-products input:checkbox').prop('checked', false);
    });
    $(filterSearch).on('click', function(e){
        e.preventDefault();
        var params = {
            productVersion: false,
        };
        var checkboxEls = $('input[type="checkbox"][data-product]');
        checkboxEls.each(function(){
            if($(this).is(':checked')){
                if($(this).data().productVersion){
                    console.log($(this).data().productVersion);
                }
            }
        });

        filterBody.toggleClass('filter-body--hidden');
    });
};


function init() {
    reviewCarouselInit();
    tableProductsInit();
    mMenuInit();
    productsFilterInit();
};