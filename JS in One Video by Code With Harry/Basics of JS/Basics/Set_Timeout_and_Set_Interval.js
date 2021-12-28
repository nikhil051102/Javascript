// //1.
// dummyfunction ()
// {
//     console.log("I am Dummy Function");
// }

//2/
dummyfunction = () =>
{
    console.log("I am Dummy Function");
}

// setTimeout(dummyfunction(), 5000); //Here function dummyfunction() is called after 1000 milisecond i.e 1 second.

//Above function will be called untill we close webpage so to stop that we use
clr = setTimeout(dummyfunction(), 5000);
clearInterval(clr);
//use clearInterval() or clearTimeout to cancel setInterval or setTimeout