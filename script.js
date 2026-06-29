const terminalText = document.getElementById("terminalText");
const accessBtn = document.getElementById("accessBtn");

const logs = [
    "[BOOT] Sistema Helen reiniciado.",
    "[WARNING] Núcleo de Ashbury respondendo sem autorização.",
    "[CAMERA] Movimento detectado no setor residencial.",
    "[POWER] Energia redirecionada para portas internas.",
    "[AUDIO] Voz desconhecida captada no corredor leste.",
    "[ERROR] Protocolo de contenção falhou.",
    "[HELEN] Eu ainda estou aqui."
];

let index = 0;

function writeLog() {
    if (index < logs.length) {
        terminalText.textContent += "\n" + logs[index];
        index++;
        setTimeout(writeLog, 850);
    }
}

setTimeout(() => {
    terminalText.textContent = logs[0];
    index = 1;
    writeLog();
}, 700);

accessBtn.addEventListener("click", () => {
    document.body.classList.add("glitch");

    terminalText.textContent += "\n\n[ACCESS] Tentativa de acesso detectada.";
    terminalText.textContent += "\n[HELEN] Você não deveria estar aqui.";

    setTimeout(() => {
        document.body.classList.remove("glitch");
    }, 900);
});