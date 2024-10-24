import mysql, { Connection } from 'mysql2/promise';

class Database {
    private static instance: Database;
    private connection!: Connection; // Utilisation de l'opérateur non-null assertion

    private constructor() {
        this.initializeConnection();
    }

    private async initializeConnection() {
        this.connection = await mysql.createConnection({
            host: 'localhost',     // Remplacez par votre hôte
            user: 'theb2ahir',  // Remplacez par votre nom d'utilisateur
            password: 'baahirbest', // Remplacez par votre mot de passe
            database: 'elearn', // Remplacez par le nom de votre base de données
        });
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public getConnection(): Connection {
        return this.connection;
    }
}

export default Database;
