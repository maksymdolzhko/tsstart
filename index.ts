
// npx tsc --help;
// npx tsc index.ts;
// npx ts-node index.ts;
// npx tsc -p .;

{
    /** 
     * Types: 
     * 
     * Примітиви:
     * - boolean;
     * - string;
     * - number;
     * - bigint;
     * - symbol;
     * - null;
     * - undefined;
     * 
     * Посилальні:
     * - {} | object | Object;
     * - Array;
     * - ReadonlyArray;
     * - Tuple;
     * - Function;
     * 
     * Specific types:
     * - any;
     * - void;
     * - never;
     * - unknown;
    */

//  const a: позиція типу = позіція значення;
    const a: number = 100; 
//  a = ''; // - Type 'string' is not assignable to type 'number'.ts(2322);
    // console.log('a :::', a);

    const o = {name: 'Anna'};
    const o2 = {name: 'Anna'};
    const o3 = o;
    
    console.log(o === o2);
    console.log(o === o3);
    console.log(o);
    
    o3.name = 'Boris';
    console.log(o3);
    console.log(o);

}