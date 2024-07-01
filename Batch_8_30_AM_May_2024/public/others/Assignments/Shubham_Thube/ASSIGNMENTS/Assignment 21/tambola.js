        let highlightedElement = null; 
        function getRandomColor() {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }

        for (var i = 1; i <= 90; i++) {
            var divTag = document.createElement("div");
            divTag.setAttribute("class", "coinCircle");
            divTag.innerText = i;

            divTag.addEventListener('click', function() {
                console.log(this.innerText);
                document.querySelector(".box").textContent = this.innerText;

                if (highlightedElement) {
                    highlightedElement.classList.remove('highlight');
                }

                
                this.classList.add('highlight');
                highlightedElement = this; 
                this.style.backgroundColor = getRandomColor();
            });
            document.querySelector('.container').append(divTag);
        }
