const btnSumb = document.getElementById('btnSubm');
const oldTask = document.querySelector(".taskItem");
const taskList = document.getElementById("taskList");
const InpTxt = document.getElementById('InpTaskTxt');
const EmptyList = document.querySelector('#emptyList');


btnSumb.addEventListener('click', EnteredModal);



function EnteredModal(){
    const EnteredTxt = InpTxt.value;
    if(taskList.children.length > 1){
        EmptyList.classList.add('hidden');
        EmptyList.classList.remove('display');
    }
    if(taskList.children.length === 0){
        EmptyList.classList.add('display');
        EmptyList.classList.remove('hidden');
    } 

    if(EnteredTxt != ''){
        const newTask = oldTask.cloneNode(true);
        newTask.querySelector('.taskItemTitle').textContent = EnteredTxt;
        taskList.appendChild(newTask);
        newTask.style.display = 'flex';

        InpTxt.value = "";
        addListeners(newTask);
        
        if(taskList.children.length === 1){
            oldTask.remove();
        }
    }
}

function addListeners(taskItem){

    const btnComplite = taskItem.querySelector('.btnComplite');
    const btnDel = taskItem.querySelector('.btnDel');

    btnComplite.addEventListener('click', function(){

        let taskText = taskItem.querySelector('.taskItemTitle');

        if(taskText.classList.contains('complited') == true){
            taskText.classList.remove('complited');
        } else{
            taskText.classList.add('complited');
        }
    })

    btnDel.addEventListener('click', function(){
        taskItem.remove();

        
    })
}
