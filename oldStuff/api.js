/*var unirest = require("unirest");

var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis");



req.query({
	"symbol": "AMZN",
	"region": "US"
});

req.headers({
	"x-rapidapi-key": "1533a9d4e8mshd712bcfcd787009p1f716ajsn05c267c4210d",
	"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
	"useQueryString": true
});*/

//const { readFile } = require("fs");

//new File([""], "Analysis.xlsx");

var outsideResolve;
var outsideReject;
var financialData;
var indexTrend;


function getToken() {
	return new Promise((resolve, reject) => {
		
		var unirest = require("unirest");

		var req = unirest("GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis");



		req.query({
			"symbol": "AMZN",
			"region": "US"
		});

		req.headers({
			"x-rapidapi-key": "1533a9d4e8mshd712bcfcd787009p1f716ajsn05c267c4210d",
			"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
			"useQueryString": true
		});

		req.end(function (res) {
			if (res.error) return reject(res.error);
			outsideResolve = res.body.summaryDetail;
			financialData = res.body.financialData;
			indexTrend = res.body.indexTrend;
			//console.log("what the hell");
			//console.log(res.body);
			//console.log(outsideResolve);

			'use strict';

			const fs = require('fs');



			//APIData = JSON.parse(sessionStorage.getItem('APIData')) || {};

			let APIData = {
				'previousClose': ((outsideResolve.previousClose.raw === 'undefined') ? 'N/A' : outsideResolve.previousClose.raw),
				'Open': ((outsideResolve.regularMarketOpen.raw === 'undefined') ? 'N/A' : outsideResolve.regularMarketOpen.raw),
				'Volume': ((outsideResolve.regularMarketVolume.raw === 'undefined') ? 'N/A' : outsideResolve.regularMarketVolume.raw),
				'averageVolume': ((outsideResolve.averageDailyVolume10Day.raw === 'undefined') ? 'N/A' : outsideResolve.averageDailyVolume10Day.raw),
				'marketCap': ((outsideResolve.marketCap.raw === 'undefined') ? 'N/A' : outsideResolve.marketCap.raw),
				'Beta': ((outsideResolve.beta.raw === 'undefined') ? 'N/A' : outsideResolve.beta.raw),
				'DPS': ((outsideResolve.dividendRate.raw === 'undefined') ? 'None' : outsideResolve.dividendRate.raw),
				'dividendYield': ((outsideResolve.dividendYield.raw === 'undefined') ? 'N/A' : outsideResolve.dividendYield.raw),
				'targetPrice': ((financialData.targetMedianPrice.raw === 'undefined') ? 'N/A' : financialData.targetMedianPrice.raw),
				'psRatio': ((outsideResolve.priceToSalesTrailing12Months.raw === 'undefined') ? 'N/A' : outsideResolve.priceToSalesTrailing12Months.raw),
				'pbRatio': 'pbRatio',
				'peRatio': ((indexTrend.peRatio.raw === 'undefined') ? 'N/A' : indexTrend.peRatio.raw),
			};

			

			//localStorage.setItem('APIData', JSON.stringify(APIData));

			var APIDataFinal = JSON.stringify(APIData);
			var datajson = fs.readFileSync(`APIData.js`);
			//var data = JSON.parse(datajson);

			var newData = Object.assign({}, API, APIDataFinal);
			fs.writeFileSync('APIData.json', APIDataFinal);

			

			
			//fs.writeFileSync('APIData.js', createObject);
			//global.globalString=APIDataFinal;
			//console.log(global.globalString);
			//exports.globalData = APIDataFinal;
			//var globaldata = require('./globalData.js');
			//globaldata = APIDataFinal;





			/*const Excel = require('exceljs')

			// need to create a workbook object. Almost everything in ExcelJS is based off of the workbook object.
			let workbook = new Excel.Workbook()

			let worksheet = workbook.addWorksheet('Analysis')

			worksheet.columns = [
				{ header: 'Previous Close', key: 'previousClose' },
				{ header: 'Open', key: 'open' },
				{ header: 'Volume', key: 'volume' },
				{ header: 'Average Volume', key: 'averageVolume' },
				{ header: 'Market Cap', key: 'marketCap' },
				{ header: 'Beta', key: 'beta' },
				{ header: 'DPS', key: 'dps' },
				{ header: 'Dividend Yield', key: 'dividendYield' },
				{ header: '1 Yr Target Price', key: '1YrTargetPrice' },
				{ header: 'P/S Ratio', key: 'psRatio' },
				{ header: 'P/B Ratio', key: 'pbRatio' },
				{ header: 'P/E Ratio', key: 'peRatio' },
				{ header: 'EPS Ratio', key: 'epsRatio' },
				{ header: 'EV/Sales Ratio', key: 'evSalesRatio' },
				{ header: 'EV/EBITDA Ratio', key: 'evEbitdaRatio' },
				{ header: 'EV/NOPLAT Ratio', key: 'evNoplatRatio' },
				{ header: 'EV/Capital Ratio', key: 'evCapitalRatio' },
			]




			worksheet.getRow(2).values = [((outsideResolve.previousClose.raw === 'undefined') ? 'N/A' : outsideResolve.previousClose.raw), ((outsideResolve.regularMarketOpen.raw === 'undefined') ? 'N/A' : outsideResolve.regularMarketOpen.raw), ((outsideResolve.regularMarketVolume.raw === 'undefined') ? 'N/A' : outsideResolve.regularMarketVolume.raw),
			((outsideResolve.averageDailyVolume10Day.raw === 'undefined') ? 'N/A' : outsideResolve.averageDailyVolume10Day.raw), ((outsideResolve.marketCap.raw === 'undefined') ? 'N/A' : outsideResolve.marketCap.raw), ((outsideResolve.beta.raw === 'undefined') ? 'N/A' : outsideResolve.beta.raw), ((outsideResolve.dividendRate.raw === 'undefined') ? 'N/A' : outsideResolve.dividendRate.raw),
			((outsideResolve.dividendYield.raw === 'undefined') ? 'N/A' : outsideResolve.dividendYield.raw), ((financialData.targetMedianPrice.raw === 'undefined') ? 'N/A' : financialData.targetMedianPrice.raw), ((outsideResolve.priceToSalesTrailing12Months.raw === 'undefined') ? 'N/A' : outsideResolve.priceToSalesTrailing12Months.raw),
				'pbRatio', ((indexTrend.peRatio.raw === 'undefined') ? 'N/A' : indexTrend.peRatio.raw), 'epsRatio', 'evSalesRatio', 'evEbitdaRatio', 'evNoplatRatio', 'evCapitalRatio'];



			workbook.xlsx.writeFile('Analysis.xlsx');*/




			return APIDataFinal;



			//return resolve(res.body.summaryDetail);

		});

	})
}

/*function gbid(s) { return document.getElementById(s); }

function GetData(filename, id, cell, row) {
	//readFile(filename);
	var excel_file = excel.Workbooks.Open("I:\\Analysis.xlsx");
	var sht = excel.Worksheets("Sheet1");

	document.getElementById(id).innerText = sht.Cells(cell, row).Value;

	excel_file.Close();
	excel.Quit();


}*/




//getToken().then(myAsyncFunc);

//output = getToken();

//getToken().then(body => {array = body; } )=> console.log("success", body).catch((error) => 
//console.log("error", error)));





//console.log(getToken());

/*req.end(function (res, ) {
	if (res.error) throw new Error(res.error);
	console.log(res.body.summaryDetail);
});*/


//console.log(response);





/*function getData(id) {

	'use strict';

	//var requirejs = require("requirejs");

	//const fs = require('fs');

	//let rawdata = fs.readFileSync('APIData.json');
	let apidata = JSON.parse('APIData.json');
	//console.log(apidata);

	//console.log("yeet");
	//console.log(apidata.Open);

	//document.getElementById(id).innerHTML = JSON.stringify(apidata.Open);
	//lert('success');
	//return apidata[0];
};*/




function didItSave(message, callback) {

	console.log('done');
	console.log(message);
	return callback;

}

//console.log(didItSave('It worked!', getToken()));

/*'use strict'

const Excel = require('exceljs')

// need to create a workbook object. Almost everything in ExcelJS is based off of the workbook object.
let workbook = new Excel.Workbook()

let worksheet = workbook.addWorksheet('Analysis')

worksheet.columns = [
	{ header: 'Previous Close', key: 'previousClose' },
	{ header: 'Open', key: 'open' },
	{ header: 'Volume', key: 'purchasePrice' },
	{ header: 'Average Volume', key: 'averageVolume' },
	{ header: 'Market Cap', key: 'marketCap' },
	{ header: 'Beta', key: 'beta' },
	{ header: 'DPS', key: 'dps' },
	{ header: 'Dividend Yield', key: 'dividendYield' },
	{ header: '1 Yr Target Price', key: '1YrTargetPrice' },
	{ header: 'P/S Ratio', key: 'psRatio' },
	{ header: 'P/B Ratio', key: 'pbRatio' },
	{ header: 'P/E Ratio', key: 'peRatio' },
	{ header: 'EPS Ratio', key: 'epsRatio' },
	{ header: 'EV/Sales Ratio', key: 'evSalesRatio' },
	{ header: 'EV/EBITDA Ratio', key: 'evEbitdaRatio' },
	{ header: 'EV/NOPLAT Ratio', key: 'evNoplatRatio' },
	{ header: 'EV/Capital Ratio', key: 'evCapitalRatio' },
]




worksheet.getRow(2).values = [outsideResolve.previousClose.raw, outsideResolve.regularMarketOpen.raw, 'purchasePrice', 'averageVolume', 'marketCap', 'beta', 'dps', 'dividendYield', '1YrTargetPrice', 'psRatio', 'pbRatio', 'peRatio', 'epsRatio', 'evSalesRatio', 'evEbitdaRatio', 'evNoplatRatio', 'evCapitalRatio'];


//var array;

/*const myAsyncFunc = (result) => {
	array = result;
	console.log(array);
	//worksheet.getRow(2).values

 };




//console.log(outsideresolve);



workbook.xlsx.writeFile('Analysis.xlsx');*/

async function setData() {
	var x = await getToken();
	//var msg = require('./globalData.js');
	//(async () => console.log(await getToken()))()
	console.log(await(getToken()));
}

console.log(setData());

