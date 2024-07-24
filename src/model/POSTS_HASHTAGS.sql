CREATE TABLE POSTS_HASHTAGS (
  post_id INT(5) NOT NULL,
  hashtag_id INT(5) NOT NULL,
  PRIMARY KEY (post_id, hashtag_id),
  FOREIGN KEY (post_id) REFERENCES POSTS(id),
  FOREIGN KEY (hashtag_id) REFERENCES HASHTAGS(id)
);