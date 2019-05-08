document.querySelector('#signup-submit').onclick = function (event) {
    event.preventDefault();
    let name = document.querySelector('#signup-name').value;
    let pass = document.querySelector('#signup-pass').value;
    let email = document.querySelector('#signup-email').value;
    let birthday = document.querySelector('#signup-birthday').value;
    let sex = document.querySelectorAll('[name="sex"]');
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sex = sex[i].value;
            break;
        }
    }
    let data = {
        "name" : name,
        "pass" : pass,
        "email" : email,
        "birthday" : birthday,
        "sex" : sex
    }
    ajax('core/signup.php', 'POST', signup, data)

    function signup(result) {
        console.log(result);
        if (result == 2) {
            M.toast({html: 'Please, fill all required fieldes'});
        } else if (result == 1) {
            M.toast({html: 'You have successfully Registered!'});
            closeModal();
        } else {
            M.toast({html: 'There was an error. Please, reload page and try again.'});
        }
    }
}

document.querySelector('#login-submit').onclick = function (event) {
    event.preventDefault();
    let email = document.querySelector('#login-email').value;
    let pass = document.querySelector('#login-pass').value;
    let data = {
        "email" : email,
        "pass" : pass,
    }
    ajax('core/login.php', 'POST', login, data);

    function login(result) {
        if (result == 2) {
            M.toast({html: 'Please, fill all required fieldes'});
        } else if (result == 0) {
            M.toast({html: 'User not founded'});
        } else {
            console.log(result);
            result = JSON.parse(result);

            var d = new Date();
            d.setTime(d.getTime() + (10*60*1000));
            var expires = d.toUTCString();

            document.cookie = `email=${result.email}; expires=${expires}; path=/`;
            location.href = "cabinet.php";
        }
    }
}

