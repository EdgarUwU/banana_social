create database banana_social;
use banana_social;

CREATE TABLE `banana_social`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(50) NOT NULL,
  `contrasena` VARCHAR(50) NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,
  `apellido_paterno` VARCHAR(50) NULL,
  `apellido_materno` VARCHAR(50) NULL,
  `correo_electronico` VARCHAR(254) NULL,
  `tipo_usuario` SMALLINT NOT NULL,
  `created_by` VARCHAR(50) NOT NULL DEFAULT 'CURRENT_USER',
  `created_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `delate` SMALLINT UNSIGNED NOT NULL DEFAULT 0,
  `modified_by` VARCHAR(50) NULL,
  `modified_date` VARCHAR(50) NULL,
  `id_publicaciones` SMALLINT NOT NULL AUTO_INCREMENT,
  `id_comentarios` SMALLINT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  foreign key (`id_publicaciones`) references publicaciones (`id`),
  foreign key (`id_comentarios`) references comentarios (`id`),
  foreign key (`tipo_usuario`) references `banana_social`.`tipo_usuario`(`id`)
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE);


  CREATE TABLE `banana_social`.`publicaciones` (
  `id_publicaciones` SMALLINT NOT NULL AUTO_INCREMENT,
  `puclicaciones` VARCHAR(45) NOT NULL,
  `created_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_by` VARCHAR(50) NULL,
  `modified_date` VARCHAR(50) NULL,
  PRIMARY KEY (`id_publicaciones`));

  CREATE TABLE `banana_social`.`comentarios` (
  `id_comentarios` SMALLINT NOT NULL AUTO_INCREMENT,
  `comentarios` VARCHAR(45) NOT NULL,
  `created_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_by` VARCHAR(50) NULL,
  `modified_date` VARCHAR(50) NULL,
  'id_user' SMALLINT NOT NULL,
  'id_publicaciones' SMALLINT NOT NULL,
  foreign key (`id_user`) references usuarios (`id`),
  foreign key (`id_publicaciones`) references publicaciones (`id_publicaciones`),
  PRIMARY KEY (`id_comentarios`));
