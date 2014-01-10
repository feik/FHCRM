/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : xcrm

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2014-01-10 14:01:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `fh_customer_abroad`
-- ----------------------------
DROP TABLE IF EXISTS `fh_customer_abroad`;
CREATE TABLE `fh_customer_abroad` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `country` varchar(255) CHARACTER SET utf8 NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8 NOT NULL,
  `qq` int(10) NOT NULL,
  `sex` int(1) NOT NULL DEFAULT '1' COMMENT '客户性别(1:男|0:女)',
  `is_vip` int(1) NOT NULL DEFAULT '0' COMMENT '客户类别(1:VIP客户|0:普通客户)',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of fh_customer_abroad
-- ----------------------------
INSERT INTO `fh_customer_abroad` VALUES ('1', 'Tiina Alho', 'Finland', 'tiina.alho@gmail.com', '0405303228', '0', '0', '0');

-- ----------------------------
-- Table structure for `fh_customer_cn`
-- ----------------------------
DROP TABLE IF EXISTS `fh_customer_cn`;
CREATE TABLE `fh_customer_cn` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of fh_customer_cn
-- ----------------------------

-- ----------------------------
-- Table structure for `fh_product`
-- ----------------------------
DROP TABLE IF EXISTS `fh_product`;
CREATE TABLE `fh_product` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `sku` varchar(10) CHARACTER SET utf8 NOT NULL,
  `stock` int(5) NOT NULL,
  `content` longtext CHARACTER SET utf8 NOT NULL,
  `weight` decimal(10,2) NOT NULL,
  `p_price` decimal(10,2) NOT NULL,
  `r_price` decimal(10,2) NOT NULL,
  `picture` varchar(255) CHARACTER SET utf8 NOT NULL,
  `date` varchar(10) CHARACTER SET utf8 NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `platform_id` int(11) NOT NULL,
  `status` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=236 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of fh_product
-- ----------------------------
INSERT INTO `fh_product` VALUES ('223', '122121', '548216', '1', '12121', '12.00', '112.00', '12.00', '520b8e2b74c85.jpg', '2013-08-14', '0', '0', '1');
INSERT INTO `fh_product` VALUES ('224', '31121', '267193', '1', '11221', '12.00', '11.00', '12.00', '520b8e3e1f925.jpg', '2013-08-14', '0', '0', '1');
INSERT INTO `fh_product` VALUES ('225', '21312', '723165', '1', '121221', '12.00', '12.00', '12.00', '520b8e4c98ad5.jpg', '2013-08-14', '0', '0', '1');
INSERT INTO `fh_product` VALUES ('226', '212112', '718429', '1', '122112', '1221.00', '12.00', '1221.00', '520b8e5c83682.jpg', '2013-08-14', '0', '0', '1');
INSERT INTO `fh_product` VALUES ('227', '213213', '534678', '213', '21221', '2.00', '212.00', '21.00', '520b8e7205842.jpg', '2013-08-14', '0', '0', '1');
INSERT INTO `fh_product` VALUES ('228', '213', '342957', '21', '21312', '21.00', '213.00', '213.00', '520b8e8157551.jpg', '2013-08-14', '0', '0', '1');
INSERT INTO `fh_product` VALUES ('229', '2121', '695384', '1', '21321', '21.00', '0.00', '213.00', '520b8e91c245e.jpg', '2013-08-14', '0', '0', '1');
INSERT INTO `fh_product` VALUES ('230', '213', '375814', '213', '213213', '21.00', '221.00', '21.00', '520b8ea4c5436.jpg', '2013-08-14', '0', '0', '1');
INSERT INTO `fh_product` VALUES ('231', '21312', '439257', '212', '21212', '2.00', '21.00', '21.00', '520b8eb120d83.jpg', '2013-08-14', '0', '0', '1');
INSERT INTO `fh_product` VALUES ('232', '2121', '246837', '12', '211', '12.00', '12.00', '12.00', '520b8ec21c73a.jpg', '2013-08-14', '0', '0', '1');
INSERT INTO `fh_product` VALUES ('233', '211221', '382956', '21', '1221', '2.00', '12.00', '21.00', '520b8edbd6178.jpg', '2013-08-14', '0', '0', '1');
INSERT INTO `fh_product` VALUES ('234', '3221', '198254', '1', '212221', '1.00', '21.00', '21.00', '520b9141dab9e.jpg', '2013-08-14', '0', '0', '1');
INSERT INTO `fh_product` VALUES ('235', '相去甚远', '973462', '1', 'dffasfasfdas', '32.00', '23.00', '23.00', '52108f08249ad.jpg', '2013-08-18', '0', '0', '1');

-- ----------------------------
-- Table structure for `fh_supplier`
-- ----------------------------
DROP TABLE IF EXISTS `fh_supplier`;
CREATE TABLE `fh_supplier` (
  `sid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of fh_supplier
-- ----------------------------
INSERT INTO `fh_supplier` VALUES ('1', '小王');
INSERT INTO `fh_supplier` VALUES ('2', '小李');

-- ----------------------------
-- Table structure for `fh_user`
-- ----------------------------
DROP TABLE IF EXISTS `fh_user`;
CREATE TABLE `fh_user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键UID',
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '用户密码',
  `ctime` datetime NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fh_user
-- ----------------------------
INSERT INTO `fh_user` VALUES ('1', 'admin', '21232f297a57a5a743894a0e4a801fc3', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for `fh_user_group`
-- ----------------------------
DROP TABLE IF EXISTS `fh_user_group`;
CREATE TABLE `fh_user_group` (
  `user_group_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_group_name` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`user_group_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of fh_user_group
-- ----------------------------
INSERT INTO `fh_user_group` VALUES ('1', '管理员');
INSERT INTO `fh_user_group` VALUES ('2', '采购');

-- ----------------------------
-- Table structure for `fh_user_group_link`
-- ----------------------------
DROP TABLE IF EXISTS `fh_user_group_link`;
CREATE TABLE `fh_user_group_link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `user_group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of fh_user_group_link
-- ----------------------------
INSERT INTO `fh_user_group_link` VALUES ('1', '1', '1');
