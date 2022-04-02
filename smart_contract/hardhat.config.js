require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.10",
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/kOJUo1LkLxy6wHkItbc4cG3ScNwEg2U6',
      accounts: ['46022be6b2b848c48d784fd782f5718f80529d44401a69c63fd34d79579feeee'],
    }
  }
};
