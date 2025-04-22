const dataSource = 'https://assets.codepen.io/16425/Spring-2025-Roster.json';
    const container = document.querySelector('.card-grid');

    fetch(dataSource)
      .then(res => res.json())
      .then(students => {
        students.forEach(student => {
          // Create anchor to get same semantics as your cards
          const card = document.createElement('a');
          card.href = '#';
          card.className = 'card';

          // Build inner HTML using your JSON fields
          card.innerHTML = `
            <div class="card__background"
                 style="background-image:url('${student.imageUrl.trim()}')"></div>
            <div class="card__content">
              <h3 class="card__heading">${student.name}</h3>
              <p class="card__sub">${student.status}</p>
              <p class="card__text">${student.talent}</p>
              <p class="card__motto">"${student.motto}"</p>
            </div>
          `;
          container.append(card);
        });
      })
      .catch(err => console.error('Roster fetch failed:', err));