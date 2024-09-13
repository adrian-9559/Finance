-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.38 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para finance
CREATE DATABASE IF NOT EXISTS `finance` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `finance`;

-- Volcando estructura para tabla finance.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `nombre_categoria` varchar(100) NOT NULL,
  `tipo_categoria` enum('Ingreso','Gasto') NOT NULL,
  PRIMARY KEY (`id_categoria`),
  KEY `id_usuario` (`id_usuario`),
  KEY `nombre_categoria` (`nombre_categoria`),
  CONSTRAINT `categorias_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla finance.categorias: ~0 rows (aproximadamente)

-- Volcando estructura para tabla finance.configuracion_usuario
CREATE TABLE IF NOT EXISTS `configuracion_usuario` (
  `id_configuracion` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `tema_interfaz` enum('Claro','Oscuro') DEFAULT 'Claro',
  `idioma` varchar(50) DEFAULT 'Español',
  `notificaciones` tinyint(1) DEFAULT '1',
  `frecuencia_alertas` enum('Diaria','Semanal','Mensual') DEFAULT 'Mensual',
  PRIMARY KEY (`id_configuracion`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `configuracion_usuario_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla finance.configuracion_usuario: ~0 rows (aproximadamente)

-- Volcando estructura para tabla finance.informes_financieros
CREATE TABLE IF NOT EXISTS `informes_financieros` (
  `id_informe` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `periodo_inicio` date NOT NULL,
  `periodo_fin` date NOT NULL,
  `total_ingresos` decimal(15,2) DEFAULT '0.00',
  `total_gastos` decimal(15,2) DEFAULT '0.00',
  `fecha_generacion` datetime DEFAULT CURRENT_TIMESTAMP,
  `tipo_informe` enum('Mensual','Anual','Personalizado') NOT NULL,
  `archivo_informe` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_informe`),
  KEY `id_usuario` (`id_usuario`),
  KEY `fecha_generacion` (`fecha_generacion`),
  CONSTRAINT `informes_financieros_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla finance.informes_financieros: ~0 rows (aproximadamente)

-- Volcando estructura para tabla finance.objetivos_ahorro
CREATE TABLE IF NOT EXISTS `objetivos_ahorro` (
  `id_objetivo_ahorro` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `nombre_objetivo` varchar(100) NOT NULL,
  `monto_meta` decimal(15,2) NOT NULL,
  `monto_actual` decimal(15,2) DEFAULT '0.00',
  `fecha_limite` date NOT NULL,
  `prioridad` enum('Alta','Media','Baja') NOT NULL,
  PRIMARY KEY (`id_objetivo_ahorro`),
  KEY `id_usuario` (`id_usuario`),
  KEY `fecha_limite` (`fecha_limite`),
  CONSTRAINT `objetivos_ahorro_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla finance.objetivos_ahorro: ~0 rows (aproximadamente)

-- Volcando estructura para tabla finance.transacciones
CREATE TABLE IF NOT EXISTS `transacciones` (
  `id_transaccion` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `id_categoria` int NOT NULL,
  `tipo_transaccion` enum('Ingreso','Gasto') NOT NULL,
  `monto` decimal(15,2) NOT NULL,
  `fecha_transaccion` datetime DEFAULT CURRENT_TIMESTAMP,
  `descripcion` varchar(255) DEFAULT NULL,
  `metodo_pago` varchar(50) DEFAULT NULL,
  `recurrente` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id_transaccion`),
  KEY `id_usuario` (`id_usuario`),
  KEY `id_categoria` (`id_categoria`),
  KEY `fecha_transaccion` (`fecha_transaccion`),
  CONSTRAINT `transacciones_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`),
  CONSTRAINT `transacciones_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla finance.transacciones: ~0 rows (aproximadamente)

-- Volcando estructura para tabla finance.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `fecha_registro` datetime DEFAULT CURRENT_TIMESTAMP,
  `telefono` varchar(20) DEFAULT NULL,
  `moneda_preferida` varchar(10) DEFAULT 'USD',
  `tipo_autenticacion` enum('Normal','2FA') DEFAULT 'Normal',
  `estado_cuenta` enum('Activo','Inactivo') DEFAULT 'Activo',
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `correo` (`correo`),
  KEY `correo_2` (`correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Volcando datos para la tabla finance.usuarios: ~0 rows (aproximadamente)

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
