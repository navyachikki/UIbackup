var strings = ['U', 'L', 'N'];

            var pattern = 'NULNL';

            var generateLowerCaseRandomChar = () => {
                var max = 122;
                var min = 97;
                var randomAscii = Math.random() * (max - min) + min;
                return String.fromCharCode(randomAscii);

            }

            var generateUpperCaseRandomChar = () => {
                var max = 90;
                var min = 65;
                var randomAscii = Math.random() * (max - min) + min;
                return String.fromCharCode(randomAscii);

            }


            var generateRandomNumber = () => {
    
                return Math.round(Math.random() * 9);

            }

            var generateCapthcaText = () => {
                // var capthca = Number + uppercase + lowercase + number + uppecase;

                var capthcaText = generateRandomNumber() + generateUpperCaseRandomChar() + generateLowerCaseRandomChar() + generateRandomNumber() + generateUpperCaseRandomChar();

                return capthcaText;
            }
