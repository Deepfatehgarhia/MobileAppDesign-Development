
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;
import javax.swing.JOptionPane;

import com.mysql.cj.protocol.Resultset;

public class Main {
	
  
	private int m_Student_id;
	private String m_first_name;
    private String m_last_name;
    private int m_age;
    private String m_course;
    private String m_term1;
    private int m_mobile_Number;
	private float m_gpa;

    public Main(int Student_ID,String first_name, String last_name,int age, String course, String term1, int mobile_Number, float gpa )
    {
        this.m_first_name = first_name;
        this.m_last_name = last_name;
        this.m_age = age;
        this.m_course = course;
        this.m_term1 = term1;
        this.m_mobile_Number = mobile_Number;
        this.m_gpa= gpa;
    }
    
    public int getStudentID()
    {
        return m_Student_id;
    }

    public String getFirstName()
    {
        return m_first_name;
    }

    public String getLastName()
    {
        return m_last_name;
    }

    public int getAge()
    {
        return m_age;
    }

    public String getCourse()
    {
        return m_course;
    }

    public String getterm1()
    {
        return m_term1;
    }

    public int getmMobileNumber()
    {
        return m_mobile_Number;
    }

    public float getGPA()
    {
        return m_gpa;
    }


    
    // Main Function.
	public static void main(String[] args) throws Exception 
	{
		 int student_ID = 0;
		 create_table();
		ArrayList<Main> students = new ArrayList<Main>();
	       Scanner input = new Scanner(System.in);
	       	
	     
	       int menuChoice=4 ;
	       
	       
	       do {
	           System.out.println("\n\n\t\t\tStudent Record Menu\n");
	           System.out.println("\t\t1. Add Student\t\t2. View Students\n\n"+"\t\t3. Search Student\t4. Exit");
	           try {
	               System.out.print("\nEnter a choice: \t");
	               menuChoice = Integer.parseInt(input.nextLine());
	           } catch (NumberFormatException e) {
	              
	           }
	      
	      switch (menuChoice) 
	      {
	      	
	      
	           case 1:
	           
				               System.out.print("\nFirst name: \t");
				               String first_name = input.nextLine();
				               
				               System.out.print("\nLast name: \t");
				               String last_name = input.nextLine();
				               
				               int age = -1;
				               do {
				                   try {
				                       System.out.print("\nAge:\t");
				                       age = Integer.parseInt(input.nextLine());
				                   } catch (NumberFormatException e) {
				                       System.out.print("\tEnter a number! \n");
				                       continue;
				                   }
				               } while (age <= 0);
				               

				               System.out.print("\nCourse:\t");
				               String course = input.nextLine();

				               System.out.print("\nTerm:\t");
				               String term1 = input.nextLine();

				               int mobile_Number= 0;
				               do {
				                   try {
				                       System.out.print("\nMobile_Number:\t");
				                       mobile_Number = Integer.parseInt(input.nextLine());
				                   } catch (NumberFormatException e) {
				                       System.out.println("\tEnter valid mobile number!\n");
				                       continue;
				                   }
				               } while (mobile_Number <= 0);
				             
				               System.out.println("\nEnter your GPA:\t");
				               float gpa = input.nextFloat();
				               
				       
				               System.out.println("Congratulations! your data has been added Successfully.");               
	           break;    
	           
	           case 2: 
	           
					               System.out.println("\nReally Want to Check Data of all Students?\n");
					               System.out.println("Proced with the following option\n");
					               System.out.println("1. YES" +"\t\t"+" 0. NO");
					          
					               int option1;
					               option1 = Integer.parseInt(input.nextLine());
					               
					               switch (option1)
					               {
					               		case 1: 	
					            	   		get();
					               			System.out.println("\n\n\n\n\n Data of all students ha been printed on your display device request you check and proceed with next option. ");
					               			System.out.println("\n\n\n\n\n");
					               			System.out.println(" Do you want to See Data by sorting? ");
					               			System.out.println("");
					               			System.out.println(" (1)   Yes"+"\t"+"(0)  No ");
							               						int option2;
							               						option2 = Integer.parseInt(input.nextLine());
										               			switch(option2)
										               			{
										               				case 1:
										               				
											               				System.out.println(" Select any option form the following by which you want to do sorted data.");
											               				System.out.println("\n");
											               				System.out.println(" (1) : First Name \n" + 
											               								   " (2) : Last Name \n" + 
											               								   " (3) : Course ");
												               				int option3;
										               						option3 = Integer.parseInt(input.nextLine());
												               				switch (option3)
												               				{
													               				case 1: sortByFirstName();
											
													               				break;
													               				
													               				case 2: sortByLastName();

													               				break;
													               				
													               				case 3: sortByCourse();
													               				
													               				break;

													               				default:
													               				System.out.println("Sorrry! Try another option.");

																			}

												               		case 0:

												               		System.out.println("Thank You and Run Again this progrom from staring.");
												               		break;

												               		default:
													               	System.out.println("Sorrry! Try another option.");


												               	}		
										break;
						               case 0:

									   	System.out.println("Thank You and Run Again this progrom from staring.");
										break;   
										                  
						               default:
										System.out.println("Sorrry! Try another option.");
									}
			  break;

	          case 3:  
		          
					        System.out.print ("Enter Student Id of the student: \t\t\t");
					       	 student_ID = Integer.parseInt(input.nextLine());
					       	fetch_data(student_ID);
					        	  
					        	  System.out.println("\n\n Please check whether data is Correct or not.\n" + 
					        			  			 "  If not, please follow Below Option:    \n" +
					        			  			 "   (1.) DELETE  \t" + " (2.) UPDATE   \n");
					        	  int option4;
			 					  option4 = Integer.parseInt(input.nextLine());
			 					  switch(option4)
			 					  {
				 					 case 1: delete_from_db(student_ID);
				 					 
				 					 		System.out.println(" Student record deleted Successfully. ");
				 					 
				 					 break;
				 					 
				 					 case 2: 
					 						System.out.print("\nFirst name: \t");
					 		               first_name = input.nextLine();
					 		               
					 		               System.out.print("\nLast name: \t");
					 		              last_name = input.nextLine();
					 		               
					 		               age = -1;
					 		               do {
					 		                   try {
					 		                       System.out.print("\nAge:\t");
					 		                       age = Integer.parseInt(input.nextLine());
					 		                   } catch (NumberFormatException e) {
					 		                       System.out.print("\tEnter a number! \n");
					 		                       continue;
					 		                   }
					 		               } while (age <= 0);
					 		               
					
					 		               System.out.print("\nCourse:\t");
					 		           		course = input.nextLine();
					
					 		               System.out.print("\nTerm:\t");
					 		               term1 = input.nextLine();
					
					 		               int mobile_Number2=0;
					 		               do {
					 		                   try {
					 		                       System.out.print("\nMobile_Number:\t");
					 		                       mobile_Number = Integer.parseInt(input.nextLine());
					 		                   } catch (NumberFormatException e) {
					 		                       System.out.println("\tEnter valid mobile number!\n");
					 		                       continue;
					 		                   }
					 		               } while (mobile_Number2 > 0);
					 		             
					 		               System.out.println("\nEnter your GPA:\t");
					 		               gpa = input.nextFloat();
			 		               
											update_db( student_ID, first_name, last_name,age,course,term1,mobile_Number2,gpa);
											System.out.println("Data updated Successfully.");
				 					 break;

				 					 default:
										System.out.println("Sorrry! Try another option.");
			 					  }
	            break; 

	       		case 4:
	       			    System.out.println ("Thank you and good bye.");
	    				break;

	    		 default:
										System.out.println("Sorrry! we don't have such option so please try from available options.");
				break;						
	     }
	}while(menuChoice<4);
	}




	



	//Sorting Data
	public static ArrayList<String> sortByFirstName() throws Exception{
	try {
		String selectQuery="Select * from Student_data.Student_detail order by Firstname ;";
		Connection connect = getconnection();
		PreparedStatement statement= connect.prepareStatement(selectQuery);
		
		ResultSet result = statement.executeQuery();
		System.out.print("StudentID \tFirstName \tLastName \tAge \tcourse \tTerm \tMobile_Number \tGPA \tDOB \n");
		System.out.print("\n");
		
		ArrayList<String> array = new ArrayList<String>();
		while(result.next())
		{
			System.out.println(
								result.getInt("StudentID") + "\t\t" +
								result.getString("FirstName") + "\t\t" +
								result.getString("LastName") +  "\t\t" +
								result.getInt("Age") +  "\t" +
								result.getString("course") +  "\t" +
								result.getString("Term") +  "\t" +
								result.getInt("Mobile_Number") +  "\t\t" +
								result.getInt("GPA") +  "\t" +
								result.getString("DOB")); 

			array.add(result.getString("DOB"));
		} return array;
 }
         catch (Exception e) 
         {
            JOptionPane.showMessageDialog(null, e.toString());
        }
        return null;
	}	
	/* LastName */
	public static ArrayList<String> sortByLastName() throws Exception{
		try {
			String selectQuery="Select * from Student_data.Student_detail order by lastname ;";
			Connection connect = getconnection();
			PreparedStatement statement= connect.prepareStatement(selectQuery);
			
			ResultSet result = statement.executeQuery();
			System.out.print("StudentID \tFirstName \tLastName \tAge \tcourse \tTerm \tMobile_Number \tGPA \tDOB \n");
			System.out.print("\n");
			
			ArrayList<String> array = new ArrayList<String>();
			while(result.next())
			{
				System.out.println(
									result.getInt("StudentID") + "\t\t" +
									result.getString("FirstName") + "\t\t" +
									result.getString("LastName") +  "\t\t" +
									result.getInt("Age") +  "\t" +
									result.getString("course") +  "\t" +
									result.getString("term") +  "\t" +
									result.getInt("Mobile_Number") +  "\t\t" +
									result.getInt("GPA") +  "\t" +
									result.getString("DOB")); 

				array.add(result.getString("DOB"));
			} return array;
	 }
	         catch (Exception e) 
	         {
	            JOptionPane.showMessageDialog(null, e.toString());
	        }
	        return null;
		}	
	/* Course */
	public static ArrayList<String> sortByCourse() throws Exception{
		try {
			String selectQuery="Select * from Student_data.Student_detail order by course ;";
			Connection connect = getconnection();
			PreparedStatement statement= connect.prepareStatement(selectQuery);
			
			ResultSet result = statement.executeQuery();
			System.out.print("StudentID \tFirstName \tLastName \tAge \tcourse \tTerm \tMobile_Number \tGPA \tDOB \n");
			System.out.print("\n");
			
			ArrayList<String> array = new ArrayList<String>();
			while(result.next())
			{
				System.out.println(
									result.getInt("StudentID") + "\t\t" +
									result.getString("FirstName") + "\t\t" +
									result.getString("LastName") +  "\t\t" +
									result.getInt("Age") +  "\t" +
									result.getString("course") +  "\t" +
									result.getString("term") +  "\t" +
									result.getInt("Mobile_Number") +  "\t\t" +
									result.getInt("GPA") +  "\t" +
									result.getString("DOB")); 

				array.add(result.getString("DOB"));
			} return array;
	 }
	         catch (Exception e) 
	         {
	            JOptionPane.showMessageDialog(null, e.toString());
	        }
	        return null;
		}	
	
	
	// View Students from data base.
	public static ArrayList<String> get() throws Exception{
		try {
			String selectQuery="Select * from Student_data.Student_detail";
			Connection connect = getconnection();
			PreparedStatement statement= connect.prepareStatement(selectQuery);
			
			ResultSet result = statement.executeQuery();
			System.out.print("StudentID \tFirstName \tLastName \tAge \tcourse \tTerm \tMobile_Number \tGPA \tDOB \n");
			System.out.print("\n");
			
			ArrayList<String> array = new ArrayList<String>();
			while(result.next())
			{
				System.out.println(
									result.getInt("StudentID") + "\t\t" +
									result.getString("FirstName") + "\t\t" +
									result.getString("LastName") +  "\t\t" +
									result.getInt("Age") +  "\t" +
									result.getString("course") +  "\t" +
									result.getString("term") +  "\t" +
									result.getInt("Mobile_Number") +  "\t\t" +
									result.getInt("GPA") +  "\t" +
									result.getString("DOB")); 

				array.add(result.getString("DOB")
						);		
				}return array;
		} 
		 catch (Exception e) 
        {
           JOptionPane.showMessageDialog(null, e.toString());
       }
       return null;
	}

	// Update student record
	
	public static ArrayList<String> fetch_data(int std_id) throws Exception,ClassNotFoundException
	{
		try {
			String selectQuery="Select * from Student_data.Student_detail where StudentID=" + std_id +";";
			Connection connect = getconnection();
			PreparedStatement statement= connect.prepareStatement(selectQuery);
			
			ResultSet result = statement.executeQuery();
			System.out.print("StudentID \tFirstName \tLastName \tAge \tcourse \tterm \tMobile_Number \tGPA \tDOB \n");
			System.out.print("\n");
			
			ArrayList<String> array = new ArrayList<String>();
			while(result.next())
			{

				System.out.println(
									result.getInt("StudentID") + "\t\t" +
									result.getString("FirstName") + "\t\t" +
									result.getString("LastName") +  "\t\t" +
									result.getInt("Age") +  "\t" +
									result.getString("course") +  "\t" +
									result.getString("term") +  "\t" +
									result.getInt("Mobile_Number") +  "\t\t" +
									result.getInt("GPA") +  "\t" +
									result.getString("DOB")); 
									
				result.updateString(1, getInt("StudentID"));
				}return array;
		} 
		 catch (Exception e) 
        {
          //JOptionPane.showMessageDialog(null, e.toString());
       }
       return null;
	}
	
	
	// Delete Data from Student table
	
	private static String getInt(String string) {
		// TODO Auto-generated method stub
		return null;
	}
	

	public static int delete_from_db(int std_id) throws Exception, ClassNotFoundException
	{
		int delete = 0;
		try {
			  
			  String deleteQuery="Delete From Student_data.Student_detail where StudentId =" + std_id +";"; 
			  Connection connect = getconnection();
			  PreparedStatement ps = connect.prepareStatement(deleteQuery);
			  
			  delete = ps.executeUpdate();
			  
			}
		catch(SQLException ex)
		{
			JOptionPane.showMessageDialog(null,"ex");
			  
		} 
		return delete;			
	} 
	


	// Update Data from Student table
	
	public static int update_db (int std_id,String first_name, String last_name,int age,String course,String term1,int mobile_Number,float gpa) throws Exception, ClassNotFoundException
	{
		int update = 0;
		try {
			Connection connect = getconnection();
			  String updateQuery="update Student_data.Student_detail set first_name="+first_name+",lastname="+last_name+",age="+age+"course="+course+",term1="+term1+",mobile_Number="+mobile_Number+",gpa="+gpa+" where StudentId =" + std_id +";"; 
			  
			  PreparedStatement ps = connect.prepareStatement(updateQuery);
			  ps.setInt(1, std_id);
			  ps.setString(2, first_name);
			  ps.setString(3, last_name);
			  ps.setInt(4, age);
			  ps.setString(5, course);
			  ps.setString(6, term1);
			  ps.setInt(7, mobile_Number);
			  ps.setFloat(8,gpa);
			
			 
			 
			 
			  update = ps.executeUpdate();
			  
			}
		catch(SQLException ex)
		{
			JOptionPane.showMessageDialog(null,"ex");
			  
		} 
		return update;			
	} 
	

	// input method for inserting data into Database
	
	public static int insert_into_db (String first_name, String last_name,int age,String course,String term1,int mobile_Number,float gpa) throws Exception, ClassNotFoundException
	{
		int insert = 0;
		try {
			  
			  String insertQuery="insert into Student_data.Student_detail (FirstName,LastName,Age,course,term1,Mobile_Number,GPA) values(?,?,?,?,?,?,?)"; 
			  Connection connect = getconnection();
			  PreparedStatement ps = connect.prepareStatement(insertQuery);
			  ps.setString(1, first_name);
			  ps.setString(2, last_name);
			  ps.setInt(3, age);
			  ps.setString(4, course);
			  ps.setString(5, term1);
			  ps.setInt(6, mobile_Number);
			  ps.setFloat(7,gpa);
			  
			  insert = ps.executeUpdate();
			  
			  
			}
		catch(Exception e)
		{
		System.out.println(e);
		} 
		return insert;			
	} 

	
	
	
	// Creating a function to make table in DB.
	public static void create_table() throws Exception
	{
		try {
			  Connection connect = getconnection();
			 
			  PreparedStatement create = connect.prepareStatement( "create table if not exists Student_data.Student_detail \n" + 
																	"(\n" + 
																	"StudentID int not null Auto_increment primary key, \n" + 
																	"FirstName Varchar(255), \n" + 
																	"LastName varchar(255), \n" + 
																	"Age int, \n" + 
																	"course varchar(100), \n" +
																	"term1 Varchar(100), \n" +
																	"Mobile_Number int, \n" + 
																	"GPA int, \n" + 
																	"DOB Date \n" +	
																	");"
																	);
			  create.executeUpdate();
			}
		catch(Exception e)
		{
		System.out.println(e);
		} 
		}			
	 

	
	// this method is trying to establish connection with DB.
	public static Connection getconnection() throws Exception
	{
		try {
			 	String driver ="com.mysql.jdbc.Driver";
			 	String url="jdbc:mysql://localhost/Student_data?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC";
			 	String username="root";
			 	String password="Bakhshl@2";
			 	Class.forName(driver);
			
				// Setup the connection with the DB
				Connection connect = DriverManager.getConnection(url,username,password);
				return connect;
			} 
		catch(Exception e)
			{
			System.out.println(e);
			} 
		return null;
	}

}	