export function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}


export function GetReverseSort(prop) {  

    console.log("into getReverse")
 
    return function(a, b) {   


        if (a[prop] < b[prop]) {   
            return 1;    
        } else if (a[prop] > b[prop]) {   

            return -1;    
        }
        return 0;    
    }    
}   


export function GetSortOrder(prop) {  

 
    return function(a, b) {   


        if (a[prop] > b[prop]) {   
            return 1;    
        } else if (a[prop] < b[prop]) {   

            return -1;    
        }
        return 0;    
    }    
}   

export function activeloader(){
    let maindiv=document.getElementById("loadingsection")
    maindiv.style.display="block";

}

export function removeloader(){
    let maindiv=document.getElementById("loadingsection")
    maindiv.style.display="none";
}