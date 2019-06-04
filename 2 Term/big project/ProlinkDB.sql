-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: localhost    Database: prolink
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.36-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `company_credentials`
--

DROP TABLE IF EXISTS `company_credentials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_credentials` (
  `cno` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(100) NOT NULL,
  `mailing_address` varchar(100) NOT NULL,
  `phone_number` int(11) NOT NULL,
  `email_id` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`cno`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_credentials`
--

LOCK TABLES `company_credentials` WRITE;
/*!40000 ALTER TABLE `company_credentials` DISABLE KEYS */;
INSERT INTO `company_credentials` VALUES (1,'s1','133ds',123,'mail2rsdeep@gmai.com','123'),(2,'s1','133ds',123,'mail2rsdeep@gmai.com','123'),(3,'s1','133ds',123,'mail2rsdeep@gmai.com','123');
/*!40000 ALTER TABLE `company_credentials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seeker_credentials`
--

DROP TABLE IF EXISTS `seeker_credentials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seeker_credentials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firastname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `emailid` varchar(50) NOT NULL,
  `mobile` int(11) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seeker_credentials`
--

LOCK TABLES `seeker_credentials` WRITE;
/*!40000 ALTER TABLE `seeker_credentials` DISABLE KEYS */;
INSERT INTO `seeker_credentials` VALUES (1,'ZC','CCX','XCX',0,'E55'),(2,'Depak','k','mail2rsdeep@gmai.com',0,'1233');
/*!40000 ALTER TABLE `seeker_credentials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'prolink'
--

--
-- Dumping routines for database 'prolink'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-14  5:17:54
