const { Pool } = require('pg');

const connectionString = 'postgresql://neondb_owner:npg_qyTLOIF17arl@ep-wispy-voice-ac329vct-pooler.sa-east-1.aws.neon.tech/fruit_ninja_db?sslmode=require&channel_binding=require';
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false 
  }
});

async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Conectado ao banco de dados! Hora atual:', res.rows[0].now);
  } catch (err) {
    console.error('Erro ao conectar no banco de dados:', err);
  } finally {
    await pool.end();
  }
}
testConnection();


//Fazer apenas o insert com as informações necessárias