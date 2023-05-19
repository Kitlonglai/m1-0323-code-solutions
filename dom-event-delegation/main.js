const taskList = document.querySelector('.task-list');
taskList.addEventListener('click', function (event) {
  console.log('event target ' + event.target);
  console.log('event target tagname ' + event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    const taskListItem = event.target.closest('.task-list-item');
    console.log('task list item ' + taskListItem);
    taskListItem.remove();
  }
});
