// 유형2

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
export {num, make1, make2, Person, obj, arr}

// export {num:num, make1:make1, make2:make2, Person:Person, obj:obj, arr:arr}
// 객체는 키와 값이 동일할 경우 하나로 생략해서 사용 가능


