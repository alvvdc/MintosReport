

function generateTable() {
    let investmentsLoanOriginators = listAllLoanOriginatorsWithRating();

    for (let i=0; i<investmentsLoanOriginators.length; i++)
    {
        let row = $("<tr>").appendTo("#investmentsLoanOriginatorsTableBody");
        $("<td>").html(investmentsLoanOriginators[i][0]).appendTo(row);
        let rate = $("<td>").html("<span>" + investmentsLoanOriginators[i][1] + "</span>").appendTo(row);

        switch(investmentsLoanOriginators[i][1])
        {
            case "A+":
                $(rate).addClass("ratingColorAPlus");
                break;
            case "A":
                $(rate).addClass("ratingColorA");
                break;
            case "A-":
                $(rate).addClass("ratingColorAMinus");
                break;
            case "B+":
                $(rate).addClass("ratingColorBPlus");
                break;
            case "B":
                $(rate).addClass("ratingColorB");
                break;
        }
    }
    console.log("ejecutado");
}