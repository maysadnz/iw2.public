 const docesInfo = {
        camafeu: "Camafeu: Doce fino feito de nozes moídas, coberto com fondant.",
        merengue: "Merengue: Doce leve e aerado feito com claras de ovos batidas com açúcar.",
        banoffe: "Banoffe: Sobremesa inglesa feita com camadas de banana, doce de leite e chantilly sobre uma base crocante de biscoito.",
        pudim: "Pudim: Tradicional pudim de leite condensado com calda de caramelo.",
        sonho: "Sonho: Massa frita recheada com creme ou doce de leite.",
        milfolhas: "Mil-folhas: Camadas de massa folhada com creme no meio.",
        tortalimao: "Torta de Limão: Torta recheada com creme de limão e coberta com raspas.",
        cajuzinho: "Cajuzinho: Feito com amendoim, leite condensado e açúcar.",
        pastelnata: "Pastel de Nata: Doce português com recheio cremoso em massa folhada.",
        carolina: "Carolina: Massa recheada com doce de leite e cobertura de chocolate."
    };

    function Select (doce, element) {
        element.remove();

        const listaSelecionados = document.getElementById("selecionados");
        const novoItem = document.createElement("li");
        novoItem.textContent = docesInfo[doce].split(":")[0];
        listaSelecionados.appendChild(novoItem);

        mostrarDescricao(doce);
    }

    function mostrarDescricao(doce) {
        document.getElementById("descricao").textContent = docesInfo[doce] || "";
    }

    function limparSelecao() {
        const listaSelecionados = document.getElementById("selecionados");
        listaSelecionados.innerHTML = "";

        const listaDoces = document.getElementById("lista-doces");
        listaDoces.innerHTML = "";

        for (const key in docesInfo) {
            const li = document.createElement("li");
            li.textContent = docesInfo[key].split(":")[0];
            li.onclick = function () {
                toggleSelecao(key, li);
            };
            listaDoces.appendChild(li);
        }
        document.getElementById("descricao").textContent = "";
    }