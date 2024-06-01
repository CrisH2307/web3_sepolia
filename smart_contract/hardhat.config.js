require("@nomicfoundation/hardhat-toolbox");

// https://eth-sepolia.g.alchemy.com/v2/TTGya2n3FSHqUHMcQtYcGJXS6maItPe2

require("@nomicfoundation/hardhat-chai-matchers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/TTGya2n3FSHqUHMcQtYcGJXS6maItPe2",
      accounts: ["aad98c67f0e006ae728baa7ed00fa52f44f156d8427b559e38f17d19d0168776"],
    },
  },
};
