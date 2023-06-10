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

let ar1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let res2: number[] = ar1.filter((v:number) => v%3 === 0);


interface 도형넓이{
  원: number
  삼각형: number
}

interface 도형넓이2 extends 도형넓이{
  사각형: number
}

let 도형넓이:도형넓이2 = {원:10, 삼각형:5, 사각형:7}

let { student, age} = {student : true, age : 20}

function 여러가지문자입력(...str : string[]){ // rest파라미터
  console.log(str)
}

let 배열1 = ['a', 'b', 'c', 'd'];
let 배열2 = [...배열1, 'e', 'f', 'g', 'h'];
console.log(배열2)
