
const pending_tasks = document.getElementById('pending_tasks');
const completed_tasks = document.getElementById('completed_tasks');
const completed_tasks_list = document.getElementById('completed_tasks_list');

pending_tasks.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
});

pending_tasks.addEventListener('drag', (e) => {
    e.target.classList.add('active');
})

pending_tasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active');
})

completed_tasks.addEventListener('dragover', (e) => {
    e.preventDefault();
})

completed_tasks.addEventListener('drop', (e) => {
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData('text'));
    element.classList.remove('active');

    completed_tasks_list.append(element);

})