const arr = [
    [3, 1, 5, 9, 2, 4, 7],
    [2, 4, 3, 5, 0, 8, 1],
    [9, 7, 6, 1, 5, 2, 3],
    [8, 2, 1, 7, 5, 6, 4],
    [1, 7, 5, 9, 3, 6, 2],
    [5, 2, 7, 4, 3, 1, 6],
    [6, 9, 1, 2, 4, 3, 8],
    [2, 1, 0, 8, 3, 4, 5],
    [2, 9, 8, 0, 5, 3, 1],
    [8, 0, 1, 7, 9, 3, 2]
];

const result = [];



const inputBtn = document.querySelector('#inputBtn');
const codeValue = document.querySelector('#codeValue');
let code;
    inputBtn.addEventListener('click', () => {
        code = codeValue.value;
        event.preventDefault();
       
        for (let i = 0; i < code.length; i++){
            for (let j = 0; j < 7; j++){
            if( code[i] == arr[i][j]){
                result.push(j);

            }
        }
        
    }
    document.querySelector('.out').innerHTML = result;
    
})
  
 