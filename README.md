# MedConnect

MedConnect is a web-based platform for managing and accessing medical records, connecting patients with healthcare professionals, and providing users with personalized health tips. The platform consists of three panels: an admin panel for managing hospitals and users, a hospital staff panel for adding medical records and managing cases, and a user panel for viewing their medical records and accessing personalized health tips.

## Folder Structure

- `client`: contains all front-end related files built using React.js and Tailwind CSS.
- `server`: contains all back-end related files built using Node.js, Express, and MongoDB.

## Getting Started

1. Clone the repository: `git clone https://github.com/harshilsarariya/medconnect.git`
2. Change directory: `cd medconnect`
3. Install dependencies: `npm install` (run this command in both client and server directories)
4. Create a `.env` file in the `server` directory and add the following environment variables:

    ```
    MONGODB_URI=<your-mongodb-uri>
    ```

5. Start the server: `npm run start` (run this command in the `server` directory)
6. Start the client: `npm start` (run this command in the `client` directory)
7. Open your browser and go to `http://localhost:3000`

## Dependencies

### Client

- React.js
- Tailwind CSS
- Axios
- React Router DOM

### Server

- Node.js
- Express
- MongoDB
- Mongoose
- JWT

## Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b my-new-branch`
3. Make changes and commit: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-branch`
5. Submit a pull request
