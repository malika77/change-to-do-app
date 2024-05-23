function createNewTask() {
    const inputItem = document.getElementById('taskInput').value

    if (inputItem === '') {
        alert('Please fill the task!')
        return
    }

    const listItem = document.createElement('li')
    listItem.textContent = inputItem

 
    //create input field
    //const inputField = document.createElement('input');
    //inputField.type = 'text';
    //inputField.placeholder='Enter Date';
    //inputField.className = 'input_field';
  


   // inputField.onclick = function() {
     //   listItem.className = ' input_field'
    //}

    

    

      const calendarField = document.createElement('input');
        calendarField.type = 'date';
        calendarField.className = 'calendar_field';
        listItem.appendChild(calendarField);

        calendarField.onclick = function() {
            listItem.className = 'calendar_field'
        }



    // Create complete btn
    const completeBtn = document.createElement('button')
    completeBtn.appendChild(document.createTextNode('Complete'))
    listItem.appendChild(completeBtn)
    completeBtn.className = 'complete_btn'
    

    completeBtn.onclick = function() {
        listItem.className = 'completed_task'
    }

    // Delete btn part
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'Remove'
    deleteBtn.className = 'delete_btn'
    listItem.appendChild(deleteBtn)

    deleteBtn.onclick = function() {
        listItem.remove()
    }


    document.getElementById('taskList').appendChild(listItem)

}