const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsDiv = document.getElementById('results');   


const allergenSubstitutions = {

 dairy: ['oat milk', 'soy milk', 'almond milk', 'coconut milk', 'rice milk'],
  gluten: ['rice flour', 'corn flour', 'quinoa flour', 'buckwheat flour'],
  nuts: ['sunflower seeds', 'pumpkin seeds', 'chia seeds', 'hemp seeds', 'almond', 'cashew'],
  eggs: ['flax egg', 'chia egg', 'applesauce', 'banana'],
  cheese: ['vegan cheese', 'nut-based cheese', 'soy-based chees
};

searchButton.addEventListener('click', () => {
  const allergen = searchInput.value.toLowerCase();
  const substitutions = allergenSubstitutions[allergen];

  if (substitutions) {
    const list = document.createElement('ul');
    substitutions.forEach(substitution => {
      const li = document.createElement('li');
      li.textContent = substitution;
      list.appendChild(li);
    });
    resultsDiv.innerHTML = '';
    resultsDiv.appendChild(list);
  } else {
    resultsDiv.textContent = 'No substitutions found for that allergen.';
  }
});
