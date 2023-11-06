-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2023 at 05:27 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `rental_management_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `beds_details`
--

CREATE TABLE `beds_details` (
  `id` int(11) NOT NULL,
  `bed_no` varchar(50) NOT NULL,
  `added_on` datetime NOT NULL,
  `added_by` int(11) NOT NULL,
  `updated_on` datetime NOT NULL,
  `updated_by` int(11) NOT NULL,
  `deleted` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `complaint_details`
--

CREATE TABLE `complaint_details` (
  `id` int(11) NOT NULL,
  `compatient_no` varchar(50) NOT NULL,
  `compatient` varchar(255) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `document_path` varchar(255) NOT NULL,
  `added_on` datetime NOT NULL DEFAULT current_timestamp(),
  `added_by` int(11) NOT NULL,
  `updated_on` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL,
  `deletes` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customer_deatils`
--

CREATE TABLE `customer_deatils` (
  `id` int(11) NOT NULL,
  `customer_id` varchar(50) NOT NULL,
  `f_name` varchar(255) NOT NULL,
  `m_name` varchar(255) NOT NULL,
  `l_name` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `mobile_no` varchar(255) NOT NULL,
  `alternate_mobile_no` varchar(255) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `date_of_birth` date NOT NULL,
  `address` text NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `blood_group` varchar(5) NOT NULL,
  `profession` varchar(255) NOT NULL,
  `membership_type_id` int(11) NOT NULL,
  `room_or_flat_id` int(11) NOT NULL,
  `bed_id` int(11) NOT NULL,
  `manager_id` int(11) NOT NULL,
  `aadhar_no` varchar(50) NOT NULL,
  `pan_no` varchar(50) NOT NULL,
  `voter_id` varchar(50) NOT NULL,
  `identity_document_path` varchar(255) NOT NULL,
  `date_of_joining` date NOT NULL,
  `rent_pay_plan_date` date NOT NULL,
  `date_of_leaving` date NOT NULL,
  `added_on` datetime NOT NULL DEFAULT current_timestamp(),
  `added_by` varchar(255) NOT NULL,
  `updated_on` datetime NOT NULL,
  `updated_by` int(11) NOT NULL,
  `deleted` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `deposit_details`
--

CREATE TABLE `deposit_details` (
  `id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `diposit_ammount` int(11) NOT NULL,
  `added_on` datetime NOT NULL DEFAULT current_timestamp(),
  `added_by` int(11) NOT NULL,
  `updated_on` datetime NOT NULL,
  `updated_by` int(11) NOT NULL,
  `deleted` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `membership_plan_types`
--

CREATE TABLE `membership_plan_types` (
  `id` int(11) NOT NULL,
  `membrship_type_id` varchar(50) NOT NULL,
  `membrship_type` varchar(100) NOT NULL,
  `plan_rent_amoumnt` int(11) NOT NULL,
  `added_on` datetime NOT NULL DEFAULT current_timestamp(),
  `added_by` int(11) NOT NULL,
  `updated_on` datetime NOT NULL,
  `updated_by` int(11) NOT NULL,
  `deleted` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notice_period_details`
--

CREATE TABLE `notice_period_details` (
  `id` int(11) NOT NULL,
  `customer_id` varchar(50) NOT NULL,
  `np_start_date` date NOT NULL,
  `np_end_date` date NOT NULL,
  `added_on` datetime NOT NULL DEFAULT current_timestamp(),
  `added_by` datetime NOT NULL,
  `updated_on` int(11) NOT NULL,
  `updated_by` int(11) NOT NULL,
  `deleted` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `property_details`
--

CREATE TABLE `property_details` (
  `id` int(11) NOT NULL,
  `propery_id` varchar(50) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `pincode` varchar(50) NOT NULL,
  `property_owner_name` varchar(255) NOT NULL,
  `property_owner_mobile_no` varchar(50) NOT NULL,
  `property_owner_alternate_mobile_no` varchar(50) NOT NULL,
  `property_owner_email` varchar(255) NOT NULL,
  `added_on` datetime NOT NULL DEFAULT current_timestamp(),
  `added_by` int(11) NOT NULL,
  `updated_on` datetime NOT NULL,
  `updated_by` int(11) NOT NULL,
  `deleted` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rent_details`
--

CREATE TABLE `rent_details` (
  `id` int(11) NOT NULL,
  `rent_no` varchar(50) NOT NULL,
  `rent_amount` int(11) NOT NULL,
  `payment_type` varchar(50) NOT NULL,
  `paid_date` datetime NOT NULL,
  `added_on` date NOT NULL DEFAULT current_timestamp(),
  `added_by` int(11) NOT NULL,
  `updated_on` datetime NOT NULL,
  `updated_by` int(11) NOT NULL,
  `deletes` int(11) NOT NULL DEFAULT 0,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rooms_or_flats`
--

CREATE TABLE `rooms_or_flats` (
  `id` int(11) NOT NULL,
  `room_or_flat_no` varchar(50) NOT NULL,
  `added_on` datetime NOT NULL DEFAULT current_timestamp(),
  `added_by` int(11) NOT NULL,
  `updated_on` datetime NOT NULL,
  `updated_by` int(11) NOT NULL,
  `deleted` int(2) NOT NULL DEFAULT 0,
  `status` int(2) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_details`
--

CREATE TABLE `user_details` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_type` varchar(255) NOT NULL,
  `mobile_no` varchar(50) NOT NULL,
  `alternate_mobile_no` varchar(50) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `address` text NOT NULL,
  `city` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `added_on` date NOT NULL,
  `added_by` int(11) NOT NULL,
  `updated_on` date NOT NULL,
  `updated_by` int(11) NOT NULL,
  `deleted` int(11) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `complaint_details`
--
ALTER TABLE `complaint_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `customer_deatils`
--
ALTER TABLE `customer_deatils`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `deposit_details`
--
ALTER TABLE `deposit_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `membership_plan_types`
--
ALTER TABLE `membership_plan_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notice_period_details`
--
ALTER TABLE `notice_period_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `property_details`
--
ALTER TABLE `property_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rent_details`
--
ALTER TABLE `rent_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rooms_or_flats`
--
ALTER TABLE `rooms_or_flats`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_details`
--
ALTER TABLE `user_details`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `complaint_details`
--
ALTER TABLE `complaint_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer_deatils`
--
ALTER TABLE `customer_deatils`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `deposit_details`
--
ALTER TABLE `deposit_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `membership_plan_types`
--
ALTER TABLE `membership_plan_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `notice_period_details`
--
ALTER TABLE `notice_period_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `property_details`
--
ALTER TABLE `property_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rent_details`
--
ALTER TABLE `rent_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rooms_or_flats`
--
ALTER TABLE `rooms_or_flats`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_details`
--
ALTER TABLE `user_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


--------------------------------------------------------

--
-- Table structure for table `user_types`
--

CREATE TABLE `user_types` (
  `id` int(11) NOT NULL,
  `user_type` varchar(50) NOT NULL,
  `user_type_id` int(11) NOT NULL,
  `added on` datetime NOT NULL DEFAULT current_timestamp(),
  `added_by` int(11) NOT NULL,
  `updated_on` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL,
  `deleted` int(2) NOT NULL DEFAULT 0,
  `status` int(2) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_types`
--
ALTER TABLE `user_types`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_types`
--
ALTER TABLE `user_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


ALTER TABLE `user_details` ADD `user_type_id` INT(11) NOT NULL AFTER `user_type`;

ALTER TABLE `user_details` CHANGE `deleted` `deleted` INT(11) NOT NULL DEFAULT '0';

ALTER TABLE `notice_period_details` CHANGE `added_by` `added_by` INT NOT NULL;

ALTER TABLE `notice_period_details` CHANGE `updated_on` `updated_on` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE `customer_deatils` CHANGE `added_by` `added_by` INT(2) NOT NULL;



-- ============================== created new tables ===================================

CREATE TABLE maintenance_requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  request_id VARCHAR(255) NOT NULL,
  customer_id INT NOT NULL,
  request_description TEXT,
  request_date DATE NOT NULL,
  assigned_to INT,
  status VARCHAR(255),
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);



CREATE TABLE lease_management (
  id INT AUTO_INCREMENT PRIMARY KEY,
  lease_id VARCHAR(255) NOT NULL,
  property_id INT NOT NULL,
  customer_id INT NOT NULL,
  lease_start_date DATE NOT NULL,
  lease_end_date DATE NOT NULL,
  rent_amount DECIMAL(10, 2),
  payment_frequency VARCHAR(255),
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);


CREATE TABLE payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  payment_id VARCHAR(255) NOT NULL,
  customer_id INT NOT NULL,
  payment_date DATE NOT NULL,
  payment_amount DECIMAL(10, 2) NOT NULL,
  payment_method VARCHAR(255),
  payment_status VARCHAR(255),
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);


CREATE TABLE vendors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vendor_id VARCHAR(255) NOT NULL,
  vendor_name VARCHAR(255) NOT NULL,
  contact_name VARCHAR(255),
  contact_email VARCHAR(255),
  contact_phone VARCHAR(20),
  address TEXT,
  city VARCHAR(255),
  state VARCHAR(255),
  country VARCHAR(255),
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);

CREATE TABLE vendor_products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  vendor_product_id VARCHAR(255) NOT NULL,
  vendor_id INT NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  product_description TEXT,
  price DECIMAL(10, 2),
  quantity INT,
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);


CREATE TABLE visitors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  visitor_id VARCHAR(255) NOT NULL,
  visitor_name VARCHAR(255) NOT NULL,
  visitor_type VARCHAR(255),
  customer_id INT NOT NULL,
  check_in_time DATETIME NOT NULL,
  check_out_time DATETIME,
  purpose TEXT,
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);

CREATE TABLE inventory (
  id INT AUTO_INCREMENT PRIMARY KEY,
  item_id VARCHAR(255) NOT NULL,
  item_name VARCHAR(255) NOT NULL,
  item_description TEXT,
  quantity INT,
  category VARCHAR(255),
  purchase_date DATE,
  purchase_price DECIMAL(10, 2),
  location TEXT,
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);

CREATE TABLE expenses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  expense_id VARCHAR(255) NOT NULL,
  customer_id INT NOT NULL,
  expense_date DATE NOT NULL,
  expense_description TEXT,
  expense_amount DECIMAL(10, 2) NOT NULL,
  category VARCHAR(255),
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);

CREATE TABLE dashboard (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NOT NULL,
  data JSON,
  date DATE,
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);


CREATE TABLE legal_compliance (
  id INT AUTO_INCREMENT PRIMARY KEY,
  compliance_id VARCHAR(255) NOT NULL,
  customer_id INT NOT NULL,
  compliance_type VARCHAR(255) NOT NULL,
  due_date DATE NOT NULL,
  status VARCHAR(255),
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);

CREATE TABLE analytics (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NOT NULL,
  data JSON,
  date DATE,
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);

CREATE TABLE tenant_portal (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);

CREATE TABLE tenant_screening (
  id INT AUTO_INCREMENT PRIMARY KEY,
  screening_id VARCHAR(255) NOT NULL,
  customer_id INT NOT NULL,
  applicant_name VARCHAR(255) NOT NULL,
  application_date DATE NOT NULL,
  status VARCHAR(255),
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);

CREATE TABLE smart_home_devices (
  id INT AUTO_INCREMENT PRIMARY KEY,
  device_id VARCHAR(255) NOT NULL,
  customer_id INT NOT NULL,
  device_name VARCHAR(255) NOT NULL,
  device_type VARCHAR(255),
  status VARCHAR(255),
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);

CREATE TABLE marketing_campaigns (
  id INT AUTO_INCREMENT PRIMARY KEY,
  campaign_id VARCHAR(255) NOT NULL,
  customer_id INT NOT NULL,
  campaign_name VARCHAR(255) NOT NULL,
  campaign_type VARCHAR(255),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  description TEXT,
  status VARCHAR(255),
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);


CREATE TABLE energy_efficiency_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NOT NULL,
  data JSON,
  date DATE,
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);


CREATE TABLE property_manager_app_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NOT NULL,
  data JSON,
  date DATE,
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN
);


CREATE TABLE rules_and_regulations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  rule_id VARCHAR(255) NOT NULL,
  customer_id INT NOT NULL,
  rule_name VARCHAR(255) NOT NULL,
  description TEXT,
  added_on DATETIME,
  added_by INT,
  updated_on DATETIME,
  updated_by INT,
  deleted BOOLEAN,
  status VARCHAR(255)
);
