function iDisplay(){
  const todoList = document.getElementById('td_list');
  const emptyMessage = document.getElementById('empty');
  const notEmptyMessage = document.getElementById('not_empty');

  if (todoList.children.length === 0) {
    emptyMessage.style.display = 'block';
    notEmptyMessage.style.display = 'none';
  } else {
    emptyMessage.style.display = 'none';
    notEmptyMessage.style.display = 'block';
  
};

iDisplay();
