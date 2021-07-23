import requests
from bs4 import BeautifulSoup
import requests as re
from datetime import date
import json
import sqlite3


def scrap_repo():
    REPO_URL = "https://github.com/Chiheb-Edine-Zoghlemi/Wall_papers"
    req = re.get(REPO_URL)
    if req.status_code == 200:
        print('[ Request ended with success  ]')
        raw_html = req.text
        soup = BeautifulSoup(raw_html, 'html.parser')
        images_names = soup.find_all("a", class_="js-navigation-open Link--primary")
        BASE_URL = 'https://raw.githubusercontent.com'
        links = []
        for i in images_names:
            links.append(BASE_URL + i.get('href').replace('/blob', ''))
        return links
    else:
        print('[ Unable to request the repo   ]')


def save(links):
    today = date.today()
    try:
        con = sqlite3.connect('../Back-end/Wallpapers.db')
        cur = con.cursor()
    except:
        print('[ ERROR  CONNECTING TO THE DATABASE ]')
        return 0
    for link in links:
        row = (link, today.strftime("%d/%m/%Y"), 0, 0)
        cur.execute("INSERT INTO Wallpapers  (URL,DATE,VIEWS,DOWLOADS) VALUES (?,?,?,?)", row)
    con.commit()
    con.close()


if __name__ == "__main__":
    print('[ SCRIPT IS LAUNCHING ]')
    print('[ SCRAPING THE REPO   ]')
    links = scrap_repo()
    print('[ SCRAPING IS TERMINATED ]')
    print('[ SAVING TO DATABASE ]')
    save(links)
    print('[ SAVING is TERMINATED ]')
    # uploading to the server
    print('[ SCRIPT IS TERMINATED ]')
