        const track = document.getElementById('sliderTrack');
        const slides = document.querySelectorAll('.slide');
        let index = 0;

        function nextSlide() {
            index++;
            if (index >= slides.length) {
                index = 0;
            }
            track.style.transform = `translateX(-${index * 100}%)`;
        }
        setInterval(nextSlide, 3000);