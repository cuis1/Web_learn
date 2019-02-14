let allQuestions = [];
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
    allQuestions.push(createQuestion());
    let { question, choices, correctAnswer } = allQuestions[allQuestions.length - 1];
    let div_question = document.getElementById('questions');
    let title_q = document.createElement('span');
    title_q.innerHTML = (allQuestions.length) +","+ question;
    title_q.className = "question";
    div_question.appendChild(title_q);
    let ul_tab = document.createElement('ul');
    ul_tab.className = "tabs_new";
    ul_tab.type = "none";
    div_question.appendChild(ul_tab);
    let ul_answer = div_question.getElementsByClassName("tabs_new");
    for(let i =0; i<choices.length;i++ ){
        creatAnswer(ul_answer[ul_answer.length - 1],i,choices[i]);
    }
}

function creatAnswer(elt,n,text){
    let li_answer = document.createElement("li");
    elt.appendChild(li_answer);
    let li = elt.getElementsByTagName("li");
    let input_answer = document.createElement("input");
    input_answer.type = "radio";
    input_answer.name=elt.className;
    input_answer.id = "tab"+n;
    input_answer.value = text;
    input_answer.setAttribute("data-index",""+n);
    // input_answer.setAttribute('checked','true');
    li[li.length-1].appendChild(input_answer);
    let lable_answer = document.createElement("lable");
    lable_answer.setAttribute('for','tab'+n);
    lable_answer.innerHTML = text;
    li[li.length-1].appendChild(lable_answer);
    input_answer.onclick =()=>{callBack(input_answer.getAttribute("data-index"));}
}

function callBack(a){
    allQuestions[allQuestions.length-1].choicedAnswer = a;
    
}

function next(){
    let next = document.getElementsByClassName('button');
    next[0].onclick =()=>{
        let choiced = true;
        if(allQuestions.length !== 0){
            if(!allQuestions[allQuestions.length-1].choicedAnswer){
                alert('请选择本题答案！！！');
                choiced = false;
            }else{
                choiced = true;
            }
        }
        if(choiced){
            let div_question = document.getElementById('questions');
            let qdescription = div_question.getElementsByClassName('question');
            let adescription = div_question.getElementsByClassName('tabs_new');
            if (qdescription.length>0){
                div_question.removeChild(qdescription[0]);
            }
            if(adescription.length>0){
                div_question.removeChild(adescription[0]);
            }
            creatQuestionHtml();
        }
    };
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
onLoad(next);