DROP DATABASE IF EXISTS chatroom;
CREATE DATABASE chatroom;
USE chatroom;

DROP TABLE IF EXISTS messages;
CREATE TABLE messages (
  `messageId` int NOT NULL AUTO_INCREMENT,
  `timestamp` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `text` varchar(255) DEFAULT NULL,
  `userId` varchar(100) DEFAULT NULL,
  `roomname` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`messageId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  `userId` int NOT NULL AUTO_INCREMENT,
  `name` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS friends;
CREATE TABLE friends (
  `friendsId` int NOT NULL AUTO_INCREMENT,
  `userId1` int DEFAULT NULL,
  `userId2` int DEFAULT NULL,
  PRIMARY KEY (`friendsId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;