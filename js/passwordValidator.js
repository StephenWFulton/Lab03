function validateText()
		{
			var p1 = document.getElementById("firstPass").value;
			var p2 = document.getElementById("secondPass").value;
			if(p1 != p2)
			{
				alert("Passwords don't match!");
			}
			else if(p1.length < 8)
			{
				alert("Password is less than 8 characters!");
			}
			else
			{
				alert("Passwords match!");
			}
		} 
