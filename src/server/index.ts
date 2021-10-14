import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')))

app.get('/', (req: Request, res: Response) => {
    fs.createReadStream('./dist/client/index.html')
        .pipe(res);
});

app.listen(3000, () => console.log("App's up at 3000."));