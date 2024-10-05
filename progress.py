import webbrowser
import requests
import sqlite3
import os
con = sqlite3.connect("holtart.db")
cur = con.cursor()
try:
    cur.execute("CREATE TABLE status(id INT PRIMARY KEY ,time)")
except:
    pass

def new_time():
    wherehou = int(input("Hol tartasz?(óra): "))
    wheremin = int(input("Hol tartasz?(perc): "))
    wheresec = int(input("Hol tartasz?(másodperc): "))
    acttime0 = wherehou * 60 * 60
    acttime1 = wheremin * 60 + wheresec
    acttime = acttime0 + acttime1
    print(acttime)
    ins = cur.execute(f"DELETE FROM status")
    con.commit()
    ins = cur.execute(f"insert into status (time) values ('{acttime}')")
    con.commit()
    qu = input("Nyissa meg? (Y, N): ")
    if qu == "y":
        open()
    if qu == "n":
        print("Elmentve!")

def open():
    res = cur.execute("SELECT time FROM status;")
    ress = res.fetchall()
    for kiolv in ress:
        onlynum = kiolv[0]
        print("Itt tartasz(adatbázisból): ", onlynum)
    url = f"https://www.youtube.com/watch?v=gyQyk80_upM&t={onlynum}"
    print("Megnyílt")
    webbrowser.open(url)
    
def main():
    wich = input("Előző megnyitása(e) || Új idő hozzáadása(u)")
    #while wich == 'e' or wich == 'u':
    if wich == 'e':
        open()
    if wich == 'u':
        new_time()
    os.system("clear")
    main()

if __name__ == "__main__":
    main()
