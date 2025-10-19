var Year = prompt(" Enter your Birth year:");
    var month = prompt("Enter your birth Month between 1 t0 12:");
    var day = prompt("Enter your birthDay from 1 to 31");

    var birthDate = dayjs(Year + " " + month + " " + day);
    var today = dayjs();
    var years = today.diff(birthDate, "Year");
       var dateAfterYears = birthDate.add(years, "year");
    var months = today.diff(dateAfterYears, "Month");
    var dateAfterMonths =dateAfterYears.add(months, "month");
    var days = today.diff(dateAfterMonths, "Days");
    alert("You are" + years+ " years "+ months +" months and "
      + days + " days old.");

