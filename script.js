// =========================================================================
// CONFIGURAÇÃO DOS LINKS OFICIAIS DA EXPOSIÇÃO
// =========================================================================
const urls = {
    mapa: 'https://projeto-animalx.github.io/animalx_exposicao/#11/38.7500/-9.2300',
    // Adicionamos ?kiosk=true para avisar o Tag ANIMALx que está no ecrã da exposição
    tag: 'https://danielatgomes.github.io/Tag-ANIMALx/?kiosk=true' 
};

// =========================================================================
// FUNÇÕES DE NAVEGAÇÃO DO QUIOSQUE
// =========================================================================

function abrirAplicacao(escolha) {
    const menu = document.getElementById('menu-screen');
    const appContainer = document.getElementById('app-container');
    const iframe = document.getElementById('app-frame');
    const backBtn = document.getElementById('back-btn');

    // 1. Ativa automaticamente o modo Fullscreen no navegador (se ainda não estiver)
    if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log('Modo ecrã inteiro automático:', err.message);
        });
    }

    // 2. Ajusta a posição e o visual do botão de voltar consoante a escolha
    backBtn.className = ''; // Limpa classes anteriores
    if (escolha === 'mapa') {
        backBtn.classList.add('pos-mapa');
    } else if (escolha === 'tag') {
        backBtn.classList.add('pos-tag');
    }

    // 3. Carrega o projeto escolhido dentro do iframe
    iframe.src = urls[escolha];

    // 4. Esconde o menu inicial e mostra a aplicação
    menu.style.display = 'none';
    appContainer.style.display = 'block';
}

function voltarAoMenu() {
    const menu = document.getElementById('menu-screen');
    const appContainer = document.getElementById('app-container');
    const iframe = document.getElementById('app-frame');

    // Limpa o iframe (garante que o Tag ANIMALx reinicia do zero para o próximo visitante)
    iframe.src = '';

    // Esconde a aplicação e volta a exibir o menu da exposição
    appContainer.style.display = 'none';
    menu.style.display = 'flex';
}