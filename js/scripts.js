const dataSource = 'https://assets.codepen.io/16425/Spring-2025-Roster.json';
const container = document.querySelector('.card-grid');

fetch(dataSource)
  .then(res => res.json())
  .then(students => {
    students.forEach(student => {
      const card = document.createElement('a');
      card.href = '#';
      card.className = 'card';

      card.innerHTML = `
        <div class="card__background-wrapper">
          <div class="card__background" style="background-image:url('${student.imageUrl.trim()}')"></div>
        </div>
        <section class="card__content">
          <h3 class="card__heading">${student.name}</h3>
          <p class="card__sub">${student.status}</p>
          <p class="card__text">${student.talent}</p>
          <blockquote class="card__motto">"${student.motto}"</blockquote>
        </section>
      `;
      container.append(card);
    });
  })
  
  // Sparkle effect
  const sparkleContainer = document.createElement('div');
  sparkleContainer.className = 'sparkle-container';
  document.body.appendChild(sparkleContainer);
  
  function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
  
    const size = Math.random() * 10 + 5; 
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${Math.random() * 100}%`; 
    sparkle.style.animationDuration = `${Math.random() * 5 + 5}s`; 
  
    sparkleContainer.appendChild(sparkle);
  
    sparkle.addEventListener('animationend', () => {
      sparkle.remove();
    });
  }
  
  setInterval(createSparkle, 100);