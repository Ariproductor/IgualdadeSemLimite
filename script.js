const slides = [
      [
        { tag: 't-m', label: 'Mercado',          text: 'Participação de mulheres na tecnologia cresce 20% em 2025.' },
        { tag: 't-d', label: 'Direitos',         text: 'Nova lei garante igualdade salarial para as mesmas funções.' },
        { tag: 't-c', label: 'Carreira',         text: '5 dicas de especialistas para se destacar em entrevistas online.' },
        { tag: 't-e', label: 'Empreendedorismo', text: 'Número de startups lideradas por mulheres bate recorde histórico.' }
      ],
      [
        { tag: 't-s', label: 'Saúde',            text: 'Burnout feminino: empresas repensam cultura e bem-estar no trabalho.' },
        { tag: 't-l', label: 'Liderança',        text: 'Mulheres assumem 35% dos cargos de diretoria no Brasil em 2025.' },
        { tag: 't-i', label: 'Inovação',         text: 'Mentoria conecta jovens mulheres a líderes do setor de tecnologia.' },
        { tag: 't-r', label: 'Renda',            text: 'Freelancers femininas faturam 40% mais com habilidades digitais.' }
      ],
      [
        { tag: 't-m', label: 'Mercado',          text: 'Setor financeiro abre mais vagas para mulheres em posições sênior.' },
        { tag: 't-c', label: 'Carreira',         text: 'Como montar um portfólio que chama atenção de recrutadores em 2025.' },
        { tag: 't-d', label: 'Direitos',         text: 'Licença-maternidade estendida entra em vigor em novas empresas.' },
        { tag: 't-e', label: 'Empreendedorismo', text: 'Aceleradoras focadas em mulheres negras captam R$50 mi este ano.' }
      ],
      [
        { tag: 't-l', label: 'Liderança',        text: 'Times com liderança feminina são 21% mais lucrativos, aponta pesquisa.' },
        { tag: 't-s', label: 'Saúde',            text: 'Empresas investem em saúde mental feminina com programas de apoio.' },
        { tag: 't-i', label: 'Inovação',         text: 'IA ajuda mulheres a negociar melhores salários no mercado corporativo.' },
        { tag: 't-r', label: 'Renda',            text: 'Cursos de programação dobram a renda de mulheres em regiões periféricas.' }
      ]
    ];

    const track   = document.getElementById('track');
    const dotsEl  = document.getElementById('dots');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');
    let current = 0;

    slides.forEach((group, si) => {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      group.forEach(card => {
        slide.innerHTML += `
          <div class="card">
            <span class="tag ${card.tag}">${card.label}</span>
            <p>${card.text}</p>
          </div>`;
      });
      track.appendChild(slide);

      const dot = document.createElement('button');
      dot.className = 'dot' + (si === 0 ? ' on' : '');
      dot.setAttribute('aria-label', 'Página ' + (si + 1));
      dot.addEventListener('click', () => goTo(si));
      dotsEl.appendChild(dot);
    });

    function goTo(n) {
      current = n;
      track.style.transition = 'transform 0.4s ease';
      track.style.transform  = 'translateX(-' + (current * 100) + '%)';
      document.querySelectorAll('.dot').forEach((d, i) => {
        d.className = 'dot' + (i === current ? ' on' : '');
      });
      btnPrev.className = 'cbtn' + (current === 0 ? ' disabled' : '');
      btnNext.className = 'cbtn' + (current === slides.length - 1 ? ' disabled' : '');
    }

    btnPrev.addEventListener('click', () => { if (current > 0) goTo(current - 1); });
    btnNext.addEventListener('click', () => { if (current < slides.length - 1) goTo(current + 1); });

    goTo(0);

const locaisData = {
    'SP': ['São Paulo', 'Campinas', 'Osasco', 'Santos', 'Ribeirão Preto'],
    'RJ': ['Rio de Janeiro', 'Niterói', 'Duque de Caxias', 'Petrópolis'],
    'MG': ['Belo Horizonte', 'Uberlândia', 'Contagem', 'Juiz de Fora'],
    'PR': ['Curitiba', 'Londrina', 'Maringá', 'Cascavel'],
    'BA': ['Salvador', 'Feira de Santana', 'Vitória da Conquista']
};

const vagasData = [
    { id: 1, titulo: 'Desenvolvedora Front-end React', empresa: 'TechSolutions SA', estado: 'SP', cidade: 'São Paulo', tipo: 'Pleno', area: 'TI', remoto: true, salario: 'R$ 6.000 - R$ 8.000' },
    { id: 2, titulo: 'Jovem Aprendiz Administrativo', empresa: 'Banco Alfa', estado: 'RJ', cidade: 'Rio de Janeiro', tipo: 'Jovem Aprendiz', area: 'Administrativo', remoto: false, salario: 'R$ 1.200' },
    { id: 3, titulo: 'Arquiteta Urbanista', empresa: 'Build Design', estado: 'MG', cidade: 'Belo Horizonte', tipo: 'Sênior', area: 'Arquitetura', remoto: false, salario: 'A combinar' },
    { id: 4, titulo: 'Designer Gráfica (UI/UX)', empresa: 'Creative Agency', estado: 'PR', cidade: 'Curitiba', tipo: 'Estágio', area: 'Design', remoto: true, salario: 'R$ 1.500 + Benefícios' },
    { id: 5, titulo: 'Gerente Comercial', empresa: 'Varejo Plus', estado: 'SP', cidade: 'Campinas', tipo: 'Pleno', area: 'Vendas', remoto: false, salario: 'R$ 4.500 + Comissão' },
    { id: 6, titulo: 'Enfermeira Chefe', empresa: 'Hospital Vida', estado: 'BA', cidade: 'Salvador', tipo: 'Sênior', area: 'Saúde', remoto: false, salario: 'A combinar' },
    { id: 7, titulo: 'Analista de Dados Júnior', empresa: 'Fintech X', estado: 'SP', cidade: 'São Paulo', tipo: 'Júnior', area: 'TI', remoto: true, salario: 'R$ 3.500' },
    { id: 8, titulo: 'Assistente Administrativo', empresa: 'Logística Nacional', estado: 'RJ', cidade: 'Duque de Caxias', tipo: 'Pleno', area: 'Administrativo', remoto: false, salario: 'R$ 2.200' },
    { id: 9, titulo: 'Social Media Freelancer', empresa: 'Marketing Digital Br', estado: 'MG', cidade: 'Uberlândia', tipo: 'Freelance', area: 'Design', remoto: true, salario: 'Por projeto' }
];


const filtroEstado = document.getElementById('filtro-estado');
const filtroCidade = document.getElementById('filtro-cidade');
const filtroTipo = document.getElementById('filtro-tipo');
const filtroArea = document.getElementById('filtro-area');


filtroEstado.addEventListener('change', function () {
    const estado = this.value;
    filtroCidade.innerHTML = '<option value="">Todas as Cidades</option>';

    if (estado && locaisData[estado]) {
        filtroCidade.disabled = false;
        locaisData[estado].forEach(cidade => {
            filtroCidade.innerHTML += `<option value="${cidade}">${cidade}</option>`;
        });
    } else {
        filtroCidade.disabled = true;
        filtroCidade.innerHTML = '<option value="">Selecione um estado primeiro</option>';
    }
    aplicaFiltro();
});


filtroCidade.addEventListener('change', aplicaFiltro);
filtroTipo.addEventListener('change', aplicaFiltro);
filtroArea.addEventListener('change', aplicaFiltro);


function aplicaFiltro() {
    const selEstado = filtroEstado.value;
    const selCidade = filtroCidade.value;
    const selTipo = filtroTipo.value;
    const selArea = filtroArea.value;

    const vagasFiltradas = vagasData.filter(vaga => {
        const matchEstado = selEstado === '' || vaga.estado === selEstado;
        const matchCidade = selCidade === '' || vaga.cidade === selCidade;
        const matchTipo = selTipo === '' || vaga.tipo === selTipo;
        const matchArea = selArea === '' || vaga.area === selArea;
        return matchEstado && matchCidade && matchTipo && matchArea;
    });

    vagasRenderizadas(vagasFiltradas);
}


function vagasRenderizadas(vagas) {
    const listaGrupo = document.getElementById('lista_vagas');
    const msgSemVagas = document.getElementById('msg-sem-vagas');

    listaGrupo.innerHTML = '';

    if (vagas.length === 0) {
        listaGrupo.classList.add('hidden');
        msgSemVagas.classList.remove('hidden');
        return;
    }

    listaGrupo.classList.remove('hidden');
    msgSemVagas.classList.add('hidden');

    vagas.forEach(vaga => {
        const cartaoVaga = `
            <div class="cartao-vaga">
             <div class="conteudo-vaga">
                
                    <div class="cabecalho-vaga">
                     <div class="info-principal">
                            <h3 class="titulo-vaga">${vaga.titulo}</h3>
                            <p class="empresa-vaga">${vaga.empresa}</p>
                        </div>
                        <div class="icone-maleta">
                            <i class="fa-solid fa-briefcase"></i>
                        </div>
                    </div>
                
                    <div class="tags-vaga">
                        <span class="tag tag-area">
                            <i class="fa-solid fa-layer-group icone-tag"></i>${vaga.area}
                        </span>
                        <span class="tag tag-tipo">
                            <i class="fa-regular fa-clock icone-tag"></i>${vaga.tipo}
                        </span>
                    </div>

                    <div class="detalhes-vaga">
                        <p class="detalhe-item">
                            <i class="fa-solid fa-location-dot icone-detalhe"></i> 
                            ${vaga.cidade}, ${vaga.estado} ${vaga.remoto ? '(Opção Remoto)' : ''}
                        </p>
                        <p class="detalhe-item">
                            <i class="fa-solid fa-wallet icone-detalhe"></i> 
                            ${vaga.salario}
                        </p>
                    </div>

                </div>
            
                <button class="botao-candidatar">
                    Candidatar-se
                </button>
            </div>
        `;
        listaGrupo.innerHTML += cartaoVaga;
    });
}

window.addEventListener('DOMContentLoaded', () => {
    renderNews();
    aplicaFiltro();
});



