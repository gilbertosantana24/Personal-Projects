user_name = input("what is your name? ")
print("Welcome", user_name, "to this adventure")

answer = input("You are on a dirt road, it has come to an end, tou can go left or right, which way do you choose? ").lower()

if answer == "left":
    q2 = input("You come to a river, you can walk around it or swim across, choose: walk or swim ")
    if q2 == "swim":
        print("You swim across and were eaten by an alligator")
    elif q2 == "walk":
        print("You walk a lot of miles and you died by dehydratation")
    else: 
        print("Not a valid choice, you lose")
elif answer == "right":
    answer = input("You come to a bridge it looks wobbly would you like to cross it? (cross/back): ")
    if answer== "back":
        print("You go back and lose")
    elif answer == "cross":
        answer = input("You crossed the bridge and meet a stranger, Do you talk to him? (yes/no): ")

        if answer == "yes":
            print("You talk to the stranger and they give you money you Win!")
        elif answer == "no":
            print("You ignore the stranger and they offended you lose")
        else: 
            print("Not valid you lose")

else:
    print("Not a valid choice, you lose")