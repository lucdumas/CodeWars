// // Write a function dirReduc which will take an array of strings and returns an array of strings 
// with the needless directions removed (W<->E or S<->N side by side).

// // Examples In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

// // The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).




function dirReduc(arr){

    const result = []

    for(let i = 0; i < arr.length; i++) {

        if(arr[i] === "NORTH" && arr[i + 1] === "SOUTH" || arr[i] === "SOUTH" && arr[i + 1] === "NORTH" || arr[i] === "EAST" && arr[i + 1] === "WEST" || arr[i] === "WEST" && arr[i + 1] === "EAST"){

            i++

        } else {

            if(result[result.length - 1] === "NORTH" && arr[i] === "SOUTH" || result[result.length - 1] === "SOUTH" && arr[i] === "NORTH" || result[result.length - 1] === "EAST" && arr[i] === "WEST" || result[result.length - 1] === "WEST" && arr[i] === "EAST"){

                result.pop()

            } else {

                result.push(arr[i])

            }

        }

    }

    return result

}
