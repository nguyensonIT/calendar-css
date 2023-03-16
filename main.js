const weekendBtn = document.querySelector('.calender__content1-box-weekends')
const weekendTh = document.querySelectorAll('.calender__content2-table-day th:nth-child(n+6)')
const weekendTd = document.querySelectorAll('.calender__content2-table-data td:nth-child(n+6)')

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

    

// if(){
//     weekend.weekendTh
// }