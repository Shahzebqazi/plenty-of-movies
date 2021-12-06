from imdb_api import *
import unittest

class TestImdbApi(unittest.TestCase):

    def test_generate_movies(self):
        actual = generate_movie("tt0000009")
        expected = '{"Title": "Miss Jerry", "Year": "1894", "Poster": "https://m.media-amazon.com/images/M/MV5BNjA5Y2ZhYzctNDc1Yy00OGViLWI3NGUtOTYwZmE3NDFiYmIxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg", "Plot": "Geraldine (Jerry) Holbrook, a girl of Eastern birth, decides to start a career in journalism in the heart of New York, after she feels that her father is close to a financial crush. In the process she falls in love with theeditor of her paper, Mr. Hamilton. After the first successful article, she leads Hamilton into doubting her love for him, and this makes him accept a job in London. But his worries prove wrong when Jerry accepts to marry him and leave to London."}'
        self.assertEqual(actual, expected)
