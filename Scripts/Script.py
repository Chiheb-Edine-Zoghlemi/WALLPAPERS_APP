import requests
from bs4 import BeautifulSoup
import requests as re
from datetime import date
import json


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


def save_to_file(links):
    today = date.today()
    content = {"Date": today.strftime("%d/%m/%Y"), "Links": links}
    with open('data.json', 'w') as fp:
        json.dump(content, fp)


if __name__ == "__main__":
    print('[ SCRIPT IS LAUNCHING ]')
    print('[ SCRAPING THE REPO   ]')
    links = scrap_repo()
    print('[ SCRAPING IS TERMINATED ]')
    print('[ SAVING TO FILE ]')
    save_to_file(links)
    print('[ SAVING is TERMINATED ]')
    # uploading to the server
    print('[ SCRIPT IS TERMINATED ]')
