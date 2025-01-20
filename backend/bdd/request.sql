INSERT INTO player (
    id, firstname, lastname, shortname, sex, picture,
    rank, point, weight, height, age, last_match_scores, countryId
) VALUES
(52, 'Novak', 'Djokovic', 'N.DJO', 'M', 
 'https://data.latelier.co/training/tennis_stats/resources/Djokovic.png',
 2, 2542, 80000, 188, 31, 11111, 1),

(53, 'Rafael', 'Nadal', 'R.NAD', 'M', 
 'https://data.latelier.co/training/tennis_stats/resources/Nadal.png',
 3, 2300, 85000, 185, 36, 10110, 2),

(54, 'Roger', 'Federer', 'R.FED', 'M', 
 'https://data.latelier.co/training/tennis_stats/resources/Federer.png',
 5, 2000, 81000, 185, 41, 11001, 3),

(55, 'Serena', 'Williams', 'S.WIL', 'F', 
 'https://data.latelier.co/training/tennis_stats/resources/Serena.png',
 8, 1800, 70000, 175, 40, 11011, 4),

(56, 'Iga', 'Swiatek', 'I.SWI', 'F', 
 'https://data.latelier.co/training/tennis_stats/resources/Swiatek.png',
 1, 2900, 65000, 176, 22, 11111, 5);



 INSERT INTO country (code, picture) VALUES
('SRB', 'https://data.latelier.co/training/tennis_stats/resources/Serbie.png'),
('ESP', 'https://data.latelier.co/training/tennis_stats/resources/Espagne.png'),
('SUI', 'https://data.latelier.co/training/tennis_stats/resources/Suisse.png'),
('USA', 'https://data.latelier.co/training/tennis_stats/resources/USA.png'),
('POL', 'https://data.latelier.co/training/tennis_stats/resources/Pologne.png');