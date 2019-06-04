//
// main.swift
// RandomNumber
//

import Foundation


var randomNumber = 1
var continueGuessing = true
var keepPlaying = true
var input = ""

while keepPlaying
{
    randomNumber = Int(arc4random_uniform(101))// get a random number between 0-100
    print("The random number to guess is : \(randomNumber)")
    while continueGuessing {
        print("Pick a number between 0-100.")
        
        input = NSString(data: FileHandle.standardInput.availableData, encoding:String.Encoding.utf8.rawValue)! as String // get keyboard input
        input = input.replacingOccurrences(of: "\n", with :"", options: NSString.CompareOptions.literal, range :nil) // Strip off the \n
        if let userGuess = Int(input) {
            if userGuess == randomNumber {
                continueGuessing = false
                print("correct number!")
            }
                //nested if statement
            else if userGuess > randomNumber {
                // user guessed too high
                print("Your guess is too high!")
            }
            else{
                // no reason to check if userGuess < randomNumber. It has to be.
                print("your number is too low!")
            }
        } else {
            print("Invalid GUess, Please try again.")
        }
    }
    
    print ("Play again? Y or N")
    input = NSString(data: FileHandle.standardInput.availableData, encoding:String.Encoding.utf8.rawValue)! as String
    input = input.replacingOccurrences(of: "\n", with :"", options: NSString.CompareOptions.literal, range :nil)
    
    if input == "N" || input == "n"{
        keepPlaying = false
    }
    continueGuessing = true
    
}
