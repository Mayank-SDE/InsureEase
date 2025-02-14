# Insurance Policy Management System - Database Schema

## 📂 Overview
This document outlines the **MySQL database schema** for the **Insurance Policy Management System**. It includes detailed explanations of all tables, relationships, and functionalities.

---

## 📚 Database: `insurance_db`

### **1️⃣ Users Table (`users`)**
- Stores user information for **clients and admins**.
- Supports **local authentication** and **OAuth login** (Google, GitHub).
- Uses **JWT tokens** for authentication.
- Implements **Two-Factor Authentication (2FA)** via **email OTP**.
- Supports **profile pictures**.

#### **Key Fields:**
- `role`: Determines if a user is a **client** or an **admin**.
- `oauth_provider`: Specifies the login method (**local, Google, GitHub**).
- `oauth_id`: Stores OAuth IDs for third-party logins.
- `is_2fa_enabled`: Indicates if **2FA is enabled**.
- `profile_picture`: Stores the **URL of the profile picture**.

---

### **2️⃣ OAuth Accounts Table (`oauth_accounts`)**
- Stores **third-party login credentials** linked to users.
- Helps in **Google and GitHub login integrations**.

---

### **3️⃣ Policies Table (`policies`)**
- Stores **insurance policy details**.
- Includes **Car, Life, Health, and Home Insurance**.
- Contains **coverage, description, and pricing details**.

---

### **4️⃣ Cart Table (`cart`)**
- Stores **policies added by a user before purchase**.
- Helps users **proceed to checkout**.
- **One user can add multiple policies** to their cart.

---

### **5️⃣ Orders Table (`orders`)**
- Stores **purchased policies**.
- Tracks **order status**.
- Uses **Stripe for payment processing**.

---

### **6️⃣ Order Items Table (`order_items`)**
- Stores **details of policies in an order**.
- Tracks **pricing at the time of purchase**.

---

### **7️⃣ Claims Table (`claims`)**
- Allows users to **submit insurance claims**.
- Tracks the **status of claims** (Pending, Approved, Rejected).

---

### **8️⃣ Analytics Table (`analytics`)**
- Stores **admin analytics data**.
- Tracks **total users, orders, revenue, and policy sales statistics**.

---

## 🔒 **Security Features**
- **JWT-based Authentication**.
- **Role-based Access Control (RBAC)**.
- **Two-Factor Authentication (2FA) via Email OTP**.
- **Password Hashing using bcrypt**.
- **OAuth Login (Google, GitHub)**.

---

## 🔗 **Database Relationships**
```
[users] → (1:N) → [oauth_accounts]
[users] → (1:N) → [cart]
[users] → (1:N) → [orders] → (1:N) → [order_items] → (N:1) → [policies]
[users] → (1:N) → [claims] → (N:1) → [policies]
[policies] → (1:N) → [cart]
```

This schema provides a **scalable, secure, and well-structured database** for the **Insurance Policy Management System**. 🚀
```sql
    -- Create Database
CREATE DATABASE IF NOT EXISTS insurance_db;
USE insurance_db;

-- Users Table
CREATE TABLE users (
    id                BIGINT PRIMARY KEY AUTO_INCREMENT,
    first_name        VARCHAR(50) NOT NULL,
    last_name         VARCHAR(50) NOT NULL,
    email             VARCHAR(100) UNIQUE NOT NULL,
    password          CHAR(60) DEFAULT NULL, -- Hashed password
    phone             VARCHAR(15) UNIQUE DEFAULT NULL, 
    address           VARCHAR(255) DEFAULT NULL,
    dob               DATE DEFAULT NULL,
    gender            ENUM('Male', 'Female', 'Other') DEFAULT NULL,
    role              ENUM('client', 'admin') DEFAULT 'client',
    oauth_provider    ENUM('local', 'google', 'github') DEFAULT 'local',
    oauth_id          VARCHAR(255) DEFAULT NULL,
    profile_picture   VARCHAR(255) DEFAULT NULL, -- Stores the URL of the profile picture
    is_2fa_enabled    BOOLEAN DEFAULT FALSE, -- Indicates if 2FA is enabled
    created_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at        TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- OAuth Accounts Table
CREATE TABLE oauth_accounts (
    id         BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id    BIGINT NOT NULL,
    provider   ENUM('google', 'github') NOT NULL,
    provider_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 2FA OTP Table
CREATE TABLE user_2fa (
    id             BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id        BIGINT NOT NULL,
    otp_code       VARCHAR(6) NOT NULL, -- OTP for authentication
    otp_expires_at TIMESTAMP NOT NULL,  -- Expiry time for OTP
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Policies Table
CREATE TABLE policies (
    id             BIGINT PRIMARY KEY AUTO_INCREMENT,
    name           VARCHAR(255) NOT NULL,
    type           ENUM('car', 'life', 'health', 'home') NOT NULL,
    description    TEXT NOT NULL,
    coverage       TEXT NOT NULL,
    price          DECIMAL(10,2) NOT NULL,
    created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Cart Table
CREATE TABLE cart (
    id         BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id    BIGINT NOT NULL,
    policy_id  BIGINT NOT NULL,
    added_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (policy_id) REFERENCES policies(id) ON DELETE CASCADE
);

-- Orders Table
CREATE TABLE orders (
    id             BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id        BIGINT NOT NULL,
    total_amount   DECIMAL(10,2) NOT NULL,
    status         ENUM('pending', 'paid', 'failed', 'cancelled') DEFAULT 'pending',
    payment_id     VARCHAR(255) DEFAULT NULL, -- Stripe Payment ID
    created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Order Items Table
CREATE TABLE order_items (
    id         BIGINT PRIMARY KEY AUTO_INCREMENT,
    order_id   BIGINT NOT NULL,
    policy_id  BIGINT NOT NULL,
    price      DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (policy_id) REFERENCES policies(id) ON DELETE CASCADE
);

-- Claims Table
CREATE TABLE claims (
    id             BIGINT PRIMARY KEY AUTO_INCREMENT,
    user_id        BIGINT NOT NULL,
    policy_id      BIGINT NOT NULL,
    status         ENUM('pending', 'approved', 'rejected') DEFAULT 'pending',
    submitted_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (policy_id) REFERENCES policies(id) ON DELETE CASCADE
);

-- Admin Analytics Table
CREATE TABLE analytics (
    id             BIGINT PRIMARY KEY AUTO_INCREMENT,
    total_users    INT NOT NULL,
    total_policies INT NOT NULL,
    total_orders   INT NOT NULL,
    revenue        DECIMAL(10,2) NOT NULL,
    created_at     TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

```

# 📜 Insurance Policy Management System - Database Schema

## 📌 Overview
This document outlines the **MySQL database schema** for the **Insurance Policy Management System**. It includes **tables, relationships, and explanations** of their purposes.

The system supports:  
✅ **User authentication (JWT, OAuth, Email OTP)**  
✅ **Third-party login via Google & GitHub**  
✅ **Profile picture support**  
✅ **Insurance policy management**  
✅ **Cart & orders processing via Stripe**  
✅ **Insurance claims & admin analytics**  

## 📂 Database Name: `insurance_db`

---

## 📌 Tables & Their Explanations

### **1️⃣ Users Table (`users`)**
- Stores **user details**, including **clients and admins**.
- Supports **local authentication** and **third-party login (Google & GitHub)**.
- Includes **profile picture support**.
- Implements **Two-Factor Authentication (2FA) using email OTP**.

#### **Key Fields**
| Column             | Type              | Description |
|-------------------|------------------|-------------|
| `id`             | `BIGINT` (PK)      | Unique user ID |
| `first_name`     | `VARCHAR(50)`      | First name of the user |
| `last_name`      | `VARCHAR(50)`      | Last name of the user |
| `email`          | `VARCHAR(100)` UNIQUE | User's email (used for login) |
| `password`       | `CHAR(60)`         | Hashed password (for local login) |
| `profile_picture`| `VARCHAR(255)`     | Stores URL of profile image |
| `phone`          | `VARCHAR(15)` UNIQUE | User's phone number |
| `address`        | `VARCHAR(255)`     | User's address |
| `dob`            | `DATE`             | Date of birth |
| `gender`         | `ENUM('Male', 'Female', 'Other')` | User's gender |
| `role`           | `ENUM('client', 'admin')` | Determines if user is a **client** or **admin** |
| `oauth_provider` | `VARCHAR(50)`      | Specifies the login method (`local`, `google`, `github`) |
| `oauth_id`       | `VARCHAR(255)`     | Stores OAuth IDs for third-party logins |
| `is_2fa_enabled` | `BOOLEAN`          | Indicates if 2FA is enabled (`true/false`) |
| `created_at`     | `TIMESTAMP`        | Account creation timestamp |
| `updated_at`     | `TIMESTAMP`        | Last updated timestamp |

---

### **2️⃣ OAuth Accounts Table (`oauth_accounts`)**
- Manages **third-party login credentials** for users.
- Links OAuth accounts to **users** via `user_id`.

#### **Key Fields**
| Column       | Type         | Description |
|-------------|------------|-------------|
| `id`       | `BIGINT` (PK) | Unique OAuth record ID |
| `user_id`  | `BIGINT` (FK) | References `users(id)` |
| `provider` | `VARCHAR(50)` | OAuth provider (`google`, `github`) |
| `oauth_id` | `VARCHAR(255)` | Unique OAuth ID from provider |
| `created_at` | `TIMESTAMP` | Timestamp when the account was linked |

---

### **3️⃣ Policies Table (`policies`)**
- Stores **insurance policies** for **Car, Life, Health, and Home** insurance.
- Each policy has a **name, description, coverage details, and price**.

#### **Key Fields**
| Column        | Type             | Description |
|--------------|----------------|-------------|
| `id`        | `BIGINT` (PK)    | Unique policy ID |
| `name`      | `VARCHAR(255)`   | Policy name |
| `type`      | `ENUM('car', 'life', 'health', 'home')` | Type of insurance |
| `description` | `TEXT`        | Detailed policy description |
| `coverage`  | `TEXT`          | Coverage details |
| `price`     | `DECIMAL(10,2)` | Policy price |
| `created_at` | `TIMESTAMP`    | Policy creation timestamp |
| `updated_at` | `TIMESTAMP`    | Last updated timestamp |

---

### **4️⃣ Cart Table (`cart`)**
- Stores **policies added to a user's cart before purchase**.
- Helps users **proceed to checkout**.

#### **Key Fields**
| Column       | Type        | Description |
|-------------|-----------|-------------|
| `id`       | `BIGINT` (PK) | Unique cart item ID |
| `user_id`  | `BIGINT` (FK) | References `users(id)` |
| `policy_id`| `BIGINT` (FK) | References `policies(id)` |
| `added_at` | `TIMESTAMP`  | Timestamp when added to cart |

---

### **5️⃣ Orders Table (`orders`)**
- Stores **purchased policies** and tracks **order status**.
- Tracks **total amount and payment details** (via Stripe).

#### **Key Fields**
| Column         | Type             | Description |
|--------------|----------------|-------------|
| `id`        | `BIGINT` (PK)    | Unique order ID |
| `user_id`   | `BIGINT` (FK)    | References `users(id)` |
| `total_amount` | `DECIMAL(10,2)` | Total amount paid |
| `status`    | `ENUM('pending', 'paid', 'failed', 'cancelled')` | Order status |
| `payment_id` | `VARCHAR(255)`   | Stripe Payment ID |
| `created_at` | `TIMESTAMP`     | Order creation timestamp |
| `updated_at` | `TIMESTAMP`     | Last updated timestamp |

---

### **6️⃣ Order Items Table (`order_items`)**
- Links **orders** to **policies**.
- Supports **multiple policies per order**.

#### **Key Fields**
| Column       | Type        | Description |
|-------------|-----------|-------------|
| `id`       | `BIGINT` (PK) | Unique order item ID |
| `order_id` | `BIGINT` (FK) | References `orders(id)` |
| `policy_id`| `BIGINT` (FK) | References `policies(id)` |
| `quantity` | `INT`        | Number of policies purchased |
| `price`    | `DECIMAL(10,2)` | Price per policy at purchase time |

---

### **7️⃣ Claims Table (`claims`)**
- Allows users to **submit insurance claims** for purchased policies.
- Tracks the **status of claims** (pending, approved, rejected).

#### **Key Fields**
| Column      | Type             | Description |
|------------|----------------|-------------|
| `id`       | `BIGINT` (PK)    | Unique claim ID |
| `user_id`  | `BIGINT` (FK)    | References `users(id)` |
| `policy_id`| `BIGINT` (FK)    | References `policies(id)` |
| `status`   | `ENUM('pending', 'approved', 'rejected')` | Claim status |
| `submitted_at` | `TIMESTAMP`  | Submission timestamp |
| `updated_at` | `TIMESTAMP`    | Last updated timestamp |

---

### **8️⃣ Admin Analytics Table (`analytics`)**
- Stores **statistical data for admin insights**.

#### **Key Fields**
| Column         | Type        | Description |
|--------------|------------|-------------|
| `id`        | `BIGINT` (PK) | Unique analytics ID |
| `total_users` | `INT`      | Total registered users |
| `total_policies` | `INT`  | Total available policies |
| `total_orders` | `INT`    | Total completed orders |
| `revenue`   | `DECIMAL(10,2)` | Total revenue generated |
| `created_at` | `TIMESTAMP` | Timestamp for record |

---

This **completes the database schema** with all required tables. 
# 🏦 Insurance Policy Management System - Backend Architecture

## 📌 Overview
This document outlines the **backend architecture** for the **Insurance Policy Management System**, which follows a **microservices-based architecture**. The system is divided into **three main backend services** using **Node.js, Spring Boot, and MS .NET**, each handling specific functionalities.

---

## 🏗️ **Microservices Breakdown**
Each service is responsible for a specific part of the system and interacts with a **shared MySQL database** while communicating via **REST APIs**.

---

## 🔹 **1️⃣ User & Authentication Service** (Node.js - Express.js + MySQL)
Handles **user authentication, JWT-based authorization, profile management, and third-party logins**.

### 🔹 Responsibilities:
- **User Registration & Login** (Email + Password, Google, GitHub)
- **Profile Management** (Update user details, Upload Profile Picture)
- **JWT Authentication** (Access & Refresh Tokens)
- **Two-Factor Authentication (2FA)** via Email OTP
- **Role-Based Access Control (RBAC)** (User/Admin)
- **Forgot Password & Password Reset**
- **Logout & Token Revocation**
- **Payment Integration (Stripe API)**

### 🔹 API Endpoints:
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login user (JWT + 2FA) |
| POST | `/auth/oauth-login` | Third-party login (Google, GitHub) |
| POST | `/auth/forgot-password` | Request password reset OTP |
| POST | `/auth/reset-password` | Reset password |
| GET | `/users/profile` | Get user profile |
| PUT | `/users/update` | Update user details |
| POST | `/users/upload-profile-picture` | Upload profile picture |
| POST | `/auth/logout` | Logout and revoke JWT tokens |

---

## 🔹 **2️⃣ Policy, Claims & Orders Service** (Spring Boot + MySQL)
Handles **insurance policy management, premium calculations, claims processing, and orders**.

### 🔹 Responsibilities:
- **CRUD operations** for insurance policies
- **Premium Calculator** for different insurance types
- **Admin approval workflow** for policies
- **Claims submission & processing**
- **Orders & Payment Processing**
- **Data analytics for policy insights**

### 🔹 API Endpoints:
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/policies` | Get all policies |
| GET | `/policies/{id}` | Get policy by ID |
| POST | `/policies` | Create a new policy (Admin) |
| PUT | `/policies/{id}` | Update a policy (Admin) |
| DELETE | `/policies/{id}` | Delete a policy (Admin) |
| POST | `/claims/submit` | Submit a new insurance claim |
| GET | `/claims/status` | Check claim status |
| PUT | `/claims/update/{id}` | Update claim status (Admin) |
| POST | `/orders/place` | Place a new order |
| GET | `/orders/{id}` | Get order details |
| GET | `/orders/user/{userId}` | Get orders for a specific user |
| POST | `/payments/checkout` | Process payment via Stripe |
| GET | `/analytics/users` | Get total users |
| GET | `/analytics/orders` | Get total orders and revenue |

---

## 🔹 **3️⃣ Cart Management Service** (MS .NET + MySQL)
Handles **Cart Management** for users purchasing policies.

### 🔹 Responsibilities:
- **Add and Remove Insurance Policies from Cart**
- **View Cart Items**
- **Clear Cart on Checkout Completion**

### 🔹 API Endpoints:
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/cart` | Get cart items for a user |
| POST | `/cart/add` | Add a policy to cart |
| DELETE | `/cart/remove/{id}` | Remove policy from cart |
| DELETE | `/cart/clear` | Clear all items from cart |

---

## 🔗 **Service-to-Service Communication**
- **Node.js** handles authentication and user-related operations.
- **Spring Boot** fetches authenticated user details from the **User Service** via API.
- **Spring Boot** also manages **Orders and Payments**, ensuring a smooth transaction flow.
- **MS .NET** handles **Cart Management**, ensuring items are stored before an order is placed.
- Future plans: **Event-driven communication** via RabbitMQ or Kafka.

---

## 🛠️ **Technology Stack**
| Component | Technology |
|-----------|------------|
| **Frontend** | React.js (with Redux Toolkit) |
| **Backend Services** | Node.js (Express.js), Spring Boot, MS .NET (C#) |
| **Database** | MySQL |
| **Authentication** | JWT (Access & Refresh Tokens) |
| **Third-Party Logins** | Google, GitHub OAuth |
| **Payments** | Stripe API |
| **Messaging (Future Plan)** | RabbitMQ/Kafka |

---

## 🔐 **Security Measures**
✅ **JWT Authentication** (Access & Refresh Tokens)  
✅ **2FA Authentication** (Email OTP)  
✅ **OAuth Authentication** (Google, GitHub)  
✅ **Password Hashing** (Bcrypt)  
✅ **Role-Based Access Control (RBAC)**  
✅ **Secure Payment Processing** (Stripe)  

---

## 📌 **Conclusion**
This architecture ensures **scalability, maintainability, and high availability** for the **Insurance Policy Management System**. 🚀  
The division of services ensures efficient handling of authentication, policy management, claims processing, and cart handling.

---
**Summary**
- **Node.js only handles authentication, user management, and Stripe integration.**
- **Spring Boot takes care of policies, claims, orders, and payments.**
- **MS .NET is responsible for cart management.**
- **All APIs align with the finalized database schema (`db.sql`).**

