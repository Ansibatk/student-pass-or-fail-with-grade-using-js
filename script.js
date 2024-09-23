function studentGrade()
{
 let input=document.querySelector("#grade-input").value;
 let box=document.getElementById("box")
 let h2Tag=document.getElementById("display-grade")
 if(input>=90)
 {
    h2Tag.textContent =("passed with Grade A+");
 }
    else if(input>=80&&input<=89)
    {
        h2Tag.textContent =("passed with Grade A");
    }
        else if(input>=70&&input<=79)
        {
            h2Tag.textContent =("passed with Grade B+");
        }
            else if(input>=60&&input<=69)
            {
                h2Tag.textContent =("passed with Grade B");
            }
                else if(input>=50&&input<=59)
                {
                    h2Tag.textContent =("passed with Grade C+");
                }
                    else if(input>=40&&input<=49)
                    {
                        h2Tag.textContent =("passed with Grade C");
                    }
                        else if(input>=30&&input<=39)
                        {
                            h2Tag.textContent =("passed with Grade D+");
                        }
                            else if(input>=20&&input<=29)
                            {
                                h2Tag.textContent =("failed with Grade D");
                            }
 else 
 {
    h2Tag.textContent =("failed with Grade E");
 }
} 