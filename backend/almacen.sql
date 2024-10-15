-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-10-2024 a las 10:15:17
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `almacen`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `calendar`
--

CREATE TABLE `calendar` (
  `id` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `start` varchar(45) NOT NULL,
  `end` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `calendar`
--

INSERT INTO `calendar` (`id`, `title`, `start`, `end`) VALUES
(1, 'Master clase', '2024-10-13', NULL),
(43, 'Auditoria1', '2024-10-18 00:00:00', '2024-10-18 00:00:00'),
(44, 'Auditoria2', '2024-11-10 00:00:00', '2024-11-10 00:00:00'),
(45, 'Fiesta Halloween 🎃 ', '2024-10-31 00:00:00', '2024-10-31 00:00:00'),
(47, 'Visita guiada', '2024-10-07 00:00:00', '2024-10-07 00:00:00'),
(48, 'Clase Angular', '2024-10-15 00:00:00', '2024-10-15 00:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `charts`
--

CREATE TABLE `charts` (
  `name` varchar(100) NOT NULL,
  `data` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `charts`
--

INSERT INTO `charts` (`name`, `data`) VALUES
('bar', '{\r\n  \"labels\": [\"2024-01-10\", \"2024-01-11\", \"2024-01-12\", \"2024-01-13\", \"2024-01-14\", \"2024-01-15\"],\r\n  \"datasets\": [\r\n    {\r\n      \"label\": \"Graphic Cards Sales (units)\",\r\n      \"data\": [\"120\", \"135\", \"140\", \"100\", \"90\", \"110\"],\r\n      \"backgroundColor\": \"#a5b4fc\"\r\n    },\r\n    {\r\n      \"label\": \"Gaming Consoles Sales (units)\",\r\n      \"data\": [\"200\", \"220\", \"215\", \"180\", \"170\", \"190\", \"230\", \"240\"],\r\n      \"backgroundColor\": \"#f87171\"\r\n    }\r\n  ]\r\n}\r\n\r\n'),
('doughnut', '{\r\n    \"datasets\": [\r\n        {\r\n            \"data\": [\r\n                10,\r\n                20,\r\n                30\r\n            ],\r\n            \"backgroundColor\": [\r\n                \"#c084fc\", \r\n                \"#a5b4fc\", \r\n                \"#f87171\"\r\n            ],\r\n            \"borderWidth\": 0\r\n        }\r\n    ],\r\n    \"labels\": [\r\n        \"Electronics\",\r\n        \"Clothing\",\r\n        \"Make up\"\r\n    ]\r\n}\r\n');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marker`
--

CREATE TABLE `marker` (
  `longitude` float NOT NULL,
  `latitude` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `marker`
--

INSERT INTO `marker` (`longitude`, `latitude`) VALUES
(41.3924, 2.15369),
(2.15899, 41.3888),
(2.1572, 41.387),
(2.16899, 41.39),
(1.15899, 42.3888),
(2.154, 41.4888),
(2.1563, 41.3895),
(2.1552, 41.3923);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `price` double NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `name`, `description`, `price`, `stock`) VALUES
(16, 'Cascos', 'Cascos para gamers', 275, 15),
(17, 'Teclado', 'Teclado para tablat', 64.99, 12),
(19, 'Disco duro', '1 tera ', 89.99, 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `calendar`
--
ALTER TABLE `calendar`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `charts`
--
ALTER TABLE `charts`
  ADD PRIMARY KEY (`name`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `calendar`
--
ALTER TABLE `calendar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
