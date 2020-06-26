import sys
re = open("nex.css","r")
sys.stdout = open("jquery.fullPage.min.css","w")
con = 0
for i in re:
    tex = i.strip()
    if(tex[-1] == '{'):
        print(tex)
        con = 1
    else:
        print("\t",end="")
        if(tex[-1] == '}'):
            con = 0
            print(tex[:-1])
            print("}")
        else:
            print(tex)