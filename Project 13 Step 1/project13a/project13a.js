
        function generateNumbers() {
            var numbers = [];
            for (var i = 1; i <= 1000; i++) {
                if (i % 3 === 0 || i % 5 === 0) {
                    numbers.push(i);
                }
            }
            return numbers;
        }

        function displayNumbers() {
            var numbersList = generateNumbers();
            document.getElementById('numbers').innerText = 'Numbers: ' + numbersList.join(', ');
            
            var sum = numbersList.reduce((acc, curr) => acc + curr, 0);
            document.getElementById('sum').innerText = 'The sum of all of these numbers is equal to ' + sum;
        }

        displayNumbers();
 