// Criar uma empresa com dados passado por eles:

const empresa = {
    name: "Rocketseat",
    color: "Purple",
    focus: "programer",
    Addres: "Rua Guilherme Gembala",
    number: 260
}

const usuario = {
    name: "Luãn",
    idade: 32
}

console.log(`O nome do usuário é ${usuario.name}`);

console.log("A empresa " + empresa.name + " está localizada em " + empresa.Addres + " Nº " + empresa.number)

const objeto = {
    propriedade: [
        { nome: "C++", especialidade: "Desktop" },
        { nome: "JavaScript", especialidade: "Web/Mobile" }
    ],
    propriedade02: [
        { nome: "C#", especialidade: "Desktop" },
        { nome: "Java", especialidade: "Lentidão" }
    ]
};

console.log("O usuário " + usuario.name + " tem " +
    usuario.idade + " e usa a técnologia " +
    objeto.propriedade[0].nome + " com especialidade em " +
    objeto.propriedade02[1].especialidade)