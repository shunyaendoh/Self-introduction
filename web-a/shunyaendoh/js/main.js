$(() => {

$('#page_top').on('click', () => {
    $('body, html').animate({ scrollTop: 0 }, 500);
});

})