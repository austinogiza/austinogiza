
import random

easyNumber = random.randint(1, 10)
mediumNumber = random.randint(1, 20)
hardNumber = random.randint(1, 50)
answer = ''
number = 2
countEasyLimt = 6
countMediumLimit = 4
countHardLimit = 3
count = 0
guess = ''

while True:
    answer = str(input("Enter a level you want: ")).lower()
    if answer == 'easy':
        while count < countEasyLimt:
            guess = int(input('Guess a number between 1 - 10: '))
            count += 1
            if guess == easyNumber:
                print("You got it right!")
                break
            elif guess > easyNumber:
                print("Guess is too high, choose a number between 1-10")
            else:
                print("That was wrong")
    elif answer == 'medium':
        while count < countMediumLimit:
            guess = int(input('Guess a number between 1 - 20: '))
            count += 1
            if guess == mediumNumber:
                print("You got it right!")
                break
            elif guess > mediumNumber:
                print("Guess is too high, choose a number between 1-20")
            else:
                print("That was wrong")
    elif answer == 'hard':
        while count < countHardLimit:
            guess = int(input('Guess a number between 1 - 100: '))
            count += 1
            if guess == hardNumber:
                print("You got it right!")
                break
            elif guess > hardNumber:
                print("Guess is too high, choose a number between 1-100")

            else:
                print("That was wrong")
    elif answer == 'help':
        print("""we have 3 levels, 
            'Easy'
            'Medium'
            'Hard'
              """)
    else:
        break
