const body = document.body;

const aumentarFonte = document.getElementById("aumentarFonte");
const diminuirFonte = document.getElementById("diminuirFonte");
const altoContraste = document.getElementById("altoContraste");
const espacamento = document.getElementById("espacamento");
const leitura = document.getElementById("leitura");
const pararLeitura = document.getElementById("pararLeitura");

// ========================================
// AUMENTAR FONTE
// ========================================

aumentarFonte.addEventListener("click", () => {

```
if (body.classList.contains("fonte-grande")) {
    body.classList.remove("fonte-grande");
    body.classList.add("fonte-muito-grande");
} else {
    body.classList.add("fonte-grande");
}
```

});

// ========================================
// DIMINUIR FONTE
// ========================================

diminuirFonte.addEventListener("click", () => {

```
if (body.classList.contains("fonte-muito-grande")) {
    body.classList.remove("fonte-muito-grande");
    body.classList.add("fonte-grande");
} else {
    body.classList.remove("fonte-grande");
}
```

});

// ========================================
// ALTO CONTRASTE
// ========================================

altoContraste.addEventListener("click", () => {

```
body.classList.toggle("alto-contraste");
```

});

// ========================================
// ESPAÇAMENTO ENTRE LINHAS
// ========================================

espacamento.addEventListener("click", () => {

```
body.classList.toggle("mais-espacamento");
```

});

// ========================================
// LEITURA EM VOZ ALTA
// ========================================

leitura.addEventListener("click", () => {

```
if (!("speechSynthesis" in window)) {
    alert("Seu navegador não oferece suporte à leitura em voz alta.");
    return;
}

speechSynthesis.cancel();

const conteudo = document.querySelector(".conteudo").innerText;

const texto = new SpeechSynthesisUtterance(conteudo);

texto.lang = "pt-BR";
texto.rate = 0.9;
texto.pitch = 1;
texto.volume = 1;

speechSynthesis.speak(texto);
```

});

// ========================================
// PARAR LEITURA
// ========================================

pararLeitura.addEventListener("click", () => {

```
if ("speechSynthesis" in window) {
    speechSynthesis.cancel();
}
```

});

// ========================================
// TECLA ESC PARA PARAR A LEITURA
// ========================================

document.addEventListener("keydown", (evento) => {

```
if (evento.key === "Escape") {

    if ("speechSynthesis" in window) {
        speechSynthesis.cancel();
    }

}
```

});
