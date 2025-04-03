const questions = [
    {
        question: "O que é dependência emocional?",
        answers: ["A capacidade de viver sozinho sem precisar de ninguém", "A necessidade excessiva de apoio e validação de outras pessoas", "A falta de interesse por qualquer tipo de relação social", "A falta de ânimo sobre a vida"],
        correct: 1
    },
    {
        question: "Qual dessas NÃO é uma característica da dependência emocional?",
        answers: ["Medo intenso de ser abandonado", "Dificuldade em tomar decisões sozinho", "Preferência por estar sempre sozinho e independente", "Dificuldade em conviver com pessoas"],
        correct: 2
    },
    {
        question: "Como o celular pode intensificar a dependência emocional?",
        answers: ["Criando uma sensação de conexão constante, que pode gerar ansiedade", "Ajudando a pessoa a se tornar mais independente emocionalmente", "Eliminando completamente a necessidade de mídias sociais", "Alterando a percepção de realidade e causando desvaneios excessivos"],
        correct: 0
    },
    {
        question: "Qual dos seguintes NÃO é um sintoma da dependência emocional no celular?",
        answers: ["Olhar as redes sociais várias vezes ao dia", "Sentir-se tranquilo quando está desconectado", "Sentir ansiedade ao ficar sem o celular", "Estar constantemente desinteressado pelo mundo real"],
        correct: 1
    },
    {
        question: "Como a dependência emocional no celular pode afetar a vida de alguém?",
        answers: ["Melhorando a qualidade do sono e das relações sociais", "Aumentando a ansiedade e prejudicando as interações presenciais", "Tornando a pessoa mais segura e confiante em si mesma", "Melhorando sua capacidade de comunicação"],
        correct: 1
    },
    {
        question: "Qual dessas estratégias pode ajudar a combater a dependência emocional?",
        answers: ["Reconhecer os sentimentos e colocar limites no uso do celular", "Passar mais tempo no celular para se sentir melhor", "Evitar qualquer tipo de interação social", "Manter-se conectado"],
        correct: 0
    },
    {
        question: "Quando é recomendado buscar ajuda profissional?",
        answers: ["Quando a dependência emocional começa a afetar o bem-estar diário", "Somente se outras pessoas perceberem o problema", "Nunca, pois é algo que sempre melhora sozinho", "Perguntar à terceiros o que você sente"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("question").innerText = questions[currentQuestion].question;
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach((button, index) => {
        button.innerText = questions[currentQuestion].answers[index];
        button.classList.remove("correct", "incorrect");
    });
    document.getElementById("result").innerText = "";
}

function checkAnswer(selected) {
    const buttons = document.querySelectorAll(".btn");
    if (selected === questions[currentQuestion].correct) {
        document.getElementById("result").innerText = "Correto!";
        score++;
        buttons[selected].classList.add("correct");
    } else {
        document.getElementById("result").innerText = "Errado!";
        buttons[selected].classList.add("incorrect");
        buttons[questions[currentQuestion].correct].classList.add("correct");
    }
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            document.getElementById("question").innerText = "Quiz finalizado!";
            document.querySelectorAll(".btn").forEach(btn => btn.style.display = "none");
            document.getElementById("score").innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
        }
    }, 1500);
}

loadQuestion();