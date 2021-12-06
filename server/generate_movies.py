import requests
import csv
import random
def movie_list(genre_list, limit=100):
    pergenre=limit//len(genre_list)
    movie_list=[]
    for genre in genre_list:
        with open('dataset/'+genre+'.csv','r') as reader_object:
            movie_reader=csv.reader(reader_object)
            movies=list(movie_reader)
            print(movies)
            for x in range(pergenre):
                chosen_row = random.choice(movies)
                if not(chosen_row[1] in movie_list):
                    movie_list.append(chosen_row[1])
                else: continue
    return movie_list



def generate_movie(movieid):

    url="http://www.omdbapi.com/"
    key="d3b83d09"
    params={'apikey':key,'i':movieid,'plot':"full"}
    response=requests.get(url=url,params=params).json()
    frontresponse={'Title':response['Title'],'Year':response['Year'],'Poster':response['Poster']}
    return frontresponse
