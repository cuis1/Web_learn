function createQuestion() {
    let answers = [];
    let length_s = (n, m) => { return Number.parseInt(Math.random() * n) + m - n; }
    let word = () => { return creat(length_s(5, 10), () => { return String.fromCharCode(Number.parseInt(Math.random() * 25) + 97); }); }
    let sentence_s = () => creat(length_s(5, 10), word);

    function creat(a, n) {
        let result = "";
        for (let i = 0; i < a; i++) {
            if (typeof n === "function") {
                result = result + n();
            } else {
                result = result + n;
            }
        }
        return (result + " ");
    }
    let answersLength = length_s(2, 5);

    for (let i = 0; i < answersLength; i++) {
        answers.push(word());
    }

    return {
        question: sentence_s(),
        choices: answers,
        correctAnswer: Number.parseInt(Math.random() * (answers.length - 1))
    }
}

function creatQuestionHtml() {
    let { question, choices, correctAnswer } = createQuestion();
    let div_question = document.getElementById('questions');
    let title_q = document.createElement('span');
    title_q.innerHTML = question;
    title_q.className = "question";
    div_question.appendChild(title_q);
    let ul_tab = document.createElement('ul');
    ul_tab.className = "tabs";
    ul_tab.type = "none";
    div_question.appendChild(ul_tab);

}

function onLoad(f) {
    if (onLoad.loaded)
        window.setTimeout(f, 0);
    else if (window.addEventListener)
        window.addEventListener("load", f, false);
    else if (window.attachEvent)
        window.attachEvent("onload", f);
}
onLoad.loaded = false;
onLoad(() => { onLoad.loaded = true; })
onLoad(creatQuestionHtml);