CREATE USER 'ajax1718FF'@'localhost' IDENTIFIED BY 'dwec1718';

GRANT USAGE ON * . * TO 'ajax1718FF'@'localhost' IDENTIFIED BY 'dwec1718' WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0 ;

CREATE DATABASE IF NOT EXISTS `ajax1718` ;

GRANT ALL PRIVILEGES ON `ajax1718` . * TO 'ajax1718FF'@'localhost';

use  `ajax1718`;


CREATE TABLE IF NOT EXISTS `viajescomprados` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
   `descripcion` varchar(150) NOT NULL,
   `email` varchar(50) NOT NULL,
   `num` int(3) unsigned NOT NULL,
   `precio` int(10) unsigned NOT NULL,
   `numerotarjeta` int(16) unsigned NOT NULL,
   `csv` int(3) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;



INSERT INTO `viajescomprados` (`id`, `nombre`, `descripcion`, `email`, `num`, `precio`,`numerotarjeta`,`csv`) VALUES
(1, 'Lara Rodriguez','Viaje en globo', 'jesus@hotmail.com', '3', '900', '1234123412341234', '942'),
(2, 'Mario García','Spa fin de semana', 'sandra@hotmail.com', '2','250', '2222333344445555', '333'),
(3, 'Andres Sanchez','Viaje en globo', 'cristina@hotmail.com', '1','300', '2222333355551111',  '933'),
(4, 'Marta Campos','Marrakech 3 dias', 'jose@hotmail.com', '3','600', '4444555566668888', '882'),
(5, 'Gadea Gil','Spa fin de semana', 'santos@gmail.com', '1', '125', '4569785423145698', '345'),
(6, 'Jorge Izquierdo','Marrakech 3 dias', 'martita@hotmail.com','2','400', '1111116666555333', '230'),
(7, 'Marta Castro','Roma puente carnaval', 'santos@gmail.com', '2', '700', '4569785423145698', '345'),
(8, 'Alejandro Ugalde','Marrakech 3 dias', 'alejandro@hotmail.com','3','600', '5555666644443333', '555'),
(9, 'Jorge Pascual','Roma puente carnaval', 'jpascual@hotmail.com','1','350', '5555666699997777','733');