import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import httpStatus from 'http-status'

import type { FastifyRequest, FastifyReply } from 'fastify'

async function healthCheckHandler(request: FastifyRequest, reply: FastifyReply): Promise<unknown> {
	try {
		dayjs.extend(relativeTime)
		const healthCheckObj = {
			pid: process.pid,
			date: dayjs().format('ddd, MMM D, YYYY h:mm A'),
			uptime: process.uptime(),
			message: 'Server is working fine',
		}
		return reply.code(httpStatus.OK).send(healthCheckObj)
	} catch (err) {
		return reply.code(httpStatus.SERVICE_UNAVAILABLE).send(new Error('Server is not running'))
	}
}

export { healthCheckHandler }
