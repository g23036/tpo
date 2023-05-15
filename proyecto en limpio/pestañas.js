
// Obtener los elementos de las pestañas
	  const tabs = document.querySelectorAll('.tab');
	  const tabContents = document.querySelectorAll('.tabcontent');
  
	  // Agregar eventos a cada pestaña
	  tabs.forEach(tab => {
		tab.addEventListener('mouseover', () => {
		  // Obtener el contenido correspondiente
		  const tabContent = document.querySelector(`.tabcontent[data-tab="${tab.dataset.tab}"]`);
		  // Desactivar todas las pestañas
		  tabs.forEach(tab => {
			tab.classList.remove('active');
		  });
		  // Desactivar todos los contenidos
		  tabContents.forEach(tabContent => {
			tabContent.classList.remove('active');
		  });
		  // Activar la pestaña correspondiente
		  tab.classList.add('active');
		  // Activar el contenido correspondiente
		  tabContent.classList.add('active');
		  // Desactivar la pestaña y el contenido después de 2 segundos
		  setTimeout(() => {
			tab.classList.remove('active');
			tabContent.classList.remove('active');
		  }, 2000);
		});
	  });
