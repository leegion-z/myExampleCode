-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 年 01 月 16 日 02:42
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
-- 表的结构 `message`
--

CREATE TABLE IF NOT EXISTS `message` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `content` varchar(400) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- 转存表中的数据 `message`
--

INSERT INTO `message` (`id`, `username`, `content`, `date`) VALUES
(1, '11111111', 'aaaaaaaaaaaaa', '2018-01-08 09:57:26'),
(2, '2222222', 'bbbbbbbbbbbb', '2018-01-09 09:57:48'),
(3, '33333333', ' ccccccccccccccccc', '2018-01-01 09:57:59'),
(4, '44444444444', 'ddddddddddddddddd', '2018-01-02 09:58:09'),
(5, '5555555555', 'eeeeeeeeeeeeeeeee', '2018-01-10 09:58:18'),
(6, '666666666', 'fffffffffffffffffffffff', '2018-01-11 09:58:27'),
(7, '77777777777', 'gggggggggggggg', '2018-01-05 09:58:39'),
(8, '888888888', 'hhhhhhhhhhhhhh', '2018-01-07 09:58:47'),
(9, '999999999999', 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii', '2018-01-12 09:59:06'),
(10, '10101010101', 'jjjjjjjjjjjjjjj', '2018-01-04 09:59:24');
