const showList = (obj) => {
    const newObj = obj.map(item=>{
        console.log(item)
        // 구조분해, 비구조할당
        const {name,job} = item
        return `<p>이름 : <strong> ${name}</strong>, 직업 : <strong>${job}</strong></p>`
    }).join('')

    return newObj
}

export default showList
