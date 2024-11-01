function addTask() {
            const taskInput = document.getElementById('taskInput');
            const taskText = taskInput.value.trim();

            if (taskText === '') {
                alert('Task cannot be empty!');
                return;
            }

            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

            const taskLabel = document.createElement('span');
            taskLabel.textContent = taskText;


            const deleteButton = document.createElement('button');
            deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function () {
                listItem.remove();
            };

            const completeButton = document.createElement('button');
            completeButton.classList.add('btn', 'btn-success', 'btn-sm', 'me-2');
            completeButton.textContent = 'Complete';
            completeButton.onclick = function() {
                taskLabel.classList.toggle('completed');
            };

            listItem.append(completeButton, taskLabel, deleteButton);
            document.getElementById('todoList').appendChild(listItem);

            taskInput.value = '';
        }


        function sortNumbers(order) {
            const numbersInput = document.getElementById("numbersInput").value;
            if (numbersInput === "") {
                alert("Please enter some numbers.");
                return;
            }


            const numbersArray = numbersInput.split(",").map(Number);

            if (numbersArray.length > 6) {
        alert("Please enter exactly 6 numbers.");
        return;
    }

            if (order === "asc") {
                numbersArray.sort((a, b) => a - b);
            } else if (order === "desc") {
                numbersArray.sort((a, b) => b - a);
            }

            document.getElementById("sortedNumbers").textContent = "Sorted Numbers: " + numbersArray.join(", ");
        }
        const pages = ['section1.html', 'section2.html', 'section3.html','section4.html','section5.html'];
let currentPage = pages.indexOf(window.location.pathname.split('/').pop());

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        if (currentPage < pages.length - 1) {
            currentPage++;
            window.location.href = pages[currentPage];
        }
    } else if (event.key === 'ArrowLeft') {
        if (currentPage > 0) {
            currentPage--;
            window.location.href = pages[currentPage];
        }
    }
});