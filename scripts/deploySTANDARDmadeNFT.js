const hre = require("hardhat");

async function main() {
  const STANDARDmadeNFT = await hre.ethers.getContractFactory("STANDARDmadeNFT");
  const sandardMadeNFT = await STANDARDmadeNFT.deploy();

  await sandardMadeNFT.deployed();

  console.log("STANDARDmadeNFT deployed to:", sandardMadeNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
