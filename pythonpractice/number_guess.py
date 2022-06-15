import random

range_limit = input("Type a number: ")

if range_limit.isdigit():
    range_limit = int(range_limit)

    if range_limit <= 0:
        print("Please type a number higher than 0")
        quit()
else: 
    print("Please type a number")
    quit()

random_number = random.randint(0, range_limit)
guesses = 0

while True :
    guesses += 1
    user_guess = input("Make a guess: ")
    if user_guess.isdigit():
        user_guess = int(user_guess)
    
    else: 
        print("Please type a number")
        continue

    if user_guess == random_number:
        print("You got it")
        break
    elif user_guess > random_number:
            print("You were above the number")
    else:
            print("You were below the number")


print("You took", guesses, "guesses")