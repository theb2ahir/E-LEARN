import { app } from './infrastructure/web/server';
// import { connectDatabase } from './infrastructure/database/connection'; // Exemple de fonction pour initialiser la base de données

const startServer = async () => {
    try {
        // 1. Connexion à la base de données
        // await connectDatabase();

        // 2. Démarrage du serveur
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${ PORT }`);
        });
        
    } catch (error) {
        console.error("Failed to start the server:", error);
        process.exit(1); // Arrêt du processus en cas d'erreur critique
    }
};

startServer();