const INPUT = document.querySelector('input')
const WRITEoRDER = document.querySelector('.writeOrder')
const RESULT = document.querySelector('.result')
const MADA7 = document.querySelector('h4')
const QUESTIONdev = document.querySelector('.Q')
const QUESTION = document.querySelector('.question')
const GENDERbtn = document.querySelector('#genderBtn')

let gender = "female"
let words = []
const appTexts = (gender = "female") => {
    let pronoun = (gender == "female") ? fWords : mWords
    QUESTION.innerHTML = pronoun.question;
    WRITEoRDER.innerHTML = pronoun.writeOrder;
    GENDERbtn.innerHTML = pronoun.gender;
    words = pronoun.mad7
}
appTexts()
GENDERbtn.addEventListener('click', () => {
    gender = (gender == "female") ? "male" : "female"
    appTexts(gender)
})
document.querySelector('#send').addEventListener('click', () => {
    if (INPUT.value == '') {
        WRITEoRDER.classList.remove('hide');
        RESULT.classList.add('hide');
    } else {
        const word = words[Math.floor(Math.random() * words.length)]
        WRITEoRDER.classList.add('hide');
        QUESTIONdev.classList.add('hide');
        MADA7.innerHTML = word;
        RESULT.classList.remove('hide');
    }
})
document.querySelector('#back').addEventListener('click', () => {
    QUESTIONdev.classList.remove('hide');
    RESULT.classList.add('hide');
    INPUT.value = "";
})