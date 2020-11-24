
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
			console.log("what the hell");
			console.log(res.body);
			//console.log(outsideResolve);

			'use strict'

			const Excel = require('exceljs')

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




			worksheet.getRow(2).values = [outsideResolve.previousClose.raw, outsideResolve.regularMarketOpen.raw, outsideResolve.regularMarketVolume.raw, 
				outsideResolve.averageDailyVolume10Day.raw, outsideResolve.marketCap.raw, outsideResolve.beta.raw, outsideResolve.dividendRate.raw, 
				outsideResolve.dividendYield.raw, financialData.targetMedianPrice, outsideResolve.priceToSalesTrailing12Montyhs.raw, 'pbRatio', indexTrend.peRatio.raw, 'epsRatio', 'evSalesRatio', 'evEbitdaRatio', 'evNoplatRatio', 'evCapitalRatio'];

			workbook.xlsx.writeFile('Analysis.xlsx');

			return outsideResolve;

			//return resolve(res.body.summaryDetail);

		});

	})
}

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

function didItSave(message, callback) {

	console.log('done');
	console.log(message);
	return callback;

}

console.log(didItSave('It worked!', getToken()));

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
