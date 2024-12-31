call stack                                                          browser




                    event loop
                                  

                                    call back queue


all the synchronous code get into the call stack. asynchronous code call stack mey aane par  broser 
ke pas chale jaayega.Broser mey time khataam kahtaam ke baad call back queue mey jayega asynchronous codesss.
event loop chevk krega if call stack is empty, then it will push the asynchronous code from call back queue 
to call stack in which the code gets executed.