/*
 * SPDX-License-Identifier: Apache-2.0
 */

// This entire file is used for getting from the blockchain while invoke.js is used for
// adding to the blockchain

"use strict";

// This is all boilerplate code
const { FileSystemWallet, Gateway } = require("fabric-network");
const fs = require("fs");
const path = require("path");

// This is all boilerplate code except change the path.resolve to something that works
const ccpPath = path.resolve(
    __dirname,
    "..",
    "..",
    "basic-network",
    "connection.json"
);
const ccpJSON = fs.readFileSync(ccpPath, "utf8");
const ccp = JSON.parse(ccpJSON);

async function queryAllResources() {
    // put everything in a try catch exception.
    try {
        // Create a new file system based wallet for managing identities.
        // Do this but make sure that the wallet is in the right locations.
        const walletPath = path.join(process.cwd(), "wallet");
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        // Boilerplate
        const userExists = await wallet.exists("user1");
        if (!userExists) {
            console.log(
                'An identity for the user "user1" does not exist in the wallet'
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }

        // Boilerplate
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, {
            wallet,
            identity: "user1",
            discovery: { enabled: false }
        });

        // Boilerplate, but the channel name goes inside here instead if you named it to something else.
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork("mychannel");

        // Get the contract from the network.
        // change the contract name but this is boilerplate code.
        const contract = network.getContract("fabcar");

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

        // These two lines are important boilerplate code, and result is a json file.
        const result = await contract.evaluateTransaction("queryAllResources");
        console.log(
            `Transaction has been evaluated, result is: ${result.toString()}`
        );
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function queryAllRequests() {
    // put everything in a try catch exception.
    try {
        // Create a new file system based wallet for managing identities.
        // Do this but make sure that the wallet is in the right locations.
        const walletPath = path.join(process.cwd(), "wallet");
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        // Boilerplate
        const userExists = await wallet.exists("user1");
        if (!userExists) {
            console.log(
                'An identity for the user "user1" does not exist in the wallet'
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }

        // Boilerplate
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, {
            wallet,
            identity: "user1",
            discovery: { enabled: false }
        });

        // Boilerplate, but the channel name goes inside here instead if you named it to something else.
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork("mychannel");

        // Get the contract from the network.
        // change the contract name but this is boilerplate code.
        const contract = network.getContract("fabcar");

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

        // These two lines are important boilerplate code, and result is a json file.
        const result = await contract.evaluateTransaction("queryAllRequests");
        console.log(
            `Transaction has been evaluated, result is: ${result.toString()}`
        );
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function queryAllOrganizations() {
    // put everything in a try catch exception.
    try {
        // Create a new file system based wallet for managing identities.
        // Do this but make sure that the wallet is in the right locations.
        const walletPath = path.join(process.cwd(), "wallet");
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        // Boilerplate
        const userExists = await wallet.exists("user1");
        if (!userExists) {
            console.log(
                'An identity for the user "user1" does not exist in the wallet'
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }

        // Boilerplate
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, {
            wallet,
            identity: "user1",
            discovery: { enabled: false }
        });

        // Boilerplate, but the channel name goes inside here instead if you named it to something else.
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork("mychannel");

        // Get the contract from the network.
        // change the contract name but this is boilerplate code.
        const contract = network.getContract("fabcar");

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

        // These two lines are important boilerplate code, and result is a json file.
        const result = await contract.evaluateTransaction(
            "queryAllOrganizations"
        );
        console.log(
            `Transaction has been evaluated, result is: ${result.toString()}`
        );
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function queryAllRecievers() {
    // put everything in a try catch exception.
    try {
        // Create a new file system based wallet for managing identities.
        // Do this but make sure that the wallet is in the right locations.
        const walletPath = path.join(process.cwd(), "wallet");
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        // Boilerplate
        const userExists = await wallet.exists("user1");
        if (!userExists) {
            console.log(
                'An identity for the user "user1" does not exist in the wallet'
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }

        // Boilerplate
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, {
            wallet,
            identity: "user1",
            discovery: { enabled: false }
        });

        // Boilerplate, but the channel name goes inside here instead if you named it to something else.
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork("mychannel");

        // Get the contract from the network.
        // change the contract name but this is boilerplate code.
        const contract = network.getContract("fabcar");

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

        // These two lines are important boilerplate code, and result is a json file.
        const result = await contract.evaluateTransaction("queryAllRecievers");
        console.log(
            `Transaction has been evaluated, result is: ${result.toString()}`
        );
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function addOrganization(ID, email, name, location, phone) {
    // put everything in a try catch exception.
    try {
        // Create a new file system based wallet for managing identities.
        // Do this but make sure that the wallet is in the right locations.
        const walletPath = path.join(process.cwd(), "wallet");
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        // Boilerplate
        const userExists = await wallet.exists("user1");
        if (!userExists) {
            console.log(
                'An identity for the user "user1" does not exist in the wallet'
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }

        // Boilerplate
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, {
            wallet,
            identity: "user1",
            discovery: { enabled: false }
        });

        // Boilerplate, but the channel name goes inside here instead if you named it to something else.
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork("mychannel");

        // Get the contract from the network.
        // change the contract name but this is boilerplate code.
        const contract = network.getContract("fabcar");

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

        // These two lines are important boilerplate code, and result is a json file.
        const result = await contract.submitTransaction(
            "addOrganization",
            ID,
            email,
            name,
            location,
            phone
        );
        console.log(
            `Transaction has been evaluated, result is: ${result.toString()}`
        );
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function addResource(Id, name, ownerID) {
    // put everything in a try catch exception.
    try {
        // Create a new file system based wallet for managing identities.
        // Do this but make sure that the wallet is in the right locations.
        const walletPath = path.join(process.cwd(), "wallet");
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        // Boilerplate
        const userExists = await wallet.exists("user1");
        if (!userExists) {
            console.log(
                'An identity for the user "user1" does not exist in the wallet'
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }

        // Boilerplate
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, {
            wallet,
            identity: "user1",
            discovery: { enabled: false }
        });

        // Boilerplate, but the channel name goes inside here instead if you named it to something else.
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork("mychannel");

        // Get the contract from the network.
        // change the contract name but this is boilerplate code.
        const contract = network.getContract("fabcar");

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

        // These two lines are important boilerplate code, and result is a json file.
        const result = await contract.submitTransaction(
            "addResource",
            Id,
            name,
            ownerID
        );
        console.log(
            `Transaction has been evaluated, result is: ${result.toString()}`
        );
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function addReciever(Id, email, name, location, phone) {
    // put everything in a try catch exception.
    try {
        // Create a new file system based wallet for managing identities.
        // Do this but make sure that the wallet is in the right locations.
        const walletPath = path.join(process.cwd(), "wallet");
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        // Boilerplate
        const userExists = await wallet.exists("user1");
        if (!userExists) {
            console.log(
                'An identity for the user "user1" does not exist in the wallet'
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }

        // Boilerplate
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, {
            wallet,
            identity: "user1",
            discovery: { enabled: false }
        });

        // Boilerplate, but the channel name goes inside here instead if you named it to something else.
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork("mychannel");

        // Get the contract from the network.
        // change the contract name but this is boilerplate code.
        const contract = network.getContract("fabcar");

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

        // These two lines are important boilerplate code, and result is a json file.
        const result = await contract.submitTransaction(
            "addReciever",
            Id,
            email,
            name,
            location,
            phone
        );
        console.log(
            `Transaction has been evaluated, result is: ${result.toString()}`
        );
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function addRequest(Id, name, recieverID) {
    // put everything in a try catch exception.
    try {
        // Create a new file system based wallet for managing identities.
        // Do this but make sure that the wallet is in the right locations.
        const walletPath = path.join(process.cwd(), "wallet");
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        // Boilerplate
        const userExists = await wallet.exists("user1");
        if (!userExists) {
            console.log(
                'An identity for the user "user1" does not exist in the wallet'
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }

        // Boilerplate
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, {
            wallet,
            identity: "user1",
            discovery: { enabled: false }
        });

        // Boilerplate, but the channel name goes inside here instead if you named it to something else.
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork("mychannel");

        // Get the contract from the network.
        // change the contract name but this is boilerplate code.
        const contract = network.getContract("fabcar");

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

        // These two lines are important boilerplate code, and result is a json file.
        const result = await contract.submitTransaction(
            "addRequest",
            Id,
            name,
            recieverID
        );
        console.log(
            `Transaction has been evaluated, result is: ${result.toString()}`
        );
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function fulfillRequest(resID, recID, orgID) {
    // put everything in a try catch exception.
    try {
        // Create a new file system based wallet for managing identities.
        // Do this but make sure that the wallet is in the right locations.
        const walletPath = path.join(process.cwd(), "wallet");
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        // Boilerplate
        const userExists = await wallet.exists("user1");
        if (!userExists) {
            console.log(
                'An identity for the user "user1" does not exist in the wallet'
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }

        // Boilerplate
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, {
            wallet,
            identity: "user1",
            discovery: { enabled: false }
        });

        // Boilerplate, but the channel name goes inside here instead if you named it to something else.
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork("mychannel");

        // Get the contract from the network.
        // change the contract name but this is boilerplate code.
        const contract = network.getContract("fabcar");

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

        // These two lines are important boilerplate code, and result is a json file.
        const result = await contract.submitTransaction(
            "fulfillRequest",
            resID,
            recID,
            orgID
        );
        console.log(
            `Transaction has been evaluated, result is: ${result.toString()}`
        );
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function sendResource(resID, org1, org2) {
    // put everything in a try catch exception.
    try {
        // Create a new file system based wallet for managing identities.
        // Do this but make sure that the wallet is in the right locations.
        const walletPath = path.join(process.cwd(), "wallet");
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        // Boilerplate
        const userExists = await wallet.exists("user1");
        if (!userExists) {
            console.log(
                'An identity for the user "user1" does not exist in the wallet'
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }

        // Boilerplate
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, {
            wallet,
            identity: "user1",
            discovery: { enabled: false }
        });

        // Boilerplate, but the channel name goes inside here instead if you named it to something else.
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork("mychannel");

        // Get the contract from the network.
        // change the contract name but this is boilerplate code.
        const contract = network.getContract("fabcar");

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

        // These two lines are important boilerplate code, and result is a json file.
        const result = await contract.submitTransaction(
            "sendResource",
            resID,
            org1,
            org2
        );
        console.log(
            `Transaction has been evaluated, result is: ${result.toString()}`
        );
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function removeResource(resID, orgID) {
    // put everything in a try catch exception.
    try {
        // Create a new file system based wallet for managing identities.
        // Do this but make sure that the wallet is in the right locations.
        const walletPath = path.join(process.cwd(), "wallet");
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        // Boilerplate
        const userExists = await wallet.exists("user1");
        if (!userExists) {
            console.log(
                'An identity for the user "user1" does not exist in the wallet'
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }

        // Boilerplate
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, {
            wallet,
            identity: "user1",
            discovery: { enabled: false }
        });

        // Boilerplate, but the channel name goes inside here instead if you named it to something else.
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork("mychannel");

        // Get the contract from the network.
        // change the contract name but this is boilerplate code.
        const contract = network.getContract("fabcar");

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

        // These two lines are important boilerplate code, and result is a json file.
        const result = await contract.submitTransaction(
            "removeResource",
            resID,
            orgID
        );
        console.log(
            `Transaction has been evaluated, result is: ${result.toString()}`
        );
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function queryRequest(requestID) {
    // put everything in a try catch exception.
    try {
        // Create a new file system based wallet for managing identities.
        // Do this but make sure that the wallet is in the right locations.
        const walletPath = path.join(process.cwd(), "wallet");
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        // Boilerplate
        const userExists = await wallet.exists("user1");
        if (!userExists) {
            console.log(
                'An identity for the user "user1" does not exist in the wallet'
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }

        // Boilerplate
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, {
            wallet,
            identity: "user1",
            discovery: { enabled: false }
        });

        // Boilerplate, but the channel name goes inside here instead if you named it to something else.
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork("mychannel");

        // Get the contract from the network.
        // change the contract name but this is boilerplate code.
        const contract = network.getContract("fabcar");

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

        // These two lines are important boilerplate code, and result is a json file.
        const result = await contract.evaluateTransaction(
            "queryRequest",
            requestID
        );
        console.log(
            `Transaction has been evaluated, result is: ${result.toString()}`
        );
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function queryOrganization(orgID) {
    // put everything in a try catch exception.
    try {
        // Create a new file system based wallet for managing identities.
        // Do this but make sure that the wallet is in the right locations.
        const walletPath = path.join(process.cwd(), "wallet");
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        // Boilerplate
        const userExists = await wallet.exists("user1");
        if (!userExists) {
            console.log(
                'An identity for the user "user1" does not exist in the wallet'
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }

        // Boilerplate
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, {
            wallet,
            identity: "user1",
            discovery: { enabled: false }
        });

        // Boilerplate, but the channel name goes inside here instead if you named it to something else.
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork("mychannel");

        // Get the contract from the network.
        // change the contract name but this is boilerplate code.
        const contract = network.getContract("fabcar");

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

        // These two lines are important boilerplate code, and result is a json file.
        const result = await contract.evaluateTransaction(
            "queryOrganization",
            orgID
        );
        console.log(
            `Transaction has been evaluated, result is: ${result.toString()}`
        );
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function queryReciever(orgID) {
    // put everything in a try catch exception.
    try {
        // Create a new file system based wallet for managing identities.
        // Do this but make sure that the wallet is in the right locations.
        const walletPath = path.join(process.cwd(), "wallet");
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        // Boilerplate
        const userExists = await wallet.exists("user1");
        if (!userExists) {
            console.log(
                'An identity for the user "user1" does not exist in the wallet'
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }

        // Boilerplate
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, {
            wallet,
            identity: "user1",
            discovery: { enabled: false }
        });

        // Boilerplate, but the channel name goes inside here instead if you named it to something else.
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork("mychannel");

        // Get the contract from the network.
        // change the contract name but this is boilerplate code.
        const contract = network.getContract("fabcar");

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

        // These two lines are important boilerplate code, and result is a json file.
        const result = await contract.evaluateTransaction(
            "queryReciever",
            orgID
        );
        console.log(
            `Transaction has been evaluated, result is: ${result.toString()}`
        );
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}

async function queryResource(orgID) {
    // put everything in a try catch exception.
    try {
        // Create a new file system based wallet for managing identities.
        // Do this but make sure that the wallet is in the right locations.
        const walletPath = path.join(process.cwd(), "wallet");
        const wallet = new FileSystemWallet(walletPath);
        console.log(`Wallet path: ${walletPath}`);

        // Check to see if we've already enrolled the user.
        // Boilerplate
        const userExists = await wallet.exists("user1");
        if (!userExists) {
            console.log(
                'An identity for the user "user1" does not exist in the wallet'
            );
            console.log("Run the registerUser.js application before retrying");
            return;
        }

        // Boilerplate
        // Create a new gateway for connecting to our peer node.
        const gateway = new Gateway();
        await gateway.connect(ccp, {
            wallet,
            identity: "user1",
            discovery: { enabled: false }
        });

        // Boilerplate, but the channel name goes inside here instead if you named it to something else.
        // Get the network (channel) our contract is deployed to.
        const network = await gateway.getNetwork("mychannel");

        // Get the contract from the network.
        // change the contract name but this is boilerplate code.
        const contract = network.getContract("fabcar");

        // Evaluate the specified transaction.
        // queryCar transaction - requires 1 argument, ex: ('queryCar', 'CAR4')
        // queryAllCars transaction - requires no arguments, ex: ('queryAllCars')

        // These two lines are important boilerplate code, and result is a json file.
        const result = await contract.evaluateTransaction(
            "queryResource",
            orgID
        );
        console.log(
            `Transaction has been evaluated, result is: ${result.toString()}`
        );
    } catch (error) {
        console.error(`Failed to evaluate transaction: ${error}`);
        process.exit(1);
    }
}
function main() {
    // addOrganization("1", "firstorg", "email", "something", "else");
    // addReciever("2", "firstorg", "email", "something", "else");
    // addRequest("9872341", "Food", "2");
    // addRequest("123987", "Clothes", "1");
    // addRequest("12387", "Water", "0");
    // queryAllOrganizations();
    // queryAllR    ecievers();
    queryAllRequests();
    // queryRequest("12387");
}
main();
