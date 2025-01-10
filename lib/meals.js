import sql from 'better-sqlite3'

const db = sql('meals.db') 

export async function getMeals(){
//adding a delay here to simulate an asynchronous call
    await new Promise((resolve) => setTimeout(resolve, 8000));
    return db.prepare('SELECT * FROM meals').all();
}