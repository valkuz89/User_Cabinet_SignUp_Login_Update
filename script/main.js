document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {"format" : "yyyy-mm-dd"});
});
// modal window
let modalWrap = document.querySelectorAll('.modal-wrap');

document.querySelectorAll('.modal-show').forEach(function (e) {
    e.onclick = showModal;
});
// open Login window
function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).classList.remove('hide');
    // close onclick escape
    document.onkeydown = function (e) {
        if (e.keyCode == 27) closeModal();
    }
}
// close
function closeModal() {
    modalWrap.forEach(function (e) {
        e.classList.add('hide');
    });
    document.onkeydown = null;
}
// close when click on modal wrap but not on window itself; or click on CLOSE
modalWrap.forEach(function (e) {
    e.onclick =  closeModal();
});
document.querySelectorAll('.modal-project-close').forEach(function (e) {
    e.onclick = closeModal;
});
// stopPropogation()
document.querySelector('#login-in .modal-project').onclick = function (event) {
    event.stopPropagation();
}
document.querySelector('#sign-up .modal-project').onclick = function (event) {
    event.stopPropagation();
}
// Read rules slider
document.querySelectorAll('.read-rules').forEach(function (e) {
    e.onclick = function () {
    document.querySelector('.form-slider').style.marginLeft = `-350px`;
    document.querySelector('.right-50').scrollTop = `0`;
    }
});
document.querySelectorAll('.read-rules-back').forEach(function(e) {
    e.onclick = function () {
        console.log(document.querySelector('.form-slider').style);
        
        document.querySelector('.form-slider').style.marginLeft = `0`;
        console.log(document.querySelector('.form-slider').style);
    }
}); 
document.querySelectorAll('.agree-rules').forEach(function (e) {
    e.onchange = function () {
        if (e.checked) document.querySelector('#signup-submit').classList.remove("disabled");
        else document.querySelector('#signup-submit').classList.add("disabled");
    }
})
console.log();
