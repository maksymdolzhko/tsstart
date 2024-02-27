// npx tsc --help;
// npx tsc index.ts;
// npx ts-node index.ts;
// npx tsc -p .;
{
    /**
     * Types:
     *
     * примітиви не мутують
     * - boolean
     * - string
     * - number
     * - bigint
     * - symbol
     *
     *
     * - {} | object | Object
     * - Array
     * - any
     * - void
     * - null
     * - never
     * - unknown
     * - undefined
    */
    //  const a: позиція типу = позіція значення;
    var a = 100;
    console.log('a :::', a);
    var o = { name: 'Anna' };
    var o2 = { name: 'Anna' };
    var o3 = o;
    console.log(o === o2);
    console.log(o === o3);
}
