/**

Class to contain all Solidity assert functions  

*/

'use strict';

const chai = require('chai');
const assert = chai.assert;

class SolAssert {



  //Simply function to test for Solidity revert errors; optionally takes an "expectedErr" which simply looks for a string within
  //This function has limits, however; if a function can potentially return two or more reverts, we can't quite test for each of them through expectedErr and apply if/and/or logic
  static async revert(run, expectedErr = null) {
    let err;
    try {
      await run();
    } catch(_e) {
      err = _e.message;
    }
    //Ensure we've received an error
    assert.ok(err, 'No error from function call');
    assert.isTrue(err.includes('VM Exception while processing transaction: revert'), 'Error received: ' + err);
    if(expectedErr != null) assert.isTrue(err.includes(expectedErr));

    return err;
  }

}

module.exports = SolAssert;
