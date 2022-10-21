import { app } from '../../app'

describe('healthcheck route', () => {
	it('should health check route response return status  code of 200', async () => {
		const response = await app.inject({
			method: 'GET',
			url: '/api/healthcheck',
			headers: {
				accept: 'application/json',
				'content-type': 'application/json',
			},
		})

		const contentType = response.headers['content-type']

		expect(response.statusCode).toBe(200)
		expect(contentType).toBe('application/json; charset=utf-8')
	})
})
