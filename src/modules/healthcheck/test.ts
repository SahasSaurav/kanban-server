import { build } from '../../app'

describe('healthcheck route', () => {
	const app = build()

	it('health check status response header content-type is application/json', async () => {
		const response = await app.inject({
			method: 'GET',
			url: '/api/healthcheck',
		})

		const contenType = response.headers['content-type']
		expect(contenType).toBe('application/json; charset=utf-8')
	})

	it('health check status response code is 200', async () => {
		const response = await app.inject({
			method: 'GET',
			url: '/api/healthcheck',
		})
		expect(response.statusCode).toBe(200)
	})

	// it('server is  not working fine', async () => {
	// 	const response = await app.inject({
	// 		method: 'GET',
	// 		url: '/api/healthcheck',
	// 	})
	// 	expect(response.statusCode).toBe(500)
	// })
})
