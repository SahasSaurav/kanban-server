import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import type { FastifyRequest, FastifyReply } from 'fastify'

async function healthCheckHandler(
	request: FastifyRequest,
	reply: FastifyReply
) {
	try {
		dayjs.extend(relativeTime)
		const healthCheckObj = {
			pid: process.pid,
			date: dayjs().format('ddd, MMM D, YYYY h:mm A'),
			uptime: process.uptime(),
			message: 'Server is working fine',
		}
		return reply.code(200).send(healthCheckObj)
	} catch (err) {
		return reply.code(503).send(new Error('Server is not running'))
	}
}

export { healthCheckHandler }