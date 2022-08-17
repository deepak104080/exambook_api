-- CREATE SCHEMA exambook;

CREATE TABLE questions(qs_id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY, subject_id VARCHAR(20) NOT NULL, question VARCHAR(500) UNIQUE KEY NOT NULL, answer1 VARCHAR(200) NOT NULL,
answer2 VARCHAR(200) NOT NULL, answer3 VARCHAR(200), answer4 VARCHAR(200), answer5 VARCHAR(200),
 correctanswer VARCHAR(200) NOT NULL, maxmarks INT DEFAULT 4, negativemarks INT DEFAULT 1, diffculylevel INT DEFAULT 1);


 INSERT INTO questions (subject_id, question, answer1, answer2, answer3, answer4, answer5, correctanswer ) VALUES ('2', 'TEST3', '1', '2', '3', '4', '5', '1');