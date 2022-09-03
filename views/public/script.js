$(document).ready(() => {
    $('.hide').on('click', (e) => {
        $(e.target).parent().parent().addClass('otherPick')
    })
    $('.pick').on('click', (e) => {
        $(e.target).parent().parent().addClass('picked')
    });
    $('#positionFilter').on('input', (e) => {
        let pos = $('#positionFilter').val();
        if (pos == 'ALL') {
            $('.filtered').removeClass('filtered')
        } else {
            $('.player').addClass('filtered');
            $(`.${pos}`).removeClass('filtered')
        }
    })
    $('#unhide').on('click', (e) => {
        $('.otherPick').removeClass('otherPick')
    })

})