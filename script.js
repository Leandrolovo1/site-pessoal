document.addEventListener("DOMContentLoaded", () => {
    const checkbox = document.getElementById("chk");
    const body = document.body;

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            // Ativa o modo claro
            body.classList.add("light-mode");
            body.classList.remove("dark-mode");
        } else {
            // Retorna ao modo padrão (dark-mode)
            body.classList.add("dark-mode");
            body.classList.remove("light-mode");
        }
    });
});