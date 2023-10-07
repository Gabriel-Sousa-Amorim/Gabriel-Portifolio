document.querySelector('select').onchange = function () {
    if (document.querySelector('select').value == 'en') {
        location.href = 'index.html'
        let i = 0
        function LoadingDots() {
            let Dots = document.querySelector('span#Dots');
            let content = ['', '.', '..', '...']
            setInterval(function () {
                if (i <= 3) {
                    Dots.innerHTML = content[i];
                    return i = i + 1;
                } else {
                    return i = 0
                }
            }, 600)
        }
        LoadingDots()

        var options = {
            strings: [
                ":Hello World",
                "<span class='bi bi-code-slash'>  I'm Gabriel Sousa <br>Front-end Developer.</span>",
            ],
            typeSpeed: 100,
        };
        //

        var typed = new Typed("#heading-title", options);
    } else {
        location.href = 'index-pt.html'
        let i = 0
        function LoadingDots() {
            let Dots = document.querySelector('span#Dots');
            let content = ['', '.', '..', '...']
            setInterval(function () {
                if (i <= 3) {
                    Dots.innerHTML = content[i];
                    return i = i + 1;
                } else {
                    return i = 0
                }
            }, 600)
        }
        LoadingDots()

        var options = {
            strings: [
                ":Hello World",
                "<span class='bi bi-code-slash'>  Eu sou Gabriel Sousa <br>Desenvolvedor Front-end.</span>",
            ],
            typeSpeed: 100,
        };
        //

        var typed = new Typed("#heading-title", options);
    }
}