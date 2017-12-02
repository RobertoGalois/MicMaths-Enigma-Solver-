function	is_format(p_number)
{
	var		string_number;
	var		count1;
	var		count2;

	string_number = p_number.toString();
	count1 = 0;
	if (string_number.length > 1)
	{
		while (count1 < (string_number.length - 1))
		{
			count2 = count1 + 1;
			while (count2 < string_number.length)
			{
				if (string_number[count1] == string_number[count2])
					return (false);

				count2++;
			}

			count1++;
		}
	}

	return (true);
}

/*
** equation : A * B = C
** p_A = number A
** p_n_B = number of digits of B
** p_n_C = number of digits of C
** example: 42 * XXX = XXXX ==> p_A = 42, p_n_B = 3, p_n_C = 4
*/

function show(p_A, p_n_B, p_n_C)
{
	var		i;
	var		found;

	if (((p_A.toString().length) + p_n_B + p_n_C) > 10)
	{
		console.log(window.document.write('No solution.'));
		return (false);
	}

	i = 0;
	found = false;
	while (i < 1000)
	{
		if ((i.toString().length == p_n_B)
			&& ((42 * i).toString().length == p_n_C)
			&& (is_format(p_A.toString() + '' + i + '' + (p_A * i))))
		{
			window.document.write(p_A.toString() + " * " + i + " = " + (p_A * i) + "<br />");
			found = true;
		}

		i++;
	}

	if (!found)
		console.log(window.document.write('No solution.'));

	return (true);
}

show(42, 3, 4);
