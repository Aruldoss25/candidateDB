
# Candidate Registration Website (MySQL Version)

## Setup Locally
```bash
npm install
npm start
```

## MySQL Setup (Local or EC2)
```bash
sudo apt update
sudo apt install mysql-server -y
sudo service mysql start

# Secure it and login
sudo mysql -u root
CREATE DATABASE candidateDB;
CREATE USER 'root'@'localhost' IDENTIFIED BY 'yourpassword';
GRANT ALL PRIVILEGES ON candidateDB.* TO 'root'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

## Environment Setup
Edit `.env` with:
```
MYSQL_DB=candidateDB
MYSQL_USER=root
MYSQL_PASSWORD=yourpassword
MYSQL_HOST=localhost
PORT=5000
```

## Deploy to AWS EC2 (Ubuntu 22.04)

1. Launch EC2 Instance (Ubuntu) & SSH into it
2. Install Node.js & MySQL as shown above
3. Clone project & configure environment
```bash
git clone https://your-repo-url.git
cd candidate-registration
npm install
npm start
```
4. Allow traffic on port 5000 in AWS security group
5. Update `index.html` with EC2 public IP
