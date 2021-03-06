/*
Copyright 2020 Adobe
All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file in
accordance with the terms of the Adobe license agreement accompanying
it. If you have received this file from a source other than Adobe,
then your use, modification, or distribution of it requires the prior
written permission of Adobe. 
*/

const utils = require("../utils");
const serialize = require("../serialize");

class RootNode {
	constructor(xdNode, config) {
		this.xdNode = xdNode;
		this.children = [];
	}

	toString(serializer, ctx) {
		ctx.log.error('RootNode.toString is unsupported.', null);
		return '';
	}

}

exports.RootNode = RootNode;
