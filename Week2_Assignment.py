#Wenxiao Wang

#Assignment 1

MyDesktop = ["Laptop","Mouse","Notebook","Pen","Phone"]
print MyDesktop
print MyDesktop [1]

myMouse = {
    "Brand" : "Logitech",
    "Model" : "MX Master 2S",
    "Color" : ["Black","Bronze"],
    "Number of buttons" : 7,
    "Dimension" : "126.0 mm x 85.7 mm x 48.4 mm",
    "Weight" : "145 g",
    "Wireless" : True,
    "Operating System" : ["macOS","Windows","Linux","iPadOS"]
}

print myMouse
print myMouse ["Model"]

#Assignment 2

myiPhone = {
    "model" : "iPhone X",
    "color" : "Black",
    "material" : ["Glass","Stainless Steel"],
    "System" : "iOS14",
    "5G" : False,
    "Developer" : "Apple Inc",
    "Year" : 2017
}

print myiPhone
print myiPhone ["material"]

#Assignment 3

print ("-----------------------------------")
print ("Answer the questions below to play.")
print ("-----------------------------------")

Character1 = raw_input("Enter an animal: ")
yourWish1 = raw_input("Enter what you want most: ")
Object1 = raw_input("What is your favorite Dessert?: ")
Object2 = raw_input("What is your favorite Food?: ")
Object3 = raw_input("What is your favorite Fruit?: ")
Character2 = raw_input("Enter a movie villain: ")
Verb1 = raw_input("One thing you want to do now (Enter an verb): ")
Verb2 = raw_input("One thing you dislike to do (Enter an verb): ")

# Based on the story: The Three Little Pigs by James Halliwell-Phillipps
print ("-----------------------------------")
story = "Once upon a time there were three little " + Character1 + "s and the time came for them to leave home and seek their " + yourWish1 + ". " \
"The first little " + Character1 + " built his house out of " + Object1 + " because it was the easiest thing to do. " \
"The second little " + Character1 + " built his house out of " + Object2 + ". This was a little bit stronger than a " + Object1 + " house. " \
"The third little " + Character1 + " built his house out of " + Object3 + ". " \
"One night the big bad " + Character2 + ", who dearly loved to eat fat little " + Character1 + "s, came along and saw the first little " +  Character1 + " in his house of " + Object1 + ". " \
"He said 'Let me in, Let me in, little " + Character1 + " or I'll " + Verb1 + " and I'll " + Verb2 + " and I'll blow your house in!'"

print (story)