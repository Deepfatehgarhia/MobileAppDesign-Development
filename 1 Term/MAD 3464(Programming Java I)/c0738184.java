import java.util.Scanner;
import java.io.*; 

public class LabTest1 {
  public static void main(String[] args) throws FileNotFoundException
    {
	  Scanner in = new Scanner(System.in);
        System.out.print("Input the string: ");
        String str = in.nextLine();
        String filename;
        
       

    
        in.nextLine();
        
        // Get the filename.
        System.out.print("Enter the filename: ");
        filename = in.nextLine();
        PrintWriter outputFile = new PrintWriter("Users/D/Desktop/"+filename+".txt");

        outputFile.println("Count of Vowels in your string is: " + count_Vowels(str)+"\n");
        
        outputFile.println("Count of consonants in your string is: " + Count_Consonants(str)+"\n");
        
        outputFile.println("Count of Special Character in your string is: " + Count_SpecialChar(str)+"\n");
        
        outputFile.println("Count of Words in your string is: " + count_Words(str)+"\n");
        

  outputFile.close();
  System.out.println("Data written to the file.");   
  
  Scanner keyboard = new Scanner(System.in);
  
  
  System.out.print("Enter the name of a file: ");
  String filename = keyboard.nextLine();


  File file = new File(filename);
  Scanner inputFile = new Scanner(file);


  String line = inputFile.nextLine();
  
  
}
     
  


  
 public static int count_Vowels(String str)
    {
        int count = 0;
        for (int i = 0; i < str.length(); i++)
        {
            if ((str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i'
                    || str.charAt(i) == 'o' || str.charAt(i) == 'u') 
            	||
            	(str.charAt(i) == 'A' || str.charAt(i) == 'E' || str.charAt(i) == 'I'
                    || str.charAt(i) == 'O' || str.charAt(i) == 'U'))
            {
                count++;
            }
        }
        return count;
    }  


 
public static int Count_Consonants(String str)
{
    int count = 0;
    for (int i = 0; i < str.length(); i++)
    {
        if (
        		(str.charAt(i) != 'a' || str.charAt(i) != 'e' || str.charAt(i) != 'i'
                || str.charAt(i) != 'o' || str.charAt(i) != 'u' )
        	&&
        	
        		(str.charAt(i) != 'A' || str.charAt(i) != 'E' || str.charAt(i) != 'I'
        		|| str.charAt(i) != 'O' || str.charAt(i) != 'U')
        	
    	)
        {
            count++;
        }
    }
 return count;
}
 
 public static int Count_SpecialChar(String str)
 {
     int count = 0;
     for (int i = 0; i < str.length(); i++)
     {
         if (
         		(str.charAt(i) <= 'a'|| str.charAt(i) >= 'z')
         	&&
         	    (str.charAt(i) <= 'A'|| str.charAt(i) >= 'Z')
         	&&
         	    (str.charAt(i) <= '0'|| str.charAt(i) >= '9')
     	)
         {
             count++;
         }
     }
     
     
     return count;
 
}


public static int count_Words(String str)

{
    int wordCount = 0;
    boolean word = false;
    int endOfLine = str.length()-1;

    for (int i = 0; i < str.length(); i++) 
    {
        if (Character.isLetter(str.charAt(i)) && i != endOfLine) 
        {
            word = true;
        } 
        else if (!Character.isLetter(str.charAt(i)) && word) {
            wordCount++;
            word = false;
            
        } else if (Character.isLetter(str.charAt(i)) && i == endOfLine) {
            wordCount++;
        }
    }
    return wordCount;
}

}





