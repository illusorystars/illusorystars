import requests
import json
from bs4 import BeautifulSoup
list=[]
path = '../linkbase/'
def gett(site):
    html = requests.get(site)
    soup = BeautifulSoup(html.content,"html.parser")
    name = soup.find("title").text
    print(name)
    while True:
        aq=int(input('标题起始：'))
        az=int(input('标题字数：'))
        if input("标题(回车确认)："+name[aq-1:aq+az-1]) == '':
            name=name[aq-1:aq+az-1]
            break
    more=input('评价:')
    iico = input('自定义ICO(回车跳过)')
    if iico=='':
        ico = path+name+'.ico'
        if site[4]=='s':
            ssite = site[7:]
        else:
            ssite = site[8:]
        try:
            req = requests.get('https://favicongrabber.com/api/grab/'+ssite)
            ico = req.json().get('icons')[0].get('src')
        except:
            ico = input('wrong:')
        try:
            headers ={
                'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36'
            }
            r = requests.get(ico,headers=headers)
            f = open(ico,'wb')
            f.write(r.content)
            f.close()
        except:
            ico = path +input('wrong2')
    else:
        ico = path +iico
    print(name+"\n"+site+'\n'+ico)
    ooo = {'name':name,'link':site,'ico':ico,'more':more}
    list.append(ooo)
    return json.dumps(ooo)

file = open('base.txt',"w+")
print(list)
while True:
    abc = input('网址')
    if abc =='q':
        break
    file.write(gett(abc))
file.close()
file2 = open('linkbase.json','r+')
listold = json.loads(file2.read())
file2.close()
list.extend(listold)
file3 = open('linkbase.json','w')
file3.write(json.dumps(list))
file3.close()





