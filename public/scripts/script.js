//To Fix
//add  Merge Sort  visualisation
//ADD theme color button in the top right under main Nav
//opacityEffect after successive clicks on an algo button
    // maybe make " let jEffectTimeout = " global , and clearTimeout(jEffectTimeout) in initialization
//maybe make i global to remove async functions' parameters   (i = 1 for InsertionSort)



//Testing Sections


// array = generateNewArray(10);
// console.log(array);

// quickSort(0, array.length - 1)
// console.log(array);



//Declarations
var array = [];
var asc, desc;
var ascendingBtn = document.getElementById("ascending-btn");
var descendingBtn = document.getElementById("descending-btn");
var sortingArea = document.getElementById("sorting-area");
var simpleSortBtn = document.getElementById("simple-sort-btn");
var selectionSortBtn = document.getElementById("selection-sort-btn");
var bubbleSortBtn = document.getElementById("bubble-sort-btn");
var insertionSortBtn = document.getElementById("insertion-sort-btn");
var quickSortBtn = document.getElementById("quick-sort-btn");
var mergeSortBtn = document.getElementById("merge-sort-btn");
var heapSortBtn = document.getElementById("heap-sort-btn");
var bucketSortBtn = document.getElementById("bucket-sort-btn");
var radixSortLsdBtn = document.getElementById("radix-lsd-sort-btn");
var radixSortMsdBtn = document.getElementById("radix-msd-sort-btn");
var introSortBtn = document.getElementById("intro-sort-btn");


//Ascending-Descending Selector

ascendingBtn.addEventListener("click", ()=>{
    if(!ascendingBtn.classList.contains("selected")){
        ascendingBtn.classList.add("selected");
        descendingBtn.classList.remove("selected");
    }
});
descendingBtn.addEventListener("click", ()=>{
    if(!descendingBtn.classList.contains("selected")){
        descendingBtn.classList.add("selected");
        ascendingBtn.classList.remove("selected");
    }
});


//Simple Sort ======================================================================

simpleSortBtn.addEventListener("click", ()=>{
    initializeSort();
    visualizeArray();
    simpleSort(0);
});

function simpleSort(i){
    var j = i + 1;
    var jLoop = setInterval(()=>{
        J_IterationEffect(j);
        if( ( (array[j] < array[i]) && asc ) || ( (array[j] > array[i]) && desc ) ){
            swap(i, j);
        }
        j++;
        if(j >= array.length){
            clearInterval(jLoop);
            i++;
            if(i < array.length - 1){
                simpleSort(i);
            }
        }
    }, 0);
}

//Selection Sort ====================================================================

selectionSortBtn.addEventListener("click", ()=>{
    initializeSort();
    visualizeArray();
    selectionSort(0);
});

function selectionSort(i){
    var pos = i;
    var j = i + 1;
    var jLoop = setInterval(()=>{
        J_IterationEffect(j);
        if( ((array[j] < array[pos]) && asc) || ((array[j] > array[pos]) && desc) ){
            pos = j;
        }
        j++;
        if(j >= array.length){
            clearInterval(jLoop);
            if(pos != i){
                swap(i, pos);
            }
            i++;
            if(i < array.length - 1){
                selectionSort(i);
            }
        }
    }, 5);
}

//Bubble Sort ====================================================================

bubbleSortBtn.addEventListener("click", ()=>{
    initializeSort();
    visualizeArray();
    bubbleSort(0);
});

function bubbleSort(i){
    var j = array.length - 1;
    var jLoop = setInterval(()=>{
        J_IterationEffect(j);
        if( ((array[j] < array[j-1]) && asc) || ((array[j] > array[j-1]) && desc) ){
            swap(j, j-1);
        }
        j--;
        if(j <= i){
            clearInterval(jLoop);
            i++;
            if(i < array.length - 1){
                bubbleSort(i);
            }
        }
    },5);
}

//Insertion Sort ====================================================================

insertionSortBtn.addEventListener("click", ()=>{
    initializeSort();
    visualizeArray();
    insertionSort(1);
});

function insertionSort(i){
    let temp = array[i];
    var tempBackgroundColor = document.getElementById(""+i).style.backgroundColor;
    let j = i - 1;
    let jLoop = setInterval(()=>{
        if(j >= 0 && (  (array[j] > temp && asc) || (array[j] < temp && desc)  )){
            J_IterationEffect(j);
            array[j+1] = array[j];
            let element_j = document.getElementById(""+j);
            let element_j1 = document.getElementById(""+(j+1));
            element_j1.style.backgroundColor = element_j.style.backgroundColor;
            element_j1.style.height = element_j.style.height;
            j--;
        }else{
            clearInterval(jLoop);
            array[j+1] = temp;
            let element = document.getElementById(""+(j+1));
            element.style.backgroundColor = tempBackgroundColor;
            element.style.height = temp + "%";
            i++;
            if(i < array.length){
                insertionSort(i);
            }
        }
    }, 0);
}

//Quick Sort ====================================================================

quickSortBtn.addEventListener("click", ()=>{
    initializeSort();
    visualizeArray();
    quickSort(0, array.length - 1);
});

function quickSort(firstIndex, lastIndex){
    let pivot = array[lastIndex];
    let i = firstIndex - 1;
    let j = firstIndex;
    let jLoop = setInterval(()=>{
        J_IterationEffect(j);
        if(  (array[j] <= pivot && asc) || (array[j] >= pivot && desc)  ){
            i++;
            swap(i, j);
            if(j == lastIndex){
                clearInterval(jLoop);
                if(firstIndex < i-1){
                    quickSort(firstIndex, i-1);
                }
                if(i+1 < lastIndex){
                    quickSort(i+1, lastIndex)
                }
            }
        }
        j++;
    }, 0);
}

//Merge Sort ====================================================================

mergeSortBtn.addEventListener("click", ()=>{
    initializeSort();
    visualizeArray();
    console.log(mergeSort(array));
});

function mergeSort(array1){
    let array2 = array1.splice(Math.ceil((array1.length)/2), array1.length);
    let mergedArray1 = [];
    let mergedArray2 = [];
    if(array1.length > 1){
        mergedArray1 = mergeSort(array1);
    }else{
        mergedArray1 = array1;
    }
    if(array2.length > 1){
        mergedArray2 = mergeSort(array2);
    }else{
        mergedArray2 = array2;
    }
    return merge(mergedArray1, mergedArray2);
}

// let element_i = document.getElementById(""+i);
//     let element_j = document.getElementById(""+j);
//     element_i.style.order = j;
//     element_j.style.order = i;
//     element_i.id = j;
//     element_j.id = i;

function merge(array1, array2){
    let mergedArray = [];
    let i = 0;
    let j = 0;
    while(i < array1.length && j < array2.length){
        if(array1[i] <= array2[j]){
            mergedArray.push(array1[i]);
            i++;
        }else{
            mergedArray.push(array2[j]);
            j++;
        }
    }
    while(i < array1.length){
        mergedArray.push(array1[i]);
        i++;
    }
    while(j < array2.length){
        mergedArray.push(array2[j]);
        j++;
    }
    return mergedArray;
}

//Heap Sort ======================================================================

heapSortBtn.addEventListener("click", ()=>{
    initializeSort();
    visualizeArray();
    //
});

//get parent ---> indexParent = (indexChild-2)/2
//get left Child ---> indexLeftChild = (indexParent*2) + 1
//get right Child ---> indexRightChild = (indexParent*2) + 2

//has parent
//has left child
//has right child

//get parent
//get parent index

//get left child
//get left child index

//get right child
//get right child index

//heapifyUp
//heapifyDown










//Bucket Sort ====================================================================

bucketSortBtn.addEventListener("click", ()=>{
    initializeSort();
    visualizeArray();
    //
});

//Radix Sort (LSD) ===============================================================

radixSortLsdBtn.addEventListener("click", ()=>{
    initializeSort();
    visualizeArray();
    //
});

//Radix Sort (MSD) ===============================================================

radixSortMsdBtn.addEventListener("click", ()=>{
    initializeSort();
    visualizeArray();
    //
});

//Intro Sort =====================================================================

introSortBtn.addEventListener("click", ()=>{
    initializeSort();
    visualizeArray();
    //
});

//Adaptive Merge Sort ============================================================

//Shell Sort =====================================================================

//Cocktail Shaker Sort ===========================================================

//Gnome Sort =====================================================================

//Bitoni Sort ====================================================================

//Bogo Sort ======================================================================


//Helping Functions ==============================================================

//Swap Array 2 Elements
function swap(i, j){
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    let element_i = document.getElementById(""+i);
    let element_j = document.getElementById(""+j);
    element_i.style.order = j;
    element_j.style.order = i;
    element_i.id = j;
    element_j.id = i;
    // let tempBackgroundColor = element_i.style.backgroundColor;
    // element_i.style.backgroundColor = element_j.style.backgroundColor;
    // element_j.style.backgroundColor = tempBackgroundColor;
    // let tempHeight = element_i.style.height;
    // element_i.style.height = element_j.style.height;
    // element_j.style.height = tempHeight;
}

//J Iteration Effect
function J_IterationEffect(j){
    let element_j = document.getElementById(""+j);
    element_j.style.opacity = 0.5;
    let jEffectTimeout = setTimeout(()=>{
        element_j.style.opacity = 1;
    }, 5);
    // element_j.style.backgroundColor = "red";
    // let jEffectTimeout = setTimeout(()=>{
    //     element_j.style.backgroundColor = "grey";
    // }, 0);
}


//Sort Initialization
function initializeSort(){
    clearSortingArea();
    array = generateNewArray(10); //*******************************************************
    asc = ascendingBtn.classList.contains("selected");
    desc = descendingBtn.classList.contains("selected");
}

//Clear Sorting Area
function clearSortingArea(){
    while(sortingArea.firstChild){
        sortingArea.firstChild.remove();
    }
}

//Array Visualisation
function visualizeArray(){
    for(let i = 0 ; i < array.length ; i++){
        let element = document.createElement("div");
        element.id = i;
        element.style.width = "0.6%";
        element.style.height = array[i] + "%";
        element.style.backgroundColor = generateColor();
        element.style.order = i;
        sortingArea.appendChild(element);
    }
}

//Array Generator
function generateNewArray(length){
    var array = [];
    for(let i = 0 ; i < length ; i++){
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    return array;
}

//Color Generator
function generateColor(){
    let r, g, b;
    r = Math.floor(Math.random() * 255) + 1;
    g = Math.floor(Math.random() * 255) + 1;
    b = Math.floor(Math.random() * 255) + 1;
    return "rgb("+r+", "+g+", "+b+")";
    // return "grey";
}











//=========================================================================================


// Insertion Sort ========================================
// array = generateNewArray(10);
// console.log(array);
// for(let i = 1 ; i < array.length ; i++){
//     let temp = array[i];
//     let j = i - 1;
//     while(j >= 0 && array[j] > temp){
//         array[j+1] = array[j];
//         j--;
//     }
//     array[j+1] = temp;
// }
// console.log(array);




//=========================================================================================

//Garbage  Code ==============================================================

// async function simple_sort_i_iteration(i){
//     await simple_sort_j_iteration(i);
//     i++;
//     if(i < array.length - 1){
//         simple_sort_i_iteration(i);
//     }
// }

// function simple_sort_j_iteration(i){
//     return new Promise((resolve, reject)=>{
//         var j = i + 1;
//         var jLoop = setInterval(()=>{
//             J_IterationEffect(j);
//             if( ( (array[j] < array[i]) && asc ) || ( (array[j] > array[i]) && desc ) ){
//                 swap(i, j);
//             }
//             j++;
//             if(j >= array.length){
//                 clearInterval(jLoop);
//                 resolve();
//             }
//         }, 5);
//     });
// }





// async function selectionSortSwaps(i){
//     var pos = await positionMinMax(i);
//     if(pos != i){
//         swap(i, pos);
//     }
//     i++;
//     if(i < array.length - 1){
//         selectionSortSwaps(i);
//     }
// }

// function positionMinMax(i){
//     return new Promise((resolve, reject)=>{
//         var pos = i;
//         var j = i + 1;
//         var jLoop = setInterval(()=>{
//             J_IterationEffect(j);
//             if( ((array[j] < array[pos]) && asc) || ((array[j] > array[pos]) && desc) ){
//                 pos = j;
//             }
//             j++;
//             if(j >= array.length){
//                 clearInterval(jLoop);
//                 resolve(pos);
//             }
//         },5);
//     });
// }



// async function floatBubbles(i){
//     await floatLightestBubble(i);
//     i++;
//     if(i < array.length - 1){
//         floatBubbles(i);
//     }
// }

// function floatLightestBubble(i){
//     return new Promise((resolve, reject) => {
//         var j = array.length - 1;
//         var jLoop = setInterval(()=>{
//             J_IterationEffect(j);
//             if( ((array[j] < array[j-1]) && asc) || ((array[j] > array[j-1]) && desc) ){
//                 swap(j, j-1);
//             }
//             j--;
//             if(j <= i){
//                 clearInterval(jLoop);
//                 resolve();
//             }
//         },5);
//     });
// }



// async function insertionSort_i_iteration(i){
//     await insertAndSort(i);
//     i++;
//     if(i < array.length){
//         insertionSort_i_iteration(i);
//     }
// }

// function insertAndSort(i){
//     return new Promise((resolve, reject) => {
//         let temp = array[i];
//         var tempBackgroundColor = document.getElementById(""+i).style.backgroundColor;
//         let j = i - 1;
//         let jLoop = setInterval(()=>{
//             if(j >= 0 && array[j] > temp){
//                 J_IterationEffect(j);
//                 array[j+1] = array[j];
//                 let element_j = document.getElementById(""+j);
//                 let element_j1 = document.getElementById(""+(j+1));
//                 element_j1.style.backgroundColor = element_j.style.backgroundColor;
//                 element_j1.style.height = element_j.style.height;
//                 j--;
//             }else{
//                 clearInterval(jLoop);
//                 array[j+1] = temp;
//                 let element = document.getElementById(""+(j+1));
//                 element.style.backgroundColor = tempBackgroundColor;
//                 element.style.height = temp + "%";
//                 resolve();
//             }
//         }, 0);
//     });
// }