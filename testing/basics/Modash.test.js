import Modash from "./Modash";

describe('Modash test suite', () => {
    it('`truncate()`: will truncate a string', () => {
      const string = 'there was one catch, and that was CATCH-22';
      const expected = 'there was one catch...';
        expect(
            Modash.truncate(string, 19)
        ).toEqual(expected);
    });

  });