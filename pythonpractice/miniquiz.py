print("Welcome to the F1 quiz game!")

playing = input("Would you like to play this quiz? ")

if playing.lower() != "yes":
    quit()

print("Lights out and away we go!!")
score = 0

answer = input("Who won the Monaco Grand Prix 2022? ")
if answer.lower() == "sergio perez":
    print("That is correct!")
    score += 1
else:
    print("That is wrong")

answer = input("What does DRS stand for? ")
if answer.lower() == "drag reduction system":
    print("That is correct!")
    score += 1
else:
    print("That is wrong")

answer = input("How many championships does Niki Lauda have won? ")
if answer == "3":
    print("That is correct!")
    score += 1
else:
    print("That is wrong")

answer = input("What is the name of Lewis Hamilton's bulldog? ")
if answer.lower() == "roscoe":
    print("That is correct!")
    score += 1
else:
    print("That is wrong")

print("You got " + str(score) + " points!")
print( str((score/4) * 100) + " / 100%")
