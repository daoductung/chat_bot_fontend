import csv
import requests
import bs4
import unicodecsv as csv
from pandas import DataFrame


url = 'http://fit.utehy.edu.vn/News.aspx?sid=41'
i= 1
response = requests.get(url)
html = response.content

soup = bs4.BeautifulSoup(html, "lxml")
for link in soup.find_all('a'):
    print(link)





