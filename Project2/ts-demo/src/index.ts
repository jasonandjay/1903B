const a:number = 100;
const b = 'hello world';

const obj:any = 100;
const un:unknown = 100;

// obj.a;
// un.b;

// const arr: (string | number)[] = [100,200,300,'400'];
// const arr: Array<string | number> = [100,200,300,'400'];
// 元祖类型，元素的数量和元素的类型都被固定了
const arr: [number, number, number, string] = [100,200,300,'400'];

// 枚举，把所有可能的情况列举出来
enum directions {
    'top'=100,
    'left',
    'right',
    'bottom'
}
const direction: directions = directions.bottom;

const chenmanjie:string = 'chenmanjie';

// function swap<T>(a:T, b:T){
//     return [b, a];
// }

type noop = ()=>{}

// 接口：自定义结构体
interface AjaxType{
    code: number,   // 普通属性
    cb: noop,
    data?: AjaxType,  // 可有可无的属性
    readonly msg: string, // 只读属性
    [key: string]: any     // 索引类型
}   



interface WSType{
    alive: boolean,
    timeout: number
}   

interface ResponseAjax extends AjaxType{
    errNo: number
}
 
const response: ResponseAjax = {
    code: 200,
    errNo: -1,
    cb: ()=>({}),
    msg: 'OK'
}

const add: (a:number, b:number)=>number = (a:number, b:number)=>a+b

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

// 范型约束
function pick<T extends object, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}


function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key] // ok
  }


  function factory<T>(type: {new(): T}): T {
    return new type() // ok
  }

  const f: AjaxType & WSType = {
    code: 200,
    cb: ()=>({}),
    msg: '', // 只读属性
    timeout: 1000,
    alive: true
  }

const g: boolean | string = '200';