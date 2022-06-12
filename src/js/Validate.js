let email = document.querySelector('#email');
let password = document.querySelector('#password');
let buttonLogin = document.querySelector('#login-button');
let fullName = document.querySelector('#fullName');
let Repassword = document.querySelector('#re-password');
let subject1 = document.querySelector('#subject');
let select = document.querySelector('#select');
let message = document.querySelector('#message')

function showError(input, message) {
    let parentInput = input.parentElement;
    let errorSpan = parentInput.querySelector('span');
    parentInput.classList.add('error')
    errorSpan.innerText = message
}

function showSuccess(input) {
    let parentInput = input.parentElement;
    let errorSpan = parentInput.querySelector('span');
    parentInput.classList.remove('error')
    errorSpan.innerText = ''
}



// function checkError(index) {
//     let check = false
//     index.forEach(input => {
//         if (input.value == '') {
//             check = true;
//             showError(input, "Không được để trống")
//         } else {
//             showSuccess(input)
//         }
//     });
//     return check;
// }

function checkEmail(index) {
    const regexEmail =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regexEmail.test(index.value)) {
        showSuccess(index);
    } else {
        showError(index, "Email không hợp lệ")
    }
}

function inputLength(index, min) {
    if (index && min) {
        if (index.value.length < min) {
            showError(index, `Mật khẩu phải lớn hơn ${min} kí tự`)
            return true;
        }
        showSuccess(index)
        return false
    }

}

function RePassword(password1, Repassword1) {
    if (password1 && Repassword1) {
        if (password1.value !== Repassword1.value) {
            showSuccess(index);
        } else {
            showError(Repassword1, "Mật khẩu không trùng khớp")
        }
    }
}

function checkFullName(index) {
    if (index) {
        if (index.value.length < 5) {
            showError(index, "Họ tên không hợp lệ")
        } else {
            showSuccess(index)
        }
    }
}
function checkSubject(index) {
    if (index) {
        if (index.value == '') {
            showError(index, "Vui lòng nhập Subject")
        } else {
            showSuccess(index)
        }
    }
}

function checkSelect(index) {
    if (index) {
        if (index.value == 1) {
            showError(index, "Không được để trống")
        } else {
            showSuccess(index)
        }
    }
}

function checkMessage(index) {
    if (index) {
        if (index.value.length > 200) {
            showError(index, "Không được quá 200 kí tự")
        } else {
            showSuccess(index)
        }
    }
}

buttonLogin.addEventListener('click', function (e) {
    e.preventDefault();
    // checkError([fullName, password, email, Repassword])
    checkFullName(fullName);
    checkEmail(email);
    inputLength(password, 5)
    RePassword(password, Repassword)
    checkSubject(subject1)
    checkSelect(select)
    checkMessage(message)
})



