const showList = (ran,obj) => {
    // const로 할 경우 아래에서 newObj가 추가가 되기 떄문에 const 쓰면 정상작동 안함.
    let newObj = obj.map(item=>{
        // 구조분해, 비구조할당
        const {name,job} = item
        return `<p>이름 : <strong> ${name}</strong>, 직업 : <strong>${job}</strong></p>`
    }).join('')

    newObj += '++++++++++++++++++'
    newObj += `<p>이름 : <strong>${obj[ran].name}</strong>, 직업 : <strong> ${obj[ran].job} </strong> </p>`

    return newObj
}

export default showList
