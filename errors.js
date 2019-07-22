/** 

Common error strings, for convenience. Idea is that user can simply throw these into, say, checking for Solidity reverts, and not worry about Googling the actual error string

*/

const errors = {

  openzeppelin: {

    ownable: 'Ownable: caller is not the owner'

  }



}


module.exports = errors;
