// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract basicMath {
   uint256 constant public MAX_UINT256 = 2**256 - 1;

   function add(uint256 _numA, uint256 _numB) public pure returns (uint256) {
      uint256 c = _numA + _numB;
    //   require(c >= _numA, "Overflow");
      return c;
   }
}