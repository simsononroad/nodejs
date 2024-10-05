import json as jn


def main():
    bem = input('Írj be egy parancsot (list, add, del, read, save/quit(s/q)): ')
    if bem != 'q/s':
        if bem == 'add':
            cmdParts = bem.format()
            json_obj = jn.dumps(cmdParts)
            with open("feedspy.json", "w") as outfile:
                outfile.write(f'[https://{json_obj}]')
        if bem == "list":
            with open('feedspy.json', 'r') as openfile:
                json_out = jn.load(openfile)
            print(json_out[1])



if __name__ == "__main__":
    main()