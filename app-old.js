import * as http from 'http';

http.createServer((req, res) => {
    // ** CSV
    // res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    // res.writeHead(200, {
    //     'Content-Type' : 'application/csv'
    // });

    // res.write('id, nombre\n');
    // res.write('1, Sergio\n');
    // res.write('2, Andrés\n');
    // res.write('3, Juan\n');

    // res.writeHead(200, {
    //     'Content-Type' : 'application/json'
    // });

    // **JSON**
    // const person = {
    //     id: 1,
    //     firstName: 'Sergio'
    // };

    // res.write(JSON.stringify(person));

    // **404**
    // res.writeHead(404);
    // res.write('404 | Page not found');

    res.write('Hello world!');
    res.end();
}).listen(8080);

console.log('Listening port 8080');