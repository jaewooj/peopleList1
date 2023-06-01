const showList = (obj,idx) => {
    // const로 할 경우 아래에서 newObj가 추가가 되기 떄문에 const 쓰면 정상작동 안함.
    /* let newObj = obj.map(item=>{
        // 구조분해, 비구조할당
            const {name,job,tel} = item
            return `<li>${name}</li><li>${job}</li><li>${tel}</li>`
    }) */
    let objName = obj[idx].name
    let objJob = obj[idx].job
    let objTel = obj[idx].tel

    return `<li>${objName}</li><li>${objJob}</li><li>${objTel}</li>`
}

export default showList
