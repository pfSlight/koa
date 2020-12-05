/*
 Navicat MySQL Data Transfer
 Source Server         : l-node
 Source Server Version : 80011
 Source Host           : localhost
 Source Database       : lottery
 Target Server Version : 80011
 File Encoding         : utf-8
 Date: 06/12/2018 15:51:58 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `_mysql_session_store`
-- ----------------------------
DROP TABLE IF EXISTS `_mysql_session_store`;
CREATE TABLE `_mysql_session_store` (
  `id` varchar(255) NOT NULL,
  `expires` bigint(20) DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Table structure for `lottery_admin`
-- ----------------------------
DROP TABLE IF EXISTS `lottery_admin`;
CREATE TABLE `lottery_admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键，自增',
  `account` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '账号',
  `phone` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '手机号',
  `password` varchar(16) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `create_time` mediumtext NOT NULL COMMENT '被创建时间',
  `creator` varchar(20) NOT NULL COMMENT '创建人',
  `name` varchar(20) NOT NULL COMMENT '姓名',
  `type` int(11) NOT NULL COMMENT '类型',
  `status` int(11) DEFAULT NULL COMMENT '状态，是否被删（404为被删，300为异常，200为正常）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Records of `lottery_admin`
-- ----------------------------
BEGIN;
INSERT INTO `lottery_admin` VALUES ('1', 'test', '13212312321', '123456', '2018-05-28 17:10:34', 'Admin', 'test', '1', '0'), ('2', 'test', '13212312321', '123456', '2018-05-28 17:11:20', 'Admin', 'test', '1', '0'), ('3', 'test', '13212312321', '123456', '2018-05-28 17:12:26', 'Admin', 'test', '1', '0'), ('4', 'test', '13212312321', '123456', '2018-05-28 17:26:31', 'Admin', 'test', '1', '0');
COMMIT;

-- ----------------------------
--  Table structure for `lottery_order`
-- ----------------------------
DROP TABLE IF EXISTS `lottery_order`;
CREATE TABLE `lottery_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(10) NOT NULL,
  `shop_id` varchar(16) NOT NULL,
  `lotter_number` varchar(300) NOT NULL,
  `total_money` decimal(8,2) NOT NULL,
  `order_time` mediumtext NOT NULL,
  `status` int(11) DEFAULT NULL,
  `extra_info` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Table structure for `lottery_shop`
-- ----------------------------
DROP TABLE IF EXISTS `lottery_shop`;
CREATE TABLE `lottery_shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(16) NOT NULL,
  `address` varchar(200) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `create_time` mediumtext,
  `business_no` varchar(13) NOT NULL,
  `status` int(11) DEFAULT NULL,
  `extra_info` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Table structure for `lottery_ticket`
-- ----------------------------
DROP TABLE IF EXISTS `lottery_ticket`;
CREATE TABLE `lottery_ticket` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '期数编号',
  `type_id` int(11) NOT NULL COMMENT '类型编号',
  `period` int(11) NOT NULL COMMENT '第几期',
  `boom_time` bigint(20) NOT NULL COMMENT '开奖时间',
  `create_time` bigint(20) NOT NULL,
  `boom_number` varchar(500) NOT NULL COMMENT '获奖号码',
  `winning_number` varchar(500) DEFAULT NULL COMMENT '获奖号码',
  `prize` decimal(10,0) NOT NULL DEFAULT '0' COMMENT '奖金池',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '期号开奖状态',
  `extra_info` varchar(500) NOT NULL DEFAULT '' COMMENT '补充的信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Table structure for `lottery_type`
-- ----------------------------
DROP TABLE IF EXISTS `lottery_type`;
CREATE TABLE `lottery_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键，自增',
  `name` varchar(120) NOT NULL COMMENT '名称',
  `create_time` bigint(20) NOT NULL COMMENT '创建时间',
  `creator` varchar(60) NOT NULL COMMENT '创建人',
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '类型状态（是否已被弃用）',
  `extra_info` varchar(200) NOT NULL DEFAULT ' ' COMMENT '备注',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- ----------------------------
--  Table structure for `lottery_user`
-- ----------------------------
DROP TABLE IF EXISTS `lottery_user`;
CREATE TABLE `lottery_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `password` varchar(16) NOT NULL,
  `create_time` bigint(20) NOT NULL,
  `last_bet_time` bigint(20) DEFAULT NULL,
  `car_no` varchar(18) DEFAULT NULL,
  `balance` decimal(8,2) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `extra_info` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SET FOREIGN_KEY_CHECKS = 1;