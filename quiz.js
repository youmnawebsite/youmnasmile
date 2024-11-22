const questions = [
    {
        question: "إيه أكتر حاجة بتحبها يمنى؟",
        options: ["الشوكولاتة", "النوم", "تزعّلني!"],
        correctAnswer: 0
    },
    {
        question: "لو يمنى طلبت حاجة، أعمل إيه؟",
        options: ["أجيبها فوراً", "أقول حاضر وبعدين أهرب", "أفكر، وأرجع أجيبها برضه"],
        correctAnswer: 0
    }
];

let currentQuestion = 0;
let selectedAnswer = null;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const resultEl = document.getElementById('result');

function loadQuestion() {
    const question = questions[currentQuestion];
    questionEl.textContent = question.question;
    optionsEl.innerHTML = '';
    question.options.forEach((option, index) => {
        const radioOption = document.createElement('div');
        radioOption.className = 'radio-option';
        radioOption.innerHTML = `
            <input type="radio" id="option${index}" name="answer" value="${index}">
            <label for="option${index}">${option}</label>
        `;
        optionsEl.appendChild(radioOption);
    });
    nextBtn.disabled = true;
    selectedAnswer = null;
}

function selectAnswer(event) {
    if (event.target.type === 'radio') {
        selectedAnswer = parseInt(event.target.value);
        nextBtn.disabled = false;
    }
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionEl.style.display = 'none';
    optionsEl.style.display = 'none';
    nextBtn.style.display = 'none';
    resultEl.classList.remove('hidden');
}

optionsEl.addEventListener('click', selectAnswer);
nextBtn.addEventListener('click', nextQuestion);

loadQuestion();

