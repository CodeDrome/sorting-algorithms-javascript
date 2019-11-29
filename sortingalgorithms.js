window.onload = function()
{
    setEventHandlers();
}


function setEventHandlers()
{
    document.getElementById("btnBubbleSort").onclick = bubbleSort;
    document.getElementById("btnSelectionSort").onclick = selectionSort;
}


function bubbleSort()
{
    clearConsole("console");

    const data = getRandomData();
    printData(data, null, data.length);

    let last_index = data.length - 2;

    while(last_index >= 0)
    {
        for(let index = 0; index <= last_index; index++)
        {
            if(data[index] > data[index+1])
            {
                swap(data, index, index+1);
            }
        }

        printData(data, null, last_index);

        last_index--;
    }
}


function selectionSort()
{
    clearConsole("console");

    const data = getRandomData();
    printData(data, 0, null);

    let sorted_to = 0;
    let index_of_lowest = 0;
    let data_length = data.length;

    while(sorted_to < data_length - 1)
    {
        index_of_lowest = findLowestIndex(data, sorted_to);

        swap(data, sorted_to, index_of_lowest);

        sorted_to++;

        printData(data, sorted_to, null);
    }
}


function getRandomData()
{
    const size = 16;
    let data = [];

    for(let i = 0; i < size; i++)
    {
        data[i] = parseInt(Math.random() * 128);
    }

    return data;
}


function swap(data, i1, i2)
{
    if(i1 != i2)
    {
        data[i1] = data[i1] ^ data[i2];
        data[i2] = data[i1] ^ data[i2];
        data[i1] = data[i1] ^ data[i2];
    }
}


function findLowestIndex(data, start)
{
    let lowest_index = start;

    for(let i = start, l = data.length; i < l; i++)
    {
        if(data[i] < data[lowest_index])
        {
            lowest_index = i;
        }
    }

    return lowest_index;
}


function printData(data, sorted_to, sorted_from)
{
    let n;

    for(let i = 0, l = data.length; i < l; i++)
    {
        n = String(data[i]).padStart(4, " ").replace(/ /g, "&nbsp;");

        if(sorted_from != null)
        {
            if(i > sorted_from)
                writeToConsole("<span class='greenbg'>" + n + "</span> ", "console");
            else
                writeToConsole("<span class='redbg'>" + n + "</span> ", "console");
        }
        else if(sorted_to != null)
        {
            if(i < sorted_to)
                writeToConsole("<span class='greenbg'>" + n + "</span> ", "console");
            else
                writeToConsole("<span class='redbg'>" + n + "</span> ", "console");
        }
    }

    writeToConsole("<br/>", "console");
}
