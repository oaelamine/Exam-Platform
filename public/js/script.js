// QCM Questions  HTML
const htmlQuestions = [
    q1 = {
        question: 'What does HTML stand for?',
        anser1: 'Home Tool Markup Language',
        anser2: 'Hyperlink and Text Markup Language',
        anser3: 'Hyper Tool Markup Language',
        anser4: 'Hyper Text Markup Language',
        anserTrue: 'Hyper Text Markup Language'
    },
    q2 = {
        question: 'Which is used to read an HTML page and render it?',
        anser1: 'Web server',
        anser2: 'Web network',
        anser3: 'Web matrix',
        anser4: 'Web browser',
        anserTrue: 'Web browser',
    },
    q3 = {
        question: 'Choose the correct HTML element for the largest heading:',
        anser1: '<heading>',
        anser2: '<h6>',
        anser3: '<head>',
        anser4: '<h1>',
        anserTrue: '<h1>'
    },
    q4 = {
        question: 'What is the correct HTML element for inserting a line break?',
        anser1: '<brake>',
        anser2: '<lb>',
        anser3: '<brk>',
        anser4: '<br>',
        anserTrue: '<br>'
    },
    q5 = {
        question: 'HTML is a set of markup ___.',
        anser1: 'sets',
        anser2: 'attributes',
        anser3: 'none of the above',
        anser4: 'tags',
        anserTrue: 'tags',
    },
    q6 = {
        question: 'Which is used to open the document in new window ?',
        anser1: '<a target="_top">Link</a>',
        anser2: '<a target="_new">Link</a>',
        anser3: '<a target="_parent">Link</a>',
        anser4: '<a target="_blank">Link</a>',
        anserTrue: '<a target="_blank">Link</a>'
    },
    q7 = {
        question: 'What is the correct syntax of doctype in HTML5?',
        anser1: '</doctype html>',
        anser2: '<doctype html!>',
        anser3: '<doctype html>',
        anser4: '<!doctype html>',
        anserTrue: '<!doctype html>'
    },
    q8 = {
        question: 'In which part of the HTML metadata is contained?',
        anser1: 'body tag',
        anser2: 'html tag',
        anser3: 'title tag',
        anser4: 'head tag',
        anserTrue: 'head tag',
    },
    q9 = {
        question: 'Which element is used for or styling HTML5 layout?',
        anser1: 'PHP',
        anser2: 'JS',
        anser3: 'JQuery',
        anser4: 'CSS',
        anserTrue: 'CSS'
    },
    q10 = {
        question: 'Which defines the most important heading ?',
        anser1: 'h8',
        anser2: 'h4',
        anser3: 'h6',
        anser4: 'h1',
        anserTrue: 'h1',
    },
]



//SELECTING ELEMENTS
let questions = document.querySelector('.questions')


//QCM number
let qcmCount = htmlQuestions.length


createQuestion(htmlQuestions, qcmCount)

function createQuestion(qArr, count) {
    for(let x = 0; x<count; x++) {
        //create the form
        let form = document.createElement('form')
        form.className= 'q__form'
        form.method = 'get'

        //create question div
        var question = document.createElement('div')
        question.className = 'question'

        //create p__quest div
        let p__quest = document.createElement('div')
        p__quest.className = 'p__quest'

        //create ansers__area div
        let ansers__area = document.createElement('ansers__area')
        ansers__area.className = 'ansers__area'

        //create p and i
        let p = document.createElement('p')
        let pQ = document.createTextNode(qArr[x].question)
        
        let i = document.createElement('i')
        i.className = 'fa-solid fa-q'

        //add the p and i
        p.appendChild(i)
        p.appendChild(pQ)

        //add p to p__quest
        p__quest.appendChild(p)

        for(let j = 1; j<=4; j++) {

            //create ques__anser div
            var ques__anser = document.createElement('div')
            ques__anser.className = 'ques__anser'

            //create input
            let input = document.createElement('input')
            input.name = `anser${x+1}`
            input.type = 'radio'
            input.id = `anser${x+1}_${j}`
            input.value = qArr[x][`anser${j}`]

            //create lable
            let label = document.createElement('label')
            label.htmlFor = `anser${x+1}_${j}`
            let anser = document.createTextNode(qArr[x][`anser${j}`])
            label.appendChild(anser)

            //add inpute and lable to div
            ques__anser.appendChild(input);
            ques__anser.appendChild(label);

            //add the anserse to ther diiv
            ansers__area.appendChild(ques__anser)
        }
        

        //add the question and ansers to ther div
        question.appendChild(p__quest)
        question.appendChild(ansers__area)

        //add the question to the form
        form.appendChild(question)

        //add the ofrm to the page
        questions.appendChild(form)


    }
    //create the button div
    let ques__btn = document.createElement('ques__btn')
    ques__btn.className = 'ques__btn'

    //create the submit button
    let submit = document.createElement('button')
    submit.className = 'submit'
    submit.innerText = 'Valide'

    //create the reset button
    let reSte = document.createElement('reSte')
    reSte.className = 'reSte'
    reSte.innerText = 'Reset'

    //add the submit and the reset buttons to the page
    ques__btn.appendChild(submit);
    ques__btn.appendChild(reSte);

    //add the button dive to the page
    questions.appendChild(ques__btn)
}
