import {obj,objImg} from '../sample1/sample1.js'
import showList from '../sample3/sample3.js'
import get from '../sample2/sample2.js'



const listView = get('.view')
const listInsert = document.querySelectorAll('.employeeInfo')
listView.addEventListener('click',e=>{
    alert('gg');
    listInsert.forEach((item,idx)=>{
        item.innerHTML = showList(obj,idx)
    })
    console.log(showList(obj))
})


