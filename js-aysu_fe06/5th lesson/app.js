
const add = (x, y, callback)=>{
    callback(x + y)
}

add( 3, 5, 
    (result)=>{
        console.log(result);
    }
)

add( 3, 5, 
    (result)=>{
        alert(result);
    }
)