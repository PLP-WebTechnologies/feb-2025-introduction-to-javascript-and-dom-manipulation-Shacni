document.addEventListener('DOMContentLoaded', function() {

    try {

        // Get DOM elements

        const planetTitle = document.getElementById('planet-title');

        const planetDesc = document.getElementById('planet-desc');

        const planetVisual = document.getElementById('planet-visual');

        const changeTextBtn = document.getElementById('change-text-btn');

        const changeStyleBtn = document.getElementById('change-style-btn');

        const toggleElementBtn = document.getElementById('toggle-element-btn');

        const moonContainer = document.getElementById('moon-container');

        

        // Validate elements exist

        if (!planetTitle || !planetDesc || !planetVisual || !changeTextBtn || 

            !changeStyleBtn || !toggleElementBtn || !moonContainer) {

            throw new Error('One or more required elements are missing from the DOM');

        }

        

        // Planet data

        const planets = [

            {

                name: "Nebula Prime",

                desc: "A vibrant gas giant with swirling storms of ionized particles.",

                color1: "#ff8906",

                color2: "#e53170"

            },

            {

                name: "Quasar-7",

                desc: "A crystalline planet that emits harmonic resonance frequencies.",

                color1: "#00f0ff",

                color2: "#7123e0"

            },

            {

                name: "Chronos V",

                desc: "This ancient world's rotation creates time dilation effects.",

                color1: "#ff3864",

                color2: "#2de2e6"

            },

            {

                name: "Aurora Minor",

                desc: "Its atmosphere produces perpetual auroras in neon hues.",

                color1: "#72efdd",

                color2: "#6930c3"

            }

        ];

        

        // Current planet index

        let currentPlanet = 0;

        

        // Change text content

        changeTextBtn.addEventListener('click', function() {

            currentPlanet = (currentPlanet + 1) % planets.length;

            const planet = planets[currentPlanet];

            

            planetTitle.textContent = planet.name;

            planetDesc.textContent = planet.desc;

            planetVisual.style.background = `radial-gradient(circle, ${planet.color1}, ${planet.color2})`;

            planetVisual.style.boxShadow = `0 0 30px ${planet.color2}`;

        });

        

        // Toggle cosmic mode

        changeStyleBtn.addEventListener('click', function() {

            document.body.classList.toggle('cosmic-mode');

            

            // Change button text based on state

            const isCosmicMode = document.body.classList.contains('cosmic-mode');

            changeStyleBtn.textContent = isCosmicMode ? 'Normal Mode' : 'Cosmic Mode';

            changeStyleBtn.setAttribute('aria-pressed', isCosmicMode);

        });

        

        // Toggle moon element

        toggleElementBtn.addEventListener('click', function() {

            const isHidden = moonContainer.style.display === 'none';

            

            // Smooth transition

            moonContainer.style.transition = 'opacity 0.3s ease';

            

            if (isHidden) {

                moonContainer.style.display = 'block';

                moonContainer.style.opacity = '0';

                setTimeout(() => moonContainer.style.opacity = '1', 10);

                toggleElementBtn.textContent = 'Hide Moon';

                moonContainer.setAttribute('aria-hidden', 'false');

            } else {

                moonContainer.style.opacity = '0';

                setTimeout(() => {

                    moonContainer.style.display = 'none';

                }, 300);

                toggleElementBtn.textContent = 'Reveal Moon';

                moonContainer.setAttribute('aria-hidden', 'true');

            }

        });

        

        // Bonus: Animate planet on hover

        planetVisual.addEventListener('mouseover', function() {

            this.style.transform = 'scale(1.1)';

            this.style.transition = 'transform 0.5s ease';

        });

        

        planetVisual.addEventListener('mouseout', function() {

            this.style.transform = 'scale(1)';

        });

        

    } catch (error) {

        console.error('Error in Cosmic Explorer:', error);

        alert('There was an error loading the Cosmic Explorer. Please try again later.');

    }

});