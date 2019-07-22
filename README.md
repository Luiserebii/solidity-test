# solidity-test

A simple node module to aid smart contract development in testing contracts. Initially created due to the desire to modularize testing for `revert`s, now looking to expand into something more define.

# Quick Example

```javascript
const solidityTest = require('solidityTest');
const solAssert = new solidityTest.solAssert();

const notOwner = '0x00000000000000000000000000000000000';

//Within Mocha:

it('reverts transaction', async () => {
  
  await solAssert.revert(
    async () => {  
      someContract.functionOnlyOwnerCanCall().send({from: notOwner});
    }
  )
  
})

```
