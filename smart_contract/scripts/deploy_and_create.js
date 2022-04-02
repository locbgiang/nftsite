const main = async () => {
    const sample_token_uri = "https://ipfs.io/ipfs/Qmd9MCGtdVz2miNumBHDbvj8bigSgTwnr4SbyH6DNnpWdt?filename=0-PUG.json"

    //const [deployer] = await ethers.getSigner();
    //console.log("Deploying contracts with the account: ", deployer.address);

    const CollectibleFactory = await hre.ethers.getContractFactory("SimpleCollectible");
    const CollectibleContract = await CollectibleFactory.deploy();

    await CollectibleContract.deployed();
    console.log("Collectible address: ", CollectibleContract.address);
    
    const tokenzome = await CollectibleContract.createCollectible(sample_token_uri);
    await tokenzome.wait();
    console.log("tokenzome is ", tokenzome);
    console.log('tokenCounter ', CollectibleContract.tokenCounter());
    console.log(`AWESOME you can view your nft at https://testnets.opensea.io/assets/${CollectibleContract.address}/${CollectibleContract.tokenCounter()}`)
}

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

runMain();