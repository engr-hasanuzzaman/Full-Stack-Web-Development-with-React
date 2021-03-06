const a = {
    a: 'a',
    b: 'b',
    c: 'c',
};

// let foo = keyof a;
// keyof work on type layter that take all the keys from the type and crate a literal union
// in here a is not type, so first we have used typeof a to get type of a
// then we have applied keyof to get all the keys of type 
type literal1 = keyof typeof a;
let a1: literal1 = 'a';
// a1 = 'd'

type A = {
    a: string;
    b: string;
    c: string;
}

// as A is already a type we can apply keyof directly on it
type literal2 = keyof A;

type anyFun = (arg: any ) => any
const f1 = (msg: string) => console.log("callback", msg)
const wrapper = <T extends anyFun>(request: T) => {
    const a = "hurrehhhhhh.....";
    return(
        (args) => {
            request(`${args} ${a}`);
        }
    )
}

const cf1 = wrapper(f1);
cf1("hi wrapper");

type SessionAttributes = {
    password: string;
    email: string;
    company_login?: boolean | null;
    foo?: boolean; // if this does not optional will not be castable from InputType
  };

type InputsType = {
    email: string;
    password: string;
    remember_me: boolean;
};

let iData: InputsType = {
    email: 'test',
    password: 'foo',
    remember_me: true
}
let test: SessionAttributes = iData as SessionAttributes ;
console.log(test);

// in the below sectoin logicVal eill contain foo
// TS casting will allow you to use unexected value using casting itself will not cast any data
type logic = 'on' | 'off';
let logicVal: logic = "foo" as logic;
console.log(logicVal);

let it = [1, 2,3,4,5,6];
console.log(it.map((v, i) => [v, i]));

let aa = {
    'a_a': 1,
    'a_b': 2,
    'a_c': 3,
    1: 3,
};

let a_arr = ['a', 'b', 'c'];

a_arr.forEach(element => {
    console.log(aa[`a_${element}`])
});