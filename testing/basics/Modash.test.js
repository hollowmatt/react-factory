import Modash from "./Modash";

let string;
let actual;
let expected;

function assertEqual(description, actual, expected) {
    if (actual === expected) {
        console.log(`[PASS]: ${description}`);
    } else {
        console.log(`[FAIL] ${description}`);
        console.log(`\tactual: '${actual}'`);
        console.log(`\texpected: '${expected}'`);
    }
}

// Test 1 of Truncate
string = 'there was one catch, and that was CATCH-22';
actual = Modash.truncate(string, 19);
expected = 'there was one catch...';

assertEqual('`truncate()`: truncates a string', actual, expected);

// Test 2 of Truncate
actual = Modash.truncate(string, string.length);
expected = string;

assertEqual('`truncate()`: no-ops if <= length', actual, expected);

