# solidity-test
[![npm version](https://badge.fury.io/js/solidity-test.svg)](https://badge.fury.io/js/solidity-test)

A simple node module to aid smart contract development in testing contracts. Initially created due to the desire to modularize testing for `revert`s, now looking to expand into something more definite.

# Quick Example

```javascript
const solidityTest = require('solidityTest');
const solAssert = solidityTest.solAssert;

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

And, if perhaps testing for ownership, and wanting to be strict about the kind of error received:
```javascript
const solidityTest = require('solidityTest');
const solAssert = solidityTest.solAssert;
const errors = solidityTest.errors;

const notOwner = '0x00000000000000000000000000000000000';

//Within Mocha:

it('reverts transaction', async () => {

  //Passing an error string to revert will only pass when the error string is matched
  await solAssert.revert(
    async () => {
      someContract.functionOnlyOwnerCanCall().send({from: notOwner});
    }, errors.openzeppelin.ownable // which is: 'Ownable: caller is not the owner'
  )

})

```
