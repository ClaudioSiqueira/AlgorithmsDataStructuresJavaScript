function reverse(str){
    // check input
    if(!str || typeof str !== 'string'){
        return 'Not valid'
    }

    let reversedArray = []
    let length = str.length - 1

    for(let i = length; i >= 0; i--){
        reversedArray.push(str[i])
    }

    return reversedArray.join('')
}

let result = reverse("isso")

console.log(result)