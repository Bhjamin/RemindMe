const { schedule } = require('@netlify/functions')
const { handler } = require("../../common/reminder")

exports.handler = schedule("*/2 * * * *", handler)
