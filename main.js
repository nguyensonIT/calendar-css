const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const weekendBtn = document.querySelector('.calender__content1-box-weekends')
const weekendTh = document.querySelectorAll('.calender__content2-table-day th:nth-child(n+6)')
const weekendTd = document.querySelectorAll('.calender__content2-table-data td:nth-child(n+6)')
const wrap = document.querySelector('.wrap')

const addTaskBtn = document.querySelector('.calender__content1-box-addtask')
const addTaskShow = document.querySelector('.background__body__popup-task')
const overlay = document.querySelector('.calender__wrap-overlay')

const addTaskTd = document.querySelectorAll('.calender__content2-table-data td')
const addTask = document.querySelector('.background__body__popup-task__box-btnAddTask')
const deleteTask = document.querySelector('.background__body__popup-task__box-btnDeleteTask')
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

    
    //create element task
function createElTask(){
    let overlayPopup = document.createElement('div')
    overlayPopup.setAttribute('class','calender__wrap-overlay')
    let taskPopupElDiv = document.createElement('div')
    taskPopupElDiv.setAttribute('class','background__body__popup-task')
    taskPopupElDiv.innerHTML = `
        <div class="background__body__popup-task__box">
             <button class="background__body__popup-task__box-btnCategory">+ Category</button>
             <div class="background__body__popup-task__box-date">
                 <i class="fa-regular fa-calendar"></i>
                 <p class="background__body__popup-task__box-date__data">12.14.2018</p>
             </div>
             <button class="background__body__popup-task__box-btnAddTask">Add Task</button>
             <button class="background__body__popup-task__box-btnDeleteTask">Delete All Task</button>
             <div class="background__body__popup-task__box-main">
                 <div class="background__body__popup-task__box-main__title">
                     <span class="background__body__popup-task__box-main__title-icon"><i class="fa-solid fa-check"></i></span>
                     <h2 class="background__body__popup-task__box-main__title-header">Title of the task</h2>
                 </div>
                 <input type="text" class="background__body__popup-task__box-main__title-input" placeholder="Description...">
             </div>
         </div>
    
    `
    wrap.appendChild(taskPopupElDiv)
    wrap.appendChild(overlayPopup)
}
    // TaskShow
function showTask(){
        //hien thi task
    createElTask()
    addTaskBtn.classList.add('calender__content1-box--active')
    document.querySelector('.background__body__popup-task__box-main__title-input').focus()
}
    //  TaskHideOverlay
function hideTask(){
      //an task
    $('.calender__wrap-overlay').addEventListener('click',()=>{
        $('.background__body__popup-task').remove()
        addTaskBtn.classList.remove('calender__content1-box--active')
        $('.calender__wrap-overlay').remove()
    })
    $('.background__body__popup-task__box-btnAddTask').addEventListener('click',()=>{
        $('.background__body__popup-task').remove()
        addTaskBtn.classList.remove('calender__content1-box--active')
        $('.calender__wrap-overlay').remove()
    })
    $('.background__body__popup-task__box-btnDeleteTask').addEventListener('click',()=>{
        $('.background__body__popup-task').remove()
        addTaskBtn.classList.remove('calender__content1-box--active')
        $('.calender__wrap-overlay').remove()
    })
}

const arrColor = [
    {
        'backgroundColor': 'var(--color-background1)',
        'borderLeft': '3px solid var(--color-boder1)',
        'color': 'var(--color-boder1)'
    },
    {
        'backgroundColor': 'var(--color-background2)',
        'borderLeft': '3px solid var(--color-boder2)',
        'color': 'var(--color-boder2)'
    },
    {
        'backgroundColor': 'var(--color-background3)',
        'borderLeft': '3px solid var(--color-boder3)',
        'color': 'var(--color-boder3)'
    },
    {
        'backgroundColor': 'var(--color-background4)',
        'borderLeft': '3px solid var(--color-boder4)',
        'color': 'var(--color-boder4)'
    },
    {
        'backgroundColor': 'var( --primary-background)',
        'borderLeft': '3px solid var(--primary-color)',
        'color': 'var(--primary-color)'
    }
]

    // DataInput
function dataInput(td){
    li = document.createElement('li')
    li.innerText = document.querySelector('.background__body__popup-task__box-main__title-input').value
    if(document.querySelector('.background__body__popup-task__box-main__title-input').value==''){
        alert('Vui lòng nhập task!')
        return
    }
    const colorRandom = arrColor[Math.floor(Math.random()*5)]
    td.style.backgroundColor = `${colorRandom.backgroundColor}`
    td.style.borderLeft = `${colorRandom.borderLeft}`
    td.style.color = `${colorRandom.color}`
    const span = td.querySelector('span')
    span.style.color = 'black'
    const saveData = td.append(li)
    
    return saveData
    
}

    // btnShowTask
addTaskBtn.addEventListener('click',()=>{
    addTaskBtn.classList.toggle('calender__content1-box--active')
    if(document.querySelector('.calender__content1-box-addtask.calender__content1-box--active')){
        //hien thi task
        showTask()
        document.querySelector('.background__body__popup-task__box-btnAddTask').onclick = ()=>{
            alert('Vui lòng chọn ngày!')
        }
    }
    
    hideTask()
})

    //showTaskTd
    
addTaskTd.forEach((item,index)=>{
    
    item.addEventListener('click',()=>{
        showTask()
        $('.background__body__popup-task__box-btnAddTask').addEventListener('click',()=>{
            dataInput(item)
        })
        $('.background__body__popup-task__box-btnDeleteTask').addEventListener('click',()=>{
            item.style.backgroundColor = 'unset'
            item.style.borderLeft = 'unset'
            item.querySelectorAll('li').forEach((li)=>{
                li.remove()
                
                })
        
    })
    hideTask()
        
    })
})
