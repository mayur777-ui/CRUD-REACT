

<h1>MERN CRUD Application</h1>

<h2>Overview</h2>
<p>
    This project is a full-stack CRUD application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to create, read, update, and delete tasks through a user-friendly interface.
</p>

<h2>Features</h2>
<ul>
    <li>Create, read, update, and delete (CRUD) tasks</li>
    <li>Responsive design with Bootstrap</li>
    <li>Environment variable management with <code>.env</code></li>
    <li>Animated backgrounds for a visually appealing UI</li>
</ul>

<h2>Technologies Used</h2>
<ul>
    <li><strong>Frontend</strong>: React, Bootstrap, Axios</li>
    <li><strong>Backend</strong>: Node.js, Express.js, Mongoose</li>
    <li><strong>Database</strong>: MongoDB</li>
</ul>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
<ul>
    <li>Node.js (version 14 or higher)</li>
    <li>MongoDB (local or cloud)</li>
</ul>

<h3>Installation</h3>
<ol>
    <li>Clone the repository:
        <pre><code>git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name</code></pre>
    </li>
    <li>Navigate to the backend folder and install dependencies:
        <pre><code>cd backend
npm install</code></pre>
    </li>
    <li>Set up your environment variables in the <code>.env</code> file. Make sure to define:
        <ul>
            <li><code>MONGO_URI</code>: Your MongoDB connection string</li>
            <li>Any other necessary environment variables</li>
        </ul>
    </li>
    <li>Start the backend server:
        <pre><code>npm start</code></pre>
    </li>
    <li>Navigate to the frontend folder and install dependencies:
        <pre><code>cd ../frontend
npm install</code></pre>
    </li>
    <li>Start the React application:
        <pre><code>npm start</code></pre>
    </li>
</ol>

<h2>Usage</h2>
<p>
    Access the application at <code>http://localhost:3000</code>. You can add, edit, and show tasks directly from the interface.
</p>

<h2>API Endpoints</h2>
<ul>
    <li><strong>POST</strong> <code>Tasks</code> - Add a new task</li>
    <li><strong>PUT</strong> <code>Tasks/:id</code> - Edit a task by ID</li>
    <li><strong>GET</strong> <code>Tasks</code> - Show all tasks</li>
</ul>

<h2>Contributing</h2>
<p>
    Feel free to contribute to this project by submitting issues or pull requests.
</p>

<h2>License</h2>
<p>
    This project is licensed under the MIT License.
</p>

<h2>Acknowledgments</h2>
<ul>
    <li><a href="https://www.mongodb.com/mern-stack">MERN Stack Documentation</a></li>
    <li><a href="https://reactjs.org/docs/getting-started.html">React Documentation</a></li>
</ul>

