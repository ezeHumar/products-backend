-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: localhost    Database: products
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20210605180548-create_products_table.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `description` varchar(3000) NOT NULL,
  `price` float NOT NULL,
  `imageURL` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (42,'Zapatillas','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis neque vitae odio condimentum hendrerit. Aliquam aliquam blandit tempor. Cras at elit sit amet eros lobortis tristique. Suspendisse quis suscipit orci, pulvinar dictum nibh. In vel faucibus dui. Nulla facilisi. Duis ac convallis nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean tincidunt enim vitae sapien finibus efficitur. Phasellus lobortis massa eget nisi lacinia blandit. ',8500,'images/2021-06-07T06:14:18.462Z3845156_1.jpeg','2021-06-07 06:14:18','2021-06-07 06:14:18'),(43,'Teclado','Aenean ut massa faucibus, dignissim sem sit amet, bibendum tellus. Integer interdum vestibulum magna in vulputate. Maecenas mattis faucibus pellentesque. Nullam molestie varius sapien, non dictum nisl commodo sed. Morbi tempor nibh at ipsum vulputate sagittis. ',998.99,'images/2021-06-07T06:14:52.033Zk120_11-c48d1e2f354a86573a15398975703670-1024-1024.jpg','2021-06-07 06:14:52','2021-06-07 06:14:52'),(44,'Celular','Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer interdum suscipit viverra. Sed vitae congue neque. Ut commodo elit sed ipsum vulputate, nec vehicula leo condimentum. Nulla in sem auctor, volutpat neque at, sollicitudin felis. Nullam efficitur porttitor lobortis.',45000,'images/2021-06-07T06:15:34.307Zindex.jpeg','2021-06-07 06:15:34','2021-06-07 06:15:34'),(45,'Auriculares',' Donec fermentum feugiat semper. Sed sed rutrum urna. Mauris molestie interdum lectus ut commodo. Duis tincidunt imperdiet viverra. Aliquam eleifend nisl nibh, ut dapibus justo dictum id. Mauris id molestie elit. Quisque in nisi odio. Proin et ante posuere, vulputate mauris id, feugiat urna.\n\nSed enim ipsum, facilisis a elementum vel, laoreet eget urna. Phasellus eget tincidunt metus. Integer et pretium ante. Fusce accumsan bibendum sapien non imperdiet. In varius neque in lacinia consequat. Donec porta ligula sed accumsan auctor. Donec rutrum risus at nisi sagittis ullamcorper. Nullam sollicitudin tristique egestas. Sed magna lectus, vestibulum vel nulla a, aliquet aliquam orci. In eget laoreet risus, in vehicula nibh. Quisque ante magna, varius sed erat vitae, tincidunt iaculis nunc. Etiam sed tempor lorem, non vestibulum elit. Morbi luctus est ante, a maximus erat aliquet vel. In eget nisi placerat, venenatis velit vel, imperdiet arcu. ',6400,'images/2021-06-07T06:16:14.932Zb731fdc975d0aa9dceb25a29968084a3.jpeg','2021-06-07 06:16:14','2021-06-07 06:16:14'),(58,'Taza','Praesent in tellus nibh. Donec aliquet massa nisl, vitae dictum mauris dictum non. Quisque in mollis lacus. Etiam ut metus nulla. Cras dapibus accumsan aliquet. Morbi faucibus, magna commodo egestas auctor, ex ligula laoreet urna, id pellentesque leo quam at augue. Maecenas consequat leo convallis augue egestas luctus. ',250,'images/2021-06-07T06:39:05.920Ztaza.jpeg','2021-06-07 06:39:05','2021-06-07 06:39:05');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-07  3:42:14
