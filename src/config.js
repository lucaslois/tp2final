import 'dotenv/config'

export const config = {
    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE
    },
    candidates: ['candidatoA', 'candidatoB', 'candidatoC', 'en-blanco'],
    zones: ['zona1', 'zona2', 'zona3', 'zona4']
}