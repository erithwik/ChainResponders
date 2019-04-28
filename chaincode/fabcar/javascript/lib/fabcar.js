"use strict";

const { Contract } = require("fabric-contract-api");

class FabCar extends Contract {
    //update ledger with a greeting
    async initLedger(ctx) {
        console.info("instantiated");
    }

    //add a member along with their email, name, address, and number
    async addOrganization(
        ctx,
        orgID,
        email,
        organization,
        location,
        phoneNumber
    ) {
        let joiner = {
            organization: organization,
            number: phoneNumber,
            email: email,
            location: location
        };
        await ctx.stub.putState(
            "ORG-" + orgID,
            Buffer.from(JSON.stringify(joiner))
        );
        return JSON.stringify(joiner);
    }

    async addResource(ctx, resourceID, name, orgID) {
        let resource = {
            name: name,
            owner: "ORG-" + orgID,
            benefactor: "none"
        };
        await ctx.stub.putState(
            "RES-" + resourceID,
            Buffer.from(JSON.stringify(resource))
        );
        return JSON.stringify(resource);
    }

    async addReciever(ctx, receiverID, email, name, location, phoneNumber) {
        let reciever = {
            email: email,
            name: name,
            location: location,
            phoneNumber: phoneNumber
        };
        await ctx.stub.putState(
            "REC-" + receiverID,
            Buffer.from(JSON.stringify(reciever))
        );
        return JSON.stringify(reciever);
    }

    async addRequest(ctx, requestID, name, recieverID) {
        let request = {
            name: name,
            receiverID: "REC-" + recieverID
        };
        await ctx.stub.putState(
            "REQ-" + requestID,
            Buffer.from(JSON.stringify(request))
        );
        return JSON.stringify(request);
    }

    async queryAllResources(ctx) {
        const startKey = "RES-0";
        const endKey = "RES-999";

        const iterator = await ctx.stub.getStateByRange(startKey, endKey);

        const items = [];
        const allResults = [];
        while (true) {
            const res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString("utf8"));

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString("utf8"));
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString("utf8");
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log("end of data");
                await iterator.close();
                console.info(allResults);
                return JSON.stringify(allResults);
            }
        }
    }

    async queryAllRequests(ctx) {
        const startKey = "REQ-0";
        const endKey = "REQ-999";

        const iterator = await ctx.stub.getStateByRange(startKey, endKey);

        const allResults = [];
        while (true) {
            const res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString("utf8"));

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString("utf8"));
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString("utf8");
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log("end of data");
                await iterator.close();
                console.info(allResults);
                return JSON.stringify(allResults);
            }
        }
    }

    async queryAllOrganizations(ctx) {
        const startKey = "ORG-0";
        const endKey = "ORG-999";

        const iterator = await ctx.stub.getStateByRange(startKey, endKey);

        const allResults = [];
        while (true) {
            const res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString("utf8"));

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString("utf8"));
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString("utf8");
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log("end of data");
                await iterator.close();
                console.info(allResults);
                return JSON.stringify(allResults);
            }
        }
    }

    async queryAllRecievers(ctx) {
        const startKey = "REC-0";
        const endKey = "REC-999";

        const iterator = await ctx.stub.getStateByRange(startKey, endKey);

        const allResults = [];
        while (true) {
            const res = await iterator.next();

            if (res.value && res.value.value.toString()) {
                console.log(res.value.value.toString("utf8"));

                const Key = res.value.key;
                let Record;
                try {
                    Record = JSON.parse(res.value.value.toString("utf8"));
                } catch (err) {
                    console.log(err);
                    Record = res.value.value.toString("utf8");
                }
                allResults.push({ Key, Record });
            }
            if (res.done) {
                console.log("end of data");
                await iterator.close();
                console.info(allResults);
                return JSON.stringify(allResults);
            }
        }
    }

    async fulfillRequest(ctx, resourceID, recieverID, orgID) {
        let resources = [];
        resources = await this.queryAllResources(ctx);
        for (let i = 0; i < resources.length; i++) {
            if (resources[i].key === "RES-" + resourceID) {
                if (
                    resources[i].Record.benefactor === "none" &&
                    resources[i].Record.owner === "ORG-" + orgID
                ) {
                    resources[i].Record.benefactor = recieverID;
                    await ctx.stub.putState(
                        "RES-" + resourceID,
                        Buffer.from(JSON.stringify(resource[i].Record))
                    );
                }
            }
        }
    }

    async sendResource(ctx, resourceID, orgID1, orgID2) {
        let resource = await this.queryResource(ctx, resourceID);
        if (resource.owner === "ORG-" + orgID1) {
            resource.owner = "ORG-" + orgID2;
        }
        await ctx.stub.putState(
            "RES-" + resourceID,
            Buffer.from(JSON.stringify(resource))
        );
        console.log("Resource sent");
    }

    async removeResource(ctx, resourceID, orgID) {
        let resources = [];
        resources = await this.queryAllResources(ctx);
        console.log("Queried resources");
        for (let i = 0; i < resources.length; i++) {
            if (resources[i].key === "RES-" + resourceID) {
                if (
                    resources[i].Record.benefactor === "none" &&
                    resources[i].Record.owner === "ORG-" + orgID
                ) {
                    resources[i].Record = {
                        name: "none",
                        owner: "none",
                        benefactor: "none"
                    };
                    await ctx.stub.putState(
                        "RES-" + resourceID,
                        Buffer.from(JSON.stringify(resource[i].Record))
                    );
                    console.log("updated resource");
                }
            }
        }
    }

    async queryRequest(ctx, requestID) {
        console.info("querying for organization: " + requestID);
        let returnAsBytes = await ctx.stub.getState("REQ-" + requestID);
        let result = JSON.parse(returnAsBytes.toString());
        return result;
    }

    async queryOrganization(ctx, orgID) {
        console.info("querying for organization: " + orgID);
        let returnAsBytes = await ctx.stub.getState("ORG-" + orgID);
        let result = JSON.parse(returnAsBytes.toString());
        return result;
    }

    async queryReciever(ctx, recieverID) {
        console.info("querying for organization: " + recieverID);
        let returnAsBytes = await ctx.stub.getState("REC-" + recieverID);
        let result = JSON.parse(returnAsBytes.toString());
        return result;
    }

    async queryResource(ctx, resourceID) {
        console.info("querying for resource: " + resourceID);
        let returnAsBytes = await ctx.stub.getState("RES-" + resourceID);
        let result = JSON.parse(returnAsBytes.toString());
        return result;
    }
}

module.exports = FabCar;
