const { schedule } = require('@netlify/functions')
import handler from '../../common/reminder'

exports.handler = schedule("*/2 * * * *", handler)
