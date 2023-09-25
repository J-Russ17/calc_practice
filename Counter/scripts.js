const addOne = () => {

    let num = document.getElementById("num")
    let convert = Number(num.value)
    let newNum = convert + 1
    console.log(newNum)
    num.value = newNum
}


const subtractOne = () => {

    let num = document.getElementById("num")
    let convert = Number(num.value)
    let newNum = convert - 1
    console.log(newNum)
    num.value = newNum
}