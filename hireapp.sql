-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Okt 2020 pada 04.42
-- Versi server: 10.4.14-MariaDB
-- Versi PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hireapp`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `company`
--

CREATE TABLE `company` (
  `id_company` int(11) NOT NULL,
  `name_company` varchar(255) NOT NULL,
  `sector` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `instagram` varchar(255) NOT NULL,
  `linkedin` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `id_user` int(11) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `company`
--

INSERT INTO `company` (`id_company`, `name_company`, `sector`, `city`, `description`, `instagram`, `linkedin`, `photo`, `id_user`, `createAt`, `updateAt`) VALUES
(2, 'Telkom Indonesia', 'Komunikasi', 'Jakarta', 'Telkomsel Indonesia', 'telkomsel', 'telkomsel', 'photo-1602734977994-KORAN.jpg', 3, '2020-10-15 11:09:38', '2020-10-15 11:09:38');

-- --------------------------------------------------------

--
-- Struktur dari tabel `developer`
--

CREATE TABLE `developer` (
  `id_developer` int(11) NOT NULL,
  `name_developer` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `job` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `skill` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `instagram` varchar(255) NOT NULL,
  `github` varchar(255) NOT NULL,
  `gitlab` varchar(255) NOT NULL,
  `id_user` int(255) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `developer`
--

INSERT INTO `developer` (`id_developer`, `name_developer`, `photo`, `job`, `location`, `status`, `description`, `skill`, `email`, `instagram`, `github`, `gitlab`, `id_user`, `createAt`, `updateAt`) VALUES
(4, 'Rosyida Widadina Ningrum', 'photo-1602732939920-viewmodel-replace-loader.png', 'Android Developer', 'Jawa Timur', 'Full Time', 'lorem lorem lorem', 'Kotlin | Javascript', 'rosida@gmail.com', '@dina', '@dina', '@dina', 4, '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `experience`
--

CREATE TABLE `experience` (
  `id_experience` int(11) NOT NULL,
  `id_developer` int(11) NOT NULL,
  `position` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `experience`
--

INSERT INTO `experience` (`id_experience`, `id_developer`, `position`, `company`, `duration`, `description`, `createAt`, `updateAt`) VALUES
(1, 4, 'Android Developer Expert', 'Tokopedia', '6 Tahun', 'Menjadi seorang engineer di tokopedia', '2020-10-15 09:58:35', '2020-10-15 09:58:35'),
(2, 4, 'Android Developer Expert', 'Tokopedia', '6 Tahun', 'Menjadi seorang engineer di tokopedia', '2020-10-15 10:06:00', '2020-10-15 10:06:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `hire`
--

CREATE TABLE `hire` (
  `id_hire` int(11) NOT NULL,
  `id_project` int(11) NOT NULL,
  `id_developer` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `hire`
--

INSERT INTO `hire` (`id_hire`, `id_project`, `id_developer`, `description`, `price`, `status`, `createAt`, `updateAt`) VALUES
(1, 1, 4, 'Ini adalah deskripsi', '10.000', 'Active', '2020-10-15 00:08:33', '2020-10-15 00:08:33'),
(2, 1, 1, 'Ini adalah deskripsi', '10.000', 'Active', '2020-10-15 00:34:46', '2020-10-15 00:34:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `portfolio`
--

CREATE TABLE `portfolio` (
  `id_portfolio` int(11) NOT NULL,
  `id_developer` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `link` varchar(255) NOT NULL,
  `repository` varchar(255) NOT NULL,
  `company` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `portfolio`
--

INSERT INTO `portfolio` (`id_portfolio`, `id_developer`, `name`, `description`, `link`, `repository`, `company`, `type`, `photo`, `createAt`, `updateAt`) VALUES
(1, 4, 'Aplikasi Membuat Kamu Bahagia', 'Semenjak ada kamu ', 'github.com/widadina28', 'github.com/widadina28', 'Mandiri', 'Individu', 'photo-1602698415849-KORAN.jpg', '2020-10-15 01:00:15', '2020-10-15 01:00:15'),
(2, 4, 'Aplikasi Membuat Kamu Bahagia', 'Semenjak ada kamu ', 'github.com/widadina28', 'github.com/widadina28', 'Mandiri', 'Individu', 'photo-1602731307879-KORAN.jpg', '2020-10-15 10:08:27', '2020-10-15 10:08:27');

-- --------------------------------------------------------

--
-- Struktur dari tabel `project`
--

CREATE TABLE `project` (
  `id_project` int(11) NOT NULL,
  `id_company` int(11) NOT NULL,
  `name_project` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `deadline` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `project`
--

INSERT INTO `project` (`id_project`, `id_company`, `name_project`, `description`, `deadline`, `photo`, `createAt`, `updateAt`) VALUES
(1, 2, 'Aplikasi Keuangan Negara', 'Aplikasi yang digunakan untuk keuangan negara', '13 Oktober 2021', 'photo-1602696521994-KORAN.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 2, 'Aplikasi Keuangan Perusahaan', 'Aplikasi yang digunakan untuk keuangan perusahaan', '20 Oktober 2021', 'photo-1602735588476-KORAN.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 2, 'Aplikasi Keuangan Perusahaan', 'Aplikasi yang digunakan untuk keuangan perusahaan', '20 Oktober 2021', 'photo-1602735729645-KORAN.jpg', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id_user` int(255) NOT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updateAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id_user`, `user_name`, `email`, `password`, `role`, `createAt`, `updateAt`) VALUES
(2, 'Muhammad Rizki', 'rizkimuhammad2301@gmail.com', '$2a$10$sqLtpnn0eSFg/9KkpRLYAusdD/zx9YU9zJtpRIGcDUVowPlNO8ucO', 'company', '2020-10-14 20:16:55', '2020-10-14 20:16:55'),
(3, 'Telkom Indonesia', 'telkom@gmail.com', '$2a$10$p97VICh/4v8TBnQaf/RuvO4FKIphID1QnRGQ9fqJvGQyXxoQ.z4xS', 'company', '2020-10-14 20:19:05', '2020-10-14 20:19:05'),
(4, 'Rosida Rizki', 'rosida@gmail.com', '$2a$10$OwSDxyZJIdQe/eBqCteKDex28DsCx8n1D48M0egMLnsuIurQ73NQ.', 'developer', '2020-10-14 22:41:34', '2020-10-14 22:41:34');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id_company`),
  ADD KEY `id_user` (`id_user`);

--
-- Indeks untuk tabel `developer`
--
ALTER TABLE `developer`
  ADD PRIMARY KEY (`id_developer`),
  ADD KEY `id_user` (`id_user`);

--
-- Indeks untuk tabel `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id_experience`),
  ADD KEY `id_developer` (`id_developer`);

--
-- Indeks untuk tabel `hire`
--
ALTER TABLE `hire`
  ADD PRIMARY KEY (`id_hire`),
  ADD KEY `id_project` (`id_project`),
  ADD KEY `id_developer` (`id_developer`);

--
-- Indeks untuk tabel `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`id_portfolio`),
  ADD KEY `id_developer` (`id_developer`);

--
-- Indeks untuk tabel `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id_project`),
  ADD KEY `id_company` (`id_company`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `company`
--
ALTER TABLE `company`
  MODIFY `id_company` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `developer`
--
ALTER TABLE `developer`
  MODIFY `id_developer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT untuk tabel `experience`
--
ALTER TABLE `experience`
  MODIFY `id_experience` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `hire`
--
ALTER TABLE `hire`
  MODIFY `id_hire` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `id_portfolio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `project`
--
ALTER TABLE `project`
  MODIFY `id_project` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
