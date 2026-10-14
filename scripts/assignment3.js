
function checkDelivery(orderTotal){
    if(orderTotal >= 30){
        return (`order total: ${orderTotal} - Free delivery`)
    }else{
        return (`order total: ${orderTotal} - Derlivery fee applies`)

    }
}

let message1 = checkDelivery(50)
    console.log(message1)
let message2 = checkDelivery(18)
    console.log(message2)
let message3 = checkDelivery(35)
    console.log(message3)



    function getMenuType(hour){
        if(hour >= 7 && hour <=11){
            return(`hour ${hour} breakfast menu`)
        }else if(hour >=12 && hour <=16){
            return (`hour ${hour} lunch menu`)   
        }else if(hour >=17 && hour <=22){
            return(`hour ${hour} dinner menu`)
        }else{
            return `We are closed`;
        }
    }

    let message5 = getMenuType(15)
    console.log(message5)
    let message6 = getMenuType(9)
    console.log(message6)
    let message7 = getMenuType(14)
    console.log(message7)
    let message8 = getMenuType(23)
    console.log(message8)
   