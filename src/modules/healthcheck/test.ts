import { app } from '../../app'

describe('healthcheck route', () => {
	it('health check status response code is 200', async () => {
		const response = await app.inject({
			method: 'GET',
			url: '/api/healthcheck',
		})

		const contenType = response.headers['content-type']

		expect(response.statusCode).toBe(200)
		expect(contenType).toBe('application/json; charset=utf-8')
	})
})
