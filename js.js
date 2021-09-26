var acc = document.getElementsByClassName('accordion');
var acc1 = document.getElementsByClassName('content');
var i = 0;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        var check = this.nextElementSibling.style.display;
        for (i = 0; i < acc.length; i++) {
            acc[i].classList.remove('active');
            acc1[i].style.display = 'none';
        }
        if (check == "block") {
        } else {
            this.classList.add('active');
            this.nextElementSibling.style.display = 'block'
        }
    };
}