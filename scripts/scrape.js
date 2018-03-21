// Scrape Request
request('https://www.nytimes.com/', function (error, response, html) {
    var $ = cheerio.load(html);
    var results = [];
    $('h1.AssetHeadline-headline').each(function (i, element) {
        var title = $(element).text();
        var link = $(element).parent().attr('href');
        results.push({
            title: title,
            link: link
        });
    });
    console.log(results);
});
