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
                    }, 1500);
                  });
                });
                // API Key para Google Translate
              const apiKey = 'TU_API_KEY_AQUI';
              
              // Función para traducir la página
              async function translatePage(targetLanguage) {
                  // Obtener el contenido de la página
                  const content = document.documentElement.outerHTML;
              
                  // Hacer una petición a la API de Google Translate
                  const response = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${apiKey}`, {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({
                          q: content,
                          target: targetLanguage
                      })
                  });
              
                  // Obtener la respuesta de la API
                  const data = await response.json();
              
                  // Reemplazar el contenido de la página con la traducción
                  document.documentElement.innerHTML = data.data.translations[0].translatedText;
              }
              
              // Función para cambiar el idioma de la página
              function toggleLanguage() {
                  const currentLanguage = document.querySelector('.language-button').textContent;
                  if (currentLanguage === 'Español') {
                      translatePage('es');
                      document.querySelector('.language-button').textContent = 'English';
                  } else {
                      translatePage('en');
                      document.querySelector('.language-button').textContent = 'Español';
                  }
                      }