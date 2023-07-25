document.querySelector('select').onchange = function() {
    if (document.querySelector('select').value == 'en') {
    location.href = 'index.html'
    } else {
    location.href = 'index-pt.html'
    }
}