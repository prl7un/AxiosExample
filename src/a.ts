let arr1: (string|number)[] =['asefasef', 3452351, 523531243214]
let arr2: ('아침'|'점심'|'저녁')[] = ['점심', '아침' , '저녁']
let arr3: [number, string, string, boolean] = [2352424, '23452345', '3523lkjlk', true]
arr3.push(false);

function J<T>(init1: T, init2: T): [T, T[]] {
  let arr:T[] = [init1, init2];
  return [init1, arr];
}


type 함수타입1 = (t : boolean) => string;

let 함수1 : 함수타입1 = function(a){
  if(a===true){
    return 'yes'
  }
  else{
    return 'no'
  }
}


let arr : string[] = ['1', '2', '3']

let res : number[] = arr.map(function(i:string){
  return Number(i)
})
