$(() => {
/*  */

console.log('————')

$('.nav-btn').on('click', e => {
    e.preventDefault();

    $('.nav-btn').addClass('hidden');
    $('.exit-btn').addClass('active-flex');

    $('.navbar').addClass('active-block');
});

$('.exit-btn').on('click', e => {
    e.preventDefault();

    $('.nav-btn').removeClass('hidden');
    $('.exit-btn').removeClass('active-flex');

    $('.navbar').removeClass('active-block');
});

$(document).on('keyup', function (e) {
    if (e.key === 'Escape') {
        $('.nav-btn').removeClass('hidden');
        $('.exit-btn').removeClass('active-flex');

        $('.navbar').removeClass('active-block');
    }
});

$(document).on('mouseup', function (e) {
    let content = $('.account-content');
    if ( !content.is(e.target) && content.has(e.target).length === 0 ) {
        $('.nav-btn').removeClass('hidden');
        $('.exit-btn').removeClass('active-flex');

        $('.navbar').removeClass('active-block');
    } 
});

window.addEventListener('resize', function(e) {
    if (
        (
            window.innerWidth > 325 &&  
            window.innerWidth < 345
        ) 
            ||
            window.innerWidth === 335
    ) {
        $('.nav-btn').removeClass('hidden');
        $('.exit-btn').removeClass('active-flex');

        $('.navbar').removeClass('active-block');
    }
});

/*  */
})