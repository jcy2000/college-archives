import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ReadFile {
  public static void main(String[] args) throws FileNotFoundException {
	  Scanner fileReader = new Scanner(new FileInputStream("resources//steam_reviews.csv"));
		  
	  int counter = 0;
	  final int limit = 5000;
	  int timesLimitReached = 0;
	  while(fileReader.hasNextLine()) {
		  String[] variable = fileReader.nextLine().split(",");
		  if(variable.length >= 23) {
			  try {
				  Integer.parseInt(variable[0]);
				  counter++;
				  if(counter == limit)
					  System.out.println(variable[2] + " " + timesLimitReached);
			  }
			  catch(Exception e) {
				  System.out.println("Invalid Input after: " + timesLimitReached);
			  }
		  }
		  
		  if(counter > limit) {
			  counter = 0;
			  timesLimitReached++;
		  }
	  }

	  fileReader.close();
  }
}