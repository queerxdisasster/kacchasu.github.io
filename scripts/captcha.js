function generateString() {
    let abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";

    while (captcha.length < 10) {
        captcha += abc[Math.floor(Math.random() * abc.length)];
    }

    return captcha
}

function isEmpty(obj) {
    for (const i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}

function captcha() {
    while (true) {
        let ans = "";
        let answer = generateString();
        ans = prompt('Enter the string: ' + answer + ' ');
        if (isEmpty(ans)) {
            alert("Empty string");
            continue;
        }
        if (ans === answer) {
            alert("Correct");
            break;
        } else {
            let n1 = Math.floor(Math.random() * 100);
            let n2 = Math.floor(Math.random() * 100);

            ans = prompt("Calculate: " + n1 + " + " + n2);
            answer = n1 + n2 + "";

            if (ans == answer) {
                alert("Correct");
                break;
            } else {
                alert("Access denied");
            }
        }
    }
}