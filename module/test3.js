// 유형3

const num =200;
const make1 = () => {
    return 300
}
const make2 = (x,y) => {
    return x + y
}
class Person {
    constructor(name){
        this.name = name
    }
}
const obj = {
    name : '임지연', age : 20, addr : '서울'
}
const arr = [10,20,30,40]
// 변수, 함수, 객체, 클래스, 하나로 내보내기
export {num, make2, Person, obj, arr}

// export default는 하나의 js에서 하나만 존재
export default make1 


