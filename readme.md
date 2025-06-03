# Online Resume Maker

A full-stack web application for creating and managing professional resumes online. Built with React.js for the frontend and Node.js/Express.js for the backend.

## Project Structure

```
├── client/                             # Frontend React application
│   ├── public/                         # Public assets
│   │   ├── index.html
│   │   └── assets/                     # Static assets
│   ├── src/                            # Source files
│   │   ├── assets/                     # Frontend assets
│   │   │   └── images/                 # Image assets
│   │   ├── components/                 # Reusable React components
│   │   │   ├── Cards/                  # Card components
│   │   │   │   ├── ResumeCard.jsx
│   │   │   │   └── ProfileCard.jsx
│   │   │   ├── Inputs/                 # Form input components
│   │   │   │   ├── TextInput.jsx
│   │   │   │   ├── SelectInput.jsx
│   │   │   │   └── FileInput.jsx
│   │   │   ├── layouts/                # Layout components
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── Sidebar.jsx
│   │   │   ├── ResumeSections/         # Resume section components
│   │   │   │   ├── Education.jsx
│   │   │   │   ├── Experience.jsx
│   │   │   │   ├── Skills.jsx
│   │   │   │   └── Projects.jsx
│   │   │   ├── ResumeTemplates/        # Resume template components
│   │   │   │   ├── Modern.jsx
│   │   │   │   ├── Classic.jsx
│   │   │   │   └── Professional.jsx
│   │   │   ├── Modal.jsx
│   │   │   ├── Progress.jsx
│   │   │   ├── StepProgress.jsx
│   │   │   └── Tab.jsx
│   │   ├── context/                    # React Context providers
│   │   │   ├── AuthContext.jsx
│   │   │   └── ResumeContext.jsx
│   │   ├── pages/                      # Page components
│   │   │   ├── Auth/                   # Authentication pages
│   │   │   │   ├── Login.jsx
│   │   │   │   └── Register.jsx
│   │   │   ├── Home/                   # Home section
│   │   │   │   └── Home.jsx
│   │   │   ├── ResumeUpdate/           # Resume update section
│   │   │   │   ├── CreateResume.jsx
│   │   │   │   └── EditResume.jsx
│   │   │   └── LandingPage.jsx
│   │   ├── utils/                      # Utility functions
│   │   │   ├── api.js
│   │   │   ├── constants.js
│   │   │   └── helpers.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── .eslintrc.js
│   ├── vite.config.js
│   └── package.json
│
├── server/                             # Backend Node.js/Express application
│   ├── config/                         # Configuration files
│   │   ├── db.js
│   │   └── config.js
│   ├── controllers/                    # API controllers
│   │   ├── authController.js
│   │   ├── resumeController.js
│   │   └── userController.js
│   ├── middlewares/                    # Express middlewares
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── upload.js
│   ├── models/                         # Database models
│   │   ├── Resume.js
│   │   └── User.js
│   ├── routes/                         # API routes
│   │   ├── auth.js
│   │   ├── resume.js
│   │   └── user.js
│   ├── uploads/                        # File upload directory
│   │   └── images-1.png                # uploaded image
│   ├── utils/                          # Utility functions
│   │   ├── validation.js
│   │   └── helpers.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## Dependencies and Libraries

### Frontend Dependencies (client)
```json
{
  "dependencies": {
    "@tailwindcss/vite": "^4.1.7",     // Tailwind CSS integration with Vite
    "axios": "^1.9.0",                 // HTTP client for API requests
    "flag-icons": "^7.5.0",            // Country flag icons
    "html2canvas": "^1.4.1",           // HTML to canvas conversion for PDF
    "libphonenumber-js": "^1.12.8",    // Phone number formatting
    "moment": "^2.30.1",               // Date formatting
    "react": "^19.1.0",                // React core
    "react-dom": "^19.1.0",            // React DOM
    "react-hot-toast": "^2.5.2",       // Toast notifications
    "react-icons": "^5.5.0",           // Icon components
    "react-phone-input-2": "^2.15.1",  // Phone input component
    "react-router-dom": "^7.6.0",      // Routing
    "react-to-print": "^3.1.0",        // PDF generation
    "tailwindcss": "^4.1.7"            // CSS framework
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.4.1",   // Vite React plugin
    "eslint": "^9.25.0",               // Code linting
    "vite": "^6.3.5"                   // Build tool
  }
}
```

### Backend Dependencies (server)
```json
{
  "dependencies": {
    "bcryptjs": "^3.0.2",              // Password hashing
    "cors": "^2.8.5",                  // Cross-Origin Resource Sharing
    "dotenv": "^16.5.0",               // Environment variables
    "express": "^5.1.0",               // Web framework
    "jsonwebtoken": "^9.0.2",          // JWT authentication
    "mongodb": "^6.16.0",              // MongoDB driver
    "mongoose": "^8.15.0",             // MongoDB ODM
    "multer": "^2.0.0"                 // File upload handling
  },
  "devDependencies": {
    "nodemon": "^3.1.10"               // Development server
  }
}
```

## Key Files Description

### Frontend (client)

#### Entry Points
- `index.html`: The main HTML file that serves as the entry point
- `src/main.jsx`: The JavaScript entry point that renders the React application
- `src/App.jsx`: The root React component that handles routing and layout

#### Components
- `components/Modal.jsx`: Reusable modal component for popups and dialogs
- `components/Tab.jsx`: Tab navigation component
- `components/Progress.jsx`: Progress indicator for multi-step forms
- `components/StepProgress.jsx`: Step-by-step progress tracking

#### Pages
- `pages/LandingPage.jsx`: Homepage with feature showcase
- `pages/Auth/*`: Authentication-related pages (login, register)
- `pages/ResumeUpdate/*`: Resume creation and editing pages

#### Context
- `context/AuthContext.jsx`: Authentication state management
- `context/ResumeContext.jsx`: Resume data state management

### Backend (server)

#### Core Files
- `server.js`: Express application setup and configuration
- `config/db.js`: Database connection configuration
- `middlewares/auth.js`: JWT authentication middleware

#### API Controllers
- `controllers/authController.js`: Authentication logic
- `controllers/resumeController.js`: Resume CRUD operations
- `controllers/userController.js`: User management

#### Models
- `models/Resume.js`: Resume data schema
- `models/User.js`: User data schema

## Environment Variables

### Backend (.env)
```
PORT=5000                            # Server port
MONGODB_URI=your_mongodb_uri         # MongoDB connection string
JWT_SECRET=your_jwt_secret          # JWT signing secret
JWT_EXPIRE=30d                      # JWT expiration time
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api   # Backend API URL
VITE_UPLOAD_URL=http://localhost:5000    # File upload URL
```

## Scripts

### Frontend
```json
{
  "dev": "vite",                    // Start development server
  "build": "vite build",           // Build for production
  "preview": "vite preview",       // Preview production build
  "lint": "eslint ."              // Run linter
}
```

### Backend
```json
{
  "start": "node server.js",       // Start production server
  "dev": "nodemon server.js"      // Start development server with auto-reload
}
```

## Features

### User Management
- User registration and authentication
- JWT-based session management
- Profile management
- Secure password hashing

### Resume Builder
- Multiple resume templates
- Section-based resume building
  - Personal Information
  - Work Experience
  - Education
  - Skills
  - Projects
  - Certifications
  - Languages
- Real-time preview
- PDF export functionality

### UI/UX Features
- Responsive design
- Modern interface with Tailwind CSS
- Toast notifications
- Modal dialogs
- Progress indicators
- Form validation
- Phone number formatting
- Country selection with flags

### File Management
- Image upload support
- File type validation
- Secure file storage

## API Endpoints

### Authentication
```
POST /api/auth/register
- Register new user
- Body: { name, email, password }

POST /api/auth/login
- User login
- Body: { email, password }

GET /api/auth/profile
- Get user profile
- Headers: Authorization: Bearer {token}
```

### Resume Management
```
GET /api/resumes
- Get all user resumes
- Headers: Authorization: Bearer {token}

POST /api/resumes
- Create new resume
- Headers: Authorization: Bearer {token}
- Body: Resume data object

GET /api/resumes/:id
- Get specific resume
- Headers: Authorization: Bearer {token}

PUT /api/resumes/:id
- Update resume
- Headers: Authorization: Bearer {token}
- Body: Updated resume data

DELETE /api/resumes/:id
- Delete resume
- Headers: Authorization: Bearer {token}
```

### File Upload
```
POST /api/upload
- Upload file
- Headers: Authorization: Bearer {token}
- Body: FormData with file
```

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- CORS configuration
- File upload validation
- Input sanitization
- Error handling middleware

## Development Setup

1. Clone the repository
```bash
git clone [repository-url]
cd Online-Resume-Maker
```

2. Install dependencies
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Configure environment variables
```bash
# In server directory
cp .env.example .env
# Edit .env with your configuration

# In client directory
cp .env.example .env
# Edit .env with your configuration
```

4. Start development servers
```bash
# Start backend server (from server directory)
npm run dev

# Start frontend server (from client directory)
npm run dev
```

5. Access the application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## Production Deployment

1. Build frontend
```bash
cd client
npm run build
```

2. Set up production environment variables
```bash
# Configure production environment variables in server/.env
```

3. Start production server
```bash
cd server
npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
