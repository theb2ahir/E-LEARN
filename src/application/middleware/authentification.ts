
// // middlewares/auth.js
// import jwt from 'jsonwebtoken';

// /**
//  * Middleware to authenticate requests using JWT tokens.
//  *
//  * @param {any} req - The request object, which contains the headers and other data.
//  * @param {Object} res - The response object, used to send responses back to the client.
//  * @param {string} type - The type of user (Admin, owner, tenant).
//  * @param {Function} next - The next middleware function to be executed.
//  * @throws {Object} - Responds with a 401 status if no token is provided, or a 403 status if the token is invalid.
//  *
//  * Factory function to create an authentication middleware for different user types.
//  *
//  * @param {string} type - The type of user (Admin, owner, tenant).
//  * @returns {Function} - The middleware function to authenticate requests using JWT tokens.
//  */
// module.exports = () => {
//     return (req: any, res: any, next: any) => {
//         const token = readCookie(req, token);
//         if (!token) {
//             return res.status(401).json({ message: 'Token not provided' });
//         }

//         jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
//             if (err) {
//                 console.error('Token verification failed:', err);
//                 return res.status(403).json({ message: 'Token not valid' });
//             }

//             req.user = decoded; // Attach the decoded token data to the request object
//             next(); // Proceed to the next middleware or route handler
//         });
//     };
// };