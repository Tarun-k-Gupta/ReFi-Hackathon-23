// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract Expose is ERC20 {
    constructor() ERC20("REP", "REP") {  
    }
    function mint(address to) public {
        _mint(to, 10000000000000000000);
    }
}
