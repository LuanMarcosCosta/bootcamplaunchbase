// this program number two

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

for (i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i].nome + " Trabalaha com " + usuarios[i].tecnologias)
}