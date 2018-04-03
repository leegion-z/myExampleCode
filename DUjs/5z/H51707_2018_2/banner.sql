-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 01 月 16 日 01:47
-- 服务器版本: 5.5.8
-- PHP 版本: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `h51707`
--

-- --------------------------------------------------------

--
-- 表的结构 `banner`
--

CREATE TABLE IF NOT EXISTS `banner` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `bannerImg` varchar(200) NOT NULL,
  `bannerUrl` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- 转存表中的数据 `banner`
--

INSERT INTO `banner` (`id`, `bannerImg`, `bannerUrl`) VALUES
(1, 'https://static.maizuo.com/pc/v5/usr/movie/13ccbb13a8506755e3855d10376b4f31.jpg', 'https://www.baidu.com'),
(2, 'https://static.maizuo.com/pc/v5/usr/movie/d4b4e354b19bf13ed146d048414a483c.jpg', 'http://www.qq.com'),
(3, 'https://static.maizuo.com/pc/v5/usr/movie/ec335e8dbc1f255791b2b913b84e3cd2.jpg', 'http://www.qq.com'),
(4, 'https://static.maizuo.com/pc/v5/usr/movie/d44e5dfcb60df8ac39c101b21cd8bf9d.jpg', 'https://www.baidu.com'),
(5, 'https://static.maizuo.com/pc/v5/usr/movie/6f8d3193bc19f9a36e61abacd15b863a.jpg', 'https://www.baidu.com');
