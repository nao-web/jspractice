stooge["first-name"]	//"Jerome"
flight.departure.IATA	//"SYD"

stooge["middle-name"]	//undefined
flight.status			//undefined
stooge.["FIRST_NAME"]	//undefined

var middle = stooge['middle-name'] || "(none)";
var status = flight.status || "unknown";

flight.equipment		//undefined
flight.equipment.model	//"TypeError"が投げられる
flight.equipment && flight.equipment.model	//undefined