let mainEl = document.querySelector("#main");
const decryptionprotocol = async () => {
    let messboxes = mainEl.querySelectorAll('div[role="row"]');

    messboxes.forEach((box) => {
        let mess = box.querySelectorAll("span:not(:empty):not(:has(*))");
        console.log(mess)
    });
};

// let limess = box.querySelectorAll("span:not(:empty):has(a)");
// if (mess.length == 3) {
//     decryption(mess[0]);
// }
// if (mess.length == 5) {
//     decryption(mess[1]);
//     decryption(mess[2]);
// }
// if (limess.length === 2 && dlsc) {
//     limess[1].firstElementChild.textContent = "@DARKLORD SECURED";
//     if (mess.length > 2) {
//         mess[0].parentElement.parentElement.parentElement.parentElement.remove();
// }
// }