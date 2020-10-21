#Wenxiao Wang

#Graphic
def printGraphic(name):

    if (name == "title"):

        print "-----------------------------------------------------------------------------"
        print " "
        print " "
        print "            _______                  _      _                 _________     "
        print "          |         |               | |   / /                |         |    "
        print "         |           |              | |  / /                 |         |    "
        print "        |             |             | | / /                  |         |    "
        print "       |               |            | |/ /                   |         |    "
        print "        |             |             |___/                    |         |    "
        print "         |           |              |   |                    |         |    "  
        print "          |_________|               |   |                    |_________|    " 
        print "             |   |                  |   |                       |   |       "
        print "             |   |                  |   |                       |   |       "
        print "             |_  |_                 |_  |_                      |_  |_      "
        print " "
        print " "
        print "An Epic Game."
        print " "
        print "-----------------------------------------------------------------------------"

    if (name == "Scissor"):
        print "     _      _   "
        print "    | |   / /   "
        print "    | |  / /    "
        print "    | | / /     "
        print "    | |/ /      "
        print "    |___/       "
        print "    |   |       "
        print "    |   |       "
        print "    |_  |_      "

    if (name == "Paper"):
        print "    _________     "
        print "   |         |    "
        print "   |         |    "
        print "   |         |    "
        print "   |         |    "
        print "   |_________|    "
        print "      |   |       "
        print "      |   |       "
        print "      |_  |_      "

    if (name == "Rock"):
        print "            _______        "
        print "          |         |      "
        print "         |           |     "
        print "        |             |    "
        print "       |               |   "
        print "        |             |    "
        print "         |           |     "
        print "          |_________|     "
        print "             |   |        "
        print "             |   |        "
        print "             |_  |_       "



#Dice
import random 
def rollDice(minNum, maxNum, difficulty):

    result = random.randint(minNum,maxNum)
    print "You roll a: " + str(result) + " out of " + str(maxNum)

    if result <= difficulty:
        print "trying again...."
        raw_input("press enter >")
        rollDice(minNum, maxNum, difficulty)

    else:
        print "Horray!"
        Level3 ()
    
    return result    
 


#1
def Level1():

    print "You are facing a monster looks like this:"
    printGraphic("Paper")
    print "Choose your character to fight the monster in front of you, Hurry!"
    print "[1-Spongebob, 2-Caesar, 3-Gandalf, 4-Skywalker, 5-Snoopy]"
    print "(type the number)"

    pcmd = raw_input(">")

    # player options
    if (pcmd == "2"):
        print "Mighty!"
        Level2()

    elif (pcmd == "1"):
        print " "
        print " "
        print "Imagination"
        print "Take the pill to restart."
        introStory()

    elif (pcmd == "3"):
        print " "
        print " "
        print "You Shall Not Pass!!!"
        print "Take the pill to restart."
        introStory()
         
    else:
        print " "
        print " "
        print "You are defeated."
        print "Take the pill to restart."
        introStory()


#2
def Level2():
    print "The second monster comes:"
    printGraphic("Rock")
    print "Choose a secret weapon to defeat the second monster:"
    print "[1-Portal Gun, 2-Banana, 3-Pepper, 4-Mushroom, 5-Light saber]"
    print "(type the number)"

    pcmd2 = raw_input(">") 

    # player options
    if (pcmd2 == "3"):
        print "Double Kill!"
        Level2_3()

    elif (pcmd2 == "1"):
        print " "
        print " "
        print "Wubalubadubdub"
        print "Take the pill to restart."
        introStory()    

    elif (pcmd2 == "4"):
        print " "
        print " "
        print "This is not Super Mario."
        print "Take the pill to restart."
        introStory() 

    elif (pcmd2 == "5"):
        print " "
        print " "
        print "Your character lost an arm and was defeated."
        print "Take the pill to restart."
        introStory()      

    else:
        print " "
        print " "
        print "You are defeated."
        print "Take the pill to restart."
        introStory()


#2.5
def Level2_3 ():
    print "You are only qualified to challenge the last monster when you roll a 6."
    raw_input ("press enter to roll the dice >")
    rollDice(1,6,5) 


#3
def Level3():
    print "One last battle:"
    printGraphic("Scissor")
    print "The third monster is afraid of hearing a certain type of music, please choose:"
    print "[1-Jazz, 2-Pop, 3-Disco, 4-Rock, 5-Hip hop]"
    print "(type the number)"

    pcmd3 = raw_input(">")

    # player options
    if (pcmd3 == "4"): 
        gameOver()

    else:
        print " "
        print " "
        print "You are defeated."
        print "Take the pill to restart."
        introStory()



def gameOver():

    printGraphic("title")
    print "Congrat! You win!"
    return
        


def introStory():
    print " "
    print " "
    print "Blieve it or not, you've been here befre."
    print " "
    print "I got two pills here."
    print "You take the blue pill...the story ends, you wake up in your bed and believe whatever you want to believe."
    print "You take the red pill...you stay in Wonderland, and I show you how deep the rabbit hole goes."

    pcmd = raw_input("Choose, blue or red >")
    
    # player options
    if (pcmd == "red"):
        print "Enter the room whenever you are ready."
        raw_input("press enter >")
        Level1()
    else:
        print "You knew too much. Be careful of your choice."
        pcmd = raw_input("press enter >")
        introStory()



# Start.
def main():
    printGraphic("title")
    introStory()

main() # The first thing that happens