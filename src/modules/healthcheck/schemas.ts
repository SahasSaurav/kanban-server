import z from 'zod'

const healthCheckResponse = z.object({
	pid: z.number(),
	date: z.string(),
	uptime: z.number(),
	message: z.string(),
})

const healthCheckSchema = {
	description: 'To check whether server is running or not',
	tags: ['healthcheck'],
	response: {
		'2xx': healthCheckResponse,
	},
}

export { healthCheckSchema }
