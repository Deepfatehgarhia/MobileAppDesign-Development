//
//  main.swift
//  Labtest_2
//
//  Created by Deepak Kumar on 2018-06-22.
//  Copyright © 2018 Deepak Kumar. All rights reserved.
//

import Foundation


var row = ""
var column = ""

print("Please enter the number of rows you want: ")

row = NSString(data: FileHandle.standardInput.availableData, encoding:String.Encoding.utf8.rawValue)! as String // get keyboard input
row = row.replacingOccurrences(of: "\n", with: "", options: NSString.CompareOptions.literal, range: nil)

print("Please enter the number of rows you want: ")

column = NSString(data: FileHandle.standardInput.availableData, encoding:String.Encoding.utf8.rawValue)! as String // get keyboard input
column = column.replacingOccurrences(of: "\n", with: "", options: NSString.CompareOptions.literal, range: nil)

let rowNumber = Int(row)

for row in stride(from: 0, to: Int(row), by: Int(row).1) {
    for column in stride(from: 0, to: Int(column), by: Int(column).1){
        print("*")
    }
    print("")
}


//2 Write a program that takes an integer (in a variable) and displays, using asterisks, a filled diamond of the given side length. For example, if the side length is 4, the program should display.


var space=0, i=1,j=4
for  i in stride(from: i<=4, to: space>0, by: 1)
{
for  space in stride(from: space=4-i, to: space>0, by: -1)
{
    print(" ")
    for j in stride(from: j=2*i-1, to: j>0, by: -1)
    print("*")
    print("\n")
    }
   for  i in stride(from: i=3, to: i>=0, by: -1)
   {
    for  space in stride(from: space=0, to: space<4-i, by: 1){
    print(" ")
        for j in stride(from: j=0, to: j<2*i-1, by: +1)
        print("*")
        print("\n")
    }
}
}

