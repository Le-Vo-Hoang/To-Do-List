const newItemInput = document.getElementById('newItem');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

addButton.addEventListener('click', () => {
    const newItemText = newItemInput.value.trim();
    if (newItemText) {
        const newListItem = document.createElement('li');
        newListItem.textContent = newItemText;

        // Tạo nút "Xóa"
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Xóa';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(newListItem);
        });

        // Thêm nút "Xóa" vào thẻ li
        newListItem.appendChild(deleteButton);

        // Thêm sự kiện click cho thẻ li để đánh dấu hoàn thành
        newListItem.addEventListener('click', toggleListItemCompletion);

        todoList.appendChild(newListItem);
        newItemInput.value = '';
    }
});

function toggleListItemCompletion(event) {
    const listItem = event.target;
    listItem.classList.toggle('completed');
}

