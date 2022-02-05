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

// Test 1 of Capitalize
actual = Modash.capitalize(string);
expected = "There was one catch, and that was catch-22";

assertEqual('`capitalize()`: capitalizes the string', actual, expected);

// Test 1 of CamelCase (spaces)
string = 'customer responded at';
actual = Modash.camelCase(string);
expected = 'customerRespondedAt';

assertEqual('`camelcase()`: string with spaces ', actual, expected);

//Test 2 of CamelCase (underscores)
string = 'customer_responded_at';
actual = Modash.camelCase(string);
expected = 'customerRespondedAt';

assertEqual('`camelcase()`: string with underscores ', actual, expected);