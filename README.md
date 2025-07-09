# 🌙 Wysa Sleep Assessment - Backend Technical Assessment

**A Node.js/Express backend assessment project with a complete React frontend built to showcase full-stack capabilities.** This project was primarily designed to demonstrate backend development expertise, with the frontend application added to provide a complete user experience and showcase full-stack development skills.

> **📝 Assessment Context**: This project was created as a **backend technical assessment** focusing on Node.js/Express API development, MongoDB integration, JWT authentication, and RESTful service design. The React frontend was built additionally to demonstrate full-stack capabilities and provide an interactive interface for API testing.

## 🎯 Primary Assessment Objectives (Backend Focus)

This backend assessment demonstrates:
- **RESTful API Development** with Node.js and Express.js
- **Database Design & Integration** with MongoDB and Mongoose
- **Authentication & Security** implementation with JWT
- **API Architecture** and endpoint design
- **Data Modeling** and relationships
- **Server-side Logic** and business rules
- **Error Handling** and validation

## 🎁 Additional Showcase (Frontend Enhancement)

To provide a complete demonstration:
- **React Frontend** for interactive API testing
- **Full-Stack Integration** showing seamless communication
- **User Experience Design** for better evaluation
- **Complete Application Flow** from UI to database

## 📋 Table of Contents

- [Primary Assessment Objectives](#-primary-assessment-objectives-backend-focus)
- [Backend Skills Demonstrated](#-backend-skills-demonstrated)
- [API Implementation & Design](#-api-implementation--design)
- [Database Architecture](#-database-architecture)
- [Authentication & Security](#-authentication--security)
- [Backend Code Organization](#-backend-code-organization)
- [Additional Frontend Showcase](#-additional-frontend-showcase)
- [Getting Started](#-getting-started)
- [Backend Evaluation Guide](#-backend-evaluation-guide)
- [Assessment Summary](#-assessment-summary)

---

## 💡 Backend Skills Demonstrated

### 🏗️ Core Backend Development
- ✅ **RESTful API Design** - Clean, intuitive endpoints following REST principles
- ✅ **Express.js Framework** - Efficient routing, middleware, and server setup
- ✅ **Database Integration** - MongoDB with Mongoose ODM and schema design
- ✅ **Authentication System** - JWT implementation with secure password hashing
- ✅ **Middleware Development** - Custom authentication and error handling middleware
- ✅ **Data Validation** - Input validation, sanitization, and error responses
- ✅ **Environment Management** - Configuration for development and production
- ✅ **Business Logic** - Complex score calculation algorithms

### 🔧 Advanced Backend Features
- ✅ **Data Aggregation** - MongoDB aggregation pipelines for analytics
- ✅ **Relationship Management** - Proper foreign key relationships and references
- ✅ **Session Management** - Stateless JWT authentication with refresh logic
- ✅ **API Security** - CORS configuration, input sanitization, rate limiting considerations
- ✅ **Error Handling** - Comprehensive error middleware and consistent responses
- ✅ **Database Seeding** - Automated data population scripts
- ✅ **Query Optimization** - Efficient database queries and indexing strategies

### 🏆 Additional Skills (Frontend Enhancement)
- ✅ **Frontend Integration** - Seamless API consumption with React
- ✅ **Full-Stack Communication** - Complete data flow from UI to database
- ✅ **User Experience** - Interactive interface for comprehensive API demonstration

---

## ✨ Backend Features Implemented

### 🔐 Authentication & Security System
- **JWT Authentication** - Complete token-based authentication system
- **Password Security** - bcryptjs hashing with salt rounds
- **Protected Routes** - Middleware-based route protection
- **Token Validation** - Comprehensive JWT verification and error handling
- **Session Management** - Automatic token expiration and refresh logic

### 📊 RESTful API Architecture
- **CRUD Operations** - Complete Create, Read, Update, Delete functionality
- **Resource Management** - Users, Questions, Assessments, and Answers entities
- **HTTP Methods** - Proper use of GET, POST, PUT, DELETE
- **Status Codes** - Meaningful HTTP response codes (200, 201, 400, 401, 404, 500)
- **Request/Response Structure** - Consistent API format and error responses

### 🗄️ Database Design & Integration
- **MongoDB Integration** - Complete NoSQL database implementation
- **Mongoose ODM** - Schema definitions with validation and relationships
- **Data Relationships** - Proper foreign key references and population
- **Aggregation Pipelines** - Complex data analysis and reporting queries
- **Database Seeding** - Automated initial data population

### 🧮 Business Logic Implementation
- **Assessment Scoring** - Complex algorithm for sleep efficiency calculation
- **Data Processing** - Time-based calculations and statistical analysis
- **Validation Rules** - Server-side business rule enforcement
- **Analytics Engine** - User trends and pattern analysis

### �️ Security & Error Handling
- **Input Validation** - Comprehensive request data validation
- **Error Middleware** - Centralized error handling system
- **CORS Configuration** - Cross-origin resource sharing setup
- **Environment Security** - Secure configuration management

### 🎨 Additional Frontend (Bonus Implementation)
- **React Interface** - Complete user interface for API interaction
- **Real-time Updates** - Dynamic UI updates based on API responses
- **Error Display** - User-friendly error messaging and validation feedback

---

## 🛠️ Backend Technology Stack

### Primary Backend Technologies
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, unopinionated web framework for Node.js
- **MongoDB** - NoSQL document database for flexible data storage
- **Mongoose** - Elegant MongoDB object modeling with built-in validation
- **JWT (jsonwebtoken)** - Secure token-based authentication
- **bcryptjs** - Password hashing library with salt generation

### Supporting Backend Libraries
- **cors** - Cross-Origin Resource Sharing middleware
- **dotenv** - Environment variable configuration
- **express-validator** - Server-side input validation middleware
- **helmet** - Security headers and protection (production ready)

### Development Tools
- **Nodemon** - Development server with auto-restart functionality
- **ESLint** - Code quality and consistency enforcement
- **Postman** - API endpoint testing and documentation

### Additional Frontend Stack (Showcase)
- **React 18** - Modern UI library for interactive frontend
- **Vite** - Fast build tool for development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - Promise-based HTTP client for API communication

### Why These Backend Technologies?

1. **Node.js + Express** - Excellent for building RESTful APIs with JavaScript
2. **MongoDB + Mongoose** - Flexible schema design perfect for evolving data requirements
3. **JWT Authentication** - Stateless, scalable authentication without server sessions
4. **bcryptjs** - Industry-standard password hashing with configurable difficulty
5. **Modular Architecture** - Clean separation of concerns with middleware pattern

---

## 🏗️ Backend Architecture & Design

```
Wysa Backend Assessment/
│
├── �️ Backend API (Primary Focus)     # Node.js/Express Server
│   ├── 📊 models/                     # Database Schema Layer
│   │   ├── User.js                   # User entity with authentication
│   │   ├── Question.js               # Assessment question structure
│   │   ├── Assessment.js             # Assessment session management
│   │   └── Answer.js                 # User response storage
│   │
│   ├── 🛣️ routes/                     # API Endpoint Layer
│   │   ├── auth.js                   # Authentication endpoints
│   │   ├── questions.js              # Question management API
│   │   ├── assessment.js             # Assessment flow API
│   │   └── analytics.js              # Data analytics API
│   │
│   ├── 🔒 middleware/                 # Request Processing Layer
│   │   ├── auth.js                   # JWT verification middleware
│   │   ├── validation.js             # Input validation middleware
│   │   └── errorHandler.js           # Global error handling
│   │
│   ├── 🧮 utils/                      # Business Logic Layer
│   │   ├── scoreCalculation.js       # Assessment scoring algorithm
│   │   ├── dataValidation.js         # Custom validation functions
│   │   └── responseHelpers.js        # Consistent API responses
│   │
│   ├── � config/                     # Configuration Layer
│   │   ├── database.js               # MongoDB connection setup
│   │   └── environment.js            # Environment variable management
│   │
│   ├── app.js                        # Express application setup
│   ├── server.js                     # Server initialization
│   └── seed.js                       # Database seeding script
│
└── 📱 Frontend (Additional Showcase)   # React Application
    ├── 🎨 components/                 # UI Components
    ├── � services/api.js             # Backend API integration
    └── 🎯 App.jsx                     # Main application component
```

### Backend Design Principles Demonstrated

1. **Layered Architecture** - Clear separation between routes, models, and business logic
2. **Middleware Pattern** - Reusable authentication and validation components
3. **RESTful Design** - Resource-based URLs and proper HTTP method usage
4. **Database Modeling** - Normalized schema with proper relationships
5. **Error Handling** - Centralized error management and consistent responses
6. **Security Implementation** - JWT authentication and input validation
7. **Configuration Management** - Environment-based settings and secrets
8. **Code Organization** - Logical file structure following Node.js best practices



---

## 🚀 Getting Started (Backend Focus)

### Prerequisites for Backend Assessment Review
- **Node.js** (v16 or higher) - JavaScript runtime
- **MongoDB** (local installation or Atlas) - Database server
- **Postman** (recommended) - For API endpoint testing
- **Git** - For cloning the repository

### Backend Setup (Primary Assessment)

```bash
# 1. Clone the assessment project
git clone https://github.com/Amanchaurasia17/Wysa-assessment.git
cd Wysa-assessment

# 2. Backend Setup (MAIN FOCUS)
cd wysa-backend
npm install

# 3. Environment Configuration
cp .env.example .env
# Edit .env with your MongoDB URL and JWT secret

# 4. Database Setup
npm run seed    # Populate sample questions and data
npm start       # Start backend API server on port 5000
```

### Frontend Setup (Additional Showcase)

```bash
# Optional: Run frontend for complete demonstration
cd ../frontend
npm install
npm run dev     # Start frontend on port 5173
```

### Backend Evaluation URLs
- **API Base**: http://localhost:5000/api
- **Health Check**: http://localhost:5000/api/health
- **API Documentation**: See detailed endpoint specifications below
- **Frontend Demo** (optional): http://localhost:5173

### Backend Testing Flow (Primary Assessment)
1. **API Health Check** - Verify server is running
2. **User Registration** - Test authentication endpoint
3. **User Login** - Receive JWT token
4. **Protected Routes** - Test middleware authentication
5. **CRUD Operations** - Test all endpoint functionalities
6. **Data Validation** - Test input validation and error handling
7. **Business Logic** - Test assessment scoring algorithm


## 🔧 Detailed Setup

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd wysa-backend
   npm install
   ```

2. **Environment Configuration:**
   
   Create a `.env` file in the backend root:
   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development

   # Database Configuration
   MONGODB_URL=mongodb://localhost:27017/wysa
   # For MongoDB Atlas:
   # MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/wysa

   # JWT Configuration
   JWT_SECRET=your_super_secure_jwt_secret_key_here
   JWT_EXPIRES_IN=7d

   # CORS Configuration
   FRONTEND_URL=http://localhost:5173
   ```

3. **Database Setup:**
   ```bash
   # Make sure MongoDB is running, then seed the database
   npm run seed
   
   # Start the backend server
   npm start
   # or for development with auto-restart
   npm run dev
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   npm install
   ```

2. **Environment Configuration:**
   
   Create a `.env` file in the frontend root:
   ```env
   VITE_API_BASE_URL=http://localhost:5000/api
   VITE_APP_NAME=Wysa Sleep Assessment
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```

### Database Schema

The application uses the following MongoDB collections:

#### Users Collection
```javascript
{
  _id: ObjectId,
  nickname: String,
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

#### Questions Collection
```javascript
{
  _id: ObjectId,
  text: String,
  key: String,      // Unique identifier (e.g., 'bedtime', 'wakeup')
  order: Number,    // Display order
  type: String      // 'input', 'number', 'time'
}
```

#### Assessments Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  startedAt: Date,
  completedAt: Date,
  score: Number,    // Calculated sleep efficiency score
  status: String    // 'started', 'completed'
}
```

#### Answers Collection
```javascript
{
  _id: ObjectId,
  assessmentId: ObjectId,
  questionId: ObjectId,
  answer: String,
  answeredAt: Date
}
```


---

## API Documentation

### Authentication

| Endpoint         | Method | Auth | Description              |
|------------------|--------|------|--------------------------|
| /api/signup      | POST   | No   | Register new user        |
| /api/login       | POST   | No   | Login, receive JWT token |

**Signup Example:**
```bash
POST /api/signup
{
"nickname": "alice",
"password": "strongpass123"
}
```


**Login Example:**
```bash
POST /api/login
{
"nickname": "alice",
"password": "strongpass123"
}
Response:


{ "token": "<jwt-token>" }
```

---

### Assessment Flow

| Endpoint                      | Method | Auth | Description                                   |
|-------------------------------|--------|------|-----------------------------------------------|
| /api/questions                | GET    | Yes  | Fetch assessment questions                    |
| /api/assessment/start         | POST   | Yes  | Start new assessment                          |
| /api/assessment/answer        | POST   | Yes  | Submit answer for a question                  |
| /api/assessment/complete      | POST   | Yes  | Complete assessment, backend calculates score |
| /api/assessment/history       | GET    | Yes  | Get user's assessment history                 |

**Start Assessment:**
```bash
POST /api/assessment/start
Headers: Authorization: Bearer <token>

Response:
{ "assessmentId": "<assessmentId>" }
```


**Submit Answer:**

```bash
POST /api/assessment/answer
Headers: Authorization: Bearer <token>
{
"assessmentId": "<assessmentId>",
"questionId": "<questionId>",
"answer": "22:00"
}
```


**Complete Assessment:**

```bash
POST /api/assessment/complete
Headers: Authorization: Bearer <token>
{
"assessmentId": "<assessmentId>"
}

Response:

{
"message": "Assessment completed",
"assessment": {
"_id": "...",
"userId": "...",
"startedAt": "...",
"completedAt": "...",
"score": 88
}
}
```

---

### Analytics

| Endpoint                        | Method | Auth | Description                                 |
|----------------------------------|--------|------|---------------------------------------------|
| /api/analytics/user-trends      | GET    | Yes  | User’s average score and total assessments  |
| /api/analytics/common-answers   | GET    | Yes  | Most common answers to assessment questions |

---

## 🎨 Additional Frontend Showcase

> **Note**: The frontend was built as an additional feature to demonstrate full-stack capabilities and provide an interactive interface for backend API evaluation.

### React Frontend Implementation (Bonus)

**Built to Enhance Backend Demonstration:**
- **API Integration** - Complete consumption of all backend endpoints
- **Real-time Validation** - Frontend validation that complements backend validation
- **User Experience** - Interactive interface for easier API testing and evaluation
- **Error Handling** - User-friendly display of backend error responses

**Key Frontend Components:**
- **Authentication Forms** - Login/signup with JWT token management
- **Assessment Interface** - Step-by-step questionnaire consuming backend APIs
- **Analytics Dashboard** - Data visualization of backend analytics endpoints
- **History View** - Display of assessment data from backend storage

**Frontend Technical Highlights:**
- React 18 with modern hooks and functional components
- Tailwind CSS for responsive, professional design
- Axios for seamless backend API communication
- Context API for global authentication state management

### Why Frontend Was Added

1. **Complete Demonstration** - Shows full data flow from UI to database
2. **Interactive Testing** - Provides easy way to test all API endpoints
3. **Professional Presentation** - Makes the backend assessment more impressive
4. **Full-Stack Skills** - Demonstrates versatility beyond backend expertise

---

## 🧪 Backend Code Organization & Quality

### Backend Project Structure

**Models Layer (Database Schema)**
```javascript
// User.js - Authentication and user management
const userSchema = {
  nickname: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // bcryptjs hashed
  createdAt: { type: Date, default: Date.now }
};

// Assessment.js - Session management
const assessmentSchema = {
  userId: { type: ObjectId, ref: 'User', required: true },
  startedAt: { type: Date, default: Date.now },
  completedAt: { type: Date },
  score: { type: Number },
  status: { type: String, enum: ['started', 'completed'] }
};
```

**Routes Layer (API Endpoints)**
- **auth.js** - Authentication endpoints with validation
- **assessment.js** - Assessment flow with business logic
- **questions.js** - Question management with error handling
- **analytics.js** - Data aggregation with MongoDB pipelines

**Middleware Layer (Request Processing)**
- **auth.js** - JWT verification and user context
- **validation.js** - Input validation and sanitization
- **errorHandler.js** - Global error management

### Backend Quality Measures

```bash
# Code Organization
- Modular architecture with clear separation
- Consistent naming conventions
- Comprehensive error handling
- Environment-based configuration

# Security Implementation
- JWT authentication with proper verification
- Password hashing with bcryptjs
- Input validation and sanitization
- CORS and security headers

# Database Design
- Normalized schema design
- Proper indexing for performance
- Relationship management with references
- Aggregation pipelines for analytics
```

### Backend Testing Approach

**API Testing Checklist:**
- ✅ Authentication flow (signup, login, token validation)
- ✅ CRUD operations for all entities
- ✅ Data validation and error responses
- ✅ Business logic (scoring algorithm)
- ✅ Database relationships and integrity
- ✅ Security measures (protected routes, input validation)

**Manual Testing with Postman:**
1. **Authentication Testing** - Register, login, token verification
2. **Endpoint Testing** - All REST endpoints with various inputs
3. **Error Handling** - Invalid inputs, unauthorized access
4. **Data Flow** - Complete assessment workflow
5. **Security Testing** - Protected route access, token expiration

---

## � Project Evaluation

### Assessment Criteria Coverage

#### ✅ Technical Proficiency
- **Full-Stack Development** - Complete React + Node.js application
- **Database Design** - Well-structured MongoDB schemas
- **API Development** - RESTful endpoints with proper authentication
- **Frontend Skills** - Modern React patterns and responsive design
- **Code Quality** - Clean, organized, and documented code

#### ✅ Problem-Solving Approach
- **Requirements Analysis** - Sleep assessment domain understanding
- **System Design** - Logical architecture and data flow
- **User Experience** - Intuitive interface and smooth interactions
- **Error Handling** - Comprehensive edge case management

#### ✅ Best Practices Implementation
- **Security** - JWT authentication, password hashing, input validation
- **Performance** - Efficient queries, optimized API calls
- **Maintainability** - Modular code structure, clear documentation
- **Scalability** - Environment-based configuration, clean architecture

### Key Technical Achievements

1. **Authentication System**
   - Secure JWT implementation
   - Password hashing with bcryptjs
   - Protected route middleware

2. **Assessment Logic**
   - Dynamic question flow
   - Score calculation algorithm
   - Progress tracking implementation

3. **Data Management**
   - Normalized database design
   - Efficient data relationships
   - Analytics and reporting features

4. **User Interface**
   - Responsive design implementation
   - Interactive components
   - Modern UI/UX patterns

### Demonstration of Skills

- **JavaScript/ES6+** - Modern syntax and features
- **React Development** - Hooks, state management, component lifecycle
- **Node.js/Express** - Server setup, middleware, routing
- **MongoDB/Mongoose** - Schema design, queries, aggregation
- **API Design** - RESTful principles, documentation
- **Authentication** - JWT implementation, security best practices
- **Frontend/Backend Integration** - Seamless data communication
- **Version Control** - Git workflow and documentation

---

## 📄 License & Usage

**Assessment Project License**

This project was created as a technical assessment to demonstrate full-stack development capabilities. 

### Usage Rights
- ✅ **Educational Use** - Study the code for learning purposes
- ✅ **Portfolio Reference** - Include in technical portfolios
- ✅ **Code Review** - Analyze implementation approaches
- ✅ **Interview Discussion** - Reference during technical interviews

### Restrictions
- ❌ **Commercial Use** - Not intended for production deployment
- ❌ **Redistribution** - Please reference original repository
- ❌ **Modification for Submission** - Don't present as your own work

---

## 🙏 Acknowledgments & References

**Technical Inspiration:**
- [Wysa](https://www.wysa.io/) - Original concept and design inspiration
- [React Documentation](https://reactjs.org/) - Modern React patterns
- [Express.js Guide](https://expressjs.com/) - Backend architecture
- [MongoDB University](https://university.mongodb.com/) - Database design patterns

**Development Resources:**
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [JWT.io](https://jwt.io/) - Token authentication standards
- [MDN Web Docs](https://developer.mozilla.org/) - Web development standards

---

## 📊 Backend Assessment Summary

### 🎯 **Primary Backend Deliverables**
- **RESTful API** - Complete Node.js/Express backend with authentication
- **Database Design** - MongoDB integration with proper schema modeling
- **JWT Authentication** - Secure token-based authentication system
- **Business Logic** - Complex assessment scoring and analytics algorithms
- **Error Handling** - Comprehensive validation and error management
- **API Documentation** - Well-structured endpoint specifications

### 💼 **Core Backend Skills Demonstrated**
- **Node.js/Express** - Server architecture, routing, middleware implementation
- **MongoDB/Mongoose** - Database design, queries, aggregation pipelines
- **Authentication** - JWT implementation, password hashing, security
- **API Development** - RESTful design, proper HTTP methods, status codes
- **Code Organization** - Professional project structure and modularity
- **Documentation** - Comprehensive API documentation and setup guides

### 🎁 **Additional Full-Stack Bonus**
- **React Frontend** - Interactive UI consuming all backend APIs
- **Complete Integration** - Seamless frontend-backend communication
- **Professional Presentation** - Polished application showcasing backend work

### 🚀 **Ready for Backend Evaluation**
- **Quick Setup** - Streamlined backend installation and configuration
- **API Testing** - Postman-ready endpoints with sample data
- **Comprehensive Documentation** - Detailed backend architecture explanation
- **Production-Ready Code** - Clean, secure, and scalable backend implementation

---

<div align="center">

### 🔍 **Backend Technical Assessment**

**Built to demonstrate Node.js/Express backend expertise**
*with additional React frontend for complete demonstration*

[Backend Setup](#-getting-started-backend-focus) • [API Documentation](#-api-implementation--design-primary-assessment-focus) • [Backend Architecture](#-backend-architecture--design)

**Created by [Aman Chaurasia](https://github.com/Amanchaurasia17)**

*This project primarily showcases backend development proficiency in Node.js, Express, MongoDB, and RESTful API design.*

</div>


