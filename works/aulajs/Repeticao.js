// criar um programa que calcula a media dos alunos e envia a mensagem do calculo da média.
// Se a média for maior que 05 paranenizar a turma

const alunosdaTurma01 = [{
        nome: "Luãn",
        Nota: 9.8
    },
    {
        nome: "Mayk",
        Nota: 6.7
    },

    {
        nome: "Diego",
        Nota: 2
    }

]

const alunosdaTurma02 = [{
        nome: "Nathan",
        Nota: 7.9
    },
    {
        nome: "Anaaaaa",
        Nota: 10
    },

    {
        nome: "Rodriguetzzzz",
        Nota: 8
    }

]

function calculaMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].Nota
    }
    const media = soma / alunos.length
    return media
}

const media01 = calculaMedia(alunosdaTurma01)
const media02 = calculaMedia(alunosdaTurma02)



function enviaMensagem(media, turma) {
    // Se a nota for baixa
    if (media > 05) {
        console.log(`The Medium of Turma foi ${turma} ${media} Congratulations`)
    } else {
        console.log(`A note of Turm ${turma} foi menor que o expect`)
    }
    console.log(media)
}

enviaMensagem(media01, 'turmaA')
enviaMensagem(media02, 'turmaB')