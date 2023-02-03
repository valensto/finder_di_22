import {Given, When, Then} from "@cucumber/cucumber"
import {expect} from "chai"
import {listAssets, assets} from "../src"

Given('a pilot', async function () {
	this.pilot = {"code": "1234567", "firstName": "John", "lastName": "Doe", "email": "v.e.brochard@gmail.com"}
});


When('the pilot want to list folders and files', async function () {
	this.assetsResponse = listAssets(this.pilot);
});

 Then('the pilot can list folders and files', async function () {
    expect(this.assetsResponse).to.be.equal(assets);
 });