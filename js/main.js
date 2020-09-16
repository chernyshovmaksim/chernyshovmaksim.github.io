document.addEventListener(
    "DOMContentLoaded", () => {
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
    }
);



$(document).ready(function () {
    init();
});

$(window).on('orientationchange', function () {
    $('.reviews-wrapper').slick('resize');
});


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


function init() {
    reviewCarouselInit();
    tableProductsInit();
};