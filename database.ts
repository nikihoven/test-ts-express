import pg from 'pg'

export const pool = new pg.Pool({
	host: 'localhost',
	port: 5432,
	user: 'habrpguser',
	password: 'pgpwd4habr',
	database: 'habrdb'
})
