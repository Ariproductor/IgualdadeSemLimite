
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
