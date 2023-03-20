const weekendBtn = document.querySelector('.calender__content1-box-weekends')
const weekendTh = document.querySelectorAll('.calender__content2-table-day th:nth-child(n+6)')
const weekendTd = document.querySelectorAll('.calender__content2-table-data td:nth-child(n+6)')

const addTaskBtn = document.querySelector('.calender__content1-box-addtask')
const addTaskShow = document.querySelector('.background__body__popup-task')
const overlay = document.querySelector('.calender__wrap-overlay')

const addTaskTd = document.querySelectorAll('.calender__content2-table-data td')
const addTask = document.querySelector('.background__body__popup-task__box-btnAddTask')
const input = document.querySelector('.background__body__popup-task__box-main__title-input')
    weekendBtn.addEventListener('click',()=>{
        weekendBtn.classList.toggle('calender__content1-box--active')
        if(document.querySelector('.calender__content1-box-weekends.calender__content1-box--active')){
            weekendTh.forEach((item)=>{
                item.style.display = 'revert'
            })
            weekendTd.forEach((item)=>{
                item.style.display = 'revert'
            })
        }else{
            weekendTh.forEach((item)=>{
                item.style.display = 'none'
            })
            weekendTd.forEach((item)=>{
                item.style.display = 'none'
            })
        }
        

    })

    // TaskShow
function showTask(){
        //hien thi task
    addTaskBtn.classList.add('calender__content1-box--active')
    addTaskShow.classList.remove('hide')
    overlay.classList.remove('hide')
    input.focus()
}
    //  TaskHideOverlay
function hideTask(){
      //an task
    overlay.addEventListener('click',()=>{
        addTaskShow.classList.add('hide')
        overlay.classList.add('hide')
        addTaskBtn.classList.remove('calender__content1-box--active')

    })
    addTask.addEventListener('click',()=>{
        addTaskShow.classList.add('hide')
        overlay.classList.add('hide')
        addTaskBtn.classList.remove('calender__content1-box--active')
    })
}

    // DataInput
function dataInput(td){
    let li = document.createElement('li')
    li.innerText = input.value
    td.appendChild(li)
    console.log(li)
}

    // btnShowTask
addTaskBtn.addEventListener('click',()=>{
    addTaskBtn.classList.toggle('calender__content1-box--active')
    if(document.querySelector('.calender__content1-box-addtask.calender__content1-box--active')){
        //hien thi task
        showTask()
    }
    
    hideTask()
})

    //showTaskTd
    
addTaskTd.forEach((item)=>{
    
    item.addEventListener('click',()=>{
        showTask()
        addTask.addEventListener('click',()=>{
            dataInput(item)
            input.value = ''
        })
        hideTask()
    })
})
