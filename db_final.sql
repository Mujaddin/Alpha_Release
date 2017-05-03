-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2017 at 02:13 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finalproject`
--

-- --------------------------------------------------------

--
-- Table structure for table `gender`
--

CREATE TABLE `gender` (
  `idGender` int(11) NOT NULL,
  `gender` varchar(34) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gender`
--

INSERT INTO `gender` (`idGender`, `gender`) VALUES
(1, 'Male'),
(2, 'Female');

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `idLocation` int(11) NOT NULL,
  `Location` varchar(22) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `location`
--

INSERT INTO `location` (`idLocation`, `Location`) VALUES
(1, 'Yogyakarta'),
(2, 'Bandung'),
(3, 'Bali'),
(4, 'Jakarta');

-- --------------------------------------------------------

--
-- Table structure for table `t_employee`
--

CREATE TABLE `t_employee` (
  `id` int(8) NOT NULL,
  `lastname` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `firstname` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `gender` varchar(24) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `nation` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `maried` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `phone` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `subdiv` varchar(24) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `status` varchar(78) NOT NULL,
  `datesusp` date NOT NULL,
  `datehired` date NOT NULL,
  `division` varchar(24) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `grade` varchar(12) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(40) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `imgpath` varchar(255) DEFAULT NULL,
  `location` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_employee`
--

INSERT INTO `t_employee` (`id`, `lastname`, `firstname`, `gender`, `dob`, `nation`, `maried`, `phone`, `subdiv`, `status`, `datesusp`, `datehired`, `division`, `grade`, `email`, `imgpath`, `location`) VALUES
(1, 'Karin', 'Latuconsina', 'Female', '1992-01-21', 'Indonesian', 'Single', '+628237462113', 'Java BootCamp', 'Contract', '0000-00-00', '2013-05-01', 'CDC AsteRx', 'SE-PG', 'Latuconsina.Karin@mitrais.com', '../../assets/anna12.jpg', 'jakarta'),
(2, 'Khadafi', 'Muhammad', 'Male', '1982-12-22', 'Indonesian', 'Married', '+627495723022', 'Services', 'dada', '0000-00-00', '0000-09-22', 'SWD-RED', 'AP-01', 'khadafi@mitrais.com', '../../assets/Barry11.jpg', 'jakarta'),
(3, 'Saraphova', 'Maria', 'Female', '1987-04-16', 'Indonesian', 'Single', '+61752839234', 'Analyst', 'Permanent', '2017-05-27', '2010-04-27', 'Services', 'AN-1', 'maria.saraphova@mitrais.com', '../../assets/maria.jpg', 'bandung'),
(4, 'Berry', 'Bernard', 'Male', '1988-02-11', 'Indonesian', 'Single', '+6294745741', 'Programmer', 'active', '2017-08-25', '2014-10-10', 'Services', 'JP 01', 'bernard.berry@mitrais.com', '../../assets/Barry11.jpg', 'bali'),
(5, 'Andy', 'Muhammad', 'Male', '2017-04-11', 'Indonesian', 'Single', '081554267562', 'Junior Programmer', 'active', '2017-04-27', '2017-04-27', 'Services', 'JP 01', 'muhammad.jamaluddin@mitrais.com', '../../assets/andy3.jpg', 'bandung'),
(6, 'Desraino', 'Anggi', 'Male', '1993-12-23', 'Indonesian', 'Single', '081554267562', 'Junior Programmer', 'Contract', '2017-04-12', '2017-04-02', 'Services', 'JP-01', 'desraino@gmail.com', '../../assets/bill2.jpg', 'bali'),
(7, 'Arkhandi', 'Muhammad', 'Male', '1988-10-22', 'Indonesian', 'Married', '+627444425022', 'Services', 'Contract', '0000-00-00', '1980-09-22', 'SWD-BLUE', 'PG-04', 'arkhandi@mitrais.com', '../../assets/andy2.jpg', 'yogyakarta'),
(8, 'Jennifer', 'Maria', 'Female', '1989-10-17', 'Australian', 'Married', '+56999222344', 'React Bootcamp', 'Permanent', '0000-00-00', '2014-05-01', 'SWD-RED', 'AP-02', 'desraino@gmail.com', '../../assets/jennifer1.jpg', 'bandung'),
(16, 'Deep', 'Jhonny', 'Male', '1978-10-22', 'American', 'Married', '+01752324022', 'Product', 'Contract', '0000-00-00', '1999-09-22', 'SWD-BLUE', 'AN-04', 'jhonny.deep@andy.com', '../../assets/jhonny.jpg', 'bandung'),
(17, 'Liu', 'Anggoro', 'Male', '1981-10-22', 'Chinese', 'Married', '+21752324022', 'Product', 'Contract', '0000-00-00', '2009-09-22', 'SWD-BLUE', 'AN-04', 'andy.liu@andy.com', '../../assets/liu2.jpg', 'bali'),
(19, 'Sunarto', 'Ronaldo', 'Male', '1985-04-23', 'Indonesian', 'Married', '+62442324022', 'Product', 'Contract', '0000-00-00', '2009-09-22', 'SWD-GREEN', 'AN-04', 'ronaldo.cris@andy.com', '../../assets/Ronaldo-1.jpg', 'yogyakarta'),
(20, 'Gonzales', 'Ronaldo', 'Male', '1985-04-22', 'Indonesian', 'Married', '+62442324022', 'Product', 'Contract', '0000-00-00', '2009-09-22', 'SWD-GREEN', 'AN-04', 'ronaldo.cris@andy.com', '../../assets/jovi2.jpg', 'bandung');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`idLocation`);

--
-- Indexes for table `t_employee`
--
ALTER TABLE `t_employee`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `idLocation` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `t_employee`
--
ALTER TABLE `t_employee`
  MODIFY `id` int(8) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
