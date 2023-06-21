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

type UserType = {
  user:string, 
  comment:number[], 
  admin: boolean
}


type 어레이 = (number | string | boolean)[];

function 함수([a,b,c]:어레이){
  console.log(a, b, c)
}

let 변수1: never = 5; //number대입 불가능
let 변수2: never | number = 5; //number 대입가능

function 제네릭함수<T>(r:T):Array<T>{
  return [r, r, r];
}

제네릭함수(1)
제네릭함수('2')
제네릭함수(true)

interface 인덱스<T>{
  [index: string]: T
}

const 인덱스1: 인덱스<string> = {
  "one": "hahaha",
  "two": "hohoho",
  "three": "hehehe"
}

function 제네릭함수2<T, K>(t:T, k:K):[K, K, T]{
  return [k, k, t];
}

제네릭함수2<string, number>("aaa", 5)

interface 문자열{
  color: string,
  number? : number;
}

let 문자열1: 문자열 = {color: '주황'}
let 문자열2: 문자열 = {color: '주황', number: 5}

let 아무거나:[string, number?, number?, boolean?];

아무거나 = ["hahaha"];
아무거나 = ["hohoho", 5, 2];
아무거나 = ["hehehe", 7, 23, false];



interface CarType {
  메뉴종류 : string,
  price : number
  주문가능여부: boolean;
}

class Menu implements CarType {
  메뉴종류 : string;
  price : number = 500;
  주문가능여부 : boolean = true;
  constructor(a :string){
    this.메뉴종류 = a
  }
}
let 붕붕이 = new Menu('볶음밥');

type ggg<T extends string | boolean> = T extends string ? string : boolean;



type mongkey = {banana: string};
type cat = {fish: string};
function 함수4523(animal: mongkey | cat){
  if("banana" in animal){
    return animal.banana
  }
  return animal.fish
}

interface Obj{
  [k: string]:string|number;
}

let obj1 : Obj = {
  aaa : 35235,
  bbb : '345346',
  ccc : 'cccccc'
}

