-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2017 at 02:08 AM
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
  `Id` int(8) NOT NULL,
  `name_last` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `name_first` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `gender` varchar(24) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `date_birth` date DEFAULT NULL,
  `nationality` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `marital` varchar(10) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `mobile_no` varchar(15) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `div_sub` varchar(24) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `status` varchar(78) NOT NULL,
  `date_susp` date NOT NULL,
  `date_hired` date NOT NULL,
  `div_main` varchar(24) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `grade` varchar(12) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `email` varchar(40) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `img_employee` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `t_employee`
--

INSERT INTO `t_employee` (`Id`, `name_last`, `name_first`, `gender`, `date_birth`, `nationality`, `marital`, `mobile_no`, `div_sub`, `status`, `date_susp`, `date_hired`, `div_main`, `grade`, `email`, `img_employee`) VALUES
(1, 'Karin', 'Latuconsina', 'Female', '1992-01-21', 'Indonesian', 'Single', '+628237462113', 'Java BootCamp', 'Contract', '0000-00-00', '2013-05-01', 'CDC AsteRx', 'SE-PG', 'Latuconsina.Karin@mitrais.com', '../../assets/anna12.jpg'),
(2, 'Khadafi', 'Muhammad', 'Male', '1982-12-22', 'Indonesian', 'Married', '+627495723022', 'Services', 'dada', '0000-00-00', '0000-09-22', 'SWD-RED', 'AP-01', 'khadafi@mitrais.com', '../../assets/Barry11.jpg'),
(3, 'Saraphova', 'Maria', 'Female', '1987-04-16', 'Indonesian', 'Single', '+61752839234', 'Analyst', 'Permanent', '2017-05-27', '2010-04-27', 'Services', 'AN-1', 'maria.saraphova@mitrais.com', '../../assets/maria.jpg'),
(4, 'Berry', 'Bernard', 'Male', '1988-02-11', 'Indonesian', 'Single', '+6294745741', 'Programmer', 'active', '2017-08-25', '2014-10-10', 'Services', 'JP 01', 'bernard.berry@mitrais.com', '../../assets/Barry11.jpg'),
(5, 'Andy', 'Muhammad', 'Male', '2017-04-11', 'Indonesian', 'Single', '081554267562', 'Junior Programmer', 'active', '2017-04-27', '2017-04-27', 'Services', 'JP 01', 'muhammad.jamaluddin@mitrais.com', '../../assets/andy3.jpg'),
(6, 'Desraino', 'Anggi', 'Male', '1993-12-23', 'Indonesian', 'Single', '081554267562', 'Junior Programmer', 'Contract', '2017-04-12', '2017-04-02', 'Services', 'JP-01', 'desraino@gmail.com', '../../assets/bill2.jpg'),
(7, 'Arkhandi', 'Muhammad', 'Male', '1988-10-22', 'Indonesian', 'Married', '+627444425022', 'Services', 'Contract', '0000-00-00', '1980-09-22', 'SWD-BLUE', 'PG-04', 'arkhandi@mitrais.com', '../../assets/andy2.jpg'),
(8, 'Jennifer', 'Maria', 'Female', '1989-10-17', 'Australian', 'Married', '+56999222344', 'React Bootcamp', 'Permanent', '0000-00-00', '2014-05-01', 'SWD-RED', 'AP-02', 'desraino@gmail.com', '../../assets/jennifer1.jpg'),
(16, 'Deep', 'Jhonny', 'Male', '1978-10-22', 'American', 'Married', '+01752324022', 'Product', 'Contract', '0000-00-00', '1999-09-22', 'SWD-BLUE', 'AN-04', 'jhonny.deep@andy.com', '../../assets/jhonny.jpg'),
(17, 'Liu', 'Anggoro', 'Male', '1981-10-22', 'Chinese', 'Married', '+21752324022', 'Product', 'Contract', '0000-00-00', '2009-09-22', 'SWD-BLUE', 'AN-04', 'andy.liu@andy.com', '../../assets/liu2.jpg'),
(19, 'Sunarto', 'Ronaldo', 'Male', '1985-04-23', 'Indonesian', 'Married', '+62442324022', 'Product', 'Contract', '0000-00-00', '2009-09-22', 'SWD-GREEN', 'AN-04', 'ronaldo.cris@andy.com', '../../assets/Ronaldo-1.jpg'),
(20, 'Gonzales', 'Ronaldo', 'Male', '1985-04-22', 'Indonesian', 'Married', '+62442324022', 'Product', 'Contract', '0000-00-00', '2009-09-22', 'SWD-GREEN', 'AN-04', 'ronaldo.cris@andy.com', '../../assets/jovi2.jpg');

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
  ADD PRIMARY KEY (`Id`);

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
  MODIFY `Id` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
