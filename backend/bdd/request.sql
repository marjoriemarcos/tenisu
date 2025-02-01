
INSERT INTO player (
    id, firstname, lastname, totalName, shortname, sex, picture,
    rank, point, weight, height, age, last_match_scores, countryId
) VALUES
(52, 'Novak', 'Djokovic', 'Novak Djokovic', 'N.DJO', 'M', 
 'https://tenisu.latelier.co/resources/Djokovic.png',
 2, 2542, 80000, 188, 31, 11111, 1),

(53, 'Rafael', 'Nadal', 'Rafael Nadal', 'R.NAD', 'M', 
 'https://tenisu.latelier.co/resources/Nadal.png',
 3, 2300, 85000, 185, 36, 10110, 2),

(54, 'Roger', 'Federer', 'Roger Federer', 'R.FED', 'M', 
 'https://data.latelier.co/training/tennis_stats/resources/Federer.png',
 5, 2000, 81000, 185, 41, 11001, 3),

(55, 'Serena', 'Williams', 'Serena Williams', 'S.WIL', 'F', 
 'https://tenisu.latelier.co/resources/Venus.webp',
 8, 1800, 70000, 175, 40, 11011, 4),

(56, 'Iga', 'Swiatek', 'Iga Swiatek', 'I.SWI', 'F', 
 'https://images.prismic.io/fft-rg-site/61b97f80-d516-4352-8e88-95e102b524b8_20240305_PJ_SwiatekIga_US.png?auto=compress,format&rect=0,0,1080,1080&w=400&h=400',
 1, 2900, 65000, 176, 22, 11111, 5);



 INSERT INTO country (code, picture) VALUES
('SRB', 'https://tenisu.latelier.co/resources/Serbie.png'),
('ESP', 'https://tenisu.latelier.co/resources/Espagne.png'),
('SUI', 'https://tenisu.latelier.co/resources/Suisse.png'),
('USA', 'https://tenisu.latelier.co/resources/USA.png'),
('POL', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.wikipedia.org%2Fwiki%2FDrapeau_de_la_Pologne&psig=AOvVaw1iLhbDwfMZjc_KKx-EJFyb&ust=1738515194295000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjX2eX4oosDFQAAAAAdAAAAABAI');