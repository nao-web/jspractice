request = prepare_the_request();
response = send_request_synchronously(request);
display(response);

resquest = prepare_the_request();
send_request_synchronously(request, function (response){
	display(response);
});