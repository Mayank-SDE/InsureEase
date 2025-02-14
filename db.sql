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
