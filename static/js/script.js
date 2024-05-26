document.addEventListener('DOMContentLoaded', function() {
    function typeWriter(text, id, delay = 0, callback) {
        let i = 0;
        let wordCount = 0;
        const target = document.getElementById(id);
        setTimeout(function() {
            target.innerHTML = ''; // Clear previous text
            const interval = setInterval(() => {
                if (i < text.length) {
                    target.innerHTML += text.charAt(i);
                    if (text.charAt(i) === ' ') {
                        wordCount++;
                        if (wordCount === 4) {
                            target.innerHTML += '<br>'; // Insert a line break every 5 words
                            wordCount = 0; // Reset word count
                        }
                    }
                    i++;
                } else {
                    clearInterval(interval);
                    target.innerHTML += '<br><br>'; // Adds spacing after each message
                    if (callback) callback(); // Calls the next function after the current text completes
                }
            }, 150);
        }, delay);
    }

function startTyping() {
    typeWriter("Hola Mon", "typewriter1", 500, function() {
        typeWriter("Hice esto porque vi que publicaste flores, pero ya me había ido, jaja", "typewriter2", 2000, function() {
            typeWriter("No sabes cuánto me tardé en programar las flores, jajaja", "typewriter1", 2000, function() {
                typeWriter("Pero mira, se ven bonitas como tú y son para ti", "typewriter2", 2000, function() {
                    typeWriter("Espero que te gusten y quizás te alegren el día", "typewriter1", 2000, function() {
                        typeWriter("Yo sé que dijiste que no querías nada, pero...", "typewriter2", 2000, function() {
                            typeWriter("me cansé de fingir que no quiero hacerte detalles que siento que te gustarían (o eso espero)", "typewriter1", 2000, function() {
                                typeWriter("Gracias por inspirar este jardín digital; estas son tus flores <3", "typewriter2", 2000, function() {
                                    typeWriter("Aquí estarán siempre (ya que no se mueren) para que recuerdes", "typewriter1", 2000, function () {
                                        typeWriter("Que no solo tú te sentiste como te sentiste por mí algún día... yo siento por ti lo que siempre te dije: te quiero mucho, mi Moon 🌙", "typewriter1", 2000);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}


    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
        startTyping();  // Start typing after the page has loaded
    }, 1000);
});
