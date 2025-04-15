using System;
using System.Reflection.Metadata.Ecma335;

namespace ccStudyApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            char letter = 'A';

            Console.WriteLine(letter);

            //When a letter is converted from a 'char' to an 'int', we get the ASCII value of the letter. 
            int asciiA = letter;

            Console.WriteLine(asciiA);

            //The right ASCII value as an int can be converted to a 'char' and return an ASCII character. 
            char someLetter = (char)83;            

            Console.WriteLine(someLetter);

            Terminate();
        }

        static void Terminate()
        {
            Console.WriteLine("Press any key to exit.");

            Console.ReadLine();
        }
    }
}
